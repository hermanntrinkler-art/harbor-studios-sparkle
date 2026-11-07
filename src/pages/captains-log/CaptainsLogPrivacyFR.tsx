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

const CaptainsLogPrivacyFR = () => {
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
            onClick={() => window.history.back()}
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
          <h1 className="text-4xl font-bold mb-4">Politique de Confidentialité – Captain’s Suite</h1>
        </div>

        <div className="space-y-6">
          {/* 1. Responsable */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                1. Responsable du Traitement
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

          {/* 2. Informations Générales */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                2. Informations Générales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                La protection de vos données personnelles est importante pour nous.
                Cette politique de confidentialité vous informe sur les données personnelles collectées, traitées et stockées dans le cadre de l'utilisation de notre application Captain’s Suite.
              </p>
              <p className="text-muted-foreground">
                Nous traitons vos données de manière confidentielle et conformément aux réglementations applicables en matière de protection des données, notamment le Règlement Général sur la Protection des Données (RGPD) et le TTDSG.
              </p>
            </CardContent>
          </Card>

          {/* 3. Collecte et Utilisation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                3. Collecte et Utilisation des Données Personnelles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">a) Lors de l'Utilisation de l'Application</h4>
                <p className="text-muted-foreground mb-4">
                  Captain’s Suite ne traite que les données que vous fournissez vous-même ou que vous générez activement. Cela comprend notamment :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>votre adresse e-mail (pour l'inscription et l'authentification)</li>
                  <li>les entrées du journal de bord, notes et données de voyage que vous créez vous-même</li>
                  <li>les photos optionnelles que vous téléchargez via l'appareil photo ou depuis votre galerie</li>
                  <li>les données de localisation (GPS) et les informations météorologiques utilisées pour l'enregistrement automatique, l'affichage et la documentation de vos voyages dans le journal de bord</li>
                </ul>
                <p className="text-muted-foreground">
                  Ces données sont utilisées exclusivement pour fournir les fonctions principales de l'application, notamment pour stocker, gérer et afficher vos propres entrées du journal de bord.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">b) Stockage et Traitement des Données</h4>
                <p className="text-muted-foreground mb-2">
                  Le stockage et la gestion des données sont effectués via Supabase, un fournisseur de services cloud européen utilisé comme sous-traitant conformément à l'Art. 28 du RGPD.
                </p>
                <p className="text-muted-foreground mb-2">
                  La transmission et le stockage des données sont chiffrés (TLS pour la transmission, AES-256 pour le stockage).
                </p>
                <p className="text-muted-foreground">
                  Les données personnelles ne sont pas partagées avec des tiers à des fins publicitaires, analytiques ou commerciales.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">c) Pas de Divulgation à des Tiers</h4>
                <p className="text-muted-foreground">
                  Vos données personnelles ne seront pas vendues, louées ou partagées avec d'autres entreprises, sauf s'il existe une obligation légale de le faire.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 4. Cookies et Suivi */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-primary" />
                4. Cookies et Suivi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Captain’s Suite n'utilise pas de cookies, d'outils d'analyse, ni de services de suivi ou de publicité.
              </p>
              <p className="text-muted-foreground">
                Toute communication entre l'application et le serveur est effectuée exclusivement via des connexions HTTPS chiffrées.
              </p>
            </CardContent>
          </Card>

          {/* 5. Stockage et Suppression des Données */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                5. Stockage et Suppression des Données
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Les données personnelles (par exemple, adresse e-mail, entrées du journal de bord, données de localisation, photos) sont traitées exclusivement pour le fonctionnement de l'application et stockées dans une base de données sécurisée.
              </p>
              <p className="text-muted-foreground">
                Les utilisateurs peuvent supprimer des entrées individuelles et du contenu téléchargé à tout moment dans l'application. De plus, il est possible de supprimer complètement le compte utilisateur. Dans ce cas, toutes les données personnelles seront supprimées de manière complète et irréversible dans un délai maximum de 7 jours, sauf si des exigences légales de conservation s'appliquent.
              </p>

              {/* Entrées du journal de bord infalsifiables */}
              <div className="mt-6 pt-6 border-t border-border/40">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Entrées du Journal de Bord Infalsifiables
                </h4>
                <p className="text-muted-foreground mb-4">
                  Certaines entrées du journal de bord (par exemple, les journaux de voyage ou d'événements) sont stockées de manière infalsifiable. La modification ou la suppression ultérieure d'entrées individuelles est techniquement impossible.
                </p>
                <p className="text-muted-foreground mb-4">
                  Cela sert à préserver l'intégrité des données et la traçabilité au sens d'un journal de bord de navire approprié, notamment en relation avec d'éventuelles questions d'assurance, de responsabilité ou de preuve.
                </p>
                <p className="text-muted-foreground mb-4">
                  Le stockage est basé sur l'Art. 6(1)(f) du RGPD (intérêt légitime) et l'Art. 17(3)(e) du RGPD (exception au droit à l'effacement pour la constatation, l'exercice ou la défense de droits en justice).
                </p>
                <p className="text-muted-foreground">
                  Le droit de l'utilisateur de faire supprimer son compte complet à tout moment reste inchangé. Dans ce cas, toutes les données personnelles associées seront complètement supprimées.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 6. Droits des Utilisateurs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-primary" />
                6. Droits des Utilisateurs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Vous avez le droit à tout moment de :</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>obtenir des informations sur vos données personnelles stockées</li>
                <li>demander la correction de données inexactes ou incomplètes</li>
                <li>demander la suppression ou la limitation du traitement de vos données</li>
                <li>vous opposer au traitement de vos données</li>
                <li>retirer votre consentement à tout moment avec effet pour l'avenir</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Vous pouvez envoyer des demandes concernant vos droits à tout moment par e-mail à :
              </p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:support@harborstudios.app" className="text-primary hover:underline">
                  support@harborstudios.app
                </a>
              </div>
            </CardContent>
          </Card>

          {/* 7. Modifications de la Politique de Confidentialité */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                7. Modifications de Cette Politique de Confidentialité
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Nous nous réservons le droit de mettre à jour cette politique de confidentialité si nécessaire pour l'adapter aux exigences légales ou aux changements de fonctionnalité de l'application.
              </p>
              <p className="text-muted-foreground">
                La version actuelle est toujours disponible dans l'application et sur notre site web.
              </p>
            </CardContent>
          </Card>

          {/* 8. Suppression des Données */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                8. Suppression des Données
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Les informations sur la suppression de votre compte utilisateur et de vos données personnelles se trouvent sur notre page dédiée à la suppression des données.
                Vous y trouverez une description transparente des données supprimées et comment soumettre une demande de suppression.
              </p>
              <Link to="/captains-log/data-deletion">
                <Button className="mt-4">
                  Aller à la Page de Suppression des Données
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm pt-8 border-t border-border/40">
            <Link 
              to="/captains-log/imprint/fr" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Mentions Légales
            </Link>
            <Link 
              to="/captains-log/terms" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Conditions d'Utilisation
            </Link>
            <Link 
              to="/captains-log/data-deletion" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Suppression des Données
            </Link>
          </div>
        </div>
      </div>

      <CaptainsLogFooter />
    </div>
  );
};

export default CaptainsLogPrivacyFR;
