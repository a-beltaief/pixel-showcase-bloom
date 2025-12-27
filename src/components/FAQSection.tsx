import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      id: "speed",
      question: "Wie schafft ihr das in 4 Wochen, wofür Agenturen 6 Monate brauchen?",
      answer: "Wir kombinieren bewährte Kernmodule mit einem spezialisierten Entwickler-Netzwerk. Kein Agentur-Wasserkopf, kein unnötiger Overhead – ein Kernteam steuert, Experten liefern."
    },
    {
      id: "prototype",
      question: "Was genau bekomme ich nach 7 Tagen?",
      answer: "Einen funktionierenden Prototyp deiner Software, mit dem du arbeiten und Feedback geben kannst. So siehst du früh, ob die Richtung stimmt."
    },
    {
      id: "needs", 
      question: "Was wenn ich nicht weiß, was ich brauche?",
      answer: "Dafür ist das Erstgespräch. Wir finden gemeinsam raus, welcher Prozess am meisten nervt – und starten dort."
    },
    {
      id: "flex",
      question: "Was ist das Flex-Modell für Startups?",
      answer: "Du kannst die Setup-Kosten auf 6-12 Monate verteilen. So startest du sofort, ohne dein ganzes Budget auf einmal zu investieren."
    },
    {
      id: "features",
      question: "Kann ich später Features hinzufügen?", 
      answer: "Ja. Das System ist modular gebaut. Neue Funktionen werden einfach angedockt."
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
      </div>
    </section>
  );
};
