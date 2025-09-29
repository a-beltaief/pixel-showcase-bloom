export const PricingTransparency = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block text-foreground-muted font-light">Die brutale Ehrlichkeit</span>
            <span className="block text-gradient">über unsere Preise</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <blockquote className="text-xl md:text-2xl font-bold text-foreground italic border-l-4 border-accent pl-6">
              "Moment – ihr seid Studenten. Warum macht ihr das nicht kostenlos für die Erfahrung?"
            </blockquote>
            
            <div className="space-y-4">
              <p className="text-lg font-semibold text-accent">
                Gute Frage. Hier die ungeschönte Wahrheit aus unserem WG-Zimmer in der Wambachgasse 16:
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="portfolio-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Die harten Fakten:</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-foreground-muted">Server & Hosting:</span>
                  <span className="font-bold text-accent">400€/Monat</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-foreground-muted">Premium-Tools & Lizenzen:</span>
                  <span className="font-bold text-accent">600€/Monat</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-foreground-muted">Unsere Miete:</span>
                  <span className="font-bold text-accent">1.400€/Monat</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-foreground-muted">Ramen-Nudeln:</span>
                  <span className="font-bold text-accent">200€/Monat</span>
                </li>
              </ul>
              <p className="text-sm text-foreground-muted mt-4 italic">
                (Wien ist teuer, auch im 13. | Entwickler müssen essen)
              </p>
            </div>

            <div className="portfolio-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Die weichen Faktoren:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-3">💪</span>
                  70+ Stunden/Woche während andere Netflix schauen
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">🎓</span>
                  Jedes Projekt ist eine Masterclass in Digital Business
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">❌</span>
                  Kostenlos = "Egal wenn's nicht klappt" (haben wir getestet)
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">🔥</span>
                  Ihr Investment macht uns hungrig nach Ihrem Erfolg
                </li>
              </ul>
            </div>

            <div className="portfolio-card p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <h3 className="text-2xl font-bold text-gradient mb-4">Unser Deal:</h3>
              <div className="text-lg space-y-2">
                <p>
                  Sie zahlen <strong className="text-accent">70% weniger</strong> als bei Agenturen.
                </p>
                <p>
                  Wir geben <strong className="text-accent">200% mehr</strong> Einsatz.
                </p>
                <p className="text-xl font-bold text-gradient">Win-Win.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};