import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Database, Cookie, Clock, UserCheck, Mail, Info, Globe, FileText, Lock } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import CaptainsLogFooter from "./CaptainsLogFooter";
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
          <h1 className="text-4xl font-bold mb-4">Datenschutzerklärung – Captain's Log</h1>
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
              <p>35627 Costa Calma</p>
              <p>Spanien</p>
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
                Der Schutz deiner personenbezogenen Daten ist uns wichtig.
                Diese Datenschutzerklärung informiert dich darüber, welche personenbezogenen Daten im Zusammenhang mit der Nutzung unserer App Captain's Log erhoben, verarbeitet und gespeichert werden.
              </p>
              <p className="text-muted-foreground">
                Wir behandeln deine Daten vertraulich und entsprechend den geltenden gesetzlichen Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO) sowie des TTDSG.
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
                  Captain's Log verarbeitet ausschließlich Daten, die du selbst bereitstellst oder aktiv erzeugst. Dazu gehören insbesondere:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>deine E-Mail-Adresse (zur Anmeldung und Authentifizierung)</li>
                  <li>Logbucheinträge, Notizen und Fahrtdaten, die du selbst erstellst</li>
                  <li>optionale Fotos, die du über die Kamera oder aus der Galerie hochlädst</li>
                  <li>Standortdaten (GPS) sowie Wetterinformationen, die zur automatischen Erfassung, Darstellung und Dokumentation deiner Fahrten im Logbuch verwendet werden</li>
                </ul>
                <p className="text-muted-foreground">
                  Diese Daten werden ausschließlich genutzt, um die Kernfunktionen der App bereitzustellen, insbesondere zum Speichern, Verwalten und Anzeigen deiner eigenen Logbucheinträge.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">b) Speicherung und Auftragsverarbeitung</h4>
                <p className="text-muted-foreground mb-2">
                  Die Speicherung und Verwaltung der Daten erfolgt über Supabase, einen europäischen Cloud-Dienstleister, der als Auftragsverarbeiter gemäß Art. 28 DSGVO eingesetzt wird.
                </p>
                <p className="text-muted-foreground mb-2">
                  Die Datenübertragung und -speicherung erfolgt verschlüsselt (TLS bei der Übertragung, AES-256 bei der Speicherung).
                </p>
                <p className="text-muted-foreground">
                  Es findet keine Weitergabe personenbezogener Daten an Dritte zu Werbe-, Analyse- oder sonstigen kommerziellen Zwecken statt.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">c) Keine Weitergabe an Dritte</h4>
                <p className="text-muted-foreground">
                  Deine personenbezogenen Daten werden nicht verkauft, vermietet oder an andere Unternehmen weitergegeben, es sei denn, es besteht eine gesetzliche Verpflichtung zur Herausgabe.
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
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Captain's Log verwendet keine Cookies, keine Analyse-Tools und keine Tracking- oder Werbedienste.
              </p>
              <p className="text-muted-foreground">
                Die gesamte Kommunikation zwischen App und Server erfolgt ausschließlich über verschlüsselte HTTPS-Verbindungen.
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
                Alle personenbezogenen Daten (z. B. E-Mail-Adresse, Logbucheinträge, Fotos, Fahrtdaten) werden sicher in der Supabase-Datenbank gespeichert.
              </p>
              <p className="text-muted-foreground">
                Du kannst einzelne Einträge und Fotos jederzeit selbst innerhalb der App löschen.
              </p>
              <p className="text-muted-foreground">
                Zusätzlich hast du die Möglichkeit, dein gesamtes Benutzerkonto zu löschen – entweder direkt in der App oder über unsere separate Seite zur Datenlöschung.
              </p>
              <p className="text-muted-foreground">
                Nach der Löschung werden alle personenbezogenen Daten und Inhalte innerhalb von spätestens 7 Tagen vollständig und unwiderruflich entfernt, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
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
                <li>Auskunft über deine gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>die Berichtigung unrichtiger oder unvollständiger Daten zu verlangen</li>
                <li>die Löschung oder Einschränkung der Verarbeitung deiner Daten zu fordern</li>
                <li>der Verarbeitung deiner Daten zu widersprechen</li>
                <li>eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Anfragen zu deinen Rechten kannst du jederzeit per E-Mail richten an:
              </p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:support@harborstudios.app" className="text-primary hover:underline">
                  support@harborstudios.app
                </a>
              </div>
            </CardContent>
          </Card>

          {/* 7. Änderungen dieser Datenschutzerklärung */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                7. Änderungen dieser Datenschutzerklärung
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an rechtliche Anforderungen oder Änderungen der App-Funktionalität anzupassen.
              </p>
              <p className="text-muted-foreground">
                Die jeweils aktuelle Version ist jederzeit innerhalb der App und auf unserer Website verfügbar.
              </p>
            </CardContent>
          </Card>

          {/* 8. Datenlöschung */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                8. Datenlöschung
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Informationen zur Löschung deines Benutzerkontos und deiner personenbezogenen Daten findest du auf unserer separaten Seite zur Datenlöschung.
                Dort wird transparent beschrieben, welche Daten gelöscht werden und wie du eine Löschanfrage stellen kannst.
              </p>
              <Link to="/captains-log/data-deletion">
                <Button className="mt-4">
                  Zur Datenlöschungsseite
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm pt-8 border-t border-border/40">
            <Link 
              to="/captains-log/imprint" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Impressum
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
      </div>

      <CaptainsLogFooter />
    </div>
  );
};

export default CaptainsLogPrivacy;
