import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, Globe, FileText, Scale, Shield, User, Smartphone, AlertTriangle, RefreshCw, Gavel } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import CaptainsLogFooter from "./CaptainsLogFooter";
import { Link } from "react-router-dom";

const CaptainsLogTerms = () => {
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
          <h1 className="text-4xl font-bold mb-4">Nutzungsbedingungen</h1>
          <p className="text-muted-foreground text-lg">Gültig für: Captain’s Suite – eine App von Harbor Studios</p>
          <p className="text-muted-foreground mt-2">Letzte Aktualisierung: 04.11.2025</p>
        </div>

        <div className="space-y-6">
          {/* 1. Geltungsbereich */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                1. Geltungsbereich
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Diese Nutzungsbedingungen regeln die Nutzung der App Captain’s Suite (nachfolgend „App") der Harbor Studios, erreichbar unter</p>
              <a href="https://harborstudios.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block">
                https://harborstudios.app
              </a>
              <p className="text-muted-foreground mt-4">Mit der Registrierung, dem Login oder der Nutzung der App erklärst du dich mit diesen Nutzungsbedingungen einverstanden.</p>
            </CardContent>
          </Card>

          {/* 2. Zweck der App */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                2. Zweck der App
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Captain’s Suite ist ein digitales maritimes Logbuch zur Dokumentation von Fahrten, Törns und Ereignissen an Bord von Wasserfahrzeugen.</p>
              <p className="font-semibold mt-4">Die App dient insbesondere der:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Erfassung und Verwaltung von Logbucheinträgen</li>
                <li>Dokumentation von Fahrten, Positionen und Zeiten</li>
                <li>optionalen Nutzung von Standort- und Wetterdaten</li>
                <li>persönlichen Nachvollziehbarkeit und Archivierung von Fahrten</li>
              </ul>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4">
                <p className="text-amber-700 dark:text-amber-400 font-medium">
                  Captain’s Suite ist kein Navigationssystem, kein Sicherheits- oder Notfallsystem und kein Ersatz für amtliche Logbücher oder nautische Pflichtaufzeichnungen.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 3. Zugang und Registrierung */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                3. Zugang und Registrierung
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Für die Nutzung bestimmter Funktionen der App ist eine Registrierung mit einer E-Mail-Adresse erforderlich.</p>
              <p className="text-muted-foreground">Du bist verpflichtet, bei der Registrierung wahrheitsgemäße Angaben zu machen und deine Zugangsdaten vertraulich zu behandeln.</p>
              <p className="text-muted-foreground">Du bist für alle Aktivitäten verantwortlich, die über dein Benutzerkonto erfolgen.</p>
            </CardContent>
          </Card>

          {/* 4. Nutzung der App */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                4. Nutzung der App
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="font-semibold">Du verpflichtest dich, die App ausschließlich:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>zu privaten oder legitimen eigenen Zwecken</li>
                <li>im Rahmen geltender Gesetze</li>
                <li>gemäß diesen Nutzungsbedingungen</li>
              </ul>
              <p className="text-muted-foreground">zu verwenden.</p>

              <p className="font-semibold mt-4">Es ist untersagt, die App zu nutzen für:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>rechtswidrige Zwecke</li>
                <li>die Manipulation oder den Missbrauch von Daten</li>
                <li>das Umgehen von Sicherheitsmechanismen</li>
                <li>das Hochladen rechtswidriger, beleidigender oder fremder Inhalte</li>
              </ul>
              <p className="text-muted-foreground mt-4">Bei Verstößen behalten wir uns vor, den Zugriff auf die App vorübergehend oder dauerhaft zu sperren.</p>
            </CardContent>
          </Card>

          {/* 5. Verantwortlichkeit der Nutzer */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                5. Verantwortlichkeit der Nutzer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Alle Inhalte, die du in Captain’s Suite erstellst (z. B. Logbucheinträge, Notizen, Fotos), liegen in deiner Verantwortung.</p>
              <p className="text-muted-foreground">Du stellst sicher, dass durch deine Inhalte keine Rechte Dritter verletzt werden (z. B. Urheberrechte, Persönlichkeitsrechte).</p>
              <p className="text-muted-foreground">Harbor Studios übernimmt keine Verantwortung für Inhalte, die durch Nutzer innerhalb der App gespeichert oder erstellt werden.</p>
            </CardContent>
          </Card>

          {/* 6. Datenschutz */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                6. Datenschutz
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Die Verarbeitung personenbezogener Daten erfolgt ausschließlich gemäß unserer Datenschutzerklärung.</p>
              <p className="text-muted-foreground">Mit der Nutzung der App erklärst du dich mit der dort beschriebenen Verarbeitung einverstanden.</p>
              <Link to="/captains-log/privacy" className="text-primary hover:underline flex items-center gap-2 mt-4">
                👉 Zur Datenschutzerklärung
              </Link>
            </CardContent>
          </Card>

          {/* 7. Haftungsausschluss */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                7. Haftungsausschluss
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="font-semibold">Die Nutzung von Captain’s Suite erfolgt auf eigene Verantwortung.</p>
              <p className="mt-4">Harbor Studios übernimmt keine Haftung für:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>technische Störungen, Serverausfälle oder Unterbrechungen</li>
                <li>unvollständige, fehlerhafte oder verzögerte Daten (z. B. GPS-, Wetter- oder Sensordaten)</li>
                <li>Datenverluste durch Gerätefehler, Bedienfehler oder Drittdienste</li>
                <li>Schäden, die durch die Nutzung oder Nichtverfügbarkeit der App entstehen</li>
              </ul>
              <p className="text-muted-foreground mt-4">Wir bemühen uns um eine zuverlässige und sichere Funktion, übernehmen jedoch keine Garantie für eine jederzeit fehlerfreie oder unterbrechungslose Verfügbarkeit.</p>
            </CardContent>
          </Card>

          {/* 8. Änderungen */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-primary" />
                8. Änderungen der App und der Nutzungsbedingungen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Wir behalten uns vor, die App, einzelne Funktionen oder diese Nutzungsbedingungen jederzeit zu ändern, zu erweitern oder einzustellen.</p>
              <p className="text-muted-foreground">Über wesentliche Änderungen wirst du in geeigneter Weise informiert.</p>
              <p className="text-muted-foreground mt-4">Die jeweils aktuelle Fassung der Nutzungsbedingungen ist jederzeit unter folgender Adresse abrufbar:</p>
              <Link to="/captains-log/terms" className="text-primary hover:underline block mt-2">
                https://harborstudios.app/captains-log/terms
              </Link>
            </CardContent>
          </Card>

          {/* 9. Kontakt */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                9. Kontakt
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Bei Fragen, Problemen oder Beschwerden erreichst du uns unter:</p>
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

          {/* 10. Anwendbares Recht */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gavel className="h-5 w-5 text-primary" />
                10. Anwendbares Recht und Gerichtsstand
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Es gilt das Recht des Sitzstaates des Betreibers, Spanien, unter Ausschluss des UN-Kaufrechts.</p>
              <p className="text-muted-foreground">Gerichtsstand ist der Geschäftssitz von Harbor Studios, sofern keine zwingenden gesetzlichen Vorschriften entgegenstehen.</p>
            </CardContent>
          </Card>

          {/* 11. Salvatorische Klausel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                11. Salvatorische Klausel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Sollten einzelne Bestimmungen dieser Nutzungsbedingungen ganz oder teilweise unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen unberührt.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <CaptainsLogFooter />
    </div>
  );
};

export default CaptainsLogTerms;

