import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <article className="max-w-4xl mx-auto px-6 py-16">
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-foreground-muted font-light">Warum wir als AI-Studenten</span>
              <span className="block text-gradient">keine KI für Websites nutzen</span>
            </h1>
            
            <div className="flex justify-center items-center gap-4 text-foreground-muted mb-6">
              <p>Ein SEO-optimierter Artikel von Haris Muranovic & Abderrahmen Beltaief</p>
            </div>
            
            <div className="flex justify-center items-center gap-6 text-sm text-foreground-muted">
              <span>📖 Lesezeit: 8 Minuten</span>
              <span>📅 Veröffentlicht: November 2024</span>
            </div>
          </header>

          {/* Lead */}
          <div className="portfolio-card p-8 mb-12 text-lg leading-relaxed">
            <p className="font-bold text-accent mb-4">
              Sie suchen nach "Website erstellen lassen Wien"? Oder vielleicht "Webentwickler JKU"? 
              Perfekt, dann sind Sie hier richtig. Aber Vorsicht: Was Sie gleich lesen werden, 
              könnte Ihre Meinung über moderne Webentwicklung komplett verändern.
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Die KI-Paradoxie in der Webentwicklung</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>
                  Wir sind Haris und Abderrahmen, zwei AI-Studenten an der Johannes Kepler Universität Linz. 
                  Jeden Tag arbeiten wir mit künstlicher Intelligenz, Machine Learning und neuronalen Netzen. 
                  Wir könnten Ihre Website in 10 Minuten von ChatGPT schreiben lassen, das Design von 
                  Midjourney generieren und alles mit GitHub Copilot zusammenkleben.
                </p>
                
                <p className="text-xl font-bold text-gradient">
                  Aber wir tun es nicht. Und hier ist warum:
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">1. Google hasst KI-Content (und Ihre Kunden auch)</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>
                  Seit dem Google Helpful Content Update ist klar: KI-generierter Content wird abgestraft. 
                  Google's Algorithmen erkennen mittlerweile mit erschreckender Genauigkeit, was von Menschen 
                  und was von Maschinen geschrieben wurde.
                </p>
                
                <div className="portfolio-card p-6 my-6">
                  <h3 className="text-xl font-bold text-accent mb-4">Die Folgen für KI-Websites:</h3>
                  <ul className="space-y-2">
                    <li>• Ranking-Verluste bis zu 70%</li>
                    <li>• Höhere Bounce-Rates (Nutzer springen sofort ab)</li>
                    <li>• Keine Conversion (KI-Texte verkaufen nicht)</li>
                    <li>• Trust-Verlust bei Kunden</li>
                  </ul>
                </div>
                
                <p className="font-bold text-accent">
                  Unsere Lösung: Jeder Text, jede Zeile Code, jedes Design-Element wird von uns persönlich erstellt. 
                  Authentisch. Unique. Google-approved.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">2. Der menschliche Faktor: Was KI niemals verstehen wird</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>
                  Eine Website ist mehr als Code und Pixel. Sie ist die digitale DNA Ihres Unternehmens. 
                  KI kann Muster erkennen, aber sie versteht nicht:
                </p>
                
                <ul className="space-y-2 ml-6">
                  <li>• <strong className="text-accent">Die Story hinter Ihrem Unternehmen</strong></li>
                  <li>• <strong className="text-accent">Die emotionalen Trigger Ihrer Zielgruppe</strong></li>
                  <li>• <strong className="text-accent">Die feinen kulturellen Nuancen Ihres Markets</strong></li>
                  <li>• <strong className="text-accent">Den Unterschied zwischen Wien und Linz</strong> (ja, den gibt's!)</li>
                </ul>

                <div className="portfolio-card p-6 bg-accent-muted my-6">
                  <p className="font-bold text-foreground mb-2">Beispiel aus unserer Praxis:</p>
                  <p>
                    Ein Bäcker aus dem 13. Bezirk wollte online durchstarten. ChatGPT hätte geschrieben: 
                    "Wir backen leckeres Brot." Wir haben geschrieben: "Seit 1987 weckt der Duft unserer 
                    Handsemmeln die Wambachergasse."
                  </p>
                  <p className="font-bold text-gradient mt-3">
                    Resultat: 400% mehr Online-Bestellungen in 3 Monaten.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">3. Performance: Warum handgeschriebener Code schneller ist</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>
                  KI-generierter Code ist wie Fast Fashion: Sieht okay aus, hält aber nicht lange. 
                  Hier die harten Fakten:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="portfolio-card p-6">
                    <h3 className="text-xl font-bold text-red-500 mb-4">KI-generierte Websites:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Durchschnittliche Ladezeit: 4-6 Sekunden</li>
                      <li>• Code-Bloat: 60-80% unnötiger Code</li>
                      <li>• Mobile Performance Score: 40-60/100</li>
                      <li>• Schwer zu warten und updaten</li>
                    </ul>
                  </div>
                  
                  <div className="portfolio-card p-6 bg-accent-muted">
                    <h3 className="text-xl font-bold text-accent mb-4">Unsere handgecrafteten Websites:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Ladezeit: Unter 2 Sekunden (garantiert!)</li>
                      <li>• Sauberer, optimierter Code</li>
                      <li>• Mobile Performance Score: 90+/100</li>
                      <li>• Einfach erweiterbar und zukunftssicher</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">4. SEO-Dominanz durch echtes Expertenwissen</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>
                  Als AI-Studenten verstehen wir Suchmaschinen-Algorithmen auf einem Level, das die meisten 
                  "SEO-Experten" nur vorgeben zu haben. Wir wissen:
                </p>
                
                <ul className="space-y-2 ml-6">
                  <li>• <strong className="text-accent">Wie Google's RankBrain wirklich funktioniert</strong></li>
                  <li>• <strong className="text-accent">Welche Signale 2024 wirklich zählen</strong></li>
                  <li>• <strong className="text-accent">Wie man E-E-A-T (Experience, Expertise, Authority, Trust) aufbaut</strong></li>
                  <li>• <strong className="text-accent">Warum Core Web Vitals über Erfolg entscheiden</strong></li>
                </ul>
                
                <p className="font-bold text-accent">
                  Diese Expertise fließt in jede Website ein. Nicht als Plugin oder Template, 
                  sondern als fundamentale Architektur.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">5. Der Wiener Vorteil: Lokal, persönlich, erreichbar</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>
                  Wir sitzen in der Wambachergasse 16, 1130 Wien. Keine anonyme Agentur, kein Offshore-Team. 
                  Wenn's brennt, sind wir in 20 Minuten bei Ihnen.
                </p>
                
                <div className="portfolio-card p-6 my-6">
                  <h3 className="text-xl font-bold text-accent mb-4">Was das für Sie bedeutet:</h3>
                  <ul className="space-y-2">
                    <li>• Persönliche Treffen möglich (der Kaffee geht auf uns)</li>
                    <li>• Österreichisches Recht, österreichische Rechnung</li>
                    <li>• Kulturelles Verständnis (wir wissen, was Wiener wollen)</li>
                    <li>• WhatsApp-Support in Ihrer Zeitzone</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Fazit: Warum Sie uns jetzt anrufen sollten</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>
                  Die Webentwicklung steht an einem Scheideweg. Der einfache Weg führt zu KI-generierten Einheitsbrei. 
                  Der richtige Weg führt zu uns.
                </p>
                
                <div className="portfolio-card p-8 bg-gradient-to-br from-accent/10 to-accent/5 my-8">
                  <h3 className="text-2xl font-bold text-gradient mb-6">Sie bekommen:</h3>
                  <ul className="space-y-3 text-lg">
                    <li>• Eine Website, die verkauft statt nur informiert</li>
                    <li>• SEO-Power, die Sie nach oben bringt</li>
                    <li>• Persönliche Betreuung statt Ticket-Nummern</li>
                    <li>• Zwei Entwickler, die für Ihren Erfolg brennen</li>
                  </ul>
                </div>
                
                <p className="text-xl font-bold text-gradient">
                  Der erste Schritt ist einfach:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="portfolio-card p-6 text-center">
                    <p className="font-bold text-foreground mb-4">📱 Direkter Kontakt:</p>
                    <div className="space-y-2">
                      <p><a href="tel:+436704055549" className="text-accent hover:underline">Haris: +43 670 405 5549</a></p>
                      <p><a href="tel:+436764002129" className="text-accent hover:underline">Abderrahmen: +43 676 400 2129</a></p>
                    </div>
                  </div>
                  
                  <div className="portfolio-card p-6 text-center">
                    <p className="font-bold text-foreground mb-4">📧 Email & Adresse:</p>
                    <div className="space-y-1 text-sm">
                      <p><a href="mailto:hello@princeberg.com" className="text-accent hover:underline">hello@princeberg.com</a></p>
                      <p>Wambachergasse 16, 1130 Wien</p>
                    </div>
                  </div>
                </div>
                
                <div className="portfolio-card p-8 bg-accent-muted text-center">
                  <p className="text-lg font-bold text-foreground mb-4">
                    P.S.: Wenn Sie bis hierher gelesen haben, sind Sie genau der Typ Unternehmer, 
                    mit dem wir arbeiten wollen. Menschen, die Qualität erkennen. Die verstehen, 
                    dass billig teuer ist. Die wissen, dass Erfolg im Detail liegt.
                  </p>
                  <p className="text-xl font-bold text-gradient">
                    Lassen Sie uns reden. 5 Minuten. Es könnte die beste Investment-Entscheidung des Jahres werden.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* SEO Keywords */}
          <div className="mt-16 text-center">
            <div className="portfolio-card p-6 bg-background-secondary">
              <p className="text-sm text-foreground-muted italic">
                <strong>Keywords für SEO:</strong> Webentwicklung Wien, Website erstellen lassen Wien, 
                Webdesign Wien, JKU Webentwickler, Webentwicklung Österreich, Homepage erstellen Wien, 
                Webdesigner Wien, Website Agentur Wien, Günstige Website Wien, Professionelle Website Wien, 
                WordPress Alternative Wien, Custom Website Wien, Responsive Design Wien, SEO Wien, 
                Webentwicklung Studenten, AI Experten Wien
              </p>
            </div>
          </div>
        </article>
        
        <Footer />
      </div>
    </div>
  );
};

export default Blog;