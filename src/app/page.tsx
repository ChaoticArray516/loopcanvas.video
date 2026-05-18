import Link from "next/link";
import { ArrowRight, Sparkles, Image, Music, Wand2, Zap, Shield } from "lucide-react";
import HomeJsonLd from "@/components/seo/HomeJsonLd";

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-4xl text-center"
        >
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            AI Loop Video Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Turn text prompts or photos into mesmerizing seamless loop videos.
            Perfect for Spotify Canvas, website backgrounds, and social media.
          </p>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5"
            >
              <Shield className="h-4 w-4 text-primary" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5"
            >
              <Zap className="h-4 w-4 text-primary" /> 5 free generations daily
            </span>
            <span className="flex items-center gap-1.5"
            >
              <Sparkles className="h-4 w-4 text-primary" /> HD MP4 export
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/text-to-loop"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Wand2 className="h-5 w-5" />
              Try Text-to-Loop
            </Link>
            <Link
              href="/photo-to-loop"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-3.5 text-base font-medium transition-colors hover:bg-muted"
            >
              <Image className="h-5 w-5" />
              Upload Image
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl"
        >
          <h2 className="text-center font-display text-3xl font-bold tracking-tight"
          >
            Everything you need for perfect loops
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
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
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border/50 bg-card p-6 transition-colors hover:border-border"
              >
                <feature.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-semibold"
                >{feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground"
                >{feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl"
        >
          <h2 className="text-center font-display text-3xl font-bold tracking-tight"
          >
            How it works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3"
          >
            {[
              {
                step: "01",
                title: "Describe or Upload",
                desc: "Enter a text prompt or upload an image. Be as creative as you want.",
              },
              {
                step: "02",
                title: "AI Generates",
                desc: "Our AI creates a seamless looping video optimized for your use case.",
              },
              {
                step: "03",
                title: "Download & Share",
                desc: "Export as HD MP4 and use it on Spotify, websites, or social media.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center"
              >
                <span className="font-display text-5xl font-bold text-primary/20"
                >{item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold"
                >{item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground"
                >{item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-3xl rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight"
          >
            Ready to create your first loop?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80"
          >
            Join thousands of artists and creators making stunning loop videos with AI.
          </p>
          <Link
            href="/text-to-loop"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-background/90"
          >
            Start Creating Free
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
