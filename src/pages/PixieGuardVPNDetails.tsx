import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Clock, QrCode, CreditCard, Lock, Smartphone, Globe, Server, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";

const PixieGuardVPNDetails = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Shield, title: t('pixieGuardVPNDetails.features.wireguard.title'), description: t('pixieGuardVPNDetails.features.wireguard.description') },
    { icon: Clock, title: t('pixieGuardVPNDetails.features.freeTrial.title'), description: t('pixieGuardVPNDetails.features.freeTrial.description') },
    { icon: QrCode, title: t('pixieGuardVPNDetails.features.qrCode.title'), description: t('pixieGuardVPNDetails.features.qrCode.description') },
    { icon: CreditCard, title: t('pixieGuardVPNDetails.features.stripe.title'), description: t('pixieGuardVPNDetails.features.stripe.description') },
    { icon: Lock, title: t('pixieGuardVPNDetails.features.auth.title'), description: t('pixieGuardVPNDetails.features.auth.description') },
    { icon: Smartphone, title: t('pixieGuardVPNDetails.features.pwa.title'), description: t('pixieGuardVPNDetails.features.pwa.description') },
  ];

  const securityFeatures = [
    "AES-256 / ChaCha20 Poly1305",
    "Curve25519 Key Exchange",
    "Perfect Forward Secrecy",
    "No-Log Policy",
    "DNS Leak Protection",
    "Row-Level Security"
  ];

  const pricingPlans = [
    {
      name: "Free Trial",
      price: "€0",
      features: ["30 Min VPN", "1 " + t('pixieGuardVPNDetails.pricing.device'), "WireGuard"],
      highlighted: false
    },
    {
      name: "Pro",
      price: "€4,99",
      period: t('pixieGuardVPNDetails.pricing.month'),
      features: [t('pixieGuardVPNDetails.pricing.unlimited'), "5 " + t('pixieGuardVPNDetails.pricing.devices'), t('pixieGuardVPNDetails.pricing.allServers')],
      highlighted: true
    },
    {
      name: "Business",
      price: "€9,99",
      period: t('pixieGuardVPNDetails.pricing.month'),
      features: [t('pixieGuardVPNDetails.pricing.unlimitedDevices'), t('pixieGuardVPNDetails.pricing.dedicatedIP'), "Team-Management"],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {t('pixieGuardVPNDetails.backHome')}
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            🛡️ VPN & Security
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            PixieGuard VPN
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('pixieGuardVPNDetails.hero.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Shield className="w-5 h-5" />
              {t('pixieGuardVPNDetails.hero.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* What is Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">{t('pixieGuardVPNDetails.whatIs.title')}</h2>
          <p className="text-lg text-muted-foreground">
            {t('pixieGuardVPNDetails.whatIs.description')}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t('pixieGuardVPNDetails.features.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t('pixieGuardVPNDetails.security.title')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border/50">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">{t('pixieGuardVPNDetails.techStack.title')}</h2>
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React 18", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/ui"].map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Lovable Cloud", "PostgreSQL", "Stripe", "WireGuard"].map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t('pixieGuardVPNDetails.pricing.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`bg-card/50 border-border/50 ${plan.highlighted ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-6 text-center">
                  {plan.highlighted && (
                    <Badge className="mb-4 bg-primary text-primary-foreground">Popular</Badge>
                  )}
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <div className="my-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 justify-center text-muted-foreground">
                        <Check className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Server Info */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Server className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-foreground">{t('pixieGuardVPNDetails.server.title')}</h2>
          <Card className="bg-card/50 border-border/50 inline-block">
            <CardContent className="p-6">
              <div className="space-y-2 text-left">
                <p className="text-muted-foreground"><strong className="text-foreground">Endpoint:</strong> vpn.harborstudios.app:51820</p>
                <p className="text-muted-foreground"><strong className="text-foreground">Protocol:</strong> WireGuard</p>
                <p className="text-muted-foreground"><strong className="text-foreground">DNS:</strong> 1.1.1.1 (Cloudflare)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/20 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">{t('pixieGuardVPNDetails.cta.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('pixieGuardVPNDetails.cta.subtitle')}</p>
          <Button size="lg" className="gap-2">
            <Shield className="w-5 h-5" />
            {t('pixieGuardVPNDetails.cta.button')}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PixieGuardVPNDetails;