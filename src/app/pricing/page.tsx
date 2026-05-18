import Link from "next/link";
import { Check, Zap } from "lucide-react";
import PricingJsonLd from "@/components/seo/PricingJsonLd";

export const metadata = {
  title: "Pricing",
  description:
    "LoopCanvas AI pricing plans. Free: 5 generations per day. Pro: $9.99/month for 2000 generations. Team: $29.99/month for unlimited generations.",
  alternates: {
    canonical: "/pricing",
  },
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out AI loop videos",
    features: [
      "5 generations per day",
      "Watermarked exports",
      "Standard quality",
      "Text-to-Loop only",
      "Community support",
    ],
    cta: "Get Started",
    ctaHref: "/text-to-loop",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "For creators and independent artists",
    features: [
      "2000 generations per month",
      "No watermark",
      "HD quality export",
      "Text-to-Loop + Photo-to-Loop",
      "Spotify Canvas optimization",
      "Commercial license",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    ctaHref: "/checkout?plan=pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$29.99",
    period: "/month",
    description: "For agencies and production teams",
    features: [
      "Unlimited generations",
      "No watermark",
      "HD + 4K quality",
      "All generation modes",
      "Spotify Canvas optimization",
      "Commercial license",
      "Priority support",
      "Team collaboration",
      "API access (coming soon)",
    ],
    cta: "Contact Sales",
    ctaHref: "mailto:team@loopcanvas.video",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PricingJsonLd />

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Simple, transparent pricing
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Start free, upgrade when you need more. No hidden fees, cancel
              anytime.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-border/50 bg-card"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      <Zap className="h-3 w-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  className={`mt-8 block w-full rounded-full py-3 text-center text-sm font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border bg-background hover:bg-muted"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
