import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
}

interface RelatedArticlesProps {
  currentSlug: string;
  posts: Post[];
}

export default function RelatedArticles({ currentSlug, posts }: RelatedArticlesProps) {
  // Score posts by tag overlap, excluding current
  const scored = posts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      const currentPost = posts.find((cp) => cp.slug === currentSlug);
      let score = 0;
      if (currentPost) {
        const matchingTags = p.tags.filter((t) => currentPost.tags.includes(t));
        score = matchingTags.length * 2;
      }
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.post);

  if (scored.length === 0) return null;

  return (
    <section className="mt-16 border-t border-border/40 pt-8">
      <h2 className="text-xl font-bold">Related Articles</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {scored.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl border border-border/50 bg-card/50 p-4 transition-colors hover:bg-card/80"
          >
            <p className="text-xs text-muted-foreground">
              {post.tags[0]}
            </p>
            <h3 className="mt-1 text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
