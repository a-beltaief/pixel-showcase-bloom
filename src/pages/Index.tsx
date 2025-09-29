import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Founders } from "@/components/Founders";
import { VideoSection } from "@/components/VideoSection";
import { WhyWeCalls } from "@/components/WhyWeCalls";
import { PricingTransparency } from "@/components/PricingTransparency";
import { SuccessStories } from "@/components/SuccessStories";
import { WhatYouGet } from "@/components/WhatYouGet";
import { ProcessSection } from "@/components/ProcessSection";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { CallToAction } from "@/components/CallToAction";
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
        <VideoSection />
        <WhyWeCalls />
        <PricingTransparency />
        <SuccessStories />
        <WhatYouGet />
        <ProcessSection />
        <PortfolioGrid />
        <CallToAction />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
