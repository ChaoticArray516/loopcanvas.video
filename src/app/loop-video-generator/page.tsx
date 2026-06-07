import Link from "next/link";
import { ArrowRight, Wand2, Zap, CheckCircle2, ImageIcon, Music, Globe, Share2 } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "AI Loop Video Generator — Free Seamless Loops | LoopCanvas",
  description:
    "Create mesmerizing seamless loop videos with our free AI loop video generator. Turn text or photos into infinite loops instantly. Perfect for Spotify Canvas, website backgrounds, and social media.",
  alternates: {
    canonical: "/loop-video-generator",
  },
  openGraph: {
    title: "AI Loop Video Generator — Free Seamless Loops | LoopCanvas",
    description: "Create mesmerizing seamless loop videos with our free AI loop video generator. Turn text or photos into infinite loops.",
    url: "/loop-video-generator",
  },
};

const faqs = [
  { q: "What is a loop video generator?", a: "A loop video generator is an AI-powered tool that creates seamless, infinitely repeating videos from text prompts or images. Unlike regular video editors, it automatically ensures the first and last frames blend perfectly for smooth infinite playback." },
  { q: "Is LoopCanvas loop video generator free?", a: "Yes! LoopCanvas offers a free tier with 5 generations per day. No credit card is required to start creating loop videos. Pro plans unlock HD exports and more generations." },
  { q: "What formats do loop videos export in?", a: "LoopCanvas exports videos in MP4 format (H.264/H.265), which is universally supported across all platforms including Spotify, Instagram, TikTok, YouTube, and websites." },
  { q: "How long does it take to generate a loop video?", a: "Most loop videos are generated in 10-30 seconds. The AI handles all the technical work — seamless blending, format optimization, and quality enhancement — automatically." },
  { q: "Can I use loop videos for commercial projects?", a: "Yes. LoopCanvas Pro and Team plans include a full commercial license, allowing you to use generated loop videos in commercial projects, client work, and monetized content without attribution." },
  { q: "What makes LoopCanvas different from other video generators?", a: "LoopCanvas specializes exclusively in seamless loop videos. While general AI video tools create linear clips, our AI is optimized for infinite playback with perfect frame matching, making it ideal for backgrounds, Spotify Canvas, and ambient content." },
];

const howToSteps = [
  { name: "Describe or Upload", text: "Enter a detailed text prompt describing your desired scene, or upload an existing image you want to animate into a loop." },
  { name: "AI Generates", text: "Our AI creates a seamless looping video optimized for your use case, ensuring first and last frames blend perfectly." },
  { name: "Download and Share", text: "Export your loop video as HD MP4 and use it on Spotify Canvas, website backgrounds, or social media." },
];

export default function LoopVideoGeneratorPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/loop-video-generator"
        pageName="Loop Video Generator"
        description="Create mesmerizing seamless loop videos with AI. Turn text or photos into infinite loops. Free to try."
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        howToSteps={howToSteps}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Loop Video Generator" }]} />

          <div className="text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI Loop Video Generator —{" "}
            <span className="gradient-text">Create Seamless Infinite Loops</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Turn text prompts or photos into mesmerizing seamless loop videos with AI.
            Perfect for Spotify Canvas, website backgrounds, and social media. Free to try.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/text-to-loop"
              className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium"
            >
              <Wand2 className="h-5 w-5" />
              Try Text-to-Loop
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

      {/* What is a Loop Video Generator */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">What is a Loop Video Generator?</h2>
          <p className="mt-4 text-muted-foreground">
            A loop video generator is an AI-powered tool that creates seamless, infinitely repeating videos. Unlike traditional video editors that produce linear clips with a definite start and end, a loop video generator ensures the final frame transitions back to the first frame imperceptibly — creating a hypnotic, never-ending visual experience.
          </p>
          <p className="mt-4 text-muted-foreground">
            LoopCanvas AI specializes in this technology. Our advanced algorithms analyze your text description or uploaded image, generate a short video clip, and then intelligently blend the endpoints so the loop is invisible to viewers. The result is a mesmerizing video that can play forever without jarring jumps or cuts — perfect for ambient backgrounds, music visualizers, and social media content.
          </p>
          <p className="mt-4 text-muted-foreground">
            The applications are endless: Spotify Canvas backgrounds for musicians, seamless website hero videos, engaging Instagram Reels, ambient digital art installations, and TikTok content that captivates viewers with its hypnotic repetition.
          </p>
        </div>
      </section>

      {/* How to Create */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">How to Create Loop Videos with Our AI Generator</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              { icon: Wand2, step: "01", title: "Describe or Upload", text: "Enter a text prompt or upload an image. Be as creative as you want — the AI handles the rest." },
              { icon: Zap, step: "02", title: "AI Generates", text: "Our AI creates a seamless looping video optimized for your use case, with perfectly blended first and last frames." },
              { icon: Share2, step: "03", title: "Download & Share", text: "Export as HD MP4 and use it on Spotify, websites, or social media. Your loop is ready in seconds." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border/50 bg-card">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-4 text-sm font-medium text-primary">{item.step}</p>
                <h3 className="mt-1 font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Popular Use Cases for AI Loop Video Generators</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Music, title: "Spotify Canvas", text: "Create eye-catching 3-8 second vertical loops that appear in the Now Playing view of Spotify mobile app." },
              { icon: Globe, title: "Website Backgrounds", text: "Add mesmerizing full-screen video backgrounds to your landing pages without distracting from content." },
              { icon: Share2, title: "Social Media Posts", text: "Stand out on Instagram, TikTok, and YouTube with infinite-loop content that keeps viewers watching." },
              { icon: Wand2, title: "Digital Art", text: "Transform static artwork into living, breathing animated pieces perfect for galleries and NFTs." },
              { icon: CheckCircle2, title: "Presentations", text: "Add subtle motion to slide decks without overwhelming your audience with full video clips." },
              { icon: Zap, title: "Ads & Marketing", text: "Create thumb-stopping ad creative that loops endlessly in feed-based advertising platforms." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <item.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose LoopCanvas */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Why Choose Our AI Loop Video Generator</h2>
          <div className="mt-10 space-y-4">
            {[
              { title: "Fast Generation", text: "Most videos are ready in 10-30 seconds. No queues, no waiting." },
              { title: "HD Export", text: "Download your loops in crisp HD MP4 format, ready for any platform." },
              { title: "Seamless Blending", text: "Our AI ensures first and last frames match perfectly for invisible transitions." },
              { title: "Multiple Formats", text: "Export in 9:16, 1:1, or 16:9 ratios — optimized for Spotify, social, and web." },
              { title: "Free Tier", text: "Start with 5 free generations per day. No credit card required." },
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Start Creating with Our Free AI Loop Video Generator</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            Create stunning loop videos with AI. Free to try, no credit card required.
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
