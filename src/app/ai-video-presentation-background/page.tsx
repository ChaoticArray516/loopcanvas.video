import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "AI Video Backgrounds for Presentations | LoopCanvas",
  description: "AI-generated loop backgrounds for presentations, pitch decks, and webinars. Professional, non-distracting motion.",
  alternates: { canonical: "ai-video-presentation-background" },
};

const faqs = [
  { q: "Will a video background distract?", a: "Not with slow minimal motion in muted colors. Test: ask someone to read content while video plays." },
  { q: "Format for presentation backgrounds?", a: "MP4 H.264 at 1920x1080 (16:9). Universal support across Keynote, PowerPoint, Google Slides." },
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/ai-video-presentation-background" pageName="AI Video Backgrounds for Presentations" description="AI-generated loop backgrounds for presentations, pitch decks, and webinars. Professional, non-distracting motion." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="hero-glow-primary" /><div className="relative z-10 mx-auto max-w-4xl"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Video Backgrounds for Presentati" }]} /><div className="text-center"><h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">AI Video Backgrounds for Presentations</h1><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">AI-generated loop backgrounds for presentations, pitch decks, and webinars. Professional, non-distracting motion.</p></div></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Why Motion Improves Presentations</h3><p className="mt-2 text-muted-foreground">Subtle animation adds interest without distraction. Upward movement suggests growth. Circular motion implies continuity. In competitive pitch environments, tasteful animation signals preparation and attention to detail.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Choosing Background Style</h3><p className="mt-2 text-muted-foreground">For corporate: minimal abstract patterns in subdued brand colors. Slow geometric gradients, soft light particles, subtle waves. Avoid nature scenes unless relevant. Background should be barely noticeable when reading content.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Keynote and PowerPoint Setup</h3><p className="mt-2 text-muted-foreground">Both support video backgrounds. Export 16:9 at 1920x1080. Keynote: Format {'>'} Background {'>'} video. PowerPoint: Design {'>'} Format Background {'>'} file. Test on actual display — colors shift dramatically on projection.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Accessibility</h3><p className="mt-2 text-muted-foreground">Not everyone tolerates motion. Offer static alternative. Avoid video on data-heavy slides. Use motion on title slides, section dividers, and conclusion slides where information density is low.</p></div>
      </div></section>
      <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="font-heading text-2xl font-bold sm:text-3xl">Explore More</h2><p className="mt-4 text-muted-foreground">Read our <Link href="/ai-loop-video-applications" className="text-primary hover:underline">AI loop applications</Link> for in-depth coverage.</p></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2><div className="mt-10 space-y-4">{faqs.map((faq) => (<div key={faq.q.substring(0,16)} className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold">{faq.q}</h3><p className="mt-2 text-sm text-muted-foreground">{faq.a}</p></div>))}</div></div></section>
      <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center"><h2 className="font-heading text-3xl font-bold tracking-tight text-white">Start Creating Loop Videos</h2><p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. 5 daily generations. No credit card.</p><Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Try Text-to-Loop <ArrowRight className="h-5 w-5" /></Link></div></section>
    </>
  );
}
