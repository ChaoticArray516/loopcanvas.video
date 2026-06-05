export default function CheckoutLoading() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-20 sm:px-6">
      <div className="w-full max-w-md space-y-6">
        {/* Page heading skeleton */}
        <div className="text-center space-y-2">
          <div className="mx-auto h-7 w-40 animate-pulse rounded bg-muted" />
          <div className="mx-auto h-4 w-64 animate-pulse rounded bg-muted" />
        </div>

        {/* Card skeleton — mimics a payment/pricing card */}
        <div className="rounded-2xl border border-border/50 bg-card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-5 w-24 animate-pulse rounded bg-muted" />
            <div className="h-5 w-16 animate-pulse rounded bg-muted" />
          </div>
          <div className="h-px bg-border/40" />
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-4 w-4 animate-pulse rounded bg-muted" />
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
            </div>
          ))}
          <div className="h-12 w-full animate-pulse rounded-full bg-primary/40" />
        </div>

        {/* Spinner hint */}
        <p className="text-center text-sm text-muted-foreground">
          Setting up your checkout…
        </p>
      </div>
    </div>
  );
}
