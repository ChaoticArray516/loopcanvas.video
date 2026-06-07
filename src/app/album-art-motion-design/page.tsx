import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Album Art Animation — Motion Design Guide",
  description: "Transform static album artwork into animated loop videos. Motion design principles, genre-specific techniques, AI workflows, and technical best practices.",
  alternates: { canonical: "/album-art-motion-design" },
};

const faqs = [
  { q: "What resolution for album art animation?", a: "Minimum 1500x1500, ideally 3000x3000+. Higher resolution gives AI more detail for depth detection and motion synthesis. Use PNG format — it preserves sharp edges and text clarity better than JPEG. If your original artwork is vector-based, export at the highest raster resolution possible." },
  { q: "Will animating distort my album art?", a: "Not with conservative settings. Start at 15-25% motion intensity. Subtle effects like gentle parallax, slow light shimmer, or soft particle drift add atmosphere without overwhelming the original design. Aggressive motion can alter brand identity — enhancement, not replacement, is the goal." },
  { q: "Can I animate album art that contains text?", a: "Yes, but use motion types that do not warp typography: subtle light shifts, gentle zoom/pan, overlay particle effects. Avoid fluid morphing or perspective distortion on text-heavy artwork. If text distortion is unavoidable, create a text-free version specifically for the animated Canvas." },
  { q: "What motion effects work best for different music genres?", a: "Electronic: pulsing light, geometric rotation, particle bursts. Hip-Hop: slow smoke drift, urban atmosphere. Pop: bright sparkles, color cycling. Folk: gentle nature motion, warm light shifts. Classical: elegant ink flows, candlelight flicker. Match the motion energy to the track energy." },
  { q: "How do I maintain brand consistency across animated and static versions?", a: "Use the same color palette and visual motifs across all versions. The animated version should feel like a natural extension, not a completely different piece. Consider creating a motion style guide defining which effects, speeds, and transitions are on-brand." },
  { q: "Can I use the same animated art for Spotify Canvas and social media?", a: "Yes, but adapt the format. Canvas requires 9:16 vertical (1080x1920, 3-8s). Social media typically uses 1:1 or 16:9. Generate the animation at highest resolution, then crop for each platform. Keep the core motion consistent across all formats." },
];

const genreRecs = [
  ["Electronic / EDM", "Pulsing light, geometric rotation, particle bursts", "Medium-fast"],
  ["Hip-Hop / Rap", "Slow smoke drift, atmospheric haze, subtle shake", "Slow"],
  ["Pop", "Bright sparkles, color cycling, energetic particles", "Medium"],
  ["Rock / Alternative", "Dust particles, film grain, gritty texture", "Slow-medium"],
  ["Folk / Acoustic", "Falling leaves, drifting clouds, warm light", "Very slow"],
  ["Classical / Jazz", "Elegant ink flow, candle flicker, lens flare", "Very slow"],
  ["R&B / Soul", "Smooth liquid motion, soft glow, gentle wave", "Slow"],
];

const motionPrinciples = [
  { title: "Subtlety Over Spectacle", text: "The best album art animation feels like the artwork is breathing, not performing. Canvas plays on a 6-inch phone screen in the background — excessive motion becomes distracting. Gentle parallax, slow light shifts, subtle particle drift create atmosphere without overwhelming the design." },
  { title: "Preserve Color Integrity", text: "Your color palette is part of your identity. Motion effects should enhance, not alter, the core colors. Avoid filters that shift overall hue. If adding light effects, ensure they complement the existing palette — warm gold sparkles for warm-toned art, cool blue particles for cool-toned art." },
  { title: "Respect Composition", text: "The original composition was carefully designed — focal points, balance, negative space. Motion should draw attention to, not away from, these choices. If artwork features a central figure, motion should orbit or enhance that figure, not compete with it." },
  { title: "Match the Track Energy", text: "A ballad deserves slow, contemplative motion. A high-energy dance track can handle faster, more dynamic effects. The visual and audio should feel like they belong together — mismatched energy levels jar the listener." },
  { title: "Test at Mobile Scale", text: "Preview your animation on a phone before uploading. Details that look stunning on a monitor may become indistinguishable mush on a 6-inch screen. Large, bold motion patterns work better than fine detail for Canvas size." },
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/album-art-motion-design" pageName="Album Art Animation — Motion Design Guide" description="Transform static album artwork into animated loop videos with AI. Motion design principles and technical workflows." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Album Art Animation — Motion Design Guide" }]} />
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Bring Your Album Art to <span className="gradient-text">Motion</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Transform static album artwork into captivating animated loops. Motion design principles, genre-specific techniques, and AI workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Why Animate */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Why Animate Album Art</h2>
          <p className="mt-4 text-muted-foreground">
            Static album art has served the music industry for decades, but the streaming era demands more. When listeners discover your track on Spotify, the Canvas plays automatically — a silent, hypnotic visual that transforms passive listening into immersive experience. Animated album art extends the static version into motion, creating a multi-dimensional brand presence.
          </p>
          <p className="mt-4 text-muted-foreground">
            The strategic value goes beyond aesthetics. Fans who see your animated art on Spotify will recognize the static version on social media, press coverage, and merchandise. This cross-format recognition builds visual memory — your brand becomes an anchor fans learn to spot instantly.
          </p>
        </div>
      </section>

      {/* Motion Design Principles */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Motion Design Principles</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {motionPrinciples.map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genre Recommendations */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Genre-Specific Motion Recommendations</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="py-3 pr-4 font-semibold">Genre</th>
                  <th className="py-3 pr-4 font-semibold">Recommended Motion</th>
                  <th className="py-3 font-semibold">Speed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {genreRecs.map((row, i) => (
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

      {/* AI Workflow */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">AI Animation Workflow</h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">1. Prepare Source Art</h3>
              <p className="mt-2 text-muted-foreground">Export album art at highest resolution (3000x3000+). Remove text and logos if prone to distortion — add them back in post-processing. Ensure good contrast and clear focal points.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">2. Write Your Motion Prompt</h3>
              <p className="mt-2 text-muted-foreground">Describe the motion: "Gentle warm light slowly shifting across the artwork like golden hour sunlight, with tiny floating dust particles catching the light." Be specific about direction, speed, and mood.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">3. Generate and Select</h3>
              <p className="mt-2 text-muted-foreground">Upload artwork to Photo-to-Loop. Set motion intensity to 15-25% for subtle effects. Generate 5-10 variations. Select the one that best captures your vision while preserving the original art.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">4. Test and Export</h3>
              <p className="mt-2 text-muted-foreground">Play the loop for 20+ continuous cycles. Test on mobile — colors and details shift dramatically on phone screens. Export at target platform requirements: 9:16 for Spotify Canvas, 1:1 or 16:9 for social media.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Explore More</h2>
          <p className="mt-4 text-muted-foreground">Read our <Link href="/spotify-canvas-handbook" className="text-primary hover:underline">Spotify Canvas handbook</Link> for the complete Canvas strategy guide.</p>
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Animate Your Album Art</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. 5 daily generations. No credit card.</p>
          <Link href="/photo-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Upload Your Artwork <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </>
  );
}
