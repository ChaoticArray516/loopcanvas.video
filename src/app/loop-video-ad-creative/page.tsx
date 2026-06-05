import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "AI Loop Video for Ads — Performance Guide | LoopCanvas",
  description: "Boost ad creative performance with AI loops. Platform strategies for Meta, TikTok, and YouTube ads.",
  alternates: { canonical: "loop-video-ad-creative" },
};

const faqs = [
  { q: "Loops work for all ad formats?", a: "Best for feed and Stories. Search ads and banners work better with static or GIF micro-loops." },
  { q: "How long should ad loops be?", a: "Meta: 6-15s. TikTok: 9-15s. YouTube bumper: exactly 6s. Loop should feel complete in one cycle." },
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/loop-video-ad-creative" pageName="AI Loop Video for Advertising Creative" description="Boost ad creative performance with AI loops. Platform strategies for Meta, TikTok, and YouTube ads." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="hero-glow-primary" /><div className="relative z-10 mx-auto max-w-4xl"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Loop Video for Advertising Creat" }]} /><div className="text-center"><h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">AI Loop Video for Advertising Creative</h1><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Boost ad creative performance with AI loops. Platform strategies for Meta, TikTok, and YouTube ads.</p></div></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Why Loops Perform in Ads</h3><p className="mt-2 text-muted-foreground">Feed-based ad platforms reward attention-holding content. Loops exploit GIF psychology — viewers watch multiple cycles without deciding to. Meta data shows looping creative outperforms static by 45-65% on CTR.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Platform Strategies</h3><p className="mt-2 text-muted-foreground">Meta: 15-second max feed, 9:16 Stories. Focus on first 2 seconds. TikTok: 9-15s native-looking content. YouTube: 6s bumper ads. A perfect loop makes the entire ad feel complete.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Creative Testing at Scale</h3><p className="mt-2 text-muted-foreground">AI speed enables rapid testing. Generate 10 variations with different colors and speeds. Run in single ad set with dynamic optimization. Meta allocates budget to best performers automatically.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">CTA Integration</h3><p className="mt-2 text-muted-foreground">Loop should draw attention to CTA without competing. Place text outside focal point. Add CTA in last 2 seconds — full-cycle viewers are highest-intent.</p></div>
      </div></section>
      <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="font-heading text-2xl font-bold sm:text-3xl">Explore More</h2><p className="mt-4 text-muted-foreground">Read our <Link href="/ai-loop-video-applications" className="text-primary hover:underline">AI loop applications</Link> for in-depth coverage.</p></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2><div className="mt-10 space-y-4">{faqs.map((faq) => (<div key={faq.q.substring(0,16)} className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold">{faq.q}</h3><p className="mt-2 text-sm text-muted-foreground">{faq.a}</p></div>))}</div></div></section>
      <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center"><h2 className="font-heading text-3xl font-bold tracking-tight text-white">Start Creating Loop Videos</h2><p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. 5 daily generations. No credit card.</p><Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Try Text-to-Loop <ArrowRight className="h-5 w-5" /></Link></div></section>
    </>
  );
}
