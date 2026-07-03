import ProductHeroSection from "@/components/product/ProductHeroSection";
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
