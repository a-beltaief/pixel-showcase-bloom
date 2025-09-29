export const SuccessStories = () => {
  return (
    <section className="py-24 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block text-foreground-muted font-light">Echte Unternehmer.</span>
            <span className="block text-gradient">Echte Resultate. Echte Begeisterung.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Success Story 1 */}
          <div className="portfolio-card p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-2">
                Die Boutique, die plötzlich österreichweit verkauft
              </h3>
              <div className="flex items-center text-sm text-foreground-muted mb-4">
                <span className="font-semibold">Maria Schneider</span>
                <span className="mx-2">•</span>
                <span>Boutique Eleganz, Wien</span>
              </div>
            </div>
            
            <blockquote className="text-lg italic text-foreground-muted leading-relaxed">
              "Zwei Studenten? Ich war skeptisch. Aber nach unserem ersten Telefonat wusste ich: 
              Die verstehen mein Business besser als ich selbst. 4 Monate später: +450% Online-Umsatz. 
              Die Jungs sind Gold wert!"
            </blockquote>
            
            <div className="bg-accent-muted p-4 rounded-xl">
              <p className="font-semibold text-accent">
                🚀 Von 3 Online-Bestellungen/Woche auf 15/Tag
              </p>
            </div>
          </div>

          {/* Success Story 2 */}
          <div className="portfolio-card p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-2">
                Das Startup, das die Series-A bekommen hat
              </h3>
              <div className="flex items-center text-sm text-foreground-muted mb-4">
                <span className="font-semibold">Thomas Mayr</span>
                <span className="mx-2">•</span>
                <span>TechFlow Solutions</span>
              </div>
            </div>
            
            <blockquote className="text-lg italic text-foreground-muted leading-relaxed">
              "Unsere alte Website hat Investoren abgeschreckt. Haris und Abderrahmen haben in 3 Wochen 
              etwas gebaut, das aussieht wie ein Million-Euro-Projekt. Die VCs waren beeindruckt. 
              1,2 Mio Funding. Danke, Jungs!"
            </blockquote>
            
            <div className="bg-accent-muted p-4 rounded-xl">
              <p className="font-semibold text-accent">
                💰 Website als entscheidender Faktor beim Funding
              </p>
            </div>
          </div>

          {/* Success Story 3 */}
          <div className="portfolio-card p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-2">
                Der Handwerker, der jetzt Aufträge ablehnt
              </h3>
              <div className="flex items-center text-sm text-foreground-muted mb-4">
                <span className="font-semibold">Robert Huber</span>
                <span className="mx-2">•</span>
                <span>Huber Holzbau, Linz</span>
              </div>
            </div>
            
            <blockquote className="text-lg italic text-foreground-muted leading-relaxed">
              "Ich dachte, Websites sind für Konzerne. Die Jungs haben mir gezeigt: Eine gute Website 
              ist wie ein Mitarbeiter, der nie schläft. Jetzt muss ich Kunden auf Wartelisten setzen."
            </blockquote>
            
            <div className="bg-accent-muted p-4 rounded-xl">
              <p className="font-semibold text-accent">
                📈 Von Google-Seite 5 auf Position 1 in 3 Monaten
              </p>
            </div>
          </div>

          {/* Success Story 4 */}
          <div className="portfolio-card p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-2">
                Die Anwaltskanzlei, die modern wurde
              </h3>
              <div className="flex items-center text-sm text-foreground-muted mb-4">
                <span className="font-semibold">Dr. Sarah Wagner</span>
                <span className="mx-2">•</span>
                <span>Wagner & Partner Rechtsanwälte</span>
              </div>
            </div>
            
            <blockquote className="text-lg italic text-foreground-muted leading-relaxed">
              "Unsere alte Website war von 2008. Peinlich. Abderrahmen hat nicht nur eine neue Website 
              gebaut – er hat unsere komplette digitale Strategie revolutioniert. Mandanten-Anfragen: +200%"
            </blockquote>
            
            <div className="bg-accent-muted p-4 rounded-xl">
              <p className="font-semibold text-accent">
                ⚖️ Vom digitalen Dinosaurier zum Innovation Leader
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-block portfolio-card p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Möchten Sie die nächste Success Story werden?
            </h3>
            <p className="text-lg text-foreground-muted mb-6">
              Lassen Sie uns in einem 5-Minuten-Gespräch herausfinden, 
              wie wir Ihr Business transformieren können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/436704055549?text=Hi%20Haris,%20ich%20möchte%20die%20nächste%20Success%20Story%20werden!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero"
              >
                Mit Haris sprechen
              </a>
              <a 
                href="https://wa.me/436764002129?text=Hi%20Abderrahmen,%20ich%20möchte%20die%20nächste%20Success%20Story%20werden!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Mit Abderrahmen sprechen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};