import { Webhook } from "@creem_io/nextjs";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Lazy-initialized service role client (avoids build-time errors when env vars are missing)
let _supabase: SupabaseClient | null = null;
function getSupabase(): SupabaseClient {
  if (!_supabase) {
    _supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
  }
  return _supabase;
}

/**
 * Upsert subscription record with idempotency (provider_event_id UNIQUE)
 */
async function upsertSubscription(payload: {
  webhookId: string;
  id: string;
  product: { name: string };
  customer: string | { id: string };
  status: string;
  current_period_start_date?: Date;
  current_period_end_date?: Date;
  metadata?: Record<string, unknown>;
}) {
  const userId = payload.metadata?.referenceId as string | undefined;
  if (!userId) {
    console.warn("[Creem Webhook] Missing referenceId in metadata:", payload.metadata);
    return null;
  }

  const plan = payload.product.name.toLowerCase().includes("team") ? "Team" : "Pro";
  const customerId = typeof payload.customer === "string" ? payload.customer : payload.customer.id;

  const { error } = await getSupabase().from("subscriptions").upsert(
    {
      user_id: userId,
      plan,
      status: payload.status as "active" | "trialing" | "past_due" | "canceled" | "expired" | "unpaid",
      provider: "creem",
      provider_subscription_id: payload.id,
      provider_customer_id: customerId,
      provider_event_id: payload.webhookId,
      current_period_start: payload.current_period_start_date?.toISOString() ?? null,
      current_period_end: payload.current_period_end_date?.toISOString() ?? null,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "provider_event_id" }
  );

  if (error) {
    console.error("[Creem Webhook] upsert failed:", error);
    throw error;
  }

  return { userId, plan };
}

/**
 * Sync credits based on subscription plan
 */
async function syncCredits(userId: string, plan: string, periodEnd?: Date | null) {
  let total: number;
  switch (plan) {
    case "Team":
      total = 999999;
      break;
    case "Pro":
      total = 2000;
      break;
    default:
      total = 5;
  }

  const { error } = await getSupabase().from("credits").upsert(
    {
      user_id: userId,
      total,
      used: 0,
      reset_at: periodEnd?.toISOString() ?? null,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" }
  );

  if (error) {
    console.error("[Creem Webhook] credits sync failed:", error);
    throw error;
  }

  console.log(`[Creem Webhook] Credits synced: ${plan} → ${total} for ${userId}`);
}

/**
 * Update subscription status without changing credits
 */
async function updateSubscriptionStatus(
  id: string,
  status: "canceled" | "expired" | "past_due",
  webhookId: string,
  metadata?: Record<string, unknown>
) {
  const userId = metadata?.referenceId as string | undefined;
  if (!userId) {
    console.warn("[Creem Webhook] Missing referenceId:", metadata);
    return;
  }

  const { error } = await getSupabase()
    .from("subscriptions")
    .update({
      status,
      provider_event_id: webhookId,
      updated_at: new Date().toISOString(),
    })
    .eq("provider_subscription_id", id)
    .eq("user_id", userId);

  if (error) {
    console.error("[Creem Webhook] status update failed:", error);
    throw error;
  }

  // On expiration, downgrade credits to Free
  if (status === "expired") {
    await syncCredits(userId, "Free", null);
  }
}

export const POST = Webhook({
  webhookSecret: process.env.CREEM_WEBHOOK_SECRET!,

  // ===== Subscription paid (recurring payment) =====
  onSubscriptionPaid: async (payload) => {
    const result = await upsertSubscription({
      ...payload,
      status: "active",
    });
    if (result) {
      await syncCredits(result.userId, result.plan, payload.current_period_end_date);
      console.log(`[Creem] Subscription paid → ${result.plan} for ${result.userId}`);
    }
  },

  // ===== Subscription activated (first activation) =====
  onSubscriptionActive: async (payload) => {
    const result = await upsertSubscription({
      ...payload,
      status: "active",
    });
    if (result) {
      await syncCredits(result.userId, result.plan, payload.current_period_end_date);
      console.log(`[Creem] Subscription active → ${result.plan} for ${result.userId}`);
    }
  },

  // ===== Subscription expired =====
  onSubscriptionExpired: async (payload) => {
    await updateSubscriptionStatus(payload.id, "expired", payload.webhookId, payload.metadata);
    console.log(`[Creem] Subscription expired → ${payload.id}`);
  },

  // ===== Subscription canceled =====
  onSubscriptionCanceled: async (payload) => {
    await updateSubscriptionStatus(payload.id, "canceled", payload.webhookId, payload.metadata);
    console.log(`[Creem] Subscription canceled → ${payload.id}`);
  },

  // ===== Subscription unpaid =====
  onSubscriptionUnpaid: async (payload) => {
    await updateSubscriptionStatus(payload.id, "past_due", payload.webhookId, payload.metadata);
    console.log(`[Creem] Subscription unpaid → ${payload.id}`);
  },
});