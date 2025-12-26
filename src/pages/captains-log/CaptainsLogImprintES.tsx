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

const CaptainsLogImprintES = () => {
  const navigate = useNavigate();
  const currentLanguage = languages.find(lang => lang.code === 'es')!;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            className="group"
            onClick={() => navigate('/projects/captains-log/es')}
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Volver
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
                  className={`cursor-pointer ${lang.code === 'es' ? 'bg-primary/10' : ''}`}
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
          <h1 className="text-4xl font-bold mb-4">Aviso Legal – Captain Log</h1>
          <p className="text-muted-foreground text-lg">Información Legal</p>
        </div>

        <div className="space-y-6">
          {/* Proveedor */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                1. Proveedor / Responsable
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="font-semibold">Harbor Studios</p>
              <p>Calle Calima Sector 1, Riosol 167</p>
              <p>35627 Costa Calma</p>
              <p>España</p>
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

          {/* Responsable del contenido */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                2. Responsable del Contenido
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Harbor Studios</p>
              <p className="text-muted-foreground">Dirección como arriba</p>
            </CardContent>
          </Card>

          {/* Ámbito de aplicación */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-primary" />
                3. Ámbito de Aplicación de este Aviso Legal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Este aviso legal se aplica a las siguientes ofertas digitales de Harbor Studios:</p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold">Captain Log – Cuaderno de Bitácora Digital para Navegantes</p>
                <a href="https://captainlog.pro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://captainlog.pro
                </a>
              </div>
              <p className="text-muted-foreground">así como las versiones web, app y PWA asociadas.</p>
            </CardContent>
          </Card>

          {/* Responsabilidad por contenido */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                4. Responsabilidad por el Contenido
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>El contenido de nuestras aplicaciones y sitios web se crea con el mayor cuidado. Sin embargo, no podemos garantizar la exactitud, integridad o actualidad del contenido.</p>
              <p>Como proveedor de servicios, somos responsables de nuestro propio contenido de acuerdo con las disposiciones legales generales. Sin embargo, no estamos obligados a supervisar la información transmitida o almacenada por terceros ni a investigar circunstancias que indiquen actividad ilegal.</p>
            </CardContent>
          </Card>

          {/* Responsabilidad por enlaces externos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-primary" />
                5. Responsabilidad por Enlaces Externos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Nuestras ofertas pueden contener enlaces a sitios web externos de terceros sobre cuyo contenido no tenemos control. Por lo tanto, no podemos aceptar ninguna responsabilidad por este contenido de terceros. El proveedor u operador respectivo de las páginas enlazadas es siempre responsable de su contenido.</p>
            </CardContent>
          </Card>

          {/* Derechos de autor */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                6. Derechos de Autor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>El contenido y las obras creadas por Harbor Studios están sujetos a derechos de autor. La reproducción, edición, distribución o cualquier otro uso más allá de los límites de la ley de derechos de autor requiere el consentimiento previo por escrito.</p>
            </CardContent>
          </Card>

          {/* Privacidad y Legal */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                7. Privacidad y Legal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Puede encontrar información sobre el procesamiento de datos personales y nuestros términos legales aquí:</p>
              <div className="flex flex-col gap-2">
                <Link to="/captains-log/privacy" className="text-primary hover:underline flex items-center gap-2">
                  👉 Política de Privacidad
                </Link>
                <Link to="/captains-log/terms" className="text-primary hover:underline flex items-center gap-2">
                  👉 Términos de Uso
                </Link>
                <Link to="/captains-log/data-deletion" className="text-primary hover:underline flex items-center gap-2">
                  👉 Información sobre Eliminación de Datos
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

export default CaptainsLogImprintES;