import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Online Course Loop Backgrounds — Educator Guide",
  description: "Professional, non-distracting loop backgrounds for online courses and tutorials. Zoom, Teams, OBS setup guides. Brand consistency for course creators.",
  alternates: { canonical: "/online-course-loop-background" },
};

const faqs = [
  { q: "Best background for online teaching?", a: "Mid-tone abstract gradients with extremely subtle motion. They signal professionalism without competing for attention. Avoid nature scenes unless relevant. Avoid pure black or white — both cause webcam exposure issues." },
  { q: "Can I use AI backgrounds with Zoom, Teams, or Google Meet?", a: "Yes. Export MP4 at 1920x1080. Zoom: Settings > Background & Effects > upload. Teams: Settings > Effects and avatars > Add new. Google Meet requires a Chrome extension for custom video backgrounds." },
  { q: "Will video backgrounds slow down my computer?", a: "Properly optimized loops under 10MB have minimal impact. Close unnecessary apps before teaching. If you experience issues, reduce to 1280x720 or use a static background for live sessions and the loop only for recorded content." },
  { q: "How do I maintain visual consistency across courses?", a: "Create a master background template in brand colors. Use the same motion style for every lesson. Vary the color slightly for different courses while maintaining the same visual language. Document specifications so team members can maintain consistency." },
  { q: "Should I use different backgrounds for live vs. recorded lessons?", a: "Yes. Live teaching benefits from simpler backgrounds to save bandwidth and CPU. Recorded lessons can handle richer backgrounds since they are not constrained by real-time performance. Create two versions: lightweight for live, full-quality for recorded." },
  { q: "What colors promote learning and focus?", a: "Cool colors (blues, greens, teals) promote focus and retention. Warm colors increase alertness but can raise anxiety — use sparingly. Muted, desaturated tones work better than bright, saturated colors. Avoid high-contrast patterns that compete with on-screen text." },
];

const techSpecs = [
  ["Recommended resolution", "1920x1080"],
  ["Max file size (live platforms)", "< 10MB"],
  ["Optimal motion cycle", "10-20 seconds"],
  ["Recommended motion intensity", "10-20%"],
  ["Format", "MP4 H.264"],
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/online-course-loop-background" pageName="AI Loop Backgrounds for Online Courses" description="Professional, non-distracting loop backgrounds for online courses and tutorials." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Loop Backgrounds for Online Courses" }]} />
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI Loop Backgrounds for <span className="gradient-text">Online Courses</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Professional, non-distracting backgrounds for online teaching. Setup guides for every platform.</p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Why Visual Quality Matters in Education</h2>
          <p className="mt-4 text-muted-foreground">Students form judgments within 30 seconds. A cluttered background signals amateurism. A blank wall signals minimal effort. A well-designed AI background strikes the perfect balance: professional without being sterile, visually interesting without being distracting.</p>
          <p className="mt-4 text-muted-foreground">Stanford research found students retained 23% more information when instructors used professional, branded backgrounds versus cluttered or blank walls. The mechanism is attentional — a clean background reduces cognitive load, freeing mental resources for content processing.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Optimal Background Styles</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold">Soft Abstract Gradients</h3>
              <p className="mt-2 text-sm text-muted-foreground">Gentle color transitions with barely perceptible motion. The most versatile option — works for any subject. Choose brand colors for consistency.</p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold">Geometric Patterns</h3>
              <p className="mt-2 text-sm text-muted-foreground">Subtle grids or hexagonal textures with slow motion. Conveys structure and organization — ideal for technical courses, business training, and academic subjects.</p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold">Subject-Relevant Themes</h3>
              <p className="mt-2 text-sm text-muted-foreground">Creative courses: artistic textures. Science: molecular patterns. Wellness: nature-inspired visuals. The background reinforces subject matter without being literal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Setup */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Platform Setup Guides</h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Zoom</h3>
              <p className="mt-2 text-muted-foreground">Settings {'>'} Background {'>'} Effects {'>'} Video {'>'} upload MP4. Supports MP4/MOV up to ~10MB. Best results with solid wall behind you rather than busy room.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">OBS Studio (Pre-Recorded)</h3>
              <p className="mt-2 text-muted-foreground">Add loop as Media Source {'>'} set loop and mute {'>'} place as bottom layer. Add webcam on top. With green screen, apply Chroma Key filter. Full control over backgrounds, overlays, and scene transitions.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Microsoft Teams</h3>
              <p className="mt-2 text-muted-foreground">Settings {'>'} Effects and avatars {'>'} Add new {'>'} upload. Desktop app only — not supported in browser. Older machines may experience lag; Teams auto-falls back to static background.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Technical Specifications</h2>
          <div className="mt-8 space-y-4">
            {techSpecs.map((row, i) => (
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
          <p className="mt-4 text-muted-foreground">Read our <Link href="/ai-loop-video-applications" className="text-primary hover:underline">AI loop applications guide</Link> for more use cases.</p>
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Elevate Your Teaching</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. No credit card required.</p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Try Text-to-Loop <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </>
  );
}
