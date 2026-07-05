"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { createReview } from "@/lib/api/reviews";
import EmptyReviewsState from "./EmptyReviewsState";
import RatingBreakdown from "./RatingBreakdown";
import ReviewCard from "./ReviewCard";
import ReviewFormModal from "./ReviewFormModal";
import ReviewSummary from "./ReviewSummary";
import ReviewsFilters from "./ReviewsFilters";

const trustBadges = [
  {
    title: "Verified Buyers",
    text: "Only real customers",
  },
  {
    title: "Honest Reviews",
    text: "100% authentic feedback",
  },
  {
    title: "Secure & Private",
    text: "Your information is safe",
  },
  {
    title: "We Care",
    text: "Your opinion matters",
  },
];

function ShieldIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}

function normalizeReviews(reviews) {
  if (!Array.isArray(reviews)) {
    return [];
  }

  return reviews
    .filter((review) => review && Number(review.rating) >= 1 && Number(review.rating) <= 5)
    .map((review, index) => ({
      ...review,
      id: review.id || `${review.name || "review"}-${index}`,
      rating: Number(review.rating),
    }));
}

function getReviewStats(reviews) {
  const totalReviews = reviews.length;
  const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  reviews.forEach((review) => {
    ratingCounts[review.rating] += 1;
  });

  const ratingTotal = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalReviews > 0 ? ratingTotal / totalReviews : 0;
  const ratingPercentages = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  Object.keys(ratingCounts).forEach((rating) => {
    ratingPercentages[rating] =
      totalReviews > 0 ? Math.round((ratingCounts[rating] / totalReviews) * 100) : 0;
  });

  return { averageRating, totalReviews, ratingCounts, ratingPercentages };
}

function mergeReviewStats(currentStats, review) {
  const rating = Number(review?.rating);

  if (!rating || rating < 1 || rating > 5) {
    return currentStats;
  }

  const totalReviews = (Number(currentStats?.totalReviews) || 0) + 1;
  const currentAverage = Number(currentStats?.averageRating) || 0;
  const previousTotal = Number(currentStats?.totalReviews) || 0;
  const averageRating = (currentAverage * previousTotal + rating) / totalReviews;
  const ratingCounts = {
    1: Number(currentStats?.ratingCounts?.[1]) || 0,
    2: Number(currentStats?.ratingCounts?.[2]) || 0,
    3: Number(currentStats?.ratingCounts?.[3]) || 0,
    4: Number(currentStats?.ratingCounts?.[4]) || 0,
    5: Number(currentStats?.ratingCounts?.[5]) || 0,
  };
  ratingCounts[rating] += 1;
  const ratingPercentages = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  Object.keys(ratingCounts).forEach((ratingKey) => {
    ratingPercentages[ratingKey] = Math.round((ratingCounts[ratingKey] / totalReviews) * 100);
  });

  return { averageRating, totalReviews, ratingCounts, ratingPercentages };
}

function getTimeValue(date) {
  const parsedDate = new Date(date);
  return Number.isNaN(parsedDate.getTime()) ? 0 : parsedDate.getTime();
}

