"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Zap, AlertTriangle, RotateCcw, Home, Mail } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log to console in development; in production this could send to Sentry
    if (process.env.NODE_ENV === "development") {
      console.error("[Error Boundary]", error);
    }
  }, [error]);

  const isDev = process.env.NODE_ENV === "development";

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
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(239, 68, 68, 0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Brand icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-card">
          <Zap className="h-8 w-8 text-primary" />
        </div>

        {/* Error icon */}
        <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-full border border-destructive/20 bg-destructive/10">
          <AlertTriangle className="h-10 w-10 text-destructive" />
        </div>

        {/* Title */}
        <h1 className="mt-8 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Something went wrong
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-md text-base text-muted-foreground">
          We encountered an unexpected issue while loading this page.
          Don&apos;t worry — it&apos;s not your fault.
        </p>

        {/* Error details — visible in development only */}
        {isDev && (
          <div className="mt-6 w-full max-w-xl rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-left">
            <p className="text-xs font-medium uppercase tracking-wider text-destructive/80">
              Error details (development)
            </p>
            <p className="mt-2 break-all font-mono text-sm text-destructive">
              {error.message}
            </p>
            {error.digest && (
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                Digest: {error.digest}
              </p>
            )}
            {error.stack && (
              <pre className="mt-3 max-h-40 overflow-auto rounded-lg bg-background/50 p-3 text-xs text-muted-foreground">
                {error.stack}
              </pre>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium"
          >
            <RotateCcw className="h-4 w-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Support link */}
        <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span>
            Still stuck?{" "}
            <Link
              href="mailto:support@loopcanvas.video"
              className="text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
            >
              Contact support
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
