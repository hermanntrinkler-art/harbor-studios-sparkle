import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const VideoPixieDetails = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('videoPixieDetails.features.items.0.title'),
      description: t('videoPixieDetails.features.items.0.description'),
    },
    {
      title: t('videoPixieDetails.features.items.1.title'),
      description: t('videoPixieDetails.features.items.1.description'),
    },
    {
      title: t('videoPixieDetails.features.items.2.title'),
      description: t('videoPixieDetails.features.items.2.description'),
    },
    {
      title: t('videoPixieDetails.features.items.3.title'),
      description: t('videoPixieDetails.features.items.3.description'),
    },
    {
      title: t('videoPixieDetails.features.items.4.title'),
      description: t('videoPixieDetails.features.items.4.description'),
    },
    {
      title: t('videoPixieDetails.features.items.5.title'),
      description: t('videoPixieDetails.features.items.5.description'),
    },
  ];

  const freshEffects = [
    t('videoPixieDetails.freshEffects.items.0'),
    t('videoPixieDetails.freshEffects.items.1'),
    t('videoPixieDetails.freshEffects.items.2'),
    t('videoPixieDetails.freshEffects.items.3'),
    t('videoPixieDetails.freshEffects.items.4'),
  ];

  const targetAudience = [
    t('videoPixieDetails.targetAudience.items.0'),
    t('videoPixieDetails.targetAudience.items.1'),
    t('videoPixieDetails.targetAudience.items.2'),
    t('videoPixieDetails.targetAudience.items.3'),
  ];

  const techStack = [
    "React + TypeScript",
    "Tailwind CSS",
    "Supabase (Auth, Database, Storage)",
    "Canvas API",
  ];

  return (
    <div className="min-h-screen bg-background">
      <LanguageSwitcher />
      
      <nav className="fixed top-16 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('videoPixieDetails.backHome')}
            </Button>
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              {t('videoPixieDetails.status')}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              {t('videoPixieDetails.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('videoPixieDetails.hero.subtitle')}
            </p>
          </div>

          <section className="mb-16">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  {t('videoPixieDetails.whatIs.title')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('videoPixieDetails.whatIs.description')}
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              {t('videoPixieDetails.features.title')}
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
            <Card className="bg-primary/5">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
                  {t('videoPixieDetails.freshEffects.title')}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 text-center">
                  {t('videoPixieDetails.freshEffects.subtitle')}
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {freshEffects.map((effect, index) => (
                    <div key={index} className="bg-background rounded-lg p-4 text-center">
                      <p className="text-lg text-foreground">{effect}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
                  {t('videoPixieDetails.targetAudience.title')}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {targetAudience.map((audience, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <p className="text-lg text-muted-foreground">{audience}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
                  {t('videoPixieDetails.techStack.title')}
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  {t('videoPixieDetails.cta.title')}
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  {t('videoPixieDetails.cta.subtitle')}
                </p>
                <Button size="lg" disabled className="mb-4">
                  {t('videoPixieDetails.cta.button')}
                </Button>
                <p className="text-sm text-muted-foreground">
                  {t('videoPixieDetails.cta.inDevelopment')}
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VideoPixieDetails;