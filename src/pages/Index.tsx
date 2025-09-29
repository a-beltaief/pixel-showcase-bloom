import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Founders } from "@/components/Founders";
import { WhatYouGet } from "@/components/WhatYouGet";
import { ProcessSection } from "@/components/ProcessSection";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { SuccessStories } from "@/components/SuccessStories";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <Hero />
        <Philosophy />
        <Founders />
        <WhatYouGet />
        <ProcessSection />
        <PortfolioGrid />
        <SuccessStories />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
