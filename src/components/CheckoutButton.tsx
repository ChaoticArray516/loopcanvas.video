"use client";

import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import { useState, useEffect } from "react";

interface CheckoutButtonProps {
  productId: string;
  className?: string;
  children: React.ReactNode;
}

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createBrowserClient(url, key);
}

/**
 * Client Component: Pricing CTA that routes to Creem checkout.
 * Reads user session from cookies on the client side.
 * If user is not logged in, redirects to login with return URL.
 */
export default function CheckoutButton({
  productId,
  className,
  children,
}: CheckoutButtonProps) {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) {
      // Use a microtask to avoid synchronous setState in effect body
      queueMicrotask(() => setLoading(false));
      return;
    }
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUserId(session.user.id);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div
        className={`mt-8 block w-full rounded-full py-3 text-center text-sm font-medium animate-pulse bg-muted ${className}`}
      >
        {children}
      </div>
    );
  }

  if (!userId) {
    return (
      <Link
        href={`/login?redirect=/pricing`}
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={`/checkout?productId=${productId}&referenceId=${userId}&successUrl=/profile`}
      className={className}
    >
      {children}
    </Link>
  );
}
