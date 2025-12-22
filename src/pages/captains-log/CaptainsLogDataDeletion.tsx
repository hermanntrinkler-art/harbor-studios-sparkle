import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Mail, Smartphone, Clock, Shield, Info, CheckCircle } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CaptainsLogDataDeletion = () => {
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
          <h1 className="text-4xl font-bold mb-4">Datenlöschung</h1>
          <p className="text-muted-foreground text-lg">Captain Log – So löschst du deine Daten</p>
        </div>

        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Du hast das Recht, jederzeit die Löschung deiner personenbezogenen Daten zu verlangen. Hier erfährst du, wie das funktioniert.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          {/* Option 1: In der App */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                Option 1: Daten in der App löschen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Du kannst deine Daten direkt in der Captain Log App löschen:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Öffne die Captain Log App</li>
                <li>Gehe zu <strong>Einstellungen</strong></li>
                <li>Wähle <strong>Account & Daten</strong></li>
                <li>Tippe auf <strong>Alle Daten löschen</strong> oder <strong>Account löschen</strong></li>
                <li>Bestätige die Löschung</li>
              </ol>
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Diese Aktion ist sofort wirksam und kann nicht rückgängig gemacht werden.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Option 2: Per E-Mail */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Option 2: Löschung per E-Mail beantragen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Du kannst auch eine E-Mail an uns senden, um die Löschung deiner Daten zu beantragen:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Sende eine E-Mail an:</p>
                <a href="mailto:support@harborstudios.app?subject=Datenlöschung%20Captain%20Log" className="text-primary hover:underline text-lg">
                  support@harborstudios.app
                </a>
              </div>
              <p className="text-muted-foreground">Bitte gib in deiner E-Mail folgende Informationen an:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Betreff: "Datenlöschung Captain Log"</li>
                <li>Die E-Mail-Adresse deines Accounts</li>
                <li>Optional: Grund für die Löschung (hilft uns, unseren Service zu verbessern)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Zeitrahmen */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Bearbeitungszeitraum
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                <strong>Bei Löschung in der App:</strong> Sofortige Wirkung
              </p>
              <p className="text-muted-foreground">
                <strong>Bei Löschung per E-Mail:</strong> Wir bearbeiten deine Anfrage innerhalb von 30 Tagen und informieren dich über den Abschluss.
              </p>
            </CardContent>
          </Card>

          {/* Was wird gelöscht */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Was wird gelöscht?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">Bei einer vollständigen Datenlöschung werden folgende Daten entfernt:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Alle Logbucheinträge</li>
                <li>Bootsinformationen</li>
                <li>Crew-Daten</li>
                <li>Einstellungen und Präferenzen</li>
                <li>Account-Informationen (bei Account-Löschung)</li>
              </ul>
              <Alert className="mt-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Anonymisierte, aggregierte Nutzungsstatistiken können für Analysezwecke aufbewahrt werden, enthalten jedoch keine personenbezogenen Daten.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Kontakt */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Fragen?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Bei Fragen zur Datenlöschung oder zum Datenschutz stehen wir dir gerne zur Verfügung:
              </p>
              <a href="mailto:support@harborstudios.app" className="text-primary hover:underline flex items-center gap-2 text-lg">
                <Mail className="h-4 w-4" />
                support@harborstudios.app
              </a>
              <div className="pt-4">
                <Button asChild variant="outline">
                  <Link to="/captains-log/privacy">
                    Zur Datenschutzerklärung
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CaptainsLogDataDeletion;
