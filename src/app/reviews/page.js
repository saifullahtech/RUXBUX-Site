import ReviewsSection from "@/components/reviews/ReviewsSection";

// Temporary demo data for frontend testing only.
// Replace this with the Django REST Framework reviews response when the API is ready.
const demoReviews = [
  {
    id: 1,
    name: "Ayesha Khan",
    rating: 5,
    title: "My wardrobe finally looks organized",
    comment:
      "The organizer feels sturdy and made my shelves much easier to manage. It is simple, clean, and useful for everyday clothes.",
    date: "2026-07-03",
    verified: true,
    productName: "StackSmart Wardrobe Organizer",
    image: "/before-after/after.png",
  },
  {
    id: 2,
    name: "Hamza Ali",
    rating: 4,
    title: "Good quality and useful",
    comment:
      "It helped me separate office shirts and home clothes. Delivery was smooth and the product matched the photos.",
    date: "2026-06-28",
    verified: true,
    productName: "StackSmart Wardrobe Organizer",
    image: null,
  },
  {
    id: 3,
    name: "Maham Raza",
    rating: 5,
    title: "Perfect for small closets",
    comment:
      "I ordered it for a compact wardrobe and it saved a lot of space. The ventilation design is a nice detail.",
    date: "2026-06-19",
    verified: true,
    productName: "StackSmart Wardrobe Organizer",
    image: "/hero/stacksmart-organizer.jpg",
  },
  {
    id: 4,
    name: "Bilal Sheikh",
    rating: 5,
    title: "Looks neat and premium",
    comment:
      "The finish is clean and it does not look cheap inside the cupboard. I would buy another set for seasonal clothes.",
    date: "2026-06-11",
    verified: true,
    productName: "StackSmart Wardrobe Organizer",
    image: null,
  },
  {
    id: 5,
    name: "Sana Tariq",
    rating: 4,
    title: "Helpful for folded clothes",
    comment:
      "It keeps stacks from falling over and makes it easier to pull one item out. I like the simple design.",
    date: "2026-05-30",
    verified: true,
    productName: "StackSmart Wardrobe Organizer",
    image: "/before-after/after.png",
  },
  {
    id: 6,
    name: "Usman Farooq",
    rating: 5,
    title: "Worth it",
    comment:
      "A practical product for anyone who wants a cleaner wardrobe without buying a new cupboard.",
    date: "2026-05-22",
    verified: true,
    productName: "StackSmart Wardrobe Organizer",
    image: null,
  },
  {
    id: 7,
    name: "Hira Malik",
    rating: 3,
    title: "Useful but I need more pieces",
    comment:
      "The product works well, but one set was not enough for my wardrobe. I will probably order more.",
    date: "2026-05-14",
    verified: true,
    productName: "StackSmart Wardrobe Organizer",
    image: null,
  },
];

export default function Reviews() {
  return (
    <main className="bg-[#fffaf1]">
      <ReviewsSection
        variant="page"
        reviews={demoReviews}
        productName="StackSmart Wardrobe Organizer"
        showFilters={true}
        showTrustBadges={true}
        maxVisibleReviews={6}
      />
    </main>
  );
}
