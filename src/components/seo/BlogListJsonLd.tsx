import { SITE_URL, SITE_NAME } from "@/lib/site-config";

interface BlogPost {
  title: string;
  url: string;
  datePublished: string;
  authorName: string;
}

interface Props {
  posts?: BlogPost[];
}

export default function BlogListJsonLd({ posts }: Props) {
  const pageUrl = `${SITE_URL}/blog`;

  const defaultPosts: BlogPost[] = [
    {
      title: "Best AI Loop Video Generator 2026",
      url: `${SITE_URL}/blog/best-ai-loop-video-generator`,
      datePublished: "2026-05-15",
      authorName: "LoopCanvas Team",
    },
    {
      title: "How to Create Spotify Canvas Videos with AI",
      url: `${SITE_URL}/blog/how-to-create-spotify-canvas`,
      datePublished: "2026-05-10",
      authorName: "LoopCanvas Team",
    },
    {
      title: "AI Loop Videos for Social Media Marketing",
      url: `${SITE_URL}/blog/ai-loop-videos-social-media`,
      datePublished: "2026-05-05",
      authorName: "LoopCanvas Team",
    },
  ];

  const blogPosts = posts ?? defaultPosts;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}/#collection`,
        name: `Blog — ${SITE_NAME}`,
        url: pageUrl,
        description:
          "Tips, tutorials, and insights on AI loop video generation, Spotify Canvas creation, and seamless video looping techniques.",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: blogPosts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: post.url,
            name: post.title,
          })),
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
            name: "Blog",
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
