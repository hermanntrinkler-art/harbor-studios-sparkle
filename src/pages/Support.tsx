import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import { BookOpen, Search, Mail, HelpCircle, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

const Support = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      id: "recipePixie",
      icon: "🍳",
      status: "complete",
      route: "/support/recipe-pixie"
    },
    {
      id: "captainsLog",
      icon: "⚓",
      status: "coming-soon",
      route: "/support/captains-log"
    },
    {
      id: "oceanMind",
      icon: "🧠",
      status: "coming-soon",
      route: "/support/ocean-mind"
    },
    {
      id: "socialPostPro",
      icon: "📱",
      status: "coming-soon",
      route: "/support/social-post-pro"
    }
  ];

  const filteredProjects = projects.filter(project =>
    searchQuery === "" || 
    t(`support.projects.${project.id}.title`).toLowerCase().includes(searchQuery.toLowerCase()) ||
    t(`support.projects.${project.id}.description`).toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/images/harbor-logo-transp.png" alt="Harbor Studios" className="h-8" />
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('support.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('support.subtitle')}
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t('support.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-background/50 backdrop-blur-sm border-primary/20"
              />
            </div>
          </div>

          {/* Project Documentation Cards */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              {t('support.sections.documentation')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-5xl">{project.icon}</span>
                      {project.status === "complete" ? (
                        <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {t('support.badges.complete')}
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="border-primary/20">
                          <Clock className="h-3 w-3 mr-1" />
                          {t('support.badges.comingSoon')}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{t(`support.projects.${project.id}.title`)}</CardTitle>
                    <CardDescription>{t(`support.projects.${project.id}.description`)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      asChild 
                      className="w-full" 
                      variant={project.status === "complete" ? "default" : "outline"}
                      disabled={project.status !== "complete"}
                    >
                      <Link to={project.route}>
                        <BookOpen className="mr-2 h-4 w-4" />
                        {t('support.readGuide')}
                      </Link>
                    </Button>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20" id="faq">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <HelpCircle className="h-8 w-8 text-primary" />
              {t('support.faq.title')}
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {/* General Questions */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t('support.faq.general.title')}</h3>
                  <div className="space-y-2">
                    <AccordionItem value="general-1" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                      <AccordionTrigger className="text-left hover:text-primary">
                        {t('support.faq.general.q1')}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {t('support.faq.general.a1')}
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="general-2" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                      <AccordionTrigger className="text-left hover:text-primary">
                        {t('support.faq.general.q2')}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {t('support.faq.general.a2')}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="general-3" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                      <AccordionTrigger className="text-left hover:text-primary">
                        {t('support.faq.general.q3')}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {t('support.faq.general.a3')}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </div>

                {/* Technical Questions */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t('support.faq.technical.title')}</h3>
                  <div className="space-y-2">
                    <AccordionItem value="tech-1" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                      <AccordionTrigger className="text-left hover:text-primary">
                        {t('support.faq.technical.q1')}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {t('support.faq.technical.a1')}
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="tech-2" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                      <AccordionTrigger className="text-left hover:text-primary">
                        {t('support.faq.technical.q2')}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {t('support.faq.technical.a2')}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </div>

                {/* Privacy & Security */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t('support.faq.privacy.title')}</h3>
                  <div className="space-y-2">
                    <AccordionItem value="privacy-1" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                      <AccordionTrigger className="text-left hover:text-primary">
                        {t('support.faq.privacy.q1')}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {t('support.faq.privacy.a1')}
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="privacy-2" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                      <AccordionTrigger className="text-left hover:text-primary">
                        {t('support.faq.privacy.q2')}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {t('support.faq.privacy.a2')}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </div>
              </Accordion>
            </div>
          </section>

          {/* Still have questions CTA */}
          <section className="text-center py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl border border-primary/10">
            <Mail className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">{t('support.stillQuestions')}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('support.contactUs')}
            </p>
            <Button asChild size="lg" className="text-lg">
              <a href="/#contact">
                <Mail className="mr-2 h-5 w-5" />
                {t('support.contactButton')}
              </a>
            </Button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
