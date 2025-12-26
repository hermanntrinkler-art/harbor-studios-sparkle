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

const CaptainsLogDataDeletionES = () => {
  const navigate = useNavigate();
  const currentLang = languages.find(l => l.code === "es");

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
          Volver
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
                className={lang.code === "es" ? "bg-accent" : ""}
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
          <h1 className="text-4xl font-bold mb-4">Eliminación de Datos</h1>
          <p className="text-muted-foreground text-lg">Captain Log – Cómo eliminar tus datos</p>
        </div>

        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Tienes derecho a solicitar la eliminación de tus datos personales en cualquier momento. Aquí te explicamos cómo funciona.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          {/* Option 1: In the App */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                Opción 1: Eliminar datos en la app
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Puedes eliminar tus datos directamente en la app Captain Log:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Abre la app Captain Log</li>
                <li>Ve a <strong>Configuración</strong></li>
                <li>Selecciona <strong>Cuenta y Datos</strong></li>
                <li>Toca <strong>Eliminar todos los datos</strong> o <strong>Eliminar cuenta</strong></li>
                <li>Confirma la eliminación</li>
              </ol>
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Esta acción tiene efecto inmediato y no se puede deshacer.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Option 2: Via Email */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Opción 2: Solicitar eliminación por email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                También puedes enviarnos un email para solicitar la eliminación de tus datos:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Envía un email a:</p>
                <a href="mailto:support@harborstudios.app?subject=Eliminaci%C3%B3n%20de%20Datos%20Captain%20Log" className="text-primary hover:underline text-lg">
                  support@harborstudios.app
                </a>
              </div>
              <p className="text-muted-foreground">Por favor incluye la siguiente información en tu email:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Asunto: "Eliminación de Datos Captain Log"</li>
                <li>La dirección de email de tu cuenta</li>
                <li>Opcional: Motivo de la eliminación (nos ayuda a mejorar nuestro servicio)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Processing Time */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Plazo de Procesamiento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                <strong>Eliminación en la app:</strong> Efecto inmediato
              </p>
              <p className="text-muted-foreground">
                <strong>Eliminación por email:</strong> Procesaremos tu solicitud en un plazo de 7 días y te informaremos cuando esté completa. Todos los datos personales serán eliminados completamente.
              </p>
            </CardContent>
          </Card>

          {/* What gets deleted */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                ¿Qué se elimina?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">Una eliminación completa de datos elimina la siguiente información:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Todas las entradas del cuaderno de bitácora</li>
                <li>Información del barco</li>
                <li>Datos de la tripulación</li>
                <li>Configuraciones y preferencias</li>
                <li>Información de la cuenta (al eliminar la cuenta)</li>
              </ul>
              <Alert className="mt-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Las estadísticas de uso anonimizadas y agregadas pueden conservarse con fines de análisis, pero no contienen datos personales.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                ¿Preguntas?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Si tienes preguntas sobre la eliminación de datos o la privacidad, estaremos encantados de ayudarte:
              </p>
              <a href="mailto:support@harborstudios.app" className="text-primary hover:underline flex items-center gap-2 text-lg">
                <Mail className="h-4 w-4" />
                support@harborstudios.app
              </a>
              <div className="pt-4">
                <Button asChild variant="outline">
                  <Link to="/captains-log/privacy/es">
                    Ver Política de Privacidad
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

export default CaptainsLogDataDeletionES;
