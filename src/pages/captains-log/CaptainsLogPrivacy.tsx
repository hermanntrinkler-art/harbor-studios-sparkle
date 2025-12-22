import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Shield, Database, Cookie, Clock, UserCheck, Mail, Info } from "lucide-react";
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
          <p className="text-muted-foreground text-lg">Captain Log – Digitales Fahrtenbuch für Segler</p>
        </div>

        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Deine Privatsphäre ist uns wichtig. Diese Datenschutzerklärung informiert dich darüber, wie wir deine personenbezogenen Daten erheben, verwenden und schützen.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          {/* Verantwortlicher */}
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
            </CardContent>
          </Card>

          {/* Datenerhebung */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                2. Welche Daten werden erhoben?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Nutzungsdaten</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Logbucheinträge (Datum, Zeit, Position, Wetterdaten, Notizen)</li>
                  <li>Bootsinformationen</li>
                  <li>Crew-Informationen (falls eingegeben)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technische Daten</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Gerätetyp und Betriebssystem</li>
                  <li>App-Version</li>
                  <li>Absturzberichte (anonymisiert)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Standortdaten</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>GPS-Koordinaten (nur wenn du diese Funktion aktivierst)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Zweck der Datenverarbeitung */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                3. Zweck der Datenverarbeitung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Bereitstellung der App-Funktionen (digitales Fahrtenbuch)</li>
                <li>Synchronisierung deiner Daten zwischen Geräten</li>
                <li>Verbesserung der App-Funktionalität und Benutzererfahrung</li>
                <li>Technischer Support bei Anfragen</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-primary" />
                4. Cookies und lokale Speicherung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Captain Log verwendet lokale Speicherung auf deinem Gerät, um deine Einstellungen und Daten zu speichern. Diese Daten verlassen dein Gerät nur, wenn du die Cloud-Synchronisierung aktivierst.
              </p>
            </CardContent>
          </Card>

          {/* Datenspeicherung */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                5. Datenspeicherung und -löschung
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Deine Daten werden so lange gespeichert, wie du die App nutzt. Du kannst jederzeit:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Einzelne Logbucheinträge löschen</li>
                <li>Alle deine Daten vollständig löschen</li>
                <li>Deinen Account und alle zugehörigen Daten entfernen</li>
              </ul>
            </CardContent>
          </Card>

          {/* Deine Rechte */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-primary" />
                6. Deine Rechte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">Du hast folgende Rechte bezüglich deiner personenbezogenen Daten:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Auskunftsrecht:</strong> Du kannst Auskunft über deine gespeicherten Daten verlangen</li>
                <li><strong>Berichtigungsrecht:</strong> Du kannst die Berichtigung unrichtiger Daten verlangen</li>
                <li><strong>Löschungsrecht:</strong> Du kannst die Löschung deiner Daten verlangen</li>
                <li><strong>Datenübertragbarkeit:</strong> Du kannst deine Daten in einem gängigen Format erhalten</li>
                <li><strong>Widerspruchsrecht:</strong> Du kannst der Verarbeitung deiner Daten widersprechen</li>
              </ul>
            </CardContent>
          </Card>

          {/* Kontakt */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                7. Kontakt
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Bei Fragen zum Datenschutz oder zur Ausübung deiner Rechte kannst du uns kontaktieren:
              </p>
              <a href="mailto:support@harborstudios.app" className="text-primary hover:underline flex items-center gap-2">
                <Mail className="h-4 w-4" />
                support@harborstudios.app
              </a>
            </CardContent>
          </Card>

          {/* CTA Datenlöschung */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Daten löschen</CardTitle>
              <CardDescription>Möchtest du deine Daten aus Captain Log löschen?</CardDescription>
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
