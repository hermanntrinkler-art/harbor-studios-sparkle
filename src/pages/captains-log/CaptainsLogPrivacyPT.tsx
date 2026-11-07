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

const CaptainsLogPrivacyPT = () => {
  const navigate = useNavigate();
  const currentLanguage = languages.find(lang => lang.code === 'pt')!;

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
            Voltar
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
      
      <div className="container mx-auto px-4 py-8 max-w-4xl pt-24">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Política de Privacidade – Captain’s Suite</h1>
        </div>

        <div className="space-y-6">
          {/* 1. Responsável */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                1. Responsável pelo Tratamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="font-semibold">Harbor Studios</p>
              <p>Calle Calima Sector 1, Riosol 167</p>
              <p>35627 Costa Calma</p>
              <p>Espanha</p>
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

          {/* 2. Informações Gerais */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                2. Informações Gerais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A proteção dos seus dados pessoais é importante para nós.
                Esta política de privacidade informa sobre quais dados pessoais são coletados, processados e armazenados em relação ao uso do nosso aplicativo Captain’s Suite.
              </p>
              <p className="text-muted-foreground">
                Tratamos os seus dados de forma confidencial e de acordo com as regulamentações de proteção de dados aplicáveis, em particular o Regulamento Geral de Proteção de Dados (RGPD) e o TTDSG.
              </p>
            </CardContent>
          </Card>

          {/* 3. Coleta e Uso */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                3. Coleta e Uso de Dados Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">a) Ao Usar o Aplicativo</h4>
                <p className="text-muted-foreground mb-4">
                  O Captain’s Suite processa apenas dados que você mesmo fornece ou gera ativamente. Isso inclui em particular:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>seu endereço de e-mail (para registro e autenticação)</li>
                  <li>entradas do diário de bordo, notas e dados de viagem que você mesmo cria</li>
                  <li>fotos opcionais que você carrega através da câmera ou da sua galeria</li>
                  <li>dados de localização (GPS) e informações meteorológicas usadas para registro automático, exibição e documentação de suas viagens no diário de bordo</li>
                </ul>
                <p className="text-muted-foreground">
                  Esses dados são usados exclusivamente para fornecer as funções principais do aplicativo, em particular para armazenar, gerenciar e exibir suas próprias entradas do diário de bordo.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">b) Armazenamento e Processamento de Dados</h4>
                <p className="text-muted-foreground mb-2">
                  O armazenamento e gerenciamento de dados é realizado através da Supabase, um provedor de serviços de nuvem europeu usado como processador de dados de acordo com o Art. 28 do RGPD.
                </p>
                <p className="text-muted-foreground mb-2">
                  A transmissão e o armazenamento de dados são criptografados (TLS para transmissão, AES-256 para armazenamento).
                </p>
                <p className="text-muted-foreground">
                  Os dados pessoais não são compartilhados com terceiros para fins publicitários, analíticos ou outros fins comerciais.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">c) Sem Divulgação a Terceiros</h4>
                <p className="text-muted-foreground">
                  Seus dados pessoais não serão vendidos, alugados ou compartilhados com outras empresas, a menos que exista uma obrigação legal de fazê-lo.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 4. Cookies e Rastreamento */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-primary" />
                4. Cookies e Rastreamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                O Captain’s Suite não usa cookies, ferramentas de análise ou serviços de rastreamento ou publicidade.
              </p>
              <p className="text-muted-foreground">
                Toda a comunicação entre o aplicativo e o servidor é realizada exclusivamente através de conexões HTTPS criptografadas.
              </p>
            </CardContent>
          </Card>

          {/* 5. Armazenamento e Exclusão de Dados */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                5. Armazenamento e Exclusão de Dados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Os dados pessoais (por exemplo, endereço de e-mail, entradas do diário de bordo, dados de localização, fotos) são processados exclusivamente para operar o aplicativo e armazenados em um banco de dados protegido.
              </p>
              <p className="text-muted-foreground">
                Os usuários podem excluir entradas individuais e conteúdo carregado a qualquer momento dentro do aplicativo. Além disso, é possível excluir completamente a conta de usuário. Neste caso, todos os dados pessoais serão removidos de forma completa e irreversível em no máximo 7 dias, a menos que se apliquem requisitos legais de retenção.
              </p>

              {/* Entradas do diário de bordo à prova de auditoria */}
              <div className="mt-6 pt-6 border-t border-border/40">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Entradas do Diário de Bordo à Prova de Auditoria
                </h4>
                <p className="text-muted-foreground mb-4">
                  Certas entradas do diário de bordo (por exemplo, registros de viagem ou eventos) são armazenadas de forma à prova de auditoria. A modificação ou exclusão posterior de entradas individuais é tecnicamente impossível.
                </p>
                <p className="text-muted-foreground mb-4">
                  Isso serve para preservar a integridade dos dados e a rastreabilidade no sentido de um diário de bordo de navio adequado, particularmente em relação a possíveis questões de seguro, responsabilidade ou prova.
                </p>
                <p className="text-muted-foreground mb-4">
                  O armazenamento é baseado no Art. 6(1)(f) do RGPD (interesse legítimo) e no Art. 17(3)(e) do RGPD (exceção ao direito de apagamento para o estabelecimento, exercício ou defesa de reivindicações legais).
                </p>
                <p className="text-muted-foreground">
                  O direito do usuário de ter sua conta completa excluída a qualquer momento permanece inalterado. Neste caso, todos os dados pessoais associados serão completamente removidos.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 6. Direitos do Titular dos Dados */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-primary" />
                6. Direitos do Titular dos Dados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Você tem o direito a qualquer momento de:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>obter informações sobre seus dados pessoais armazenados</li>
                <li>solicitar a correção de dados imprecisos ou incompletos</li>
                <li>solicitar a exclusão ou restrição do processamento de seus dados</li>
                <li>se opor ao processamento de seus dados</li>
                <li>retirar o consentimento a qualquer momento com efeito para o futuro</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Você pode enviar solicitações relacionadas aos seus direitos a qualquer momento por e-mail para:
              </p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:support@harborstudios.app" className="text-primary hover:underline">
                  support@harborstudios.app
                </a>
              </div>
            </CardContent>
          </Card>

          {/* 7. Alterações na Política de Privacidade */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                7. Alterações a Esta Política de Privacidade
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Reservamo-nos o direito de atualizar esta política de privacidade conforme necessário para adaptá-la aos requisitos legais ou alterações na funcionalidade do aplicativo.
              </p>
              <p className="text-muted-foreground">
                A versão atual está sempre disponível dentro do aplicativo e em nosso site.
              </p>
            </CardContent>
          </Card>

          {/* 8. Exclusão de Dados */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                8. Exclusão de Dados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Informações sobre como excluir sua conta de usuário e seus dados pessoais podem ser encontradas em nossa página separada de exclusão de dados.
                Lá você encontrará uma descrição transparente de quais dados são excluídos e como enviar uma solicitação de exclusão.
              </p>
              <Link to="/captains-log/data-deletion">
                <Button className="mt-4">
                  Ir para a Página de Exclusão de Dados
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm pt-8 border-t border-border/40">
            <Link 
              to="/captains-log/imprint/pt" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Aviso Legal
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
      </div>

      <CaptainsLogFooter />
    </div>
  );
};

export default CaptainsLogPrivacyPT;
