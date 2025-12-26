import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CaptainsLogDetailsEN = () => {
  const features = [
    {
      emoji: "📔",
      title: "Digital Logbook & Voyage Management",
      items: [
        "Create and manage complete voyages",
        "Automatic recording of start, destination, duration, and distance",
        "Log maneuvers, course changes, and events",
        "Free notes at any time",
        "Clear statistics on distance, time, and usage"
      ]
    },
    {
      emoji: "⚓",
      title: "GPS & Position Features",
      items: [
        "Automatic position recording during navigation",
        "Detection of anchoring, maneuvers, and stops",
        "Dynamic draft (e.g., for swing keel boats)",
        "Optional import via Signal K (onboard network)"
      ]
    },
    {
      emoji: "🧭",
      title: "Anchor Watch & Safety",
      items: [
        "Set an anchor point with swing circle",
        "Permanent position monitoring",
        "Alarm on position deviation",
        "Offline capable – works without internet connection"
      ]
    },
    {
      emoji: "🧰",
      title: "Maintenance & Boat Data",
      items: [
        "Management of boat data (dimensions, engine, sails, tanks)",
        "Maintenance schedules with intervals (time or operating hours)",
        "History of all completed work",
        "Automatic calculation of operating hours",
        "Clear maintenance status (OK / due / overdue)"
      ]
    },
    {
      emoji: "📋",
      title: "Checklists & Procedures",
      items: [
        "Predefined checklists (departure, anchoring, night sailing, etc.)",
        "Create custom checklists",
        "Progress visible per run",
        "Ideal for crew changes or recurring procedures"
      ]
    },
    {
      emoji: "📚",
      title: "Knowledge Base",
      items: [
        "Nautical dictionary",
        "Knots and maneuver overviews",
        "Radio & emergency procedures (Mayday, Pan-Pan, Sécurité)",
        "International flag alphabet",
        "Integrated search function"
      ]
    },
    {
      emoji: "🗺️",
      title: "Export & Documentation",
      items: [
        "PDF export of complete logbooks",
        "GPX and KML export for navigation software",
        "Complete data backup and recovery"
      ]
    },
    {
      emoji: "🔒",
      title: "Security & Privacy",
      items: [
        "Personal data stays private",
        "No sharing with third parties",
        "Full control over deletion and export",
        "Audit-proof storage of log data",
        "GDPR-compliant processing"
      ]
    },
    {
      emoji: "⚙️",
      title: "Technology & Platform",
      items: [
        "Progressive Web App (PWA)",
        "Runs on smartphone, tablet, and desktop",
        "Usable offline",
        "Synchronization when connected",
        "Optional: Signal-K connection for onboard data"
      ]
    },
    {
      emoji: "💎",
      title: "Premium Features",
      items: [
        "Signal-K integration",
        "Extended maintenance features",
        "Weather & tide data",
        "Custom checklists",
        "Future premium features included"
      ],
      isPremium: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </Link>
          <Link to="/projects/captains-log">
            <Button variant="outline" size="sm" className="gap-2">
              🇩🇪 Deutsch
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 bg-green-500/20 text-green-600 border-green-500/30">
            Live
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Captain's Log ⚓️
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
            Your Digital Logbook for Real Sailors
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Captain's Log is a modern, offline-capable logbook app for sailors who want to reliably document 
            their boat, their voyages, and their data – without unnecessary complexity.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#features">
              <Button size="lg" variant="outline">
                🚀 Key Features
              </Button>
            </a>
            <a href="https://captainlog.pro/" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                Go to App
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            🚀 Key Features
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Everything you need for your digital ship's log
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`border-2 hover:border-primary transition-all duration-300 hover:shadow-lg ${
                  feature.isPremium ? 'border-amber-500/50 bg-gradient-to-br from-amber-500/5 to-transparent' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{feature.emoji}</span>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    {feature.isPremium && (
                      <Badge variant="default" className="bg-amber-500 text-white text-xs ml-auto">
                        Premium
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
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

      {/* In a nutshell */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-3xl text-center">In a Nutshell</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Captain's Log is not a navigation system, but your digital ship's log.
                <br />
                <span className="text-foreground font-medium">
                  It thinks ahead, documents reliably, and helps you keep track – without being patronizing.
                </span>
              </p>
              <a href="https://captainlog.pro/" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Discover Captain's Log Now
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">
              Questions or feedback?
            </span>
          </div>
          <a
            href="mailto:support@harborstudios.app"
            className="text-primary hover:underline text-lg font-medium"
          >
            support@harborstudios.app
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            We look forward to hearing from you!
          </p>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-8 px-4 border-t border-border/40">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link 
              to="/captains-log/imprint" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Imprint
            </Link>
            <Link 
              to="/captains-log/privacy" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/captains-log/terms" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Use
            </Link>
            <Link 
              to="/captains-log/data-deletion" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Data Deletion
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaptainsLogDetailsEN;
