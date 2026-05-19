"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is an AI loop video generator?",
    answer: "An AI loop video generator creates seamless, infinitely looping videos from text prompts or images using artificial intelligence. LoopCanvas specializes in creating perfect loop videos optimized for Spotify Canvas, website backgrounds, and social media.",
  },
  {
    question: "How to make Spotify Canvas with AI?",
    answer: "LoopCanvas generates 9:16 vertical loop videos optimized for Spotify Canvas specifications. Simply enter a text prompt or upload an image, select the Spotify Canvas preset, and download the generated video in the correct format.",
  },
  {
    question: "Is LoopCanvas free to use?",
    answer: "Yes! LoopCanvas offers a free tier that allows 5 generations per day with standard quality. Pro plans unlock HD exports, more generations, and commercial licensing.",
  },
  {
    question: "What video formats does LoopCanvas support?",
    answer: "LoopCanvas exports videos in MP4 format (H.264/H.265), which is universally supported across all platforms including Spotify, Instagram, TikTok, and YouTube.",
  },
  {
    question: "How long does it take to generate a loop video?",
    answer: "Most loop videos are generated in 10-30 seconds. The exact time depends on the complexity of your prompt and current server load.",
  },
  {
    question: "Can I use LoopCanvas for commercial projects?",
    answer: "Yes. LoopCanvas Pro and Team plans include a full commercial license, allowing you to use generated loops in commercial projects, client work, and monetized content.",
  },
  {
    question: "What's the difference between text-to-loop and photo-to-loop?",
    answer: "Text-to-loop creates videos from your written description — great for imaginative scenes. Photo-to-loop animates an existing image you upload — ideal for bringing static visuals to life.",
  },
  {
    question: "How to create seamless loop videos?",
    answer: "LoopCanvas AI automatically ensures the first and last frames of your video match perfectly, creating an invisible transition. Just describe or upload, and the AI handles the seamless loop creation.",
  },
];

function FAQItemComponent({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-brand-400"
      >
        <span className="text-base font-medium pr-4">{item.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-muted-foreground">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Everything you need to know about LoopCanvas AI.
        </p>

        <div className="mt-12">
          {faqs.map((faq, i) => (
            <FAQItemComponent key={i} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
