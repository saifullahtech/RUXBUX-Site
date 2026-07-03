"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const beforeImage = "/before-after/before.png";
const afterImage = "/before-after/after.png";

function ArrowLeftRightIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M8 7 3 12l5 5" />
      <path d="M3 12h18" />
      <path d="m16 7 5 5-5 5" />
    </svg>
  );
}

export default function BeforeAfterSection() {
  const containerRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  const updateSliderPosition = useCallback((clientX) => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    const clampedPosition = Math.min(84, Math.max(16, nextPosition));

    setSliderPosition(clampedPosition);
  }, []);

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    updateSliderPosition(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (event.buttons !== 1) {
      return;
    }

    updateSliderPosition(event.clientX);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setSliderPosition((position) => Math.max(16, position - 4));
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setSliderPosition((position) => Math.min(84, position + 4));
    }
  };

  return (
    <section className="bg-white">
      <div className="bg-[#08264a] px-4 py-2.5 text-center sm:py-3">
        <h2 className="text-[23px] font-bold leading-tight text-[#fffaf1] sm:text-[32px] lg:text-[38px]">
          From Messy to Organized in Seconds
        </h2>
      </div>

      <div className="px-4 pb-8 pt-3 sm:px-6 sm:pb-10 sm:pt-4 lg:px-8">
        <div className="mx-auto max-w-[860px]">
          <div
            ref={containerRef}
            className="group relative aspect-[4/5] min-h-[390px] overflow-hidden rounded-2xl border border-[#e5d6bd] bg-white shadow-[0_20px_55px_rgba(8,38,74,0.12)] sm:aspect-[16/9] sm:min-h-0"
          >
            <Image
              src={afterImage}
              alt="Organized wardrobe shelf with StackSmart storage"
              fill
              sizes="(min-width: 1024px) 960px, (min-width: 640px) 90vw, 100vw"
              className="select-none object-cover"
              priority={false}
              draggable={false}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,38,74,0.12)_0%,rgba(8,38,74,0)_42%,rgba(8,38,74,0.38)_100%)]" />

            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative h-full" style={{ width: `${10000 / sliderPosition}%` }}>
                <Image
                  src={beforeImage}
                  alt="Messy overcrowded wardrobe shelf before using StackSmart"
                  fill
                  sizes="(min-width: 1024px) 960px, (min-width: 640px) 90vw, 100vw"
                  className="select-none object-cover"
                  priority={false}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,38,74,0.1)_0%,rgba(8,38,74,0)_42%,rgba(8,38,74,0.5)_100%)]" />
              </div>
            </div>

            <div className="absolute left-4 top-4 z-20 rounded-full bg-[#08264a] px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white shadow-lg sm:left-5 sm:top-5">
              Before
            </div>
            <div className="absolute right-4 top-4 z-20 rounded-full bg-white px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#08264a] shadow-lg sm:right-5 sm:top-5">
              After
            </div>

            <div
              className="absolute inset-y-0 z-30 w-0.5 bg-white shadow-[0_0_18px_rgba(8,38,74,0.28)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <button
                type="button"
                aria-label="Drag to compare before and after wardrobe images"
                aria-valuemin={16}
                aria-valuemax={84}
                aria-valuenow={Math.round(sliderPosition)}
                role="slider"
                tabIndex={0}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onKeyDown={handleKeyDown}
                className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 touch-none items-center justify-center rounded-full border-[3px] border-white bg-[#08264a] text-[#d8952f] shadow-[0_14px_30px_rgba(8,38,74,0.32)] transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#d8952f]/35 sm:h-12 sm:w-12 [&>svg]:h-5 [&>svg]:w-5"
              >
                <ArrowLeftRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
