import PhotoUpload from "@/components/VideoGenerator/PhotoUpload";

export const metadata = {
  title: "Photo-to-Loop",
  description:
    "Upload any photo and transform it into an animated seamless loop video with AI.",
  alternates: {
    canonical: "/photo-to-loop",
  },
};

export default function PhotoToLoopPage() {
  return (
    <div className="flex flex-1 flex-col items-center px-4 py-16 sm:px-6 lg:py-24">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Photo-to-Loop
        </h1>
        <p className="mt-2 text-muted-foreground">
          Upload a photo and watch AI turn it into a seamless loop video
        </p>
      </div>
      <div className="mt-10 w-full">
        <PhotoUpload />
      </div>
    </div>
  );
}
