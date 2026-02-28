import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Mail, Globe } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', path: '/projects/captains-log' },
  { code: 'en', name: 'English', flag: '🇬🇧', path: '/projects/captains-log/en' },
  { code: 'es', name: 'Español', flag: '🇪🇸', path: '/projects/captains-log/es' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', path: '/projects/captains-log/fr' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', path: '/projects/captains-log/it' },
  { code: 'pt', name: 'Português', flag: '🇧🇷', path: '/projects/captains-log/pt' },
];

const CaptainsLogDetailsES = () => {
  const navigate = useNavigate();
  const currentLanguage = languages.find(lang => lang.code === 'es')!;

  const features = [
    {
      emoji: "📔",
      title: "Cuaderno de Bitácora y Travesías",
      items: [
        "Cuaderno de bitácora digital con entradas en línea de tiempo (clima, velas, rumbo, notas)",
        "Seguimiento GPS con cálculo incremental de distancia",
        "Eventos de travesía automáticos y manuales",
        "Entradas retroactivas posibles",
        "Vista diaria con segmentos",
        "Vista de mapa de la ruta navegada (Leaflet)",
        "Exportación PDF del cuaderno con capturas de mapa",
        "Compartir travesía como ruta comunitaria"
      ]
    },
    {
      emoji: "⚓",
      title: "Guardia de Fondeo",
      items: [
        "Detección de deriva basada en GPS con radio ajustable",
        "Alarma acústica en caso de deriva",
        "Mapa en vivo con posición del ancla y círculo de borneo"
      ],
      isPremium: true
    },
    {
      emoji: "📋",
      title: "Listas de Verificación",
      items: [
        "Plantillas predefinidas (salida, atraque, tormenta, etc.)",
        "Crear y editar listas personalizadas",
        "Ejecuciones con indicador de progreso"
      ]
    },
    {
      emoji: "🚨",
      title: "Seguridad y Emergencia",
      items: [
        "Listas de seguridad (equipos de salvamento, protección contra incendios, etc.)",
        "Listas ampliables con puntos propios",
        "Botiquín médico con seguimiento de caducidad",
        "Contactos de emergencia y datos médicos de la tripulación",
        "Lista de compras para equipo de seguridad faltante",
        "Consejos de seguridad y textos de orientación"
      ],
      isPremium: true
    },
    {
      emoji: "⛵",
      title: "Perfil del Barco y Gestión",
      items: [
        "Gestionar varios barcos (selector de barco)",
        "Datos: eslora, manga, calado, desplazamiento, motor, tanques",
        "Soporte de quilla basculante (calado mín/máx)",
        "Configuración multi-mástil con guardarropa de velas dinámico",
        "Info de emergencia: contactos, seguros, MMSI, indicativo",
        "Configuración de transductor para medición de profundidad"
      ]
    },
    {
      emoji: "💰",
      title: "Libro de Caja (Gastos del Barco)",
      items: [
        "Gestión de costes independiente por barco",
        "Categorías: seguro, reparación, equipamiento, amarre, combustible, y más",
        "Añadir y reutilizar categorías personalizadas",
        "Subida de recibos (PDF, JPG, PNG, máx 10 MB)",
        "Filtros por año y categoría con fila de totales",
        "Exportación PDF con período y categoría",
        "Ideal para venta de barco o resumen fiscal"
      ]
    },
    {
      emoji: "📄",
      title: "Documentos",
      items: [
        "Subir y gestionar documentos del barco",
        "Categorización y metadatos"
      ],
      isPremium: true
    },
    {
      emoji: "🛒",
      title: "Lista de Compras",
      items: [
        "Lista de compras del barco con gestión de artículos"
      ]
    },
    {
      emoji: "🧰",
      title: "Mantenimiento",
      items: [
        "Plan de mantenimiento con intervalos (horas/meses)",
        "Registro de horas de motor",
        "Plantillas de mantenimiento",
        "Indicador de estado (pendiente, vencido, ok)",
        "Historial de mantenimiento con entradas"
      ],
      isPremium: true
    },
    {
      emoji: "🥫",
      title: "Provisiones",
      items: [
        "Crear y gestionar listas de provisiones",
        "Plantillas para diferentes duraciones de viaje",
        "Cálculo de cantidades según tamaño de tripulación",
        "Exportación PDF de la lista de provisiones"
      ]
    },
    {
      emoji: "📚",
      title: "Biblioteca Náutica",
      items: [
        "Glosario (términos náuticos)",
        "Guía de nudos",
        "Referencia de maniobras",
        "Protocolos de comunicación por radio",
        "Escala Beaufort",
        "Alfabeto de banderas"
      ]
    },
    {
      emoji: "🗺️",
      title: "Rutas de Navegación",
      items: [
        "Rutas de navegación clásicas con descripciones",
        "Rutas comunitarias (compartidas por usuarios)",
        "Mapa mundial con vista general de rutas"
      ],
      isPremium: true
    },
    {
      emoji: "📖",
      title: "Manual",
      items: [
        "Manual integrado de la aplicación"
      ]
    },
    {
      emoji: "📡",
      title: "Integración SignalK / NMEA",
      items: [
        "Conexión con servidor SignalK (instrumentos de a bordo)",
        "Visualización de datos en vivo (viento, profundidad, posición)",
        "Guardar perfiles de conexión",
        "Asistente de configuración",
        "Manejo de contenido mixto",
        "Diálogo de solicitud de acceso"
      ]
    },
    {
      emoji: "🌤️",
      title: "Clima",
      items: [
        "Widget meteorológico con datos actuales",
        "Brújula de viento",
        "Medidor de profundidad con control de calado"
      ]
    },
    {
      emoji: "🏛️",
      title: "Legado Digital",
      items: [
        "Configurar acceso a datos del barco para personas de confianza",
        "Verificación por token de email",
        "Gestión de personas de contacto"
      ]
    },
    {
      emoji: "⚙️",
      title: "Tecnología y Plataforma",
      items: [
        "Offline-first con IndexedDB (Dexie)",
        "Sincronización automática al conectar",
        "Instalación PWA (iOS, Android, Escritorio)",
        "7 idiomas: DE, EN, FR, ES, IT, NL, PT",
        "Cadena de hash a prueba de revisión (principio blockchain)",
        "Modo oscuro/claro",
        "Diseño responsive (mobile-first)"
      ]
    },
    {
      emoji: "🔒",
      title: "Seguridad y Privacidad",
      items: [
        "Seguridad a nivel de fila en todas las tablas",
        "Conforme al RGPD",
        "Función de eliminación de datos (cuenta + datos)",
        "Aviso legal, privacidad, condiciones en todos los idiomas"
      ]
    },
    {
      emoji: "💎",
      title: "Premium / Suscripción",
      items: [
        "Integración Stripe con checkout",
        "Portal de cliente para gestión de suscripción",
        "Opción de licencia vitalicia",
        "Features premium: guardia de fondeo, seguridad, mantenimiento, documentos, libro de caja, rutas"
      ],
      isPremium: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Volver</span>
          </Link>
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 bg-green-500/20 text-green-600 border-green-500/30">
            En Vivo
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Captain's Log ⚓️
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
            Tu Cuaderno de Bitácora Digital para Navegantes de Verdad
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Captain's Log es una aplicación de bitácora moderna y funcional sin conexión para navegantes 
            que quieren documentar de forma fiable su barco, sus travesías y sus datos – sin complejidad innecesaria.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://captainlog.pro/" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                Ir a la App
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            🚀 Resumen de Funciones
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Todo lo que necesitas para tu cuaderno de bitácora digital
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`border-2 hover:border-primary transition-all duration-300 hover:shadow-lg ${
                  feature.isPremium ? 'border-amber-500/50 bg-gradient-to-br from-amber-500/5 to-transparent' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{feature.emoji}</span>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    {feature.isPremium && (
                      <Badge variant="default" className="bg-amber-500 text-white text-xs ml-auto">
                        Premium
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* In a nutshell */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-3xl text-center">En Resumen</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Captain's Log no es un sistema de navegación, sino tu cuaderno de bitácora digital.
                <br />
                <span className="text-foreground font-medium">
                  Piensa adelante, documenta de forma fiable y te ayuda a mantener el control – sin ser paternalista.
                </span>
              </p>
              <a href="https://captainlog.pro/" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Descubre Captain's Log Ahora
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">
              ¿Preguntas o comentarios?
            </span>
          </div>
          <a
            href="mailto:support@harborstudios.app"
            className="text-primary hover:underline text-lg font-medium"
          >
            support@harborstudios.app
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            ¡Esperamos saber de ti!
          </p>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-8 px-4 border-t border-border/40">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link 
              to="/captains-log/imprint/es" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Aviso Legal
            </Link>
            <Link 
              to="/captains-log/privacy" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidad
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
      </section>
    </div>
  );
};

export default CaptainsLogDetailsES;
