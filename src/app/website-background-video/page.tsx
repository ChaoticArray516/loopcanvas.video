import Link from "next/link";
import { ArrowRight, Wand2, Zap, Code, Gauge, Palette, CheckCircle2, ImageIcon } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Website Background Video — Seamless Loop Backgrounds | LoopCanvas",
  description:
    "Create stunning seamless loop videos for website backgrounds. AI-generated, lightweight, autoplay-ready. Free to try. Perfect for landing pages and portfolios.",
  alternates: { canonical: "/website-background-video" },
  openGraph: {
    title: "Website Background Video — Seamless Loop Backgrounds | LoopCanvas",
    description: "Create stunning seamless loop videos for website backgrounds.",
    url: "/website-background-video",
    type: "website",
  },
};

const faqs = [
  { q: "Why use loop videos as website backgrounds?", a: "Loop videos add motion and life to static web pages without overwhelming visitors. Unlike full videos that stop and start, seamless loops create an ambient, immersive atmosphere that keeps users engaged without distracting from your content." },
  { q: "Do background videos hurt page speed?", a: "Not if optimized correctly. LoopCanvas exports are compressed MP4 files (H.264/H.265) with small file sizes. We recommend keeping loops under 8 seconds and under 2MB for the best balance of quality and performance." },
  { q: "How do I add a loop video to my website?", a: "Use a standard HTML5 video element with autoplay, muted, loop, and playsinline attributes. LoopCanvas provides the optimized MP4 file — just upload it to your server or CDN and reference it in your HTML or CSS." },
  { q: "Should I use a video or GIF for backgrounds?", a: "Always use MP4 video over GIF. Videos are 5-10x smaller in file size, support higher resolutions, and offer better compression. Modern browsers handle HTML5 video flawlessly." },
  { q: "What size should a website background video be?", a: "For full-screen backgrounds, export at 1920×1080 (16:9) or use a cropped 9:16 vertical loop. Keep the duration at 3-8 seconds and file size under 2MB for fast loading." },
  { q: "Can I use LoopCanvas videos commercially on client websites?", a: "Yes. Pro and Team plans include full commercial licensing, allowing you to use generated loop videos on client websites, commercial projects, and monetized content." },
];

const howToSteps = [
  { name: "Generate your loop", text: "Use LoopCanvas to create a seamless loop video that matches your website's aesthetic." },
  { name: "Download as MP4", text: "Export in the highest quality available. For backgrounds, 1080p is usually sufficient." },
  { name: "Compress for web", text: "Use a tool like HandBrake or FFmpeg to further compress the file to under 2MB." },
  { name: "Add HTML5 video tag", text: "Use autoplay, muted, loop, and playsinline attributes for cross-browser compatibility." },
  { name: "Optimize for performance", text: "Add a poster image for fast initial load and lazy-load below-the-fold videos." },
];

export default function WebsiteBackgroundVideoPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/website-background-video"
        pageName="Website Background Video"
        description="Create stunning seamless loop videos for website backgrounds. AI-generated, lightweight, autoplay-ready."
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        howToSteps={howToSteps}
      />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Website Background Video" }]} />

          <div className="text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Website Background Video —{" "}
            <span className="gradient-text">Seamless AI-Generated Loops</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Create stunning seamless loop videos for website backgrounds.
            AI-generated, lightweight, autoplay-ready. Free to try.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/text-to-loop" className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium">
              <Wand2 className="h-5 w-5" /> Try Text-to-Loop
            </Link>
        </div>
        </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Why Use Loop Videos as Website Backgrounds?</h2>
          <p className="mt-4 text-muted-foreground">
            Static websites feel lifeless. Full videos are distracting and heavy. Loop videos strike the perfect balance — they add subtle motion that creates atmosphere without stealing attention from your content.
          </p>
          <p className="mt-4 text-muted-foreground">
            A seamless loop video background can increase time-on-page by 15-30% and reduce bounce rates. The hypnotic, never-ending motion keeps visitors engaged while your copy and CTAs do the selling. Best of all, loop videos are lightweight — a 5-second seamless loop can be under 1MB, loading faster than most hero images.
          </p>
          <div className="mt-6 space-y-3">
            {["Engagement: Motion captures attention and keeps visitors on page longer.", "Aesthetics: Elevate your brand with cinematic, professional-looking backgrounds.", "Lightweight: 5-second loops under 1MB load faster than high-res static images.", "No copyright issues: AI-generated content is 100% original and license-free."].map((b) => (
              <div key={b} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><p className="text-muted-foreground">{b}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">How to Add a Loop Video to Your Website</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Code Example: HTML5 Background Video</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-border/50 bg-[#0d1117] p-4">
            <pre className="overflow-x-auto text-xs text-muted-foreground"><code>{`<div className="fixed inset-0 -z-10">
  <video
    autoPlay
    muted
    loop
    playsInline
    poster="/poster.jpg"
    className="h-full w-full object-cover"
  >
    <source src="/background-loop.mp4" type="video/mp4" />
  </video>
</div>`}</code></pre>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Place this code inside your layout component. The <code>fixed inset-0 -z-10</code> positions the video behind all content. Always include <code>muted</code> — autoplay with sound is blocked by most browsers.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Performance Best Practices</h2>
          <div className="mt-10 space-y-4">
            {[
              { title: "Compress aggressively", text: "Use H.265/HEVC if browser support allows, fallback to H.264. Target under 2MB for full-screen loops." },
              { title: "Add a poster image", text: "Show a static JPEG while the video loads. This prevents layout shift and improves perceived performance." },
              { title: "Lazy-load below the fold", text: "Only autoplay videos in the viewport. Use Intersection Observer to start playback when scrolled into view." },
              { title: "Respect reduced motion", text: "Check prefers-reduced-motion and disable or replace with a static image for accessibility." },
              { title: "Use CDN for delivery", text: "Serve video files from a CDN (Cloudflare, Vercel Edge) for faster global delivery." },
              { title: "Monitor Core Web Vitals", text: "Background videos can impact LCP. Keep files small and test with Lighthouse after implementation." },
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
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Loop Video Background Examples</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { title: "SaaS Landing Pages", text: "Subtle abstract motion behind headline and CTA. Increases conversion without distraction." },
              { title: "Portfolio Sites", text: "Cinematic nature loops that showcase creativity and attention to detail." },
              { title: "E-commerce Stores", text: "Product lifestyle loops that create emotional connection with shoppers." },
              { title: "Event Websites", text: "Dynamic energy loops that build excitement and drive ticket sales." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Create Your Website Background</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try, no credit card required.</p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">
            Start Creating Free <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
