import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <Hero />
        <PortfolioGrid />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