export default function ReviewsSection({
  reviews = [],
  productId,
  productName = "StackSmart Wardrobe Organizer",
  variant = "product",
  showFilters = false,
  showTrustBadges = true,
  maxVisibleReviews = 3,
  onSubmitReview,
  summary,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ratingFilter, setRatingFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [perPage, setPerPage] = useState(maxVisibleReviews || 6);
  const [currentPage, setCurrentPage] = useState(1);
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const normalizedReviews = useMemo(
    () => normalizeReviews([...submittedReviews, ...reviews]),
    [submittedReviews, reviews]
  );
  const fallbackStats = useMemo(
    () => getReviewStats(normalizedReviews),
    [normalizedReviews]
  );
  const summaryStats = useMemo(() => {
    if (!summary) {
      return null;
    }

    return submittedReviews.reduce(
      (currentStats, review) => mergeReviewStats(currentStats, review),
      summary
    );
  }, [submittedReviews, summary]);
  const { averageRating, totalReviews, ratingCounts, ratingPercentages } =
    summaryStats || fallbackStats;

  const filteredReviews = useMemo(() => {
    const filtered = normalizedReviews.filter((review) => {
      if (ratingFilter === "all") {
        return true;
      }

      return review.rating === Number(ratingFilter);
    });

    return [...filtered].sort((first, second) => {
      if (sortBy === "highest") {
        return second.rating - first.rating || getTimeValue(second.date) - getTimeValue(first.date);
      }

      if (sortBy === "lowest") {
        return first.rating - second.rating || getTimeValue(second.date) - getTimeValue(first.date);
      }

      return getTimeValue(second.date) - getTimeValue(first.date);
    });
  }, [normalizedReviews, ratingFilter, sortBy]);

  const isPageVariant = variant === "page";
  const totalPages = Math.max(1, Math.ceil(filteredReviews.length / perPage));
  const pageStart = isPageVariant ? (currentPage - 1) * perPage : 0;
  const visibleReviews = isPageVariant
    ? filteredReviews.slice(pageStart, pageStart + perPage)
    : filteredReviews.slice(0, maxVisibleReviews);
  const shouldShowFilters = showFilters && totalReviews > 0;
  const shouldShowViewAll =
    !isPageVariant && totalReviews > maxVisibleReviews && maxVisibleReviews > 0;

  function resetPage() {
    setCurrentPage(1);
  }

  async function handleSubmitReview(reviewPayload) {
    if (onSubmitReview) {
      const submittedReview = await onSubmitReview(reviewPayload);

      if (submittedReview) {
        setSubmittedReviews((currentReviews) => [submittedReview, ...currentReviews]);
      }

      return;
    }

    const submittedReview = await createReview(reviewPayload);

    if (submittedReview) {
      setSubmittedReviews((currentReviews) => [submittedReview, ...currentReviews]);
    }
  }

  return (
    <section className={isPageVariant ? "bg-[#fffaf1] px-4 py-10 sm:px-6 lg:px-8 lg:py-14" : "bg-[#fffdf8] px-4 py-8 sm:px-6 lg:px-8"}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-[#08264a] sm:text-4xl">
            Customer Reviews
          </h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-[#4b5563] sm:text-base">
            See what our happy customers are saying about the {productName}.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-[#eee3cf] bg-white shadow-[0_20px_50px_rgba(8,38,74,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.15fr_0.9fr]">
            <div className="p-5 sm:p-6 lg:p-7">
              <ReviewSummary
                averageRating={averageRating}
                totalReviews={totalReviews}
                onWriteReview={() => setIsModalOpen(true)}
              />
            </div>
            <div className="border-t border-[#eee3cf] p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-7">
              <RatingBreakdown
                ratingCounts={ratingCounts}
                ratingPercentages={ratingPercentages}
              />
            </div>
            <div className="border-t border-[#eee3cf] p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-7">
              <div className="flex h-full flex-col justify-between rounded-2xl bg-[#fffaf1] p-5">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#d8952f]">
                    Your voice matters
                  </p>
                  <h3 className="mt-3 text-xl font-extrabold leading-tight text-[#08264a]">
                    Help other shoppers choose with confidence.
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#4b5563]">
                    Share details about quality, storage, delivery, and how the product
                    worked in your home.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#08264a] px-5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#0b315e] focus:outline-none focus:ring-4 focus:ring-[#d8952f]/30"
                >
                  {totalReviews > 0 ? "Write a Review" : "Write the First Review"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={totalReviews > 0 ? "mt-7 space-y-5" : "mt-7"}>
          {shouldShowFilters && (
            <ReviewsFilters
              ratingFilter={ratingFilter}
              sortBy={sortBy}
              perPage={perPage}
              onRatingChange={(value) => {
                setRatingFilter(value);
                resetPage();
              }}
              onSortChange={(value) => {
                setSortBy(value);
                resetPage();
              }}
              onPerPageChange={(value) => {
                setPerPage(value);
                resetPage();
              }}
            />
          )}

          {totalReviews > 0 ? (
            <>
              {isPageVariant && (
                <div className="flex flex-wrap items-center justify-between gap-3 text-sm font-bold text-[#4b5563]">
                  <p>
                    Showing {visibleReviews.length > 0 ? pageStart + 1 : 0}-
                    {Math.min(pageStart + visibleReviews.length, filteredReviews.length)} of{" "}
                    {filteredReviews.length} reviews
                  </p>
                  {ratingFilter !== "all" && (
                    <button
                      type="button"
                      onClick={() => {
                        setRatingFilter("all");
                        resetPage();
                      }}
                      className="text-[#d8952f] transition hover:text-[#9a5b08]"
                    >
                      Clear rating filter
                    </button>
                  )}
                </div>
              )}

              <div className={isPageVariant ? "grid gap-4 lg:grid-cols-2" : "grid gap-4 md:grid-cols-3"}>
                {visibleReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>

              {shouldShowViewAll && (
                <div className="flex justify-center pt-2">
                  <Link
                    href="/reviews"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#08264a] bg-white px-6 text-sm font-extrabold text-[#08264a] transition hover:-translate-y-0.5 hover:border-[#d8952f] hover:bg-[#fffaf1] hover:text-[#d8952f] focus:outline-none focus:ring-4 focus:ring-[#d8952f]/25"
                  >
                    View All Reviews
                  </Link>
                </div>
              )}

              {isPageVariant && totalPages > 1 && (
                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-[#eee3cf] bg-white px-4 text-sm font-extrabold text-[#08264a] transition hover:border-[#d8952f] hover:bg-[#fffaf1] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <span className="px-3 text-sm font-extrabold text-[#4b5563]">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-[#eee3cf] bg-white px-4 text-sm font-extrabold text-[#08264a] transition hover:border-[#d8952f] hover:bg-[#fffaf1] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <EmptyReviewsState onWriteReview={() => setIsModalOpen(true)} />
          )}
        </div>

        {showTrustBadges && (
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="flex items-center gap-3 rounded-2xl border border-[#eee3cf] bg-white p-4 shadow-[0_12px_30px_rgba(8,38,74,0.06)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff4df] text-[#d8952f]">
                  <ShieldIcon />
                </span>
                <span>
                  <span className="block text-sm font-extrabold text-[#08264a]">
                    {badge.title}
                  </span>
                  <span className="block text-xs font-bold text-[#6b7280]">{badge.text}</span>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <ReviewFormModal
        isOpen={isModalOpen}
        productId={productId}
        productName={productName}
        onClose={() => setIsModalOpen(false)}
        onSubmitReview={handleSubmitReview}
      />
    </section>
  );
}
