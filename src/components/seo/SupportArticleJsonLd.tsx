import { SITE_URL } from "@/lib/site-config";

interface Props {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  imageUrl?: string;
}

export default function SupportArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "LoopCanvas Team",
  imageUrl,
}: Props) {
  const articleImage = imageUrl ?? `${SITE_URL}/og-image.jpg`;
  const modifiedDate = dateModified ?? datePublished;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}/#article`,
        headline: title,
        description,
        url,
        image: {
          "@type": "ImageObject",
          url: articleImage,
          width: 1200,
          height: 630,
        },
        datePublished,
        dateModified: modifiedDate,
        author: {
          "@type": "Person",
          name: authorName,
          url: SITE_URL,
        },
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
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
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: url,
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
