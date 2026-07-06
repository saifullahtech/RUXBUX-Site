"use client";

import { useCallback, useEffect, useId, useState } from "react";

function StarIcon({ filled = true }) {
  return (
    <svg
      aria-hidden="true"
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? "0" : "1.8"}
    >
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

export default function ReviewFormModal({
  isOpen,
  productId,
  productName,
  onClose,
  onSubmitReview,
}) {
  const titleId = useId();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    comment: "",
    images: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const closeModal = useCallback(() => {
    setSuccessMessage("");
    setErrorMessage("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeModal();
      }
    }

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) {
    return null;
  }

  function updateField(field, value) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!rating || !formData.name.trim() || !formData.email.trim() || !formData.comment.trim()) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    const reviewPayload = {
      productId,
      productName,
      rating,
      name: formData.name.trim(),
      email: formData.email.trim(),
      title: formData.title.trim(),
      comment: formData.comment.trim(),
      images: formData.images,
      verified: false,
    };

    try {
      await onSubmitReview(reviewPayload);
      setSuccessMessage(
        "Thank you! Your review is now live."
      );
      setRating(0);
      setHoverRating(0);
      setFormData({ name: "", email: "", title: "", comment: "", images: [] });
    } catch (error) {
      const apiMessage =
        error?.email?.[0] ||
        error?.text?.[0] ||
        error?.stars?.[0] ||
        error?.detail ||
        "Unable to submit your review right now. Please try again.";
      setErrorMessage(apiMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "mt-2 h-12 w-full rounded-xl border border-[#eee3cf] bg-white px-4 text-sm font-semibold text-[#08264a] outline-none transition placeholder:text-[#9ca3af] focus:border-[#d8952f] focus:ring-4 focus:ring-[#d8952f]/25";
  const labelClass = "block text-sm font-extrabold text-[#08264a]";

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-end justify-center bg-[#08264a]/55 p-0 backdrop-blur-[2px] sm:items-center sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className="max-h-[92vh] w-full overflow-y-auto rounded-t-3xl border border-[#eee3cf] bg-white p-5 shadow-2xl sm:max-w-2xl sm:rounded-3xl sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#d8952f]">
              Share your experience
            </p>
            <h2 id={titleId} className="mt-2 text-2xl font-extrabold text-[#08264a]">
              Write a Review
            </h2>
            {productName && (
              <p className="mt-1 text-sm font-semibold text-[#4b5563]">{productName}</p>
            )}
          </div>

          <button
            type="button"
            onClick={closeModal}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#eee3cf] text-[#4b5563] transition hover:border-[#d8952f] hover:bg-[#fffaf1] hover:text-[#d8952f] focus:outline-none focus:ring-4 focus:ring-[#d8952f]/25"
            aria-label="Close review form"
          >
            <CloseIcon />
          </button>
        </div>

        {successMessage ? (
          <div className="mt-6 rounded-2xl border border-[#eee3cf] bg-[#fffaf1] p-5">
            <h3 className="text-lg font-extrabold text-[#08264a]">Review submitted</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#4b5563]">
              {successMessage}
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#08264a] px-5 text-sm font-extrabold text-white transition hover:bg-[#0b315e] focus:outline-none focus:ring-4 focus:ring-[#d8952f]/30"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <fieldset>
              <legend className={labelClass}>Rating <span className="text-[#d8952f]">*</span></legend>
              <div className="mt-3 flex gap-1 text-[#d8952f]">
                {Array.from({ length: 5 }).map((_, index) => {
                  const starValue = index + 1;
                  const activeValue = hoverRating || rating;

                  return (
                    <button
                      key={starValue}
                      type="button"
                      onClick={() => setRating(starValue)}
                      onMouseEnter={() => setHoverRating(starValue)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="rounded-lg p-1 transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#d8952f]/25"
                      aria-label={`${starValue} star rating`}
                    >
                      <StarIcon filled={starValue <= activeValue} />
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className={labelClass}>
                Name <span className="text-[#d8952f]">*</span>
                <input
                  required
                  value={formData.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className={inputClass}
                  placeholder="Your name"
                />
              </label>

              <label className={labelClass}>
                Email <span className="text-[#d8952f]">*</span>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className={inputClass}
                  placeholder="For verification only"
                />
              </label>
            </div>

            <label className={labelClass}>
              Review title <span className="text-[#9ca3af]">(optional)</span>
              <input
                value={formData.title}
                onChange={(event) => updateField("title", event.target.value)}
                className={inputClass}
                placeholder="What stood out?"
              />
            </label>

            <label className={labelClass}>
              Review message <span className="text-[#d8952f]">*</span>
              <textarea
                required
                value={formData.comment}
                onChange={(event) => updateField("comment", event.target.value)}
                className="mt-2 min-h-32 w-full resize-y rounded-xl border border-[#eee3cf] bg-white px-4 py-3 text-sm font-semibold leading-6 text-[#08264a] outline-none transition placeholder:text-[#9ca3af] focus:border-[#d8952f] focus:ring-4 focus:ring-[#d8952f]/25"
                placeholder="Tell other customers about your experience"
              />
            </label>

            <label className={labelClass}>
              Add image <span className="text-[#9ca3af]">(optional)</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(event) =>
                  updateField("images", Array.from(event.target.files || []))
                }
                className="mt-2 block w-full rounded-xl border border-dashed border-[#e3dfd8] bg-[#fffaf1] px-4 py-4 text-sm font-semibold text-[#4b5563] file:mr-4 file:rounded-lg file:border-0 file:bg-[#08264a] file:px-4 file:py-2 file:text-sm file:font-extrabold file:text-white hover:file:bg-[#0b315e]"
              />
            </label>

            {errorMessage && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold leading-6 text-red-700">
                {errorMessage}
              </div>
            )}

            <div className="rounded-2xl bg-[#fffaf1] p-4 text-sm font-semibold leading-6 text-[#4b5563]">
              Your review will be published as soon as it is submitted.
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#08264a] px-6 text-sm font-extrabold text-white shadow-[0_14px_28px_rgba(8,38,74,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0b315e] focus:outline-none focus:ring-4 focus:ring-[#d8952f]/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
