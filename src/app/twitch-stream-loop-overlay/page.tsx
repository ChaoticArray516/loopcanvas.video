import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Twitch Stream Loop Overlays — Complete Streamer Guide",
  description: "Professional AI loop overlays and backgrounds for Twitch streamers. OBS setup guide, style recommendations by content category, and all stream graphic types.",
  alternates: { canonical: "/twitch-stream-loop-overlay" },
};

const faqs = [
  { q: "Best loop background for Twitch?", a: "Gaming: high-energy abstract — neon grids, particle effects. Just Chatting: subtle gradients or particles that do not compete with your facecam. Music: audio-reactive visualizers. Match the background energy to your content category and brand identity." },
  { q: "What resolution for stream overlays?", a: "1920x1080 standard. If streaming at 1440p or 4K, create overlays at that resolution to avoid scaling artifacts. For vertical repurposing (TikTok/Shorts), use 1080x1920. Always match overlay resolution exactly to output resolution." },
  { q: "Can AI loops work for professional streamers?", a: "Absolutely. Many partnered streamers use AI backgrounds for unlimited customization without commissioning custom graphics. Quality is comparable to custom designs for abstract content. AI can generate backgrounds complementing existing brand assets and mascots." },
  { q: "How do I set up loop overlays in OBS?", a: "Add your loop as Media Source. Enable looping and mute audio. Place as bottom layer. Add gameplay or camera on top. For green screen, apply Chroma Key filter to camera. Use Filters panel to match background color grade with overall stream aesthetics." },
  { q: "How many different overlays do I need?", a: "Minimum: one Starting Soon screen, one BRB/Intermission screen, one stream background, and 3-5 alert animations (follow, subscribe, donation, raid). Expand to scene-specific backgrounds, seasonal variants, and sponsor-integrated overlays as you grow." },
  { q: "Should backgrounds match brand colors?", a: "Yes — consistency builds recognition across platforms. Viewers discovering you on TikTok should instantly recognize your Twitch stream by visual style. If you do not have defined brand colors yet, your background is a great place to establish them. Choose 2-3 colors and apply consistently." },
];

const overlayTypes = [
  { title: "Starting Soon", text: "The screen viewers see before you go live. Include schedule, social links, and countdown. Use a calming but engaging loop — viewers chat in the pre-stream lobby for 5-15 minutes." },
  { title: "BRB / Intermission", text: "Displayed during breaks. Softer, more ambient than the main background. Include Be Right Back text and optional chat integration." },
  { title: "Stream Background", text: "The persistent visual behind gameplay or camera. Your stream's room — it should feel like a space, not a wallpaper. Subtle motion adds life without distraction." },
  { title: "Alert Animations", text: "Short 2-5 second celebratory loops triggered by follows, subs, donations, and raids. High-energy and visually distinct from your background." },
  { title: "Transition Screens", text: "Brief loops during scene switches. Smooth the visual experience and maintain engagement during technical transitions." },
  { title: "Panel Art", text: "Static or subtly animated panels for your Twitch profile page. About, schedule, rules, and sponsor panels contributing to overall brand consistency." },
];

const categoryStyles = [
  ["FPS / Competitive", "High-energy abstract, neon grids", "Cyan, magenta, electric blue"],
  ["RPG / Story Games", "Atmospheric, fantasy landscapes", "Purple, gold, forest green"],
  ["Just Chatting", "Subtle gradients, soft particles", "Warm neutrals, pastels"],
  ["Music / DJ", "Audio-reactive visualizers", "Brand colors, high contrast"],
  ["Art / Creative", "Elegant textures, paint-like motion", "Jewel tones, monochrome"],
];

export default function Page() {
  return (
    <>
      <LandingPageJsonLd pagePath="/twitch-stream-loop-overlay" pageName="AI Loop Overlays for Twitch Streaming" description="Professional AI loop overlays and backgrounds for Twitch streamers with OBS setup guide." faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Loop Overlays for Twitch Streaming" }]} />
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI Loop Overlays for <span className="gradient-text">Twitch Streaming</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Professional stream overlays and backgrounds without design skills. OBS setup included.</p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Why Visuals Drive Stream Growth</h2>
          <p className="mt-4 text-muted-foreground">A streamer has 3 seconds to convince a browser to stay. Streamers with custom overlays see 40-60% higher average viewer retention. Professional visuals signal commitment — viewers interpret this as a proxy for content quality. AI loop generation removes the $200-1,000 design cost entirely.</p>
        </div>
      </section>

      {/* Overlay Types */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Types of Stream Graphics</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {overlayTypes.map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Styles */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">Style Recommendations by Category</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b border-border/50"><th className="py-3 pr-4 font-semibold">Category</th><th className="py-3 pr-4 font-semibold">Background Style</th><th className="py-3 font-semibold">Color Palette</th></tr></thead>
              <tbody className="divide-y divide-border/30">{categoryStyles.map((row,i)=>(<tr key={i}>{row.map((cell,j)=>(<td key={j} className={`py-3 pr-4 ${j===0?'font-semibold':''}`}>{cell}</td>))}</tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OBS Setup */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">OBS Studio Setup Guide</h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">1. Add Media Source</h3><p className="mt-2 text-muted-foreground">Sources {'>'} + {'>'} Media Source {'>'} name it {'>'} browse to your MP4 loop. Check Loop. Check Restart playback when source becomes active.</p></div>
            <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">2. Layer Your Scene</h3><p className="mt-2 text-muted-foreground">Bottom to top: Background loop {'>'} Game capture/Content {'>'} Camera {'>'} Overlays {'>'} Text labels.</p></div>
            <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">3. Color Correction</h3><p className="mt-2 text-muted-foreground">Right-click background source {'>'} Filters {'>'} Color Correction. Adjust gamma, contrast, and saturation to match your camera profile. Subtle adjustments (+/-10-15%) are sufficient.</p></div>
            <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-heading text-lg font-semibold">4. Scene Switching</h3><p className="mt-2 text-muted-foreground">Create separate OBS scenes for each stream state. Use Stream Deck, hotkeys, or built-in transitions to switch. Stinger transitions work beautifully with loop backgrounds.</p></div>
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">Upgrade Your Stream Visuals</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Free to try. No credit card required.</p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">Try Text-to-Loop <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </>
  );
}
