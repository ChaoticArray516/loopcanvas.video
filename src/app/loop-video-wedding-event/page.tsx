import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Loop Video for Weddings and Events | LoopCanvas",
  description: "AI loop videos for weddings, parties, and corporate events. Ambient visuals for projection and displays.",
  alternates: { canonical: "loop-video-wedding-event" },
};

const faqs = [
  { q: "AI loops for wedding projection?", a: "Yes. Generate at projector native resolution. Always test before event day." },
  { q: "Commercial licensing for events?", a: "For commercial events, yes. For personal events, free tier works. LoopCanvas Pro includes commercial event licensing." },
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/loop-video-wedding-event" pageName="AI Loop Videos for Weddings and Events" description="AI loop videos for weddings, parties, and corporate events. Ambient visuals for projection and displays." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="hero-glow-primary" /><div className="relative z-10 mx-auto max-w-4xl"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Loop Videos for Weddings and Eve" }]} /><div className="text-center"><h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">AI Loop Videos for Weddings and Events</h1><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">AI loop videos for weddings, parties, and corporate events. Ambient visuals for projection and displays.</p></div></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Loop Video in Event Design</h3><p className="mt-2 text-muted-foreground">Event designers use digital displays increasingly. AI loops provide custom visuals at a fraction of commissioned costs. For weddings: gold particles and floating petals. For corporate: branded loops across every screen.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Wedding Visual Themes</h3><p className="mt-2 text-muted-foreground">Popular: soft gold and champagne particles for elegance, floral animations matching centerpieces, starry night skies for evening receptions, abstract watercolor washes in wedding colors. Export 4K for projection, 1080p for signage.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Live Event Requirements</h3><p className="mt-2 text-muted-foreground">Test all loops on actual display hardware before event day. Projectors and LED walls calibrate differently than monitors. Export at native resolution. Keep USB backups, not just cloud copies.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Corporate Event Branding</h3><p className="mt-2 text-muted-foreground">Incorporate brand colors into prompts. Generate abstract patterns in brand palette. Add logo overlay in playback software. Create 5-10 different loops to cycle throughout the event.</p></div>
      </div></section>
      <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="font-heading text-2xl font-bold sm:text-3xl">Explore More</h2><p className="mt-4 text-muted-foreground">Read our <Link href="/ai-loop-video-applications" className="text-primary hover:underline">AI loop applications</Link> for in-depth coverage.</p></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2><div className="mt-10 space-y-4">{faqs.map((faq) => (<div key={faq.q.substring(0,16)} className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold">{faq.q}</h3><p className="mt-2 text-sm text-muted-foreground">{faq.a}</p></div>))}</div></div></section>
      <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center"><h2 className="font-heading text-3xl font-bold tracking-tight text-white">Start Creating Loop Videos</h2><p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. 5 daily generations. No credit card.</p><Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Try Text-to-Loop <ArrowRight className="h-5 w-5" /></Link></div></section>
    </>
  );
}
