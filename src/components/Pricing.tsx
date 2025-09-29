import { Check, MessageCircle, Mail } from "lucide-react";

export const Pricing = () => {
  const packages = [
    {
      name: "BASIC",
      price: "50€/Monat",
      features: [
        "5 Seiten",
        "Mobile + SSL"
      ],
      ctaText: "Jetzt starten",
      ctaLink: "https://wa.me/436704055549?text=Hi,%20ich%20interessiere%20mich%20für%20das%20Basic-Paket!"
    },
    {
      name: "PREMIUM",
      price: "80€/Monat",
      features: [
        "10 Seiten",
        "+ API/Datenbank"
      ],
      popular: true,
      ctaText: "Jetzt starten",
      ctaLink: "https://wa.me/436704055549?text=Hi,%20ich%20interessiere%20mich%20für%20das%20Premium-Paket!"
    },
    {
      name: "ENTERPRISE",
      price: "Individuell",
      features: [
        "Unbegrenzt",
        "Alles möglich"
      ],
      ctaText: "Kontakt",
      ctaLink: "mailto:haris@princeberg.com?subject=Enterprise%20Anfrage"
    }
  ];

  return (
    <section id="pricing" className="py-16 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pakete
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-xl p-6 border relative ${
                pkg.popular 
                  ? 'border-primary ring-2 ring-primary/20' 
                  : 'border-card-border'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Beliebt
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-foreground">{pkg.price}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-foreground text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={pkg.ctaLink}
                  target={pkg.ctaLink.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={pkg.ctaLink.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    pkg.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary-hover'
                      : 'border border-primary text-primary hover:bg-primary/10'
                  }`}
                >
                  {pkg.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-foreground-muted">
          <p>*Alle Preise inkl. Hosting. Monatlich kündbar.</p>
        </div>
      </div>
    </section>
  );
};