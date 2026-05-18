import { SITE_URL, SITE_NAME } from "@/lib/site-config";

export default function PricingJsonLd() {
  const pageUrl = `${SITE_URL}/pricing`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${pageUrl}/#product`,
        name: `${SITE_NAME} — Pricing Plans`,
        url: pageUrl,
        description:
          "LoopCanvas AI pricing plans: Free (5 generations/day), Pro ($9.99/month), and Team ($29.99/month). Create AI-powered seamless loop videos for Spotify Canvas, social media, and digital art.",
        brand: {
          "@id": `${SITE_URL}/#organization`,
        },
        offers: [
          {
            "@type": "Offer",
            "@id": `${pageUrl}/#offer-free`,
            name: "Free",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            description: "5 generations per day with watermark",
            url: `${SITE_URL}/signup`,
          },
          {
            "@type": "Offer",
            "@id": `${pageUrl}/#offer-pro`,
            name: "Pro",
            price: "9.99",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            description: "2000 generations per month, commercial license, no watermark",
            url: `${SITE_URL}/checkout?plan=pro`,
          },
          {
            "@type": "Offer",
            "@id": `${pageUrl}/#offer-team`,
            name: "Team",
            price: "29.99",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            description: "Unlimited generations, team collaboration, priority support",
            url: `${SITE_URL}/checkout?plan=team`,
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "1247",
          bestRating: "5",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Pricing",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
