import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import { ArrowLeft, BookOpen, Sparkles, Calculator, FolderOpen, Calendar, ShoppingCart, Settings, Smartphone, Lightbulb, ChefHat, Copy, ListChecks, Home } from "lucide-react";
import { useState, useEffect } from "react";

const RecipePixieGuide = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const sections = [
    { id: "getting-started", icon: Home, key: "gettingStarted" },
    { id: "create-recipes", icon: ChefHat, key: "createRecipes" },
    { id: "magic-paste", icon: Sparkles, key: "magicPaste" },
    { id: "nutrition", icon: Calculator, key: "nutrition" },
    { id: "manage-recipes", icon: FolderOpen, key: "manageRecipes" },
    { id: "selection-mode", icon: ListChecks, key: "selectionMode" },
    { id: "cookbooks", icon: BookOpen, key: "cookbooks" },
    { id: "meal-planner", icon: Calendar, key: "mealPlanner" },
    { id: "shopping-list", icon: ShoppingCart, key: "shoppingList" },
    { id: "settings", icon: Settings, key: "settings" },
    { id: "cook-mode", icon: ChefHat, key: "cookMode" },
    { id: "mobile-app", icon: Smartphone, key: "mobileApp" },
    { id: "tips-tricks", icon: Lightbulb, key: "tipsTricks" }
  ];

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
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-muted-foreground animate-fade-in">
            <Link to="/support" className="hover:text-primary transition-colors">
              {t('support.title')}
            </Link>
            {" / "}
            <Link to="/projects/recipe-pixie" className="hover:text-primary transition-colors">
              Recipe Pixie
            </Link>
            {" / "}
            <span className="text-foreground">{t('support.recipePixieGuide.breadcrumb')}</span>
          </nav>

          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/support">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('support.backToOverview')}
            </Link>
          </Button>

          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-7xl mb-6 block">🍳</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('support.recipePixieGuide.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('support.recipePixieGuide.subtitle')}
            </p>
          </div>

          {/* Layout with Sidebar */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Table of Contents */}
            <aside className="lg:w-64 lg:sticky lg:top-24 lg:self-start">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  {t('support.recipePixieGuide.tableOfContents')}
                </h3>
                <nav className="space-y-1">
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left text-sm py-2 px-3 rounded-md transition-all flex items-center gap-2 group ${
                          activeSection === section.id
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        }`}
                      >
                        <Icon className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">
                          {index + 1}. {t(`support.recipePixieGuide.sections.${section.key}.title`)}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </Card>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              <Accordion type="multiple" defaultValue={sections.map(s => s.id)} className="space-y-4">
                {/* 1. Getting Started */}
                <section id="getting-started">
                  <AccordionItem value="getting-started" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                      <div className="flex items-center gap-3">
                        <Home className="h-6 w-6 text-primary" />
                        {t('support.recipePixieGuide.sections.gettingStarted.title')}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.gettingStarted.registration.title')}</h4>
                        <p>{t('support.recipePixieGuide.sections.gettingStarted.registration.content')}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.gettingStarted.credits.title')}</h4>
                        <p>{t('support.recipePixieGuide.sections.gettingStarted.credits.content')}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.gettingStarted.interface.title')}</h4>
                        <p>{t('support.recipePixieGuide.sections.gettingStarted.interface.content')}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </section>

                {/* 2. Create Recipes */}
                <section id="create-recipes">
                  <AccordionItem value="create-recipes" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                      <div className="flex items-center gap-3">
                        <ChefHat className="h-6 w-6 text-primary" />
                        {t('support.recipePixieGuide.sections.createRecipes.title')}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.createRecipes.manual.title')}</h4>
                        <p>{t('support.recipePixieGuide.sections.createRecipes.manual.content')}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.createRecipes.fields.title')}</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          {(t('support.recipePixieGuide.sections.createRecipes.fields.items', { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </section>

                {/* 3. Magic Paste (KI) */}
                <section id="magic-paste">
                  <AccordionItem value="magic-paste" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                      <div className="flex items-center gap-3">
                        <Sparkles className="h-6 w-6 text-primary" />
                        {t('support.recipePixieGuide.sections.magicPaste.title')}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                      <p>{t('support.recipePixieGuide.sections.magicPaste.intro')}</p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.magicPaste.howTo.title')}</h4>
                        <ol className="list-decimal list-inside space-y-1 ml-4">
                          {(t('support.recipePixieGuide.sections.magicPaste.howTo.steps', { returnObjects: true }) as string[]).map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.magicPaste.sources.title')}</h4>
                        <p>{t('support.recipePixieGuide.sections.magicPaste.sources.content')}</p>
                      </div>
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                        <p className="text-sm">💡 {t('support.recipePixieGuide.sections.magicPaste.tip')}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </section>

                {/* 4. Nutrition Calculator */}
                <section id="nutrition">
                  <AccordionItem value="nutrition" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                      <div className="flex items-center gap-3">
                        <Calculator className="h-6 w-6 text-primary" />
                        {t('support.recipePixieGuide.sections.nutrition.title')}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                      <p>{t('support.recipePixieGuide.sections.nutrition.intro')}</p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.nutrition.howTo.title')}</h4>
                        <p>{t('support.recipePixieGuide.sections.nutrition.howTo.content')}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.nutrition.values.title')}</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          {(t('support.recipePixieGuide.sections.nutrition.values.items', { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </section>

                {/* 5. Manage Recipes */}
                <section id="manage-recipes">
                  <AccordionItem value="manage-recipes" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                      <div className="flex items-center gap-3">
                        <FolderOpen className="h-6 w-6 text-primary" />
                        {t('support.recipePixieGuide.sections.manageRecipes.title')}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.manageRecipes.view.title')}</h4>
                        <p>{t('support.recipePixieGuide.sections.manageRecipes.view.content')}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.manageRecipes.edit.title')}</h4>
                        <p>{t('support.recipePixieGuide.sections.manageRecipes.edit.content')}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.manageRecipes.delete.title')}</h4>
                        <p>{t('support.recipePixieGuide.sections.manageRecipes.delete.content')}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </section>

                {/* 6. Selection Mode */}
                <section id="selection-mode">
                  <AccordionItem value="selection-mode" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                      <div className="flex items-center gap-3">
                        <ListChecks className="h-6 w-6 text-primary" />
                        {t('support.recipePixieGuide.sections.selectionMode.title')}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                      <p>{t('support.recipePixieGuide.sections.selectionMode.intro')}</p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.selectionMode.actions.title')}</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          {(t('support.recipePixieGuide.sections.selectionMode.actions.items', { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </section>

                {/* 7. Cookbooks */}
                <section id="cookbooks">
                  <AccordionItem value="cookbooks" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-6 w-6 text-primary" />
                        {t('support.recipePixieGuide.sections.cookbooks.title')}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                      <p>{t('support.recipePixieGuide.sections.cookbooks.intro')}</p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.cookbooks.create.title')}</h4>
                        <p>{t('support.recipePixieGuide.sections.cookbooks.create.content')}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.cookbooks.manage.title')}</h4>
                        <p>{t('support.recipePixieGuide.sections.cookbooks.manage.content')}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </section>

                {/* 8. Meal Planner */}
                <section id="meal-planner">
                  <AccordionItem value="meal-planner" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-6 w-6 text-primary" />
                        {t('support.recipePixieGuide.sections.mealPlanner.title')}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                      <p>{t('support.recipePixieGuide.sections.mealPlanner.intro')}</p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.mealPlanner.howTo.title')}</h4>
                        <ol className="list-decimal list-inside space-y-1 ml-4">
                          {(t('support.recipePixieGuide.sections.mealPlanner.howTo.steps', { returnObjects: true }) as string[]).map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </section>

                {/* 9. Shopping List */}
                <section id="shopping-list">
                  <AccordionItem value="shopping-list" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                      <div className="flex items-center gap-3">
                        <ShoppingCart className="h-6 w-6 text-primary" />
                        {t('support.recipePixieGuide.sections.shoppingList.title')}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                      <p>{t('support.recipePixieGuide.sections.shoppingList.intro')}</p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.shoppingList.features.title')}</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          {(t('support.recipePixieGuide.sections.shoppingList.features.items', { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </section>

                {/* 10. Settings */}
                <section id="settings">
                  <AccordionItem value="settings" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                      <div className="flex items-center gap-3">
                        <Settings className="h-6 w-6 text-primary" />
                        {t('support.recipePixieGuide.sections.settings.title')}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.settings.options.title')}</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          {(t('support.recipePixieGuide.sections.settings.options.items', { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </section>

                {/* 11. Cook Mode */}
                <section id="cook-mode">
                  <AccordionItem value="cook-mode" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                      <div className="flex items-center gap-3">
                        <ChefHat className="h-6 w-6 text-primary" />
                        {t('support.recipePixieGuide.sections.cookMode.title')}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                      <p>{t('support.recipePixieGuide.sections.cookMode.intro')}</p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.cookMode.features.title')}</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          {(t('support.recipePixieGuide.sections.cookMode.features.items', { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </section>

                {/* 12. Mobile App */}
                <section id="mobile-app">
                  <AccordionItem value="mobile-app" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                      <div className="flex items-center gap-3">
                        <Smartphone className="h-6 w-6 text-primary" />
                        {t('support.recipePixieGuide.sections.mobileApp.title')}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                      <p>{t('support.recipePixieGuide.sections.mobileApp.intro')}</p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('support.recipePixieGuide.sections.mobileApp.install.title')}</h4>
                        <p>{t('support.recipePixieGuide.sections.mobileApp.install.content')}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </section>

                {/* 13. Tips & Tricks */}
                <section id="tips-tricks">
                  <AccordionItem value="tips-tricks" className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                      <div className="flex items-center gap-3">
                        <Lightbulb className="h-6 w-6 text-primary" />
                        {t('support.recipePixieGuide.sections.tipsTricks.title')}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                      <ul className="space-y-3">
                        {(t('support.recipePixieGuide.sections.tipsTricks.tips', { returnObjects: true }) as string[]).map((tip, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">💡</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </section>
              </Accordion>

              {/* CTA at the end */}
              <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10 text-center">
                <h3 className="text-2xl font-bold mb-4">{t('support.stillQuestions')}</h3>
                <p className="text-muted-foreground mb-6">{t('support.guideFooter')}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="default">
                    <a href="/#contact">{t('support.contactButton')}</a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/support">{t('support.backToOverview')}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RecipePixieGuide;
