import { Pizza, Wrench, Building2 } from "lucide-react";
import { useState } from "react";

const cases = [
  {
    icon: Pizza,
    branch: "Gastronomie",
    company: "Pizzeria-Kette in Wien",
    size: "3 Standorte, Lieferung + Abholung",
    headline: "Bestellchaos beseitigt",
    problem: "Bestellungen kamen über 4 Kanäle rein (Telefon, Website, Lieferando, vor Ort). Küche war im Chaos, Bestellungen gingen verloren.",
    solution: "Zentrales Order-Dashboard – alle Bestellungen auf einem Screen, automatische Priorisierung, Küchenmonitor.",
    results: [
      "90% weniger Fehler bei Bestellungen",
      "Durchschnittliche Zubereitungszeit -8 Minuten",
      "Lieferando-Bewertung von 4.1 auf 4.7"
    ],
    metric: "90% weniger Fehler",
    quote: "Die Küche ist ruhiger geworden. Weniger Stress, weniger Fehler."
  },
  {
    icon: Wrench,
    branch: "Handwerk",
    company: "Installateur-Betrieb aus der Steiermark",
    size: "Chef + 4 Techniker",
    headline: "Rechnungen automatisiert",
    problem: "Aufträge wurden auf Papier notiert, Rechnungen erst Wochen später geschrieben. Kein Überblick welcher Techniker wo ist.",
    solution: "Auftrags-App für Techniker + Büro-Dashboard. Auftrag abschließen → Rechnung automatisch generiert.",
    results: [
      "Rechnungen gehen noch am selben Tag raus",
      "2 Stunden Büroarbeit pro Tag eingespart",
      "Zahlungseingänge 40% schneller"
    ],
    metric: "40% schneller bezahlt",
    quote: "Früher hab ich Samstags Rechnungen geschrieben. Jetzt läuft das nebenbei."
  },
  {
    icon: Building2,
    branch: "Immobilien",
    company: "Hausverwaltung in Wien",
    size: "280 Einheiten, 3 Mitarbeiter",
    headline: "Mieterportal eingeführt",
    problem: "Mieteranfragen per Mail, Telefon und Zettel im Briefkasten. Nichts wurde dokumentiert, Reparaturen blieben liegen.",
    solution: "Mieter-Portal mit Ticket-System. Anfragen werden erfasst, priorisiert und nachverfolgt. Automatische Updates an Mieter.",
    results: [
      "Keine verlorenen Anfragen mehr",
      "Reaktionszeit von 5 Tagen auf 24 Stunden",
      "60% weniger Anrufe im Büro"
    ],
    metric: "60% weniger Anrufe",
    quote: "Die Mieter beschweren sich nicht mehr. Das allein ist es wert."
  }
];

export const CaseStudies = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Echte Ergebnisse</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Was unsere Kunden erreicht haben
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Anonymisierte Projekte aus verschiedenen Branchen – alle in unter 4 Wochen umgesetzt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon;
            const isExpanded = expandedIndex === index;
            
            return (
              <div 
                key={index}
                className={`bg-card rounded-xl border border-card-border p-6 cursor-pointer transition-all duration-300 flex flex-col ${
                  isExpanded ? 'ring-2 ring-primary shadow-lg' : 'hover:border-primary/50'
                }`}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary">{caseItem.branch}</span>
                    <h3 className="font-bold text-foreground">{caseItem.headline}</h3>
                  </div>
                </div>

                {/* Metric Badge */}
                <div className="bg-primary/10 text-primary font-bold text-lg py-2 px-4 rounded-lg text-center mb-4">
                  {caseItem.metric}
                </div>

                {/* Company Info - flex-grow to push expand indicator to bottom */}
                <div className="flex-grow">
                  <p className="text-sm text-foreground-muted mb-1">{caseItem.company}</p>
                  <p className="text-xs text-foreground-muted">{caseItem.size}</p>
                </div>

                {/* Expandable Content */}
                <div className={`transition-all duration-300 ${
                  isExpanded ? 'max-h-64 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <div className="pt-4 border-t border-card-border space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-foreground-muted uppercase mb-1">Problem</p>
                      <p className="text-sm text-foreground">{caseItem.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground-muted uppercase mb-1">Lösung</p>
                      <p className="text-sm text-foreground">{caseItem.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground-muted uppercase mb-1">Ergebnisse</p>
                      <ul className="text-sm text-foreground space-y-1">
                        {caseItem.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <blockquote className="text-sm italic text-foreground-muted border-l-2 border-primary pl-3">
                      "{caseItem.quote}"
                    </blockquote>
                  </div>
                </div>

                {/* Expand indicator */}
                <p className="text-xs text-primary mt-4 text-center">
                  {isExpanded ? 'Weniger anzeigen' : 'Details anzeigen'}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
