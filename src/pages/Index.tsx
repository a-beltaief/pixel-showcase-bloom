import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { ProcessSection } from "@/components/ProcessSection";
import { Founders } from "@/components/Founders";
import { Pricing } from "@/components/Pricing";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Contact } from "@/components/Contact";
import { BookingSection } from "@/components/BookingSection";
import { WhySection } from "@/components/WhySection";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

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
        <PortfolioGrid />
        <Contact />
        <BookingSection />
        <WhySection />
        <CTASection />
        <FAQSection />
        <Footer />
      </div>
      <CookieConsent />
    </div>
  );
};

export default Index;
