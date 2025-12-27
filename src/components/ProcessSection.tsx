import { Check, Blocks, Users, Settings } from "lucide-react";

export const ProcessSection = () => {
  const features = [
    {
      icon: Blocks,
      title: "Modulare Architektur",
      description: "Bewährte Kernmodule (Login, Dashboard, Datenbank) – sofort einsatzbereit, individuell anpassbar."
    },
    {
      icon: Users,
      title: "Lean & Effizient",
      description: "Kein Agentur-Wasserkopf. Ein Kernteam steuert, spezialisierte Entwickler liefern."
    },
    {
      icon: Settings,
      title: "Deine Logik, dein System",
      description: "Keine Kompromisse mit Standard-Software. Wir bilden DEINE Prozesse ab, nicht umgekehrt."
    }
  ];

  return (
    <section id="system" className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Das PRINCEBERG-System
          </h2>
          <h3 className="text-xl text-foreground-muted mb-4">
            Warum wir in 4 Wochen schaffen, wofür Agenturen 6 Monate brauchen
          </h3>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Unser System kombiniert bewährte Bausteine mit einem spezialisierten Entwickler-Netzwerk:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-card-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-3">{feature.title}</h4>
              <p className="text-foreground-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-primary">
            Individualsoftware in Rekordzeit. Zum fairen Preis.
          </p>
        </div>
      </div>
    </section>
  );
};
