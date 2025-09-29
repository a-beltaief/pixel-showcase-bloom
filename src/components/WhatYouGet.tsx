import { Check } from "lucide-react";

export const WhatYouGet = () => {
  const features = [
    "Komplette Website in 14 Tagen",
    "100% Custom Code",
    "Mobile-optimiert",
    "SEO-ready",
    "30 Tage Support"
  ];

  return (
    <section className="py-24 px-6 bg-background-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-card rounded-2xl p-12 border border-card-border">
          <h2 className="text-3xl font-bold mb-8">Das bekommen Sie:</h2>
          
          <div className="space-y-4 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-3 text-lg">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <div className="text-4xl font-bold text-primary mb-2">Festpreis: 2.900€</div>
          </div>

          <a 
            href="https://wa.me/436704055549?text=Hi,%20ich%20möchte%20eine%20Website%20für%202.900€%20bestellen"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity inline-block"
          >
            Jetzt anfragen via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};