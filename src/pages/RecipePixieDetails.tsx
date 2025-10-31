import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Sparkles, Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import AnimatedLogo from "@/components/AnimatedLogo";

const RecipePixieDetails = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('recipePixieDetails.features.aiParser.title'),
      description: t('recipePixieDetails.features.aiParser.description')
    },
    {
      title: t('recipePixieDetails.features.smartOrganization.title'),
      description: t('recipePixieDetails.features.smartOrganization.description')
    },
    {
      title: t('recipePixieDetails.features.shoppingList.title'),
      description: t('recipePixieDetails.features.shoppingList.description')
    },
    {
      title: t('recipePixieDetails.features.mealPlanning.title'),
      description: t('recipePixieDetails.features.mealPlanning.description')
    },
    {
      title: t('recipePixieDetails.features.aiAssistant.title'),
      description: t('recipePixieDetails.features.aiAssistant.description')
    },
    {
      title: t('recipePixieDetails.features.multiDevice.title'),
      description: t('recipePixieDetails.features.multiDevice.description')
    },
    {
      title: t('recipePixieDetails.features.communitySharing.title'),
      description: t('recipePixieDetails.features.communitySharing.description')
    }
  ];

  const comparison = [
    { feature: t('recipePixieDetails.comparison.features.aiParsing'), recipePixie: true, others: false },
    { feature: t('recipePixieDetails.comparison.features.anyWebsite'), recipePixie: true, others: false },
    { feature: t('recipePixieDetails.comparison.features.shoppingList'), recipePixie: true, others: "partial" },
    { feature: t('recipePixieDetails.comparison.features.mealPlanning'), recipePixie: true, others: "partial" },
    { feature: t('recipePixieDetails.comparison.features.aiAssistant'), recipePixie: true, others: false },
    { feature: t('recipePixieDetails.comparison.features.noAds'), recipePixie: true, others: false },
    { feature: t('recipePixieDetails.comparison.features.offline'), recipePixie: true, others: false }
  ];

  const perfectFor = [
    t('recipePixieDetails.perfectFor.hobbyChefs'),
    t('recipePixieDetails.perfectFor.mealPreppers'),
    t('recipePixieDetails.perfectFor.families'),
    t('recipePixieDetails.perfectFor.healthConscious')
  ];

  const testimonials = [
    {
      quote: t('recipePixieDetails.testimonials.user1.quote'),
      author: t('recipePixieDetails.testimonials.user1.author')
    },
    {
      quote: t('recipePixieDetails.testimonials.user2.quote'),
      author: t('recipePixieDetails.testimonials.user2.author')
    },
    {
      quote: t('recipePixieDetails.testimonials.user3.quote'),
      author: t('recipePixieDetails.testimonials.user3.author')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LanguageSwitcher />
      
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
            <AnimatedLogo size="sm" className="transition-transform group-hover:scale-110" />
            <ArrowLeft className="h-4 w-4" />
            <span className="font-semibold">{t('recipePixieDetails.backHome')}</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 text-primary">
            <Sparkles className="h-6 w-6" />
            <span className="text-sm font-semibold tracking-wide uppercase">AI-Powered Recipe Management</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            {t('recipePixieDetails.hero.title')} ✨
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('recipePixieDetails.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <a href="https://my-recipe-pixie.lovable.app/?utm_source=lovable-editor" target="_blank" rel="noopener noreferrer">
                {t('recipePixieDetails.cta.button')}
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What is Recipe Pixie */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-primary/20 bg-card">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('recipePixieDetails.whatIs.title')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('recipePixieDetails.whatIs.description')}
            </p>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            {t('recipePixieDetails.features.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 border-primary/20 bg-card hover:border-primary/40 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            {t('recipePixieDetails.comparison.title')}
          </h2>
          <Card className="overflow-hidden border-primary/20 bg-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left text-foreground font-semibold">{t('recipePixieDetails.comparison.feature')}</th>
                    <th className="px-6 py-4 text-center text-primary font-semibold">{t('recipePixieDetails.comparison.recipePixie')}</th>
                    <th className="px-6 py-4 text-center text-muted-foreground font-semibold">{t('recipePixieDetails.comparison.others')}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="px-6 py-4 text-foreground">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.recipePixie && <Check className="h-6 w-6 text-primary mx-auto" />}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.others === true && <Check className="h-6 w-6 text-muted-foreground mx-auto" />}
                        {row.others === false && <X className="h-6 w-6 text-destructive mx-auto" />}
                        {row.others === "partial" && <span className="text-muted-foreground">⚠️</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            {t('recipePixieDetails.perfectFor.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {perfectFor.map((item, index) => (
              <Card key={index} className="p-6 border-primary/20 bg-card">
                <p className="text-foreground leading-relaxed">
                  {item}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            {t('recipePixieDetails.testimonials.title')}
          </h2>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-primary/20 bg-card">
                <p className="text-lg text-muted-foreground italic leading-relaxed mb-2">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm text-primary font-semibold">
                  — {testimonial.author}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t('recipePixieDetails.cta.title')}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t('recipePixieDetails.cta.free')}
          </p>
          <Button asChild size="lg" className="text-lg">
            <a href="https://my-recipe-pixie.lovable.app/?utm_source=lovable-editor" target="_blank" rel="noopener noreferrer">
              {t('recipePixieDetails.cta.button')}
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RecipePixieDetails;
