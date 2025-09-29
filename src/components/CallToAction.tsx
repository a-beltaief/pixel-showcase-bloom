export const CallToAction = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block text-gradient">Drei Wege zu Ihrer neuen Website</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Option 1: WhatsApp */}
          <div className="portfolio-card p-8 text-center space-y-6">
            <div className="text-6xl">📱</div>
            <h3 className="text-2xl font-bold text-foreground">Option 1: Der WhatsApp-Weg</h3>
            <p className="text-foreground-muted">
              Schreiben Sie uns direkt. Wir antworten innerhalb von 2 Stunden.
            </p>
            
            <div className="space-y-4">
              <a 
                href="https://wa.me/436704055549?text=Hi%20Haris,%20ich%20brauche%20eine%20Website!"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
              >
                → Haris auf WhatsApp
              </a>
              <a 
                href="https://wa.me/436764002129?text=Hi%20Abderrahmen,%20ich%20brauche%20eine%20Website!"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
              >
                → Abderrahmen auf WhatsApp
              </a>
            </div>
          </div>

          {/* Option 2: Call */}
          <div className="portfolio-card p-8 text-center space-y-6">
            <div className="text-6xl">📞</div>
            <h3 className="text-2xl font-bold text-foreground">Option 2: Der Anruf</h3>
            <p className="text-foreground-muted">
              Oldschool aber effektiv. 5 Minuten, die alles ändern.
            </p>
            
            <div className="space-y-4">
              <div className="portfolio-card p-4 bg-accent-muted">
                <p className="font-bold text-foreground mb-2">Haris:</p>
                <a 
                  href="tel:+436704055549"
                  className="text-xl font-bold text-accent hover:underline"
                >
                  +43 670 405 5549
                </a>
              </div>
              <div className="portfolio-card p-4 bg-accent-muted">
                <p className="font-bold text-foreground mb-2">Abderrahmen:</p>
                <a 
                  href="tel:+436764002129"
                  className="text-xl font-bold text-accent hover:underline"
                >
                  +43 676 400 2129
                </a>
              </div>
            </div>
          </div>

          {/* Option 3: Visit */}
          <div className="portfolio-card p-8 text-center space-y-6">
            <div className="text-6xl">🏠</div>
            <h3 className="text-2xl font-bold text-foreground">Option 3: Der Besuch</h3>
            <p className="text-foreground-muted">
              Kommen Sie vorbei. Der Kaffee ist gut, die Ideen noch besser.
            </p>
            
            <div className="portfolio-card p-4 bg-accent-muted">
              <p className="font-bold text-foreground mb-2">Adresse:</p>
              <p className="text-foreground-muted">
                <strong>Wambachergasse 16</strong><br/>
                1130 Wien<br/>
                Österreich
              </p>
              <p className="text-sm text-foreground-muted mt-3 italic">
                (U4 Hietzing, dann 10 Min zu Fuß)
              </p>
            </div>

            <a 
              href="https://maps.google.com/?q=Wambachergasse+16,+1130+Wien"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full"
            >
              📍 Route planen
            </a>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center mt-16">
          <div className="inline-block portfolio-card p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Brennt's? Hier ist unsere Hotline:
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:hello@princeberg.com"
                className="text-xl font-bold text-accent hover:underline"
              >
                📧 hello@princeberg.com
              </a>
              <span className="text-foreground-muted">oder</span>
              <p className="text-lg text-foreground-muted">
                📱 Einfach anrufen/schreiben – wir sind da!
              </p>
            </div>
          </div>
        </div>

        {/* P.S. Section */}
        <div className="text-center mt-16">
          <div className="inline-block portfolio-card p-8 max-w-4xl text-left">
            <p className="text-lg text-foreground-muted leading-relaxed">
              <strong className="text-accent">P.S.:</strong> Wenn Sie bis hierher gelesen haben, sind Sie genau der Typ Unternehmer, 
              mit dem wir arbeiten wollen. Menschen, die Qualität erkennen. Die verstehen, dass billig teuer ist. 
              Die wissen, dass Erfolg im Detail liegt.
            </p>
            <p className="text-xl font-bold text-gradient mt-6">
              Lassen Sie uns reden. 5 Minuten. Es könnte die beste Investment-Entscheidung des Jahres werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};