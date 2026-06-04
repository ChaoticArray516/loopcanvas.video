import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
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
            <Link
              href="/text-to-video"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Text-to-Video
            </Link>
            <Link
              href="/photo-to-video"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Photo-to-Video
            </Link>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Solutions
            </h3>
            <Link
              href="/loop-video-generator"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Loop Video Generator
            </Link>
            <Link
              href="/ai-loop-video"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              AI Loop Video
            </Link>
            <Link
              href="/seamless-loop-video"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Seamless Loop Video
            </Link>
            <Link
              href="/website-background-video"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Website Background Video
            </Link>
            <Link
              href="/loop-video-for-social-media"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Loop Video for Social
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
            <Link
              href="/ai-video-generator"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              AI Video Generator
            </Link>
            <Link
              href="/free-loop-video-maker"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Free Loop Video Maker
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
