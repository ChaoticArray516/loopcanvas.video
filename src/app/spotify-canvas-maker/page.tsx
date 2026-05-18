import Link from "next/link";
import { ArrowRight, Music, CheckCircle2, Zap, Image } from "lucide-react";
import SpotifyCanvasJsonLd from "@/components/seo/SpotifyCanvasJsonLd";

export const revalidate = 3600;

export const metadata = {
  title: "Spotify Canvas Maker",
  description:
    "Create stunning Spotify Canvas videos with AI. Turn text prompts or images into seamless 3-8 second looping videos optimized for Spotify artist profiles.",
  alternates: {
    canonical: "/spotify-canvas-maker",
  },
};

export default function SpotifyCanvasPage() {
  return (
    <>
      <SpotifyCanvasJsonLd />

      {/* Hero */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Spotify Canvas Maker
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Create eye-catching Spotify Canvas videos in seconds. AI generates
            seamless 3-8 second loops in the perfect 9:16 vertical format for your
            artist profile.
          </p>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              9:16 vertical format
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-primary" />
              3-8 second loops
            </span>
            <span className="flex items-center gap-1.5">
              <Music className="h-4 w-4 text-primary" />
              Spotify-ready export
            </span>
          </div>

          {/* CTA */}
          <Link
            href="/photo-to-loop"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Image className="h-5 w-5" />
            Create Your Canvas
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-2xl font-bold">
            Spotify Canvas Requirements
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Format", value: "MP4 or MOV" },
              { label: "Aspect Ratio", value: "9:16 (vertical)" },
              { label: "Resolution", value: "720px - 1080px width" },
              { label: "Duration", value: "3 - 8 seconds" },
              { label: "File Size", value: "Under 8MB" },
              { label: "Loop", value: "Seamless infinite" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border/50 bg-card p-4 text-center"
              >
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="mt-1 text-lg font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {[
              {
                q: "What is a Spotify Canvas?",
                a: "Spotify Canvas is a 3-8 second looping video that appears in the Now Playing view of the Spotify mobile app. It helps artists engage listeners and make their music more memorable.",
              },
              {
                q: "Do I need a Spotify for Artists account?",
                a: "Yes, you need access to Spotify for Artists to upload Canvas videos to your tracks. LoopCanvas AI generates the video file; you upload it through Spotify for Artists.",
              },
              {
                q: "Can I use the same Canvas for multiple tracks?",
                a: "Technically yes, but Spotify recommends unique Canvases per track for better engagement. Our AI makes it easy to generate variations quickly.",
              },
              {
                q: "What makes a good Spotify Canvas?",
                a: "A good Canvas loops seamlessly, matches the mood of your track, and avoids text or complex graphics that distract from the music. Our AI optimizes for all of these.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-border/50 bg-card p-5"
              >
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
