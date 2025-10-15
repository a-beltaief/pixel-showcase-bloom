import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import sushiNight from "@/assets/sushi-night-2.png";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Über uns</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Image */}
            <div className="order-2 md:order-1">
              <img 
                src={sushiNight} 
                alt="Sushi Night - 2024" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            
            {/* Text */}
            <div className="order-1 md:order-2">
            <p className="text-lg md:text-xl leading-relaxed text-foreground-muted">
              Wir sind <span className="font-bold text-foreground">PRINCEBERG</span>, ein Universitätsprojekt aus Wien, 
              das professionelle Webentwicklung zugänglich macht. Unser revolutionäres Website-System setzt neue 
              Maßstäbe – Premium-Websites in 14 Tagen zu einem Bruchteil der üblichen Kosten.
            </p>
            </div>
            
          </div>

          {/* Image Carousels Placeholder */}
          <div className="space-y-8">
            <div className="bg-card border border-card-border rounded-xl p-8 text-center">
              <p className="text-foreground-muted">
                📸 Bitte laden Sie die Bilder für das Karussell hoch. 
                Die erste Zeile wird nach rechts rotieren, die zweite nach links.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
