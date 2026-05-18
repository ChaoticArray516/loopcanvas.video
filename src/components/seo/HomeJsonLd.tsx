import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site-config";

export default function HomeJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
          width: 512,
          height: 512,
        },
        sameAs: [],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: SITE_NAME,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        image: `${SITE_URL}/og-image.jpg`,
        featureList: [
          "Text-to-loop video generation",
          "Photo-to-loop video generation",
          "Spotify Canvas maker",
          "Seamless infinite looping",
          "HD MP4 download",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "1247",
          bestRating: "5",
        },
        offers: [
          {
            "@type": "Offer",
            name: "Free",
            price: "0",
            priceCurrency: "USD",
            description: "5 generations per day with watermark",
          },
          {
            "@type": "Offer",
            name: "Pro",
            price: "9.99",
            priceCurrency: "USD",
            description: "2000 generations per month, commercial license",
          },
          {
            "@type": "Offer",
            name: "Team",
            price: "29.99",
            priceCurrency: "USD",
            description: "Unlimited generations, team collaboration",
          },
        ],
        keywords: [
          "AI loop video generator",
          "seamless loop video",
          "Spotify Canvas maker",
          "text to loop video",
          "photo to loop video",
          "AI video generator",
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
