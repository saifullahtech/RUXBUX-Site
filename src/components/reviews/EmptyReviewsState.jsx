"use client";

function MessageIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-9 w-9"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.4-4.2A8 8 0 1 1 21 12Z" />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
    </svg>
  );
}

export default function EmptyReviewsState({ onWriteReview }) {
  return (
    <div className="rounded-2xl border border-dashed border-[#d8952f]/45 bg-white p-6 text-center shadow-[0_12px_30px_rgba(8,38,74,0.06)] sm:p-8">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff4df] text-[#d8952f]">
        <MessageIcon />
      </div>
      <h3 className="mt-5 text-2xl font-extrabold text-[#08264a]">No reviews yet</h3>
      <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-6 text-[#4b5563]">
        Be the first to share your thoughts about this product. Write the first
        review and help other customers!
      </p>
      <button
        type="button"
        onClick={onWriteReview}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#08264a] px-6 text-sm font-extrabold text-white shadow-[0_14px_28px_rgba(8,38,74,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0b315e] focus:outline-none focus:ring-4 focus:ring-[#d8952f]/30 sm:w-auto"
      >
        Write the First Review
      </button>
    </div>
  );
}
