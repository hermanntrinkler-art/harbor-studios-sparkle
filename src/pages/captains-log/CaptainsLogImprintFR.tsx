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

const CaptainsLogImprintFR = () => {
  const navigate = useNavigate();
  const currentLanguage = languages.find(lang => lang.code === 'fr')!;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            className="group"
            onClick={() => navigate('/projects/captains-log/fr')}
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Retour
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
                  className={`cursor-pointer ${lang.code === 'fr' ? 'bg-primary/10' : ''}`}
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
          <h1 className="text-4xl font-bold mb-4">Mentions Légales – Captain Log</h1>
          <p className="text-muted-foreground text-lg">Informations Juridiques</p>
        </div>

        <div className="space-y-6">
          {/* Fournisseur */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                1. Fournisseur / Responsable
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="font-semibold">Harbor Studios</p>
              <p>Calle Calima Sector 1, Riosol 167</p>
              <p>35627 Costa Calma</p>
              <p>Espagne</p>
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

          {/* Responsable du contenu */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                2. Responsable du Contenu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Harbor Studios</p>
              <p className="text-muted-foreground">Adresse comme ci-dessus</p>
            </CardContent>
          </Card>

          {/* Champ d'application */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-primary" />
                3. Champ d'Application des Mentions Légales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Ces mentions légales s'appliquent aux offres numériques suivantes de Harbor Studios :</p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold">Captain Log – Journal de Bord Numérique pour Navigateurs</p>
                <a href="https://captainlog.pro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://captainlog.pro
                </a>
              </div>
              <p className="text-muted-foreground">ainsi qu'aux versions web, application et PWA associées.</p>
            </CardContent>
          </Card>

          {/* Responsabilité du contenu */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                4. Responsabilité du Contenu
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Le contenu de nos applications et sites web est créé avec le plus grand soin. Cependant, nous ne pouvons garantir l'exactitude, l'exhaustivité ou l'actualité du contenu.</p>
              <p>En tant que prestataire de services, nous sommes responsables de notre propre contenu conformément aux dispositions légales générales. Cependant, nous ne sommes pas tenus de surveiller les informations transmises ou stockées par des tiers ni d'enquêter sur les circonstances indiquant une activité illégale.</p>
            </CardContent>
          </Card>

          {/* Responsabilité pour les liens externes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-primary" />
                5. Responsabilité pour les Liens Externes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Nos offres peuvent contenir des liens vers des sites web externes de tiers sur le contenu desquels nous n'avons aucun contrôle. Par conséquent, nous ne pouvons accepter aucune responsabilité pour ce contenu tiers. Le fournisseur ou opérateur respectif des pages liées est toujours responsable de leur contenu.</p>
            </CardContent>
          </Card>

          {/* Droits d'auteur */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                6. Droits d'Auteur
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Le contenu et les œuvres créés par Harbor Studios sont soumis au droit d'auteur. La reproduction, l'édition, la distribution ou toute autre utilisation au-delà des limites du droit d'auteur nécessite un consentement écrit préalable.</p>
            </CardContent>
          </Card>

          {/* Confidentialité et juridique */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                7. Confidentialité et Juridique
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Vous trouverez des informations sur le traitement des données personnelles et nos conditions juridiques ici :</p>
              <div className="flex flex-col gap-2">
                <Link to="/captains-log/privacy" className="text-primary hover:underline flex items-center gap-2">
                  👉 Politique de Confidentialité
                </Link>
                <Link to="/captains-log/terms" className="text-primary hover:underline flex items-center gap-2">
                  👉 Conditions d'Utilisation
                </Link>
                <Link to="/captains-log/data-deletion" className="text-primary hover:underline flex items-center gap-2">
                  👉 Informations sur la Suppression des Données
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

export default CaptainsLogImprintFR;