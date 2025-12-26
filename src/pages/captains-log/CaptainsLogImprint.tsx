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

const CaptainsLogImprint = () => {
  const navigate = useNavigate();
  const currentLanguage = languages.find(lang => lang.code === 'de')!;

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
            Zurück
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
                  className={`cursor-pointer ${lang.code === 'de' ? 'bg-primary/10' : ''}`}
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
          <h1 className="text-4xl font-bold mb-4">Impressum – Captain Log</h1>
          <p className="text-muted-foreground text-lg">Rechtliche Informationen</p>
        </div>

        <div className="space-y-6">
          {/* Anbieter */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                1. Anbieter / Verantwortlicher
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

          {/* Verantwortlich für den Inhalt */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                2. Verantwortlich für den Inhalt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Harbor Studios</p>
              <p className="text-muted-foreground">Adresse wie oben</p>
            </CardContent>
          </Card>

          {/* Geltungsbereich */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-primary" />
                3. Geltungsbereich dieses Impressums
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Dieses Impressum gilt für folgende digitale Angebote von Harbor Studios:</p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold">Captain Log – digitales Fahrtenbuch für Segler</p>
                <a href="https://captainlog.pro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://captainlog.pro
                </a>
              </div>
              <p className="text-muted-foreground">sowie für zugehörige Web-, App- und PWA-Versionen.</p>
            </CardContent>
          </Card>

          {/* Haftung für Inhalte */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                4. Haftung für Inhalte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Die Inhalte unserer Anwendungen und Webseiten werden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
              <p>Als Diensteanbieter sind wir gemäß den allgemeinen gesetzlichen Bestimmungen für eigene Inhalte verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            </CardContent>
          </Card>

          {/* Haftung für externe Links */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-primary" />
                5. Haftung für externe Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Unsere Angebote können Links zu externen Webseiten Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>
            </CardContent>
          </Card>

          {/* Urheberrecht */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                6. Urheberrecht
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Die durch Harbor Studios erstellten Inhalte und Werke unterliegen dem Urheberrecht. Eine Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.</p>
            </CardContent>
          </Card>

          {/* Datenschutz */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                7. Datenschutz & Rechtliches
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Informationen zur Verarbeitung personenbezogener Daten sowie zu unseren rechtlichen Bedingungen findest du hier:</p>
              <div className="flex flex-col gap-2">
                <Link to="/captains-log/privacy" className="text-primary hover:underline flex items-center gap-2">
                  👉 Datenschutzerklärung
                </Link>
                <Link to="/captains-log/terms" className="text-primary hover:underline flex items-center gap-2">
                  👉 Nutzungsbedingungen
                </Link>
                <Link to="/captains-log/data-deletion" className="text-primary hover:underline flex items-center gap-2">
                  👉 Informationen zur Datenlöschung
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

export default CaptainsLogImprint;
