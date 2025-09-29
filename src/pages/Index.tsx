import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Founders } from "@/components/Founders";
import { StorySection } from "@/components/StorySection";
import { PriceTransparency } from "@/components/PriceTransparency";
import { WhatYouGet } from "@/components/WhatYouGet";
import { Pricing } from "@/components/Pricing";
import { ProcessSection } from "@/components/ProcessSection";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { SuccessStories } from "@/components/SuccessStories";
import { FAQSection } from "@/components/FAQSection";
import { NewContact } from "@/components/NewContact";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Philosophy />
        <Founders />
        <StorySection />
        <PriceTransparency />
        <WhatYouGet />
        <Pricing />
        <ProcessSection />
        <PortfolioGrid />
        <SuccessStories />
        <FAQSection />
        <NewContact />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
