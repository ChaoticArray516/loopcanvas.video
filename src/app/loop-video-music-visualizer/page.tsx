import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "AI Music Visualizer — Sound-Reactive Guide | LoopCanvas",
  description: "Create AI-generated music visualizer loops. Sound-reactive visuals for YouTube, Canvas, and live shows.",
  alternates: { canonical: "loop-video-music-visualizer" },
};

const faqs = [
  { q: "Can AI create audio-reactive visuals?", a: "AI generates static loops. Audio reactivity needs VJ software modulating parameters from live audio input." },
  { q: "Format for live visuals?", a: "MP4 at 1080p or 4K. Pre-render before show — live AI generation is not yet performance-reliable." },
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/loop-video-music-visualizer" pageName="AI Music Visualizer — From Prompt to Stage" description="Create AI-generated music visualizer loops. Sound-reactive visuals for YouTube, Canvas, and live shows." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="hero-glow-primary" /><div className="relative z-10 mx-auto max-w-4xl"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Music Visualizer — From Prompt t" }]} /><div className="text-center"><h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">AI Music Visualizer — <span className="gradient-text">From Prompt to Stage</span></h1><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Create AI-generated music visualizer loops. Sound-reactive visuals for YouTube, Canvas, and live shows.</p></div></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">What Is a Music Visualizer</h3><p className="mt-2 text-muted-foreground">A visualizer generates animated imagery responding to audio — pulsing geometry, color shifts, morphing shapes synced to beats. AI loops provide the base visual style; separate VJ tools add real-time audio reactivity for live shows.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Static Visualizer Loops</h3><p className="mt-2 text-muted-foreground">For YouTube and Canvas, generate loops matching your genre. Electronic pairs with geometric pulsing. Ambient with slow color shifts. Hip-hop with urban textures. Describe the audio-visual relationship in the prompt.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Adding Audio Reactivity</h3><p className="mt-2 text-muted-foreground">AI generates static loops. Tools like Resolume and Synesthesia analyze audio and modulate visual parameters in real time. AI creates the base visual; VJ software adds performance-layer reactivity.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Live Performance Setup</h3><p className="mt-2 text-muted-foreground">Run AI loops through VJ software with audio input. Map MIDI controllers to switch scenes. Pre-render 5-10 styles before show, each mapped to a song.</p></div>
      </div></section>
      <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="font-heading text-2xl font-bold sm:text-3xl">Explore More</h2><p className="mt-4 text-muted-foreground">Read our <Link href="/music-visual-content-guide" className="text-primary hover:underline">music visual guide</Link> for in-depth coverage.</p></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2><div className="mt-10 space-y-4">{faqs.map((faq) => (<div key={faq.q.substring(0,16)} className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold">{faq.q}</h3><p className="mt-2 text-sm text-muted-foreground">{faq.a}</p></div>))}</div></div></section>
      <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center"><h2 className="font-heading text-3xl font-bold tracking-tight text-white">Start Creating Loop Videos</h2><p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. 5 daily generations. No credit card.</p><Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Try Text-to-Loop <ArrowRight className="h-5 w-5" /></Link></div></section>
    </>
  );
}
