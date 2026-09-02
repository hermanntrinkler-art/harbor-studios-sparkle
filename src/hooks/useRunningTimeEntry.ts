import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export interface RunningTimeEntry extends Tables<"time_entries"> {
  project: Pick<Tables<"projects">, "id" | "title"> | null;
}

/** Liefert die aktuell laufende Zeiterfassung (falls vorhanden), egal für
 * welches Projekt. Es kann laut Datenbank-Constraint immer nur eine geben. */
export const useRunningTimeEntry = () => {
  const [running, setRunning] = useState<RunningTimeEntry | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    const { data } = await supabase
      .from("time_entries")
      .select("*, project:projects(id, title)")
      .is("ended_at", null)
      .order("started_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    setRunning((data as RunningTimeEntry | null) || null);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { running, loading, refresh };
};
