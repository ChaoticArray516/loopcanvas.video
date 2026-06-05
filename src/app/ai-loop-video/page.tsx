import Link from "next/link";
import { ArrowRight, Wand2, ImageIcon, Music, Globe, Share2, Sparkles } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "AI Loop Video — Create Seamless Infinite Loops with AI | LoopCanvas",
  description:
    "Transform text and images into mesmerizing AI loop videos. Perfect seamless loops for Spotify Canvas, websites, and social media. Free to try, no credit card required.",
  alternates: {
    canonical: "/ai-loop-video",
  },
  openGraph: {
    title: "AI Loop Video — Create Seamless Infinite Loops with AI | LoopCanvas",
    description: "Transform text and images into mesmerizing AI loop videos.",
    url: "/ai-loop-video",
    type: "website",
  },
};

const faqs = [
  { q: "What is an AI loop video?", a: "An AI loop video is a short, infinitely repeating video created by artificial intelligence. The AI generates the video content from a text prompt or image, then ensures the final frame seamlessly transitions back to the first — creating a hypnotic, never-ending visual." },
  { q: "How do AI loop videos work?", a: "Our AI uses deep learning models trained on thousands of video sequences. When you provide a text prompt or image, the AI generates a short video clip and then applies seamless blending techniques to make the end frame match the start frame perfectly, creating an invisible loop point." },
  { q: "What is the difference between text-to-loop and photo-to-loop?", a: "Text-to-loop creates videos from your written description — great for imaginative scenes. Photo-to-loop animates an existing image you upload — ideal for bringing static visuals to life. Both produce the same seamless loop output." },
  { q: "How long are AI loop videos?", a: "Most AI loop videos are 3-8 seconds long. This is the sweet spot for seamless looping — long enough to show movement and detail, short enough to keep file sizes small and loops imperceptible." },
  { q: "Can I use AI loop videos for Spotify Canvas?", a: "Absolutely. LoopCanvas generates 9:16 vertical loop videos optimized for Spotify Canvas specifications. Simply describe your scene or upload an image, select the Spotify Canvas preset, and download the generated video." },
  { q: "What quality are AI loop videos?", a: "LoopCanvas exports in HD MP4 format (up to 1080p) with H.264/H.265 encoding. Free tier includes standard quality; Pro and Team plans unlock HD and 4K exports with no watermarks." },
];

export default function AiLoopVideoPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/ai-loop-video"
        pageName="AI Loop Video"
        description="Transform text and images into mesmerizing AI loop videos. Perfect seamless loops for Spotify Canvas, websites, and social media."
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Loop Video" }]} />

          <div className="text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI Loop Video —{" "}
            <span className="gradient-text">Turn Ideas into Mesmerizing Infinite Loops</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Transform text and images into mesmerizing AI loop videos.
            Perfect for Spotify Canvas, website backgrounds, and social media. Free to try.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/text-to-loop" className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium">
              <Wand2 className="h-5 w-5" />
              Try Text-to-Loop
            </Link>
            <Link href="/photo-to-loop" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-white/5">
              <ImageIcon className="h-5 w-5" />
              Upload Image
            </Link>
        </div>
        </div>
        </div>
      </section>

      {/* What is an AI Loop Video */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">What is an AI Loop Video?</h2>
          <p className="mt-4 text-muted-foreground">
            An AI loop video is a short, infinitely repeating video created entirely by artificial intelligence. Unlike traditional videos that play once and stop, loop videos seamlessly transition from their final frame back to the first — creating an endless, hypnotic visual experience that captivates viewers.
          </p>
          <p className="mt-4 text-muted-foreground">
            The magic happens through two stages: first, the AI generates a short video clip (3-8 seconds) based on your text description or uploaded image. Then, sophisticated blending algorithms analyze the start and end frames, making subtle adjustments so the transition is completely invisible. The result is a video that can play forever without any jarring cuts or jumps.
          </p>
          <p className="mt-4 text-muted-foreground">
            AI loop videos have exploded in popularity because they solve a fundamental content problem: how to add motion and life to digital experiences without creating distracting, linear video content. They are the perfect medium for ambient backgrounds, music visualizers, and social media content.
          </p>
        </div>
      </section>

      {/* How AI Loop Videos Work */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">How AI Loop Videos Work</h2>
          <div className="mt-6 space-y-4">
            {[
              { step: "1. Input Analysis", text: "The AI analyzes your text prompt or uploaded image to understand the visual style, colors, motion direction, and scene composition you want." },
              { step: "2. Video Generation", text: "Using diffusion models trained on video sequences, the AI generates a 3-8 second clip that brings your description to life with smooth motion and realistic physics." },
              { step: "3. Seamless Blending", text: "Our proprietary algorithm compares the first and last frames, making intelligent adjustments to color, lighting, and motion so the endpoints match perfectly." },
              { step: "4. Export", text: "The final loop video is exported as an optimized MP4 file ready for any platform — Spotify Canvas, websites, or social media." },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-border/50 bg-card p-5">
                <h3 className="font-semibold text-primary">{item.step}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Text-to-Loop vs Photo-to-Loop */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Text-to-Loop vs Photo-to-Loop</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/50">
            <table className="w-full text-sm">
              <thead className="bg-card">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold text-primary">Text-to-Loop</th>
                  <th className="px-4 py-3 text-left font-semibold text-primary">Photo-to-Loop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {[
                  { feature: "Input", text: "Written description", photo: "Uploaded image" },
                  { feature: "Best for", text: "Imaginative scenes", photo: "Existing visuals" },
                  { feature: "Output format", text: "MP4 seamless loop", photo: "MP4 seamless loop" },
                  { feature: "Use cases", text: "Concept art, storytelling", photo: "Album covers, portraits" },
                  { feature: "Control level", text: "High (describe anything)", photo: "Medium (animate existing)" },
                ].map((row) => (
                  <tr key={row.feature}>
                    <td className="px-4 py-3 font-medium">{row.feature}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.text}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.photo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Top Use Cases for AI Loop Videos</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { icon: Music, title: "Spotify Canvas", text: "Enhance your music with eye-catching vertical loop videos that appear in the Now Playing view." },
              { icon: Globe, title: "Website Backgrounds", text: "Add subtle motion to landing pages without overwhelming visitors or hurting load times." },
              { icon: Share2, title: "Social Media", text: "Create thumb-stopping content for Instagram Reels, TikTok, and YouTube Shorts." },
              { icon: Sparkles, title: "Digital Art", text: "Transform static illustrations and photographs into living, breathing animated artworks." },
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

      {/* Tips */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Tips for Creating Stunning AI Loop Videos</h2>
          <div className="mt-10 space-y-4">
            {[
              { title: "Be specific in your prompts", text: "Describe colors, lighting, motion direction, and mood for best results." },
              { title: "Start with high-quality images", text: "For photo-to-loop, upload clear, well-lit images with interesting visual elements." },
              { title: "Keep loops under 8 seconds", text: "Shorter loops are less noticeable and keep file sizes manageable." },
              { title: "Match the mood to your content", text: "A calm ambient track pairs well with slow-motion nature loops." },
              { title: "Test on your target platform", text: "Preview how your loop looks on Spotify, Instagram, or your website before finalizing." },
            ].map((item, i) => (
              <div key={item.title} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
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

      {/* Bottom CTA */}
      <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Create Your First AI Loop Video</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try, no credit card required.</p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">
            Start Creating Free <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
