import Link from "next/link";
import { ArrowRight, Music, CheckCircle2, Zap, ImageIcon, Upload, Play, Headphones, Radio, Guitar, Piano } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import SpotifyCanvasJsonLd from "@/components/seo/SpotifyCanvasJsonLd";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Spotify Canvas Maker — AI Loop Video Generator for Artists | LoopCanvas",
  description:
    "Create stunning Spotify Canvas videos with AI. Turn text prompts or images into seamless 3-8 second looping videos optimized for Spotify artist profiles. Free to try.",
  alternates: { canonical: "/spotify-canvas-maker" },
  openGraph: {
    title: "Spotify Canvas Maker — AI Loop Video Generator for Artists | LoopCanvas",
    description: "Create stunning Spotify Canvas videos with AI.",
    url: "/spotify-canvas-maker",
    type: "website",
  },
};

const faqs = [
  { q: "What is a Spotify Canvas?", a: "Spotify Canvas is a 3-8 second looping video that appears in the Now Playing view of the Spotify mobile app. It helps artists engage listeners, increase track shares, and make their music more memorable." },
  { q: "Do I need a Spotify for Artists account?", a: "Yes, you need access to Spotify for Artists to upload Canvas videos to your tracks. LoopCanvas AI generates the video file; you upload it through Spotify for Artists." },
  { q: "Can I use the same Canvas for multiple tracks?", a: "Technically yes, but Spotify recommends unique Canvases per track for better engagement. Our AI makes it easy to generate variations quickly so each track can have its own visual." },
  { q: "What makes a good Spotify Canvas?", a: "A good Canvas loops seamlessly, matches the mood of your track, and avoids text or complex graphics that distract from the music. Our AI optimizes for all of these factors automatically." },
  { q: "What are the exact Spotify Canvas specs?", a: "Spotify Canvas must be: MP4 or MOV format, 9:16 vertical aspect ratio, 3-8 seconds duration, between 720px and 1080px tall, under 8MB file size, and seamlessly looping." },
  { q: "Does Canvas increase streams?", a: "Yes. Spotify data shows that tracks with Canvas see up to 145% more shares, 20% more playlist adds, and 5% higher stream completion rates. Canvas is one of the most effective free marketing tools for artists." },
  { q: "Can I create Canvas for any genre?", a: "Absolutely. LoopCanvas works for all genres — from ambient electronic to heavy metal. The AI adapts the visual style based on your prompt, so you can create Canvas that matches your music's unique vibe." },
  { q: "How much does it cost to create a Spotify Canvas?", a: "LoopCanvas offers 5 free generations per day. Most artists can create their entire Canvas library on the free tier. Pro plans unlock HD quality and commercial licensing for label releases." },
];

const howToSteps = [
  { name: "Generate your Canvas", text: "Use LoopCanvas to create a 3-8 second seamless loop video that matches your track's mood and style." },
  { name: "Download in correct format", text: "Export as MP4 in 9:16 vertical format. Our Spotify Canvas preset handles all specs automatically." },
  { name: "Open Spotify for Artists", text: "Log in to your Spotify for Artists dashboard on desktop or mobile." },
  { name: "Navigate to your track", text: "Find the track you want to add Canvas to in your discography." },
  { name: "Upload and preview", text: "Upload your LoopCanvas MP4 file. Preview it in the app to ensure it looks perfect before publishing." },
];

