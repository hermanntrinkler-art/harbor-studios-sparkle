import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, ExternalLink } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";

const Privacy = () => {
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
          {t('privacy.backHome')}
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            {t('privacy.title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('privacy.subtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* 1. Responsible */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('privacy.responsible.title')}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p className="font-semibold">{t('privacy.responsible.company')}</p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@harborstudios.app" className="text-primary hover:underline">
                  support@harborstudios.app
                </a>
              </p>
              <p>
                <strong>{t('privacy.responsible.website')}:</strong>{' '}
                <a href="https://harborstudios.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                  https://harborstudios.app
                  <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </CardContent>
          </Card>

          {/* 2. General Notes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('privacy.general.title')}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>{t('privacy.general.content1')}</p>
              <p>{t('privacy.general.content2')}</p>
            </CardContent>
          </Card>

          {/* 3. Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('privacy.dataCollection.title')}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h3 className="text-lg font-semibold mt-4">{t('privacy.dataCollection.appUsage.title')}</h3>
              <p>{t('privacy.dataCollection.appUsage.content')}</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>{t('privacy.dataCollection.appUsage.item1')}</li>
                <li>{t('privacy.dataCollection.appUsage.item2')}</li>
                <li>{t('privacy.dataCollection.appUsage.item3')}</li>
              </ul>
              <p>{t('privacy.dataCollection.appUsage.purpose')}</p>
              <p>{t('privacy.dataCollection.appUsage.storage')}</p>

              <h3 className="text-lg font-semibold mt-6">{t('privacy.dataCollection.noSharing.title')}</h3>
              <p>{t('privacy.dataCollection.noSharing.content')}</p>
            </CardContent>
          </Card>

          {/* 4. Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('privacy.cookies.title')}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>{t('privacy.cookies.content1')}</p>
              <p>
                {t('privacy.cookies.content2')}{' '}
                <a 
                  href="https://www.facebook.com/privacy/policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  https://www.facebook.com/privacy/policy
                  <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </CardContent>
          </Card>

          {/* 5. Storage and Deletion */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('privacy.storage.title')}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>{t('privacy.storage.content1')}</p>
              <p>{t('privacy.storage.content2')}</p>
            </CardContent>
          </Card>

          {/* 6. Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('privacy.rights.title')}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>{t('privacy.rights.intro')}</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>{t('privacy.rights.item1')}</li>
                <li>{t('privacy.rights.item2')}</li>
                <li>{t('privacy.rights.item3')}</li>
                <li>{t('privacy.rights.item4')}</li>
                <li>{t('privacy.rights.item5')}</li>
              </ul>
              <p className="mt-4">
                {t('privacy.rights.contact')}:<br />
                📧 <a href="mailto:support@harborstudios.app" className="text-primary hover:underline">
                  support@harborstudios.app
                </a>
              </p>
            </CardContent>
          </Card>

          {/* 7. Changes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('privacy.changes.title')}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>{t('privacy.changes.content1')}</p>
              <p>
                {t('privacy.changes.content2')}:<br />
                👉 <a href="https://harborstudios.app/privacy" className="text-primary hover:underline">
                  https://harborstudios.app/privacy
                </a>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA to Data Deletion */}
        <div className="mt-12 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>{t('privacy.dataDeletionCta.title')}</CardTitle>
              <CardDescription>{t('privacy.dataDeletionCta.description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => window.location.href = '/data-deletion'}
                variant="default"
                size="lg"
              >
                {t('privacy.dataDeletionCta.button')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
