import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const MuseMindDetails = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('museMindDetails.features.items.0.title'),
      description: t('museMindDetails.features.items.0.description'),
    },
    {
      title: t('museMindDetails.features.items.1.title'),
      description: t('museMindDetails.features.items.1.description'),
    },
    {
      title: t('museMindDetails.features.items.2.title'),
      description: t('museMindDetails.features.items.2.description'),
    },
    {
      title: t('museMindDetails.features.items.3.title'),
      description: t('museMindDetails.features.items.3.description'),
    },
    {
      title: t('museMindDetails.features.items.4.title'),
      description: t('museMindDetails.features.items.4.description'),
    },
    {
      title: t('museMindDetails.features.items.5.title'),
      description: t('museMindDetails.features.items.5.description'),
    },
  ];

  const perfectFor = [
    t('museMindDetails.perfectFor.items.0'),
    t('museMindDetails.perfectFor.items.1'),
    t('museMindDetails.perfectFor.items.2'),
    t('museMindDetails.perfectFor.items.3'),
  ];

  const benefits = [
    {
      feature: t('museMindDetails.benefits.items.0.feature'),
      benefit: t('museMindDetails.benefits.items.0.benefit'),
    },
    {
      feature: t('museMindDetails.benefits.items.1.feature'),
      benefit: t('museMindDetails.benefits.items.1.benefit'),
    },
    {
      feature: t('museMindDetails.benefits.items.2.feature'),
      benefit: t('museMindDetails.benefits.items.2.benefit'),
    },
    {
      feature: t('museMindDetails.benefits.items.3.feature'),
      benefit: t('museMindDetails.benefits.items.3.benefit'),
    },
    {
      feature: t('museMindDetails.benefits.items.4.feature'),
      benefit: t('museMindDetails.benefits.items.4.benefit'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <LanguageSwitcher />
      
      <nav className="fixed top-16 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('museMindDetails.backHome')}
            </Button>
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              {t('museMindDetails.status')}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              {t('museMindDetails.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('museMindDetails.hero.subtitle')}
            </p>
          </div>

          <section className="mb-16">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  {t('museMindDetails.whatIs.title')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('museMindDetails.whatIs.description')}
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              {t('museMindDetails.features.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <Card className="bg-primary/5">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
                  {t('museMindDetails.perfectFor.title')}
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
                <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
                  {t('museMindDetails.benefits.title')}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-lg font-semibold text-foreground">
                          {t('museMindDetails.benefits.featureColumn')}
                        </th>
                        <th className="text-left py-3 px-4 text-lg font-semibold text-foreground">
                          {t('museMindDetails.benefits.benefitColumn')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {benefits.map((item, index) => (
                        <tr key={index} className="border-b border-border/50">
                          <td className="py-3 px-4 text-muted-foreground font-medium">
                            {item.feature}
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">
                            {item.benefit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  {t('museMindDetails.cta.title')}
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  {t('museMindDetails.cta.subtitle')}
                </p>
                <Button size="lg" disabled className="mb-4">
                  {t('museMindDetails.cta.button')}
                </Button>
                <p className="text-sm text-muted-foreground">
                  {t('museMindDetails.cta.inDevelopment')}
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MuseMindDetails;
