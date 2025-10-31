import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="py-12 px-4 border-t border-primary/20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground mb-2">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
        <p className="text-sm text-muted-foreground/60">
          {t('footer.tagline')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
