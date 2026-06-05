import Link from "next/link";
import { ArrowRight, Wand2, CheckCircle2, Zap, Crown } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Free Loop Video Maker — Create Seamless Loops | No Signup | LoopCanvas",
  description:
    "Create loop videos for free with AI. 5 free generations daily. No credit card required. Turn text or photos into seamless loop videos. HD export.",
  alternates: { canonical: "/free-loop-video-maker" },
  openGraph: {
    title: "Free Loop Video Maker — Create Seamless Loops | No Signup | LoopCanvas",
    description: "Create loop videos for free with AI. 5 free generations daily.",
    url: "/free-loop-video-maker",
    type: "website",
  },
};

const faqs = [
  { q: "Is LoopCanvas really free?", a: "Yes! Our free tier gives you 5 loop video generations per day with no credit card required. You can create text-to-loop and photo-to-loop videos in standard quality with a small watermark." },
  { q: "What's included in the free plan?", a: "5 generations per day, standard quality exports, MP4 format, watermark-free preview, and access to both text-to-loop and photo-to-loop modes. No signup required — just visit and start creating." },
  { q: "Do I need to sign up to use the free plan?", a: "No. You can start creating loop videos immediately without creating an account. Sign up is only required if you want to save your video history or upgrade to Pro." },
  { q: "What's the difference between free and paid?", a: "Free includes 5 generations/day with standard quality and a watermark. Pro adds 2000 generations/month, HD exports, no watermark, commercial license, and priority support. Team adds unlimited generations and 4K." },
  { q: "Can I use free videos commercially?", a: "Free tier videos include a LoopCanvas watermark and are for personal use only. For commercial projects, you'll need a Pro or Team plan which includes full commercial licensing." },
  { q: "When should I upgrade to Pro?", a: "Upgrade when you need more than 5 generations per day, want HD or 4K quality, need to remove watermarks, or plan to use videos in commercial projects." },
];

const howToSteps = [
  { name: "Describe or upload", text: "Enter a text prompt or upload a photo — no account needed." },
  { name: "AI generates", text: "Our AI creates a seamless loop video in 10-30 seconds." },
  { name: "Download free", text: "Save your MP4 loop video. Free tier includes 5 per day." },
];

export default function FreeLoopVideoMakerPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/free-loop-video-maker"
        pageName="Free Loop Video Maker"
        description="Create loop videos for free with AI. 5 free generations daily. No credit card required."
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        howToSteps={howToSteps}
      />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Free Loop Video Maker" }]} />

          <div className="text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Free Loop Video Maker —{" "}
            <span className="gradient-text">AI-Powered, No Signup Required</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Create loop videos for free with AI. 5 free generations daily.
            No credit card required. Turn text or photos into seamless loop videos.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/text-to-loop" className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium">
              <Wand2 className="h-5 w-5" /> Try Text-to-Loop
            </Link>
            <Link href="/photo-to-loop" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-white/5">
              <Zap className="h-5 w-5" /> Upload Photo
            </Link>
        </div>
        </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">What&apos;s Included in the Free Plan?</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              { icon: CheckCircle2, text: "5 generations per day" },
              { icon: CheckCircle2, text: "Standard quality exports" },
              { icon: CheckCircle2, text: "MP4 format (universal compatibility)" },
              { icon: CheckCircle2, text: "Watermark-free preview" },
              { icon: CheckCircle2, text: "Text-to-Loop mode" },
              { icon: CheckCircle2, text: "Photo-to-Loop mode" },
              { icon: CheckCircle2, text: "3-8 second seamless loops" },
              { icon: CheckCircle2, text: "No credit card required" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-border/50 bg-card p-4">
                <item.icon className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Free vs Pro Comparison</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/50">
            <table className="w-full text-sm">
              <thead className="bg-card">
                <tr><th className="px-4 py-3 text-left font-semibold">Feature</th><th className="px-4 py-3 text-center font-semibold text-primary">Free</th><th className="px-4 py-3 text-center font-semibold text-accent-pink">Pro</th><th className="px-4 py-3 text-center font-semibold text-accent-cyan">Team</th></tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {[
                  { f: "Daily generations", free: "5/day", pro: "~67/day", team: "Unlimited" },
                  { f: "Video quality", free: "Standard", pro: "HD (1080p)", team: "4K" },
                  { f: "Resolution", free: "720p", pro: "1080p", team: "4K" },
                  { f: "Export format", free: "MP4", pro: "MP4", team: "MP4" },
                  { f: "Watermark", free: "Yes", pro: "No", team: "No" },
                  { f: "Commercial license", free: "—", pro: "✓", team: "✓" },
                  { f: "Price", free: "$0", pro: "$9.99/mo", team: "$29.99/mo" },
                ].map((r) => (
                  <tr key={r.f}><td className="px-4 py-3 font-medium">{r.f}</td><td className="px-4 py-3 text-center text-muted-foreground">{r.free}</td><td className="px-4 py-3 text-center text-muted-foreground">{r.pro}</td><td className="px-4 py-3 text-center text-muted-foreground">{r.team}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">How to Create Free Loop Videos</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {howToSteps.map((step, i) => (
              <div key={step.name} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border/50 bg-card">
                  <span className="font-heading text-xl font-bold text-primary">{i + 1}</span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">{step.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Free Loop Video Ideas</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Abstract Fluid Art", text: "Morphing colors and shapes perfect for meditation apps and creative portfolios." },
              { title: "Nature Scenes", text: "Drifting clouds, flowing water, and swaying trees for website backgrounds." },
              { title: "Neon Cityscapes", text: "Cyberpunk-inspired urban loops for music visualizers and gaming content." },
              { title: "Particle Effects", text: "Sparkling dust, floating embers, or falling snow for magical atmospheres." },
              { title: "Geometric Patterns", text: "Rotating mandalas and shifting grids for tech and design-focused brands." },
              { title: "Ocean Waves", text: "Calming seaside loops for wellness brands and relaxation content." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">When to Upgrade to Pro</h2>
          <div className="mt-10 space-y-4">
            {[
              { title: "Higher volume", text: "You need more than 5 videos per day for regular content creation." },
              { title: "HD export", text: "Your projects require 1080p or 4K resolution for professional presentation." },
              { title: "Commercial use", text: "You're using videos for client work, advertising, or monetized content." },
              { title: "No watermark", text: "You need clean, branded videos without the LoopCanvas logo." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-4">
                <Crown className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div><h3 className="font-semibold">{item.title}</h3><p className="text-sm text-muted-foreground">{item.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-border/50 bg-card p-5">
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Create Free Loop Videos Now</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">5 free generations daily. No credit card required.</p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">
            Start Creating Free <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
