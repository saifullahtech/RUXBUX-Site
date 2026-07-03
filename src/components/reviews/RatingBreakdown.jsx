"use client";

export default function RatingBreakdown({
  ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
  ratingPercentages = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-extrabold text-[#08264a]">Rating breakdown</h3>
        <span className="rounded-full bg-[#fff4df] px-3 py-1 text-xs font-bold text-[#9a5b08]">
          Verified
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="grid grid-cols-[44px_1fr_34px] items-center gap-3">
            <span className="text-sm font-bold text-[#303846]">{rating} star</span>
            <div className="h-2.5 overflow-hidden rounded-full bg-[#f1e7d6]">
              <div
                className="h-full rounded-full bg-[#d8952f] transition-all duration-500"
                style={{ width: `${ratingPercentages[rating] || 0}%` }}
              />
            </div>
            <span className="text-right text-sm font-bold text-[#6b7280]">
              {ratingCounts[rating] || 0}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
