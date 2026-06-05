import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Spotify Canvas vs Lyric Video — Format Guide | LoopCanvas",
  description: "Compare Spotify Canvas and lyric videos. When to use each format, technical specs, and AI creation workflows.",
  alternates: { canonical: "spotify-canvas-vs-lyric-video" },
};

const faqs = [
  { q: "Do I need both Canvas and lyric video?", a: "Canvas is essential. Lyric videos are recommended for lead singles. Canvas drives Spotify; lyric videos drive YouTube." },
  { q: "Can one video serve both?", a: "No. Canvas is 3-8s silent. Lyric videos are 2-4min with text. Use consistent visual style across both." },
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/spotify-canvas-vs-lyric-video" pageName="Spotify Canvas vs Lyric Video — Format Choice" description="Compare Spotify Canvas and lyric videos. When to use each format, technical specs, and AI creation workflows." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="hero-glow-primary" /><div className="relative z-10 mx-auto max-w-4xl"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Spotify Canvas vs Lyric Video — For" }]} /><div className="text-center"><h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">Spotify Canvas vs Lyric Video — <span className="gradient-text">Format Choice</span></h1><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Compare Spotify Canvas and lyric videos. When to use each format, technical specs, and AI creation workflows.</p></div></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Spotify Canvas: Always-On Visual</h3><p className="mt-2 text-muted-foreground">Canvas is a 3-8 second silent looping video in the Now Playing view. Every mobile listener sees it. It serves as visual atmosphere and brand building, not information delivery. Think of it as album art in motion.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Lyric Video: Active Engagement</h3><p className="mt-2 text-muted-foreground">Lyric videos display synchronized text, typically 2-4 minutes. They dominate YouTube search and drive social sharing. Unlike atmospheric Canvas, lyric videos actively engage viewers with song content.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">When to Use Each Format</h3><p className="mt-2 text-muted-foreground">Canvas is default — every release should have one. It is free, fast to create with AI. Lyric videos are worth it for lead singles. Budget limited? Canvas first, lyric video second.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Creating Both with AI Tools</h3><p className="mt-2 text-muted-foreground">AI generates the Canvas base directly. For lyric videos, generate background loops with AI, overlay lyrics in CapCut or DaVinci Resolve. The AI provides atmosphere; the lyrics provide engagement.</p></div>
      </div></section>
      <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="font-heading text-2xl font-bold sm:text-3xl">Explore More</h2><p className="mt-4 text-muted-foreground">Read our <Link href="/spotify-canvas-handbook" className="text-primary hover:underline">Spotify Canvas handbook</Link> for in-depth coverage.</p></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2><div className="mt-10 space-y-4">{faqs.map((faq) => (<div key={faq.q.substring(0,16)} className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold">{faq.q}</h3><p className="mt-2 text-sm text-muted-foreground">{faq.a}</p></div>))}</div></div></section>
      <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center"><h2 className="font-heading text-3xl font-bold tracking-tight text-white">Start Creating Loop Videos</h2><p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. 5 daily generations. No credit card.</p><Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Try Text-to-Loop <ArrowRight className="h-5 w-5" /></Link></div></section>
    </>
  );
}
