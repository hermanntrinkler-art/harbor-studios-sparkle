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

const CaptainsLogDetailsIT = () => {
  const navigate = useNavigate();
  const currentLanguage = languages.find(lang => lang.code === 'it')!;

  const features = [
    {
      emoji: "📔",
      title: "Giornale di Bordo e Traversate",
      items: [
        "Giornale di bordo digitale con voci cronologiche (meteo, vele, rotta, note)",
        "Tracciamento GPS con calcolo incrementale della distanza",
        "Eventi di traversata automatici e manuali",
        "Voci retrodatate possibili",
        "Vista giornaliera con segmenti",
        "Vista mappa della rotta percorsa (Leaflet)",
        "Export PDF del giornale con screenshot della mappa",
        "Condividere la traversata come rotta comunitaria"
      ]
    },
    {
      emoji: "⚓",
      title: "Guardia all'Ancora",
      items: [
        "Rilevamento deriva GPS con raggio regolabile",
        "Allarme acustico in caso di deriva",
        "Mappa in tempo reale con posizione ancora e cerchio di bordata"
      ],
      isPremium: true
    },
    {
      emoji: "📋",
      title: "Checklist",
      items: [
        "Template predefiniti (partenza, attracco, tempesta, ecc.)",
        "Creare e modificare checklist personalizzate",
        "Esecuzioni con indicatore di progresso"
      ]
    },
    {
      emoji: "🚨",
      title: "Sicurezza ed Emergenza",
      items: [
        "Checklist di sicurezza (equipaggiamento di salvataggio, antincendio, ecc.)",
        "Checklist espandibili con punti personalizzati",
        "Kit medico con tracciamento date di scadenza",
        "Contatti di emergenza e info mediche dell'equipaggio",
        "Lista acquisti per equipaggiamento di sicurezza mancante",
        "Consigli di sicurezza e testi guida"
      ],
      isPremium: true
    },
    {
      emoji: "⛵",
      title: "Profilo Barca e Gestione",
      items: [
        "Gestire più barche (selettore barca)",
        "Dati: lunghezza, larghezza, pescaggio, dislocamento, motore, serbatoi",
        "Supporto chiglia basculante (pescaggio min/max)",
        "Configurazione multi-albero con guardaroba vele dinamico",
        "Info emergenza: contatti, assicurazioni, MMSI, nominativo",
        "Configurazione trasduttore per misurazione profondità"
      ]
    },
    {
      emoji: "💰",
      title: "Libro Cassa (Spese della Barca)",
      items: [
        "Gestione costi indipendente per barca",
        "Categorie: assicurazione, riparazione, equipaggiamento, posto barca, carburante, e altro",
        "Aggiungere e riutilizzare categorie personalizzate",
        "Upload ricevute (PDF, JPG, PNG, max 10 MB)",
        "Filtri per anno e categoria con riga totali",
        "Export PDF con periodo e categoria",
        "Ideale per vendita barca o panoramica fiscale"
      ]
    },
    {
      emoji: "📄",
      title: "Documenti",
      items: [
        "Caricare e gestire documenti della barca",
        "Categorizzazione e metadati"
      ],
      isPremium: true
    },
    {
      emoji: "🛒",
      title: "Lista della Spesa",
      items: [
        "Lista della spesa per la barca con gestione articoli"
      ]
    },
    {
      emoji: "🧰",
      title: "Manutenzione",
      items: [
        "Piano di manutenzione con intervalli (ore/mesi)",
        "Registrazione ore motore",
        "Template di manutenzione",
        "Indicatore di stato (da fare, in ritardo, ok)",
        "Cronologia manutenzione con voci"
      ],
      isPremium: true
    },
    {
      emoji: "🥫",
      title: "Provviste",
      items: [
        "Creare e gestire liste di provviste",
        "Template per diverse durate di navigazione",
        "Calcolo quantità per dimensione equipaggio",
        "Export PDF della lista provviste"
      ]
    },
    {
      emoji: "📚",
      title: "Biblioteca Marinara",
      items: [
        "Glossario (termini nautici)",
        "Guida ai nodi",
        "Riferimento manovre",
        "Protocolli di comunicazione radio",
        "Scala Beaufort",
        "Alfabeto delle bandiere"
      ]
    },
    {
      emoji: "🗺️",
      title: "Rotte di Navigazione",
      items: [
        "Rotte di navigazione classiche con descrizioni",
        "Rotte comunitarie (condivise dagli utenti)",
        "Mappa mondiale con panoramica rotte"
      ],
      isPremium: true
    },
    {
      emoji: "📖",
      title: "Manuale",
      items: [
        "Manuale integrato dell'applicazione"
      ]
    },
    {
      emoji: "📡",
      title: "Integrazione SignalK / NMEA",
      items: [
        "Connessione al server SignalK (strumenti di bordo)",
        "Visualizzazione dati in tempo reale (vento, profondità, posizione)",
        "Salvare profili di connessione",
        "Assistente di configurazione",
        "Gestione contenuto misto",
        "Dialogo richiesta accesso"
      ]
    },
    {
      emoji: "🌤️",
      title: "Meteo",
      items: [
        "Widget meteo con dati attuali",
        "Bussola del vento",
        "Indicatore di profondità con cursore pescaggio"
      ]
    },
    {
      emoji: "🏛️",
      title: "Eredità Digitale",
      items: [
        "Configurare accesso ai dati della barca per persone fidate",
        "Verifica tramite token email",
        "Gestione persone di contatto"
      ]
    },
    {
      emoji: "⚙️",
      title: "Tecnologia e Piattaforma",
      items: [
        "Offline-first con IndexedDB (Dexie)",
        "Sincronizzazione automatica quando connesso",
        "Installazione PWA (iOS, Android, Desktop)",
        "7 lingue: DE, EN, FR, ES, IT, NL, PT",
        "Catena hash a prova di revisione (principio blockchain)",
        "Modalità scura/chiara",
        "Design responsive (mobile-first)"
      ]
    },
    {
      emoji: "🔒",
      title: "Sicurezza e Privacy",
      items: [
        "Sicurezza a livello di riga su tutte le tabelle",
        "Conforme al GDPR",
        "Funzione eliminazione dati (account + dati)",
        "Note legali, privacy, condizioni in tutte le lingue"
      ]
    },
    {
      emoji: "💎",
      title: "Premium / Abbonamento",
      items: [
        "Integrazione Stripe con checkout",
        "Portale cliente per gestione abbonamento",
        "Opzione licenza a vita",
        "Feature premium: guardia ancora, sicurezza, manutenzione, documenti, libro cassa, rotte"
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
            <span className="font-medium">Indietro</span>
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
                  className={`cursor-pointer ${lang.code === 'it' ? 'bg-primary/10' : ''}`}
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
            Online
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Captain's Log ⚓️
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
            Il Tuo Giornale di Bordo Digitale per Veri Navigatori
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Captain's Log è un'applicazione di giornale di bordo moderna e funzionante offline per navigatori 
            che vogliono documentare in modo affidabile la loro barca, le loro traversate e i loro dati – senza complessità inutile.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://captainlog.pro/" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                Vai all'App
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            🚀 Panoramica delle Funzionalità
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Tutto ciò di cui hai bisogno per il tuo giornale di bordo digitale
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

      {/* In a nutshell */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-3xl text-center">In Sintesi</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Captain's Log non è un sistema di navigazione, ma il tuo giornale di bordo digitale.
                <br />
                <span className="text-foreground font-medium">
                  Pensa in anticipo, documenta in modo affidabile e ti aiuta a mantenere il controllo – senza essere paternalistico.
                </span>
              </p>
              <a href="https://captainlog.pro/" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Scopri Captain's Log Ora
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
              Domande o feedback?
            </span>
          </div>
          <a
            href="mailto:support@harborstudios.app"
            className="text-primary hover:underline text-lg font-medium"
          >
            support@harborstudios.app
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            Non vediamo l'ora di sentirti!
          </p>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-8 px-4 border-t border-border/40">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link 
              to="/captains-log/imprint/it" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Note Legali
            </Link>
            <Link 
              to="/captains-log/privacy" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Informativa sulla Privacy
            </Link>
            <Link 
              to="/captains-log/terms" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Termini di Utilizzo
            </Link>
            <Link 
              to="/captains-log/data-deletion" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Eliminazione Dati
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaptainsLogDetailsIT;
