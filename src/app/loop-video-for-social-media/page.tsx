import Link from "next/link";
import { ArrowRight, Wand2, ImageIcon } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Loop Video for Social Media — AI Generator for All Platforms",
  description:
    "Create loop videos optimized for Instagram, TikTok, YouTube Shorts, and more. AI-powered seamless loops. Free to try. Perfect for content creators.",
  alternates: { canonical: "/loop-video-for-social-media" },
  openGraph: {
    title: "Loop Video for Social Media — AI Generator for All Platforms",
    description: "Create loop videos optimized for Instagram, TikTok, YouTube Shorts, and more.",
    url: "/loop-video-for-social-media",
    type: "website",
  },
};

const faqs = [
  { q: "Why do loop videos perform better on social media?", a: "Loop videos increase viewer retention because there's no endpoint — the content hypnotically repeats, keeping viewers watching longer. This signals to platform algorithms that your content is engaging, boosting reach and impressions." },
  { q: "What size should loop videos be for each platform?", a: "Instagram Reels and TikTok: 9:16 vertical (1080×1920). YouTube Shorts: 9:16 vertical under 60 seconds. Spotify Canvas: 9:16 vertical, 3-8 seconds. Twitter/X: 16:9 or 1:1 works best." },
  { q: "Can I use the same loop video on multiple platforms?", a: "Yes, but we recommend creating platform-specific versions. A 9:16 vertical loop works for Instagram, TikTok, and YouTube Shorts. You may want to create a 1:1 version for Twitter/X feeds." },
  { q: "How do I make loop videos that go viral?", a: "The most viral loops have three things: eye-catching first frames (to stop the scroll), hypnotic seamless motion (to keep viewers watching), and content that matches trending audio or themes. LoopCanvas makes the technical part effortless." },
  { q: "Are LoopCanvas videos royalty-free for social media?", a: "Yes — all videos generated on LoopCanvas are 100% original AI-created content. Free tier includes a watermark; Pro and Team plans provide clean, watermark-free files with commercial licensing." },
  { q: "How fast can I create a social media loop video?", a: "Most videos are generated in 10-30 seconds. You can create multiple variations quickly by tweaking your prompt, making it easy to A/B test different styles for your social campaigns." },
];

const howToSteps = [
  { name: "Choose platform", text: "Select your target platform — we'll optimize the aspect ratio and duration automatically." },
  { name: "Describe your content", text: "Enter a prompt that matches your brand and trending themes on your target platform." },
  { name: "Generate variations", text: "Create multiple loop versions to find the one that performs best." },
  { name: "Post and track", text: "Upload to your social platform and monitor engagement metrics." },
];

export default function LoopVideoForSocialMediaPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/loop-video-for-social-media"
        pageName="Loop Video for Social Media"
        description="Create loop videos optimized for Instagram, TikTok, YouTube Shorts, and more."
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        howToSteps={howToSteps}
      />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Loop Video for Social Media" }]} />

          <div className="text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Loop Video for Social Media —{" "}
            <span className="gradient-text">One Tool, All Platforms</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Create loop videos optimized for Instagram, TikTok, YouTube Shorts, and more.
            AI-powered seamless loops. Free to try.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/text-to-loop" className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium">
              <Wand2 className="h-5 w-5" /> Try Text-to-Loop
            </Link>
            <Link href="/photo-to-loop" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-white/5">
              <ImageIcon className="h-5 w-5" /> Upload Image
            </Link>
        </div>
        </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Why Loop Videos Perform Better on Social Media</h2>
          <p className="mt-4 text-muted-foreground">
            Social media algorithms reward content that keeps viewers engaged. Loop videos are uniquely suited for this because they never end — the viewer is drawn into an infinite visual experience that increases watch time, replay rate, and overall engagement.
          </p>
          <p className="mt-4 text-muted-foreground">
            Studies show that seamless loop videos can increase viewer retention by 40-60% compared to linear clips. On platforms like TikTok and Instagram Reels, where the first 3 seconds determine whether a viewer scrolls past, a hypnotic looping motion can be the difference between viral success and obscurity.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Retention increase", value: "+40-60%" },
              { label: "Replay rate", value: "3-5× higher" },
              { label: "Algorithm boost", value: "Higher reach" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border/50 bg-card p-4 text-center">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Platform-Specific Loop Video Specs</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/50">
            <table className="w-full text-sm">
              <thead className="bg-card">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Platform</th>
                  <th className="px-4 py-3 text-left font-semibold">Aspect Ratio</th>
                  <th className="px-4 py-3 text-left font-semibold">Duration</th>
                  <th className="px-4 py-3 text-left font-semibold">Format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {[
                  { platform: "Instagram Reels", ratio: "9:16", duration: "15-90s", format: "MP4" },
                  { platform: "TikTok", ratio: "9:16", duration: "Up to 10min (15-60s optimal)", format: "MP4" },
                  { platform: "YouTube Shorts", ratio: "9:16", duration: "Under 60s", format: "MP4" },
                  { platform: "Spotify Canvas", ratio: "9:16", duration: "3-8s", format: "MP4" },
                  { platform: "Twitter/X", ratio: "16:9 or 1:1", duration: "Up to 2min 20s", format: "MP4" },
                ].map((row) => (
                  <tr key={row.platform}>
                    <td className="px-4 py-3 font-medium">{row.platform}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.ratio}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.duration}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.format}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">How to Create Social Media Loop Videos</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {howToSteps.map((step, i) => (
              <div key={step.name} className="glass-card rounded-2xl p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
                <h3 className="mt-3 font-heading text-lg font-semibold">{step.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Content Ideas by Category</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Music", text: "Pulsing visualizers, waveform animations, and rhythm-reactive loops." },
              { title: "Nature", text: "Flowing water, drifting clouds, swaying trees, and ocean waves." },
              { title: "Abstract", text: "Morphing shapes, color shifts, and geometric patterns." },
              { title: "Urban", text: "Neon lights, city traffic, and architectural time-lapse." },
              { title: "Food", text: "Sizzling pans, pouring drinks, and steam rising." },
              { title: "Fashion", text: "Fabric flowing, sparkling jewelry, and runway motion." },
              { title: "Tech", text: "Circuit patterns, data flows, and futuristic interfaces." },
              { title: "Art", text: "Paint blending, sculpture rotation, and gallery ambiance." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-5">
                <h3 className="font-heading text-base font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Tips for Maximum Engagement</h2>
          <div className="mt-10 space-y-4">
            {[
              { title: "Hook in the first second", text: "The first frame must stop the scroll. Use bold colors, unexpected motion, or striking imagery." },
              { title: "Match trending audio", text: "Pair your loop with trending sounds on TikTok and Reels. The visual should complement the rhythm." },
              { title: "Keep it under 15 seconds", text: "For social feeds, shorter loops perform better. 3-8 seconds is the sweet spot for maximum replays." },
              { title: "Use text overlays wisely", text: "Add hooks and CTAs as text overlays, but keep the loop video itself clean and text-free." },
              { title: "Post consistently", text: "Create a series of themed loops and post daily. Consistency beats viral one-offs for long-term growth." },
            ].map((item, i) => (
              <div key={item.title} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                <div><h3 className="font-semibold">{item.title}</h3><p className="text-sm text-muted-foreground">{item.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
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

      <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Create Social Media Loop Videos</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try, no credit card required.</p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">
            Start Creating Free <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
