import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Sparkles, Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const RecipePixieDetails = () => {
  const features = [
    {
      title: "KI-gestützter Quick Paste Parser",
      description: "Nie wieder abtippen! Einfach Rezepte von Facebook, TikTok, Instagram oder Webseiten kopieren. Die KI extrahiert automatisch Zutaten und Zubereitungsschritte. Spart 90% der Zeit im Vergleich zu manueller Eingabe."
    },
    {
      title: "Intelligente Nährwertberechnung",
      description: "Automatische Berechnung von Kalorien, Proteinen, Kohlenhydraten und Fett. Pro Portion – nicht nur für das gesamte Rezept. Perfekt für gesundheitsbewusste Ernährung."
    },
    {
      title: "Gemeinsame digitale Kochbücher",
      description: "Erstellen Sie Familien-Kochbücher und teilen Sie sie mit Liebsten. Kollaborative Rezeptsammlung – jeder kann beitragen. Rollenbasierte Zugriffsrechte (Besitzer, Bearbeiter, Betrachter)."
    },
    {
      title: "Professionelle PDF-Exporte",
      description: "Erstellen Sie druckbare A4-Kochbücher mit einem Klick. Perfekt als Geschenk für Geburtstage, Hochzeiten oder Weihnachten. Individuell gestaltbar mit eigenen Rezepten und Bildern."
    },
    {
      title: "Echte Mehrsprachigkeit",
      description: "Vollständig übersetzt in Deutsch, Englisch, Französisch & Spanisch. Perfekt für internationale Familien. Automatische Datumsformatierung je nach Sprache."
    },
    {
      title: "Smarte Organisation",
      description: "Kategorien & Unterkategorien (Hauptgang, Dessert, Vegetarisch, etc.). Favoriten-System für Lieblingsrezepte. Bewertungssystem (1-5 Sterne). Suchfunktion mit Filtern (Schwierigkeit, Bewertung, Kategorie)."
    },
    {
      title: "Automatische Portionsberechnung",
      description: "Zutaten werden automatisch auf beliebige Portionen skaliert. Nie wieder händisch umrechnen!"
    }
  ];

  const comparison = [
    { feature: "KI-Parser", recipePixie: true, others: false },
    { feature: "Kochbuch-Sharing", recipePixie: true, others: "partial" },
    { feature: "PDF-Export", recipePixie: true, others: "partial" },
    { feature: "Nährwerte", recipePixie: true, others: false },
    { feature: "Mehrsprachig", recipePixie: true, others: "partial" },
    { feature: "Offline-Nutzung", recipePixie: true, others: false }
  ];

  const perfectFor = [
    "Familien, die Generationen-Rezepte digital bewahren wollen",
    "Hobby-Köche, die Social-Media-Rezepte sammeln",
    "Food-Blogger, die ihre Kreationen professionell präsentieren wollen",
    "Gesundheitsbewusste, die Nährwerte im Blick behalten möchten"
  ];

  const testimonials = [
    "Endlich habe ich Omas handgeschriebene Rezepte digitalisiert und kann sie mit meiner ganzen Familie teilen!",
    "Der KI-Parser spart mir Stunden! Einfach Copy-Paste und fertig.",
    "Die PDF-Exporte sind perfekt als Geschenk – habe schon 3 Hochzeits-Kochbücher erstellt!"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-semibold">Harbor Studios</span>
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
            Recipe Pixie - Ihre magische Rezeptsammlung ✨
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Die intelligente Lösung für moderne Hobbyköche und Familien, die ihre Rezepte endlich professionell organisieren möchten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <a href="https://my-recipe-pixie.lovable.app/?utm_source=lovable-editor" target="_blank" rel="noopener noreferrer">
                Jetzt Recipe Pixie ausprobieren
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
            <h2 className="text-3xl font-bold mb-4 text-foreground">Was ist Recipe Pixie?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Recipe Pixie ist die intelligente Lösung für moderne Hobbyköche und Familien, die ihre Rezepte endlich professionell organisieren möchten. Von handgeschriebenen Familienrezepten bis zu Social-Media-Fundstücken – mit Recipe Pixie haben Sie Ihre gesamte Rezeptsammlung immer griffbereit.
            </p>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            🚀 Warum Recipe Pixie besser ist
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 border-primary/20 bg-card hover:border-primary/40 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-foreground flex items-start gap-2">
                  <span className="text-primary">{index + 1}.</span>
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
            💡 Der Unterschied zu anderen Apps
          </h2>
          <Card className="overflow-hidden border-primary/20 bg-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left text-foreground font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-primary font-semibold">Recipe Pixie</th>
                    <th className="px-6 py-4 text-center text-muted-foreground font-semibold">Andere Apps</th>
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
            🎯 Perfekt für
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {perfectFor.map((item, index) => (
              <Card key={index} className="p-6 border-primary/20 bg-card">
                <p className="text-foreground leading-relaxed flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
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
            🌟 Das sagen Nutzer
          </h2>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-primary/20 bg-card">
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "{testimonial}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Bereit, Ihre Rezepte zu organisieren?
          </h2>
          <Button asChild size="lg" className="text-lg">
            <a href="https://my-recipe-pixie.lovable.app/?utm_source=lovable-editor" target="_blank" rel="noopener noreferrer">
              Jetzt Recipe Pixie ausprobieren
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RecipePixieDetails;