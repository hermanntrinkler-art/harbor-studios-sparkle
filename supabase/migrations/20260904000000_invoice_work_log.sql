-- Ausgeführte Arbeiten (Verlauf/Update-Einträge), die zu den abgerechneten
-- Projektstunden gehören, werden als Momentaufnahme auf der Rechnung
-- gespeichert (unabhängig davon, ob die Update-Einträge später bearbeitet
-- oder gelöscht werden).
alter table public.invoices
  add column if not exists work_log jsonb not null default '[]'::jsonb;
