import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Home, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20 sm:px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/4 -translate-x-1/2"
          style={{
            width: "min(600px, 80vw)",
            height: "400px",
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124, 58, 237, 0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Brand icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-card">
          <Zap className="h-8 w-8 text-primary" />
        </div>

        {/* 404 code */}
        <h1 className="mt-8 font-heading text-[7rem] font-extrabold leading-none tracking-tighter text-foreground/10 sm:text-[9rem]">
          404
        </h1>

        {/* Title */}
        <h2 className="-mt-6 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-md text-base text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Action buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium"
          >
            <Home className="h-4 w-4" />
            Back to Home
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/text-to-loop"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
          >
            <Zap className="h-4 w-4" />
            Try Text-to-Loop
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link href="/gallery" className="transition-colors hover:text-foreground">
            Gallery
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-foreground">
            Pricing
          </Link>
          <Link href="/blog" className="transition-colors hover:text-foreground">
            Blog
          </Link>
          <Link href="/spotify-canvas-maker" className="transition-colors hover:text-foreground">
            Spotify Canvas
          </Link>
          <Link href="/legal/privacy" className="transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link href="/legal/terms" className="transition-colors hover:text-foreground">
            Terms
          </Link>
        </div>
      </div>
    </div>
  );
}
