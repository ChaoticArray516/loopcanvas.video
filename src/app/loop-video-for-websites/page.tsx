import Link from "next/link";
import { ArrowRight, Code, Monitor, Smartphone, Gauge, CheckCircle2, Globe, Layers } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Loop Video for Websites — Free HD Background Loops | LoopCanvas",
  description:
    "Create seamless loop videos for website backgrounds. WebM + MP4 formats, embed code generator, responsive design. Free to try. No credit card required.",
  alternates: {
    canonical: "/loop-video-for-websites",
  },
  openGraph: {
    title: "Loop Video for Websites — Free HD Background Loops | LoopCanvas",
    description: "Create seamless loop videos for website backgrounds. WebM + MP4 formats with embed code generator.",
    url: "/loop-video-for-websites",
    type: "website",
  },
};

const faqs = [
  { q: "What is the best video format for website backgrounds?", a: "WebM with VP9 compression is the best format for website backgrounds, offering 30-50% smaller file sizes than MP4 at equivalent quality. For maximum compatibility, serve WebM as the primary source with MP4 as a fallback for older browsers." },
  { q: "How do I add a loop video to my website?", a: "Use the HTML5 video tag with autoplay, muted, loop, and playsinline attributes. Add CSS object-fit: cover for responsive full-screen behavior. LoopCanvas generates ready-to-use embed code that handles all technical requirements automatically." },
  { q: "Will a video background slow down my website?", a: "A properly optimized loop video under 3MB has minimal impact on loading speed. LoopCanvas generates compressed WebM and MP4 files optimized for fast web delivery. Always provide a poster image for instant visual feedback while the video loads." },
  { q: "Are loop video backgrounds mobile-friendly?", a: "Yes. LoopCanvas generates responsive loop videos that work on all devices. Use the playsinline attribute to prevent fullscreen takeover on iOS. Consider serving a lower-resolution version for mobile users to reduce data usage." },
  { q: "Can I use loop videos on WordPress, Webflow, or Framer?", a: "Absolutely. Loop videos work on any platform that supports HTML5 video. LoopCanvas provides platform-specific implementation guides for WordPress, Webflow, Framer, Next.js, and plain HTML websites." },
  { q: "Do I need coding skills to add a loop video background?", a: "No coding skills are required for most platforms. LoopCanvas provides copy-paste embed code for basic implementations. For advanced customization, we include detailed CSS and JavaScript examples in our documentation." },
];

const howToSteps = [
  { name: "Generate Your Loop", text: "Describe your desired background scene or upload an image. Choose from abstract patterns, nature scenes, and soft gradients optimized for web use." },
  { name: "Export in Dual Formats", text: "Download your loop in both WebM and MP4 formats. WebM provides superior compression; MP4 ensures compatibility with all browsers." },
  { name: "Copy Embed Code", text: "Use our embed code generator to get ready-to-paste HTML. Customize autoplay, loop, muted, and responsive behavior with one click." },
  { name: "Add to Your Site", text: "Paste the code into your website's hero section or landing page. The video automatically scales to fit any screen size." },
];

export default function LoopVideoForWebsitesPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/loop-video-for-websites"
        pageName="Loop Video for Websites"
        description="Create seamless loop videos for website backgrounds. WebM + MP4 formats, embed code generator, responsive design."
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        howToSteps={howToSteps}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Loop Video for Websites" }]} />

          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Loop Videos for Websites —{" "}
              <span className="gradient-text">Create Seamless HD Backgrounds</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Transform your website with mesmerizing loop video backgrounds. Generate WebM + MP4 dual-format exports
              with ready-to-use embed code. Optimized for performance, responsive by design.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/text-to-loop"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium"
              >
                <Globe className="h-5 w-5" />
                Create Website Background
              </Link>
              <Link
                href="/photo-to-loop"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-white/5"
              >
                <Layers className="h-5 w-5" />
                Upload Image
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Loop Videos on Websites */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Why Use Loop Videos on Websites?</h2>
          <p className="mt-4 text-muted-foreground">
            Static websites are becoming a thing of the past. Today's most engaging websites use subtle motion to capture attention,
            communicate brand personality, and create immersive user experiences. Loop video backgrounds are the perfect solution —
            they add visual dynamism without the performance cost of full-length videos.
          </p>
          <p className="mt-4 text-muted-foreground">
            Unlike traditional video files that can run for minutes and consume tens of megabytes, loop videos are engineered for web use.
            They are typically 3-10 seconds long, compressed aggressively, and designed to repeat seamlessly without a visible jump.
            This makes them ideal for hero sections, landing pages, portfolio sites, and product showcases.
          </p>
          <p className="mt-4 text-muted-foreground">
            The data supports this approach. Pages with well-implemented video backgrounds see up to 30% higher time-on-page metrics
            compared to static alternatives. The key is subtlety — the motion should enhance your content, not compete with it.
            Abstract gradients, slow-moving nature scenes, and gentle particle effects work best for professional websites.
          </p>
        </div>
      </section>

      {/* Dual Format Export */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">WebM + MP4 Dual Format Export</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="glass-card rounded-2xl p-6">
              <Monitor className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-heading text-lg font-semibold">WebM — Primary Format</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                WebM with VP9 compression delivers the best file size-to-quality ratio. Typically 30-50% smaller than MP4
                at equivalent visual quality. Supported by all modern browsers including Chrome, Firefox, Edge, and Safari 14+.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Smaller file sizes</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Faster loading</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Better compression</li>
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <Smartphone className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-heading text-lg font-semibold">MP4 — Fallback Format</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                MP4 with H.264 codec provides universal compatibility. Every browser, device, and platform can play MP4 files.
                Serve MP4 as a fallback to ensure your background video works for every visitor, regardless of their setup.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Universal support</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Legacy browser compatible</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Reliable playback</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Embed Code Generator */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Ready-to-Use Embed Code</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            LoopCanvas generates copy-paste HTML code for every loop video. The embed code includes proper autoplay,
            muted, loop, and playsinline attributes. Responsive CSS ensures your background looks perfect on any screen size.
          </p>
          <div className="mt-8 rounded-xl border border-border/50 bg-card p-4 font-mono text-sm text-muted-foreground overflow-x-auto">
            <pre>{`<video autoplay muted loop playsinline
  poster="your-poster.jpg"
  class="fixed inset-0 w-full h-full object-cover -z-10">
  <source src="background.webm" type="video/webm" />
  <source src="background.mp4" type="video/mp4" />
</video>`}</pre>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            This code creates a full-screen, responsive background video that works across all modern browsers.
            Customize the CSS class to match your site's design system.
          </p>
        </div>
      </section>

      {/* Performance Optimized */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Performance Optimized by Default</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Gauge, title: "Under 3MB Target", text: "Every loop is compressed to load fast without sacrificing quality. Ideal for hero sections and full-page backgrounds." },
              { icon: Code, title: "Lazy Loading Ready", text: "Add loading=\"lazy\" or use Intersection Observer for below-the-fold sections. Never block critical content." },
              { icon: CheckCircle2, title: "Poster Images", text: "A static poster image displays instantly while the video loads, improving perceived performance and Core Web Vitals." },
              { icon: Monitor, title: "Responsive by Design", text: "CSS object-fit: cover ensures your background fills any screen size without distortion or black bars." },
              { icon: Smartphone, title: "Mobile Optimized", text: "playsinline attribute prevents iOS fullscreen takeover. Videos stay in place as designed." },
              { icon: Layers, title: "Accessibility First", text: "Include prefers-reduced-motion media query to show a static fallback for users sensitive to motion." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <item.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
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

      {/* Bottom CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Create Your Website Background</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            Generate a stunning loop video background for your website in seconds. Free to try, no credit card required.
          </p>
          <Link
            href="/text-to-loop"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90"
          >
            Try Text-to-Loop
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
