export const Philosophy = () => {
  return (
    <section id="story" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block text-foreground-muted font-light">Warum zwei AI-Experten</span>
            <span className="block text-gradient">KEINE KI für Ihre Website verwenden</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="text-6xl">🤖</div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Die Ironie ist uns bewusst.
            </h3>
            <div className="space-y-4 text-lg text-foreground-muted leading-relaxed">
              <p>
                Wir studieren Artificial Intelligence. Wir programmieren neuronale Netze. 
                Wir könnten Ihre Website in 10 Minuten von einer KI generieren lassen.
              </p>
              <p className="text-accent font-medium">
                Aber hier ist, was wir in unzähligen Nächten an der JKU gelernt haben:
              </p>
            </div>
          </div>

          <div className="portfolio-card p-8">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Was wir in der JKU gelernt haben:
            </h4>
            <ul className="space-y-3 text-foreground-muted">
              <li className="flex items-start">
                <span className="text-accent font-bold mr-3">✗</span>
                KI ist ein Werkzeug. Kein Ersatz für Vision.
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-3">✗</span>
                ChatGPT kann Code schreiben, aber versteht nicht, warum Ihr Kunde nachts um 3 Uhr auf "Kaufen" klickt.
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-3">✗</span>
                Midjourney macht schöne Bilder, aber kennt nicht die Geschichte hinter Ihrem Unternehmen.
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block portfolio-card p-8 max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Wir nutzen unser AI-Wissen anders:
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-accent mb-2">Um zu verstehen:</h4>
                <ul className="text-foreground-muted space-y-2">
                  <li>• Wie digitale Systeme denken</li>
                  <li>• Wie Suchmaschinen funktionieren</li>
                  <li>• Wie User-Verhalten vorhersagbar wird</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Und dann craften wir:</h4>
                <ul className="text-foreground-muted space-y-2">
                  <li>• Zeile für Zeile</li>
                  <li>• Pixel für Pixel</li>
                  <li>• Websites, die keine KI der Welt so bauen könnte</li>
                </ul>
              </div>
            </div>
            <p className="text-xl font-bold text-gradient mt-8">
              Weil Authentizität nicht programmierbar ist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};