import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Online Course Backgrounds — AI Loop Guide | LoopCanvas",
  description: "Professional loop backgrounds for online courses and tutorials. Non-distracting, brand-consistent visuals.",
  alternates: { canonical: "online-course-loop-background" },
};

const faqs = [
  { q: "Best background for online teaching?", a: "Mid-tone abstract gradient with extremely subtle motion. Professional without distracting." },
  { q: "AI backgrounds with Zoom?", a: "Yes. Export MP4 at 1920x1080. Zoom supports video virtual backgrounds." },
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/online-course-loop-background" pageName="AI Loop Backgrounds for Online Courses" description="Professional loop backgrounds for online courses and tutorials. Non-distracting, brand-consistent visuals." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="hero-glow-primary" /><div className="relative z-10 mx-auto max-w-4xl"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Loop Backgrounds for Online Cour" }]} /><div className="text-center"><h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">AI Loop Backgrounds for Online Courses</h1><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Professional loop backgrounds for online courses and tutorials. Non-distracting, brand-consistent visuals.</p></div></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Visual Quality in Education</h3><p className="mt-2 text-muted-foreground">Students judge courses within 30 seconds. A well-designed background signals professionalism. AI backgrounds offer visual interest without distraction — a middle ground between cluttered office and blank wall.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Optimal Education Backgrounds</h3><p className="mt-2 text-muted-foreground">Soft abstract designs in muted tones. Geometric patterns in brand colors. Avoid nature scenes unless relevant. Avoid pure black or white — both cause webcam exposure issues. Mid-tone gradient with subtle motion is ideal.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Streaming and Recording Setup</h3><p className="mt-2 text-muted-foreground">Zoom: use virtual background with MP4 loop. Pre-recorded: composite loop behind camera in OBS. Add loop as media source, place camera on top, apply chroma key with green screen.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Course Consistency</h3><p className="mt-2 text-muted-foreground">Use same background style across all lessons. Creates visual continuity and brand recognition. Vary color slightly for different courses while maintaining family look.</p></div>
      </div></section>
      <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="font-heading text-2xl font-bold sm:text-3xl">Explore More</h2><p className="mt-4 text-muted-foreground">Read our <Link href="/ai-loop-video-applications" className="text-primary hover:underline">AI loop applications</Link> for in-depth coverage.</p></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2><div className="mt-10 space-y-4">{faqs.map((faq) => (<div key={faq.q.substring(0,16)} className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold">{faq.q}</h3><p className="mt-2 text-sm text-muted-foreground">{faq.a}</p></div>))}</div></div></section>
      <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center"><h2 className="font-heading text-3xl font-bold tracking-tight text-white">Start Creating Loop Videos</h2><p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. 5 daily generations. No credit card.</p><Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Try Text-to-Loop <ArrowRight className="h-5 w-5" /></Link></div></section>
    </>
  );
}
