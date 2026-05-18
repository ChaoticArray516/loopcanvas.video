import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Tools */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Tools
            </h3>
            <Link
              href="/text-to-loop"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Text-to-Loop
            </Link>
            <Link
              href="/photo-to-loop"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Photo-to-Loop
            </Link>
            <Link
              href="/spotify-canvas-maker"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Spotify Canvas Maker
            </Link>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h3>
            <Link
              href="/gallery"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h3>
            <Link
              href="/legal/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-display">LoopCanvas</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Create mesmerizing seamless loop videos with AI.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border/40 pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LoopCanvas AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
