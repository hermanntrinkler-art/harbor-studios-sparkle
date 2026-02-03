import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mail, Upload, Globe, StickyNote, Shield, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BirthdayPixieDetails = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Mail className="h-8 w-8 text-pink-400" />,
      title: "E-Mail-Erinnerungen",
      description: "Erhalte rechtzeitig Erinnerungen – 1, 3, 7, 14 oder 30 Tage vor dem Geburtstag."
    },
    {
      icon: <Upload className="h-8 w-8 text-purple-400" />,
      title: "Einfacher Import",
      description: "Importiere Geburtstage direkt aus Outlook, Apple Contacts oder Google Kontakten (VCF/CSV)."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-400" />,
      title: "Mehrsprachig",
      description: "Automatische Spracherkennung – verfügbar auf Deutsch und Englisch."
    },
    {
      icon: <StickyNote className="h-8 w-8 text-yellow-400" />,
      title: "Notizen & Geschenkideen",
      description: "Halte fest, was du schenken möchtest – direkt bei jedem Kontakt."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-400" />,
      title: "Sicher & Privat",
      description: "Deine Daten gehören nur dir – verschlüsselte Speicherung, keine Weitergabe."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-cyan-400" />,
      title: "Responsive Design",
      description: "Optimiert für Desktop, Tablet und Smartphone – überall griffbereit."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>{t('nav.backToHome')}</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-pink-500/10 via-purple-500/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-pink-500/20 text-pink-400 text-sm font-medium mb-6">
            🎂 Demnächst verfügbar
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            BirthdayPixie
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nie wieder einen Geburtstag vergessen – dein persönlicher Erinnerungs-Assistent für besondere Tage.
          </p>
        </div>
      </section>

      {/* What is BirthdayPixie */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Was ist BirthdayPixie?</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            BirthdayPixie ist eine liebevoll gestaltete Web-App, die dafür sorgt, dass du keinen wichtigen Geburtstag mehr verpasst. 
            Mit intelligenten E-Mail-Erinnerungen, einfachem Import deiner Kontakte und Platz für Geschenkideen – alles sicher und privat.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">✨ Funktionen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-primary/20 bg-card hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">🎨 Design</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sanfte Pastellfarben, verspielte Animationen und ein klares, minimalistisches Interface schaffen eine emotional warme Nutzererfahrung – 
            perfekt für alle, die ihre Liebsten nicht vergessen wollen.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">🚀 Technologie</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Gebaut mit React, TypeScript und Tailwind CSS. Backend-Funktionen wie Authentifizierung, Datenbank und automatische E-Mail-Erinnerungen 
            laufen über eine moderne Cloud-Infrastruktur.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "TypeScript", "Tailwind CSS", "PWA", "Cloud Backend"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit, keinen Geburtstag mehr zu vergessen?</h2>
          <p className="text-muted-foreground mb-8">
            BirthdayPixie ist bald verfügbar – bleib gespannt!
          </p>
          <Button size="lg" disabled className="opacity-60">
            Demnächst verfügbar
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/40">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Harbor Studios. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
};

export default BirthdayPixieDetails;
