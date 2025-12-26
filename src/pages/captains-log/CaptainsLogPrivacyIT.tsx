import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Database, Cookie, Clock, UserCheck, Mail, Info, Globe, FileText, Lock } from "lucide-react";
import CaptainsLogFooter from "./CaptainsLogFooter";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', path: '/captains-log/privacy' },
  { code: 'en', name: 'English', flag: '🇬🇧', path: '/captains-log/privacy/en' },
  { code: 'es', name: 'Español', flag: '🇪🇸', path: '/captains-log/privacy/es' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', path: '/captains-log/privacy/fr' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', path: '/captains-log/privacy/it' },
  { code: 'pt', name: 'Português', flag: '🇧🇷', path: '/captains-log/privacy/pt' },
];

const CaptainsLogPrivacyIT = () => {
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
            onClick={() => window.history.back()}
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
          <h1 className="text-4xl font-bold mb-4">Informativa sulla Privacy – Captain's Log</h1>
        </div>

        <div className="space-y-6">
          {/* 1. Titolare del Trattamento */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                1. Titolare del Trattamento
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

          {/* 2. Informazioni Generali */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                2. Informazioni Generali
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                La protezione dei tuoi dati personali è importante per noi.
                Questa informativa sulla privacy ti informa su quali dati personali vengono raccolti, elaborati e memorizzati in relazione all'uso della nostra app Captain's Log.
              </p>
              <p className="text-muted-foreground">
                Trattiamo i tuoi dati in modo confidenziale e in conformità con le normative applicabili sulla protezione dei dati, in particolare il Regolamento Generale sulla Protezione dei Dati (GDPR) e il TTDSG.
              </p>
            </CardContent>
          </Card>

          {/* 3. Raccolta e Utilizzo */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                3. Raccolta e Utilizzo dei Dati Personali
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">a) Durante l'Utilizzo dell'App</h4>
                <p className="text-muted-foreground mb-4">
                  Captain's Log elabora solo i dati che fornisci tu stesso o che generi attivamente. Questi includono in particolare:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>il tuo indirizzo email (per la registrazione e l'autenticazione)</li>
                  <li>voci del giornale di bordo, note e dati di viaggio che crei tu stesso</li>
                  <li>foto opzionali che carichi tramite la fotocamera o dalla tua galleria</li>
                  <li>dati di posizione (GPS) e informazioni meteorologiche utilizzati per la registrazione automatica, la visualizzazione e la documentazione dei tuoi viaggi nel giornale di bordo</li>
                </ul>
                <p className="text-muted-foreground">
                  Questi dati vengono utilizzati esclusivamente per fornire le funzioni principali dell'app, in particolare per memorizzare, gestire e visualizzare le tue voci del giornale di bordo.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">b) Archiviazione ed Elaborazione dei Dati</h4>
                <p className="text-muted-foreground mb-2">
                  L'archiviazione e la gestione dei dati vengono effettuate tramite Supabase, un fornitore di servizi cloud europeo utilizzato come responsabile del trattamento ai sensi dell'Art. 28 del GDPR.
                </p>
                <p className="text-muted-foreground mb-2">
                  La trasmissione e l'archiviazione dei dati sono crittografate (TLS per la trasmissione, AES-256 per l'archiviazione).
                </p>
                <p className="text-muted-foreground">
                  I dati personali non vengono condivisi con terze parti per scopi pubblicitari, analitici o altri scopi commerciali.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">c) Nessuna Divulgazione a Terzi</h4>
                <p className="text-muted-foreground">
                  I tuoi dati personali non saranno venduti, affittati o condivisi con altre aziende a meno che non vi sia un obbligo legale di farlo.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 4. Cookie e Tracciamento */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-primary" />
                4. Cookie e Tracciamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Captain's Log non utilizza cookie, strumenti di analisi o servizi di tracciamento o pubblicità.
              </p>
              <p className="text-muted-foreground">
                Tutta la comunicazione tra l'app e il server avviene esclusivamente tramite connessioni HTTPS crittografate.
              </p>
            </CardContent>
          </Card>

          {/* 5. Archiviazione e Cancellazione dei Dati */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                5. Archiviazione e Cancellazione dei Dati
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                I dati personali (ad esempio, indirizzo email, voci del giornale di bordo, dati di posizione, foto) vengono elaborati esclusivamente per il funzionamento dell'applicazione e memorizzati in un database protetto.
              </p>
              <p className="text-muted-foreground">
                Gli utenti possono eliminare singole voci e contenuti caricati in qualsiasi momento all'interno dell'applicazione. Inoltre, è possibile eliminare completamente l'account utente. In questo caso, tutti i dati personali saranno eliminati in modo completo e irreversibile entro un massimo di 7 giorni, a meno che non si applichino requisiti legali di conservazione.
              </p>

              {/* Voci del giornale di bordo a prova di revisione */}
              <div className="mt-6 pt-6 border-t border-border/40">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Voci del Giornale di Bordo a Prova di Revisione
                </h4>
                <p className="text-muted-foreground mb-4">
                  Alcune voci del giornale di bordo (ad esempio, registri di viaggio o eventi) vengono archiviate in modo a prova di revisione. La modifica o la cancellazione successiva di singole voci è tecnicamente impossibile.
                </p>
                <p className="text-muted-foreground mb-4">
                  Questo serve a preservare l'integrità dei dati e la tracciabilità nel senso di un giornale di bordo navale appropriato, in particolare in relazione a possibili questioni assicurative, di responsabilità o probatorie.
                </p>
                <p className="text-muted-foreground mb-4">
                  L'archiviazione si basa sull'Art. 6(1)(f) del GDPR (interesse legittimo) e sull'Art. 17(3)(e) del GDPR (eccezione al diritto alla cancellazione per l'accertamento, l'esercizio o la difesa di un diritto in sede giudiziaria).
                </p>
                <p className="text-muted-foreground">
                  Il diritto dell'utente di far cancellare il proprio account completo in qualsiasi momento rimane inalterato. In questo caso, tutti i dati personali associati saranno completamente rimossi.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 6. Diritti dell'Interessato */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-primary" />
                6. Diritti dell'Interessato
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Hai il diritto in qualsiasi momento di:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>ottenere informazioni sui tuoi dati personali memorizzati</li>
                <li>richiedere la correzione di dati inesatti o incompleti</li>
                <li>richiedere la cancellazione o la limitazione del trattamento dei tuoi dati</li>
                <li>opporti al trattamento dei tuoi dati</li>
                <li>revocare il consenso in qualsiasi momento con effetto per il futuro</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Puoi inviare richieste relative ai tuoi diritti in qualsiasi momento via email a:
              </p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:support@harborstudios.app" className="text-primary hover:underline">
                  support@harborstudios.app
                </a>
              </div>
            </CardContent>
          </Card>

          {/* 7. Modifiche all'Informativa sulla Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                7. Modifiche a Questa Informativa sulla Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Ci riserviamo il diritto di aggiornare questa informativa sulla privacy se necessario per adattarla ai requisiti legali o ai cambiamenti nella funzionalità dell'app.
              </p>
              <p className="text-muted-foreground">
                La versione attuale è sempre disponibile all'interno dell'app e sul nostro sito web.
              </p>
            </CardContent>
          </Card>

          {/* 8. Cancellazione dei Dati */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                8. Cancellazione dei Dati
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Le informazioni sulla cancellazione del tuo account utente e dei tuoi dati personali si trovano nella nostra pagina dedicata alla cancellazione dei dati.
                Lì troverai una descrizione trasparente di quali dati vengono cancellati e come inviare una richiesta di cancellazione.
              </p>
              <Link to="/captains-log/data-deletion">
                <Button className="mt-4">
                  Vai alla Pagina di Cancellazione Dati
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm pt-8 border-t border-border/40">
            <Link 
              to="/captains-log/imprint/it" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Note Legali
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
              Cancellazione Dati
            </Link>
          </div>
        </div>
      </div>

      <CaptainsLogFooter />
    </div>
  );
};

export default CaptainsLogPrivacyIT;