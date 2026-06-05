import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "AI Loop Video for E-Commerce Product Showcase | LoopCanvas",
  description: "Boost e-commerce conversion with AI loop videos. Product animations and platform integration.",
  alternates: { canonical: "loop-video-ecommerce-product" },
};

const faqs = [
  { q: "Do product loops increase sales?", a: "Yes. Studies show 30-80% conversion improvement. Subtle motion communicating quality is most effective." },
  { q: "AI product videos on Amazon?", a: "Yes, in A+ Content and brand stores. Check current Amazon Creative Assets guidelines." },
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/loop-video-ecommerce-product" pageName="AI Loop Video for E-Commerce Products" description="Boost e-commerce conversion with AI loop videos. Product animations and platform integration." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="hero-glow-primary" /><div className="relative z-10 mx-auto max-w-4xl"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Loop Video for E-Commerce Produc" }]} /><div className="text-center"><h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">AI Loop Video for E-Commerce Products</h1><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Boost e-commerce conversion with AI loop videos. Product animations and platform integration.</p></div></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Conversion Impact of Product Video</h3><p className="mt-2 text-muted-foreground">E-commerce pages with product video convert 30-80% better than static images. A subtle loop communicates quality and dimensionality. For fashion, cosmetics, electronics — loops reduce returns by giving customers a better sense of the product.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Creating Product Loops</h3><p className="mt-2 text-muted-foreground">Upload clean product photo on neutral background. Select Photo-to-Loop. Choose subtle motion: slow rotation for electronics, gentle fabric sway for fashion, surface reflection for cosmetics. Keep intensity at 15-25%.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">Platform Integration</h3><p className="mt-2 text-muted-foreground">Shopify supports MP4 in product galleries. Amazon allows video in A+ Content. Instagram and TikTok Shop support product video. Export square 1:1 for maximum compatibility.</p></div>
        <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">A/B Testing</h3><p className="mt-2 text-muted-foreground">Test one category at a time. Run loop against static for 2-4 weeks. Track conversion, add-to-cart, and return rate. Products with visible texture benefits show strongest uplift.</p></div>
      </div></section>
      <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="font-heading text-2xl font-bold sm:text-3xl">Explore More</h2><p className="mt-4 text-muted-foreground">Read our <Link href="/ai-loop-video-applications" className="text-primary hover:underline">AI loop applications</Link> for in-depth coverage.</p></div></section>
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2><div className="mt-10 space-y-4">{faqs.map((faq) => (<div key={faq.q.substring(0,16)} className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold">{faq.q}</h3><p className="mt-2 text-sm text-muted-foreground">{faq.a}</p></div>))}</div></div></section>
      <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center"><h2 className="font-heading text-3xl font-bold tracking-tight text-white">Start Creating Loop Videos</h2><p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. 5 daily generations. No credit card.</p><Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Try Text-to-Loop <ArrowRight className="h-5 w-5" /></Link></div></section>
    </>
  );
}
