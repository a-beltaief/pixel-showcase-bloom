export const PhilosophySection = () => {
  const promises = [
    {
      title: "Qualität ohne Wenn und Aber",
      description: '"Billig" heißt bei uns nicht "schlecht". Wir sparen an Büros, nicht an Code-Qualität. Jede Zeile wird zweimal geprüft. Jedes Design durchläuft drei Iterationen. Keine Kompromisse.'
    },
    {
      title: "Geschwindigkeit ohne Hektik", 
      description: "14 Tage sind genug, wenn man weiß was man tut. Kein Rumexperimentieren. Keine endlosen Abstimmungsschleifen. Klare Prozesse, bewährte Methoden, volle Konzentration."
    },
    {
      title: "Fairness ohne Kleingedrucktes",
      description: "50€ im Monat. Punkt. Keine Setup-Gebühren. Keine versteckten Kosten. Keine Preiserhöhungen nach 3 Monaten. Was draufsteht, ist drin."
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Unsere drei Versprechen
          </h2>
        </div>

        <div className="space-y-8">
          {promises.map((promise, index) => (
            <div key={index} className="bg-card rounded-xl p-8 border border-card-border">
              <div className="flex items-start gap-6">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">{promise.title}</h3>
                  <p className="text-foreground-muted text-lg leading-relaxed">{promise.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};