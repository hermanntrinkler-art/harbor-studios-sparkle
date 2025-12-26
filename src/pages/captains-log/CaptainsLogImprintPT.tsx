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

const CaptainsLogImprintPT = () => {
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
            onClick={() => navigate('/projects/captains-log/pt')}
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
          <h1 className="text-4xl font-bold mb-4">Aviso Legal – Captain Log</h1>
          <p className="text-muted-foreground text-lg">Informações Legais</p>
        </div>

        <div className="space-y-6">
          {/* Fornecedor */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                1. Fornecedor / Responsável
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

          {/* Responsável pelo conteúdo */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                2. Responsável pelo Conteúdo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Harbor Studios</p>
              <p className="text-muted-foreground">Endereço como acima</p>
            </CardContent>
          </Card>

          {/* Âmbito de aplicação */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-primary" />
                3. Âmbito de Aplicação deste Aviso Legal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Este aviso legal aplica-se às seguintes ofertas digitais da Harbor Studios:</p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold">Captain Log – Diário de Bordo Digital para Navegadores</p>
                <a href="https://captainlog.pro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://captainlog.pro
                </a>
              </div>
              <p className="text-muted-foreground">bem como às versões web, app e PWA associadas.</p>
            </CardContent>
          </Card>

          {/* Responsabilidade pelo conteúdo */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                4. Responsabilidade pelo Conteúdo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>O conteúdo das nossas aplicações e sites é criado com o maior cuidado. No entanto, não podemos garantir a exatidão, integridade ou atualidade do conteúdo.</p>
              <p>Como prestadores de serviços, somos responsáveis pelo nosso próprio conteúdo de acordo com as disposições legais gerais. No entanto, não somos obrigados a monitorar informações transmitidas ou armazenadas por terceiros nem a investigar circunstâncias que indiquem atividade ilegal.</p>
            </CardContent>
          </Card>

          {/* Responsabilidade por links externos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-primary" />
                5. Responsabilidade por Links Externos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>As nossas ofertas podem conter links para sites externos de terceiros sobre cujo conteúdo não temos controle. Portanto, não podemos aceitar qualquer responsabilidade por este conteúdo de terceiros. O respetivo fornecedor ou operador das páginas vinculadas é sempre responsável pelo seu conteúdo.</p>
            </CardContent>
          </Card>

          {/* Direitos de autor */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                6. Direitos de Autor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>O conteúdo e as obras criadas pela Harbor Studios estão sujeitos a direitos de autor. A reprodução, edição, distribuição ou qualquer outro uso além dos limites da lei de direitos de autor requer consentimento prévio por escrito.</p>
            </CardContent>
          </Card>

          {/* Privacidade e legal */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                7. Privacidade e Legal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Pode encontrar informações sobre o processamento de dados pessoais e os nossos termos legais aqui:</p>
              <div className="flex flex-col gap-2">
                <Link to="/captains-log/privacy" className="text-primary hover:underline flex items-center gap-2">
                  👉 Política de Privacidade
                </Link>
                <Link to="/captains-log/terms" className="text-primary hover:underline flex items-center gap-2">
                  👉 Termos de Utilização
                </Link>
                <Link to="/captains-log/data-deletion" className="text-primary hover:underline flex items-center gap-2">
                  👉 Informações sobre Eliminação de Dados
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

export default CaptainsLogImprintPT;