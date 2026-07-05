"use client";

import Image from "next/image";

function StarIcon({ filled = true }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? "0" : "1.8"}
    >
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  );
}

function formatReviewDate(date) {
  if (!date) {
    return "Recently";
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsedDate);
}

export default function ReviewCard({ review }) {
  const rating = Math.max(1, Math.min(5, Number(review.rating) || 1));

  return (
    <article className="rounded-2xl border border-[#eee3cf] bg-white p-5 shadow-[0_12px_30px_rgba(8,38,74,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(8,38,74,0.1)] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex text-[#d8952f]" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} filled={index < rating} />
            ))}
          </div>
          <h3 className="mt-3 text-lg font-extrabold leading-tight text-[#08264a]">
            {review.title || "Helpful review"}
          </h3>
        </div>

        {review.verified && (
          <span className="shrink-0 rounded-full bg-[#fff4df] px-3 py-1 text-xs font-bold text-[#9a5b08]">
            Published
          </span>
        )}
      </div>

      <p className="mt-3 text-sm font-semibold leading-6 text-[#4b5563]">
        {review.comment}
      </p>

      {review.image && (
        <div className="mt-4 overflow-hidden rounded-xl bg-[#f4ecdf]">
          <div className="relative aspect-[4/2.3]">
            <Image
              src={review.image}
              alt={`${review.name || "Customer"} review photo`}
              fill
              sizes="(min-width: 1024px) 360px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#f1e7d6] pt-4">
        <div>
          <p className="font-extrabold text-[#08264a]">{review.name || "RUXBUX Customer"}</p>
          {review.productName && (
            <p className="mt-0.5 text-xs font-bold text-[#6b7280]">{review.productName}</p>
          )}
        </div>
        <time className="text-xs font-bold text-[#6b7280]" dateTime={review.date || undefined}>
          {formatReviewDate(review.date)}
        </time>
      </div>
    </article>
  );
}
