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

const CaptainsLogDataDeletionFR = () => {
  const navigate = useNavigate();
  const currentLang = languages.find(l => l.code === "fr");

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
          Retour
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
                className={lang.code === "fr" ? "bg-accent" : ""}
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
          <h1 className="text-4xl font-bold mb-4">Suppression des Données</h1>
          <p className="text-muted-foreground text-lg">Captain Log – Comment supprimer vos données</p>
        </div>

        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Vous avez le droit de demander la suppression de vos données personnelles à tout moment. Voici comment cela fonctionne.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          {/* Option 1: In the App */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                Option 1 : Supprimer les données dans l'app
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Vous pouvez supprimer vos données directement dans l'application Captain Log :
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Ouvrez l'application Captain Log</li>
                <li>Allez dans <strong>Paramètres</strong></li>
                <li>Sélectionnez <strong>Compte & Données</strong></li>
                <li>Appuyez sur <strong>Supprimer toutes les données</strong> ou <strong>Supprimer le compte</strong></li>
                <li>Confirmez la suppression</li>
              </ol>
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Cette action prend effet immédiatement et ne peut pas être annulée.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Option 2: Via Email */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Option 2 : Demander la suppression par email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Vous pouvez également nous envoyer un email pour demander la suppression de vos données :
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Envoyez un email à :</p>
                <a href="mailto:support@harborstudios.app?subject=Suppression%20des%20Donn%C3%A9es%20Captain%20Log" className="text-primary hover:underline text-lg">
                  support@harborstudios.app
                </a>
              </div>
              <p className="text-muted-foreground">Veuillez inclure les informations suivantes dans votre email :</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Objet : « Suppression des Données Captain Log »</li>
                <li>L'adresse email de votre compte</li>
                <li>Facultatif : Raison de la suppression (nous aide à améliorer notre service)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Processing Time */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Délai de Traitement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                <strong>Suppression dans l'app :</strong> Effet immédiat
              </p>
              <p className="text-muted-foreground">
                <strong>Suppression par email :</strong> Nous traiterons votre demande dans un délai de 7 jours et vous informerons une fois terminé. Toutes les données personnelles seront complètement supprimées.
              </p>
            </CardContent>
          </Card>

          {/* What gets deleted */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Qu'est-ce qui est supprimé ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">Une suppression complète des données supprime les informations suivantes :</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Toutes les entrées du journal de bord</li>
                <li>Informations sur le bateau</li>
                <li>Données de l'équipage</li>
                <li>Paramètres et préférences</li>
                <li>Informations du compte (lors de la suppression du compte)</li>
              </ul>
              <Alert className="mt-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Les statistiques d'utilisation anonymisées et agrégées peuvent être conservées à des fins d'analyse, mais ne contiennent aucune donnée personnelle.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Questions ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Si vous avez des questions sur la suppression des données ou la confidentialité, nous sommes là pour vous aider :
              </p>
              <a href="mailto:support@harborstudios.app" className="text-primary hover:underline flex items-center gap-2 text-lg">
                <Mail className="h-4 w-4" />
                support@harborstudios.app
              </a>
              <div className="pt-4">
                <Button asChild variant="outline">
                  <Link to="/captains-log/privacy/fr">
                    Voir la Politique de Confidentialité
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

export default CaptainsLogDataDeletionFR;
