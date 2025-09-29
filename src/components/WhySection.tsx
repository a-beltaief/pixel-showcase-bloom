export const WhySection = () => {
  const facts = [
    {
      number: "1",
      title: "Unabhängig",
      description: "Keine Investoren = Keine überhöhten Preise"
    },
    {
      number: "2", 
      title: "Bewährt",
      description: "Framework seit Mai 2025 im Einsatz, bereits 20+ zufriedene Kunden"
    },
    {
      number: "3",
      title: "Transparent", 
      description: "50€ bedeutet 50€. Keine Überraschungen."
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Warum PRINCEBERG?
          </h2>
          <h3 className="text-xl text-foreground-muted">
            Drei Fakten, die überzeugen
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-card-border text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                {fact.number}
              </div>
              <h4 className="text-lg font-bold text-primary mb-3">{fact.title}</h4>
              <p className="text-foreground-muted leading-relaxed">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};