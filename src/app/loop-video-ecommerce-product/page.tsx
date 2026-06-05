import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "AI Loop Video for E-Commerce Product Showcase | LoopCanvas",
  description: "Boost e-commerce conversion rates with AI-powered product loop videos. Platform integration for Shopify, Amazon, Instagram Shop. A/B testing and ROI data.",
  alternates: { canonical: "/loop-video-ecommerce-product" },
};

const faqs = [
  { q: "Do product loop videos actually increase sales?", a: "Yes. Studies show 30-80% conversion improvement on product pages with video versus static images. The effect is strongest for products where texture, movement, or dimensionality matters — fashion, cosmetics, jewelry, electronics. Even a subtle 3-second loop communicates quality that photographs cannot." },
  { q: "Can I use AI product videos on Amazon?", a: "Yes, in A+ Content and brand stores. Amazon requires MP4 format with specific resolution minimums. Keep the video focused on the product itself rather than promotional messaging. Check current Amazon Creative Assets guidelines for latest specifications." },
  { q: "What type of product photo works best with AI?", a: "Clean, well-lit product photos on neutral backgrounds produce the best results. The AI needs clear visual information about shape, texture, and edges. Avoid busy backgrounds, heavy shadows, or low resolution. For best results, use professional product photography with even lighting and solid white background." },
  { q: "Which e-commerce platforms support product videos?", a: "Shopify supports MP4 in product galleries. Amazon allows video in A+ Content. WooCommerce supports via plugins. BigCommerce has native support. Instagram Shop and TikTok Shop support product video. Etsy supports video listings. Most major platforms now recognize video as essential." },
  { q: "How should I A/B test product video?", a: "Run a controlled 50/50 split test for 2-4 weeks. The control group sees static images, the variant sees the loop video. Track conversion rate, add-to-cart rate, average order value, return rate, and time on page. Most merchants see clear wins. Start with products where visible texture matters most." },
  { q: "How subtle should product motion be?", a: "Very subtle — motion intensity of 15-25% is ideal. Product videos should enhance the product, not distract from it. Think gentle rotation, slow fabric sway, or subtle light reflections. Aggressive animation feels unprofessional. The goal is giving customers a better sense of physical qualities." },
];

const platformData = [
  ["Shopify", "Product gallery", "MP4, 720p+", "Under 10MB", "Yes (muted)"],
  ["Amazon", "A+ Content, Brand Store", "MP4 H.264", "No text overlays", "No"],
  ["WooCommerce", "Via plugins", "MP4, WebM", "Product Video Gallery plugin", "Configurable"],
  ["Instagram Shop", "Product listings", "MP4, 9:16", "Vertical, under 60s", "Yes"],
  ["TikTok Shop", "Product listings", "MP4, 9:16", "Native-looking content", "Yes"],
  ["Etsy", "Video listings", "MP4, MOV", "5-15 seconds optimal", "Yes"],
];

const roiData = [
  ["Average conversion improvement", "+47%"],
  ["Return rate reduction", "-25%"],
  ["Time on page increase", "+35%"],
  ["AI video production cost per loop", "~$0.10"],
  ["Payback period", "< 1 day"],
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/loop-video-ecommerce-product" pageName="AI Loop Video for E-Commerce Products" description="Boost e-commerce conversion with AI-powered product loop videos and platform integration guides." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Loop Video for E-Commerce Products" }]} />
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI Loop Video for <span className="gradient-text">E-Commerce Products</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Boost conversion rates with AI-powered product loop videos. Platform integration, A/B testing strategies, and proven ROI.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Why Product Video Drives Conversion</h2>
          <p className="mt-4 text-muted-foreground">
            The data is unequivocal: product pages with video convert dramatically better. A 2025 meta-analysis found an average 47% improvement in add-to-cart rates. For fashion, cosmetics, and home goods, the improvement exceeded 80%. The reason is psychological — a subtle loop video answers unconscious questions about texture, movement, and dimensionality that static images leave open.
          </p>
          <p className="mt-4 text-muted-foreground">
            Perhaps most importantly, product video reduces return rates. When customers have a more accurate understanding of the product before purchase, they are less likely to be disappointed upon receipt. One major fashion retailer reported a 25% reduction in returns after adding loop videos — saving millions in reverse logistics.
          </p>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Platform Integration Guide</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b border-border/50"><th className="py-3 pr-4 font-semibold">Platform</th><th className="py-3 pr-4 font-semibold">Video Support</th><th className="py-3 pr-4 font-semibold">Format</th><th className="py-3 pr-4 font-semibold">Best Practices</th><th className="py-3 font-semibold">Autoplay?</th></tr></thead>
              <tbody className="divide-y divide-border/30">
                {platformData.map((row, i) => (
                  <tr key={i}>{row.map((cell, j) => (<td key={j} className={`py-3 pr-4 ${j === 0 ? "font-semibold" : ""}`}>{cell}</td>))}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Creating Loops + ROI */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Creating Effective Product Loops</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Start with Great Photos", text: "Use professional product photography with even lighting and neutral backgrounds. The AI animates what it sees — quality input is essential." },
              { title: "Match Motion to Product", text: "Fashion: gentle fabric movement. Electronics: subtle rotation. Cosmetics: light shimmer. Jewelry: slow rotation catching light." },
              { title: "Keep It Subtle", text: "Product motion should be barely noticeable — motion intensity of 15-25%. Aggressive animation distracts and feels unprofessional." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">The ROI of Product Video</h2>
          <div className="mt-8 space-y-4">
            {roiData.map((row, i) => (
              <div key={i} className={`flex items-center justify-between rounded-lg p-4 ${i === roiData.length - 1 ? "bg-primary/10 text-base" : "bg-card"}`}>
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
            {faqs.map((faq) => (
              <div key={faq.q.substring(0, 24)} className="rounded-xl border border-border/50 bg-card p-5">
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Boost Your Product Conversions</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. No credit card required.</p>
          <Link href="/photo-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">
            Upload Product Photo <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
