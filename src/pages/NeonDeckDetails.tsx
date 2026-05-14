import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const NeonDeckDetails = () => {
  const coreFeatures = [
    {
      emoji: "🎚️",
      title: "Dual Decks & Crossfader",
      items: [
        "Zwei vollständige Decks mit Play, Cue und Pitch-Kontrolle",
        "Smoother Crossfader für nahtlose Übergänge",
        "Wavesurfer.js für präzise Wellenform-Darstellung"
      ]
    },
    {
      emoji: "🤖",
      title: "Auto-DJ",
      items: [
        "KI-gestützte automatische Mixes",
        "Intelligente Track-Auswahl und Übergänge",
        "Perfekt für Partys ohne manuellen Aufwand"
      ]
    },
    {
      emoji: "🔥",
      title: "HotTracks",
      items: [
        "Schnellzugriff auf deine Lieblingstracks",
        "Hot Cues für sofortige Sprungpunkte",
        "Organisiere deine Sets effizient"
      ]
    },
    {
      emoji: "🎤",
      title: "Mikrofon-Integration",
      items: [
        "Live-Mikrofon-Eingang mit Lautstärke-Kontrolle",
        "Perfekt für Ansagen oder Live-Vocals",
        "Direkt im Browser ohne zusätzliche Software"
      ]
    },
    {
      emoji: "🎵",
      title: "Soundboard",
      items: [
        "Sample-Pads für Effekte und Stingers",
        "Eigene Sounds hochladen und triggern",
        "Bring deine Sets zum Leben"
      ]
    },
    {
      emoji: "📱",
      title: "PWA – Überall installierbar",
      items: [
        "Als Progressive Web App installierbar",
        "Funktioniert auf Desktop, Tablet und Smartphone",
        "Keine Installation aus dem App Store nötig"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Harbor Studios</span>
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 bg-green-500/20 text-green-600 border-green-500/30">
            Jetzt live
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            NeonDeck 🎧
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
            AI-powered Browser DJ Mixer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Zwei Decks. Ein Browser. Endlose Sets. NeonDeck ist ein KI-gestützter DJ-Mixer mit
            Crossfader, Auto-DJ, HotTracks, Soundboard und Mikrofon – direkt im Browser, ohne Installation.
            Als PWA überall verfügbar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://neondeck.app" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                Zur App
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Kernfunktionen
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Alles was du für ein professionelles DJ-Set brauchst
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{feature.emoji}</span>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Tech-Stack
          </h2>
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {["React 19", "TanStack Start", "Vite 7", "Tailwind v4", "Wavesurfer.js", "Web Audio API", "Cloud Backend", "Cloudflare Workers", "Stripe"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Über NeonDeck</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                NeonDeck ist eine Entwicklung von Harbor Studios. Wir glauben, dass DJ-Tools
                jedem zur Verfügung stehen sollten – ohne teure Software, ohne Installation.{" "}
                <span className="text-foreground font-medium">
                  Mix anywhere, no install.
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">Fragen oder Feedback?</span>
          </div>
          <a href="mailto:support@harborstudios.app" className="text-primary hover:underline text-lg font-medium">
            support@harborstudios.app
          </a>
          <p className="text-sm text-muted-foreground mt-2">Wir freuen uns auf deine Nachricht!</p>
        </div>
      </section>

      <section className="py-8 px-4 border-t border-border/40">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Nutzungsbedingungen</Link>
            <Link to="/data-deletion" className="text-muted-foreground hover:text-primary transition-colors">Datenlöschung</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NeonDeckDetails;
