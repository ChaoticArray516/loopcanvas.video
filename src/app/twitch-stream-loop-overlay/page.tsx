import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Twitch Stream Loop Overlay — AI Guide | LoopCanvas",
  description: "AI loop overlays and backgrounds for Twitch streamers. Professional visuals without design skills.",
  alternates: { canonical: "twitch-stream-loop-overlay" },
};

const faqs = [
  { q: "Best loop background for Twitch?", a: "Gaming: abstract dark geometric. Just Chatting: subtle gradient or particles. Enhance brand without distraction." },
  { q: "Resolution for stream overlays?", a: "1920x1080 standard. Match output resolution exactly for higher resolutions to avoid scaling artifacts." },
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/twitch-stream-loop-overlay" pageName="AI Loop Overlays for Twitch Streaming" description="AI loop overlays and backgrounds for Twitch streamers. Professional visuals without design skills." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="hero-glow-primary" /><div className="relative z-10 mx-auto max-w-4xl"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Loop Overlays for Twitch Streami" }]} /><div className="text-center"><h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">AI Loop Overlays for Twitch Streaming</h1><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">AI loop overlays and backgrounds for Twitch streamers. Professional visuals without design skills.</p></div></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Visuals Drive Stream Growth</h3><p className="mt-2 text-muted-foreground">A streamer has about 3 seconds to convince a browser to stay. Visual presentation communicates professionalism before the streamer speaks. AI loop backgrounds provide quality without commissioning custom graphics.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Types of Stream Graphics</h3><p className="mt-2 text-muted-foreground">Starting soon: looped visual with schedule. BRB: calming loop during breaks. Stream background: persistent visual behind gameplay. Alert animations: short loops for follows, subs, donations. Each serves different purpose with consistent style.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Style by Content Category</h3><p className="mt-2 text-muted-foreground">Gaming: high-energy abstract — neon grids, particle effects. Just Chatting: subtle calm backgrounds. Music/Creative: genre-appropriate visualizers. Your background should match your content and brand.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">OBS Setup</h3><p className="mt-2 text-muted-foreground">Add AI loop as Media Source. Set loop and mute. Place as bottom layer. With green screen, camera on top. Without, add frame element for camera-background separation.</p></div>
      </div></section>
      <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="font-heading text-2xl font-bold sm:text-3xl">Explore More</h2><p className="mt-4 text-muted-foreground">Read our <Link href="/ai-loop-video-applications" className="text-primary hover:underline">AI loop applications</Link> for in-depth coverage.</p></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2><div className="mt-10 space-y-4">{faqs.map((faq) => (<div key={faq.q.substring(0,16)} className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold">{faq.q}</h3><p className="mt-2 text-sm text-muted-foreground">{faq.a}</p></div>))}</div></div></section>
      <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center"><h2 className="font-heading text-3xl font-bold tracking-tight text-white">Start Creating Loop Videos</h2><p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. 5 daily generations. No credit card.</p><Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Try Text-to-Loop <ArrowRight className="h-5 w-5" /></Link></div></section>
    </>
  );
}
