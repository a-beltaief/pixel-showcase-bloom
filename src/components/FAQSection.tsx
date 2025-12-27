import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      id: "cost",
      question: "Wie kann das günstiger sein als eine Agentur?",
      answer: "Wir nutzen KI-Tools und ein bewährtes Modulsystem. Weniger Stunden, gleiche Qualität."
    },
    {
      id: "needs", 
      question: "Was wenn ich nicht weiß, was ich brauche?",
      answer: "Dafür ist das Erstgespräch. Wir finden gemeinsam raus, welcher Prozess am meisten nervt – und starten dort."
    },
    {
      id: "features",
      question: "Kann ich später Features hinzufügen?", 
      answer: "Ja. Das System ist modular gebaut. Neue Funktionen werden einfach angedockt."
    },
    {
      id: "data",
      question: "Was passiert mit meinen Daten wenn ich kündige?",
      answer: "Deine Daten gehören dir. Vollständiger Export jederzeit möglich."
    },
    {
      id: "technical",
      question: "Brauche ich technisches Wissen?",
      answer: "Nein. Du nutzt die Software, wir kümmern uns um Technik, Hosting und Updates."
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
            Ehrliche Antworten auf deine wichtigsten Fragen
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
