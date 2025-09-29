import { Check } from "lucide-react";

export const StorySection = () => {
  const advantages = [
    {
      title: "Bewährte Basis-Architektur",
      description: "Wir erfinden das Rad nicht jedes Mal neu. Unsere erprobten Code-Module sind wie LEGO-Bausteine – robust, getestet, sofort einsetzbar."
    },
    {
      title: "Keine Meeting-Marathons", 
      description: "Während Agenturen 40% der Zeit in Meetings verschwenden, coden wir. Ein Gespräch am Anfang, Updates via WhatsApp, fertig."
    },
    {
      title: "Zwei Experten statt zehn Mitläufer",
      description: "Kein Project Manager, der nicht codet. Kein Account Manager, der Mails weiterleitet. Kein Junior, der lernt. Nur Haris und Abderrahmen – direkt, kompetent, effizient."
    },
    {
      title: "Studenten-Vorteil nutzen",
      description: "Zugang zu JKU-Ressourcen, neueste Technologien, keine Betriebskosten. Diese Ersparnisse geben wir 1:1 an Sie weiter."
    }
  ];

  return (
    <section id="story" className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Warum Qualität UND Schnelligkeit bei uns funktioniert
          </h2>
          <p className="text-xl text-foreground-muted mb-8">
            "Schnell und gut geht nicht zusammen?" Doch, wenn man es richtig macht.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Unsere Unabhängigkeit ist Ihr Vorteil
          </h3>
          <div className="bg-card rounded-xl p-8 border border-card-border">
            <p className="text-lg mb-4 font-semibold text-primary">
              Keine Investoren. Keine Kompromisse. Nur Sie im Fokus.
            </p>
            <p className="text-foreground mb-4">
              Während Agenturen ihren Investoren 30% Rendite schulden, schulden wir nur Ihnen eine perfekte Website. 
              Kein Druck, die Preise hochzutreiben. Keine künstlichen Verzögerungen für höhere Stundensätze. 
              Keine aufgeblähten Teams, die bezahlt werden müssen.
            </p>
            <p className="text-foreground font-medium">
              Wir antworten nur Ihnen – nicht einem Board of Directors.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Das Geheimnis: Solides Fundament statt Luftschlösser
          </h3>
          <p className="text-lg text-center text-foreground-muted mb-8">
            Warum wir in 14 Tagen schaffen, wofür andere 8 Wochen brauchen:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-card-border">
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{advantage.title}</h4>
                    <p className="text-foreground-muted">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};