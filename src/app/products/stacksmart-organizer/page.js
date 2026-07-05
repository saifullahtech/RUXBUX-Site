import ProductHeroSection from "@/components/product/ProductHeroSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import { HowStackSmartWorksSection } from "@/components/home/StackSmartInfoSections";
import ProductVideosSection from "@/components/product/ProductVideosSection";
import ProductSpecialSection from "@/components/product/ProductSpecialSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import { fetchReviews, fetchReviewSummary } from "@/lib/api/reviews";

export const dynamic = "force-dynamic";

const product = {
  id: "stacksmart-organizer",
  name: "StackSmart Wardrobe Organizer",
};

async function getProductReviewsData() {
  try {
    const [reviewsData, summary] = await Promise.all([
      fetchReviews({ page: 1, pageSize: 3, productName: product.name }),
      fetchReviewSummary(),
    ]);

    return {
      reviews: reviewsData.reviews,
      summary,
    };
  } catch (error) {
    console.error("Failed to load product reviews:", error);

    return {
      reviews: [],
      summary: null,
    };
  }
}

export default async function StackSmartOrganizer() {
  const { reviews, summary } = await getProductReviewsData();

  return (
    <main className="bg-[#fffdf8]">
      <ProductHeroSection reviewSummary={summary} />
      <BeforeAfterSection />
      <HowStackSmartWorksSection />
      <ProductVideosSection />
      <ProductSpecialSection />

      <ReviewsSection
        variant="product"
        productId={product.id}
        productName={product.name}
        reviews={reviews}
        summary={summary}
        maxVisibleReviews={3}
        showFilters={false}
        showTrustBadges={true}
      />
    </main>
  );
}
