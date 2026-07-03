import HeroSection from "@/components/home/HeroSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import StackSmartInfoSections from "@/components/home/StackSmartInfoSections";
import CustomerLoveSection from "@/components/home/CustomerLoveSection";
import FaqSection from "@/components/home/FaqSection";
import BottomCtaSection from "@/components/home/BottomCtaSection";

export default function Home() {
  return (
    <main className="bg-[#FFFDF8]">
      <HeroSection />
      <BeforeAfterSection />
      <StackSmartInfoSections />
      <CustomerLoveSection />
      <FaqSection />
      <BottomCtaSection />
    </main>
  );
}
