import ProductHeroSection from "@/components/product/ProductHeroSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import { HowStackSmartWorksSection } from "@/components/home/StackSmartInfoSections";
import ProductVideosSection from "@/components/product/ProductVideosSection";
import ProductSpecialSection from "@/components/product/ProductSpecialSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";

const product = {
  id: "stacksmart-organizer",
  name: "StackSmart Wardrobe Organizer",
  reviews: [],
};

export default function StackSmartOrganizer() {
  return (
    <main className="bg-[#fffdf8]">
      <ProductHeroSection />
      <BeforeAfterSection />
      <HowStackSmartWorksSection />
      <ProductVideosSection />
      <ProductSpecialSection />

      <ReviewsSection
        variant="product"
        productId={product.id}
        productName={product.name}
        reviews={product.reviews || []}
        maxVisibleReviews={3}
        showFilters={false}
        showTrustBadges={true}
      />
    </main>
  );
}