export default function SpotifyCanvasPage() {
  return (
    <>
      <SpotifyCanvasJsonLd />
      <LandingPageJsonLd
        pagePath="/spotify-canvas-maker"
        pageName="Spotify Canvas Maker"
        description="Create stunning Spotify Canvas videos with AI. Turn text prompts or images into seamless 3-8 second looping videos."
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        howToSteps={howToSteps}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Spotify Canvas Maker" }]} />

          <div className="text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Spotify Canvas Maker —{" "}
            <span className="gradient-text">AI Loop Videos for Artists</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Create eye-catching Spotify Canvas videos in seconds. AI generates seamless 3-8 second loops
            in the perfect 9:16 vertical format for your artist profile.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> 9:16 vertical format</span>
            <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-primary" /> 3-8 second loops</span>
            <span className="flex items-center gap-1.5"><Music className="h-4 w-4 text-primary" /> Spotify-ready export</span>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/photo-to-loop" className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium">
              <ImageIcon className="h-5 w-5" /> Create Your Canvas
            </Link>
            <Link href="/text-to-loop" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-white/5">
              <Zap className="h-5 w-5" /> Try Text-to-Loop
            </Link>
        </div>
        </div>
        </div>
      </section>

      {/* Requirements Specs */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Spotify Canvas Requirements and Specs</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/50">
            <table className="w-full text-sm">
              <thead className="bg-card"><tr>
                <th className="px-4 py-3 text-left font-semibold">Requirement</th>
                <th className="px-4 py-3 text-left font-semibold">Specification</th>
                <th className="px-4 py-3 text-left font-semibold">Why It Matters</th>
              </tr></thead>
              <tbody className="divide-y divide-border/30">
                {[
                  { req: "Format", spec: "MP4 (H.264)", why: "Universal compatibility across all devices" },
                  { req: "Aspect Ratio", spec: "9:16 vertical", why: "Matches mobile screen orientation" },
                  { req: "Duration", spec: "3-8 seconds", why: "Sweet spot for engagement without repetition fatigue" },
                  { req: "Resolution", spec: "Minimum 720px tall", why: "Crisp display on high-DPI screens" },
                  { req: "File Size", spec: "Max 8MB", why: "Fast loading on mobile networks" },
                  { req: "Loop", spec: "Seamless infinite", why: "No jarring jump = longer watch time" },
                ].map((r) => (
                  <tr key={r.req}><td className="px-4 py-3 font-medium">{r.req}</td><td className="px-4 py-3 text-muted-foreground">{r.spec}</td><td className="px-4 py-3 text-muted-foreground">{r.why}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Upload */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">How to Upload Spotify Canvas</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Best Practices */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Spotify Canvas Best Practices</h2>
          <div className="mt-10 space-y-4">
            {[
              { title: "Match the song's energy", text: "A calm acoustic track pairs with gentle nature loops; an EDM banger needs fast, vibrant motion." },
              { title: "No text or logos", text: "Spotify discourages text in Canvas. Let the visual speak for itself." },
              { title: "Keep it under 8 seconds", text: "Shorter loops feel fresher on repeated plays. 4-6 seconds is the sweet spot." },
              { title: "Use vertical 9:16 format", text: "Horizontal or square videos get cropped awkwardly on mobile. Always export vertical." },
              { title: "Make it truly seamless", text: "Test your loop 10+ times. Any visible jump will annoy repeat listeners." },
              { title: "Create unique Canvas per track", text: "Spotify data shows unique Canvases get 20% more engagement than reused ones." },
            ].map((item, i) => (
              <div key={item.title} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                <div><h3 className="font-semibold">{item.title}</h3><p className="text-sm text-muted-foreground">{item.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideas by Genre */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Spotify Canvas Ideas by Genre</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Music, title: "Pop", text: "Colorful particle bursts, city lights, or fashion-forward motion that matches upbeat energy." },
              { icon: Zap, title: "Hip-Hop", text: "Urban textures, graffiti animations, or luxury aesthetics with slow, confident motion." },
              { icon: Radio, title: "Electronic", text: "Abstract waveforms, pulsing geometric patterns, or neon-lit futuristic scenes." },
              { icon: Guitar, title: "Rock", text: "Fire, smoke, or nature elements with raw, powerful motion that conveys intensity." },
              { icon: Piano, title: "Classical", text: "Elegant flowing fabrics, nature landscapes, or architectural details with graceful movement." },
              { icon: Headphones, title: "Lo-Fi", text: "Cozy indoor scenes, rain on windows, or animated vinyl records with gentle, calming loops." },
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Create Your Spotify Canvas Now</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try, no credit card required.</p>
          <Link href="/photo-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">
            Create Your Canvas <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
