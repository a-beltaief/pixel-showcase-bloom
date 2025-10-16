import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, Clock, Euro, Briefcase, Mail, MessageCircle, ChevronDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
              PRINCEBERG ist ein junges, dynamisches Startup-Unternehmen (Spinoff eines Uni-Projekts) und seit Mai 2025 erfolgreich am Markt.
            </p>
          </div>
        </section>

        {/* Job Listings */}
        <section className="px-6 max-w-6xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
          
          {/* Sales Representative */}
          <AccordionItem value="sales" className="border border-card-border rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <CardHeader className="p-0 w-full">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <CardTitle className="text-3xl mb-2">Sales Representative (m/w/d)</CardTitle>
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
                  <span>€ 3.200,- brutto/Monat + 30% Provision</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-5 h-5" />
                  <span>Start: Ehestmöglich</span>
                </div>
              </div>
            </CardHeader>
            </AccordionTrigger>

            <AccordionContent>
            <CardContent className="space-y-8 px-6 pb-6">
              {/* Deine Aufgaben */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Deine Aufgaben</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">•</span> Aktive Neukundenakquise im B2B-Bereich (Telefon, E-Mail, LinkedIn)</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Kaltakquise und Identifikation potenzieller Kunden</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Führung von Erstgesprächen und Bedarfsanalysen</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Präsentation unserer Website-Pakete (Basic, Premium, Enterprise)</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Erstellung und Versand individueller Angebote</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Follow-up mit Interessenten bis zum Vertragsabschluss</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Pflege der Sales-Pipeline und CRM-System</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Enge Zusammenarbeit mit dem Support-Team für die Kundenübergabe</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Erreichung und Übertreffen von Verkaufszielen</li>
                </ul>
              </div>

              {/* Das bringst du mit */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Das bringst du mit</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Erforderliche Kenntnisse:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span> Abgeschlossene kaufmännische Ausbildung (HAK, HAS) oder vergleichbare Qualifikation</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Mindestens 1-2 Jahre Erfahrung im B2B-Vertrieb oder Telefonverkauf</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Ausgezeichnete Kommunikationsfähigkeiten am Telefon und schriftlich</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Sehr gute Deutschkenntnisse in Wort und Schrift (C1/C2)</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Hartnäckigkeit und Durchhaltevermögen bei der Kaltakquise</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Selbstständige, zielorientierte Arbeitsweise</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Hohe Eigenmotivation und "Hunter-Mentalität"</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Affinität zu digitalen Produkten und Web-Technologien</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Sicherer Umgang mit MS Office, CRM-Systemen und LinkedIn</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Von Vorteil:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span> Erfahrung im IT/Software-Vertrieb</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Kenntnisse im Website/Webdesign-Bereich</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Erfahrung mit Social Selling</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Englischkenntnisse</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Erfolgsnachweise im Vertrieb</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Was wir bieten */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Was wir bieten</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">•</span> Attraktives Fix-Gehalt (€ 3.200,- brutto) + 30% Provision on top</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Unbegrenztes Verdienstpotenzial durch Provisionsmodell</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Flexible Arbeitszeiten und Home Office Möglichkeit</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Moderne Sales-Tools und CRM-System</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Umfassende Einschulung in unsere Produkte</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Flache Hierarchien - direkte Kommunikation mit dem Gründer</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Startup-Atmosphäre mit viel Gestaltungsfreiraum</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Du baust den Vertrieb von Anfang an mit auf</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Entwicklungsperspektiven in einem wachsenden Unternehmen</li>
                </ul>
              </div>

              {/* Bewerbung */}
              <div className="bg-card-border/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Bewerbung</h3>
                <p className="text-muted-foreground mb-4">
                  Sende deine Bewerbungsunterlagen an:
                </p>
                <div className="space-y-3">
                  <a 
                    href="mailto:info@princeberg.com?subject=Bewerbung Sales Representative"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Mail className="w-5 h-5" />
                    info@princeberg.com
                  </a>
                  <p className="text-sm text-muted-foreground">Betreff: "Bewerbung Sales Representative"</p>
                  <div className="pt-2">
                    <p className="text-muted-foreground mb-2">Oder kontaktiere uns direkt via WhatsApp:</p>
                    <a 
                      href="https://wa.me/436704055549?text=Hi%20Haris,%20ich%20interessiere%20mich%20für%20die%20Sales%20Representative%20Position!"
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
            </AccordionContent>
          </AccordionItem>

          {/* Marketing Manager */}
          <AccordionItem value="marketing" className="border border-card-border rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <CardHeader className="p-0 w-full">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <CardTitle className="text-3xl mb-2">Marketing Manager (m/w/d)</CardTitle>
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
                  <span>€ 3.500,- brutto/Monat</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-5 h-5" />
                  <span>Start: Ehestmöglich</span>
                </div>
              </div>
            </CardHeader>
            </AccordionTrigger>

            <AccordionContent>
            <CardContent className="space-y-8 px-6 pb-6">
              {/* Deine Aufgaben */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Deine Aufgaben</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">•</span> Entwicklung und Umsetzung der gesamten Marketing-Strategie für PRINCEBERG</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Management aller Social Media Kanäle (Instagram, LinkedIn, Facebook, TikTok)</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Content Creation: Posts, Stories, Reels, Videos</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Community Management und Interaktion mit Followern</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Lead-Generierung durch Online-Marketing-Kampagnen</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Google Ads und Meta Ads Kampagnen aufsetzen und optimieren</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> SEO und Content Marketing für die Website</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> E-Mail-Marketing und Newsletter-Kampagnen</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Analyse von Marketing-KPIs und Performance-Optimierung</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Zusammenarbeit mit dem Sales-Team für Lead-Übergabe</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Aufbau und Pflege der PRINCEBERG-Marke</li>
                </ul>
              </div>

              {/* Das bringst du mit */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Das bringst du mit</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Erforderliche Kenntnisse:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span> Abgeschlossene Ausbildung im Bereich Marketing, Kommunikation oder vergleichbare Qualifikation</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Mindestens 2 Jahre Erfahrung im Online-Marketing und Social Media Management</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Sehr gute Kenntnisse in Social Media Plattformen (Instagram, LinkedIn, TikTok, Facebook)</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Erfahrung mit Content Creation (Grafik, Video, Text)</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Kenntnisse in Google Ads, Meta Business Suite, Analytics</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Grundkenntnisse in SEO und Content Marketing</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Kreativität und Gespür für Trends</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Sehr gute Deutschkenntnisse in Wort und Schrift (C1/C2)</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Analytisches Denken und datengetriebenes Arbeiten</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Selbstständige, strukturierte Arbeitsweise</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Von Vorteil:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span> Erfahrung mit Design-Tools (Canva, Adobe Creative Suite)</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Video-Editing Kenntnisse (CapCut, Premiere Pro)</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Erfahrung im B2B-Marketing</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Kenntnisse in Marketing-Automation-Tools</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Englischkenntnisse</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Erfahrung mit Startups oder jungen Unternehmen</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Eigene Social Media Erfolge (Portfolio)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Was wir bieten */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Was wir bieten</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">•</span> Attraktives Gehalt (€ 3.500,- brutto)</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Vollständige kreative Freiheit - du baust das Marketing von Grund auf</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Flexible Arbeitszeiten und Home Office Möglichkeit</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Budget für Marketing-Tools und Kampagnen</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Modernes, junges Team</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Direkter Draht zum Gründer - kurze Entscheidungswege</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Startup-Atmosphäre aus Uni-Projekt hervorgegangen</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Möglichkeit, deine eigenen Ideen umzusetzen</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Sichtbarer Impact deiner Arbeit auf das Unternehmenswachstum</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Weiterbildungsmöglichkeiten</li>
                </ul>
              </div>

              {/* Bewerbung */}
              <div className="bg-card-border/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Bewerbung</h3>
                <p className="text-muted-foreground mb-4">
                  Sende deine Bewerbungsunterlagen an:
                </p>
                <div className="space-y-3">
                  <a 
                    href="mailto:info@princeberg.com?subject=Bewerbung Marketing Manager"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Mail className="w-5 h-5" />
                    info@princeberg.com
                  </a>
                  <p className="text-sm text-muted-foreground">Betreff: "Bewerbung Marketing Manager"</p>
                  <div className="pt-2">
                    <p className="text-muted-foreground mb-2">Oder kontaktiere uns direkt via WhatsApp:</p>
                    <a 
                      href="https://wa.me/436704055549?text=Hi%20Haris,%20ich%20interessiere%20mich%20für%20die%20Marketing%20Manager%20Position!"
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
            </AccordionContent>
          </AccordionItem>

          {/* Support Agent */}
          <AccordionItem value="support" className="border border-card-border rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <CardHeader className="p-0 w-full">
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
                  <span>€ 3.100,- brutto/Monat</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-5 h-5" />
                  <span>Start: Ehestmöglich</span>
                </div>
              </div>
            </CardHeader>
            </AccordionTrigger>

            <AccordionContent>
            <CardContent className="space-y-8 px-6 pb-6">
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
                  <li className="flex gap-2"><span className="text-primary">•</span> Attraktives Gehalt (€ 3.100,- brutto)</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Flexible Arbeitszeiten und Home Office Möglichkeit</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Umfassende Einarbeitung in unsere Systeme</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Modernes, junges Team</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Flache Hierarchien und kurze Entscheidungswege</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Weiterbildungsmöglichkeiten im Web-Development</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Startup-Atmosphäre aus Uni-Projekt hervorgegangen</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Entwicklungsperspektiven</li>
                </ul>
              </div>

              {/* Bewerbung */}
              <div className="bg-card-border/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Bewerbung</h3>
                <p className="text-muted-foreground mb-4">
                  Sende deine Bewerbungsunterlagen an:
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
                      href="https://wa.me/436764002129?text=Hi%20Abderrahmen,%20ich%20interessiere%20mich%20für%20die%20Support%20Agent%20Position!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Abderrahmen: +43 676 400 2129
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
            </AccordionContent>
          </AccordionItem>

          </Accordion>
        </section>

        {/* Why PRINCEBERG Section */}
        <section className="px-6 py-16 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Warum PRINCEBERG?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-card-border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Startup-Spirit</h3>
                <p className="text-sm text-muted-foreground">Aus Uni-Projekt hervorgegangen mit dynamischer Kultur und flachen Hierarchien</p>
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
