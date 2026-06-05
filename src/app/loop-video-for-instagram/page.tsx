import Link from "next/link";
import { ArrowRight, Wand2, ImageIcon, Music, Smartphone, TrendingUp, CheckCircle2, Heart } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Loop Video for Instagram — AI Reels & Stories Maker | LoopCanvas",
  description:
    "Create seamless loop videos for Instagram Reels and Stories. 9:16 vertical format, BGM sync, optimized for engagement. Free to try. No credit card required.",
  alternates: {
    canonical: "/loop-video-for-instagram",
  },
  openGraph: {
    title: "Loop Video for Instagram — AI Reels & Stories Maker | LoopCanvas",
    description: "Create seamless loop videos for Instagram Reels and Stories. 9:16 vertical format with BGM sync.",
    url: "/loop-video-for-instagram",
    type: "website",
  },
};

const faqs = [
  { q: "What is the best format for Instagram loop videos?", a: "Instagram Reels and Stories use 9:16 vertical format (1080x1920). For Instagram feed posts, use 1:1 square or 4:5 portrait. LoopCanvas includes built-in presets for all Instagram formats with one-click export." },
  { q: "How do loop videos increase Instagram engagement?", a: "Seamless loops encourage viewers to watch multiple times, which Instagram's algorithm interprets as high engagement. Reels with loops often see 3-5x higher replay rates than standard video clips, leading to more reach and followers." },
  { q: "Can I sync my loop video with trending audio?", a: "Yes. LoopCanvas generates visually rhythmic loops that sync naturally with audio beats. For best results, match your loop's motion speed to the tempo of your chosen trending sound." },
  { q: "What length should Instagram loop videos be?", a: "For Reels, 3-15 seconds is optimal. For Stories, 3-5 seconds works best. For feed posts, 3-10 seconds is ideal. LoopCanvas supports custom durations so you can match any format requirement." },
  { q: "Do I need a business account to post loop videos?", a: "No. Loop videos work on all Instagram account types — personal, creator, and business. However, business and creator accounts get access to more detailed analytics to measure loop performance." },
  { q: "Can I use AI loop videos for Instagram ads?", a: "Yes. Loop videos perform exceptionally well in Instagram feed and Stories ads. The hypnotic repetition captures attention in the first second, which is critical for ad performance. A Pro plan includes commercial licensing for ad use." },
];

const howToSteps = [
  { name: "Choose Your Format", text: "Select 9:16 for Reels/Stories, 1:1 for feed posts, or 4:5 for portrait feed. LoopCanvas presets handle all technical specs automatically." },
  { name: "Generate Your Loop", text: "Describe your scene or upload an image. The AI creates a seamless loop optimized for Instagram's algorithm and engagement patterns." },
  { name: "Sync with Audio", text: "Match your loop's motion tempo to trending sounds or your own music. Rhythmic loops get 3-5x more replays on Reels." },
  { name: "Export and Post", text: "Download in HD MP4 and upload directly to Instagram. Your loop is optimized for maximum engagement from the first frame." },
];

export default function LoopVideoForInstagramPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/loop-video-for-instagram"
        pageName="Loop Video for Instagram"
        description="Create seamless loop videos for Instagram Reels and Stories. 9:16 vertical format, BGM sync, optimized for engagement."
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        howToSteps={howToSteps}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Loop Video for Instagram" }]} />

          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Loop Videos for Instagram —{" "}
              <span className="gradient-text">Create Reels That Keep Viewers Watching</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Generate seamless loop videos optimized for Instagram Reels, Stories, and feed posts.
              9:16 vertical format with BGM sync. Boost engagement with infinite-loop content.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/text-to-loop"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium"
              >
                <Wand2 className="h-5 w-5" />
                Create Instagram Loop
              </Link>
              <Link
                href="/photo-to-loop"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-white/5"
              >
                <ImageIcon className="h-5 w-5" />
                Upload Image
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Loop Videos for Instagram */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Why Loop Videos Dominate Instagram</h2>
          <p className="mt-4 text-muted-foreground">
            Instagram's algorithm is designed to reward content that keeps users on the platform longer.
            Loop videos are uniquely positioned to exploit this mechanism. When a viewer watches a seamless
            loop multiple times — often without consciously realizing it — the algorithm registers extended
            watch time, higher completion rates, and increased engagement signals.
          </p>
          <p className="mt-4 text-muted-foreground">
            The data is compelling. Reels with loop-style content see 3-5x higher replay rates than standard
            video clips. This translates directly into more reach, more followers, and higher placement in
            the Explore page algorithm. For creators and brands, loop videos are not just a creative choice —
            they are a growth strategy.
          </p>
          <p className="mt-4 text-muted-foreground">
            The key to Instagram success is the first frame. Users scroll fast, and you have less than one
            second to stop the scroll. Loop videos with bold visual impact, continuous motion, and vibrant
            colors are the most effective scroll-stoppers on the platform.
          </p>
        </div>
      </section>

      {/* 9:16 + BGM Sync */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">9:16 Format + BGM Sync</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="glass-card rounded-2xl p-6">
              <Smartphone className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-heading text-lg font-semibold">9:16 Vertical Preset</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Instagram Reels and Stories require 1080x1920 vertical format. LoopCanvas's built-in
                Instagram preset automatically sets the correct resolution, aspect ratio, and export
                settings. One click, perfect output every time.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />1080×1920 HD export</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Optimized for mobile screens</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Under 10MB for fast upload</li>
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <Music className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-heading text-lg font-semibold">BGM Rhythm Sync</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Loops that visually match audio beats get dramatically more engagement. Generate loops
                with rhythmic motion patterns that sync naturally with trending sounds, background music,
                or your original tracks.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Beat-matched motion patterns</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Trending audio compatibility</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />3-5x higher replay rates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Format Guide */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Instagram Format Guide</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Smartphone, title: "Reels", specs: "9:16 | 3-15 sec | 1080×1920", desc: "Full-screen vertical content. Loops that sync with trending audio perform best." },
              { icon: Heart, title: "Stories", specs: "9:16 | 3-5 sec | 1080×1920", desc: "Short, punchy loops that capture attention before the viewer taps forward." },
              { icon: TrendingUp, title: "Feed Posts", specs: "1:1 or 4:5 | 3-10 sec | 1080×1080", desc: "Square or portrait loops that stand out in the home feed grid." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border/50 bg-card">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{item.specs}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Create */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">How to Create Instagram Loop Videos</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howToSteps.map((step, i) => (
              <div key={step.name} className="text-center">
                <p className="text-sm font-medium text-primary">0{i + 1}</p>
                <h3 className="mt-1 font-heading text-lg font-semibold">{step.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-border/50 bg-card p-5">
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Create Your Instagram Loop</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            Generate a stunning loop video for Instagram Reels or Stories in seconds. Free to try, no credit card required.
          </p>
          <Link
            href="/text-to-loop"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90"
          >
            Try Text-to-Loop
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
