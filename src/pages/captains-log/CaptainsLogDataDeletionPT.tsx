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

const CaptainsLogDataDeletionPT = () => {
  const navigate = useNavigate();
  const currentLang = languages.find(l => l.code === "pt");

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
          Voltar
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
                className={lang.code === "pt" ? "bg-accent" : ""}
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
          <h1 className="text-4xl font-bold mb-4">Exclusão de Dados</h1>
          <p className="text-muted-foreground text-lg">Captain Log – Como excluir seus dados</p>
        </div>

        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Você tem o direito de solicitar a exclusão dos seus dados pessoais a qualquer momento. Veja como funciona.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          {/* Option 1: In the App */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                Opção 1: Excluir dados no app
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Você pode excluir seus dados diretamente no app Captain Log:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Abra o app Captain Log</li>
                <li>Vá para <strong>Configurações</strong></li>
                <li>Selecione <strong>Conta e Dados</strong></li>
                <li>Toque em <strong>Excluir todos os dados</strong> ou <strong>Excluir conta</strong></li>
                <li>Confirme a exclusão</li>
              </ol>
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Esta ação tem efeito imediato e não pode ser desfeita.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Option 2: Via Email */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Opção 2: Solicitar exclusão por email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Você também pode nos enviar um email para solicitar a exclusão dos seus dados:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Envie um email para:</p>
                <a href="mailto:support@harborstudios.app?subject=Exclus%C3%A3o%20de%20Dados%20Captain%20Log" className="text-primary hover:underline text-lg">
                  support@harborstudios.app
                </a>
              </div>
              <p className="text-muted-foreground">Por favor, inclua as seguintes informações no seu email:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Assunto: "Exclusão de Dados Captain Log"</li>
                <li>O endereço de email da sua conta</li>
                <li>Opcional: Motivo da exclusão (nos ajuda a melhorar nosso serviço)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Processing Time */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Prazo de Processamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                <strong>Exclusão no app:</strong> Efeito imediato
              </p>
              <p className="text-muted-foreground">
                <strong>Exclusão por email:</strong> Processaremos sua solicitação em até 7 dias e informaremos você quando estiver concluída. Todos os dados pessoais serão completamente removidos.
              </p>
            </CardContent>
          </Card>

          {/* What gets deleted */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                O que é excluído?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">Uma exclusão completa de dados remove as seguintes informações:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Todas as entradas do diário de bordo</li>
                <li>Informações do barco</li>
                <li>Dados da tripulação</li>
                <li>Configurações e preferências</li>
                <li>Informações da conta (ao excluir a conta)</li>
              </ul>
              <Alert className="mt-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Estatísticas de uso anonimizadas e agregadas podem ser mantidas para fins de análise, mas não contêm dados pessoais.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Dúvidas?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Se você tiver dúvidas sobre a exclusão de dados ou privacidade, estamos aqui para ajudar:
              </p>
              <a href="mailto:support@harborstudios.app" className="text-primary hover:underline flex items-center gap-2 text-lg">
                <Mail className="h-4 w-4" />
                support@harborstudios.app
              </a>
              <div className="pt-4">
                <Button asChild variant="outline">
                  <Link to="/captains-log/privacy/pt">
                    Ver Política de Privacidade
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

export default CaptainsLogDataDeletionPT;
