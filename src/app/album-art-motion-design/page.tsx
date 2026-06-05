import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Album Art Animation — Motion Design Guide | LoopCanvas",
  description: "Transform static album artwork into animated loop videos. Motion design principles and AI workflow for musicians.",
  alternates: { canonical: "album-art-motion-design" },
};

const faqs = [
  { q: "What resolution for album art animation?", a: "At least 1500x1500, ideally 3000x3000+. Higher resolution gives AI more detail for depth detection." },
  { q: "Will animating distort my album art?", a: "Not with subtle settings. Start at 15-25% motion intensity. Photo-to-Loop preserves original composition." },
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/album-art-motion-design" pageName="How to Animate Album Art into Loop Videos" description="Transform static album artwork into animated loop videos. Motion design principles and AI workflow for musicians." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="hero-glow-primary" /><div className="relative z-10 mx-auto max-w-4xl"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "How to Animate Album Art into Loop " }]} /><div className="text-center"><h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">How to Animate Album Art into Loop Videos</h1><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Transform static album artwork into animated loop videos. Motion design principles and AI workflow for musicians.</p></div></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Why Animate Album Art</h3><p className="mt-2 text-muted-foreground">Album art already represents your music visually. Animating it maintains brand consistency while adding motion benefits. Fans recognize the animated version; new listeners connect the Canvas with static art they find elsewhere.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Motion Design Principles</h3><p className="mt-2 text-muted-foreground">Subtle is always better. Gentle parallax, slow particle drift, or soft pulsing light creates atmosphere without overwhelming the original design. Avoid transformations that lose the artwork identity.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Photo-to-Loop for Album Art</h3><p className="mt-2 text-muted-foreground">Upload high-resolution art (1500x1500+ pixels, PNG preferred). Choose Photo-to-Loop. Add a prompt describing desired motion: gentle wave motion, subtle light shimmer, slow parallax depth effect.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Technical Considerations</h3><p className="mt-2 text-muted-foreground">Source quality determines output quality. Use highest resolution available. If artwork has text, ensure motion does not distort it. Preview at mobile screen size — where most viewers see Canvas.</p></div>
      </div></section>
      <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="font-heading text-2xl font-bold sm:text-3xl">Explore More</h2><p className="mt-4 text-muted-foreground">Read our <Link href="/spotify-canvas-handbook" className="text-primary hover:underline">Spotify Canvas handbook</Link> for in-depth coverage.</p></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2><div className="mt-10 space-y-4">{faqs.map((faq) => (<div key={faq.q.substring(0,16)} className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold">{faq.q}</h3><p className="mt-2 text-sm text-muted-foreground">{faq.a}</p></div>))}</div></div></section>
      <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center"><h2 className="font-heading text-3xl font-bold tracking-tight text-white">Start Creating Loop Videos</h2><p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. 5 daily generations. No credit card.</p><Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Try Text-to-Loop <ArrowRight className="h-5 w-5" /></Link></div></section>
    </>
  );
}
