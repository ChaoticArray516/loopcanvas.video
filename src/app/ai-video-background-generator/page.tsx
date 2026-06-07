import Link from "next/link";
import { ArrowRight, ImageIcon, Palette, Mountain, Waves, Sparkles, Building2, CheckCircle2 } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "AI Video Background Generator — Free HD Loops",
  description:
    "Generate AI-powered video backgrounds with 4 preset styles. Nature, abstract, urban, and cosmic themes. Perfect for websites, presentations, and content creation. Free to try.",
  alternates: {
    canonical: "/ai-video-background-generator",
  },
  openGraph: {
    title: "AI Video Background Generator — Free HD Loops",
    description: "Generate AI-powered video backgrounds with 4 preset styles. Nature, abstract, urban, and cosmic themes.",
    url: "/ai-video-background-generator",
    type: "website",
  },
};

const faqs = [
  { q: "What is an AI video background generator?", a: "An AI video background generator creates custom, seamless looping video backgrounds from text descriptions. Unlike stock video libraries, every background is unique and generated specifically for your project. Choose from preset styles or describe your own scene." },
  { q: "What preset styles are available?", a: "LoopCanvas offers four preset styles: Nature (landscapes, oceans, forests), Abstract (geometric patterns, particles, gradients), Urban (cityscapes, architecture, streets), and Cosmic (space, nebulae, stars). Each style is tuned for specific use cases and aesthetics." },
  { q: "Can I customize the background beyond presets?", a: "Absolutely. The presets are starting points. You can describe any scene in detail — colors, lighting, mood, time of day, weather — and the AI will generate a unique background matching your exact vision." },
  { q: "What resolution do background videos export in?", a: "LoopCanvas exports backgrounds in up to 4K resolution (3840x2160). For web use, 1080p (1920x1080) is recommended. All exports include both WebM and MP4 formats for maximum compatibility." },
  { q: "Can I use AI backgrounds for commercial projects?", a: "Yes. LoopCanvas Pro includes full commercial licensing for all generated backgrounds. Use them in client websites, presentations, ads, and branded content without attribution or restrictions." },
  { q: "How do I add a background video to my website?", a: "LoopCanvas provides ready-to-use embed code with every export. Simply copy and paste the HTML into your website's hero section. The code includes autoplay, muted, loop attributes and responsive CSS for full-screen coverage." },
];

const stylePresets = [
  {
    icon: Mountain,
    title: "Nature",
    description: "Serene landscapes, flowing water, swaying forests, and gentle skies. Perfect for wellness brands, travel sites, and calming environments.",
    examples: "Ocean waves, mountain mist, forest canopy, sunset horizons",
  },
  {
    icon: Sparkles,
    title: "Abstract",
    description: "Geometric patterns, flowing particles, color gradients, and light fields. Ideal for tech brands, creative agencies, and modern portfolios.",
    examples: "Neon grids, golden particles, fluid gradients, crystal formations",
  },
  {
    icon: Building2,
    title: "Urban",
    description: "Cityscapes, architectural details, street scenes, and metropolitan energy. Great for real estate, lifestyle brands, and dynamic presentations.",
    examples: "City skylines, traffic flows, building facades, urban lights",
  },
  {
    icon: Waves,
    title: "Cosmic",
    description: "Deep space, nebulae, star fields, and celestial phenomena. Perfect for gaming, science content, and immersive digital experiences.",
    examples: "Star clusters, nebula clouds, aurora waves, galactic spirals",
  },
];

export default function AIVideoBackgroundGeneratorPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/ai-video-background-generator"
        pageName="AI Video Background Generator"
        description="Generate AI-powered video backgrounds with 4 preset styles. Nature, abstract, urban, and cosmic themes."
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Video Background Generator" }]} />

          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI Video Background Generator —{" "}
              <span className="gradient-text">Create Stunning Scene Backgrounds</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Generate unique AI-powered video backgrounds with 4 preset styles.
              Nature, abstract, urban, and cosmic themes. Perfect for websites, presentations, and content creation.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/text-to-loop"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium"
              >
                <Palette className="h-5 w-5" />
                Generate Background
              </Link>
              <Link
                href="/photo-to-loop"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-white/5"
              >
                <ImageIcon className="h-5 w-5" />
                Upload Image
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Preset Styles */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">4 Preset Style Themes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Choose from four carefully crafted style presets, each optimized for different use cases and aesthetics.
            Or describe your own custom scene for a truly unique background.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {stylePresets.map((style) => (
              <div key={style.title} className="glass-card rounded-2xl p-6">
                <style.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-heading text-lg font-semibold">{style.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{style.description}</p>
                <p className="mt-3 text-xs text-primary">
                  Examples: {style.examples}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is AI Video Background Generator */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">What is an AI Video Background Generator?</h2>
          <p className="mt-4 text-muted-foreground">
            An AI video background generator uses advanced machine learning to create custom, seamless looping video
            backgrounds from text descriptions. Unlike stock footage libraries where thousands of projects use the same
            clips, every background generated by AI is unique — created specifically for your project based on your
            creative direction.
          </p>
          <p className="mt-4 text-muted-foreground">
            The technology works by interpreting your text prompt through a large language model, then using a
            diffusion-based video generation model to synthesize frames that match your description. A specialized
            looping algorithm ensures the final frame seamlessly transitions back to the first, creating an infinite,
            hypnotic visual experience.
          </p>
          <p className="mt-4 text-muted-foreground">
            The applications are vast. Web designers use AI backgrounds for hero sections and landing pages.
            Content creators use them for green screen replacement and virtual sets. Presenters use them to add
            visual interest to slides. Event producers use them for stage backdrops and projection mapping.
            The only limit is your imagination.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Popular Background Use Cases</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Website Heroes", text: "Full-screen video backgrounds for landing pages, portfolios, and brand sites. Subtle motion that enhances without distracting." },
              { title: "Virtual Events", text: "Stage backdrops, webinar backgrounds, and livestream sets. Professional visual environments without physical setup." },
              { title: "Presentations", text: "Dynamic slide backgrounds that add visual interest to pitch decks, keynotes, and training materials." },
              { title: "Green Screen", text: "Replace green screen backgrounds in video production with AI-generated scenes tailored to your content." },
              { title: "Digital Signage", text: "Eye-catching loop backgrounds for retail displays, lobby screens, and advertising panels." },
              { title: "Content Creation", text: "YouTube backgrounds, Twitch overlays, and social media story backgrounds that match your brand aesthetic." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Features That Set LoopCanvas Apart</h2>
          <div className="mt-10 space-y-4">
            {[
              { title: "4 Style Presets", text: "Nature, Abstract, Urban, and Cosmic themes — each tuned for specific aesthetic goals and use cases." },
              { title: "Custom Prompts", text: "Describe any scene in detail. Colors, lighting, weather, time of day — the AI brings your vision to life." },
              { title: "Seamless Looping", text: "Every background loops infinitely without visible seams. Perfect for continuous playback in any environment." },
              { title: "Dual Format Export", text: "WebM for web use (smaller files) and MP4 for universal compatibility. Both generated automatically." },
              { title: "Up to 4K Resolution", text: "Crystal-clear backgrounds for large displays, projection mapping, and high-end digital signage." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Generate Your Background</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            Create a unique AI video background in seconds. Free to try, no credit card required.
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
