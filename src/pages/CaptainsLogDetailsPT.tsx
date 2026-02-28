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
      title: "Diário de Bordo e Viagens",
      items: [
        "Diário de bordo digital com entradas cronológicas (clima, velas, rumo, notas)",
        "Rastreamento GPS com cálculo incremental de distância",
        "Eventos de viagem automáticos e manuais",
        "Entradas retroativas possíveis",
        "Vista diária com segmentos",
        "Vista de mapa da rota percorrida (Leaflet)",
        "Exportação PDF do diário com capturas de mapa",
        "Compartilhar viagem como rota comunitária"
      ]
    },
    {
      emoji: "⚓",
      title: "Vigília de Âncora",
      items: [
        "Detecção de deriva GPS com raio ajustável",
        "Alarme acústico em caso de deriva",
        "Mapa ao vivo com posição da âncora e círculo de giro"
      ],
      isPremium: true
    },
    {
      emoji: "📋",
      title: "Checklists",
      items: [
        "Templates predefinidos (partida, atracação, tempestade, etc.)",
        "Criar e editar checklists personalizadas",
        "Execuções com indicador de progresso"
      ]
    },
    {
      emoji: "🚨",
      title: "Segurança e Emergência",
      items: [
        "Checklists de segurança (equipamento salva-vidas, proteção contra incêndio, etc.)",
        "Checklists expansíveis com itens personalizados",
        "Kit médico com rastreamento de datas de validade",
        "Contatos de emergência e infos médicas da tripulação",
        "Lista de compras para equipamento de segurança em falta",
        "Dicas de segurança e textos de orientação"
      ],
      isPremium: true
    },
    {
      emoji: "⛵",
      title: "Perfil do Barco e Gestão",
      items: [
        "Gerenciar vários barcos (seletor de barco)",
        "Dados: comprimento, boca, calado, deslocamento, motor, tanques",
        "Suporte quilha basculante (calado mín/máx)",
        "Configuração multi-mastro com guarda-roupa de velas dinâmico",
        "Info emergência: contatos, seguros, MMSI, indicativo",
        "Configuração transdutor para medição de profundidade"
      ]
    },
    {
      emoji: "💰",
      title: "Livro Caixa (Despesas do Barco)",
      items: [
        "Gestão de custos independente por barco",
        "Categorias: seguro, reparo, equipamento, vaga, combustível, e mais",
        "Adicionar e reutilizar categorias personalizadas",
        "Upload de recibos (PDF, JPG, PNG, máx 10 MB)",
        "Filtros por ano e categoria com linha de totais",
        "Exportação PDF com período e categoria",
        "Ideal para venda de barco ou visão fiscal"
      ]
    },
    {
      emoji: "📄",
      title: "Documentos",
      items: [
        "Carregar e gerenciar documentos do barco",
        "Categorização e metadados"
      ],
      isPremium: true
    },
    {
      emoji: "🛒",
      title: "Lista de Compras",
      items: [
        "Lista de compras do barco com gestão de itens"
      ]
    },
    {
      emoji: "🧰",
      title: "Manutenção",
      items: [
        "Plano de manutenção com intervalos (horas/meses)",
        "Registro de horas do motor",
        "Templates de manutenção",
        "Indicador de status (pendente, atrasado, ok)",
        "Histórico de manutenção com entradas"
      ],
      isPremium: true
    },
    {
      emoji: "🥫",
      title: "Provisões",
      items: [
        "Criar e gerenciar listas de provisões",
        "Templates para diferentes durações de viagem",
        "Cálculo de quantidades por tamanho da tripulação",
        "Exportação PDF da lista de provisões"
      ]
    },
    {
      emoji: "📚",
      title: "Biblioteca Náutica",
      items: [
        "Glossário (termos náuticos)",
        "Guia de nós",
        "Referência de manobras",
        "Protocolos de comunicação por rádio",
        "Escala Beaufort",
        "Alfabeto de bandeiras"
      ]
    },
    {
      emoji: "🗺️",
      title: "Rotas de Navegação",
      items: [
        "Rotas de navegação clássicas com descrições",
        "Rotas comunitárias (compartilhadas por usuários)",
        "Mapa mundial com visão geral das rotas"
      ],
      isPremium: true
    },
    {
      emoji: "📖",
      title: "Manual",
      items: [
        "Manual integrado do aplicativo"
      ]
    },
    {
      emoji: "📡",
      title: "Integração SignalK / NMEA",
      items: [
        "Conexão com servidor SignalK (instrumentos de bordo)",
        "Exibição de dados ao vivo (vento, profundidade, posição)",
        "Salvar perfis de conexão",
        "Assistente de configuração",
        "Tratamento de conteúdo misto",
        "Diálogo de solicitação de acesso"
      ]
    },
    {
      emoji: "🌤️",
      title: "Clima",
      items: [
        "Widget meteorológico com dados atuais",
        "Bússola de vento",
        "Medidor de profundidade com controle de calado"
      ]
    },
    {
      emoji: "🏛️",
      title: "Legado Digital",
      items: [
        "Configurar acesso aos dados do barco para pessoas de confiança",
        "Verificação por token de email",
        "Gestão de pessoas de contato"
      ]
    },
    {
      emoji: "⚙️",
      title: "Tecnologia e Plataforma",
      items: [
        "Offline-first com IndexedDB (Dexie)",
        "Sincronização automática quando conectado",
        "Instalação PWA (iOS, Android, Desktop)",
        "7 idiomas: DE, EN, FR, ES, IT, NL, PT",
        "Cadeia hash à prova de revisão (princípio blockchain)",
        "Modo escuro/claro",
        "Design responsive (mobile-first)"
      ]
    },
    {
      emoji: "🔒",
      title: "Segurança e Privacidade",
      items: [
        "Segurança em nível de linha em todas as tabelas",
        "Conforme com o GDPR",
        "Função de exclusão de dados (conta + dados)",
        "Aviso legal, privacidade, termos em todos os idiomas"
      ]
    },
    {
      emoji: "💎",
      title: "Premium / Assinatura",
      items: [
        "Integração Stripe com checkout",
        "Portal do cliente para gestão de assinatura",
        "Opção de licença vitalícia",
        "Features premium: vigília de âncora, segurança, manutenção, documentos, livro caixa, rotas"
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
                🚀 Todas as Funcionalidades
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
            🚀 Visão Geral das Funcionalidades
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
              to="/captains-log/imprint/pt" 
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
