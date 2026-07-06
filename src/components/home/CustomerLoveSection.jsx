"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

const reviews = [
  {
    name: "Bisma",
    avatar: "https://i.pravatar.cc/64?img=32",
    image: "/reviews/1.jpeg",
    text: "Highly recommended for anyone who wants more space in a small wardrobe.",
  },
  {
    name: "Ahmad",
    avatar: "https://i.pravatar.cc/64?img=12",
    image: "/reviews/2.jpeg",
    text: "Nice product, kapray separate rakhna aur nikalna bohat easy ho gaya hai.",
  },
  {
    name: "Hira",
    avatar: "https://i.pravatar.cc/64?img=47",
    image: "/reviews/3.jpeg",
    text: "The plastic feels strong and the ventilation design keeps clothes fresh.",
  },
  {
    name: "Ayesha",
    avatar: "https://i.pravatar.cc/64?img=5",
    image: "/reviews/4.jpeg",
    text: "Best storage solution I have tried for folded clothes and everyday essentials.",
  },
  {
    name: "Sana",
    avatar: "https://i.pravatar.cc/64?img=26",
    image: "/reviews/5.jpeg",
    text: "My shelves look cleaner now and everything is easier to find quickly.",
  },
  {
    name: "Danish",
    avatar: "https://i.pravatar.cc/64?img=59",
    image: "/reviews/6.jpeg",
    text: "Simple to assemble, sturdy, and perfect for organizing office shirts.",
  },
];

function StarIcon({ className = "h-3 w-3" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  );
}

function ChevronIcon({ className = "h-5 w-5" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function getVisibleCount() {
  if (typeof window === "undefined") {
    return 1;
  }

  if (window.matchMedia("(min-width: 1024px)").matches) {
    return 4;
  }

  if (window.matchMedia("(min-width: 640px)").matches) {
    return 2;
  }

  return 1;
}

export default function CustomerLoveSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slides = useMemo(() => [...reviews, ...reviews], []);
  const itemWidth = 100 / slides.length;

  useEffect(() => {
    const updateVisibleCount = () => setVisibleCount(getVisibleCount());

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const goNext = useCallback(() => {
    setIsTransitioning(true);
    setActiveIndex((index) => index + 1);
  }, []);

  const goPrevious = useCallback(() => {
    if (activeIndex === 0) {
      setIsTransitioning(false);
      setActiveIndex(reviews.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setActiveIndex(reviews.length - 1);
        });
      });

      return;
    }

    setIsTransitioning(true);
    setActiveIndex((index) => index - 1);
  }, [activeIndex]);

  useEffect(() => {
    const timeout = window.setTimeout(goNext, 5000);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, goNext]);

  const handleTransitionEnd = () => {
    if (activeIndex >= reviews.length) {
      setIsTransitioning(false);
      setActiveIndex(0);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  return (
    <section className="bg-white px-4 pb-3 pt-5 sm:px-6 sm:pb-4 sm:pt-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        <h2 className="text-center text-2xl font-extrabold leading-tight text-[#08264a] sm:text-3xl">
          Loved by 22000+ Customers
        </h2>

        <div className="relative mt-4 px-9 sm:px-10">
          <button
            type="button"
            aria-label="Show previous customer review"
            onClick={goPrevious}
            className="absolute left-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#08264a] text-white shadow-[0_10px_24px_rgba(8,38,74,0.22)] transition hover:bg-[#0b315e] focus:outline-none focus:ring-4 focus:ring-[#d8952f]/30"
          >
            <ChevronIcon className="h-4 w-4 rotate-180" />
          </button>

          <div className="overflow-hidden">
            <div
              className={`flex ${isTransitioning ? "transition-transform duration-500 ease-out" : ""}`}
              style={{
                width: `${(slides.length * 100) / visibleCount}%`,
                transform: `translateX(-${activeIndex * itemWidth}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((review, index) => (
                <article
                  key={`${review.name}-${index}`}
                  className="px-2"
                  style={{ width: `${itemWidth}%` }}
                >
                  <div className="h-full rounded-md border border-[#e3dfd8] bg-white p-4 shadow-[0_12px_30px_rgba(8,38,74,0.08)]">
                    <div className="flex items-center gap-3">
                      <Image
                        src={review.avatar}
                        alt={`${review.name} customer photo`}
                        width={42}
                        height={42}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="min-w-0">
                        <h3 className="text-sm font-extrabold leading-tight text-[#08264a]">
                          {review.name}
                        </h3>
                        <div className="mt-1 flex text-[#d8952f]">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <StarIcon key={starIndex} />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 min-h-[54px] text-[12px] font-semibold leading-[1.35] text-[#26364a]">
                      {review.text}
                    </p>

                    <div className="mt-3 overflow-hidden rounded-md bg-[#f5f0ea]">
                      <div className="relative aspect-[4/2.2]">
                        <Image
                          src={review.image}
                          alt="StackSmart organizer review photo"
                          fill
                          sizes="(min-width: 1024px) 220px, (min-width: 640px) 40vw, 80vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Show next customer review"
            onClick={goNext}
            className="absolute right-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#08264a] text-white shadow-[0_10px_24px_rgba(8,38,74,0.22)] transition hover:bg-[#0b315e] focus:outline-none focus:ring-4 focus:ring-[#d8952f]/30"
          >
            <ChevronIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-3 flex justify-center gap-2">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              type="button"
              aria-label={`Show ${review.name} review`}
              onClick={() => {
                setIsTransitioning(true);
                setActiveIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                activeIndex % reviews.length === index ? "w-6 bg-[#08264a]" : "w-2 bg-[#d8d2c8]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
