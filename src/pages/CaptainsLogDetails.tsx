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
      title: "Logbuch & Reisen",
      items: [
        "Digitales Bordbuch mit Timeline-Einträgen (Wetter, Segel, Kurs, Notizen)",
        "GPS-Tracking mit inkrementeller Distanzberechnung",
        "Automatische und manuelle Voyage-Events",
        "Rückdatierte Einträge möglich",
        "Tagesansicht mit Segment-Darstellung",
        "Kartenansicht der gefahrenen Route (Leaflet)",
        "PDF-Export des Logbuchs mit Karten-Snapshots",
        "Reise als Community-Route teilen"
      ]
    },
    {
      emoji: "⚓",
      title: "Ankerwache",
      items: [
        "GPS-basierte Drift-Erkennung mit einstellbarem Radius",
        "Akustischer Alarm bei Drift",
        "Live-Karte mit Ankerposition und Schwojkreis"
      ],
      isPremium: true
    },
    {
      emoji: "📋",
      title: "Checklisten",
      items: [
        "Vorgefertigte Templates (Ablegen, Anlegen, Sturm, etc.)",
        "Eigene Checklisten erstellen und bearbeiten",
        "Checklisten-Runs mit Fortschrittsanzeige"
      ]
    },
    {
      emoji: "🚨",
      title: "Sicherheit & Notfall",
      items: [
        "Sicherheits-Checklisten (Rettungsmittel, Feuerschutz, etc.)",
        "Checklisten erweiterbar mit eigenen Punkten",
        "Medizinische Bordapotheke mit Ablaufdatum-Tracking",
        "Crew-Notfallkontakte und medizinische Infos",
        "Einkaufsliste für fehlende Sicherheitsausrüstung",
        "Sicherheitshinweise und Guidance-Texte"
      ],
      isPremium: true
    },
    {
      emoji: "⛵",
      title: "Bootsprofil & Verwaltung",
      items: [
        "Mehrere Boote verwalten (Boot-Switcher)",
        "Bootsdaten: Länge, Breite, Tiefgang, Verdrängung, Motor, Tanks",
        "Schwenkkiel-Unterstützung (min/max Tiefgang)",
        "Multi-Mast-Konfiguration mit dynamischer Segelgarderobe",
        "Notfall-Informationen: Kontakte, Versicherungen, MMSI, Rufzeichen",
        "Transducer-Konfiguration für Tiefenmessung"
      ]
    },
    {
      emoji: "💰",
      title: "Kassenbuch (Boots-Ausgabenbuch)",
      items: [
        "Eigenständige Kostenverwaltung pro Boot",
        "Kategorien: Versicherung, Reparatur, Ausrüstung, Liegeplatz, Treibstoff, u.v.m.",
        "Eigene Kategorien hinzufügen und wiederverwenden",
        "Quittungs-Upload (PDF, JPG, PNG, max 10 MB)",
        "Jahres- und Kategorie-Filter mit Summenzeile",
        "PDF-Export mit Zeitraum- und Kategorie-Angabe",
        "Ideal für Bootsverkauf oder Steuerübersicht"
      ]
    },
    {
      emoji: "📄",
      title: "Dokumente",
      items: [
        "Bootsdokumente hochladen und verwalten",
        "Kategorisierung und Metadaten"
      ],
      isPremium: true
    },
    {
      emoji: "🛒",
      title: "Einkaufsliste",
      items: [
        "Boots-Einkaufsliste mit Artikelverwaltung"
      ]
    },
    {
      emoji: "🧰",
      title: "Wartung",
      items: [
        "Wartungsplan mit Intervallen (Stunden/Monate)",
        "Betriebsstunden-Erfassung",
        "Wartungsvorlagen (Templates)",
        "Statusanzeige (fällig, überfällig, ok)",
        "Wartungshistorie mit Einträgen"
      ],
      isPremium: true
    },
    {
      emoji: "🥫",
      title: "Proviant",
      items: [
        "Proviantlisten erstellen und verwalten",
        "Vorlagen für verschiedene Törndauern",
        "Mengenberechnung nach Crew-Größe",
        "PDF-Export der Proviantliste"
      ]
    },
    {
      emoji: "📚",
      title: "Seemanns-Bibliothek",
      items: [
        "Glossar (Seemannsbegriffe)",
        "Knotenkunde",
        "Manöver-Referenz",
        "Funkverkehr-Protokolle",
        "Beaufort-Skala",
        "Flaggenalphabet"
      ]
    },
    {
      emoji: "🗺️",
      title: "Segelrouten",
      items: [
        "Klassische Segelrouten mit Beschreibungen",
        "Community-Routen (von Nutzern geteilt)",
        "Weltkarte mit Routenübersicht"
      ],
      isPremium: true
    },
    {
      emoji: "📖",
      title: "Handbuch",
      items: [
        "Integriertes App-Handbuch"
      ]
    },
    {
      emoji: "📡",
      title: "SignalK / NMEA Integration",
      items: [
        "Verbindung mit SignalK-Server (Bordinstrumente)",
        "Live-Datenanzeige (Wind, Tiefe, Position)",
        "Verbindungsprofile speichern",
        "Setup-Wizard für einfache Konfiguration",
        "Mixed-Content-Handling",
        "Zugriffsanfrage-Dialog"
      ]
    },
    {
      emoji: "🌤️",
      title: "Wetter",
      items: [
        "Wetterwidget mit aktuellen Daten",
        "Windkompass-Anzeige",
        "Tiefenmesser mit Tiefgangs-Slider"
      ]
    },
    {
      emoji: "🏛️",
      title: "Digitales Vermächtnis (Legacy)",
      items: [
        "Zugang zu Bootsdaten für Vertrauenspersonen einrichten",
        "Verifizierung per E-Mail-Token",
        "Kontaktperson-Verwaltung"
      ]
    },
    {
      emoji: "⚙️",
      title: "Technik & Plattform",
      items: [
        "Offline-First mit IndexedDB (Dexie)",
        "Automatische Synchronisation bei Verbindung",
        "PWA-Installation (iOS, Android, Desktop)",
        "7 Sprachen: DE, EN, FR, ES, IT, NL, PT",
        "Revisionssichere Hash-Chain (Blockchain-Prinzip)",
        "Dark/Light Mode",
        "Responsive Design (Mobile-First)"
      ]
    },
    {
      emoji: "🔒",
      title: "Sicherheit & Datenschutz",
      items: [
        "Row-Level-Security auf allen Tabellen",
        "DSGVO-konform",
        "Datenlösch-Funktion (Account + Daten)",
        "Impressum, Datenschutz, AGB in allen Sprachen"
      ]
    },
    {
      emoji: "💎",
      title: "Premium / Abo",
      items: [
        "Stripe-Integration mit Checkout",
        "Kundenportal für Abo-Verwaltung",
        "Lifetime-Lizenz-Option",
        "Premium-Features: Ankerwache, Sicherheit, Wartung, Dokumente, Kassenbuch, Segelrouten"
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
            🚀 Feature-Übersicht
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
