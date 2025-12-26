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
      title: "Giornale di Bordo Digitale e Gestione delle Traversate",
      items: [
        "Creare e gestire traversate complete",
        "Registrazione automatica di partenza, destinazione, durata e distanza",
        "Registrare manovre, cambi di rotta ed eventi",
        "Note libere in qualsiasi momento",
        "Statistiche chiare su distanza, tempo e utilizzo"
      ]
    },
    {
      emoji: "⚓",
      title: "GPS e Funzioni di Posizione",
      items: [
        "Registrazione automatica della posizione durante la navigazione",
        "Rilevamento dell'ancoraggio, manovre e soste",
        "Pescaggio dinamico (es. per barche a chiglia basculante)",
        "Importazione opzionale via Signal K (rete di bordo)"
      ]
    },
    {
      emoji: "🧭",
      title: "Guardia all'Ancora e Sicurezza",
      items: [
        "Impostare punto di ancoraggio con cerchio di bordata",
        "Monitoraggio permanente della posizione",
        "Allarme in caso di deriva",
        "Funziona offline – opera senza connessione internet"
      ]
    },
    {
      emoji: "🧰",
      title: "Manutenzione e Dati della Barca",
      items: [
        "Gestione dei dati della barca (dimensioni, motore, vele, serbatoi)",
        "Programmi di manutenzione con intervalli (tempo o ore di funzionamento)",
        "Cronologia di tutti i lavori completati",
        "Calcolo automatico delle ore di funzionamento",
        "Stato di manutenzione chiaro (OK / da fare / in ritardo)"
      ]
    },
    {
      emoji: "📋",
      title: "Checklist e Procedure",
      items: [
        "Checklist predefinite (partenza, ancoraggio, navigazione notturna, ecc.)",
        "Creare checklist personalizzate",
        "Progresso visibile per esecuzione",
        "Ideale per cambi di equipaggio o procedure ricorrenti"
      ]
    },
    {
      emoji: "📚",
      title: "Base di Conoscenze",
      items: [
        "Dizionario nautico",
        "Panoramiche di nodi e manovre",
        "Procedure radio e di emergenza (Mayday, Pan-Pan, Sécurité)",
        "Alfabeto delle bandiere internazionale",
        "Funzione di ricerca integrata"
      ]
    },
    {
      emoji: "🗺️",
      title: "Esportazione e Documentazione",
      items: [
        "Esportazione PDF dei giornali di bordo completi",
        "Esportazione GPX e KML per software di navigazione",
        "Backup e recupero completo dei dati"
      ]
    },
    {
      emoji: "🔒",
      title: "Sicurezza e Privacy",
      items: [
        "I dati personali rimangono privati",
        "Nessuna condivisione con terze parti",
        "Controllo totale su eliminazione ed esportazione",
        "Archiviazione verificabile dei dati di bordo",
        "Trattamento conforme al GDPR"
      ]
    },
    {
      emoji: "⚙️",
      title: "Tecnologia e Piattaforma",
      items: [
        "Progressive Web App (PWA)",
        "Funziona su smartphone, tablet e desktop",
        "Utilizzabile offline",
        "Sincronizzazione quando connesso",
        "Opzionale: Connessione Signal-K per dati di bordo"
      ]
    },
    {
      emoji: "💎",
      title: "Funzionalità Premium",
      items: [
        "Integrazione Signal-K",
        "Funzioni di manutenzione estese",
        "Dati meteo e maree",
        "Checklist personalizzate",
        "Future funzionalità premium incluse"
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
            <a href="#features">
              <Button size="lg" variant="outline">
                🚀 Funzionalità Principali
              </Button>
            </a>
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
            🚀 Funzionalità Principali
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
              to="/captains-log/imprint" 
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
