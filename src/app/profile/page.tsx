import Link from "next/link";
import { redirect } from "next/navigation";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Calendar, CreditCard, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "Profile",
  description: "Manage your LoopCanvas AI account, subscription, and credits.",
  alternates: { canonical: "/profile" },
};

async function getUserData() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // No Supabase config — redirect to login
  if (!url || !key) {
    redirect("/login?redirect=/profile");
  }

  const cookieStore = await cookies();
  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?redirect=/profile");
  }

  // Fetch subscription
  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("plan, status, current_period_start, current_period_end, provider_customer_id")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  // Fetch credits
  const { data: credits } = await supabase
    .from("credits")
    .select("total, used")
    .eq("user_id", user.id)
    .single();

  return {
    user,
    subscription,
    credits: credits ? credits.total - credits.used : 0,
    totalCredits: credits?.total ?? 0,
  };
}

export default async function ProfilePage() {
  const { user, subscription, credits, totalCredits } = await getUserData();

  const plan = subscription?.plan ?? "Free";
  const status = subscription?.status ?? "active";
  const isActive = status === "active" || status === "trialing";
  const periodStart = subscription?.current_period_start
    ? new Date(subscription.current_period_start).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;
  const periodEnd = subscription?.current_period_end
    ? new Date(subscription.current_period_end).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-heading text-3xl font-bold tracking-tight">
            Account
          </h1>
          <p className="mt-2 text-muted-foreground">{user.email}</p>
        </div>

        <div className="space-y-6">
          {/* Credits Card */}
          <div className="rounded-2xl border border-border/50 bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold">Credits</h2>
                <p className="text-sm text-muted-foreground">
                  {credits} / {totalCredits} remaining
                </p>
              </div>
            </div>
            {totalCredits > 0 && (
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{
                    width: `${Math.max(0, Math.min(100, (credits / totalCredits) * 100))}%`,
                  }}
                />
              </div>
            )}
          </div>

          {/* Subscription Card */}
          <div className="rounded-2xl border border-border/50 bg-card p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold">Subscription</h2>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-sm font-medium">{plan}</span>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                        isActive
                          ? "bg-green-100 text-green-700"
                          : status === "canceled"
                          ? "bg-muted text-muted-foreground"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                </div>
              </div>

              {isActive && subscription?.provider_customer_id ? (
                <Link
                  href={`/portal?customer_id=${subscription.provider_customer_id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                >
                  <CreditCard className="h-4 w-4" />
                  Manage Subscription
                </Link>
              ) : (
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Upgrade
                </Link>
              )}
            </div>

            {periodStart && periodEnd && (
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>
                  Billing period: {periodStart} — {periodEnd}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
