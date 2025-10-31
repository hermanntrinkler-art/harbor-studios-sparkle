const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-primary/20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground mb-2">
          © {new Date().getFullYear()} Harbor Studios. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground/60">
          Building the future, one project at a time
        </p>
      </div>
    </footer>
  );
};

export default Footer;
