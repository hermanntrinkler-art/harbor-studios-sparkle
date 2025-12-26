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

const CaptainsLogImprintEN = () => {
  const navigate = useNavigate();
  const currentLanguage = languages.find(lang => lang.code === 'en')!;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            className="group"
            onClick={() => navigate('/projects/captains-log/en')}
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back
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
                  className={`cursor-pointer ${lang.code === 'en' ? 'bg-primary/10' : ''}`}
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
          <h1 className="text-4xl font-bold mb-4">Legal Notice – Captain Log</h1>
          <p className="text-muted-foreground text-lg">Legal Information</p>
        </div>

        <div className="space-y-6">
          {/* Provider */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                1. Provider / Responsible Party
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="font-semibold">Harbor Studios</p>
              <p>Calle Calima Sector 1, Riosol 167</p>
              <p>35627 Costa Calma</p>
              <p>Spain</p>
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

          {/* Content Responsibility */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                2. Responsible for Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Harbor Studios</p>
              <p className="text-muted-foreground">Address as above</p>
            </CardContent>
          </Card>

          {/* Scope */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-primary" />
                3. Scope of this Legal Notice
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>This legal notice applies to the following digital offerings by Harbor Studios:</p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold">Captain Log – Digital Logbook for Sailors</p>
                <a href="https://captainlog.pro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://captainlog.pro
                </a>
              </div>
              <p className="text-muted-foreground">as well as associated web, app, and PWA versions.</p>
            </CardContent>
          </Card>

          {/* Liability for Content */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                4. Liability for Content
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>The content of our applications and websites is created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content.</p>
              <p>As a service provider, we are responsible for our own content in accordance with general legal provisions. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.</p>
            </CardContent>
          </Card>

          {/* Liability for External Links */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-primary" />
                5. Liability for External Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our offerings may contain links to external third-party websites over whose content we have no control. We therefore cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content.</p>
            </CardContent>
          </Card>

          {/* Copyright */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                6. Copyright
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>The content and works created by Harbor Studios are subject to copyright. Reproduction, editing, distribution, or any other use beyond the limits of copyright law requires prior written consent.</p>
            </CardContent>
          </Card>

          {/* Privacy & Legal */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                7. Privacy & Legal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Information on the processing of personal data and our legal terms can be found here:</p>
              <div className="flex flex-col gap-2">
                <Link to="/captains-log/privacy" className="text-primary hover:underline flex items-center gap-2">
                  👉 Privacy Policy
                </Link>
                <Link to="/captains-log/terms" className="text-primary hover:underline flex items-center gap-2">
                  👉 Terms of Use
                </Link>
                <Link to="/captains-log/data-deletion" className="text-primary hover:underline flex items-center gap-2">
                  👉 Data Deletion Information
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

export default CaptainsLogImprintEN;