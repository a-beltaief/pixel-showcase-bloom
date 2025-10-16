import { Check, MessageCircle, Mail } from "lucide-react";

export const Pricing = () => {
  const packages = [
    {
      name: "Basic Website",
      price: "50€",
      period: "pro Monat",
      description: "Perfekt für kleine Unternehmen",
      features: [
        "5 Seiten inklusive",
        "Responsive Design (Mobile & Desktop)",
        "SEO-Grundoptimierung",
        "SSL-Zertifikat inklusive",
        "DSGVO-konform",
        "Hosting inklusive",
        "E-Mail-Support"
      ],
      cta: "Basic wählen",
      popular: false
    },
    {
      name: "Plus Website",
      price: "80€",
      period: "pro Monat",
      description: "Für wachsende Unternehmen",
      features: [
        "10 Seiten inklusive",
        "Alles aus Basic +",
        "API-Integration",
        "Datenbank-Anbindung",
        "Analytics Dashboard",
        "WhatsApp-Support",
        "Monatlich 2h Änderungen"
      ],
      cta: "Plus wählen",
      popular: true
    },
    {
      name: "Premium Website",
      price: "Individual",
      period: "Angebot",
      description: "Für komplexe Projekte",
      features: [
        "Unbegrenzte Seiten",
        "Alles aus Plus +",
        "Custom Development",
        "API-Entwicklung",
        "Prioritäts-Support",
        "Dedicated Account Manager",
        "SLA-Garantie"
      ],
      cta: "Premium wählen",
      popular: false
    }
  ];

  return (
    <section className="py-16 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pakete
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Transparent, fair und ohne versteckte Kosten
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-xl p-8 border border-card-border relative ${
                pkg.popular ? 'border-primary shadow-lg' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Beliebt
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">{pkg.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-foreground-muted ml-1">{pkg.period}</span>
                </div>
                <p className="text-foreground-muted text-sm">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm text-foreground-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              {index === 0 ? (
                <a 
                  href="https://buy.stripe.com/28E9AN7CUeaNcZb3I7d3i00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-lg font-semibold transition-colors text-center block ${
                    pkg.popular 
                      ? 'bg-primary text-primary-foreground hover:bg-primary-hover' 
                      : 'bg-card-secondary text-foreground border border-card-border hover:bg-accent'
                  }`}
                >
                  {pkg.cta}
                </a>
              ) : index === 1 ? (
                <a 
                  href="https://buy.stripe.com/cNi00dg9q0jXbV77Ynd3i01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-lg font-semibold transition-colors text-center block ${
                    pkg.popular 
                      ? 'bg-primary text-primary-foreground hover:bg-primary-hover' 
                      : 'bg-card-secondary text-foreground border border-card-border hover:bg-accent'
                  }`}
                >
                  {pkg.cta}
                </a>
              ) : (
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular 
                      ? 'bg-primary text-primary-foreground hover:bg-primary-hover' 
                      : 'bg-card-secondary text-foreground border border-card-border hover:bg-accent'
                  }`}
                >
                  {pkg.cta}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-foreground-muted">
            Alle Preise inkl. Hosting, SSL-Zertifikat und DSGVO-Compliance
          </p>
          <p className="text-foreground-muted text-sm">
            ✓ Monatlich kündbar ✓ Keine Setup-Kosten ✓ 30 Tage Geld-zurück-Garantie
          </p>
        </div>
      </div>
    </section>
  );
};