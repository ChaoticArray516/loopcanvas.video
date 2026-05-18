"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";

interface User {
  email: string;
  credits: number;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // TODO: replace with real auth hook (Supabase)
  const [user] = useState<User | null>(null);

  const navLinks = [
    { label: "Text-to-Loop", href: "/text-to-loop" },
    { label: "Photo-to-Loop", href: "/photo-to-loop" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
  ];

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
                {user.credits} credits
              </span>
              <Link
                href="/profile"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {user.email}
              </Link>
              <Link
                href="/api/auth/signout"
                className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Sign Out
              </Link>
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
                    {user.email} — {user.credits} credits
                  </span>
                  <Link
                    href="/profile"
                    className="text-base font-medium text-muted-foreground hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    Profile
                  </Link>
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
