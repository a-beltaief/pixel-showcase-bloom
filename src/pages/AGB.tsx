import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const AGB = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <p className="text-sm text-foreground-muted mb-8">Stand: Oktober 2025</p>
          
          <div className="space-y-8 text-foreground-muted">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">§ 1 Geltungsbereich und Vertragspartner</h2>
              <p className="mb-4">
                Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Geschäftsbeziehung zwischen:
              </p>
              <p className="mb-2 font-semibold text-foreground">Princeberg.com</p>
              <p className="mb-2">Wambachergasse 16</p>
              <p className="mb-2">1130 Wien, Österreich</p>
              <p className="mb-4">E-Mail: info@princeberg.com</p>
              <p className="mb-4">und dem Kunden.</p>
              <p className="mb-4">
                Diese AGB gelten für alle Dienstleistungen, die über princeberg.com im Rahmen eines universitären Projekts angeboten und erbracht werden. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
              </p>
              <p className="mb-4">
                <strong>Hinweis:</strong> Princeberg.com wird als privates Universitätsprojekt betrieben. Der Anbieter tritt nicht als Unternehmer im Sinne des Konsumentenschutzgesetzes auf.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">§ 2 Vertragsschluss</h2>
              <p className="mb-4">
                Der Vertragsschluss erfolgt durch die Buchung eines Leistungspakets. Der genaue Ablauf unterscheidet sich je nach gewähltem Paket:
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.1 Vertragsschluss bei Basis- und Standardpaket</h3>
              <p className="mb-4">
                Bei Buchung des Basis- oder Standardpakets erfolgt der Vertragsschluss über die Website princeberg.com. Mit der Buchung gibt der Kunde ein verbindliches Angebot zum Abschluss eines Vertrages ab. Der Anbieter bestätigt den Eingang der Buchung per E-Mail. Die Bestätigung stellt die Annahme des Angebots dar, wodurch der Vertrag zustande kommt.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.2 Vertragsschluss bei Premium-Paket</h3>
              <p className="mb-4">
                Bei Buchung des Premium-Pakets erfolgt der Vertragsschluss per E-Mail. Der Kunde erhält nach Anfrage einen individuellen Zahlungslink (Stripe Payment Link) per E-Mail zugesendet. Mit der Durchführung der Zahlung über diesen Link gibt der Kunde ein verbindliches Angebot zum Abschluss eines Vertrages ab. Der Vertrag kommt mit erfolgreichem Zahlungsabschluss zustande. Der Kunde erhält nach erfolgreicher Zahlung eine automatische Bestätigung von Stripe sowie eine Auftragsbestätigung vom Anbieter.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.3 Auftragsbestätigung und Vertragstext</h3>
              <p className="mb-4">
                Der Kunde erhält nach erfolgreichem Vertragsschluss eine Auftragsbestätigung per E-Mail. Der Vertragstext kann vom Kunden jederzeit über die Website oder per E-Mail-Anfrage eingesehen werden.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.4 Individueller Servicevereinbarung</h3>
              <p className="mb-4">
                Zusätzlich zu diesen Allgemeinen Geschäftsbedingungen erhält jeder Kunde nach der Paketbuchung eine individuelle Servicevereinbarung (Service Level Agreement). Dieser individuelle Vertrag regelt die spezifischen Leistungsdetails, die auf die Bedürfnisse des jeweiligen Kunden zugeschnitten sind.
              </p>
              <p className="mb-4">Die individualisierte Servicevereinbarung enthält:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Unternehmensspezifische Leistungsbeschreibung</li>
                <li>Detaillierte Aufgaben und Deliverables</li>
                <li>Zeitplan und Meilensteine</li>
                <li>Ansprechpartner und Kommunikationswege</li>
                <li>Spezifische Anforderungen des Kunden</li>
                <li>Branchenspezifische Anpassungen</li>
              </ul>
              <p className="mb-4">
                Im Falle eines Widerspruchs zwischen diesen AGB und der individuellen Servicevereinbarung hat die individuelle Servicevereinbarung Vorrang, soweit darin ausdrücklich etwas anderes geregelt ist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">§ 3 Leistungsbeschreibung und Preispakete</h2>
              <p className="mb-4">
                Der Anbieter erbringt die in der Leistungsbeschreibung auf der Website princeberg.com detailliert aufgeführten Dienstleistungen. Die Leistungen werden in verschiedenen Paketen angeboten:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Basispaket</h3>
              <p className="mb-2"><strong>Monatlicher Preis:</strong> 50 EUR (MwSt-frei, da Privatperson)</p>
              <p className="mb-2"><strong>Leistungsumfang:</strong> Professionelle Website-Lösung für kleine Unternehmen. Inkl. 5 Seiten, Responsive Design, SEO-Grundoptimierung, SSL-Zertifikat, DSGVO-Compliance, Hosting und E-Mail-Support. Monatlich kündbar, keine Setup-Kosten.</p>
              <p className="mb-2"><strong>Laufzeit:</strong> monatlich kündbar</p>
              <p className="mb-4"><strong>Kündigungsfrist:</strong> 1 Monat</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Standardpaket</h3>
              <p className="mb-2"><strong>Monatlicher Preis:</strong> 80 EUR (MwSt-frei, da Privatperson)</p>
              <p className="mb-2"><strong>Leistungsumfang:</strong> Erweiterte Website-Lösung für wachsende Unternehmen. Inkl. 10 Seiten, alle Basic-Features, API-Integration, Datenbank-Anbindung, Analytics Dashboard, WhatsApp-Support und monatlich 2h Änderungen. Monatlich kündbar, keine Setup-Kosten.</p>
              <p className="mb-2"><strong>Laufzeit:</strong> monatlich kündbar</p>
              <p className="mb-4"><strong>Kündigungsfrist:</strong> 1 Monat</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Premium-Paket</h3>
              <p className="mb-2"><strong>Monatlicher Preis:</strong> Individuell (MwSt-frei, da Privatperson)</p>
              <p className="mb-2"><strong>Leistungsumfang:</strong> Maßgeschneiderte Enterprise-Lösung für komplexe Projekte. Inkl. unbegrenzte Seiten, alle Plus-Features, Custom Development, API-Entwicklung, Prioritäts-Support, Dedicated Account Manager und SLA-Garantie. Individuelles Angebot auf Anfrage.</p>
              <p className="mb-2"><strong>Laufzeit:</strong> monatlich kündbar</p>
              <p className="mb-4"><strong>Kündigungsfrist:</strong> 1 Monat</p>

              <p className="mb-4">
                Alle angegebenen Preise verstehen sich in Euro und sind Bruttopreise ohne Mehrwertsteuer, da der Anbieter als Privatperson agiert und keine Umsatzsteuer ausweisen muss. Die aktuell gültigen Preise sind auf der Website princeberg.com einsehbar. Der Anbieter behält sich vor, die Preise mit einer Vorlaufzeit von 30 Tagen anzupassen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">§ 4 Vertragslaufzeit und Kündigung</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.1 Vertragslaufzeit</h3>
              <p className="mb-4">
                Der Vertrag wird auf unbestimmte Zeit geschlossen und kann von beiden Vertragsparteien ordentlich gekündigt werden. Die Mindestlaufzeit beträgt einen Monat ab Vertragsschluss.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.2 Ordentliche Kündigung</h3>
              <p className="mb-4">
                Beide Vertragsparteien können den Vertrag mit einer Frist von einem (1) Monat zum Monatsende kündigen. Die Kündigung muss in Textform erfolgen (E-Mail ausreichend) und ist zu richten an:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Kunde kündigt: info@princeberg.com</li>
                <li>Anbieter kündigt: An die vom Kunden angegebene E-Mail-Adresse</li>
              </ul>
              <p className="mb-4">
                Die Kündigungsfrist beginnt mit dem Zugang der Kündigungserklärung beim Vertragspartner. Für die Rechtzeitigkeit ist das Datum des Zugangs beim Empfänger maßgeblich.
              </p>
              <p className="mb-4"><strong>Beispiel zur Kündigungsfrist:</strong></p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Kündigung geht am 10. Mai ein → Kündigungsfrist läuft ab 10. Mai</li>
                <li>Vertrag endet zum 30. Juni (ein voller Monat später zum Monatsende)</li>
                <li>Für eine Kündigung zum 31. Mai muss die Kündigung spätestens am 30. April eingehen</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.3 Außerordentliche Kündigung</h3>
              <p className="mb-4">
                Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt für beide Vertragsparteien unberührt. Ein wichtiger Grund liegt insbesondere vor bei:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Zahlungsverzug des Kunden von mehr als 14 Tagen trotz Mahnung</li>
                <li>Verletzung wesentlicher Vertragspflichten</li>
                <li>Verstoß gegen diese AGB oder gesetzliche Bestimmungen</li>
                <li>Missbrauch der Leistungen</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.4 Folgen der Kündigung</h3>
              <p className="mb-4">
                Mit Beendigung des Vertrages wird der Zugang des Kunden zu den Leistungen gesperrt. Bereits gezahlte Beträge für den laufenden Monat werden nicht erstattet. Ein Anspruch auf anteilige Rückerstattung besteht nicht.
              </p>
              <p className="mb-4">
                Der Kunde wird ausdrücklich darauf hingewiesen, dass er mit Vertragsende das Nutzungsrecht an der Website verliert und die Website gelöscht wird. Gemäß § 9.5.3 ist der Kunde verpflichtet, alle ihm gehörenden Inhalte (Bilder, Texte, E-Mails, Kundendaten) eigenverantwortlich bis spätestens 14 Tage vor Vertragsende zu sichern. Nach diesem Zeitpunkt besteht keine Möglichkeit mehr, auf die Daten zuzugreifen.
              </p>
              <p className="mb-4">
                Die Website geht nicht in das Eigentum des Kunden über. Alle Rechte verbleiben bei Princeberg.com. Details hierzu finden sich in § 9 dieser AGB.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">§ 5 Zahlungsbedingungen</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.1 Zahlungsabwicklung über Stripe</h3>
              <p className="mb-4">
                Die Zahlungsabwicklung erfolgt über den Zahlungsdienstleister Stripe Payments Europe Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland (nachfolgend "Stripe").
              </p>
              <p className="mb-4">
                Durch die Nutzung der Zahlungsabwicklung über Stripe akzeptiert der Kunde zusätzlich die Nutzungsbedingungen und Datenschutzrichtlinien von Stripe:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Stripe Nutzungsbedingungen: <a href="https://stripe.com/at/legal/ssa" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://stripe.com/at/legal/ssa</a></li>
                <li>Stripe Datenschutzerklärung: <a href="https://stripe.com/at/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://stripe.com/at/privacy</a></li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.2 Zahlungsweise</h3>
              <p className="mb-4">
                Die Zahlung erfolgt monatlich im Voraus. Die verfügbaren Zahlungsmethoden werden im Bezahlprozess bzw. im zugesandten Stripe-Zahlungslink angezeigt.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.3 Fälligkeit und Zahlungsvorgang</h3>
              <p className="mb-4"><strong>5.3.1 Basis- und Standardpaket</strong></p>
              <p className="mb-4">
                Die monatliche Gebühr wird jeweils zu Beginn des Monats fällig. Die Zahlung wird automatisch über die vom Kunden bei Stripe hinterlegte Zahlungsmethode eingezogen. Bei der ersten Buchung ist die Zahlung sofort mit Vertragsschluss fällig.
              </p>
              <p className="mb-4"><strong>5.3.2 Premium-Paket</strong></p>
              <p className="mb-4">
                Bei Premium-Paket-Buchungen erhält der Kunde einen individuellen Stripe-Zahlungslink per E-Mail. Die Zahlung ist innerhalb von 7 Tagen nach Erhalt des Links zu leisten. Der Vertrag kommt erst mit erfolgreichem Zahlungsabschluss zustande.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.4 Zahlungsverzug</h3>
              <p className="mb-4">
                Gerät der Kunde mit der Zahlung in Verzug, ist der Anbieter berechtigt, die Leistungserbringung bis zum vollständigen Zahlungseingang auszusetzen. Bei Zahlungsverzug von mehr als 14 Tagen trotz Mahnung ist der Anbieter zur außerordentlichen Kündigung des Vertrages berechtigt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">§ 6 Leistungserbringung und Mitwirkungspflichten</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.1 Leistungserbringung</h3>
              <p className="mb-4">
                Der Anbieter erbringt die vertraglich vereinbarten Leistungen nach bestem Wissen und Gewissen. Die Leistungen werden digital bzw. remote erbracht. Der Anbieter bemüht sich um eine hohe Verfügbarkeit der Dienste, wobei geplante Wartungsarbeiten vorbehalten bleiben.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.2 Mitwirkungspflichten des Kunden</h3>
              <p className="mb-4">Der Kunde verpflichtet sich:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Alle notwendigen Informationen und Zugangsdaten vollständig und wahrheitsgemäß bereitzustellen</li>
                <li>Bei Änderungen seiner Kontaktdaten den Anbieter unverzüglich zu informieren</li>
                <li>Die Leistungen vertragsgemäß zu nutzen und nicht missbräuchlich einzusetzen</li>
                <li>Dritte nicht unbefugt Zugang zu seinem Account zu gewähren</li>
                <li>Die geltenden Gesetze einzuhalten</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">§ 7 Gewährleistung und Haftung</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">7.1 Gewährleistung</h3>
              <p className="mb-4">
                Der Anbieter bemüht sich, die Leistungen ordnungsgemäß und fehlerfrei zu erbringen. Da es sich um ein universitäres Projekt handelt, kann jedoch keine Gewähr für eine vollständig fehlerfreie Funktionsweise übernommen werden.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">7.2 Haftung</h3>
              <p className="mb-4">
                Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie für die Verletzung von Leben, Körper oder Gesundheit. Für leichte Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten, wobei die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt ist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">§ 8 Datenschutz</h2>
              <p className="mb-4">
                Die Verarbeitung personenbezogener Daten erfolgt nach den Bestimmungen der Datenschutz-Grundverordnung (DSGVO) und des österreichischen Datenschutzgesetzes (DSG). Detaillierte Informationen zur Datenverarbeitung finden sich in der Datenschutzerklärung unter <a href="/datenschutz" className="text-accent hover:underline">princeberg.com/datenschutz</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">§ 9 Geistiges Eigentum und Nutzungsrechte</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9.1 Eigentumsverhältnisse an der Website</h3>
              <p className="mb-4">
                Die von Princeberg.com erstellten und bereitgestellten Websites bleiben im vollständigen Eigentum von Princeberg.com. Der Kunde erwirbt durch die Buchung eines Pakets kein Eigentum an der Website, sondern erhält lediglich ein zeitlich begrenztes Nutzungsrecht für die Dauer des Vertragsverhältnisses.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9.2 Umfang des Nutzungsrechts</h3>
              <p className="mb-4">
                Der Kunde erhält für die Dauer des Vertragsverhältnisses das nicht-exklusive, nicht übertragbare Recht zur Nutzung der bereitgestellten Website zu geschäftlichen Zwecken.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9.3 Eigentum des Kunden</h3>
              <p className="mb-4">Folgende vom Kunden bereitgestellte Elemente bleiben im Eigentum des Kunden:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Firmenname / Markenname</li>
                <li>Domain-Name</li>
                <li>E-Mail-Adresse(n) und E-Mail-Postfach</li>
                <li>Bereitgestellte Bilder und Grafiken</li>
                <li>Texte und Inhalte</li>
                <li>Kundendaten</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9.4 Eigentum von Princeberg.com</h3>
              <p className="mb-4">Im vollständigen Eigentum von Princeberg.com verbleiben:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Der Quellcode der Website</li>
                <li>Das Website-Design und Layout</li>
                <li>Die technische Infrastruktur</li>
                <li>Software-Komponenten</li>
                <li>Know-how und Methoden der Umsetzung</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9.5 Rückgabe bei Vertragsbeendigung</h3>
              <p className="mb-4">
                Bei Beendigung des Vertragsverhältnisses besteht keine Verpflichtung von Princeberg.com, die Website, den Quellcode oder sonstige technische Komponenten an den Kunden zu übergeben. Der Kunde ist verpflichtet, alle ihm gehörenden Inhalte eigenverantwortlich bis spätestens 14 Tage vor Vertragsende zu sichern.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">§ 10 Vertraulichkeit</h2>
              <p className="mb-4">
                Beide Vertragsparteien verpflichten sich, alle im Rahmen der Geschäftsbeziehung erlangten vertraulichen Informationen streng vertraulich zu behandeln und nicht an Dritte weiterzugeben. Diese Verpflichtung besteht auch nach Beendigung des Vertragsverhältnisses fort.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">§ 11 Schlussbestimmungen</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">11.1 Änderungen der AGB</h3>
              <p className="mb-4">
                Der Anbieter behält sich vor, diese AGB zu ändern. Änderungen werden dem Kunden mindestens 30 Tage vor Inkrafttreten per E-Mail mitgeteilt.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">11.2 Anwendbares Recht und Gerichtsstand</h3>
              <p className="mb-4">
                Für alle Rechtsbeziehungen zwischen dem Anbieter und dem Kunden gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand für alle Streitigkeiten aus diesem Vertragsverhältnis ist, soweit gesetzlich zulässig, Wien.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">11.3 Alternative Streitbeilegung</h3>
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://ec.europa.eu/consumers/odr</a>
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">11.4 Kontakt</h3>
              <p className="mb-4">
                Bei Fragen zu diesen AGB können Sie sich jederzeit an folgende Adresse wenden:
              </p>
              <p className="mb-4">E-Mail: info@princeberg.com</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AGB;
