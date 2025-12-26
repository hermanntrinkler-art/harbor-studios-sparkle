import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Mail, Globe } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', path: '/projects/captains-log' },
  { code: 'en', name: 'English', flag: '🇬🇧', path: '/projects/captains-log/en' },
  { code: 'es', name: 'Español', flag: '🇪🇸', path: '/projects/captains-log/es' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', path: '/projects/captains-log/fr' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', path: '/projects/captains-log/it' },
  { code: 'pt', name: 'Português', flag: '🇧🇷', path: '/projects/captains-log/pt' },
];

const CaptainsLogDetails = () => {
  const navigate = useNavigate();
  const currentLanguage = languages.find(lang => lang.code === 'de')!;

  const features = [
    {
      emoji: "📔",
      title: "Digitales Logbuch & Törnverwaltung",
      items: [
        "Anlegen und Verwalten kompletter Törns",
        "Automatische Erfassung von Start, Ziel, Dauer und Strecke",
        "Protokollierung von Manövern, Kursänderungen und Ereignissen",
        "Freie Notizen zu jedem Zeitpunkt",
        "Übersichtliche Statistiken zu Distanz, Zeit und Nutzung"
      ]
    },
    {
      emoji: "⚓",
      title: "GPS- & Positionsfunktionen",
      items: [
        "Automatische Positionsaufzeichnung während der Fahrt",
        "Erkennung von Ankern, Manövern und Stopps",
        "Dynamischer Tiefgang (z. B. bei Schwenkkielbooten)",
        "Optionaler Import über Signal K (Bordnetz)"
      ]
    },
    {
      emoji: "🧭",
      title: "Ankerwache & Sicherheit",
      items: [
        "Setzen eines Ankerpunkts mit Schwojkreis",
        "Permanente Überwachung der Position",
        "Alarm bei Positionsabweichung",
        "Offline-fähig – funktioniert auch ohne Internetverbindung"
      ]
    },
    {
      emoji: "🧰",
      title: "Wartung & Bootsdaten",
      items: [
        "Verwaltung von Bootsdaten (Maße, Motor, Segel, Tanks)",
        "Wartungspläne mit Intervallen (Zeit oder Betriebsstunden)",
        "Historie aller durchgeführten Arbeiten",
        "Automatische Berechnung von Betriebsstunden",
        "Übersichtlicher Wartungsstatus (OK / fällig / überfällig)"
      ]
    },
    {
      emoji: "📋",
      title: "Checklisten & Abläufe",
      items: [
        "Vordefinierte Checklisten (Ablegen, Ankern, Nachtfahrt usw.)",
        "Eigene Checklisten anlegen",
        "Fortschritt pro Durchgang sichtbar",
        "Ideal für Crew-Wechsel oder wiederkehrende Abläufe"
      ]
    },
    {
      emoji: "📚",
      title: "Wissensbereich",
      items: [
        "Nautisches Lexikon",
        "Knoten- und Manöverübersichten",
        "Funk- & Notfallprozeduren (Mayday, Pan-Pan, Sécurité)",
        "Internationales Flaggenalphabet",
        "Integrierte Suchfunktion"
      ]
    },
    {
      emoji: "🗺️",
      title: "Export & Dokumentation",
      items: [
        "PDF-Export vollständiger Logbücher",
        "GPX- und KML-Export für Navigationssoftware",
        "Vollständige Datensicherung und Wiederherstellung"
      ]
    },
    {
      emoji: "🔒",
      title: "Sicherheit & Datenschutz",
      items: [
        "Persönliche Daten bleiben privat",
        "Keine Weitergabe an Dritte",
        "Volle Kontrolle über Löschung und Export",
        "Revisionssichere Speicherung der Logdaten",
        "DSGVO-konforme Verarbeitung"
      ]
    },
    {
      emoji: "⚙️",
      title: "Technik & Plattform",
      items: [
        "Progressive Web App (PWA)",
        "Läuft auf Smartphone, Tablet und Desktop",
        "Offline nutzbar",
        "Synchronisation bei bestehender Verbindung",
        "Optional: Signal-K-Anbindung für Borddaten"
      ]
    },
    {
      emoji: "💎",
      title: "Premium-Funktionen",
      items: [
        "Signal-K-Integration",
        "Erweiterte Wartungsfunktionen",
        "Wetter- & Gezeitendaten",
        "Eigene Checklisten",
        "Zukünftige Premium-Features inklusive"
      ],
      isPremium: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Zurück</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                <span>{currentLanguage.flag} {currentLanguage.code.toUpperCase()}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 bg-background">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => navigate(lang.path)}
                  className={`cursor-pointer ${lang.code === 'de' ? 'bg-primary/10' : ''}`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 bg-green-500/20 text-green-600 border-green-500/30">
            Live
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Captain's Log ⚓️
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
            Dein digitales Logbuch für echte Segler
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Captain's Log ist eine moderne, offlinefähige Logbuch-App für Seglerinnen und Segler, 
            die ihr Boot, ihre Törns und ihre Daten zuverlässig dokumentieren möchten – ohne unnötige Komplexität.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#features">
              <Button size="lg" variant="outline">
                🚀 Zentrale Funktionen
              </Button>
            </a>
            <a href="https://captainlog.pro/" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                Zur App
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            🚀 Zentrale Funktionen
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Alles was du für dein digitales Bordbuch brauchst
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`border-2 hover:border-primary transition-all duration-300 hover:shadow-lg ${
                  feature.isPremium ? 'border-amber-500/50 bg-gradient-to-br from-amber-500/5 to-transparent' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{feature.emoji}</span>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    {feature.isPremium && (
                      <Badge variant="default" className="bg-amber-500 text-white text-xs ml-auto">
                        Premium
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
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

      {/* Kurz gesagt */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Kurz gesagt</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Captain's Log ist kein Navigationssystem, sondern dein digitales Bordbuch.
                <br />
                <span className="text-foreground font-medium">
                  Es denkt mit, dokumentiert zuverlässig und hilft dir, den Überblick zu behalten – ohne dich zu bevormunden.
                </span>
              </p>
              <a href="https://captainlog.pro/" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Jetzt Captain's Log entdecken
                </Button>
              </a>
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
            <Link 
              to="/captains-log/imprint" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Impressum
            </Link>
            <Link 
              to="/captains-log/privacy" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Datenschutz
            </Link>
            <Link 
              to="/captains-log/terms" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Nutzungsbedingungen
            </Link>
            <Link 
              to="/captains-log/data-deletion" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Datenlöschung
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaptainsLogDetails;
