"use client";

import { useState, useEffect, useCallback } from "react";
import JobCard, { JobCardProps } from "./JobCard";

const CARDS_PER_SLIDE = 3;

// Group jobs into chunks of CARDS_PER_SLIDE
function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

interface JobCarouselProps {
  jobs: JobCardProps[];
}

export default function JobCarousel({ jobs }: JobCarouselProps) {
  const slides = chunkArray(jobs, CARDS_PER_SLIDE);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 400);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo, slides.length]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo, slides.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section>
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(8px)" : "translateY(0)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {slides[current].map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>

        <button
          id="carousel-prev"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-paper border border-line shadow-sm flex items-center justify-center text-ink-muted hover:text-ink hover:shadow-md transition-all active:scale-90"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          id="carousel-next"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-paper border border-line shadow-sm flex items-center justify-center text-ink-muted hover:text-ink hover:shadow-md transition-all active:scale-90"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            id={`carousel-dot-${i}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              borderRadius: "9999px",
              background: i === current ? "var(--color-teal)" : "var(--color-line)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
