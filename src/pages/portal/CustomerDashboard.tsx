import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { LogOut, Clock, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

type Project = Tables<"projects">;
type ProjectUpdate = Tables<"project_updates">;

const statusLabels: Record<string, string> = {
  anfrage: "Anfrage",
  in_arbeit: "In Arbeit",
  review: "In Review",
  live: "Live",
  pausiert: "Pausiert",
};

const statusColors: Record<string, string> = {
  anfrage: "bg-muted text-muted-foreground",
  in_arbeit: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  review: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  live: "bg-green-500/15 text-green-600 dark:text-green-400",
  pausiert: "bg-red-500/15 text-red-600 dark:text-red-400",
};

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });

const CustomerDashboard = () => {
  const { session, isAuthenticated, isAdmin, loading: authLoading } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [updatesByProject, setUpdatesByProject] = useState<Record<string, ProjectUpdate[]>>({});
  const [hasCustomerRecord, setHasCustomerRecord] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) return;

    const load = async () => {
      setLoading(true);
      const { data: customer } = await supabase.from("customers").select("id").maybeSingle();
      setHasCustomerRecord(!!customer);

      if (customer) {
        const { data: projectRows } = await supabase
          .from("projects")
          .select("*")
          .eq("customer_id", customer.id)
          .order("created_at", { ascending: false });
        setProjects(projectRows || []);

        if (projectRows && projectRows.length > 0) {
          const { data: updateRows } = await supabase
            .from("project_updates")
            .select("*")
            .in(
              "project_id",
              projectRows.map((p) => p.id)
            )
            .order("created_at", { ascending: false });

          const grouped: Record<string, ProjectUpdate[]> = {};
          (updateRows || []).forEach((update) => {
            grouped[update.project_id] = grouped[update.project_id] || [];
            grouped[update.project_id].push(update);
          });
          setUpdatesByProject(grouped);
        }
      }
      setLoading(false);
    };

    load();
  }, [isAuthenticated]);

  if (!authLoading && !isAuthenticated) {
    return <Navigate to="/portal/login" replace />;
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="font-bold text-lg">
            Harbor Studios
          </Link>
          <div className="flex items-center gap-3">
            {isAdmin && (
              <Button variant="outline" size="sm" asChild>
                <Link to="/admin">Zum Admin-Bereich</Link>
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Abmelden
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-1">Willkommen{session?.user?.email ? `, ${session.user.email}` : ""}</h1>
        <p className="text-muted-foreground mb-8">Hier siehst du den Fortschritt deiner Projekte.</p>

        {authLoading || loading ? (
          <p className="text-muted-foreground">Lädt…</p>
        ) : !hasCustomerRecord ? (
          <Card>
            <CardContent className="pt-6 text-center py-12">
              <Mail className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
              <p className="font-medium mb-1">Noch kein Projekt zugeordnet</p>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                Dein Konto ist noch keinem Kunden zugeordnet. Sobald wir dein Projekt bei uns anlegen und mit deinem
                Konto verknüpfen, siehst du hier automatisch den Fortschritt.
              </p>
            </CardContent>
          </Card>
        ) : projects.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center py-12">
              <Clock className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
              <p className="font-medium mb-1">Noch kein Projekt zugeordnet</p>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                Sobald dein Projekt gestartet wird, erscheint es hier mit dem aktuellen Status.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
                  <div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    {project.description && (
                      <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                    )}
                  </div>
                  <span
                    className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${
                      statusColors[project.status] || "bg-muted text-muted-foreground"
                    }`}
                  >
                    {statusLabels[project.status] || project.status}
                  </span>
                </CardHeader>
                <CardContent>
                  {(updatesByProject[project.id] || []).length === 0 ? (
                    <p className="text-sm text-muted-foreground">Noch keine Updates vorhanden.</p>
                  ) : (
                    <ol className="space-y-4 border-l border-border/60 pl-4">
                      {(updatesByProject[project.id] || []).map((update) => (
                        <li key={update.id}>
                          <p className="text-xs text-muted-foreground">{formatDate(update.created_at)}</p>
                          <p className="font-medium text-sm">{update.title}</p>
                          {update.body && (
                            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{update.body}</p>
                          )}
                        </li>
                      ))}
                    </ol>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default CustomerDashboard;
