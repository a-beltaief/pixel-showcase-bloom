export const NewContact = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Zwei Wege. Null Risiko.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-xl p-8 border border-card-border text-center">
            <h3 className="text-xl font-bold mb-4 text-primary">Option 1: Klein starten</h3>
            <p className="text-foreground-muted mb-6">
              Basic-Paket für 50€/Monat. Kündbar jederzeit. Wenn's nicht passt, kündigen Sie halt. Kein Drama.
            </p>
            <a 
              href="#pricing"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors inline-block"
            >
              Pakete ansehen
            </a>
          </div>

          <div className="bg-card rounded-xl p-8 border border-card-border text-center">
            <h3 className="text-xl font-bold mb-4 text-primary">Option 2: Erst reden, dann entscheiden</h3>
            <p className="text-foreground-muted mb-6">
              15 Minuten WhatsApp-Call. Wir hören zu, schlagen vor, Sie entscheiden. Kein Sales-Pitch, nur ehrliche Beratung.
            </p>
            <div className="space-y-2">
              <a 
                href="https://wa.me/436704055549?text=Hi,%20ich%20interessiere%20mich%20für%20eine%20Website!"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors inline-block"
              >
                WhatsApp mit Haris
              </a>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 border border-card-border text-center">
          <h3 className="text-xl font-bold mb-4 text-primary">Die Wahrheit:</h3>
          <p className="text-foreground-muted leading-relaxed">
            Wir können uns aufdringliche Verkaufstaktiken nicht leisten. Wir brauchen zufriedene Kunden, 
            die uns weiterempfehlen. Deshalb sind wir lieber ehrlich als überzeugend.
          </p>
        </div>
      </div>
    </section>
  );
};