"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-cards-scroll";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "In the dance of life, we are both the dancer and the observer. Our actions ripple through time, creating the tapestry of our existence.",
    name: "Deepak Chopra",
    title: "The Soul of Leadership",
  },
  {
    quote: "Where the mind is without fear and the head is held high; Where knowledge is free; Where the world has not been broken up into fragments by narrow domestic walls;",
    name: "Rabindranath Tagore",
    title: "Gitanjali",
  },
  {
    quote: "The future depends on what we do in the present. Be the change you wish to see in the world.",
    name: "Mahatma Gandhi",
    title: "The Story of My Experiments with Truth",
  },
  {
    quote: "A man is but the product of his thoughts. What he thinks, he becomes.",
    name: "Sarvepalli Radhakrishnan",
    title: "An Idealist View of Life",
  },
  {
    quote: "In a gentle way, you can shake the world. The weak can never forgive. Forgiveness is the attribute of the strong.",
    name: "Abdul Kalam",
    title: "Wings of Fire",
  },
];
