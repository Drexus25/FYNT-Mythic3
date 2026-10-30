"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import JobCard, { JobCardProps } from "./JobCard";

const CARDS_PER_SLIDE = 3;

function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

interface JobCarouselProps {
  jobs: JobCardProps[];
}

const keyframes = `
@keyframes slide-in-from-right {
  from { opacity: 0; transform: translateX(48px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes slide-in-from-left {
  from { opacity: 0; transform: translateX(-48px); }
  to   { opacity: 1; transform: translateX(0); }
}
`;

export default function JobCarousel({ jobs }: JobCarouselProps) {
  const slides = chunkArray(jobs, CARDS_PER_SLIDE);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [paused, setPaused] = useState(false);
  const isAnimating = useRef(false);

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (isAnimating.current || index === current) return;
      isAnimating.current = true;
      setDirection(dir);
      setCurrent(index);
      setTimeout(() => { isAnimating.current = false; }, 480);
    },
    [current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo, slides.length]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo, slides.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const animationName =
    direction === "next" ? "slide-in-from-right" : "slide-in-from-left";

  return (
    <section>
      {/* Inject keyframes once */}
      <style>{keyframes}</style>

      {/*
        Outer: relative + horizontal padding to give space for the arrow buttons.
        NO overflow-hidden here — that would clip the arrows.
      */}
      <div
        className="relative px-7"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Inner clip wrapper — only the grid is clipped, not the buttons */}
        <div className="overflow-hidden rounded-lg">
          <div
            key={current}
            style={{
              animation: `${animationName} 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`,
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {slides[current].map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>

        <button
          id="carousel-prev"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-paper border border-line shadow-sm flex items-center justify-center text-ink-muted hover:text-ink hover:shadow-md transition-all active:scale-90"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          id="carousel-next"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-paper border border-line shadow-sm flex items-center justify-center text-ink-muted hover:text-ink hover:shadow-md transition-all active:scale-90"
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
            onClick={() => goTo(i, i > current ? "next" : "prev")}
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
