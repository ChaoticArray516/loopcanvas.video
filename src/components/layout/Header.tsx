"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

interface User {
  email: string;
  id: string;
}

interface Subscription {
  plan: string;
  status: string;
  provider_customer_id: string | null;
}

// Lazy init — returns null if env vars are missing (graceful degradation)
function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [credits, setCredits] = useState<number>(0);
  const supabaseRef = useRef<SupabaseClient | null>(null);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) return; // env vars missing — stay in logged-out state
    supabaseRef.current = supabase;

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          email: session.user.email ?? "",
          id: session.user.id,
        });
        fetchSubscription(session.user.id);
        fetchCredits(session.user.id);
      }
    });

    // Listen for auth changes
    const { data: { subscription: authSub } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser({
            email: session.user.email ?? "",
            id: session.user.id,
          });
          fetchSubscription(session.user.id);
          fetchCredits(session.user.id);
        } else {
          setUser(null);
          setSubscription(null);
          setCredits(0);
        }
      }
    );

    return () => {
      authSub.unsubscribe();
    };
  }, []);

  async function fetchSubscription(userId: string) {
    const sb = supabaseRef.current ?? getSupabase();
    if (!sb) return;
    const { data } = await sb
      .from("subscriptions")
      .select("plan, status, provider_customer_id")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(1)
      .single();
    if (data) setSubscription(data);
  }

  async function fetchCredits(userId: string) {
    const sb = supabaseRef.current ?? getSupabase();
    if (!sb) return;
    const { data } = await sb
      .from("credits")
      .select("total, used")
      .eq("user_id", userId)
      .single();
    if (data) setCredits(data.total - data.used);
  }

  const navLinks = [
    { label: "Text-to-Loop", href: "/text-to-loop" },
    { label: "Photo-to-Loop", href: "/photo-to-loop" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
  ];

  const isSubActive = subscription?.status === "active" || subscription?.status === "trialing";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <Zap className="h-6 w-6 text-primary" />
          <span className="font-display">LoopCanvas</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth */}
        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground">
                {credits} credits
              </span>
              <div className="relative group">
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  {user.email}
                </button>
                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-border/50 bg-card p-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link
                    href="/profile"
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    Profile
                  </Link>
                  {isSubActive && subscription?.provider_customer_id ? (
                    <Link
                      href={`/portal?customer_id=${subscription.provider_customer_id}`}
                      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      Manage Subscription
                    </Link>
                  ) : (
                    <Link
                      href="/pricing"
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-primary hover:bg-muted"
                    >
                      Upgrade
                    </Link>
                  )}
                  <div className="my-1 border-t border-border/50" />
                  <Link
                    href="/api/auth/signout"
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    Sign Out
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Sign In
              </Link>
              <Link
                href="/text-to-loop"
                className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Try Free
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border/40 bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border/40 pt-3">
              {user ? (
                <>
                  <span className="text-sm text-muted-foreground">
                    {user.email} — {credits} credits
                  </span>
                  <Link
                    href="/profile"
                    className="text-base font-medium text-muted-foreground hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    Profile
                  </Link>
                  {isSubActive && subscription?.provider_customer_id ? (
                    <Link
                      href={`/portal?customer_id=${subscription.provider_customer_id}`}
                      className="text-base font-medium text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      Manage Subscription
                    </Link>
                  ) : (
                    <Link
                      href="/pricing"
                      className="text-base font-medium text-primary hover:text-primary/80"
                      onClick={() => setMobileOpen(false)}
                    >
                      Upgrade
                    </Link>
                  )}
                  <Link
                    href="/api/auth/signout"
                    className="text-base font-medium text-muted-foreground hover:text-foreground"
                  >
                    Sign Out
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-base font-medium text-muted-foreground hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/text-to-loop"
                    className="rounded-full bg-primary px-4 py-2 text-center text-base font-medium text-primary-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    Try Free
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
