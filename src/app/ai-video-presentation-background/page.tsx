import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "AI Video Backgrounds for Presentations — Professional Guide",
  description: "Create professional loop backgrounds for presentations, pitch decks, and webinars. Platform setup guides for PowerPoint, Keynote, Google Slides, Zoom, and Teams.",
  alternates: { canonical: "/ai-video-presentation-background" },
};

const faqs = [
  { q: "Will a video background distract my audience?", a: "Not with extremely subtle motion — think digital wallpaper, not entertainment. Slow-moving gradients, gentle particle drift, or soft light pulses add visual interest without competing for attention. Test: ask someone to read text while the background plays. If they can read comfortably, the motion level is appropriate." },
  { q: "What format for presentation backgrounds?", a: "MP4 H.264 at 1920x1080 (16:9). Universal support across PowerPoint, Keynote, Google Slides. For maximum compatibility, avoid H.265 and WebM. Keep files under 10MB for smooth playback — compress aggressively since subtle backgrounds do not need high bitrates." },
  { q: "Can I use video backgrounds in Zoom or Teams?", a: "Yes. Zoom supports video virtual backgrounds (MP4/MOV). Teams supports video backgrounds in the desktop app. Google Meet requires a Chrome extension. Keep files under 10MB and test before important calls." },
  { q: "What motion speed is appropriate for professional settings?", a: "Very slow — barely perceptible. Think breathing speed, not dancing speed. A 10-15 second cycle where most viewers do not consciously notice the movement. Fast motion draws the eye away from content. When in doubt, slower is better." },
  { q: "Are there accessibility concerns with video backgrounds?", a: "Yes. Provide a static version for slide decks. Avoid rapid flashing, high-contrast strobing, or patterns exceeding 3 flashes per second. Use motion on title slides and dividers, not on data-heavy content slides. Not everyone tolerates motion." },
  { q: "What colors work best for presentation backgrounds?", a: "Muted, low-saturation colors in your brand palette. Avoid pure white (eye strain in dark rooms) and pure black (too much light absorption on projectors). Mid-tone grays, soft blues, and muted earth tones work universally. Ensure sufficient contrast with text." },
];

const styleCards = [
  { title: "Corporate / B2B", text: "Minimal abstract patterns in subdued brand colors. Slow geometric gradients, soft light particles. The background should be almost invisible — noticed only when someone consciously looks." },
  { title: "Sales / Pitch Decks", text: "Slightly more energy but controlled. Upward-moving gradients suggest growth. Soft gold or warm tones convey optimism. The background complements your brand narrative." },
  { title: "Education / Training", text: "Calming, non-distracting motion supporting learning. Cool blues and greens promote focus. Avoid warm reds and oranges that can raise anxiety. Create a comfortable learning environment." },
  { title: "Creative / Design", text: "More expressive but still professional. Abstract art-inspired motion, color field animations. The background can be a conversation starter — but ensure it does not compete with your portfolio." },
];

const colorSpecs = [
  ["Dark text background brightness", "15-40% lightness"],
  ["Light text background brightness", "60-85% lightness"],
  ["Optimal motion cycle duration", "10-15 seconds"],
  ["Max file size for smooth playback", "< 10MB"],
  ["Recommended resolution", "1920x1080"],
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/ai-video-presentation-background" pageName="AI Video Backgrounds for Presentations" description="Professional, non-distracting loop backgrounds for presentations, pitch decks, and webinars." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Video Backgrounds for Presentations" }]} />
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI Video Backgrounds for <span className="gradient-text">Presentations</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Professional, non-distracting loop backgrounds for pitch decks, keynotes, webinars, and training materials.</p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Why Motion Improves Presentations</h2>
          <p className="mt-4 text-muted-foreground">Subtle animation does what static backgrounds cannot — it maintains audience attention without demanding it. Slow, predictable motion in peripheral vision reduces the cognitive load of maintaining focus. The background becomes a gentle anchor keeping the audience visually engaged.</p>
          <p className="mt-4 text-muted-foreground">Directional psychology matters too: upward movement subtly suggests growth (ideal for investor pitches), circular motion implies continuity (perfect for process explanations), and horizontal drift suggests progress (effective for timelines and roadmaps).</p>
        </div>
      </section>

      {/* Style Selection */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Choosing Your Background Style</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {styleCards.map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Setup */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Platform Setup Guides</h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">PowerPoint</h3>
              <p className="mt-2 text-muted-foreground">Design {'>'} Format Background {'>'} Picture or texture fill {'>'} Insert {'>'} From a File {'>'} select your MP4. PowerPoint automatically loops the video. Ensure Play Automatically is selected. Test on the actual presentation machine before the event.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Keynote (macOS/iOS)</h3>
              <p className="mt-2 text-muted-foreground">Format {'>'} Background {'>'} Movie {'>'} select MP4. Keynote handles video elegantly with minimal performance impact. Use the Arrange panel to send video to the back layer. Larger files and higher resolutions work without issues on Apple Silicon.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Google Slides</h3>
              <p className="mt-2 text-muted-foreground">No native video background support. Insert Video {'>'} Upload {'>'} select MP4. Resize to cover full slide, then Order {'>'} Send to back. Set playback to automatic and loop. Note: requires internet connection for playback.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Zoom / Teams / Google Meet</h3>
              <p className="mt-2 text-muted-foreground">Zoom: Settings {'>'} Background {'>'} Effects {'>'} upload MP4. Teams: Settings {'>'} Effects and avatars {'>'} Add new {'>'} upload video. Google Meet: requires Chrome extension for video backgrounds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Guidelines */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Color and Technical Guidelines</h2>
          <div className="mt-8 space-y-4">
            {colorSpecs.map((row, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg bg-card p-4">
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
          <p className="mt-4 text-muted-foreground">Read our <Link href="/ai-loop-video-applications" className="text-primary hover:underline">AI loop applications guide</Link> for more professional use cases.</p>
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Elevate Your Presentations</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. No credit card required.</p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Try Text-to-Loop <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </>
  );
}
