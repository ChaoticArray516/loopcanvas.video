const steps = [
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
];

export default function HowItWorks() {
  return (
    <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-display text-3xl font-bold tracking-tight">
          How it works
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="text-center">
              <span className="font-display text-5xl font-bold text-primary/20">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
