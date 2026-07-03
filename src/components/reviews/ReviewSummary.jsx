"use client";

function StarIcon({ filled = true, className = "h-5 w-5" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? "0" : "1.8"}
    >
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  );
}

export default function ReviewSummary({
  averageRating = 0,
  totalReviews = 0,
  onWriteReview,
}) {
  const hasReviews = totalReviews > 0;

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        {hasReviews ? (
          <>
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#d8952f]">
              Overall rating
            </p>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-5xl font-extrabold leading-none text-[#08264a]">
                {averageRating.toFixed(1)}
              </span>
              <span className="pb-1 text-lg font-bold text-[#303846]">out of 5</span>
            </div>
            <div className="mt-4 flex text-[#d8952f]" aria-label={`${averageRating.toFixed(1)} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon
                  key={index}
                  filled={index < Math.round(averageRating)}
                  className="h-5 w-5"
                />
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold text-[#4b5563]">
              Based on {totalReviews} verified {totalReviews === 1 ? "review" : "reviews"}
            </p>
          </>
        ) : (
          <>
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#d8952f]">
              Customer feedback
            </p>
            <h3 className="mt-3 text-3xl font-extrabold leading-tight text-[#08264a]">
              No reviews yet
            </h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-[#4b5563]">
              Be the first to share your experience with RUXBUX. Your review helps
              other customers choose with confidence.
            </p>
          </>
        )}
      </div>

      <button
        type="button"
        onClick={onWriteReview}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#08264a] px-5 text-sm font-extrabold text-white shadow-[0_14px_28px_rgba(8,38,74,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0b315e] focus:outline-none focus:ring-4 focus:ring-[#d8952f]/30"
      >
        {hasReviews ? "Write a Review" : "Write the First Review"}
      </button>
    </div>
  );
}
