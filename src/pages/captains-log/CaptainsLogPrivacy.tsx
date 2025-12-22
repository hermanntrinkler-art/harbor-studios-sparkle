import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Shield, Database, Cookie, Clock, UserCheck, Mail, Info, Globe } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CaptainsLogPrivacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      <LanguageSwitcher />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 group"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Zurück
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Datenschutzerklärung</h1>
          <p className="text-muted-foreground text-lg">Gültig für: Captain's Log – eine App von Harbor Studios</p>
        </div>

        <div className="space-y-6">
          {/* 1. Verantwortlicher */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                1. Verantwortlicher
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="font-semibold">Harbor Studios</p>
              <p>Calle Calima Sector 1, Riosol 167</p>
              <p>35627 Costa Calma, Spanien</p>
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

          {/* 2. Allgemeine Hinweise */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                2. Allgemeine Hinweise
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Der Schutz deiner personenbezogenen Daten ist uns wichtig. Diese Datenschutzerklärung 
                erläutert, welche Daten im Zusammenhang mit der Nutzung unserer App Captain's Log 
                erhoben, gespeichert und verwendet werden.
              </p>
              <p className="text-muted-foreground">
                Wir behandeln deine Daten vertraulich und gemäß den geltenden Datenschutzvorschriften, 
                insbesondere der DSGVO und des TTDSG.
              </p>
            </CardContent>
          </Card>

          {/* 3. Erhebung und Verwendung */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                3. Erhebung und Verwendung personenbezogener Daten
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">a) Bei Nutzung der App</h4>
                <p className="text-muted-foreground mb-4">
                  Captain's Log verarbeitet nur Daten, die du selbst bereitstellst oder aktiv erzeugst. 
                  Dazu gehören insbesondere:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>deine E-Mail-Adresse (zur Anmeldung / Authentifizierung)</li>
                  <li>Logbucheinträge und Notizen, die du selbst erstellst</li>
                  <li>optional Fotos, die du über die Kamera oder Galerie hochlädst</li>
                  <li>Standortdaten und Wetterdaten für deine Fahrten</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Diese Daten werden ausschließlich verwendet, um die Funktionalität der App 
                  bereitzustellen: Speichern, Verwalten und Anzeigen deiner eigenen Logbucheinträge.
                </p>
                <p className="text-muted-foreground">
                  Die Speicherung und Verwaltung der Daten erfolgt über Supabase, einen europäischen 
                  Cloud-Dienstleister, der Daten verschlüsselt überträgt und speichert (TLS & AES-256). 
                  Es erfolgt keine Weitergabe an Dritte zu Werbe-, Analyse- oder sonstigen Zwecken.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">b) Keine Weitergabe an Dritte</h4>
                <p className="text-muted-foreground">
                  Personenbezogene Daten werden nicht verkauft oder an andere Unternehmen weitergegeben, 
                  es sei denn, es besteht eine gesetzliche Verpflichtung.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 4. Cookies und Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-primary" />
                4. Cookies und Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Captain's Log verwendet keine Cookies, Analyse- oder Tracking-Dienste. 
                Die Kommunikation mit Supabase erfolgt ausschließlich über verschlüsselte 
                HTTPS-Verbindungen.
              </p>
            </CardContent>
          </Card>

          {/* 5. Datenspeicherung und Löschung */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                5. Datenspeicherung und Löschung
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Alle deine Inhalte (E-Mail, Logbucheinträge, Fotos) werden sicher in der 
                Supabase-Datenbank gespeichert. Du kannst Einträge und Fotos jederzeit selbst löschen.
              </p>
              <p className="text-muted-foreground">
                Du kannst außerdem dein gesamtes Konto löschen – direkt in der App oder über unsere{" "}
                <Link to="/captains-log/data-deletion" className="text-primary hover:underline">
                  Datenlöschungsseite
                </Link>
                . Nach der Löschung werden alle personenbezogenen Daten und Inhalte innerhalb 
                von 7 Tagen vollständig entfernt.
              </p>
            </CardContent>
          </Card>

          {/* 6. Rechte der betroffenen Personen */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-primary" />
                6. Rechte der betroffenen Personen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Du hast jederzeit das Recht:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Auskunft über gespeicherte Daten zu erhalten</li>
                <li>Berichtigung unrichtiger Daten zu verlangen</li>
                <li>Löschung oder Einschränkung der Verarbeitung zu fordern</li>
                <li>der Verarbeitung zu widersprechen</li>
                <li>sowie eine Einwilligung jederzeit zu widerrufen</li>
              </ul>
              <Alert className="mt-4">
                <Mail className="h-4 w-4" />
                <AlertDescription>
                  Anfragen bitte an:{" "}
                  <a href="mailto:support@harborstudios.app" className="text-primary hover:underline font-medium">
                    support@harborstudios.app
                  </a>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* 7. Änderungen */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                7. Änderungen dieser Datenschutzerklärung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Wir behalten uns das Recht vor, diese Erklärung jederzeit anzupassen.
              </p>
            </CardContent>
          </Card>

          {/* 8. Datenlöschung CTA */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>8. Datenlöschung</CardTitle>
              <CardDescription>
                Informationen zur Löschung deiner Daten findest du auf unserer Seite zur Datenlöschung.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="default" size="lg">
                <Link to="/captains-log/data-deletion">
                  Zur Datenlöschung
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CaptainsLogPrivacy;
