import { Check, MessageCircle, Mail } from "lucide-react";

export const Pricing = () => {
  const packages = [
    {
      name: "BASIC",
      price: "50€",
      period: "/Monat",
      features: [
        "Bis zu 5 Seiten",
        "Mobile-optimiert",
        "SSL-Zertifikat",
        "Hosting inklusive",
        "E-Mail Support"
      ],
      cta: "Paket wählen",
      href: "https://wa.me/436704055549?text=Hi,%20ich%20interessiere%20mich%20für%20das%20Basic%20Paket%20(50€/Monat)"
    },
    {
      name: "PREMIUM",
      price: "80€",
      period: "/Monat",
      features: [
        "Alles aus Basic",
        "Bis zu 10 Seiten",
        "API-Anbindungen",
        "Datenbank-Integration",
        "WhatsApp-Support",
        "Monatliche Updates"
      ],
      cta: "Paket wählen",
      href: "https://wa.me/436704055549?text=Hi,%20ich%20interessiere%20mich%20für%20das%20Premium%20Paket%20(80€/Monat)",
      popular: true
    },
    {
      name: "ENTERPRISE",
      price: "Individuell",
      period: "",
      features: [
        "Unbegrenzte Seiten",
        "Custom-Lösungen",
        "Prioritäts-Support",
        "Dedizierte Betreuung"
      ],
      cta: "Let's Talk →",
      href: "mailto:haris@princeberg.com?subject=Enterprise%20Anfrage"
    }
  ];

  return (
    <section id="pricing" className="py-16 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Unsere Pakete</h2>
          <p className="text-lg text-foreground-muted">Monatlich kündbar • In 14 Tagen online</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-2xl p-8 border ${
                pkg.popular ? 'border-primary ring-2 ring-primary/20' : 'border-card-border'
              } relative`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Beliebt
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-foreground-muted">{pkg.period}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={pkg.href}
                target={pkg.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors block ${
                  pkg.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary-hover'
                    : 'border border-primary text-primary hover:bg-primary/10'
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center text-foreground-muted">
          <p className="mb-4">Alle Pakete inklusive Hosting, SSL, Support</p>
          
          <div className="bg-card rounded-xl p-6 border border-card-border max-w-md mx-auto">
            <h4 className="font-semibold mb-3">Kontakt für Enterprise:</h4>
            <div className="space-y-2">
              <p className="font-medium">Haris Muranovic (Developer)</p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <a 
                  href="mailto:haris@princeberg.com" 
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  haris@princeberg.com
                </a>
                <a 
                  href="https://wa.me/436704055549?text=Hi%20Haris,%20ich%20habe%20eine%20Enterprise-Anfrage" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  +43 670 405 5549
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};