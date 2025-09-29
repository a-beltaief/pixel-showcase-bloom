export const WhatYouGet = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block text-gradient">Handwerk statt Massenware</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Das PRINCEBERG-Paket: Alles, was Sie für eine erfolgreiche Online-Präsenz brauchen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Features */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-8">Das PRINCEBERG-Paket:</h3>
            
            <div className="space-y-4">
              {[
                { 
                  icon: "⚡", 
                  title: "2-Wochen-Sprint", 
                  desc: "während Agenturen noch Angebote schreiben" 
                },
                { 
                  icon: "🔧", 
                  title: "100% Custom Code", 
                  desc: "keine Templates, keine Shortcuts" 
                },
                { 
                  icon: "📱", 
                  title: "Mobile-First Design", 
                  desc: "60% surfen am Handy – wir optimieren dafür" 
                },
                { 
                  icon: "🎯", 
                  title: "SEO von Tag 1", 
                  desc: "gefunden werden ist kein Zufall" 
                },
                { 
                  icon: "✍️", 
                  title: "Echte Texte", 
                  desc: "wir schreiben, was verkauft – keine KI-Floskeln" 
                },
                { 
                  icon: "🚀", 
                  title: "Performance-Obsession", 
                  desc: "Ladezeit unter 2 Sekunden, garantiert" 
                },
                { 
                  icon: "🔒", 
                  title: "DSGVO-konform", 
                  desc: "weil Abmahnungen teuer sind" 
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 portfolio-card p-6">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-accent text-lg">{item.title}</h4>
                    <p className="text-foreground-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Human Factor */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-8">Der menschliche Faktor:</h3>
            
            <div className="space-y-4">
              {[
                { 
                  icon: "💬", 
                  title: "WhatsApp-Support", 
                  desc: "schneller als jedes Ticket-System" 
                },
                { 
                  icon: "🎓", 
                  title: "Persönliche Einschulung", 
                  desc: "bis Sie alles verstehen" 
                },
                { 
                  icon: "🛡️", 
                  title: "30 Tage Nachbetreuung", 
                  desc: "weil Fragen immer erst später kommen" 
                },
                { 
                  icon: "💯", 
                  title: "Ehrliches Feedback", 
                  desc: "auch wenn's unbequem ist" 
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 portfolio-card p-6">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-accent text-lg">{item.title}</h4>
                    <p className="text-foreground-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="portfolio-card p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 text-center">
              <h3 className="text-4xl font-bold text-gradient mb-4">2.900€</h3>
              <p className="text-xl font-semibold text-foreground mb-2">all-inclusive</p>
              <p className="text-foreground-muted mb-4">
                Marktwert: <span className="line-through">8.000-12.000€</span>
              </p>
              
              <div className="bg-accent-muted p-4 rounded-xl">
                <p className="font-semibold text-accent">
                  Das ist weniger als ein Vollzeit-Entwickler für einen Monat kostet – 
                  aber Sie bekommen eine komplette Website für die Ewigkeit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block portfolio-card p-8 max-w-4xl">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Bereit für Ihre Website, die verkauft statt nur informiert?
            </h3>
            <p className="text-lg text-foreground-muted mb-8">
              Der erste Schritt ist einfach: Ein 5-Minuten-Gespräch, das alles verändert.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+436704055549"
                className="btn-hero"
              >
                📞 Haris anrufen: +43 670 405 5549
              </a>
              <a 
                href="tel:+436764002129"
                className="btn-hero"
              >
                📞 Abderrahmen anrufen: +43 676 400 2129
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};