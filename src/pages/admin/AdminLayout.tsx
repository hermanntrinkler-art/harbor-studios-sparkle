import { useState } from "react";
import { Navigate, NavLink, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, FolderKanban, FileText, Receipt, Settings, LogOut, Menu, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import RunningTimer from "@/components/admin/RunningTimer";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/customers", label: "Kunden", icon: Users },
  { to: "/admin/projects", label: "Projekte", icon: FolderKanban },
  { to: "/admin/quotes", label: "Angebote", icon: FileText },
  { to: "/admin/invoices", label: "Rechnungen", icon: Receipt },
  { to: "/admin/settings", label: "Einstellungen", icon: Settings },
];

const AdminLayout = () => {
  const { isAuthenticated, isAdmin, loading } = useAuth();
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Lädt…</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/portal/login" state={{ from: location.pathname }} replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/portal" replace />;
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const closeMobileNav = () => setMobileNavOpen(false);

  const sidebarContent = (
    <>
      <div className="px-4 py-5 font-bold text-lg border-b border-border/40 flex items-center justify-between">
        Harbor Studios
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={closeMobileNav}
          aria-label="Menü schließen"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      <div className="pt-3">
        <RunningTimer />
      </div>
      <nav className="flex-1 py-4 space-y-1 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={closeMobileNav}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`
            }
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="p-2 border-t border-border/40">
        <Button variant="ghost" className="w-full justify-start gap-3" onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
          Abmelden
        </Button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex bg-background">
      {/* Mobile Top-Bar mit Hamburger-Menü */}
      <div className="md:hidden fixed top-0 inset-x-0 h-14 border-b border-border/40 bg-background z-30 flex items-center justify-between px-3">
        <Button variant="ghost" size="icon" onClick={() => setMobileNavOpen(true)} aria-label="Menü öffnen">
          <Menu className="h-5 w-5" />
        </Button>
        <span className="font-bold">Harbor Studios</span>
        <div className="w-9" />
      </div>

      {/* Abdunklung hinter der mobilen Sidebar */}
      {mobileNavOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMobileNav}
          aria-hidden="true"
        />
      )}

      {/* Sidebar: auf Desktop immer sichtbar, auf Mobile als Drawer */}
      <aside
        className={`w-60 shrink-0 border-r border-border/40 flex flex-col bg-background fixed inset-y-0 left-0 z-50 transition-transform duration-200 md:static md:translate-x-0 ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>

      <main className="flex-1 overflow-y-auto pt-14 md:pt-0">
        <div className="max-w-6xl mx-auto px-4 py-6 md:px-6 md:py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
