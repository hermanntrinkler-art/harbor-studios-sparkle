import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const PortalNavLink = () => {
  const { t } = useTranslation();
  const { isAuthenticated, isAdmin, loading } = useAuth();

  const destination = loading ? "/portal/login" : isAuthenticated ? (isAdmin ? "/admin" : "/portal") : "/portal/login";

  return (
    <div className="fixed top-4 left-4 z-50">
      <Button
        asChild
        variant="outline"
        size="sm"
        className="gap-2 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
      >
        <Link to={destination}>
          <UserCircle className="h-4 w-4" />
          <span>{t("nav.customerArea")}</span>
        </Link>
      </Button>
    </div>
  );
};

export default PortalNavLink;
