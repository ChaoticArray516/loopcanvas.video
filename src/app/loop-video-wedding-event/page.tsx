import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "AI Loop Video for Weddings & Events — Ambient Visual Guide | LoopCanvas",
  description: "Beautiful AI loop videos for weddings, parties, and corporate events. Ambient visuals for projection, LED displays, and digital signage.",
  alternates: { canonical: "/loop-video-wedding-event" },
};

const faqs = [
  { q: "Can AI loops work for wedding projection?", a: "Yes, beautifully. Customize to match the couple's color theme and venue aesthetic. Generate soft, romantic visuals in wedding colors — gold particles for elegance, floral animations for romance, starry skies for evening receptions. Export at projector native resolution and test before event day." },
  { q: "What resolution for event projection?", a: "Check venue specifications. Most projectors are 1920x1080; high-end venues may have 4K. Always generate at highest available resolution and let AV team downscale. Never upscale — it looks blurry on large screens." },
  { q: "Do I need a commercial license for event loops?", a: "For personal events (weddings, private parties): free tier works. For corporate events or client work: Pro license required. Wedding planners and event designers selling visual packages need commercial licensing." },
  { q: "What visual themes work best for weddings?", a: "Soft gold and champagne particles for classic elegance, floral animations matching bouquet colors, starry night skies for evening receptions, abstract watercolor washes in wedding colors, gentle bokeh light effects for romantic atmosphere. The key is subtlety — visuals should enhance, not compete." },
  { q: "Can I use the same loop for multiple events?", a: "Yes, but customize for each client. Event planners can create template approaches — same motion style, different color palettes. Offer 3-5 theme packages (Classic Gold, Garden Romance, Starlight, Modern Minimal, Vintage Charm) that clients personalize." },
  { q: "How do I match the loop to wedding colors?", a: "Use AI prompts specifying exact colors: 'soft rose gold particles drifting on cream background' or 'emerald green and ivory watercolor blending gently.' Generate several variations and preview against actual decor. The loop should complement, not clash with, table settings and flowers." },
];

const weddingThemes = [
  { title: "Classic Elegance", text: "Soft gold and champagne particles drifting on deep navy or ivory. Timeless and universally flattering for ballrooms, hotels, and traditional venues." },
  { title: "Garden Romance", text: "Floral animations matching bouquet colors — soft roses, peonies, or wildflowers. Perfect for outdoor venues, garden weddings, and spring/summer celebrations." },
  { title: "Starry Night", text: "Deep navy with twinkling stars, soft nebula clouds, and gentle aurora waves. Ideal for evening receptions and winter weddings. Creates magical atmosphere." },
  { title: "Watercolor Dreams", text: "Abstract watercolor washes in wedding colors blending and flowing gently. Artistic and modern. For couples who want something unique." },
  { title: "Modern Minimal", text: "Clean geometric patterns and slow-moving gradients. Monochrome or two-color palettes. Perfect for contemporary venues and industrial spaces." },
  { title: "Vintage Charm", text: "Soft sepia tones, film grain textures, and gentle light leaks. Nostalgic and romantic. Ideal for barn weddings and retro aesthetics." },
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/loop-video-wedding-event" pageName="AI Loop Videos for Weddings and Events" description="Beautiful AI loop videos for weddings, parties, and corporate events. Ambient visuals for projection and displays." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Loop Videos for Weddings and Events" }]} />
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI Loop Video for <span className="gradient-text">Weddings & Events</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Beautiful ambient visuals for weddings, parties, and corporate events. Theme-matched and ready to personalize.</p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Loop Video in Event Design</h2>
          <p className="mt-4 text-muted-foreground">Event designers increasingly use digital displays for immersive atmospheres. Projection mapping, LED walls, and digital signage have become standard at modern venues. AI loop videos provide cost-effective custom visuals matching each event's unique theme.</p>
          <p className="mt-4 text-muted-foreground">Traditional event visuals — custom gobos, printed backdrops, physical decor — cost $500-2,000 and are single-use. AI-generated loops cost pennies, customize in minutes, and can be reused across events with simple color adjustments. For couples, the ability to see their exact palette animated before the wedding is transformative.</p>
        </div>
      </section>

      {/* Wedding Themes */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Wedding Visual Themes</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {weddingThemes.map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Event Requirements */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Live Event Technical Requirements</h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Test Before Event Day</h3>
              <p className="mt-2 text-muted-foreground">Never rely on untested technology at a live event. Visit the venue and test loops on the actual projector or LED wall. Projectors calibrate colors differently than monitors — a warm gold on your laptop may appear orange on a projector. Bring backup files on USB, not just cloud access.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Export at Native Resolution</h3>
              <p className="mt-2 text-muted-foreground">Always match the display's native resolution. For projection: typically 1920x1080 or 3840x2160. For LED walls: check AV team for exact pixel dimensions. Upscaled content looks soft and unprofessional on large displays.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Technology Backup Plan</h3>
              <p className="mt-2 text-muted-foreground">Bring loops on at least two USB drives and a laptop. If the venue media player fails, plug in your backup directly. For mission-critical events, have a dedicated laptop running the loops rather than relying solely on venue equipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Corporate Event Branding</h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Brand Color Integration</h3>
              <p className="mt-2 text-muted-foreground">Generate abstract patterns using the company's exact hex codes. The result is corporate without being boring — branded but visually engaging. Use for stage backdrops, lobby displays, and breakout room screens.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">Multi-Screen Consistency</h3>
              <p className="mt-2 text-muted-foreground">Create a family of loops: one hero visual for the main stage, simpler variants for supporting screens. All sharing the same visual DNA. This creates a cohesive brand experience across the entire venue.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Explore More</h2>
          <p className="mt-4 text-muted-foreground">Read our <Link href="/ai-loop-video-applications" className="text-primary hover:underline">AI loop applications guide</Link>.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-4">{faqs.map((faq)=>(<div key={faq.q.substring(0,24)} className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold">{faq.q}</h3><p className="mt-2 text-sm text-muted-foreground">{faq.a}</p></div>))}</div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Create Your Event Visuals</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. No credit card required.</p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Try Text-to-Loop <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </>
  );
}
