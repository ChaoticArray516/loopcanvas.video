import Link from "next/link";
import { ArrowRight, Wand2, CheckCircle2, Monitor, Music, Share2, Globe } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Text-to-Video AI — Free Loop Video Generator | LoopCanvas",
  description:
    "Turn text descriptions into mesmerizing loop videos with AI. Free text-to-video generator. No signup required. HD export. Perfect for Spotify Canvas and social media.",
  alternates: { canonical: "/text-to-video" },
  openGraph: {
    title: "Text-to-Video AI — Free Loop Video Generator | LoopCanvas",
    description: "Turn text descriptions into mesmerizing loop videos with AI.",
    url: "/text-to-video",
    type: "website",
  },
};

const faqs = [
  { q: "How does text-to-video AI work?", a: "You type a description of the scene you want — for example, 'a serene ocean wave crashing on a tropical beach at sunset.' Our AI interprets your text, generates a matching video sequence, and then seamlessly loops it so it plays infinitely without any visible transition." },
  { q: "What makes a good text-to-video prompt?", a: "The best prompts are specific and descriptive. Include details about colors, lighting, motion, atmosphere, and style. For example: 'Soft pink cherry blossoms falling in slow motion against a pale blue sky, cinematic lighting, gentle breeze.'" },
  { q: "Is text-to-video really free?", a: "Yes! LoopCanvas offers 5 free text-to-video generations per day on the free tier. No credit card or signup is required to start. Pro plans unlock more generations, HD quality, and commercial licensing." },
  { q: "How long does text-to-video generation take?", a: "Most videos are generated in 10-30 seconds. The AI handles scene generation, motion synthesis, and seamless looping all in one pass — much faster than traditional video production." },
  { q: "Can I edit the video after generation?", a: "LoopCanvas generates final MP4 files ready for immediate use. For advanced editing, you can download the file and edit it in any video software. However, most users find the AI output ready to use as-is." },
  { q: "What platforms support text-to-video loops?", a: "All major platforms support MP4 loops: Spotify Canvas, Instagram Reels, TikTok, YouTube Shorts, Twitter/X, and any website that supports HTML5 video. LoopCanvas exports are optimized for each platform." },
];

const howToSteps = [
  { name: "Describe your scene", text: "Type a detailed text prompt describing the visual you want. Include colors, mood, motion, and style." },
  { name: "AI generates video", text: "Our AI creates a short video clip based on your description, then seamlessly loops it." },
  { name: "Download and share", text: "Export as HD MP4 and use it anywhere — Spotify, social media, websites, or presentations." },
];

export default function TextToVideoPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/text-to-video"
        pageName="Text-to-Video AI"
        description="Turn text descriptions into mesmerizing loop videos with AI. Free text-to-video generator."
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        howToSteps={howToSteps}
      />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Text to Video" }]} />

          <div className="text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Text-to-Video AI —{" "}
            <span className="gradient-text">Describe Any Scene, Watch It Come to Life</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Turn text descriptions into mesmerizing loop videos with AI.
            Free text-to-video generator. No signup required. HD export.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/text-to-loop" className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium">
              <Wand2 className="h-5 w-5" /> Try Text-to-Loop
            </Link>
        </div>
        </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">How Text-to-Video AI Works</h2>
          <p className="mt-4 text-muted-foreground">
            Text-to-video AI transforms written descriptions into fully realized video content. The process begins with a large language model that interprets your prompt — understanding not just objects and colors, but also motion, lighting, atmosphere, and artistic style.
          </p>
          <p className="mt-4 text-muted-foreground">
            This interpretation is then fed into a diffusion-based video generation model, which synthesizes frames one by one, ensuring temporal consistency and smooth motion. Finally, our seamless looping algorithm blends the start and end frames so the video plays infinitely without interruption.
          </p>
          <p className="mt-4 text-muted-foreground">
            The entire process takes 10-30 seconds, compared to hours or days of traditional video production. No cameras, no actors, no editing software — just your imagination and AI.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Text-to-Video vs Traditional Video Creation</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/50">
            <table className="w-full text-sm">
              <thead className="bg-card">
                <tr><th className="px-4 py-3 text-left font-semibold">Factor</th><th className="px-4 py-3 text-left font-semibold text-primary">Text-to-Video AI</th><th className="px-4 py-3 text-left font-semibold text-muted-foreground">Traditional</th></tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {[
                  { factor: "Speed", ai: "10-30 seconds", trad: "Hours to days" },
                  { factor: "Cost", ai: "Free tier available", trad: "Equipment + crew + editing" },
                  { factor: "Skills needed", ai: "None — just describe", trad: "Filming, editing, VFX" },
                  { factor: "Output quality", ai: "HD, seamless loops", trad: "Depends on equipment" },
                  { factor: "Revisions", ai: "Instant — just re-prompt", trad: "Reshoot or re-edit" },
                  { factor: "Loop creation", ai: "Automatic seamless", trad: "Manual frame matching" },
                ].map((r) => (
                  <tr key={r.factor}><td className="px-4 py-3 font-medium">{r.factor}</td><td className="px-4 py-3 text-muted-foreground">{r.ai}</td><td className="px-4 py-3 text-muted-foreground">{r.trad}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Best Prompts for Text-to-Video Generation</h2>
          <div className="mt-10 space-y-4">
            {[
              { prompt: "Gentle ocean waves washing over white sand at sunset, warm golden light, slow motion, cinematic", result: "Perfect for website backgrounds and meditation content" },
              { prompt: "Neon city street at night with rain reflections, cyberpunk aesthetic, slow pan, vibrant colors", result: "Great for Spotify Canvas and electronic music visuals" },
              { prompt: "Cherry blossom petals drifting in a soft breeze, pale pink and white, dreamy atmosphere", result: "Ideal for lo-fi music and peaceful social content" },
              { prompt: "Abstract fluid art in purple and gold, slow morphing shapes, luxurious feel", result: "Perfect for album covers and digital art projects" },
              { prompt: "Starry night sky with slow-moving aurora borealis, deep blue and green, serene", result: "Excellent for ambient backgrounds and relaxation content" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-border/50 bg-card p-5">
                <p className="text-sm font-medium text-primary">&quot;{item.prompt}&quot;</p>
                <p className="mt-2 text-sm text-muted-foreground">→ {item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Text-to-Video Use Cases</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { icon: Music, title: "Spotify Canvas", text: "Turn song descriptions into matching visual loops that enhance listener engagement." },
              { icon: Share2, title: "Social Media", text: "Create unique content for Instagram Reels, TikTok, and YouTube Shorts without filming." },
              { icon: Globe, title: "Website Backgrounds", text: "Generate custom ambient video backgrounds tailored to your brand aesthetic." },
              { icon: Monitor, title: "Presentations", text: "Add motion to slide decks with AI-generated visual metaphors for your key points." },
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

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Why LoopCanvas for Text-to-Video</h2>
          <div className="mt-10 space-y-4">
            {[
              { title: "Fast generation", text: "Most videos ready in 10-30 seconds. No queues, no waiting." },
              { title: "Free tier", text: "5 free generations daily. No credit card, no signup required." },
              { title: "HD export", text: "Download crisp 1080p MP4 files optimized for any platform." },
              { title: "Seamless loops", text: "Automatic infinite looping — no manual editing needed." },
              { title: "Spotify optimized", text: "9:16 vertical format with 3-8 second duration presets." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Create Your First Text-to-Video</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try, no credit card required.</p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">
            Start Creating Free <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
