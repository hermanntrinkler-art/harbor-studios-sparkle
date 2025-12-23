import { Link } from "react-router-dom";

const CaptainsLogFooter = () => {
  return (
    <footer className="py-12 px-4 border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground mb-2">
              © {new Date().getFullYear()} Harbor Studios. Alle Rechte vorbehalten.
            </p>
            <p className="text-sm text-muted-foreground/60">
              Captain's Log – Dein digitales Logbuch für die See
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="text-center">
              <h3 className="text-sm font-semibold mb-2">Support</h3>
              <div className="flex flex-col gap-1">
                <a 
                  href="https://captainlog.pro" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Captain's Log Website
                </a>
                <a 
                  href="mailto:support@harborstudios.app" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kontakt
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-sm font-semibold mb-2">Rechtliches</h3>
              <div className="flex flex-col gap-1">
                <Link 
                  to="/captains-log/privacy" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Datenschutz
                </Link>
                <Link 
                  to="/captains-log/data-deletion" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Datenlöschung
                </Link>
                <Link 
                  to="/captains-log/terms" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Nutzungsbedingungen
                </Link>
                <Link 
                  to="/captains-log/imprint" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Impressum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CaptainsLogFooter;
