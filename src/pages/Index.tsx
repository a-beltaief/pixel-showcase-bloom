import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CaseStudies } from "@/components/CaseStudies";
import { ProcessSection } from "@/components/ProcessSection";
import { TechStack } from "@/components/TechStack";
import { Founders } from "@/components/Founders";
import { Pricing } from "@/components/Pricing";
import { BookingSection } from "@/components/BookingSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <CaseStudies />
        <ProcessSection />
        <TechStack />
        <Founders />
        <Pricing />
        <BookingSection />
        <FAQSection />
        <Footer />
      </div>
      <CookieConsent />
    </div>
  );
};

export default Index;
