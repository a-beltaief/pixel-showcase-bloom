export const FAQSection = () => {
  const faqs = [
    {
      question: "Studenten? Ist das seriös?",
      answer: "Ja. Wir sind an der JKU, nicht auf YouTube. Gewerbeschein vorhanden,... . Bonus: Als Studenten sind wir hungrig nach Erfolg, nicht satt und träge."
    },
    {
      question: "14 Tage klingt unrealistisch",
      answer: "Für eine Agentur mit 5 Meetings pro Woche? Ja. Für zwei fokussierte Entwickler ohne Bullshit? Easy. Wir diskutieren nicht 3 Wochen über Farben. Wir machen."
    },
    {
      question: "Was ist der Haken bei 50€/Monat?",
      answer: "Keiner. Wir zahlen keine Miete für ein Büro am Stephansplatz. Wir haben keine Sekretärin. Wir leasen keinen Firmenwagen. Diese Ersparnisse = Ihre Ersparnisse."
    },
    {
      question: "Und wenn ihr das Studium beendet?",
      answer: "Dann machen wir weiter. Nur ohne Studentenstatus. Ihre Website läuft weiter, Ihr Preis bleibt gleich. Versprochen und vertraglich garantiert."
    }
  ];

  return (
    <section className="py-16 px-6 bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Häufige Zweifel - ehrliche Antworten
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-card-border">
              <h3 className="text-lg font-bold mb-3 text-primary">"{faq.question}"</h3>
              <p className="text-foreground-muted leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};