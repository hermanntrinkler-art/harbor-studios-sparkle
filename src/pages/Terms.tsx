import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, ExternalLink, AlertTriangle, Info, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      {/* Language Switcher - Fixed Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Navigation */}
      <nav className="container max-w-4xl mx-auto pt-6 px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>{t('terms.backHome')}</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            {t('terms.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('terms.subtitle')}
          </p>
          <p className="text-sm text-muted-foreground/60">
            {t('terms.lastUpdated')}
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-6">
          {/* 1. Geltungsbereich */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                {t('terms.scope.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p>{t('terms.scope.content1')}</p>
              <p>{t('terms.scope.content2')}</p>
            </CardContent>
          </Card>

          {/* 2. Zweck der App */}
          <Card>
            <CardHeader>
              <CardTitle>{t('terms.purpose.title')}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p>{t('terms.purpose.content1')}</p>
              <p>{t('terms.purpose.content2')}</p>
            </CardContent>
          </Card>

          {/* 3. Zugang und Registrierung */}
          <Card>
            <CardHeader>
              <CardTitle>{t('terms.access.title')}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p>{t('terms.access.content1')}</p>
              <p>{t('terms.access.content2')}</p>
              <p>{t('terms.access.content3')}</p>
            </CardContent>
          </Card>

          {/* 4. Verantwortlichkeit der Nutzer */}
          <Card>
            <CardHeader>
              <CardTitle>{t('terms.responsibility.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{t('terms.responsibility.content1')}</p>
              
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <p className="font-semibold mb-2">{t('terms.responsibility.forbidden')}</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>{t('terms.responsibility.item1')}</li>
                    <li>{t('terms.responsibility.item2')}</li>
                    <li>{t('terms.responsibility.item3')}</li>
                  </ul>
                </AlertDescription>
              </Alert>
              
              <p className="text-sm text-muted-foreground">{t('terms.responsibility.consequence')}</p>
            </CardContent>
          </Card>

          {/* 5. Datenschutz */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>{t('terms.dataProtection.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{t('terms.dataProtection.content')}</p>
              <Button asChild className="w-full sm:w-auto">
                <Link to="/privacy">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {t('terms.dataProtection.ctaButton')}
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* 6. Haftungsausschluss */}
          <Card>
            <CardHeader>
              <CardTitle>{t('terms.liability.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <p className="font-semibold mb-2">{t('terms.liability.intro')}</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>{t('terms.liability.item1')}</li>
                    <li>{t('terms.liability.item2')}</li>
                    <li>{t('terms.liability.item3')}</li>
                  </ul>
                </AlertDescription>
              </Alert>
              
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <p>{t('terms.liability.disclaimer1')}</p>
                <p>{t('terms.liability.disclaimer2')}</p>
              </div>
            </CardContent>
          </Card>

          {/* 7. Änderungen der App und der Bedingungen */}
          <Card>
            <CardHeader>
              <CardTitle>{t('terms.changes.title')}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p>{t('terms.changes.content1')}</p>
              <p>{t('terms.changes.content2')}</p>
              <p>
                {t('terms.changes.content3')}{' '}
                <a 
                  href={t('terms.changes.link')} 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('terms.changes.link')}
                </a>
              </p>
            </CardContent>
          </Card>

          {/* 8. Kontakt */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                {t('terms.contact.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{t('terms.contact.content')}</p>
              <div className="space-y-2">
                <a 
                  href={`mailto:${t('terms.contact.email')}`}
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {t('terms.contact.email')}
                </a>
                <a 
                  href={t('terms.contact.website')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t('terms.contact.website')}
                </a>
              </div>
            </CardContent>
          </Card>

          {/* 9. Anwendbares Recht */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                {t('terms.law.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <p>{t('terms.law.content1')}</p>
                    <p>{t('terms.law.content2')}</p>
                  </div>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* 10. Salvatorische Klausel */}
          <Card>
            <CardHeader>
              <CardTitle>{t('terms.severability.title')}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p>{t('terms.severability.content')}</p>
            </CardContent>
          </Card>

          {/* Privacy CTA */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>{t('terms.privacyCta.title')}</CardTitle>
              <CardDescription>{t('terms.privacyCta.description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full sm:w-auto">
                <Link to="/privacy">
                  {t('terms.privacyCta.button')}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Terms;
