-- Zeiterfassung ("Steckuhr"): Start/Stopp pro Projekt, nur für dich als Admin sichtbar.
-- Führe diese Datei NACH den vorherigen Migrationen einmalig im
-- Supabase SQL-Editor aus.

create table if not exists public.time_entries (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  started_at timestamptz not null default now(),
  ended_at timestamptz,
  note text,
  created_at timestamptz not null default now()
);

create index if not exists time_entries_project_id_idx on public.time_entries(project_id);

-- Absicherung auf Datenbankebene: es darf immer nur EIN Eintrag gleichzeitig laufen
-- (ended_at ist null), egal bei welchem Projekt — man kann schließlich nur an einer
-- Sache gleichzeitig arbeiten.
create unique index if not exists time_entries_single_running_idx
  on public.time_entries ((true))
  where ended_at is null;

alter table public.time_entries enable row level security;

drop policy if exists "Admin full access" on public.time_entries;
create policy "Admin full access" on public.time_entries
  for all to authenticated using (public.is_admin()) with check (public.is_admin());
