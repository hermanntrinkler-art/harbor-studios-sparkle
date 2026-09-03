import { supabase } from "@/integrations/supabase/client";

/** Startet eine neue Zeiterfassung für ein Projekt. Schlägt fehl, wenn bereits
 * eine andere Zeiterfassung läuft (Datenbank erlaubt nur eine gleichzeitig).
 * rateId ordnet den Eintrag optional einer Stundensatz-Kategorie zu. */
export async function startTimeEntry(projectId: string, rateId?: string | null) {
  return supabase.from("time_entries").insert({ project_id: projectId, rate_id: rateId || null });
}

/** Stoppt eine laufende Zeiterfassung (setzt ended_at auf jetzt). */
export async function stopTimeEntry(entryId: string) {
  return supabase.from("time_entries").update({ ended_at: new Date().toISOString() }).eq("id", entryId);
}
