import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Kontakt</h1>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Pakete & Beratung */}
            <div className="bg-card rounded-xl p-6 border border-card-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Pakete & Beratung</h3>
              <p className="text-sm text-foreground-muted mb-4">WhatsApp (bevorzugt)</p>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/436704055549?text=Hi%20Haris,%20ich%20interessiere%20mich%20für%20eine%20Website!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary hover:underline"
                >
                  Haris: +43 670 405 5549
                </a>
                <a 
                  href="https://wa.me/436764002129?text=Hi%20Abderrahmen,%20ich%20interessiere%20mich%20für%20eine%20Website!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary hover:underline"
                >
                  Abderrahmen: +43 676 400 2129
                </a>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-card rounded-xl p-6 border border-card-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Enterprise-Anfragen</h3>
              <p className="text-sm text-foreground-muted mb-4">Haris Muranovic (Developer)</p>
              <div className="space-y-3">
                <a 
                  href="mailto:haris@princeberg.com"
                  className="block text-primary hover:underline"
                >
                  📧 haris@princeberg.com
                </a>
                <a 
                  href="https://wa.me/436704055549?text=Hi%20Haris,%20ich%20habe%20eine%20Enterprise-Anfrage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary hover:underline"
                >
                  📱 +43 670 405 5549
                </a>
              </div>
            </div>
          </div>

          {/* Allgemein */}
          <div className="mt-8 text-center text-foreground-muted">
            <p className="text-sm">Allgemein:</p>
            <a 
              href="mailto:info@princeberg.com"
              className="text-primary hover:underline"
            >
              info@princeberg.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
