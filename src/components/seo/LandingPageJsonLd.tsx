import { SITE_URL, SITE_NAME } from "@/lib/site-config";

interface Props {
  pagePath: string;
  pageName: string;
  description: string;
  faqs?: { question: string; answer: string }[];
  howToSteps?: { name: string; text: string }[];
}

export default function LandingPageJsonLd({
  pagePath,
  pageName,
  description,
  faqs = [],
  howToSteps = [],
}: Props) {
  const pageUrl = `${SITE_URL}${pagePath}`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: pageName,
      description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
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
          name: pageName,
          item: pageUrl,
        },
      ],
    },
  ];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  if (howToSteps.length > 0) {
    graph.push({
      "@type": "HowTo",
      "@id": `${pageUrl}/#howto`,
      name: `How to ${pageName}`,
      description,
      step: howToSteps.map((step, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: step.name,
        text: step.text,
      })),
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
