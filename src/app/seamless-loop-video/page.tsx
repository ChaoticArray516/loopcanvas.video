import Link from "next/link";
import { ArrowRight, Wand2, ImageIcon, CheckCircle2, Zap, Settings, Eye, Wrench } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Seamless Loop Video — How to Create Perfect Loops | LoopCanvas",
  description:
    "Learn how to create perfectly seamless loop videos with AI. No editing skills needed. First and last frames blend perfectly. Free to try.",
  alternates: { canonical: "/seamless-loop-video" },
  openGraph: {
    title: "Seamless Loop Video — How to Create Perfect Loops | LoopCanvas",
    description: "Learn how to create perfectly seamless loop videos with AI.",
    url: "/seamless-loop-video",
    type: "website",
  },
};

const faqs = [
  { q: "What makes a video loop seamless?", a: "A seamless loop means the video's final frame transitions back to the first frame without any visible jump, cut, or interruption. The human eye cannot detect where the loop point occurs, creating an infinitely smooth visual experience." },
  { q: "How do I create a seamless loop video?", a: "With LoopCanvas, simply describe your desired scene or upload an image, and our AI automatically generates a seamless loop video. The AI handles all the technical work — frame matching, color blending, and motion smoothing — so you don't need any editing skills." },
  { q: "What is the best duration for a seamless loop?", a: "The sweet spot is 3-8 seconds. Shorter loops are harder to notice, but very short loops (under 3 seconds) can feel repetitive. Longer loops (over 8 seconds) increase file size and may reveal the loop point." },
  { q: "What format should seamless loops be in?", a: "MP4 with H.264 encoding is the most universally compatible format. LoopCanvas exports in this format by default, ensuring your loops work on Spotify, websites, and all social media platforms." },
  { q: "Can seamless loops have audio?", a: "LoopCanvas generates silent video loops, which is the standard for most use cases (Spotify Canvas, website backgrounds, social media). If you need audio, you can add it separately in your video editor or platform." },
  { q: "Why do my loops show a visible jump?", a: "Visible jumps happen when the first and last frames don't match in color, lighting, or motion. LoopCanvas solves this by using AI-powered frame blending that analyzes and adjusts both endpoints to create an imperceptible transition." },
];

const howToSteps = [
  { name: "Choose your input", text: "Decide whether to use a text prompt or upload an existing image as the starting point for your loop." },
  { name: "Write a detailed prompt", text: "Describe colors, motion, lighting, and mood. The more detail, the better the AI can match start and end frames." },
  { name: "Generate and preview", text: "Our AI creates the loop in 10-30 seconds. Preview it to ensure the seamless transition looks perfect." },
  { name: "Download your loop", text: "Export as HD MP4 in your desired aspect ratio (9:16, 1:1, or 16:9)." },
];

export default function SeamlessLoopVideoPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/seamless-loop-video"
        pageName="Seamless Loop Video"
        description="Learn how to create perfectly seamless loop videos with AI. No editing skills needed."
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        howToSteps={howToSteps}
      />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Seamless Loop Video" }]} />

          <div className="text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Seamless Loop Video —{" "}
            <span className="gradient-text">Perfectly Blended Infinite Playback</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Learn how to create perfectly seamless loop videos with AI.
            No editing skills needed. First and last frames blend perfectly.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/text-to-loop" className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium">
              <Wand2 className="h-5 w-5" /> Try Text-to-Loop
            </Link>
            <Link href="/photo-to-loop" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-white/5">
              <ImageIcon className="h-5 w-5" /> Upload Image
            </Link>
        </div>
        </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">What Makes a Video Loop Seamless?</h2>
          <p className="mt-4 text-muted-foreground">
            A seamless loop is one where the viewer cannot detect the transition point. The video appears to flow endlessly without any visible jump, cut, or interruption. Achieving true seamlessness requires three things: matching color and lighting between start and end frames, continuous motion direction, and consistent visual elements.
          </p>
          <p className="mt-4 text-muted-foreground">
            Traditional video editing makes this extremely difficult — editors must manually adjust frames, blend colors, and sometimes sacrifice content quality to hide the loop point. AI loop generation changes everything by analyzing the entire video sequence and intelligently optimizing the transition.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">How to Create a Seamless Loop Video</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {howToSteps.map((step, i) => (
              <div key={step.name} className="glass-card rounded-2xl p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
                <h3 className="mt-3 font-heading text-lg font-semibold">{step.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Seamless Loop Video Specs and Requirements</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/50">
            <table className="w-full text-sm">
              <thead className="bg-card">
                <tr><th className="px-4 py-3 text-left font-semibold">Spec</th><th className="px-4 py-3 text-left font-semibold">Recommendation</th></tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {[
                  { spec: "Format", val: "MP4 (H.264 / H.265)" },
                  { spec: "Duration", val: "3-8 seconds (optimal: 4-6s)" },
                  { spec: "Aspect Ratio", val: "9:16 (vertical), 1:1 (square), 16:9 (wide)" },
                  { spec: "Resolution", val: "720p minimum, 1080p recommended" },
                  { spec: "File Size", val: "Under 8MB for most platforms" },
                  { spec: "Frame Rate", val: "24-30 fps" },
                  { spec: "Color Space", val: "sRGB" },
                ].map((r) => (
                  <tr key={r.spec}><td className="px-4 py-3 font-medium">{r.spec}</td><td className="px-4 py-3 text-muted-foreground">{r.val}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Best Practices for Seamless Loops</h2>
          <div className="mt-10 space-y-4">
            {[
              { title: "Use symmetrical motion", text: "Scenes with cyclic or back-and-forth motion (waves, spinning, pulsing) loop most naturally." },
              { title: "Avoid text and numbers", text: "Text creates an obvious loop point because words can't flow seamlessly. Use abstract or natural scenes instead." },
              { title: "Keep camera static", text: "Camera movement makes seamless looping much harder. Static or very slow pans work best." },
              { title: "Match lighting conditions", text: "Ensure the scene doesn't have dramatic lighting changes from start to end." },
              { title: "Use continuous textures", text: "Water, clouds, smoke, and particle effects blend seamlessly because they lack sharp edges." },
            ].map((item, i) => (
              <div key={item.title} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                <div><h3 className="font-semibold">{item.title}</h3><p className="text-sm text-muted-foreground">{item.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Common Issues and How to Fix Them</h2>
          <div className="mt-10 space-y-4">
            {[
              { issue: "Visible jump at loop point", fix: "Shorten the duration or choose a scene with more uniform textures. Try adding keywords like 'seamless' or 'infinite' to your prompt." },
              { issue: "Color shift between frames", fix: "Avoid scenes with dramatic lighting changes. Use prompts that specify consistent lighting like 'steady golden hour lighting'." },
              { issue: "File too large for upload", fix: "Reduce duration to 3-4 seconds or lower resolution. LoopCanvas exports are already optimized for web use." },
              { issue: "Motion looks jerky", fix: "Specify smooth, slow motion in your prompt. Fast movements are harder to loop seamlessly." },
            ].map((item) => (
              <div key={item.issue} className="rounded-xl border border-border/50 bg-card p-5">
                <h3 className="font-semibold text-destructive">{item.issue}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.fix}</p>
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

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Create Your First Seamless Loop</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try, no credit card required.</p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">
            Start Creating Free <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
