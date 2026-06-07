import Link from "next/link";
import { ArrowRight, Wand2, Zap, Clock, Upload, Download, CheckCircle2, Star } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Short Loop Video Maker — AI Fast Generator",
  description: "Create short loop videos in seconds. Drag-and-drop upload, 3-second render, instant download. Free to try.",
  alternates: { canonical: "/short-loop-video-maker" },
  openGraph: {
    title: "Short Loop Video Maker — AI Fast Generator",
    description: "Create short loop videos in seconds. Drag-and-drop upload, 3-second render, instant download.",
    url: "/short-loop-video-maker",
    type: "website",
  },
};

const faqs = [
  { q: "How fast is the loop video generation?", a: "Most short loops are generated in 3-10 seconds. The AI uses optimized inference for quick turnaround." },
  { q: "Can I drag and drop images to create loops?", a: "Yes. Simply drag any image onto the upload area, and the AI automatically animates it into a seamless loop." },
  { q: "What is the ideal length for a short loop video?", a: "Short loops work best at 3-5 seconds for social media and 3-10 seconds for website backgrounds." },
  { q: "Can I download loops instantly after generation?", a: "Yes. Once the AI finishes, the HD MP4 is available for immediate download. No waiting." },
  { q: "Do I need video editing experience?", a: "Not at all. The entire process is automated. Upload or describe, and the AI handles everything." },
  { q: "What formats can I export in?", a: "All loops export in HD MP4 with optional WebM. Available ratios: 9:16, 16:9, 1:1, and 4:5." },
];

const howToSteps = [
  { name: "Drag and Drop", text: "Upload any image by dragging it onto the canvas. JPG, PNG, and WebP formats supported." },
  { name: "AI Generates in 3 Seconds", text: "The AI analyzes your image and creates a seamless loop animation in 3-10 seconds." },
  { name: "Instant Download", text: "Your HD loop video is ready for immediate download. No queues, no waiting." },
];

export default function ShortLoopVideoMakerPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/short-loop-video-maker"
        pageName="Short Loop Video Maker"
        description="Create short loop videos in seconds. Drag-and-drop upload, 3-second render, instant download."
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        howToSteps={howToSteps}
      />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Short Loop Video Maker" }]} />
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Short Loop Video Maker — <span className="gradient-text">Create Loops in 3 Seconds</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              The fastest way to create seamless loop videos. Drag and drop your image,
              let AI generate a perfect loop in 3 seconds, and download instantly.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/text-to-loop" className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium">
                <Zap className="h-5 w-5" /> Create Loop Now
              </Link>
              <Link href="/photo-to-loop" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-white/5">
                <Upload className="h-5 w-5" /> Upload Image
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Why Speed Matters for Loop Creation</h2>
          <p className="mt-4 text-muted-foreground">
            In content creation, speed is everything. Traditional video production takes hours or days.
            LoopCanvas changes the equation entirely. Upload an image or type a prompt, and your loop is
            ready in 3-10 seconds. This enables a completely different creative workflow: generate ten
            variations, pick the best, and publish — all in under five minutes.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Three Steps, Three Seconds</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border/50 bg-card">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold">Drag and Drop</h3>
              <p className="mt-2 text-sm text-muted-foreground">Upload any image by dragging it onto the canvas.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border/50 bg-card">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold">3-Second Render</h3>
              <p className="mt-2 text-sm text-muted-foreground">AI generates a seamless loop animation in 3-10 seconds.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border/50 bg-card">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold">Instant Download</h3>
              <p className="mt-2 text-sm text-muted-foreground">Your HD loop is ready for immediate download.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Speed Comparison</h2>
          <div className="mt-10 space-y-4">
            {[
              { method: "Traditional Video Production", time: "4-8 hours", desc: "Filming, editing, rendering, exporting." },
              { method: "Stock Footage Search", time: "30-60 min", desc: "Browse libraries, download, edit to loop." },
              { method: "Manual Animation", time: "2-4 hours", desc: "Keyframe animation, frame matching." },
              { method: "LoopCanvas AI", time: "3-10 sec", desc: "Upload or describe, AI generates, instant download." },
            ].map((item, i) => (
              <div key={item.method} className={`flex items-center gap-4 rounded-xl border p-4 ${i === 3 ? "border-primary/50 bg-primary/5" : "border-border/50 bg-card"}`}>
                <div className="min-w-[120px]"><p className={`text-sm font-bold ${i === 3 ? "text-primary" : "text-muted-foreground"}`}>{item.time}</p></div>
                <div><h3 className="font-semibold">{item.method}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Built for Speed and Simplicity</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Zap, title: "3-Second Generation", text: "Industry-leading inference speed." },
              { icon: Upload, title: "Drag-and-Drop", text: "No forms, no file pickers. Just drag and go." },
              { icon: Download, title: "Instant Download", text: "No queues or email delivery." },
              { icon: Star, title: "Batch Processing", text: "Generate multiple loops simultaneously." },
              { icon: CheckCircle2, title: "Automatic Looping", text: "AI handles seamless frame matching." },
              { icon: Wand2, title: "Text-to-Loop", text: "Describe any scene and AI generates it." },
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

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Create Your Loop in 3 Seconds</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">The fastest loop video generator on the web. Free to try, no credit card required.</p>
          <Link href="/photo-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">
            Try It Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
