import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Seamless Loop Video Technical Guide | LoopCanvas",
  description: "Master seamless loop video creation. Frame blending, temporal consistency, motion types, platform specs, and format optimization for perfect infinite loops.",
  alternates: { canonical: "/seamless-loop-technical-guide" },
};

const faqs = [
  { q: "Why does my loop video flicker at the transition?", a: "Flicker is almost always caused by brightness or color mismatch between the first and last frames. Dedicated loop generators use bidirectional temporal conditioning to ensure these match. If you are manually creating loops, use frame blending with a 10-15 frame crossfade to smooth the transition." },
  { q: "What frame rate should I use for loop videos?", a: "24-30 fps is the sweet spot for most loop videos. Higher frame rates (60 fps) increase file size without perceptible quality improvement for ambient content. Always use constant frame rate — variable frame rate causes timing inconsistencies that break seamless looping." },
  { q: "How do I test if my loop is truly seamless?", a: "Play the video for at least 30 continuous cycles while staring at the center of the frame. A seamless loop feels hypnotic — you lose track of where each cycle begins. If you can anticipate a jump, the loop has a visible seam. Another test: trim to exactly one cycle and play in reverse." },
  { q: "Can any video be made into a seamless loop?", a: "Not all videos loop well. Content with continuous uniform motion (flowing water, drifting clouds, rotating objects) loops naturally. Content with abrupt changes, narrative arcs, or one-time events is difficult or impossible to loop seamlessly. Choose source material with looping in mind." },
  { q: "What is frame blending and when should I use it?", a: "Frame blending averages pixel values across multiple frames at the loop point to hide micro-discontinuities. Instead of a hard cut from frame N to frame 1, blended intermediate frames gradually shift between states. Use it when your generator does not natively handle loop optimization." },
];

const motionTypes = [
  { title: "Radial Motion", text: "Rotation, pulsing, and orbiting objects return to start naturally. A spinning globe or pulsing light has no end. Best for abstract backgrounds, loading animations, meditation content." },
  { title: "Oscillating Motion", text: "Pendulum-like back-and-forth returns to start if duration matches one full oscillation. Swaying trees, rocking waves. Best for nature scenes, calming ambient backgrounds." },
  { title: "Continuous Drift", text: "Uniform linear motion works when objects wrap around edges. Clouds drifting, traffic flowing. Requires infinite-seeming composition. Best for landscapes, cityscapes." },
  { title: "Particle Systems", text: "Rising bubbles, falling snow, floating dust. Particles spawn and despawn naturally. Eye tracks individual particles briefly. Best for abstract art, magical effects." },
  { title: "Turbulent Flow", text: "Chaotic but stationary motion like flames, smoke, or flowing water. No two frames are identical but statistical properties remain constant. Best for fire effects, water features." },
  { title: "Morphing Shapes", text: "Geometric shapes transforming through a cycle and returning to original form. Kaleidoscopic patterns, crystals. Best for digital art, tech backgrounds, psychedelic content." },
];

const platformSpecs = [
  ["Spotify Canvas", "4-6s", "Slow radial/pulse", "1080x1920", "MP4 H.264"],
  ["Website Background", "5-10s", "Continuous drift", "1920x1080+", "WebM VP9 + MP4"],
  ["Instagram Reels", "3-5s", "Rhythmic/BPM sync", "1080x1920", "MP4 H.264"],
  ["TikTok", "3-5s", "High-energy radial", "1080x1920", "MP4 H.264"],
  ["YouTube Shorts", "5-8s", "Educational/demo", "1080x1920", "MP4 H.264"],
  ["Digital Signage", "10-15s", "Bold color cycles", "3840x2160", "MP4 H.264"],
];

