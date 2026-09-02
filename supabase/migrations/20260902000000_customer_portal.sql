-- Kundenbereich: Kunden können sich selbst registrieren/einloggen und ihren
-- Projektfortschritt sehen. Rechnungswesen (Kunden/Angebote/Rechnungen/
-- Firmeneinstellungen) bleibt ausschließlich dir als Admin vorbehalten.
--
-- Führe diese Datei NACH 20260901000000_admin_area.sql einmalig im
-- Supabase SQL-Editor eures Projekts aus.

-- 1) Admin-Erkennung: fest an deine E-Mail gebunden (keine separate Rollen-Tabelle nötig).
create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select coalesce(auth.jwt() ->> 'email', '') = 'hermann.trinkler@gmail.com';
$$;

-- 2) Kunden können mit ihrem eigenen Portal-Konto (auth.users) verknüpft werden.
alter table public.customers
  add column if not exists user_id uuid references auth.users(id) unique;

-- 3) Projekte pro Kunde (das, was der Kunde als "Fortschritt" sieht)
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.customers(id) on delete cascade,
  title text not null,
  description text,
  status text not null default 'anfrage' check (status in ('anfrage', 'in_arbeit', 'review', 'live', 'pausiert')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_updated_at on public.projects;
create trigger set_updated_at before update on public.projects
  for each row execute function public.set_updated_at();

-- 4) Fortschritts-Verlauf je Projekt (von dir als Admin gepflegt, vom Kunden nur gelesen)
create table if not exists public.project_updates (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  title text not null,
  body text,
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;
alter table public.project_updates enable row level security;

-- 5) Admin-Zugriff: volle Kontrolle auf allen Tabellen
drop policy if exists "Admin full access" on public.customers;
create policy "Admin full access" on public.customers
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Admin full access" on public.projects;
create policy "Admin full access" on public.projects
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Admin full access" on public.project_updates;
create policy "Admin full access" on public.project_updates
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- 6) Kunden-Zugriff: nur lesend, nur die eigenen Daten
drop policy if exists "Authenticated full access" on public.customers;
drop policy if exists "Customers read own row" on public.customers;
create policy "Customers read own row" on public.customers
  for select to authenticated using (user_id = auth.uid());

drop policy if exists "Customers read own projects" on public.projects;
create policy "Customers read own projects" on public.projects
  for select to authenticated using (
    customer_id in (select id from public.customers where user_id = auth.uid())
  );

drop policy if exists "Customers read own project updates" on public.project_updates;
create policy "Customers read own project updates" on public.project_updates
  for select to authenticated using (
    project_id in (
      select p.id from public.projects p
      join public.customers c on c.id = p.customer_id
      where c.user_id = auth.uid()
    )
  );

-- 7) Rechnungswesen (Angebote/Rechnungen/Firmeneinstellungen): jetzt AUSSCHLIESSLICH Admin,
-- da nun auch Kunden eingeloggte "authenticated" Nutzer sind.
drop policy if exists "Authenticated full access" on public.company_settings;
create policy "Admin full access" on public.company_settings
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Authenticated full access" on public.quotes;
create policy "Admin full access" on public.quotes
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Authenticated full access" on public.quote_items;
create policy "Admin full access" on public.quote_items
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Authenticated full access" on public.invoices;
create policy "Admin full access" on public.invoices
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Authenticated full access" on public.invoice_items;
create policy "Admin full access" on public.invoice_items
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- 8) Admin-Funktion: einen Kunden-Datensatz mit einem Portal-Konto (per E-Mail) verknüpfen.
-- Läuft mit erhöhten Rechten (security definer), da auth.users normalerweise nicht
-- abfragbar ist -- prüft aber selbst, dass nur der Admin sie aufrufen kann.
create or replace function public.admin_link_customer_to_user(p_customer_id uuid, p_email text)
returns void
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  target_user_id uuid;
begin
  if not public.is_admin() then
    raise exception 'Nicht berechtigt';
  end if;

  select id into target_user_id from auth.users where lower(email) = lower(p_email) limit 1;

  if target_user_id is null then
    raise exception 'Kein Portal-Konto mit dieser E-Mail gefunden. Der Kunde muss sich zuerst im Kundenbereich registrieren.';
  end if;

  update public.customers set user_id = target_user_id where id = p_customer_id;
end;
$$;
