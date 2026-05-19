"use client";

import Link from "next/link";

interface CheckoutButtonProps {
  productId: string;
  userId?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Client Component: Pricing CTA that routes to Creem checkout.
 * If user is not logged in, redirects to login with return URL.
 */
export default function CheckoutButton({
  productId,
  userId,
  className,
  children,
}: CheckoutButtonProps) {
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
      href={`/checkout?product_id=${productId}&referenceId=${userId}&success_url=/profile`}
      className={className}
    >
      {children}
    </Link>
  );
}
