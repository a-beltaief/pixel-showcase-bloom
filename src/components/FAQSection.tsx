export const FAQSection = () => {
  const faqs = [
    {
      id: "cost",
      icon: "💰",
      question: "Wie kann das nur 50€/Monat kosten?",
      answer: "Unser selbst entwickeltes Framework automatisiert 70% der Arbeit. Wir haben keine Bürokosten (arbeiten von der WG), keine Investoren (die Rendite wollen) und kein aufgeblähtes Team. Diese Ersparnisse geben wir direkt an Sie weiter. Außerdem: Als Studenten-Spinoff sind unsere Lebenshaltungskosten niedriger als die einer 10-Mann-Agentur."
    },
    {
      id: "timeline",
      icon: "⏱️",
      question: "Ist die Website wirklich in 14 Tagen fertig?",
      answer: "Ja, garantiert. Unser Framework macht's möglich. Tag 1-2: Konzept, Tag 3-7: Design, Tag 8-13: Entwicklung, Tag 14: Launch. Wenn wir's nicht schaffen, ist der erste Monat kostenlos. Bisher haben wir's immer geschafft."
    },
    {
      id: "included",
      icon: "📱",
      question: "Was ist alles im Preis inklusive?",
      answer: "Alles. Hosting, Domain-Verwaltung, SSL-Zertifikat, E-Mail-Setup, DSGVO-konform, Cookie-Banner, Mobile-Optimierung, SEO-Grundlagen. Keine versteckten Kosten, keine Setup-Gebühren, keine Überraschungen."
    },
    {
      id: "students",
      icon: "🎓",
      question: "Seid ihr wirklich \"nur\" Studenten?",
      answer: "Ja, aber: Wir sind JKU-Studenten im Master AI, haben bereits 20+ Kunden seit Mai 2025, besitzen einen Gewerbeschein und stellen ordentliche Rechnungen aus. Das \"nur\" können Sie gerne streichen - wir liefern Agentur-Qualität zum Studenten-Preis."
    },
    {
      id: "future",
      icon: "🔄",
      question: "Was passiert nach dem Studium mit meiner Website?",
      answer: "Nichts ändert sich für Sie. Ihr Preis bleibt gleich (vertraglich garantiert), Ihre Website läuft weiter, wir bleiben Ihre Ansprechpartner. PRINCEBERG ist seit Mai 2025 ein eigenständiges Unternehmen - unabhängig von unserem Studium."
    },
    {
      id: "cancellation",
      icon: "🚫",
      question: "Kann ich monatlich kündigen?",
      answer: "Ja, jederzeit zum Monatsende. Keine Mindestlaufzeit, keine Kündigungsfrist. Eine WhatsApp-Nachricht reicht. Ihre Website bleibt online bis zum letzten bezahlten Tag. Danach können Sie die Files übernehmen oder zu einem anderen Hoster wechseln."
    },
    {
      id: "framework",
      icon: "🛠️",
      question: "Was ist dieses \"Framework\" genau?",
      answer: "Unser eigenes Code-System, entwickelt an der JKU. Stellen Sie sich LEGO-Bausteine für Websites vor: Vorgefertigte, getestete Module, die wir nur noch zusammensetzen und anpassen müssen. Deshalb sind wir so schnell ohne Qualitätsverlust."
    },
    {
      id: "technology",
      icon: "💻",
      question: "Welche Technologien verwendet ihr?",
      answer: "Modern und zukunftssicher: React/Next.js für's Frontend, Node.js im Backend, PostgreSQL als Datenbank. Alles hosted auf deutschen Servern (DSGVO). Aber das Schöne: Sie müssen sich darum nicht kümmern - läuft alles automatisch."
    },
    {
      id: "support",
      icon: "🤝",
      question: "Bekomme ich auch Support nach dem Launch?",
      answer: "Basic: E-Mail-Support in 24h. Premium: WhatsApp-Support in 2h. Enterprise: Priorität-Support in 30min. Kleine Änderungen (Texte, Bilder) sind immer inklusive. Größere Updates besprechen wir individuell."
    },
    {
      id: "investors",
      icon: "🏢",
      question: "Warum habt ihr keine Investoren?",
      answer: "Bewusste Entscheidung. Investoren wollen 30% Rendite - das müssten Sie bezahlen. Wir bleiben lieber unabhängig, behalten die Kontrolle und können faire Preise anbieten. Win-Win für alle (außer für Investoren)."
    },
    {
      id: "consultation",
      icon: "📞",
      question: "Wie läuft das Erstgespräch ab?",
      answer: "15 Minuten WhatsApp-Call oder Zoom. Wir hören zu, stellen 3-4 Fragen, schlagen ein Paket vor. Kein Verkaufsdruck, keine PowerPoint-Schlacht. Passt es? Super, wir starten morgen. Passt es nicht? Auch ok, vielleicht später."
    },
    {
      id: "guarantee",
      icon: "✅",
      question: "Gibt es eine Geld-zurück-Garantie?",
      answer: "Ja. Wenn Sie nach dem ersten Entwurf (Tag 7) nicht zufrieden sind, stoppen wir das Projekt und Sie zahlen nichts. Nach dem Launch gilt: 30 Tage Zufriedenheitsgarantie auf die Funktionalität."
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-foreground-muted">
            Ehrliche Antworten auf Ihre wichtigsten Fragen
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.id} className="bg-card rounded-xl border border-card-border overflow-hidden">
              <summary className="p-6 cursor-pointer hover:bg-accent transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{faq.icon}</span>
                  <span className="font-semibold text-lg">{faq.question}</span>
                </div>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-foreground-muted leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-card rounded-xl border border-card-border">
          <h3 className="text-xl font-bold mb-4 text-primary">Noch Fragen?</h3>
          <p className="text-foreground-muted mb-4">
            WhatsApp an Haris für direkte Antworten:
          </p>
          <a
            href="https://wa.me/436704055549?text=Hi%20Haris,%20ich%20habe%20noch%20eine%20Frage!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors"
          >
            +43 670 405 5549
          </a>
        </div>
      </div>
    </section>
  );
};