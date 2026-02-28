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

const CaptainsLogDetailsFR = () => {
  const navigate = useNavigate();
  const currentLanguage = languages.find(lang => lang.code === 'fr')!;

  const features = [
    {
      emoji: "📔",
      title: "Journal de Bord et Traversées",
      items: [
        "Journal de bord numérique avec entrées chronologiques (météo, voiles, cap, notes)",
        "Suivi GPS avec calcul incrémental de distance",
        "Événements de traversée automatiques et manuels",
        "Entrées antidatées possibles",
        "Vue journalière avec segments",
        "Vue carte de la route parcourue (Leaflet)",
        "Export PDF du journal avec captures de carte",
        "Partager la traversée comme route communautaire"
      ]
    },
    {
      emoji: "⚓",
      title: "Veille au Mouillage",
      items: [
        "Détection de dérive GPS avec rayon réglable",
        "Alarme acoustique en cas de dérive",
        "Carte en direct avec position de l'ancre et cercle d'évitage"
      ],
      isPremium: true
    },
    {
      emoji: "📋",
      title: "Check-lists",
      items: [
        "Modèles prédéfinis (départ, accostage, tempête, etc.)",
        "Créer et modifier des check-lists personnalisées",
        "Exécutions avec indicateur de progression"
      ]
    },
    {
      emoji: "🚨",
      title: "Sécurité et Urgence",
      items: [
        "Check-lists de sécurité (équipements de sauvetage, protection incendie, etc.)",
        "Check-lists extensibles avec points personnalisés",
        "Pharmacie de bord avec suivi des dates d'expiration",
        "Contacts d'urgence et infos médicales de l'équipage",
        "Liste d'achats pour équipement de sécurité manquant",
        "Conseils de sécurité et textes de guidance"
      ],
      isPremium: true
    },
    {
      emoji: "⛵",
      title: "Profil du Bateau et Gestion",
      items: [
        "Gérer plusieurs bateaux (sélecteur de bateau)",
        "Données : longueur, largeur, tirant d'eau, déplacement, moteur, réservoirs",
        "Support quille pivotante (tirant d'eau min/max)",
        "Configuration multi-mât avec garde-robe de voiles dynamique",
        "Infos d'urgence : contacts, assurances, MMSI, indicatif",
        "Configuration transducteur pour mesure de profondeur"
      ]
    },
    {
      emoji: "💰",
      title: "Livre de Caisse (Dépenses du Bateau)",
      items: [
        "Gestion des coûts indépendante par bateau",
        "Catégories : assurance, réparation, équipement, place de port, carburant, et plus",
        "Ajouter et réutiliser des catégories personnalisées",
        "Téléchargement de reçus (PDF, JPG, PNG, max 10 Mo)",
        "Filtres par année et catégorie avec ligne de totaux",
        "Export PDF avec période et catégorie",
        "Idéal pour vente de bateau ou aperçu fiscal"
      ]
    },
    {
      emoji: "📄",
      title: "Documents",
      items: [
        "Télécharger et gérer les documents du bateau",
        "Catégorisation et métadonnées"
      ],
      isPremium: true
    },
    {
      emoji: "🛒",
      title: "Liste d'Achats",
      items: [
        "Liste d'achats du bateau avec gestion des articles"
      ]
    },
    {
      emoji: "🧰",
      title: "Maintenance",
      items: [
        "Plan de maintenance avec intervalles (heures/mois)",
        "Suivi des heures moteur",
        "Modèles de maintenance",
        "Affichage du statut (à faire, en retard, ok)",
        "Historique de maintenance avec entrées"
      ],
      isPremium: true
    },
    {
      emoji: "🥫",
      title: "Provisions",
      items: [
        "Créer et gérer des listes de provisions",
        "Modèles pour différentes durées de navigation",
        "Calcul des quantités selon la taille de l'équipage",
        "Export PDF de la liste de provisions"
      ]
    },
    {
      emoji: "📚",
      title: "Bibliothèque Maritime",
      items: [
        "Glossaire (termes nautiques)",
        "Guide des nœuds",
        "Référence des manœuvres",
        "Protocoles de communication radio",
        "Échelle de Beaufort",
        "Alphabet des pavillons"
      ]
    },
    {
      emoji: "🗺️",
      title: "Routes de Navigation",
      items: [
        "Routes de navigation classiques avec descriptions",
        "Routes communautaires (partagées par les utilisateurs)",
        "Carte mondiale avec vue d'ensemble des routes"
      ],
      isPremium: true
    },
    {
      emoji: "📖",
      title: "Manuel",
      items: [
        "Manuel intégré de l'application"
      ]
    },
    {
      emoji: "📡",
      title: "Intégration SignalK / NMEA",
      items: [
        "Connexion au serveur SignalK (instruments de bord)",
        "Affichage de données en direct (vent, profondeur, position)",
        "Sauvegarder les profils de connexion",
        "Assistant de configuration",
        "Gestion du contenu mixte",
        "Dialogue de demande d'accès"
      ]
    },
    {
      emoji: "🌤️",
      title: "Météo",
      items: [
        "Widget météo avec données actuelles",
        "Compas de vent",
        "Jauge de profondeur avec curseur de tirant d'eau"
      ]
    },
    {
      emoji: "🏛️",
      title: "Héritage Numérique",
      items: [
        "Configurer l'accès aux données du bateau pour des personnes de confiance",
        "Vérification par jeton email",
        "Gestion des personnes de contact"
      ]
    },
    {
      emoji: "⚙️",
      title: "Technologie et Plateforme",
      items: [
        "Offline-first avec IndexedDB (Dexie)",
        "Synchronisation automatique une fois connecté",
        "Installation PWA (iOS, Android, Bureau)",
        "7 langues : DE, EN, FR, ES, IT, NL, PT",
        "Chaîne de hachage infalsifiable (principe blockchain)",
        "Mode sombre/clair",
        "Design responsive (mobile-first)"
      ]
    },
    {
      emoji: "🔒",
      title: "Sécurité et Confidentialité",
      items: [
        "Sécurité au niveau des lignes sur toutes les tables",
        "Conforme au RGPD",
        "Fonction de suppression des données (compte + données)",
        "Mentions légales, confidentialité, CGU dans toutes les langues"
      ]
    },
    {
      emoji: "💎",
      title: "Premium / Abonnement",
      items: [
        "Intégration Stripe avec checkout",
        "Portail client pour gestion d'abonnement",
        "Option licence à vie",
        "Features premium : veille au mouillage, sécurité, maintenance, documents, livre de caisse, routes"
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
            <span className="font-medium">Retour</span>
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 bg-green-500/20 text-green-600 border-green-500/30">
            En Ligne
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Captain's Log ⚓️
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
            Votre Journal de Bord Numérique pour les Vrais Navigateurs
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Captain's Log est une application de journal de bord moderne et fonctionnelle hors ligne pour les navigateurs 
            qui veulent documenter de manière fiable leur bateau, leurs traversées et leurs données – sans complexité inutile.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#features">
              <Button size="lg" variant="outline">
                🚀 Toutes les Fonctionnalités
              </Button>
            </a>
            <a href="https://captainlog.pro/" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                Ouvrir l'App
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            🚀 Aperçu des Fonctionnalités
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Tout ce dont vous avez besoin pour votre journal de bord numérique
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
              <CardTitle className="text-3xl text-center">En Résumé</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Captain's Log n'est pas un système de navigation, mais votre journal de bord numérique.
                <br />
                <span className="text-foreground font-medium">
                  Il anticipe, documente de manière fiable et vous aide à garder le contrôle – sans être paternaliste.
                </span>
              </p>
              <a href="https://captainlog.pro/" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Découvrez Captain's Log Maintenant
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
              Questions ou commentaires ?
            </span>
          </div>
          <a
            href="mailto:support@harborstudios.app"
            className="text-primary hover:underline text-lg font-medium"
          >
            support@harborstudios.app
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            Nous avons hâte de vous entendre !
          </p>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-8 px-4 border-t border-border/40">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link 
              to="/captains-log/imprint/fr" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Mentions Légales
            </Link>
            <Link 
              to="/captains-log/privacy" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Politique de Confidentialité
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
      </section>
    </div>
  );
};

export default CaptainsLogDetailsFR;
