import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Mail, Smartphone, Clock, Shield, Info, CheckCircle, Globe } from "lucide-react";
import CaptainsLogFooter from "./CaptainsLogFooter";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "de", label: "🇩🇪 Deutsch", path: "/captains-log/data-deletion" },
  { code: "en", label: "🇬🇧 English", path: "/captains-log/data-deletion/en" },
  { code: "es", label: "🇪🇸 Español", path: "/captains-log/data-deletion/es" },
  { code: "fr", label: "🇫🇷 Français", path: "/captains-log/data-deletion/fr" },
  { code: "it", label: "🇮🇹 Italiano", path: "/captains-log/data-deletion/it" },
  { code: "pt", label: "🇧🇷 Português", path: "/captains-log/data-deletion/pt" },
];

const CaptainsLogDataDeletionIT = () => {
  const navigate = useNavigate();
  const currentLang = languages.find(l => l.code === "it");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      {/* Navigation Bar */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Button
          variant="ghost"
          className="group"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Indietro
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Globe className="mr-2 h-4 w-4" />
              {currentLang?.label}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => navigate(lang.path)}
                className={lang.code === "it" ? "bg-accent" : ""}
              >
                {lang.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Cancellazione Dati</h1>
          <p className="text-muted-foreground text-lg">Captain Log – Come eliminare i tuoi dati</p>
        </div>

        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Hai il diritto di richiedere la cancellazione dei tuoi dati personali in qualsiasi momento. Ecco come funziona.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          {/* Option 1: In the App */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                Opzione 1: Elimina i dati nell'app
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Puoi eliminare i tuoi dati direttamente nell'app Captain Log:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Apri l'app Captain Log</li>
                <li>Vai su <strong>Impostazioni</strong></li>
                <li>Seleziona <strong>Account e Dati</strong></li>
                <li>Tocca <strong>Elimina tutti i dati</strong> o <strong>Elimina account</strong></li>
                <li>Conferma l'eliminazione</li>
              </ol>
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Questa azione ha effetto immediato e non può essere annullata.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Option 2: Via Email */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Opzione 2: Richiedi cancellazione via email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Puoi anche inviarci un'email per richiedere la cancellazione dei tuoi dati:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Invia un'email a:</p>
                <a href="mailto:support@harborstudios.app?subject=Cancellazione%20Dati%20Captain%20Log" className="text-primary hover:underline text-lg">
                  support@harborstudios.app
                </a>
              </div>
              <p className="text-muted-foreground">Per favore includi le seguenti informazioni nella tua email:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Oggetto: "Cancellazione Dati Captain Log"</li>
                <li>L'indirizzo email del tuo account</li>
                <li>Opzionale: Motivo della cancellazione (ci aiuta a migliorare il nostro servizio)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Processing Time */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Tempo di Elaborazione
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                <strong>Eliminazione nell'app:</strong> Effetto immediato
              </p>
              <p className="text-muted-foreground">
                <strong>Eliminazione via email:</strong> Elaboreremo la tua richiesta entro 7 giorni e ti informeremo al completamento. Tutti i dati personali saranno completamente rimossi.
              </p>
            </CardContent>
          </Card>

          {/* What gets deleted */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Cosa viene eliminato?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">Una cancellazione completa dei dati rimuove le seguenti informazioni:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Tutte le voci del diario di bordo</li>
                <li>Informazioni sulla barca</li>
                <li>Dati dell'equipaggio</li>
                <li>Impostazioni e preferenze</li>
                <li>Informazioni dell'account (quando si elimina l'account)</li>
              </ul>
              <Alert className="mt-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Le statistiche di utilizzo anonimizzate e aggregate possono essere conservate per scopi di analisi, ma non contengono dati personali.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Domande?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Se hai domande sulla cancellazione dei dati o sulla privacy, siamo qui per aiutarti:
              </p>
              <a href="mailto:support@harborstudios.app" className="text-primary hover:underline flex items-center gap-2 text-lg">
                <Mail className="h-4 w-4" />
                support@harborstudios.app
              </a>
              <div className="pt-4">
                <Button asChild variant="outline">
                  <Link to="/captains-log/privacy/it">
                    Vedi Informativa sulla Privacy
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <CaptainsLogFooter />
    </div>
  );
};

export default CaptainsLogDataDeletionIT;
