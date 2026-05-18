import { Wand2, Image, Music, Sparkles, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "Text-to-Loop",
    desc: "Describe any scene and watch AI generate a seamless looping video in seconds.",
  },
  {
    icon: Image,
    title: "Photo-to-Loop",
    desc: "Upload any image and transform it into an animated infinite loop video.",
  },
  {
    icon: Music,
    title: "Spotify Canvas Ready",
    desc: "9:16 vertical format optimized for Spotify artist profiles. 3-8 second loops.",
  },
  {
    icon: Sparkles,
    title: "Seamless Looping",
    desc: "AI ensures the first and last frames blend perfectly for infinite playback.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Generate loop videos in 10-30 seconds. No queues, no waiting.",
  },
  {
    icon: Shield,
    title: "Commercial License",
    desc: "Pro and Team plans include full commercial usage rights for client work.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-3xl font-bold tracking-tight">
          Everything you need for perfect loops
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border/50 bg-card p-6 transition-colors hover:border-border"
            >
              <feature.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
