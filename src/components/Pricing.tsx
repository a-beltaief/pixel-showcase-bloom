import { Check } from "lucide-react";

export const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      price: "ab 300€",
      period: "pro Monat",
      setup: "2.500€ einmalig",
      description: "Kleine Unternehmen mit 1-2 Kernprozessen",
      features: [
        "1-2 Module (z.B. Kundenverwaltung, Terminbuchung)",
        "Hosting & Updates inkl.",
        "DSGVO-konform",
        "Monatliche Anpassungen inkl."
      ],
      cta: "Starter wählen",
      popular: false
    },
    {
      name: "Business",
      price: "ab 500€",
      period: "pro Monat",
      setup: "4.000€ einmalig",
      description: "Wachsende Unternehmen mit komplexeren Abläufen",
      features: [
        "Alles aus Starter +",
        "Vollständiges System mit mehreren Modulen",
        "KI-gestützte Automatisierung (Claude, GPT, Gemini)",
        "Analytics Dashboard"
      ],
      cta: "Business wählen",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Individuell",
      period: "Angebot",
      setup: "Nach Aufwand",
      description: "Größere Projekte mit Integrationen",
      features: [
        "Alles aus Business +",
        "Unbegrenzte Module + API-Anbindungen",
        "Dedicated Account Manager",
        "SLA-Garantie",
        "Custom Integrationen"
      ],
      cta: "Enterprise anfragen",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pakete
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Transparent, fair und ohne versteckte Kosten
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-xl p-6 border border-card-border relative ${
                pkg.popular ? 'border-primary shadow-lg' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Beliebt
                  </span>
                </div>
              )}
              
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-primary mb-2">{pkg.name}</h3>
                <div className="mb-2">
                  <span className="text-2xl font-bold">{pkg.price}</span>
                  <span className="text-foreground-muted ml-1 text-sm">{pkg.period}</span>
                </div>
                <div className="text-sm text-foreground-muted mb-2">
                  Setup: {pkg.setup}
                </div>
                <p className="text-foreground-muted text-sm">{pkg.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="/termine?service=kostenlose-erstberatung"
                className={`w-full py-3 rounded-lg font-semibold transition-colors text-center block ${
                  pkg.popular 
                    ? 'bg-primary text-primary-foreground hover:bg-primary-hover' 
                    : 'bg-card-secondary text-foreground border border-card-border hover:bg-accent'
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Flex Paket */}
        <div className="mt-8 flex justify-center">
          <div className="bg-card rounded-xl p-6 border border-primary/30 relative max-w-md w-full">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                Für Gründer
              </span>
            </div>
            
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-primary mb-2">Flex</h3>
              <p className="text-foreground-muted text-sm">Für Startups & Gründer</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-foreground-secondary">Starter oder Business Paket</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-foreground-secondary">Setup auf 6-12 Monate verteilt</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-foreground-secondary">Individuelle Zahlungsziele</span>
              </div>
            </div>

            <a 
              href="/termine?service=kostenlose-erstberatung"
              className="w-full py-3 rounded-lg font-semibold transition-colors text-center block bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
            >
              Flex anfragen
            </a>
          </div>
        </div>

        {/* Support Hinweis */}
        <div className="mt-8 text-center">
          <p className="text-foreground-muted">
            <span className="font-semibold text-foreground">Support für alle inkludiert</span> – Egal welches Paket, du erreichst uns per Mail, WhatsApp oder Call.
          </p>
        </div>

        <div className="text-center mt-8 space-y-4">
          <p className="text-foreground-muted">
            Alle Preise inkl. Hosting, Updates und DSGVO-Compliance
          </p>
          <p className="text-foreground-muted text-sm">
            ✓ Keine versteckten Kosten ✓ Nach 12 Monaten monatlich kündbar
          </p>
        </div>
      </div>
    </section>
  );
};
