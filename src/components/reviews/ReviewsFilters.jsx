"use client";

export default function ReviewsFilters({
  ratingFilter,
  sortBy,
  perPage,
  onRatingChange,
  onSortChange,
  onPerPageChange,
}) {
  const selectClass =
    "h-11 w-full rounded-xl border border-[#eee3cf] bg-white px-3 text-sm font-bold text-[#08264a] shadow-sm outline-none transition focus:border-[#d8952f] focus:ring-4 focus:ring-[#d8952f]/25";

  return (
    <div className="grid gap-3 rounded-2xl border border-[#eee3cf] bg-white p-4 shadow-[0_12px_30px_rgba(8,38,74,0.06)] sm:grid-cols-3">
      <label className="block">
        <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.08em] text-[#9a5b08]">
          Rating
        </span>
        <select
          value={ratingFilter}
          onChange={(event) => onRatingChange(event.target.value)}
          className={selectClass}
        >
          <option value="all">All ratings</option>
          <option value="5">5 stars</option>
          <option value="4">4 stars</option>
          <option value="3">3 stars</option>
          <option value="2">2 stars</option>
          <option value="1">1 star</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.08em] text-[#9a5b08]">
          Sort by
        </span>
        <select
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value)}
          className={selectClass}
        >
          <option value="newest">Newest first</option>
          <option value="highest">Highest rated</option>
          <option value="lowest">Lowest rated</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.08em] text-[#9a5b08]">
          Per page
        </span>
        <select
          value={perPage}
          onChange={(event) => onPerPageChange(Number(event.target.value))}
          className={selectClass}
        >
          <option value={3}>3 reviews</option>
          <option value={6}>6 reviews</option>
          <option value={9}>9 reviews</option>
        </select>
      </label>
    </div>
  );
}
