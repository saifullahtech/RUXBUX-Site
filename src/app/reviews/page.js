import ReviewsSection from "@/components/reviews/ReviewsSection";
import { fetchReviews, fetchReviewSummary } from "@/lib/api/reviews";

export const dynamic = "force-dynamic";

const productName = "StackSmart Wardrobe Organizer";

async function getReviewsPageData() {
  try {
    const [reviewsData, summary] = await Promise.all([
      fetchReviews({ page: 1, pageSize: 50, productName }),
      fetchReviewSummary(),
    ]);

    return {
      reviews: reviewsData.reviews,
      summary,
    };
  } catch (error) {
    console.error("Failed to load reviews page data:", error);

    return {
      reviews: [],
      summary: null,
    };
  }
}

export default async function Reviews() {
  const { reviews, summary } = await getReviewsPageData();

  return (
    <main className="bg-[#fffaf1]">
      <ReviewsSection
        variant="page"
        reviews={reviews}
        summary={summary}
        productName={productName}
        showFilters={true}
        showTrustBadges={true}
        maxVisibleReviews={6}
      />
    </main>
  );
}
