import { Suspense } from "react";
import PromptInput from "@/components/VideoGenerator/PromptInput";

export const metadata = {
  title: "Text-to-Loop",
  description:
    "Turn text prompts into mesmerizing seamless loop videos with AI. Describe any scene and watch it come to life.",
  alternates: {
    canonical: "/text-to-loop",
  },
};

export default function TextToLoopPage() {
  return (
    <div className="flex flex-1 flex-col items-center px-4 py-16 sm:px-6 lg:py-24">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Text-to-Loop
        </h1>
        <p className="mt-2 text-muted-foreground">
          Describe your scene and let AI create a seamless loop video
        </p>
      </div>
      <div className="mt-10 w-full">
        <Suspense
          fallback={
            <div className="mx-auto w-full max-w-2xl space-y-6">
              <div className="h-32 animate-pulse rounded-xl bg-muted" />
              <div className="h-12 animate-pulse rounded-full bg-muted" />
            </div>
          }
        >
          <PromptInput />
        </Suspense>
      </div>
    </div>
  );
}
