import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

// Der Admin-Zugang hängt fest an dieser E-Mail-Adresse (siehe auch die
// Datenbankfunktion public.is_admin() in supabase/migrations/20260902000000_customer_portal.sql).
// Die eigentliche Berechtigungsprüfung passiert serverseitig über Row Level Security –
// dieser Wert steuert hier nur, wohin die Oberfläche nach dem Login leitet.
const ADMIN_EMAIL = "hermann.trinkler@gmail.com";

export const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const isAuthenticated = !!session;
  const isAdmin = (session?.user?.email || "").toLowerCase() === ADMIN_EMAIL;

  return { session, loading, isAuthenticated, isAdmin };
};
