import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Anchor, Navigation, Map, Wind, FileText, Bell, Globe, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const CaptainsLogDetails = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Anchor,
      title: t('captainsLogDetails.features.voyageManagement.title'),
      description: t('captainsLogDetails.features.voyageManagement.description')
    },
    {
      icon: Navigation,
      title: t('captainsLogDetails.features.gpsTracking.title'),
      description: t('captainsLogDetails.features.gpsTracking.description')
    },
    {
      icon: Map,
      title: t('captainsLogDetails.features.timeline.title'),
      description: t('captainsLogDetails.features.timeline.description')
    },
    {
      icon: Wind,
      title: t('captainsLogDetails.features.sailConfig.title'),
      description: t('captainsLogDetails.features.sailConfig.description')
    },
    {
      icon: Wind,
      title: t('captainsLogDetails.features.weather.title'),
      description: t('captainsLogDetails.features.weather.description')
    },
    {
      icon: FileText,
      title: t('captainsLogDetails.features.pdfExport.title'),
      description: t('captainsLogDetails.features.pdfExport.description')
    },
    {
      icon: Bell,
      title: t('captainsLogDetails.features.anchorWatch.title'),
      description: t('captainsLogDetails.features.anchorWatch.description')
    },
    {
      icon: Globe,
      title: t('captainsLogDetails.features.offline.title'),
      description: t('captainsLogDetails.features.offline.description')
    }
  ];

  const perfectFor = [
    { text: t('captainsLogDetails.perfectFor.hobbySkippers') },
    { text: t('captainsLogDetails.perfectFor.sailingSchools') },
    { text: t('captainsLogDetails.perfectFor.charterCrews') },
    { text: t('captainsLogDetails.perfectFor.documentation') }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">{t('captainsLogDetails.backHome')}</span>
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            {t('captainsLogDetails.status')}
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            {t('captainsLogDetails.hero.title')} ⚓️
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('captainsLogDetails.hero.subtitle')}
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" disabled className="opacity-60">
              <Wifi className="w-5 h-5 mr-2" />
              {t('captainsLogDetails.cta.button')}
            </Button>
          </div>
        </div>
      </section>

      {/* What is Captain's Log */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-3xl">{t('captainsLogDetails.whatIs.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('captainsLogDetails.whatIs.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            {t('captainsLogDetails.features.title')}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            {t('captainsLogDetails.features.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            {t('captainsLogDetails.perfectFor.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {perfectFor.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <p className="text-lg">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 bg-card">
            <CardHeader>
              <CardTitle className="text-3xl">{t('captainsLogDetails.techStack.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-4">
                {t('captainsLogDetails.techStack.description')}
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Leaflet Maps</Badge>
                <Badge variant="secondary">Lovable Cloud</Badge>
                <Badge variant="secondary">PWA</Badge>
                <Badge variant="secondary">GPS API</Badge>
                <Badge variant="secondary">PDF Generation</Badge>
                <Badge variant="secondary">i18n</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t('captainsLogDetails.cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('captainsLogDetails.cta.inDevelopment')}
          </p>
          <Button size="lg" disabled className="opacity-60">
            <Bell className="w-5 h-5 mr-2" />
            {t('captainsLogDetails.cta.button')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaptainsLogDetails;
