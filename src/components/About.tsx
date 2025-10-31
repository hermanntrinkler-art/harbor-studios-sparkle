import { Code, Gamepad2, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: t('about.aiApps.title'),
      description: t('about.aiApps.description')
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: t('about.webDev.title'),
      description: t('about.webDev.description')
    },
    {
      icon: <Gamepad2 className="h-6 w-6" />,
      title: t('about.robloxDev.title'),
      description: t('about.robloxDev.description')
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t('about.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-primary/20 bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_hsl(189_94%_58%_/_0.15)]"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Harbor Studios, we combine technical expertise with creative vision to deliver 
            exceptional digital products. From AI-powered web applications to engaging gaming 
            experiences, we're passionate about creating solutions that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
