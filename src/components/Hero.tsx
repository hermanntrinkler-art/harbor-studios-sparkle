import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import AnimatedLogo from "@/components/AnimatedLogo";

const Hero = () => {
  const { t } = useTranslation();
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:radial-gradient(circle_at_50%_50%,hsl(189_94%_58%_/_0.1),transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <AnimatedLogo className="mx-auto mb-8" size="lg" />
        
        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
          <span className="text-sm font-medium text-primary">{t('hero.badge')}</span>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(189_94%_58%_/_0.3)] transition-all hover:shadow-[0_0_30px_hsl(189_94%_58%_/_0.5)]"
          >
            {t('hero.cta_projects')} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-primary/30 hover:bg-primary/10"
          >
            {t('hero.cta_about')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
