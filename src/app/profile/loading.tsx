export default function ProfileLoading() {
  return (
    <div className="flex flex-1 flex-col items-center px-4 py-16 sm:px-6 lg:py-24">
      <div className="w-full max-w-3xl space-y-8">
        {/* Header skeleton */}
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 animate-pulse rounded-full bg-muted" />
          <div className="space-y-2">
            <div className="h-5 w-36 animate-pulse rounded bg-muted" />
            <div className="h-4 w-24 animate-pulse rounded bg-muted" />
          </div>
        </div>

        {/* Tabs skeleton */}
        <div className="flex gap-3 border-b border-border/40 pb-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-8 w-24 animate-pulse rounded bg-muted" />
          ))}
        </div>

        {/* Content skeleton */}
        <div className="grid gap-4 sm:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="h-8 w-8 animate-pulse rounded-lg bg-muted" />
              <div className="mt-4 h-5 w-32 animate-pulse rounded bg-muted" />
              <div className="mt-2 h-4 w-full animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
