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

const CaptainsLogPrivacyEN = () => {
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
            onClick={() => window.history.back()}
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
          <h1 className="text-4xl font-bold mb-4">Privacy Policy – Captain's Log</h1>
        </div>

        <div className="space-y-6">
          {/* 1. Controller */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                1. Data Controller
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

          {/* 2. General Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                2. General Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Protecting your personal data is important to us.
                This privacy policy informs you about which personal data is collected, processed, and stored in connection with the use of our Captain's Log app.
              </p>
              <p className="text-muted-foreground">
                We treat your data confidentially and in accordance with applicable data protection regulations, in particular the General Data Protection Regulation (GDPR) and the TTDSG.
              </p>
            </CardContent>
          </Card>

          {/* 3. Collection and Use */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                3. Collection and Use of Personal Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">a) When Using the App</h4>
                <p className="text-muted-foreground mb-4">
                  Captain's Log only processes data that you provide yourself or actively generate. This includes in particular:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>your email address (for registration and authentication)</li>
                  <li>logbook entries, notes, and trip data that you create yourself</li>
                  <li>optional photos that you upload via the camera or from your gallery</li>
                  <li>location data (GPS) and weather information used for automatic recording, display, and documentation of your trips in the logbook</li>
                </ul>
                <p className="text-muted-foreground">
                  This data is used exclusively to provide the core functions of the app, in particular for storing, managing, and displaying your own logbook entries.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">b) Storage and Data Processing</h4>
                <p className="text-muted-foreground mb-2">
                  Data storage and management is carried out via Supabase, a European cloud service provider that is used as a data processor in accordance with Art. 28 GDPR.
                </p>
                <p className="text-muted-foreground mb-2">
                  Data transmission and storage is encrypted (TLS for transmission, AES-256 for storage).
                </p>
                <p className="text-muted-foreground">
                  Personal data is not shared with third parties for advertising, analytics, or other commercial purposes.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">c) No Disclosure to Third Parties</h4>
                <p className="text-muted-foreground">
                  Your personal data will not be sold, rented, or shared with other companies unless there is a legal obligation to do so.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 4. Cookies and Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-primary" />
                4. Cookies and Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Captain's Log does not use cookies, analytics tools, or tracking or advertising services.
              </p>
              <p className="text-muted-foreground">
                All communication between the app and server is carried out exclusively via encrypted HTTPS connections.
              </p>
            </CardContent>
          </Card>

          {/* 5. Data Storage and Deletion */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                5. Data Storage and Deletion
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Personal data (e.g., email address, logbook entries, location data, photos) is processed exclusively for operating the application and stored in a secured database.
              </p>
              <p className="text-muted-foreground">
                Users can delete individual entries and uploaded content at any time within the application. Additionally, it is possible to completely delete the user account. In this case, all personal data will be completely and irreversibly removed within 7 days at the latest, unless legal retention requirements apply.
              </p>

              {/* Audit-proof logbook entries */}
              <div className="mt-6 pt-6 border-t border-border/40">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Audit-Proof Logbook Entries
                </h4>
                <p className="text-muted-foreground mb-4">
                  Certain logbook entries (e.g., trip or event logs) are stored in an audit-proof manner. Subsequent modification or deletion of individual entries is technically impossible.
                </p>
                <p className="text-muted-foreground mb-4">
                  This serves to preserve data integrity and traceability in the sense of a proper ship's log, particularly in connection with possible insurance, liability, or evidentiary matters.
                </p>
                <p className="text-muted-foreground mb-4">
                  Storage is based on Art. 6(1)(f) GDPR (legitimate interest) and Art. 17(3)(e) GDPR (exception to the right to erasure for the establishment, exercise, or defense of legal claims).
                </p>
                <p className="text-muted-foreground">
                  The user's right to have their entire account deleted at any time remains unaffected. In this case, all associated personal data will be completely removed.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 6. Rights of Data Subjects */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-primary" />
                6. Rights of Data Subjects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">You have the right at any time to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>obtain information about your stored personal data</li>
                <li>request the correction of inaccurate or incomplete data</li>
                <li>request the deletion or restriction of processing of your data</li>
                <li>object to the processing of your data</li>
                <li>withdraw consent at any time with effect for the future</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                You can send requests regarding your rights at any time via email to:
              </p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:support@harborstudios.app" className="text-primary hover:underline">
                  support@harborstudios.app
                </a>
              </div>
            </CardContent>
          </Card>

          {/* 7. Changes to Privacy Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                7. Changes to This Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We reserve the right to update this privacy policy as necessary to adapt it to legal requirements or changes in app functionality.
              </p>
              <p className="text-muted-foreground">
                The current version is always available within the app and on our website.
              </p>
            </CardContent>
          </Card>

          {/* 8. Data Deletion */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                8. Data Deletion
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Information about deleting your user account and your personal data can be found on our separate data deletion page.
                There you will find a transparent description of which data is deleted and how you can submit a deletion request.
              </p>
              <Link to="/captains-log/data-deletion">
                <Button className="mt-4">
                  Go to Data Deletion Page
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm pt-8 border-t border-border/40">
            <Link 
              to="/captains-log/imprint/en" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Legal Notice
            </Link>
            <Link 
              to="/captains-log/terms" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Use
            </Link>
            <Link 
              to="/captains-log/data-deletion" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Data Deletion
            </Link>
          </div>
        </div>
      </div>

      <CaptainsLogFooter />
    </div>
  );
};

export default CaptainsLogPrivacyEN;