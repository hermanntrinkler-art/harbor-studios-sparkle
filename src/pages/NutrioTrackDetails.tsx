import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const NutrioTrackDetails = () => {
  const coreFeatures = [
    {
      emoji: "📸",
      title: "KI-Fotoanalyse",
      items: [
        "Fotografiere deine Mahlzeit – die KI erkennt automatisch alle Lebensmittel",
        "Berechnet Kalorien, Protein, Fett und Kohlenhydrate",
        "Genauer und schneller als manuelles Tracking"
      ]
    },
    {
      emoji: "📊",
      title: "Barcode-Scanner",
      items: [
        "Scanne den Barcode von verpackten Lebensmitteln",
        "Sofort alle Nährwertangaben erhalten",
        "Unterstützt Millionen von Produkten weltweit"
      ]
    },
    {
      emoji: "🔍",
      title: "Lebensmittel-Datenbank",
      items: [
        "Umfangreiche Datenbank mit tausenden Lebensmitteln",
        "Schnelle Suche nach Lebensmitteln",
        "Einfach zum Tagebuch hinzufügen"
      ]
    },
    {
      emoji: "🎯",
      title: "Persönliche Ziele",
      items: [
        "Individuelle Kalorien- und Makroziele",
        "Basierend auf Alter, Gewicht, Größe und Aktivitätslevel",
        "Abnehmen, zunehmen oder halten"
      ]
    },
    {
      emoji: "⚖️",
      title: "Gewichtstracking",
      items: [
        "Interaktives Diagramm für deinen Gewichtsverlauf",
        "Trend-Analyse und Zielgewicht-Markierung",
        "Fortschritt auf einen Blick"
      ]
    },
    {
      emoji: "📅",
      title: "Ernährungsverlauf",
      items: [
        "Tages-, Wochen- und Monatsansicht",
        "Sieh genau, was du wann gegessen hast",
        "Erkenne Muster in deinem Essverhalten"
      ]
    }
  ];

  const smartExtras = [
    {
      emoji: "🏆",
      title: "Achievements & Badges",
      items: [
        "Abzeichen für Streaks, Meilensteine und erreichte Ziele",
        "Über 25 verschiedene Badges",
        "Teile deine Erfolge"
      ],
      isPro: true
    },
    {
      emoji: "💧",
      title: "Wasser-Tracker",
      items: [
        "Wasserkonsum im Blick behalten",
        "Einfacher Tap-Tracker auf dem Dashboard"
      ]
    },
    {
      emoji: "🥗",
      title: "Mikronährstoffe",
      items: [
        "Vitamine und Mineralstoffe tracken",
        "Von Vitamin A bis Zink",
        "Vollständiger Überblick über deine Ernährung"
      ],
      isPro: true
    },
    {
      emoji: "📋",
      title: "Rezepte speichern",
      items: [
        "Häufige Mahlzeiten als Rezepte speichern",
        "Mit einem Tap wieder hinzufügen",
        "Perfekt für Standard-Frühstück oder Meal-Prep"
      ],
      isPro: true
    },
    {
      emoji: "🌡️",
      title: "Kalender-Heatmap",
      items: [
        "Auf einen Blick sehen, an welchen Tagen du getrackt hast",
        "Tracking-Konsistenz über Wochen und Monate"
      ]
    },
    {
      emoji: "📊",
      title: "Wochenberichte",
      items: [
        "Wöchentliche Zusammenfassungen mit Durchschnittswerten",
        "Trends erkennen – weißt du, ob du auf Kurs bist"
      ],
      isPro: true
    },
    {
      emoji: "🔔",
      title: "Erinnerungen",
      items: [
        "Intelligente Erinnerungen für regelmäßiges Tracking",
        "Vergiss keine Mahlzeit"
      ]
    },
    {
      emoji: "🌙",
      title: "Dark Mode & Sprachen",
      items: [
        "Angenehm für die Augen, Tag und Nacht",
        "Komplett auf Deutsch und Englisch verfügbar"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Harbor Studios</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 bg-amber-500/20 text-amber-600 border-amber-500/30">
            🚧 In Entwicklung
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            NutrioTrack 🥗
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
            Dein smarter Ernährungsbegleiter
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Ernährung tracken war noch nie so einfach. Fotografiere dein Essen, und unsere KI erkennt 
            automatisch alle Lebensmittel mit Kalorien und Makronährstoffen. Kein mühsames Suchen, kein manuelles Eingeben.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Kernfunktionen
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Alles was du für smartes Ernährungstracking brauchst
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{feature.emoji}</span>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Extras */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Smarte Extras
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Noch mehr Features für dein Ernährungs-Erlebnis
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smartExtras.map((feature, index) => (
              <Card 
                key={index} 
                className={`border-2 hover:border-primary transition-all duration-300 hover:shadow-lg ${
                  feature.isPro ? 'border-amber-500/50 bg-gradient-to-br from-amber-500/5 to-transparent' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{feature.emoji}</span>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    {feature.isPro && (
                      <Badge variant="default" className="bg-amber-500 text-white text-xs ml-auto">
                        Pro
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Preise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <p className="text-3xl font-bold text-foreground">0 €</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "3 KI-Foto-Scans pro Tag",
                    "Barcode-Scanner & Lebensmittelsuche",
                    "Kalorien- & Makrotracking",
                    "Gewichtstracking"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-green-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Pro */}
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CardTitle className="text-2xl">Pro</CardTitle>
                  <Badge variant="default" className="bg-primary">Empfohlen</Badge>
                </div>
                <p className="text-3xl font-bold text-foreground">7,99 €<span className="text-lg text-muted-foreground font-normal">/Monat</span></p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Unbegrenzte KI-Foto-Scans",
                    "Mikronährstoff-Tracking",
                    "Rezepte & Favoriten",
                    "Achievements & Badges",
                    "Wochenberichte",
                    "7 Tage kostenlos testen"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-green-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About / Kurz gesagt */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Über NutrioTrack</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                NutrioTrack wird entwickelt von Harbor Studios aus Spanien. 
                Wir glauben, dass Ernährungstracking einfach sein sollte – ohne komplizierte Eingaben, 
                ohne endlose Suchen.{" "}
                <span className="text-foreground font-medium">
                  Einfach fotografieren und loslegen.
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">
              Fragen oder Feedback?
            </span>
          </div>
          <a
            href="mailto:support@harborstudios.app"
            className="text-primary hover:underline text-lg font-medium"
          >
            support@harborstudios.app
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            Wir freuen uns auf deine Nachricht!
          </p>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-8 px-4 border-t border-border/40">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Datenschutz
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Nutzungsbedingungen
            </Link>
            <Link to="/data-deletion" className="text-muted-foreground hover:text-primary transition-colors">
              Datenlöschung
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NutrioTrackDetails;
