import { Wand2, Image, Music, Sparkles, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "Text-to-Loop",
    desc: "Describe any scene and watch AI generate a seamless looping video in seconds.",
    gradient: "from-brand-500/20 to-brand-700/20",
  },
  {
    icon: Image,
    title: "Photo-to-Loop",
    desc: "Upload any image and transform it into an animated infinite loop video.",
    gradient: "from-pink-500/20 to-pink-700/20",
  },
  {
    icon: Music,
    title: "Spotify Canvas Ready",
    desc: "9:16 vertical format optimized for Spotify artist profiles. 3-8 second loops.",
    gradient: "from-cyan-500/20 to-cyan-700/20",
  },
  {
    icon: Sparkles,
    title: "Seamless Looping",
    desc: "AI ensures the first and last frames blend perfectly for infinite playback.",
    gradient: "from-amber-500/20 to-amber-700/20",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Generate loop videos in 10-30 seconds. No queues, no waiting.",
    gradient: "from-green-500/20 to-green-700/20",
  },
  {
    icon: Shield,
    title: "Commercial License",
    desc: "Pro and Team plans include full commercial usage rights for client work.",
    gradient: "from-brand-500/20 to-pink-500/20",
  },
];

export default function FeaturesSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight">
          Everything you need for perfect loops
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card group relative rounded-2xl p-6"
            >
              {/* Gradient top border accent */}
              <div className={`absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r ${feature.gradient}`} />
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-pink-500/20">
                <feature.icon className="h-5 w-5 text-brand-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
