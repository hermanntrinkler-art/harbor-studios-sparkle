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

const CaptainsLogDataDeletionEN = () => {
  const navigate = useNavigate();
  const currentLang = languages.find(l => l.code === "en");

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
          Back
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
                className={lang.code === "en" ? "bg-accent" : ""}
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
          <h1 className="text-4xl font-bold mb-4">Data Deletion</h1>
          <p className="text-muted-foreground text-lg">Captain Log – How to delete your data</p>
        </div>

        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            You have the right to request the deletion of your personal data at any time. Here's how it works.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          {/* Option 1: In the App */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                Option 1: Delete data in the app
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                You can delete your data directly in the Captain Log app:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Open the Captain Log app</li>
                <li>Go to <strong>Settings</strong></li>
                <li>Select <strong>Account & Data</strong></li>
                <li>Tap <strong>Delete all data</strong> or <strong>Delete account</strong></li>
                <li>Confirm the deletion</li>
              </ol>
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  This action takes effect immediately and cannot be undone.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Option 2: Via Email */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Option 2: Request deletion via email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                You can also send us an email to request the deletion of your data:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Send an email to:</p>
                <a href="mailto:support@harborstudios.app?subject=Data%20Deletion%20Captain%20Log" className="text-primary hover:underline text-lg">
                  support@harborstudios.app
                </a>
              </div>
              <p className="text-muted-foreground">Please include the following information in your email:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Subject: "Data Deletion Captain Log"</li>
                <li>The email address of your account</li>
                <li>Optional: Reason for deletion (helps us improve our service)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Processing Time */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Processing Time
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                <strong>Deletion in the app:</strong> Immediate effect
              </p>
              <p className="text-muted-foreground">
                <strong>Deletion via email:</strong> We will process your request within 7 days and inform you upon completion. All personal data will be completely removed.
              </p>
            </CardContent>
          </Card>

          {/* What gets deleted */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                What gets deleted?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">A complete data deletion removes the following data:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>All logbook entries</li>
                <li>Boat information</li>
                <li>Crew data</li>
                <li>Settings and preferences</li>
                <li>Account information (when deleting account)</li>
              </ul>
              <Alert className="mt-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Anonymized, aggregated usage statistics may be retained for analysis purposes but do not contain any personal data.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Questions?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have questions about data deletion or privacy, we're happy to help:
              </p>
              <a href="mailto:support@harborstudios.app" className="text-primary hover:underline flex items-center gap-2 text-lg">
                <Mail className="h-4 w-4" />
                support@harborstudios.app
              </a>
              <div className="pt-4">
                <Button asChild variant="outline">
                  <Link to="/captains-log/privacy/en">
                    View Privacy Policy
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

export default CaptainsLogDataDeletionEN;
