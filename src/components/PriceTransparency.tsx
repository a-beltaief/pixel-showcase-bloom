export const PriceTransparency = () => {
  const agencyBreakdown = [
    { label: "30% geht an Investoren", amount: "2.400€" },
    { label: "25% Büro & Overhead", amount: "2.000€" },
    { label: "20% Management-Layer", amount: "1.600€" },
    { label: "15% Marketing & Sales", amount: "1.200€" },
    { label: "Nur 10% für Ihre Website", amount: "800€", highlight: true }
  ];

  const princebergBreakdown = [
    { label: "0% an Investoren (wir haben keine)", amount: "0€" },
    { label: "5% Overhead (WG statt Glaspalast)", amount: "25€" },
    { label: "0% Management (wir sind das Management)", amount: "0€" },
    { label: "2% Marketing (Mundpropaganda)", amount: "10€" },
    { label: "93% fließt direkt in Ihre Website", amount: "465€", highlight: true }
  ];

  return (
    <section className="py-16 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Die brutale Wahrheit über Agentur-Preise
          </h2>
          <p className="text-xl text-foreground-muted">
            Warum kostet eine Website normalerweise 8.000€?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-xl p-6 border border-card-border">
            <h3 className="text-xl font-bold mb-6 text-center">Traditionelle Agentur:</h3>
            <div className="space-y-3">
              {agencyBreakdown.map((item, index) => (
                <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${item.highlight ? 'bg-destructive/10 border border-destructive/20' : 'bg-background/50'}`}>
                  <span className={item.highlight ? 'font-semibold text-destructive' : 'text-foreground-muted'}>{item.label}</span>
                  <span className={`font-bold ${item.highlight ? 'text-destructive' : 'text-foreground'}`}>{item.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 border border-card-border">
            <h3 className="text-xl font-bold mb-6 text-center">Bei PRINCEBERG:</h3>
            <div className="space-y-3">
              {princebergBreakdown.map((item, index) => (
                <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${item.highlight ? 'bg-accent/10 border border-accent/20' : 'bg-background/50'}`}>
                  <span className={item.highlight ? 'font-semibold text-accent' : 'text-foreground-muted'}>{item.label}</span>
                  <span className={`font-bold ${item.highlight ? 'text-accent' : 'text-foreground'}`}>{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 border border-card-border text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">Resultat:</h3>
          <div className="space-y-2">
            <p className="text-lg"><strong>Gleiche Qualität.</strong> 70% weniger Kosten. 100% Transparenz.</p>
          </div>
        </div>
      </div>
    </section>
  );
};