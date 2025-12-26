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

const CaptainsLogDetailsPT = () => {
  const navigate = useNavigate();
  const currentLanguage = languages.find(lang => lang.code === 'pt')!;

  const features = [
    {
      emoji: "📔",
      title: "Diário de Bordo Digital e Gestão de Viagens",
      items: [
        "Criar e gerenciar viagens completas",
        "Registro automático de partida, destino, duração e distância",
        "Registrar manobras, mudanças de rumo e eventos",
        "Notas livres a qualquer momento",
        "Estatísticas claras sobre distância, tempo e uso"
      ]
    },
    {
      emoji: "⚓",
      title: "GPS e Funções de Posição",
      items: [
        "Registro automático de posição durante a navegação",
        "Detecção de ancoragem, manobras e paradas",
        "Calado dinâmico (ex: para veleiros com quilha basculante)",
        "Importação opcional via Signal K (rede de bordo)"
      ]
    },
    {
      emoji: "🧭",
      title: "Vigília de Âncora e Segurança",
      items: [
        "Definir ponto de ancoragem com círculo de giro",
        "Monitoramento permanente da posição",
        "Alarme em caso de deriva",
        "Funciona offline – opera sem conexão com internet"
      ]
    },
    {
      emoji: "🧰",
      title: "Manutenção e Dados do Barco",
      items: [
        "Gestão dos dados do barco (dimensões, motor, velas, tanques)",
        "Programas de manutenção com intervalos (tempo ou horas de operação)",
        "Histórico de todos os trabalhos concluídos",
        "Cálculo automático das horas de operação",
        "Status de manutenção claro (OK / pendente / atrasado)"
      ]
    },
    {
      emoji: "📋",
      title: "Checklists e Procedimentos",
      items: [
        "Checklists predefinidas (partida, ancoragem, navegação noturna, etc.)",
        "Criar checklists personalizadas",
        "Progresso visível por execução",
        "Ideal para trocas de tripulação ou procedimentos recorrentes"
      ]
    },
    {
      emoji: "📚",
      title: "Base de Conhecimento",
      items: [
        "Dicionário náutico",
        "Visões gerais de nós e manobras",
        "Procedimentos de rádio e emergência (Mayday, Pan-Pan, Sécurité)",
        "Alfabeto de bandeiras internacional",
        "Função de busca integrada"
      ]
    },
    {
      emoji: "🗺️",
      title: "Exportação e Documentação",
      items: [
        "Exportação PDF de diários de bordo completos",
        "Exportação GPX e KML para software de navegação",
        "Backup e recuperação completa de dados"
      ]
    },
    {
      emoji: "🔒",
      title: "Segurança e Privacidade",
      items: [
        "Dados pessoais permanecem privados",
        "Sem compartilhamento com terceiros",
        "Controle total sobre exclusão e exportação",
        "Armazenamento auditável dos dados de bordo",
        "Processamento em conformidade com o GDPR"
      ]
    },
    {
      emoji: "⚙️",
      title: "Tecnologia e Plataforma",
      items: [
        "Progressive Web App (PWA)",
        "Funciona em smartphone, tablet e desktop",
        "Utilizável offline",
        "Sincronização quando conectado",
        "Opcional: Conexão Signal-K para dados de bordo"
      ]
    },
    {
      emoji: "💎",
      title: "Funcionalidades Premium",
      items: [
        "Integração Signal-K",
        "Funções de manutenção estendidas",
        "Dados de clima e marés",
        "Checklists personalizadas",
        "Futuras funcionalidades premium incluídas"
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
            <span className="font-medium">Voltar</span>
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
                  className={`cursor-pointer ${lang.code === 'pt' ? 'bg-primary/10' : ''}`}
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
            Online
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Captain's Log ⚓️
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
            Seu Diário de Bordo Digital para Navegadores de Verdade
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Captain's Log é um aplicativo de diário de bordo moderno e funcional offline para navegadores 
            que querem documentar de forma confiável seu barco, suas viagens e seus dados – sem complexidade desnecessária.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#features">
              <Button size="lg" variant="outline">
                🚀 Funcionalidades Principais
              </Button>
            </a>
            <a href="https://captainlog.pro/" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                Abrir App
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            🚀 Funcionalidades Principais
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Tudo o que você precisa para seu diário de bordo digital
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
              <CardTitle className="text-3xl text-center">Em Resumo</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Captain's Log não é um sistema de navegação, mas seu diário de bordo digital.
                <br />
                <span className="text-foreground font-medium">
                  Pensa adiante, documenta de forma confiável e ajuda você a manter o controle – sem ser paternalista.
                </span>
              </p>
              <a href="https://captainlog.pro/" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Descubra o Captain's Log Agora
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
              Perguntas ou feedback?
            </span>
          </div>
          <a
            href="mailto:support@harborstudios.app"
            className="text-primary hover:underline text-lg font-medium"
          >
            support@harborstudios.app
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            Esperamos ouvir de você!
          </p>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-8 px-4 border-t border-border/40">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link 
              to="/captains-log/imprint" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Aviso Legal
            </Link>
            <Link 
              to="/captains-log/privacy" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link 
              to="/captains-log/terms" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Termos de Uso
            </Link>
            <Link 
              to="/captains-log/data-deletion" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Exclusão de Dados
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaptainsLogDetailsPT;
