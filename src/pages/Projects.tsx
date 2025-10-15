import { Navigation } from "@/components/Navigation";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Footer } from "@/components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24">
        <PortfolioGrid />
      </div>
      <Footer />
    </div>
  );
}
