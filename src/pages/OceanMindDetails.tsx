import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const OceanMindDetails = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('oceanMindDetails.features.items.0.title'),
      description: t('oceanMindDetails.features.items.0.description'),
    },
    {
      title: t('oceanMindDetails.features.items.1.title'),
      description: t('oceanMindDetails.features.items.1.description'),
    },
    {
      title: t('oceanMindDetails.features.items.2.title'),
      description: t('oceanMindDetails.features.items.2.description'),
    },
    {
      title: t('oceanMindDetails.features.items.3.title'),
      description: t('oceanMindDetails.features.items.3.description'),
    },
  ];

  const perfectFor = [
    t('oceanMindDetails.perfectFor.items.0'),
    t('oceanMindDetails.perfectFor.items.1'),
    t('oceanMindDetails.perfectFor.items.2'),
    t('oceanMindDetails.perfectFor.items.3'),
  ];

  const premiumFeatures = [
    t('oceanMindDetails.premium.features.0'),
    t('oceanMindDetails.premium.features.1'),
    t('oceanMindDetails.premium.features.2'),
    t('oceanMindDetails.premium.features.3'),
  ];

  return (
    <div className="min-h-screen bg-background">
      <LanguageSwitcher />
      
      <nav className="fixed top-16 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('oceanMindDetails.backHome')}
            </Button>
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-ocean-blue text-white">
              {t('oceanMindDetails.status')}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              {t('oceanMindDetails.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('oceanMindDetails.hero.subtitle')}
            </p>
          </div>

          <section className="mb-16">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  {t('oceanMindDetails.whatIs.title')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('oceanMindDetails.whatIs.description')}
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              {t('oceanMindDetails.features.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <Card className="bg-ocean-blue/5">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
                  {t('oceanMindDetails.perfectFor.title')}
                </h2>
                <div className="space-y-3">
                  {perfectFor.map((item, index) => (
                    <p key={index} className="text-lg text-muted-foreground">
                      {item}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4 text-center text-foreground">
                  {t('oceanMindDetails.premium.title')}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 text-center">
                  {t('oceanMindDetails.premium.description')}
                </p>
                <ul className="space-y-3">
                  {premiumFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-ocean-blue mr-2">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="text-center">
            <Card className="bg-gradient-to-r from-ocean-blue/10 to-ocean-teal/10">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  {t('oceanMindDetails.cta.title')}
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  {t('oceanMindDetails.cta.subtitle')}
                </p>
                <Button size="lg" disabled className="mb-4">
                  {t('oceanMindDetails.cta.button')}
                </Button>
                <p className="text-sm text-muted-foreground">
                  {t('oceanMindDetails.cta.inDevelopment')}
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OceanMindDetails;
