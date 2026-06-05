import Link from "next/link";
import { ArrowRight, ImageIcon, CheckCircle2, Upload, Palette, Mountain, User, Sparkles, Music } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Photo-to-Video AI — Turn Images into Loop Videos | LoopCanvas",
  description:
    "Upload any photo and transform it into an animated seamless loop video with AI. Free photo-to-video generator. No signup required. HD export.",
  alternates: { canonical: "/photo-to-video" },
  openGraph: {
    title: "Photo-to-Video AI — Turn Images into Loop Videos | LoopCanvas",
    description: "Upload any photo and transform it into an animated seamless loop video with AI.",
    url: "/photo-to-video",
    type: "website",
  },
};

const faqs = [
  { q: "How does photo-to-video AI work?", a: "You upload a static image, and our AI analyzes its content, colors, composition, and subject matter. It then generates subtle motion — like drifting clouds, flowing water, or gentle light shifts — and seamlessly loops it into an infinite video." },
  { q: "What photos work best for photo-to-video?", a: "Landscapes, nature scenes, abstract art, album covers, and portraits with interesting backgrounds work best. Photos with clear subjects, good contrast, and visual depth produce the most compelling animated results." },
  { q: "What photos should I avoid?", a: "Avoid blurry images, text-heavy graphics, low-contrast photos, and images with lots of fine detail that may distort when animated. Simple, high-quality images with clear focal points yield the best results." },
  { q: "What image formats are supported?", a: "LoopCanvas accepts JPG, PNG, WEBP, and HEIC formats up to 20MB. We recommend high-resolution images (at least 1080px on the shortest side) for the best output quality." },
  { q: "Can I animate any type of photo?", a: "Yes, but results vary by photo type. Landscapes, skies, water scenes, and abstract images animate most naturally. Portrait photos work well too — the AI can add subtle breathing motion, hair movement, or background effects." },
  { q: "How long does photo-to-video take?", a: "Most photo-to-video generations complete in 10-30 seconds. The AI analyzes your image, plans the motion, generates frames, and blends the loop point — all automatically." },
];

const howToSteps = [
  { name: "Upload your photo", text: "Choose a high-quality image in JPG, PNG, WEBP, or HEIC format. Landscape and nature photos work best." },
  { name: "AI analyzes and animates", text: "Our AI reads your image and generates natural motion — flowing water, drifting clouds, or subtle light shifts." },
  { name: "Preview and download", text: "Watch your static image come to life as a seamless loop video. Export as HD MP4." },
  { name: "Share anywhere", text: "Use on Spotify Canvas, social media, websites, or presentations. Your animated photo is ready." },
];

export default function PhotoToVideoPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/photo-to-video"
        pageName="Photo-to-Video AI"
        description="Upload any photo and transform it into an animated seamless loop video with AI."
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        howToSteps={howToSteps}
      />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Photo to Video" }]} />

          <div className="text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Photo-to-Video AI —{" "}
            <span className="gradient-text">Animate Any Image into a Loop</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Upload any photo and transform it into an animated seamless loop video with AI.
            Free photo-to-video generator. No signup required.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/photo-to-loop" className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium">
              <Upload className="h-5 w-5" /> Upload Photo
            </Link>
        </div>
        </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">How Photo-to-Video AI Works</h2>
          <p className="mt-4 text-muted-foreground">
            Photo-to-video AI brings static images to life by adding natural, believable motion. The AI first performs a deep analysis of your uploaded image — identifying subjects, backgrounds, colors, lighting, and depth. It then determines what kind of motion would look most natural for that scene.
          </p>
          <p className="mt-4 text-muted-foreground">
            For a landscape photo, the AI might animate drifting clouds, flowing water, or swaying trees. For a portrait, it might add subtle breathing motion, shifting light, or background effects. The AI then generates a sequence of frames and seamlessly blends the start and end points to create an infinite loop.
          </p>
          <p className="mt-4 text-muted-foreground">
            The entire process takes 10-30 seconds and requires no editing skills. Just upload, wait, and download your animated video.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">What Photos Work Best?</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <h3 className="font-heading text-lg font-semibold text-primary">✅ Best for Animation</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {["Landscapes with skies and water", "Abstract art with flowing patterns", "Album covers and artwork", "Nature scenes (forests, beaches, mountains)", "Portraits with interesting backgrounds", "Architectural photography"].map((item) => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <h3 className="font-heading text-lg font-semibold text-destructive">⚠️ Avoid</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {["Blurry or low-resolution images", "Text-heavy graphics or logos", "Low contrast or flat colors", "Very busy scenes with no focal point", "Screenshots with UI elements", "Extremely dark or overexposed photos"].map((item) => (
                  <li key={item} className="flex items-center gap-2"><span className="text-destructive">×</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Step-by-Step: Photo to Loop Video</h2>
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

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Photo-to-Video Ideas and Inspiration</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Mountain, title: "Landscape Scenes", text: "Animate mountains, oceans, and forests with drifting clouds and flowing water." },
              { icon: User, title: "Portraits", text: "Add subtle breathing motion, shifting light, or background bokeh effects." },
              { icon: Palette, title: "Abstract Art", text: "Bring paintings and digital art to life with flowing colors and morphing shapes." },
              { icon: Music, title: "Album Covers", text: "Transform static album artwork into animated Spotify Canvas videos." },
              { icon: Sparkles, title: "Product Shots", text: "Add gentle motion to product photography for dynamic e-commerce displays." },
              { icon: ImageIcon, title: "Architecture", text: "Animate cityscapes and buildings with time-lapse style motion." },
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
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Supported Formats and Specs</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/50">
            <table className="w-full text-sm">
              <thead className="bg-card"><tr><th className="px-4 py-3 text-left font-semibold">Spec</th><th className="px-4 py-3 text-left font-semibold">Details</th></tr></thead>
              <tbody className="divide-y divide-border/30">
                {[
                  { spec: "Input formats", val: "JPG, PNG, WEBP, HEIC" },
                  { spec: "Max file size", val: "20MB" },
                  { spec: "Recommended resolution", val: "1080px minimum (shortest side)" },
                  { spec: "Output format", val: "MP4 (H.264 / H.265)" },
                  { spec: "Output resolution", val: "Up to 1080p (Pro: 4K)" },
                  { spec: "Aspect ratios", val: "9:16, 1:1, 16:9" },
                  { spec: "Loop duration", val: "3-8 seconds (automatically optimized)" },
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Animate Your First Photo</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try, no credit card required.</p>
          <Link href="/photo-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">
            Upload Photo <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