const formatTips = [
  { title: "Resolution and Bitrate", text: "Export at highest needed resolution then compress. Bitrate matters more than resolution for perceived quality. For 1080p web use, 4-8 Mbps is ideal. For 4K signage, 15-25 Mbps preserves detail. Always use constant bitrate (CBR) — variable bitrate causes frame-to-frame brightness inconsistencies." },
  { title: "Frame Rate Selection", text: "24 fps provides cinematic quality with manageable file sizes. 30 fps is the universal standard — all platforms support it without pulldown conversion. 60 fps is overkill for ambient loops and doubles your file size. Never use variable frame rate." },
  { title: "Codec Choice", text: "H.264 remains the universal standard — every device and platform plays it. H.265 (HEVC) offers 40-50% better compression but has compatibility issues on older hardware. VP9 (WebM) is ideal for web backgrounds with 30-50% smaller files than H.264. For maximum compatibility, export dual-format: WebM VP9 (primary) + MP4 H.264 (fallback)." },
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/seamless-loop-technical-guide" pageName="Seamless Loop Video — Technical Guide" description="Master seamless loop video creation with frame blending, temporal consistency, and platform optimization." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Seamless Loop Video — Technical Guide" }]} />
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Seamless Loop Video — <span className="gradient-text">Technical Guide</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Everything you need to know about creating perfect seamless loops. Frame blending, temporal consistency, motion theory, and platform-specific optimization.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes a Loop Seamless */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">The Anatomy of a Perfect Loop</h2>
          <p className="mt-4 text-muted-foreground">
            A seamless loop has no visible transition between the end and the start. The human visual system is remarkably sensitive to discontinuities — a single frame of brightness change or spatial shift registers as a jump that breaks immersion. True seamlessness requires four conditions to be met simultaneously at the loop point.
          </p>
          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Color Continuity</h3>
              <p className="mt-2 text-muted-foreground">The average color value of frame N must match frame 1 within 2-3% tolerance. Even small shifts create a flash effect. Dedicated loop generators solve this by conditioning frame 1 on frame N during generation, ensuring the color trajectory is planned as a closed cycle.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Motion Continuity</h3>
              <p className="mt-2 text-muted-foreground">The motion vector at frame N must point in the same direction as frame 1. If a particle is moving left-to-right at the end, it must enter from the left at the beginning. Circular motion satisfies this naturally. Linear motion requires careful planning or artificial wrap-around.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Spatial Continuity</h3>
              <p className="mt-2 text-muted-foreground">Objects at the edge of the frame must reappear at the corresponding position on the opposite edge. A cloud drifting off the right side must re-enter from the left. This is why seamless loops work best with abstract or infinite-seeming scenes.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Temporal Continuity</h3>
              <p className="mt-2 text-muted-foreground">The pacing must feel uniform across the loop point. A slow build-up followed by an abrupt restart feels jarring. The ideal loop maintains consistent energy throughout — no crescendos, no fades, no narrative arcs that need resolution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Seam Issues */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Common Seam Issues and Their Fixes</h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">The Flicker</h3>
              <p className="mt-2 text-muted-foreground">A brief brightness or color change at the loop point. Caused by mean luminance mismatch between first and last frames. Fix: Use frame blending with a 10-15 frame crossfade or apply a luminance match filter in post-production.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">The Jump</h3>
              <p className="mt-2 text-muted-foreground">Objects snap to new positions at the loop point. Caused by spatial misalignment — end frame objects differ from start frame objects. Fix: Choose motion types with natural periodicity or use a longer loop duration so objects can exit and re-enter naturally.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">The Stutter</h3>
              <p className="mt-2 text-muted-foreground">Motion appears to pause or reverse momentarily at the loop point. Caused by motion vector direction reversal. Fix: Ensure motion is unidirectional or circular. Avoid pendulum-like motion unless the oscillation period matches the loop duration exactly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Motion Types Grid */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Motion Types That Loop Naturally</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {motionTypes.map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Specs Table */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Platform-Specific Loop Optimization</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="py-3 pr-4 font-semibold">Platform</th>
                  <th className="py-3 pr-4 font-semibold">Best Duration</th>
                  <th className="py-3 pr-4 font-semibold">Best Motion</th>
                  <th className="py-3 pr-4 font-semibold">Resolution</th>
                  <th className="py-3 font-semibold">Format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {platformSpecs.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className={`py-3 pr-4 ${j === 0 ? "font-semibold" : ""}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Format Settings */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Format Settings for Maximum Quality</h2>
          <div className="mt-8 space-y-6">
            {formatTips.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-5">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">i</div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Explore More</h2>
          <p className="mt-4 text-muted-foreground">Read our <Link href="/ultimate-guide-ai-loop-video" className="text-primary hover:underline">AI loop video guide</Link> for in-depth coverage of generation techniques and tool selection.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Create Perfect Seamless Loops</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. 5 daily generations. No credit card.</p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">
            Try Text-to-Loop <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
