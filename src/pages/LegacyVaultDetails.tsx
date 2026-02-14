import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Building2, FileText, Users, AlertTriangle, Shield, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LegacyVaultDetails = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Landmark className="h-8 w-8 text-amber-400" />,
      title: "🏦 Vermögensübersicht",
      description: "Bankkonten, Immobilien, Firmenanteile, Fahrzeuge, Versicherungen, Depots und Kredite zentral verwalten."
    },
    {
      icon: <Building2 className="h-8 w-8 text-blue-400" />,
      title: "🏢 Institutionen",
      description: "Kontaktdaten von Banken, Versicherungen, Notaren und Anwälten speichern – alles an einem Ort."
    },
    {
      icon: <FileText className="h-8 w-8 text-green-400" />,
      title: "📄 Dokumenten-Safe",
      description: "Pässe, Zeugnisse, Versicherungsscheine und andere wichtige Unterlagen sicher hochladen und kategorisieren."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "👥 Partner-Freigabe",
      description: "Gezielt Informationen mit dem Partner teilen, mit voller Kontrolle über jeden Datensatz."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-400" />,
      title: "🚨 Notfall-Export",
      description: "Ein aktuelles PDF mit allen wichtigen Infos für den Ernstfall – jederzeit abrufbar."
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-400" />,
      title: "🔒 Sicherheit",
      description: "Keine Passwörter/PINs im Klartext – nur Hinweise, wo Zugangsdaten liegen (z.B. Passwortmanager, Notar, Tresor)."
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
      <section className="py-20 px-4 bg-gradient-to-b from-amber-500/10 via-emerald-500/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            🔒 In Entwicklung
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
            LegacyVault
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ihr digitaler Vermögens- und Nachlassmanager – sicher, übersichtlich und für den Ernstfall vorbereitet.
          </p>
        </div>
      </section>

      {/* What is LegacyVault */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Was ist LegacyVault?</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Eine sichere Web-App für Paare und Familien, um alle wichtigen Vermögenswerte, Verträge und Dokumente 
            an einem Ort zu organisieren – ohne sensible Passwörter zu speichern. LegacyVault hilft Ihnen, 
            Ordnung in Ihre Finanzen zu bringen und für den Ernstfall vorzusorgen.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">✨ Kernfunktionen</h2>
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

      {/* Target Audience */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">👨‍👩‍👧‍👦 Zielgruppe</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Paare und Familien, die Ordnung in ihre Vermögensübersicht bringen und für den Ernstfall vorsorgen möchten. 
            Ob Eigenheim, Versicherungen oder digitale Konten – LegacyVault gibt Ihnen den Überblick.
          </p>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">🛡️ Sicherheitskonzept</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            LegacyVault speichert bewusst <strong>keine Passwörter oder PINs</strong> im Klartext. 
            Stattdessen hinterlegen Sie nur Hinweise, wo Ihre Zugangsdaten liegen – z.B. im Passwortmanager, 
            beim Notar oder im Tresor. So bleibt Ihre digitale Vermögensübersicht sicher, auch wenn sie geteilt wird.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">🚀 Technologie</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Gebaut mit React, TypeScript und Tailwind CSS. Backend-Funktionen wie Authentifizierung, 
            verschlüsselte Datenspeicherung und PDF-Export laufen über eine moderne Cloud-Infrastruktur.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "TypeScript", "Tailwind CSS", "PWA", "Cloud Backend", "PDF Export"].map((tech) => (
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
          <h2 className="text-3xl font-bold mb-4">Bereit, Ihre Vermögenswerte zu organisieren?</h2>
          <p className="text-muted-foreground mb-8">
            LegacyVault ist bald verfügbar – bleiben Sie gespannt!
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

export default LegacyVaultDetails;
