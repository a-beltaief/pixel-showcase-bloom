import { MessageCircle, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Bereit? In 14 Tagen sind Sie online.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-card rounded-xl p-8 border border-card-border">
            <h3 className="text-xl font-bold mb-4 text-primary">Schnellstart:</h3>
            <p className="text-foreground-muted mb-6">
              WhatsApp an Haris → Kurzes Gespräch → Start morgen
            </p>
            <a
              href="https://wa.me/436704055549?text=Hi%20Haris,%20ich%20möchte%20schnell%20starten!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: +43 670 405 5549
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