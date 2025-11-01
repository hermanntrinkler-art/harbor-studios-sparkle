import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import AnimatedLogo from "@/components/AnimatedLogo";

const ContentChefDetails = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('contentChefDetails.features.aiContent.title'),
      description: t('contentChefDetails.features.aiContent.description')
    },
    {
      title: t('contentChefDetails.features.multiPlatform.title'),
      description: t('contentChefDetails.features.multiPlatform.description')
    },
    {
      title: t('contentChefDetails.features.recipeImport.title'),
      description: t('contentChefDetails.features.recipeImport.description')
    },
    {
      title: t('contentChefDetails.features.smartPlanning.title'),
      description: t('contentChefDetails.features.smartPlanning.description')
    }
  ];

  const steps = [
    {
      title: t('contentChefDetails.howItWorks.step1.title'),
      description: t('contentChefDetails.howItWorks.step1.description')
    },
    {
      title: t('contentChefDetails.howItWorks.step2.title'),
      description: t('contentChefDetails.howItWorks.step2.description')
    },
    {
      title: t('contentChefDetails.howItWorks.step3.title'),
      description: t('contentChefDetails.howItWorks.step3.description')
    }
  ];

  const pricingTiers = [
    {
      title: t('contentChefDetails.pricing.free.title'),
      price: t('contentChefDetails.pricing.free.price'),
      features: t('contentChefDetails.pricing.free.features', { returnObjects: true }) as string[]
    },
    {
      title: t('contentChefDetails.pricing.pro.title'),
      price: t('contentChefDetails.pricing.pro.price'),
      features: t('contentChefDetails.pricing.pro.features', { returnObjects: true }) as string[],
      highlighted: true
    },
    {
      title: t('contentChefDetails.pricing.agency.title'),
      price: t('contentChefDetails.pricing.agency.price'),
      features: t('contentChefDetails.pricing.agency.features', { returnObjects: true }) as string[]
    }
  ];

  const targetAudience = [
    t('contentChefDetails.targetAudience.blogger'),
    t('contentChefDetails.targetAudience.restaurants'),
    t('contentChefDetails.targetAudience.brands'),
    t('contentChefDetails.targetAudience.agencies')
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
            <span className="font-semibold">{t('contentChefDetails.backHome')}</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20">
            <span className="text-sm font-semibold text-yellow-600">🚧 {t('contentChefDetails.comingSoon')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            {t('contentChefDetails.hero.title')} 👨‍🍳
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('contentChefDetails.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* What is ContentChef */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-primary/20 bg-card">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('contentChefDetails.whatIs.title')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('contentChefDetails.whatIs.description')}
            </p>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            {t('contentChefDetails.features.title')}
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

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            {t('contentChefDetails.howItWorks.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 border-primary/20 bg-card text-center">
                <h3 className="text-lg font-bold mb-2 text-primary">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            {t('contentChefDetails.pricing.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`p-8 ${tier.highlighted ? 'border-primary bg-primary/5' : 'border-primary/20 bg-card'}`}
              >
                <h3 className="text-2xl font-bold mb-2 text-foreground">{tier.title}</h3>
                <p className="text-3xl font-bold mb-6 text-primary">{tier.price}</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            {t('contentChefDetails.targetAudience.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {targetAudience.map((item, index) => (
              <Card key={index} className="p-6 border-primary/20 bg-card">
                <p className="text-foreground leading-relaxed font-semibold">
                  {item}
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
            {t('contentChefDetails.cta.title')}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t('contentChefDetails.cta.subtitle')}
          </p>
          <Button disabled size="lg" className="text-lg opacity-60 cursor-not-allowed">
            {t('contentChefDetails.cta.button')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContentChefDetails;
