export const ProcessSection = () => {
  const features = [
    {
      title: "Vorgefertigte Module",
      description: "Bewährte Komponenten, sofort einsetzbar"
    },
    {
      title: "Automatisierte Prozesse", 
      description: "Was sonst Tage dauert, läuft in Stunden"
    },
    {
      title: "Direkte Umsetzung",
      description: "Keine Meetings, keine Warteschleifen"
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Das Framework
          </h2>
          <h3 className="text-2xl text-foreground-muted mb-8">
            Warum 14 Tage reichen
          </h3>
          <p className="text-lg text-foreground-muted">
            Unser selbst entwickeltes Framework macht's möglich:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-card-border text-center">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-xl">✓</span>
              </div>
              <h4 className="font-bold text-primary mb-2">{feature.title}</h4>
              <p className="text-foreground-muted text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl p-8 border border-card-border text-center">
          <p className="text-xl font-semibold text-primary">
            Resultat: Höchste Qualität in Rekordzeit.
          </p>
        </div>
      </div>
    </section>
  );
};