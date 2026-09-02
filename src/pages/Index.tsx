import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PortalNavLink from "@/components/PortalNavLink";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortalNavLink />
      <LanguageSwitcher />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
