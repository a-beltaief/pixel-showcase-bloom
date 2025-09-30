import { MessageCircle, Mail } from "lucide-react";
import sushiNight from "@/assets/sushi-night.png";

export const CTASection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Bereit? In 14 Tagen sind Sie online.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-card rounded-xl p-8 border border-card-border">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={sushiNight} 
                alt="Haris beim Sushi-Abend 2024" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-primary">Schnellstart:</h3>
                <p className="text-sm text-foreground-muted">Oder direkt via WhatsApp</p>
              </div>
            </div>
            <p className="text-foreground-muted mb-6">
              Für schnelle Fragen oder wenn Sie lieber direkt sprechen möchten:
            </p>
            <a
              href="https://wa.me/436704055549?text=Hi%20Haris,%20ich%20möchte%20schnell%20starten!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              +43 670 405 5549
            </a>
          </div>

          <div className="bg-card rounded-xl p-8 border border-card-border">
            <h3 className="text-xl font-bold mb-4 text-primary">Oder klassisch:</h3>
            <p className="text-foreground-muted mb-6">
              E-Mail für detaillierte Anfragen
            </p>
            <a
              href="mailto:info@princeberg.com"
              className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
              info@princeberg.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};