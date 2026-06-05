import Link from "next/link";
import { ArrowRight, ImageIcon, Zap, Clock } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Loop Video for TikTok — AI Short Video Maker | LoopCanvas",
  description:
    "Create seamless loop videos for TikTok. 15-second fast generation, trending audio sync, algorithm-optimized. Free to try. No credit card required.",
  alternates: {
    canonical: "/loop-video-for-tiktok",
  },
  openGraph: {
    title: "Loop Video for TikTok — AI Short Video Maker | LoopCanvas",
    description: "Create seamless loop videos for TikTok. 15-second fast generation with trending audio sync.",
    url: "/loop-video-for-tiktok",
    type: "website",
  },
};

const faqs = [
  { q: "What makes loop videos perform well on TikTok?", a: "TikTok's algorithm heavily weights watch time and replays. Short 3-5 second seamless loops encourage viewers to watch multiple times, which the algorithm interprets as exceptional engagement. Loops that sync with trending audio perform 3-5x better than unsynchronized content." },
  { q: "How long should a TikTok loop video be?", a: "The sweet spot for TikTok loops is 3-5 seconds. This duration is short enough to encourage replays but long enough to convey a complete visual idea. LoopCanvas supports custom durations so you can experiment with what works best for your content." },
  { q: "Can I create a TikTok loop in under 15 seconds?", a: "Yes! LoopCanvas's 15-second generation mode creates TikTok-optimized loops in record time. Simply choose the TikTok preset, describe your scene, and get a platform-ready loop video in under 15 seconds." },
  { q: "Do loop videos work with TikTok's algorithm?", a: "Absolutely. TikTok's algorithm specifically rewards content with high replay rates and extended watch time. Loop videos naturally produce both metrics since viewers tend to watch them 5-10 times without realizing it." },
  { q: "What format does TikTok require?", a: "TikTok uses 9:16 vertical format (1080x1920) with MP4 encoding. LoopCanvas's TikTok preset automatically applies these specifications, ensuring your video uploads without issues." },
  { q: "Can I use AI loop videos for TikTok monetization?", a: "Yes. LoopCanvas Pro includes commercial licensing, allowing you to use generated loops in monetized TikTok content, brand partnerships, and the Creator Fund. The free tier is perfect for personal accounts." },
];

const howToSteps = [
  { name: "Select TikTok Preset", text: "Choose the TikTok preset for instant 9:16 vertical format with optimal duration and compression settings." },
  { name: "Describe Your Scene", text: "Enter a vivid text prompt or upload an image. Be bold — TikTok rewards eye-catching, high-energy visuals." },
  { name: "Generate in 15 Seconds", text: "The AI creates a seamless loop optimized for TikTok's algorithm. Motion, colors, and pacing are tuned for maximum engagement." },
  { name: "Post and Trend", text: "Download your HD MP4 and upload directly to TikTok. Pair with trending audio for maximum reach and virality potential." },
];

export default function LoopVideoForTiktokPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/loop-video-for-tiktok"
        pageName="Loop Video for TikTok"
        description="Create seamless loop videos for TikTok. 15-second fast generation, trending audio sync, algorithm-optimized."
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        howToSteps={howToSteps}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Loop Video for TikTok" }]} />

          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Loop Videos for TikTok —{" "}
              <span className="gradient-text">Create Viral Shorts in Seconds</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Generate TikTok-optimized loop videos in 15 seconds. 9:16 vertical format,
              trending audio sync, algorithm-tuned for maximum engagement. Free to try.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/text-to-loop"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium"
              >
                <Zap className="h-5 w-5" />
                Create TikTok Loop
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

      {/* Why TikTok Loves Loops */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Why TikTok Loves Loop Videos</h2>
          <p className="mt-4 text-muted-foreground">
            TikTok&apos;s algorithm is the most loop-friendly of any major platform. The app is built on short,
            addictive content that keeps users scrolling. Loop videos are the perfect match for this ecosystem —
            their seamless repetition creates a hypnotic effect that naturally extends watch time without any effort
            from the viewer.
          </p>
          <p className="mt-4 text-muted-foreground">
            Here's how it works: a 3-second seamless loop watched 10 times registers as 30 seconds of engagement.
            The algorithm sees this as exceptional content and pushes it to more users through the For You Page.
            Meanwhile, a 15-second standard clip that gets skipped after 2 seconds signals poor quality and gets buried.
          </p>
          <p className="mt-4 text-muted-foreground">
            The creators who understand this mechanic gain a massive advantage. Loop videos consistently outperform
            linear clips on TikTok because they hack the platform's core metric: time spent watching. The best part?
            TikTok users genuinely enjoy loop content. The hypnotic repetition is satisfying in a way that traditional
            videos cannot replicate.
          </p>
        </div>
      </section>

      {/* 15-Second Generation */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">15-Second Generation Channel</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Clock, title: "Under 15 Seconds", text: "Generate a complete TikTok-ready loop video in less time than it takes to read this sentence. No queues, no waiting." },
              { icon: Zap, title: "Algorithm Optimized", text: "Motion speed, color intensity, and visual pacing are automatically tuned for TikTok's engagement patterns." },
              { icon: TrendingUp, title: "Trend Ready", text: "Every loop is designed to pair with trending audio. Rhythmic motion patterns sync naturally with popular sounds." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border/50 bg-card">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Create */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Create a TikTok Loop in 4 Steps</h2>
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

      {/* Best Practices */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">TikTok Loop Best Practices</h2>
          <div className="mt-10 space-y-4">
            {[
              { title: "Hook in the first frame", text: "TikTok users decide in 0.5 seconds whether to keep watching. Start with bold colors, strong contrast, or immediate motion." },
              { title: "Sync with trending audio", text: "Loops that match audio beats get 3-5x more replays. Check TikTok's trending sounds and match your loop's tempo." },
              { title: "Keep it under 5 seconds", text: "The most viral TikTok loops are 3-5 seconds. Short enough to replay, long enough to impress." },
              { title: "Post consistently", text: "The algorithm rewards regular posting. Generate 5-10 loops in one session and post daily for a week." },
              { title: "Use hashtags strategically", text: "Combine broad hashtags (#fyp #viral) with niche tags (#loopvideo #aigenerated) for maximum discovery." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Create Your TikTok Loop</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            Generate a viral-ready loop video for TikTok in 15 seconds. Free to try, no credit card required.
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
