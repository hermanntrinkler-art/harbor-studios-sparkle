import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Mail, FileText, CheckCircle, Info } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";

const DataDeletion = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      <LanguageSwitcher />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 group"
          onClick={() => window.location.href = '/'}
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          {t('dataDeletion.backHome')}
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            {t('dataDeletion.title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('dataDeletion.subtitle')}
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{t('dataDeletion.intro.title')}</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none dark:prose-invert">
            <p>{t('dataDeletion.intro.content')}</p>
          </CardContent>
        </Card>

        {/* Steps */}
        <div className="space-y-6 mb-8">
          {/* Step 1 */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t('dataDeletion.steps.step1.label')}</div>
                  <div className="text-lg">{t('dataDeletion.steps.step1.title')}</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">{t('dataDeletion.steps.step1.content')}</p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  <strong>{t('dataDeletion.steps.step1.to')}:</strong>{' '}
                  <a href="mailto:support@harborstudios.app" className="text-primary hover:underline">
                    support@harborstudios.app
                  </a>
                </p>
                <p className="font-mono text-sm mt-2">
                  <strong>{t('dataDeletion.steps.step1.subject')}:</strong> "Data Deletion Request"
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t('dataDeletion.steps.step2.label')}</div>
                  <div className="text-lg">{t('dataDeletion.steps.step2.title')}</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">{t('dataDeletion.steps.step2.content')}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>{t('dataDeletion.steps.step2.item1')}</li>
                <li>{t('dataDeletion.steps.step2.item2')}</li>
                <li>{t('dataDeletion.steps.step2.item3')}</li>
              </ul>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t('dataDeletion.steps.step3.label')}</div>
                  <div className="text-lg">{t('dataDeletion.steps.step3.title')}</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t('dataDeletion.steps.step3.content')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Important Note */}
        <Alert className="border-primary/50 bg-primary/5">
          <Info className="h-4 w-4" />
          <AlertDescription className="ml-2">
            <strong>{t('dataDeletion.note.title')}</strong>
            <p className="mt-2">{t('dataDeletion.note.content')}</p>
          </AlertDescription>
        </Alert>

        {/* CTA to Privacy Policy */}
        <div className="mt-12 text-center">
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle>{t('dataDeletion.privacyCta.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => window.location.href = '/privacy'}
                variant="outline"
                size="lg"
              >
                {t('dataDeletion.privacyCta.button')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DataDeletion;
