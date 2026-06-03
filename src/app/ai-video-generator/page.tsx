import Link from "next/link";
import { ArrowRight, Wand2, ImageIcon, Zap, CheckCircle2, Infinity, Target, Layers } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "AI Video Generator — Create Seamless Loop Videos | LoopCanvas",
  description:
    "AI video generator specialized in seamless loops. Turn text or photos into infinite loop videos. Free tier available. HD export for Spotify Canvas and social media.",
  alternates: { canonical: "/ai-video-generator" },
  openGraph: {
    title: "AI Video Generator — Create Seamless Loop Videos | LoopCanvas",
    description: "AI video generator specialized in seamless loops.",
    url: "/ai-video-generator",
    type: "website",
  },
};

const faqs = [
  { q: "What is an AI video generator?", a: "An AI video generator is a tool that uses artificial intelligence to create video content from text descriptions or images. LoopCanvas specializes in generating seamless loop videos — infinitely repeating clips perfect for backgrounds, Spotify Canvas, and social media." },
  { q: "How is LoopCanvas different from other AI video generators?", a: "While tools like Runway, Pika, and Sora create linear video clips, LoopCanvas is exclusively optimized for seamless infinite loops. Our AI ensures the first and last frames blend perfectly — something general-purpose video generators don't handle." },
  { q: "What inputs does the AI video generator support?", a: "LoopCanvas accepts both text prompts and uploaded images. Text-to-Loop creates videos from descriptions; Photo-to-Loop animates existing images. Both output the same seamless loop format." },
  { q: "What output formats are available?", a: "All videos export as MP4 (H.264/H.265) in your choice of aspect ratio: 9:16 for Spotify/vertical content, 1:1 for social feeds, or 16:9 for widescreen displays." },
  { q: "Is the AI video generator free?", a: "Yes — the free tier includes 5 generations per day with standard quality. Pro plans unlock HD exports, more generations, and commercial licensing. No credit card is required to start." },
  { q: "Can I use AI-generated videos commercially?", a: "Yes. Pro and Team plans include full commercial licensing, allowing unrestricted use in client projects, advertising, and monetized content." },
];

const howToSteps = [
  { name: "Choose input type", text: "Select text-to-loop for imaginative scenes or photo-to-loop for animating existing images." },
  { name: "Describe or upload", text: "Enter a detailed prompt or upload your image. The more detail, the better the result." },
  { name: "Generate loop", text: "AI creates a seamless loop video in 10-30 seconds, optimizing for infinite playback." },
];

export default function AiVideoGeneratorPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/ai-video-generator"
        pageName="AI Video Generator"
        description="AI video generator specialized in seamless loops. Turn text or photos into infinite loop videos."
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        howToSteps={howToSteps}
      />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI Video Generator —{" "}
            <span className="gradient-text">Specialized in Seamless Loop Videos</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            AI video generator specialized in seamless loops. Turn text or photos into infinite loop videos.
            Free tier available. HD export.
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
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">What Makes LoopCanvas Different?</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/50">
            <table className="w-full text-sm">
              <thead className="bg-card">
                <tr><th className="px-4 py-3 text-left font-semibold">Feature</th><th className="px-4 py-3 text-left font-semibold text-primary">LoopCanvas</th><th className="px-4 py-3 text-left font-semibold text-muted-foreground">Others</th></tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {[
                  { f: "Primary focus", us: "Seamless infinite loops", them: "Linear video clips" },
                  { f: "Loop optimization", us: "AI-blended endpoints", them: "Manual editing required" },
                  { f: "Duration", us: "3-8s (optimal for loops)", them: "Variable, often longer" },
                  { f: "File size", us: "Under 2MB", them: "Often 5-50MB" },
                  { f: "Use case", us: "Backgrounds, Canvas, ambient", them: "Narrative, ads, social" },
                  { f: "Free tier", us: "5 generations/day", them: "Varies (often limited)" },
                ].map((r) => (
                  <tr key={r.f}><td className="px-4 py-3 font-medium">{r.f}</td><td className="px-4 py-3 text-muted-foreground">{r.us}</td><td className="px-4 py-3 text-muted-foreground">{r.them}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">How Our AI Video Generator Works</h2>
          <p className="mt-4 text-muted-foreground">
            Our AI video generator uses a multi-stage pipeline optimized specifically for seamless looping. First, a text-to-video diffusion model interprets your prompt and generates a high-quality video sequence. Then, our proprietary loop-blending algorithm analyzes the first and last frames, adjusting color, lighting, and motion to create an imperceptible transition.
          </p>
          <p className="mt-4 text-muted-foreground">
            The result is a video that plays infinitely without any jarring jumps or cuts. This is fundamentally different from general AI video tools that produce linear clips — those require manual editing to create loops, and the results are rarely seamless.
          </p>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Input Options</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { icon: Wand2, title: "Text-to-Loop", text: "Describe any scene in words and watch the AI bring it to life. Perfect for imaginative concepts and scenes you can't photograph." },
              { icon: ImageIcon, title: "Photo-to-Loop", text: "Upload any image and transform it into an animated loop. Ideal for album covers, artwork, and existing visual assets." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border/50 bg-card">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Output Formats and Specs</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/50">
            <table className="w-full text-sm">
              <thead className="bg-card"><tr><th className="px-4 py-3 text-left font-semibold">Spec</th><th className="px-4 py-3 text-left font-semibold">Value</th></tr></thead>
              <tbody className="divide-y divide-border/30">
                {[
                  { s: "Format", v: "MP4 (H.264 / H.265)" },
                  { s: "Resolution", v: "Up to 1080p (Free), 4K (Team)" },
                  { s: "Aspect ratios", v: "9:16, 1:1, 16:9" },
                  { s: "Duration", v: "3-8 seconds (AI-optimized)" },
                  { s: "File size", v: "Typically 500KB - 2MB" },
                  { s: "Frame rate", v: "24-30 fps" },
                ].map((r) => (
                  <tr key={r.s}><td className="px-4 py-3 font-medium">{r.s}</td><td className="px-4 py-3 text-muted-foreground">{r.v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Use Cases for AI-Generated Loop Videos</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Infinity, title: "Website Backgrounds", text: "Ambient full-screen video loops that load fast and play forever." },
              { icon: Zap, title: "Spotify Canvas", text: "9:16 vertical loops optimized for Spotify artist profiles." },
              { icon: Layers, title: "Social Media", text: "Thumb-stopping content for Instagram, TikTok, and YouTube Shorts." },
              { icon: Target, title: "Digital Advertising", text: "High-converting ad creative with motion that never stops." },
              { icon: ImageIcon, title: "Digital Art", text: "Transform static art into living, breathing animated pieces." },
              { icon: CheckCircle2, title: "Presentations", text: "Subtle motion backgrounds for keynote slides and decks." },
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Start Generating Loop Videos</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try, no credit card required.</p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">
            Start Creating Free <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
