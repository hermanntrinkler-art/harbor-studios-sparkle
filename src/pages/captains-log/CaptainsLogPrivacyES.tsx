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

const CaptainsLogPrivacyES = () => {
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
            onClick={() => window.history.back()}
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
          <h1 className="text-4xl font-bold mb-4">Política de Privacidad – Captain’s Suite</h1>
        </div>

        <div className="space-y-6">
          {/* 1. Responsable */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                1. Responsable
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

          {/* 2. Información General */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                2. Información General
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                La protección de tus datos personales es importante para nosotros.
                Esta política de privacidad te informa sobre qué datos personales se recopilan, procesan y almacenan en relación con el uso de nuestra aplicación Captain’s Suite.
              </p>
              <p className="text-muted-foreground">
                Tratamos tus datos de forma confidencial y de acuerdo con las normativas de protección de datos aplicables, en particular el Reglamento General de Protección de Datos (RGPD) y el TTDSG.
              </p>
            </CardContent>
          </Card>

          {/* 3. Recopilación y Uso */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                3. Recopilación y Uso de Datos Personales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">a) Al Usar la Aplicación</h4>
                <p className="text-muted-foreground mb-4">
                  Captain’s Suite solo procesa datos que tú mismo proporcionas o generas activamente. Esto incluye en particular:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>tu dirección de correo electrónico (para registro y autenticación)</li>
                  <li>entradas del cuaderno de bitácora, notas y datos de viaje que tú mismo creas</li>
                  <li>fotos opcionales que subes a través de la cámara o desde tu galería</li>
                  <li>datos de ubicación (GPS) e información meteorológica utilizados para el registro automático, visualización y documentación de tus viajes en el cuaderno de bitácora</li>
                </ul>
                <p className="text-muted-foreground">
                  Estos datos se utilizan exclusivamente para proporcionar las funciones principales de la aplicación, en particular para almacenar, gestionar y mostrar tus propias entradas del cuaderno de bitácora.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">b) Almacenamiento y Procesamiento de Datos</h4>
                <p className="text-muted-foreground mb-2">
                  El almacenamiento y gestión de datos se realiza a través de Supabase, un proveedor de servicios en la nube europeo que se utiliza como procesador de datos de acuerdo con el Art. 28 del RGPD.
                </p>
                <p className="text-muted-foreground mb-2">
                  La transmisión y el almacenamiento de datos están cifrados (TLS para la transmisión, AES-256 para el almacenamiento).
                </p>
                <p className="text-muted-foreground">
                  Los datos personales no se comparten con terceros para publicidad, análisis u otros fines comerciales.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">c) Sin Divulgación a Terceros</h4>
                <p className="text-muted-foreground">
                  Tus datos personales no serán vendidos, alquilados ni compartidos con otras empresas a menos que exista una obligación legal de hacerlo.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 4. Cookies y Seguimiento */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-primary" />
                4. Cookies y Seguimiento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Captain’s Suite no utiliza cookies, herramientas de análisis, ni servicios de seguimiento o publicidad.
              </p>
              <p className="text-muted-foreground">
                Toda la comunicación entre la aplicación y el servidor se realiza exclusivamente a través de conexiones HTTPS cifradas.
              </p>
            </CardContent>
          </Card>

          {/* 5. Almacenamiento y Eliminación de Datos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                5. Almacenamiento y Eliminación de Datos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Los datos personales (por ejemplo, dirección de correo electrónico, entradas del cuaderno de bitácora, datos de ubicación, fotos) se procesan exclusivamente para operar la aplicación y se almacenan en una base de datos segura.
              </p>
              <p className="text-muted-foreground">
                Los usuarios pueden eliminar entradas individuales y contenido subido en cualquier momento dentro de la aplicación. Además, es posible eliminar completamente la cuenta de usuario. En este caso, todos los datos personales serán eliminados de forma completa e irreversible en un plazo máximo de 7 días, a menos que se apliquen requisitos legales de conservación.
              </p>

              {/* Entradas de cuaderno de bitácora a prueba de auditoría */}
              <div className="mt-6 pt-6 border-t border-border/40">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Entradas de Cuaderno de Bitácora a Prueba de Auditoría
                </h4>
                <p className="text-muted-foreground mb-4">
                  Ciertas entradas del cuaderno de bitácora (por ejemplo, registros de viajes o eventos) se almacenan de manera a prueba de auditoría. La modificación o eliminación posterior de entradas individuales es técnicamente imposible.
                </p>
                <p className="text-muted-foreground mb-4">
                  Esto sirve para preservar la integridad de los datos y la trazabilidad en el sentido de un diario de navegación adecuado, particularmente en relación con posibles asuntos de seguros, responsabilidad o evidencia.
                </p>
                <p className="text-muted-foreground mb-4">
                  El almacenamiento se basa en el Art. 6(1)(f) del RGPD (interés legítimo) y el Art. 17(3)(e) del RGPD (excepción al derecho de supresión para el establecimiento, ejercicio o defensa de reclamaciones legales).
                </p>
                <p className="text-muted-foreground">
                  El derecho del usuario a eliminar su cuenta completa en cualquier momento permanece inalterado. En este caso, todos los datos personales asociados serán eliminados completamente.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 6. Derechos del Usuario */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-primary" />
                6. Derechos del Usuario
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Tienes derecho en cualquier momento a:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>obtener información sobre tus datos personales almacenados</li>
                <li>solicitar la corrección de datos inexactos o incompletos</li>
                <li>solicitar la eliminación o restricción del procesamiento de tus datos</li>
                <li>oponerte al procesamiento de tus datos</li>
                <li>retirar el consentimiento en cualquier momento con efecto futuro</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Puedes enviar solicitudes relacionadas con tus derechos en cualquier momento por correo electrónico a:
              </p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:support@harborstudios.app" className="text-primary hover:underline">
                  support@harborstudios.app
                </a>
              </div>
            </CardContent>
          </Card>

          {/* 7. Cambios en la Política de Privacidad */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                7. Cambios en Esta Política de Privacidad
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Nos reservamos el derecho de actualizar esta política de privacidad según sea necesario para adaptarla a los requisitos legales o cambios en la funcionalidad de la aplicación.
              </p>
              <p className="text-muted-foreground">
                La versión actual siempre está disponible dentro de la aplicación y en nuestro sitio web.
              </p>
            </CardContent>
          </Card>

          {/* 8. Eliminación de Datos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                8. Eliminación de Datos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                La información sobre cómo eliminar tu cuenta de usuario y tus datos personales se puede encontrar en nuestra página separada de eliminación de datos.
                Allí encontrarás una descripción transparente de qué datos se eliminan y cómo puedes enviar una solicitud de eliminación.
              </p>
              <Link to="/captains-log/data-deletion">
                <Button className="mt-4">
                  Ir a la Página de Eliminación de Datos
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm pt-8 border-t border-border/40">
            <Link 
              to="/captains-log/imprint/es" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Aviso Legal
            </Link>
            <Link 
              to="/captains-log/terms" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Términos de Uso
            </Link>
            <Link 
              to="/captains-log/data-deletion" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Eliminación de Datos
            </Link>
          </div>
        </div>
      </div>

      <CaptainsLogFooter />
    </div>
  );
};

export default CaptainsLogPrivacyES;
