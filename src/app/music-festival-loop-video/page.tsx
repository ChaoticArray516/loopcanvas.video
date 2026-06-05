import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Music Festival Loop Video — Stage Visuals Guide | LoopCanvas",
  description: "AI loop videos for festival stage screens and LED walls. Large-scale display design principles, VJ workflow integration, and technical specs for live performances.",
  alternates: { canonical: "/music-festival-loop-video" },
};

const faqs = [
  { q: "What resolution for festival LED walls?", a: "Minimum 4K (3840x2160). Some major festivals require 8K for main stages. Always check the technical rider for exact specs. LED walls use custom aspect ratios varying by venue. Generate at highest resolution possible and crop to venue dimensions. Never upscale low-res content for large displays." },
  { q: "Can AI loops work for professional festival stages?", a: "Yes. Many touring electronic acts use AI visuals as base content for VJs to manipulate in real-time. AI provides rapid generation for diverse setlists. VJs add live effects, transitions, and beat-synced manipulation on top. The combination of AI speed plus VJ creativity produces performances impossible with traditional content creation." },
  { q: "What visual styles work best on large LED walls?", a: "Bold, high-contrast visuals with large geometric shapes and clear motion patterns. Subtle details are invisible at distance. Dark backgrounds with bright accents perform best. Avoid thin lines (flicker) and small text (illegible). Think graphic design at scale, not detailed illustration." },
  { q: "How do VJs use AI-generated loops?", a: "VJs organize loops by energy level: ambient (calm, for intros), mid (rhythmic, for build-ups), peak (high-energy, for drops). During performance, the VJ triggers loops matching music energy, layering real-time effects. AI provides base content; the VJ provides live performance artistry." },
  { q: "What frame rate for festival visuals?", a: "30 fps is standard for LED wall content. Some high-end systems support 60 fps, but 30 fps is universally compatible. Higher rates increase file size without perceptible benefit for ambient content. Always use constant frame rate — variable frame rate causes timing issues when syncing to music." },
  { q: "How do I organize loops for a full festival set?", a: "Prepare 20-30 loops: 5-6 ambient/opening, 8-10 mid-energy, 5-6 peak-energy, 3-4 cooldown/ending. Label each with BPM range and energy level. Color-code: blue for ambient, yellow for mid, red for peak. The VJ can quickly find the right visual for each track." },
];

const techSpecs = [
  ["Small Stage", "1920x1080", "30 fps", "MP4 H.264", "16:9"],
  ["Main Stage", "3840x2160 (4K)", "30-60 fps", "ProRes or MP4", "Custom (check rider)"],
  ["Festival Headliner", "7680x4320 (8K)", "60 fps", "ProRes 422 HQ", "Custom (check rider)"],
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/music-festival-loop-video" pageName="AI Loop Videos for Festival Stage Visuals" description="AI loop videos for festival stage screens and LED walls. Large-scale design and VJ workflows." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Loop Videos for Festival Stage Visuals" }]} />
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI Loop Video for <span className="gradient-text">Festival Stage Visuals</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Stunning visuals for LED walls and stage screens. Large-scale design principles, VJ workflows, and technical specs.</p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Stage Visuals in Electronic Music</h2>
          <p className="mt-4 text-muted-foreground">Modern electronic performances are as visual as auditory. Festival LED walls span 50+ feet, creating immersive canvases transforming stages into living visual instruments. The audience does not just hear the music — they inhabit it, surrounded by synchronized light and motion.</p>
          <p className="mt-4 text-muted-foreground">For independent artists, professional visuals were historically out of reach — $10,000-50,000 per tour. AI loop generation changes this, enabling smaller acts to compete visually with headliners at a fraction of the cost.</p>
        </div>
      </section>

      {/* Large-Scale Design */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Large-Scale Display Design Principles</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Bold and Simple", text: "Festival LED walls viewed from 20-500 feet. Subtle details on a monitor are invisible at scale. Design for bold shapes, high contrast, and clear motion. A simple pulsing geometric pattern reads better than a complex scene." },
              { title: "High Contrast", text: "Dark backgrounds with bright accent colors perform best. LED panels display dark content with isolated bright elements most vividly. Pure white backgrounds wash out and cause eye strain. Think starry night, not sunny day." },
              { title: "Avoid Thin Lines", text: "Lines under 3-4 pixels flicker and shimmer on LED walls due to physical gaps between LED pixels. Use thick, bold strokes and large shapes. What looks elegant on a monitor looks broken on an LED wall." },
              { title: "Motion at Distance", text: "Large-scale motion is more effective than small-scale motion. A slow color wash across the entire wall reads better than rapid particle effects. Radial expansion, geometric rotation, and large-scale pulsing are most effective." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VJ Workflow */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">VJ Workflow Integration</h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Content Organization</h3>
              <p className="mt-2 text-muted-foreground">VJs organize by energy level: Ambient (slow, atmospheric, for intros), Mid (rhythmic, for build-ups), Peak (high-energy, for drops). Label each loop with BPM range and energy level.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Live Manipulation</h3>
              <p className="mt-2 text-muted-foreground">VJs apply real-time effects: speed changes, color shifts, mirroring, kaleidoscope, particle overlays, beat-synced cuts. Design loops with manipulation in mind — clean, high-contrast loops with clear focal points respond best.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Software Compatibility</h3>
              <p className="mt-2 text-muted-foreground">Most professional VJ software (Resolume Arena, Modul8, TouchDesigner, Max/MSP) supports standard video formats. Export MP4 H.264 or ProRes for maximum compatibility. Some VJs prefer image sequences for frame-accurate control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Technical Specifications by Stage Size</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b border-border/50"><th className="py-3 pr-4 font-semibold">Stage</th><th className="py-3 pr-4 font-semibold">Resolution</th><th className="py-3 pr-4 font-semibold">Frame Rate</th><th className="py-3 pr-4 font-semibold">Format</th><th className="py-3 font-semibold">Aspect</th></tr></thead>
              <tbody className="divide-y divide-border/30">
                {techSpecs.map((row, i) => (<tr key={i}>{row.map((cell, j) => (<td key={j} className={`py-3 pr-4 ${j === 0 ? "font-semibold" : ""}`}>{cell}</td>))}</tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Explore More</h2>
          <p className="mt-4 text-muted-foreground">Read our <Link href="/music-visual-content-guide" className="text-primary hover:underline">music visual guide</Link> for comprehensive strategies.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-4">{faqs.map((faq)=>(<div key={faq.q.substring(0,24)} className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold">{faq.q}</h3><p className="mt-2 text-sm text-muted-foreground">{faq.a}</p></div>))}</div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Create Festival Stage Visuals</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. No credit card required.</p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Try Text-to-Loop <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </>
  );
}
