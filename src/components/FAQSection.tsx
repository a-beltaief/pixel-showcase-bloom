import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      id: "cost",
      question: "Wie kann das nur 50€/Monat kosten?",
      answer: "Unser selbst entwickeltes System automatisiert 70% der Arbeit. Wir haben keine Bürokosten (arbeiten von der WG), keine Investoren (die Rendite wollen) und kein aufgeblähtes Team. Diese Ersparnisse geben wir direkt an Sie weiter."
    },
    {
      id: "timeline", 
      question: "Ist die Website wirklich in 14 Tagen fertig?",
      answer: "Ja, garantiert. Unser System macht's möglich. Tag 1-2: Konzept, Tag 3-7: Design, Tag 8-13: Entwicklung, Tag 14: Launch. Wenn wir's nicht schaffen, ist der erste Monat kostenlos."
    },
    {
      id: "included",
      question: "Was ist alles im Preis inklusive?", 
      answer: "Alles. Hosting, Domain-Verwaltung, SSL-Zertifikat, E-Mail-Setup, DSGVO-konform, Cookie-Banner, Mobile-Optimierung, SEO-Grundlagen. Keine versteckten Kosten, keine Setup-Gebühren."
    },
    {
      id: "system",
      question: "Was ist dieses System genau?",
      answer: "Unser eigenes Entwicklungs-System, entstanden aus jahrelanger Forschung im Uni-Projekt. Getestete Premium-Module, die wir individuell für Sie zusammensetzen. Das Ergebnis: Maßgeschneiderte Qualität in 14 Tagen statt 8 Wochen - ohne Abstriche, nur ohne Zeitverschwendung."
    },
    {
      id: "cancellation",
      question: "Kann ich monatlich kündigen?",
      answer: "Ja, jederzeit zum Monatsende. Keine Mindestlaufzeit, keine Kündigungsfrist. Eine WhatsApp-Nachricht reicht. Ihre Website bleibt online bis zum letzten bezahlten Tag."
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-muted-foreground">
            Ehrliche Antworten auf Ihre wichtigsten Fragen
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="bg-card rounded-lg border border-border px-6"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12 p-6 bg-card rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4 text-primary">Noch Fragen?</h3>
          <p className="text-muted-foreground mb-4">
            WhatsApp an Haris für direkte Antworten:
          </p>
          <a
            href="https://wa.me/436704055549?text=Hi%20Haris,%20ich%20habe%20noch%20eine%20Frage!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            +43 670 405 5549
          </a>
        </div>
      </div>
    </section>
  );
};