import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Wind, Gauge, SprayCan, HardHat, Zap, Wrench, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DFGDetails = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Wind className="h-8 w-8 text-amber-400" />,
      title: "Sandstrahltechnik",
      description: "Sandstrahlkessel, -düsen, -schläuche, Strahlkabinen und Zubehör – auch als Sonderanfertigung."
    },
    {
      icon: <Gauge className="h-8 w-8 text-blue-400" />,
      title: "Drucklufttechnik",
      description: "Kompressoren, Druckluftanlagen, Armaturen, Kupplungen und technische Schläuche."
    },
    {
      icon: <SprayCan className="h-8 w-8 text-orange-400" />,
      title: "Airless- & Lackiertechnik",
      description: "Airlessgeräte, -pistolen, -schläuche und Filter für effizientes Beschichten."
    },
    {
      icon: <HardHat className="h-8 w-8 text-yellow-400" />,
      title: "Arbeitsschutz",
      description: "Kopf-, Hand- und Atemschutz sowie Schutzkleidung für den täglichen Einsatz."
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-400" />,
      title: "Elektro & Baustrom",
      description: "Elektroartikel mit Schwerpunkt Baustrom, inklusive Prüfung nach DGUV A3."
    },
    {
      icon: <Wrench className="h-8 w-8 text-emerald-400" />,
      title: "Reparatur & Service",
      description: "Wartung, Reparatur und individuelle Lösungen für maximale Ausfallsicherheit."
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
      <section className="py-20 px-4 bg-gradient-to-b from-amber-500/10 via-orange-500/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            🚧 In Arbeit
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            DFG Handels GmbH
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Neue Unternehmenswebsite für einen Traditionsbetrieb aus Moers – Sandstrahl-, Druckluft- und Airlesstechnik seit 1981.
          </p>
        </div>
      </section>

      {/* What is this project */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Über das Projekt</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Harbor Studios entwickelt für die DFG Handels GmbH aus Moers eine moderne Unternehmenswebsite.
            Seit über 40 Jahren beliefert DFG Kunden aus Korrosionsschutz, Oberflächentechnik und Malerhandwerk
            mit Sandstrahl-, Druckluft- und Airlesstechnik sowie Arbeitsschutz- und Elektroartikeln. Die neue Seite
            bündelt Leistungsübersicht, Firmenportrait, Kontaktformular und die Anbindung an den bestehenden Online-Shop.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Leistungen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-primary/20 bg-card hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company facts */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Das Unternehmen</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Gegründet 1981 in Moers, steht die DFG Handels GmbH für persönliche Beratung, kompetenten Service
            und einen umfangreichen Online-Shop rund um Oberflächentechnik.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Seit 1981", "Moers", "DGUV A3 Elektroprüfungen", "Persönliche Beratung"].map((fact) => (
              <span key={fact} className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                {fact}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Technologie</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Eine schlanke, schnell ladende Unternehmenswebsite mit Kontaktformular und Verlinkung zum bestehenden
            Online-Shop (steflow.shop).
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "TypeScript", "Tailwind CSS", "Vercel Hosting"].map((tech) => (
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
          <h2 className="text-3xl font-bold mb-4">Die Website befindet sich aktuell in Arbeit</h2>
          <p className="text-muted-foreground mb-8">
            Eine provisorische Vorschau ist bereits online – die finale Version folgt in Kürze.
          </p>
          <Button asChild size="lg" variant="outline" className="group/btn">
            <a href="https://dfg-delta.vercel.app" target="_blank" rel="noopener noreferrer">
              Vorschau ansehen
              <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
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

export default DFGDetails;
