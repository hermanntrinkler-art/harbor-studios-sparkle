import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, Globe, MapPin, FileText, Link as LinkIcon, Scale, Shield } from "lucide-react";
import CaptainsLogFooter from "./CaptainsLogFooter";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', path: '/captains-log/imprint' },
  { code: 'en', name: 'English', flag: '🇬🇧', path: '/captains-log/imprint/en' },
  { code: 'es', name: 'Español', flag: '🇪🇸', path: '/captains-log/imprint/es' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', path: '/captains-log/imprint/fr' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', path: '/captains-log/imprint/it' },
  { code: 'pt', name: 'Português', flag: '🇧🇷', path: '/captains-log/imprint/pt' },
];

const CaptainsLogImprintIT = () => {
  const navigate = useNavigate();
  const currentLanguage = languages.find(lang => lang.code === 'it')!;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            className="group"
            onClick={() => navigate('/projects/captains-log/it')}
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Indietro
          </Button>
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
      
      <div className="container mx-auto px-4 py-8 max-w-4xl pt-24">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Note Legali – Captain Log</h1>
          <p className="text-muted-foreground text-lg">Informazioni Legali</p>
        </div>

        <div className="space-y-6">
          {/* Fornitore */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                1. Fornitore / Responsabile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="font-semibold">Harbor Studios</p>
              <p>Calle Calima Sector 1, Riosol 167</p>
              <p>35627 Costa Calma</p>
              <p>Spagna</p>
              <div className="flex items-center gap-2 mt-4">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:support@harborstudios.app" className="text-primary hover:underline">
                  support@harborstudios.app
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <a href="https://harborstudios.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://harborstudios.app
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Responsabile del contenuto */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                2. Responsabile del Contenuto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Harbor Studios</p>
              <p className="text-muted-foreground">Indirizzo come sopra</p>
            </CardContent>
          </Card>

          {/* Ambito di applicazione */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-primary" />
                3. Ambito di Applicazione delle Note Legali
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Queste note legali si applicano alle seguenti offerte digitali di Harbor Studios:</p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold">Captain Log – Giornale di Bordo Digitale per Navigatori</p>
                <a href="https://captainlog.pro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://captainlog.pro
                </a>
              </div>
              <p className="text-muted-foreground">nonché alle versioni web, app e PWA associate.</p>
            </CardContent>
          </Card>

          {/* Responsabilità per i contenuti */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                4. Responsabilità per i Contenuti
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>I contenuti delle nostre applicazioni e siti web sono creati con la massima cura. Tuttavia, non possiamo garantire l'accuratezza, la completezza o l'attualità dei contenuti.</p>
              <p>In qualità di fornitori di servizi, siamo responsabili dei nostri contenuti in conformità con le disposizioni legali generali. Tuttavia, non siamo obbligati a monitorare le informazioni trasmesse o memorizzate da terzi né a indagare su circostanze che indicano attività illegali.</p>
            </CardContent>
          </Card>

          {/* Responsabilità per i link esterni */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-primary" />
                5. Responsabilità per i Link Esterni
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Le nostre offerte possono contenere link a siti web esterni di terze parti sul cui contenuto non abbiamo alcun controllo. Pertanto, non possiamo assumerci alcuna responsabilità per questi contenuti di terze parti. Il rispettivo fornitore o operatore delle pagine collegate è sempre responsabile del loro contenuto.</p>
            </CardContent>
          </Card>

          {/* Diritto d'autore */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                6. Diritto d'Autore
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>I contenuti e le opere creati da Harbor Studios sono soggetti al diritto d'autore. La riproduzione, la modifica, la distribuzione o qualsiasi altro utilizzo oltre i limiti del diritto d'autore richiede il previo consenso scritto.</p>
            </CardContent>
          </Card>

          {/* Privacy e legale */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                7. Privacy e Legale
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Puoi trovare informazioni sul trattamento dei dati personali e i nostri termini legali qui:</p>
              <div className="flex flex-col gap-2">
                <Link to="/captains-log/privacy" className="text-primary hover:underline flex items-center gap-2">
                  👉 Informativa sulla Privacy
                </Link>
                <Link to="/captains-log/terms" className="text-primary hover:underline flex items-center gap-2">
                  👉 Termini di Utilizzo
                </Link>
                <Link to="/captains-log/data-deletion" className="text-primary hover:underline flex items-center gap-2">
                  👉 Informazioni sulla Cancellazione dei Dati
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <CaptainsLogFooter />
    </div>
  );
};

export default CaptainsLogImprintIT;