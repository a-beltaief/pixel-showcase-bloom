import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, Clock, Euro, Briefcase, Mail, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Jobs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Jobs bei PRINCEBERG
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Werde Teil unseres Teams! Wir suchen motivierte Talente, die mit uns wachsen wollen.
            </p>
            <p className="text-muted-foreground">
              PRINCEBERG ist ein junges, dynamisches Startup-Unternehmen (Spinoff der JKU Linz) und seit Mai 2025 erfolgreich am Markt.
            </p>
          </div>
        </section>

        {/* Job Listings */}
        <section className="px-6 max-w-6xl mx-auto space-y-12">
          
          {/* Account Manager */}
          <Card className="border-card-border">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <CardTitle className="text-3xl mb-2">Account Manager (m/w/d)</CardTitle>
                  <CardDescription className="text-lg">Vollzeit</CardDescription>
                </div>
                <Badge className="text-sm">Offene Position</Badge>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>Wien/Linz (Home Office möglich)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5" />
                  <span>38,5 Std/Woche</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Euro className="w-5 h-5" />
                  <span>€ 4.000,- brutto/Monat + 30% Bonus</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-5 h-5" />
                  <span>Start: Ehestmöglich</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Deine Aufgaben */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Deine Aufgaben</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">•</span> Kundenbetreuung und -beratung für unsere Website-Pakete (Basic, Premium, Enterprise)</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Neukundenakquise und aktive Ansprache potenzieller Kunden</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Erstellung und Präsentation individueller Angebote</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Vertragsverhandlungen und Abschlüsse</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Enge Zusammenarbeit mit dem Development-Team</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Pflege langfristiger Kundenbeziehungen</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Betreuung von Kunden während des gesamten Projektverlaufs</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Umsatzziele erreichen und übertreffen</li>
                </ul>
              </div>

              {/* Das bringst du mit */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Das bringst du mit</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Erforderliche Kenntnisse:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span> Abgeschlossene kaufmännische Ausbildung (HAK, HAS, Studium) oder vergleichbare Qualifikation</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Mindestens 2 Jahre Erfahrung im B2B-Vertrieb oder Account Management</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Sehr gute Deutschkenntnisse in Wort und Schrift (C1/C2)</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Grundverständnis für Web-Technologien und digitale Produkte</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Sicherer Umgang mit CRM-Systemen und MS Office</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Kommunikationsstärke und Verhandlungsgeschick</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Ergebnisorientierte, selbstständige Arbeitsweise</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Hohe Eigenmotivation und Zielorientierung</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Von Vorteil:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span> Erfahrung im IT/Software-Vertrieb</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Kenntnisse im Website-Bereich</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Englischkenntnisse</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Erfahrung mit Startups oder jungen Unternehmen</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Was wir bieten */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Was wir bieten</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">•</span> Attraktives Gehalt (€ 4.000,- brutto) + 30% Performance-Bonus</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Flexible Arbeitszeiten und Home Office Möglichkeit</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Modernes, junges Team</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Flache Hierarchien und kurze Entscheidungswege</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Raum für eigene Ideen und Gestaltungsspielraum</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Startup-Atmosphäre mit JKU-Background</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Entwicklungsmöglichkeiten in einem wachsenden Unternehmen</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Kollektivvertrag Handel: Mindestgehalt ab € 2.446,- brutto/Monat
                </p>
              </div>

              {/* Bewerbung */}
              <div className="bg-card-border/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Bewerbung</h3>
                <p className="text-muted-foreground mb-4">
                  Sende deine Bewerbungsunterlagen (Lebenslauf, Motivationsschreiben) an:
                </p>
                <div className="space-y-3">
                  <a 
                    href="mailto:info@princeberg.com?subject=Bewerbung Account Manager"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Mail className="w-5 h-5" />
                    info@princeberg.com
                  </a>
                  <p className="text-sm text-muted-foreground">Betreff: "Bewerbung Account Manager"</p>
                  <div className="pt-2">
                    <p className="text-muted-foreground mb-2">Oder kontaktiere uns direkt via WhatsApp:</p>
                    <a 
                      href="https://wa.me/436704055549?text=Hi%20Haris,%20ich%20interessiere%20mich%20für%20die%20Account%20Manager%20Position!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Haris: +43 670 405 5549
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Agent */}
          <Card className="border-card-border">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <CardTitle className="text-3xl mb-2">Support Agent (m/w/d)</CardTitle>
                  <CardDescription className="text-lg">Vollzeit</CardDescription>
                </div>
                <Badge className="text-sm">Offene Position</Badge>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>Wien/Linz (Home Office möglich)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5" />
                  <span>38,5 Std/Woche</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Euro className="w-5 h-5" />
                  <span>€ 3.100,- brutto/Monat + 30% Bonus</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-5 h-5" />
                  <span>Start: Ehestmöglich</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Deine Aufgaben */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Deine Aufgaben</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">•</span> First-Level-Support für unsere Kunden via E-Mail, WhatsApp und Telefon</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Beantwortung technischer und allgemeiner Fragen zu unseren Website-Paketen</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Bearbeitung von Änderungswünschen und kleineren Website-Anpassungen</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Dokumentation von Kundenanfragen und -problemen</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Weiterleitung komplexer technischer Issues an das Development-Team</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Erstellung und Pflege von Support-Dokumentationen und FAQs</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Proaktive Kommunikation mit Kunden zu Updates und Wartungsarbeiten</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Sicherstellung hoher Kundenzufriedenheit</li>
                </ul>
              </div>

              {/* Das bringst du mit */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Das bringst du mit</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Erforderliche Kenntnisse:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span> Abgeschlossene IT-nahe Ausbildung (HTL, FH, Lehre) oder vergleichbare Qualifikation</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Grundkenntnisse in HTML, CSS und Web-Technologien</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Verständnis für Content Management Systeme</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Sehr gute Deutschkenntnisse in Wort und Schrift (C1/C2)</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Ausgeprägte Kommunikationsfähigkeit und Serviceorientierung</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Geduld und Empathie im Kundenkontakt</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Strukturierte und lösungsorientierte Arbeitsweise</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Teamfähigkeit</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Von Vorteil:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span> Erfahrung im technischen Kundensupport</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Kenntnisse in React, JavaScript oder anderen Web-Frameworks</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Erfahrung mit Ticket-Systemen</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Englischkenntnisse</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Erfahrung mit DSGVO und Datenschutz</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Was wir bieten */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Was wir bieten</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">•</span> Attraktives Gehalt (€ 3.100,- brutto) + 30% Performance-Bonus</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Flexible Arbeitszeiten und Home Office Möglichkeit</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Umfassende Einarbeitung in unsere Systeme</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Modernes, junges Team</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Flache Hierarchien und kurze Entscheidungswege</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Weiterbildungsmöglichkeiten im Web-Development</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Startup-Atmosphäre mit JKU-Background</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Entwicklungsperspektiven</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Kollektivvertrag Information & Consulting: Mindestgehalt ab € 2.100,- brutto/Monat
                </p>
              </div>

              {/* Bewerbung */}
              <div className="bg-card-border/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Bewerbung</h3>
                <p className="text-muted-foreground mb-4">
                  Sende deine Bewerbungsunterlagen (Lebenslauf, Motivationsschreiben) an:
                </p>
                <div className="space-y-3">
                  <a 
                    href="mailto:info@princeberg.com?subject=Bewerbung Support Agent"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Mail className="w-5 h-5" />
                    info@princeberg.com
                  </a>
                  <p className="text-sm text-muted-foreground">Betreff: "Bewerbung Support Agent"</p>
                  <div className="pt-2">
                    <p className="text-muted-foreground mb-2">Oder kontaktiere uns direkt via WhatsApp:</p>
                    <a 
                      href="https://wa.me/436704055549?text=Hi%20Haris,%20ich%20interessiere%20mich%20für%20die%20Support%20Agent%20Position!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Haris: +43 670 405 5549
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </section>

        {/* Why PRINCEBERG Section */}
        <section className="px-6 py-16 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Warum PRINCEBERG?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-card-border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Startup-Spirit</h3>
                <p className="text-sm text-muted-foreground">JKU Spinoff mit dynamischer Kultur und flachen Hierarchien</p>
              </div>
              <div className="bg-card border border-card-border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Wachstum & Entwicklung</h3>
                <p className="text-sm text-muted-foreground">Raum für persönliche und berufliche Entwicklung</p>
              </div>
              <div className="bg-card border border-card-border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Flexibilität</h3>
                <p className="text-sm text-muted-foreground">Home Office, flexible Zeiten und attraktive Bonusmodelle</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
