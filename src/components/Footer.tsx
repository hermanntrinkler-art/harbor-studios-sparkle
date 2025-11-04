import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="py-12 px-4 border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground mb-2">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
            <p className="text-sm text-muted-foreground/60">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="text-center">
              <h3 className="text-sm font-semibold mb-2">{t('footer.legal')}</h3>
              <div className="flex flex-col gap-1">
                <Link 
                  to="/privacy" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
                <Link 
                  to="/data-deletion" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.dataDeletion')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
