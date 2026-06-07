import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "AI Loop Video for Ads — Performance Creative Guide",
  description: "Boost ad creative performance with AI-generated loop videos. Platform strategies for Meta, TikTok, and YouTube ads. Creative testing and CTA design best practices.",
  alternates: { canonical: "/loop-video-ad-creative" },
};

const faqs = [
  { q: "Do loops work for all ad formats?", a: "Best for feed and Stories placements. Meta data shows looping creative outperforms static by 45-65% on CTR. Search ads and banner displays work better with static images or GIF micro-loops. Match creative format to placement user behavior." },
  { q: "What is the ideal ad loop length?", a: "Meta Feed: 6-15s. Instagram Stories: 5-10s. TikTok In-Feed: 9-15s. YouTube bumper: exactly 6s non-skippable. Shorter loops (3-5s) work for retargeting where brand recognition exists. The loop should feel visually complete in one cycle." },
  { q: "Can I use the same loop across platforms?", a: "Platform-native creative performs significantly better. TikTok users scroll past obvious ads — your loop should look like organic content. Meta audiences tolerate polished brand content. YouTube viewers expect higher production values. Create platform-specific variations from your core concept." },
  { q: "How do I scale creative testing with AI loops?", a: "AI enables rapid creative variation: generate 10-20 loop variations with different colors, speeds, and concepts. Upload to Meta with Dynamic Creative Optimization. The algorithm allocates budget to winners automatically. Refresh creative every 2-3 weeks to combat ad fatigue." },
  { q: "Should I add text overlays to ad loops?", a: "Yes, but strategically. Place text outside the primary motion focal point. Keep text minimal — one headline or value proposition. Use high-contrast colors readable against the background. Test text-on vs. text-off variants; clean loops without text often outperform text-heavy versions because they feel more native." },
  { q: "Do I need a commercial license for ad loops?", a: "Yes. Ad creative is commercial use. LoopCanvas Pro includes commercial licensing covering paid advertising, brand content, and client work. The free tier does not cover commercial ad usage. Ensure your license covers all intended ad placements." },
];

const platformSpecs = [
  ["Meta Feed", "6-15s", "1:1 or 4:5", "Hook in first 2s, 85% watched without sound"],
  ["Instagram Stories", "5-10s", "9:16", "Full-screen immersive, native-looking content"],
  ["TikTok In-Feed", "9-15s", "9:16", "Hook in first 0.5s, match trending audio style"],
  ["YouTube Bumper", "Exactly 6s", "16:9", "Non-skippable, one message per ad"],
];

const benchmarks = [
  ["Loop video vs. static image CTR (Meta Feed)", "+45-65%"],
  ["Native loop vs. traditional video CTR (TikTok)", "+200-300%"],
  ["Bumper ad recall rate (YouTube)", "+35%"],
  ["CPA reduction with DCO (combined)", "-20-40%"],
  ["AI creative production cost per variation", "~$0.10"],
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/loop-video-ad-creative" pageName="AI Loop Video for Advertising Creative" description="Boost ad creative performance with AI loops. Platform strategies for Meta, TikTok, and YouTube." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Loop Video for Advertising Creative" }]} />
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI Loop Video for <span className="gradient-text">Ad Creative</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Boost ad performance with AI-generated loop videos. Platform strategies, creative testing frameworks, and performance benchmarks.</p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Why Loop Videos Dominate in Advertising</h2>
          <p className="mt-4 text-muted-foreground">Feed-based ad platforms are attention economies. Your ad competes against friends' photos and viral videos. Loop videos exploit the GIF effect — viewers watch multiple cycles without deciding to continue. Each cycle extends dwell time, which algorithms interpret as quality content.</p>
          <p className="mt-4 text-muted-foreground">Meta's 2025 data shows looping video creative achieves 45-65% higher CTR than static images in feed placements. TikTok reports even stronger lifts — native-looking loop content sees 3-5x higher engagement than traditional ad creative.</p>
        </div>
      </section>

      {/* Platform Strategies */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Platform-Specific Ad Strategies</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b border-border/50"><th className="py-3 pr-4 font-semibold">Platform</th><th className="py-3 pr-4 font-semibold">Duration</th><th className="py-3 pr-4 font-semibold">Aspect</th><th className="py-3 font-semibold">Key Strategy</th></tr></thead>
              <tbody className="divide-y divide-border/30">
                {platformSpecs.map((row, i) => (<tr key={i}>{row.map((cell, j) => (<td key={j} className={`py-3 pr-4 ${j === 0 ? "font-semibold" : ""}`}>{cell}</td>))}</tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Creative Testing + CTA */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Creative Testing at Scale</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold">The 10-Variation Test</h3>
              <p className="mt-2 text-sm text-muted-foreground">Generate 10 variations from one concept: different colors, speeds, angles. Upload to Meta with DCO. Within 48 hours, you will know which visual approach resonates best.</p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold">Weekly Refresh Cycle</h3>
              <p className="mt-2 text-sm text-muted-foreground">Ad fatigue sets in after 2-3 weeks. With AI, generate fresh variations weekly at zero marginal cost. Keep winning concepts; refresh execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Data */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Performance Benchmarks</h2>
          <div className="mt-8 space-y-4">
            {benchmarks.map((row, i) => (
              <div key={i} className={`flex items-center justify-between rounded-lg p-4 ${i === benchmarks.length - 1 ? "bg-primary/10 text-base" : "bg-card"}`}>
                <span className="text-sm">{row[0]}</span>
                <span className="font-bold text-primary">{row[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Explore More</h2>
          <p className="mt-4 text-muted-foreground">Read our <Link href="/ai-loop-video-applications" className="text-primary hover:underline">AI loop applications guide</Link> for more business use cases.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (<div key={faq.q.substring(0, 24)} className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold">{faq.q}</h3><p className="mt-2 text-sm text-muted-foreground">{faq.a}</p></div>))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Create High-Performing Ad Loops</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. No credit card required.</p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Try Text-to-Loop <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </>
  );
}
