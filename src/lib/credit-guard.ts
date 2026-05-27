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

export interface CreditGuardResult {
  allowed: boolean;
  plan: "Free" | "Pro" | "Team";
  creditsRemaining: number;
  reason?: "CREDITS_EXHAUSTED" | "NO_USER";
  upgradeUrl?: string;
}

/**
 * Credit guard: checks if user can generate a video.
 *
 * - Free plan: allowed if used < total (default 5/day)
 * - Pro/Team with active status: always allowed
 * - Pro/Team inactive: fall back to Free check
 */
export async function creditGuard(userId: string): Promise<CreditGuardResult> {
  // Fetch subscription
  const { data: sub } = await getSupabase()
    .from("subscriptions")
    .select("plan, status")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  const plan = sub?.plan ?? "Free";
  const isActive = sub?.status === "active" || sub?.status === "trialing";

  // Pro/Team active → unlimited
  if ((plan === "Pro" || plan === "Team") && isActive) {
    return {
      allowed: true,
      plan: plan as "Pro" | "Team",
      creditsRemaining: plan === "Team" ? 999999 : 2000,
    };
  }

  // Free or inactive Pro/Team → check credits
  const { data: credits, error: creditsError } = await getSupabase()
    .from("credits")
    .select("total, used")
    .eq("user_id", userId)
    .single();

  // Table does not exist — fallback to default allowance
  if (creditsError?.code === "PGRST205") {
    return {
      allowed: true,
      plan: "Free",
      creditsRemaining: 5,
    };
  }

  // Auto-create default Free credits for new users
  if (!credits) {
    const { data: newCredits } = await getSupabase()
      .from("credits")
      .upsert({
        user_id: userId,
        total: 5,
        used: 0,
        reset_at: new Date(Date.now() + 86400000).toISOString(),
      })
      .select("total, used")
      .single();
    return newCredits
      ? { allowed: true, plan: "Free", creditsRemaining: newCredits.total }
      : { allowed: false, plan: "Free", creditsRemaining: 0, reason: "NO_USER", upgradeUrl: "/pricing" };
  }

  if (!credits) {
    return {
      allowed: false,
      plan: "Free",
      creditsRemaining: 0,
      reason: "NO_USER",
      upgradeUrl: "/pricing",
    };
  }

  const creditsRemaining = credits.total - credits.used;

  if (creditsRemaining <= 0) {
    return {
      allowed: false,
      plan: "Free",
      creditsRemaining: 0,
      reason: "CREDITS_EXHAUSTED",
      upgradeUrl: "/pricing",
    };
  }

  return {
    allowed: true,
    plan: "Free",
    creditsRemaining,
  };
}

/**
 * Deduct one credit after successful generation.
 */
export async function deductCredit(userId: string): Promise<number> {
  const { data: credits } = await getSupabase()
    .from("credits")
    .select("total, used")
    .eq("user_id", userId)
    .single();

  if (!credits) return 0;

  const newUsed = credits.used + 1;
  await getSupabase()
    .from("credits")
    .update({ used: newUsed, updated_at: new Date().toISOString() })
    .eq("user_id", userId);

  return credits.total - newUsed;
}