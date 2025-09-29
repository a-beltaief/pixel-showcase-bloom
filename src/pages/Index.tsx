import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { ProcessSection } from "@/components/ProcessSection";
import { Founders } from "@/components/Founders";
import { Pricing } from "@/components/Pricing";
import { BookingSection } from "@/components/BookingSection";
import { WhySection } from "@/components/WhySection";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <StorySection />
        <ProcessSection />
        <Founders />
        <Pricing />
        <BookingSection />
        <WhySection />
        <CTASection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
