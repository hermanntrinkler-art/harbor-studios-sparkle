import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

interface Counts {
  customers: number;
  openProjects: number;
  openQuotes: number;
  openInvoices: number;
  overdueInvoices: number;
}

const Dashboard = () => {
  const [counts, setCounts] = useState<Counts | null>(null);

  useEffect(() => {
    const load = async () => {
      const [
        { count: customers },
        { count: openProjects },
        { count: openQuotes },
        { count: openInvoices },
        { count: overdueInvoices },
      ] = await Promise.all([
        supabase.from("customers").select("*", { count: "exact", head: true }),
        supabase.from("projects").select("*", { count: "exact", head: true }).neq("status", "live"),
        supabase.from("quotes").select("*", { count: "exact", head: true }).in("status", ["draft", "sent"]),
        supabase.from("invoices").select("*", { count: "exact", head: true }).in("status", ["sent", "overdue"]),
        supabase.from("invoices").select("*", { count: "exact", head: true }).eq("status", "overdue"),
      ]);

      setCounts({
        customers: customers || 0,
        openProjects: openProjects || 0,
        openQuotes: openQuotes || 0,
        openInvoices: openInvoices || 0,
        overdueInvoices: overdueInvoices || 0,
      });
    };

    load();
  }, []);

  const tiles = [
    { label: "Kunden", value: counts?.customers, to: "/admin/customers" },
    { label: "Offene Projekte", value: counts?.openProjects, to: "/admin/projects" },
    { label: "Offene Angebote", value: counts?.openQuotes, to: "/admin/quotes" },
    { label: "Offene Rechnungen", value: counts?.openInvoices, to: "/admin/invoices" },
    { label: "Überfällige Rechnungen", value: counts?.overdueInvoices, to: "/admin/invoices" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {tiles.map((tile) => (
          <Link key={tile.label} to={tile.to}>
            <Card className="hover:border-primary/40 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{tile.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{tile.value ?? "…"}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
