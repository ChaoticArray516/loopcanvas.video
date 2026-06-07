import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Spotify Canvas vs Lyric Video — Complete Comparison",
  description: "Compare Spotify Canvas and lyric videos. Technical specs, cost analysis, ROI, use case guidance, and AI creation workflows for musicians and labels.",
  alternates: { canonical: "/spotify-canvas-vs-lyric-video" },
};

const faqs = [
  { q: "Do I need both Canvas and lyric video?", a: "Canvas is essential for every release — every mobile listener sees it. Lyric videos are recommended for lead singles with strong lyrical content. Canvas drives Spotify engagement; lyric videos drive YouTube discovery and search traffic. Budget-limited artists should Canvas every track first, then add lyric videos for 1-2 flagship songs." },
  { q: "Can one video serve both?", a: "No. Canvas is 3-8s silent vertical. Lyric videos are 2-4min with audio, typically horizontal. Use consistent visual style — same color palette and motion language — across both formats to build brand cohesion." },
  { q: "Which format drives more streams?", a: "Canvas directly impacts Spotify streams with up to 145% engagement boost. Lyric videos drive YouTube discovery. For pure stream growth, Canvas has higher ROI. For building a YouTube presence, lyric videos are essential." },
  { q: "How much does each cost to produce?", a: "With AI tools: Canvas costs essentially zero (30s generation). Lyric videos need 1-2 hours for background loops plus manual lyric timing. Traditional production: Canvas $200-500, lyric video $1,500-5,000." },
  { q: "Can AI generate both formats?", a: "Yes with different workflows. Canvas: AI generates the complete 3-8s loop in one step. Lyric video: AI generates background loops, which you composite with lyric text and audio in CapCut or DaVinci Resolve. LoopCanvas handles the visual generation for both." },
];

const compareRows = [
  ["Primary purpose", "Atmosphere and brand", "Lyric delivery and engagement"],
  ["Audience", "Spotify mobile listeners", "YouTube + social media"],
  ["Duration", "3-8 seconds", "Full song (2-4 minutes)"],
  ["Audio", "Silent", "Full song"],
  ["Aspect ratio", "9:16 vertical", "16:9 horizontal"],
  ["Production (AI)", "30 seconds", "1-4 hours"],
  ["Production (traditional)", "$200-500", "$1,500-5,000+"],
  ["Impact on streams", "Up to 145% engagement", "Drives YouTube discovery"],
  ["SEO value", "Low (in-app only)", "High (YouTube search)"],
  ["Shareability", "Low (cannot share directly)", "High (easily shared)"],
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/spotify-canvas-vs-lyric-video" pageName="Spotify Canvas vs Lyric Video — Complete Comparison" description="Compare Spotify Canvas and lyric videos. Technical specs, cost, ROI, and AI workflows." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Spotify Canvas vs Lyric Video — Complete Comparison" }]} />
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Spotify Canvas vs Lyric Video — <span className="gradient-text">Complete Comparison</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Two visual formats, two purposes, two audiences. When to use each, how they complement each other, and how to create both with AI.
            </p>
          </div>
        </div>
      </section>

      {/* Format Details */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Understanding Both Formats</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <h3 className="font-heading text-xl font-bold">Spotify Canvas</h3>
              <p className="mt-4 text-muted-foreground">
                A 3-8 second silent looping video that plays behind album art in Spotify's mobile Now Playing view. Every listener who opens your track on mobile sees it automatically. Canvas serves as visual atmosphere and brand reinforcement — it sets a mood, not tells a story.
              </p>
              <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                <p>Duration: 3-8s (sweet spot 4-6s)</p>
                <p>Resolution: 1080x1920</p>
                <p>Format: MP4 H.264, under 8MB</p>
                <p>Platform: Spotify mobile app only</p>
                <p>Upload: Free via Spotify for Artists</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <h3 className="font-heading text-xl font-bold">Lyric Video</h3>
              <p className="mt-4 text-muted-foreground">
                A full-length video (typically 2-4 minutes) displaying synchronized lyrics over background visuals. Lyric videos dominate YouTube music discovery and drive social sharing. Unlike Canvas, they actively engage viewers — fans read along, learn lyrics, and share quotable lines.
              </p>
              <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                <p>Duration: Full song (2-4 min)</p>
                <p>Resolution: 1920x1080 or higher</p>
                <p>Format: MP4 H.264</p>
                <p>Platform: YouTube, social media</p>
                <p>Upload: Free on YouTube</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Head-to-Head Comparison</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="py-3 pr-4 font-semibold">Factor</th>
                  <th className="py-3 pr-4 font-semibold">Spotify Canvas</th>
                  <th className="py-3 font-semibold">Lyric Video</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {compareRows.map((row, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-4 font-semibold">{row[0]}</td>
                    <td className="py-3 pr-4">{row[1]}</td>
                    <td className="py-3">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">When to Use Each Format</h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
              <h3 className="font-heading text-lg font-semibold">Always Use Canvas For:</h3>
              <p className="mt-2 text-sm text-muted-foreground">Every single track release. It is free, takes 30 seconds, and every mobile listener sees it. Canvas builds visual consistency across your catalog and increases Spotify engagement metrics (saves, shares, playlist adds).</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Use Lyric Videos For:</h3>
              <p className="mt-2 text-sm text-muted-foreground">Lead singles with strong, quotable lyrical content. Tracks where lyrics are a key storytelling element. Building a YouTube presence and music discovery channel. Pre-release marketing when the lyric video drops before the official music video.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creation Workflow */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">AI Creation Workflow</h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">For Canvas</h3>
              <p className="mt-2 text-muted-foreground">Use LoopCanvas Text-to-Loop. Describe your song's mood and visual concept. Select Spotify Canvas preset (9:16, 4-6s). Generate 5-10 variations, pick the best. Upload to Spotify for Artists. Total time: 5 minutes.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">For Lyric Video Backgrounds</h3>
              <p className="mt-2 text-muted-foreground">Generate longer background loops (10-30s) in 16:9. Create 3-5 visual variations. Import into CapCut or DaVinci Resolve. Add song audio. Create synced lyric text overlays with animations. Export 1080p. Total time: 1-4 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Explore More</h2>
          <p className="mt-4 text-muted-foreground">Read our <Link href="/spotify-canvas-handbook" className="text-primary hover:underline">Spotify Canvas handbook</Link> for the complete guide.</p>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Create Visuals for Both Formats</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. 5 daily generations. No credit card.</p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Try Text-to-Loop <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </>
  );
}
