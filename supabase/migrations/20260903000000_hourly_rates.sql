-- Stundensätze (Kategorien wie Webdesign, Programmierung, Datenbank) und
-- Verknüpfung von Zeiteinträgen mit Kategorie + Abrechnungsstatus.

create table if not exists public.hourly_rates (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  rate numeric(10,2) not null default 0,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_updated_at on public.hourly_rates;
create trigger set_updated_at before update on public.hourly_rates
  for each row execute function public.set_updated_at();

alter table public.hourly_rates enable row level security;
drop policy if exists "Admin full access" on public.hourly_rates;
create policy "Admin full access" on public.hourly_rates
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- ein paar sinnvolle Standard-Kategorien, nur falls die Tabelle noch leer ist
insert into public.hourly_rates (label, rate, sort_order)
select * from (values
  ('Webdesign', 60, 1),
  ('Programmierung', 80, 2),
  ('Datenbank', 70, 3)
) as v(label, rate, sort_order)
where not exists (select 1 from public.hourly_rates);

-- time_entries: welcher Kategorie/Satz gehört der Eintrag an, und wurde er
-- bereits über eine Rechnung abgerechnet?
alter table public.time_entries
  add column if not exists rate_id uuid references public.hourly_rates(id) on delete set null;
alter table public.time_entries
  add column if not exists invoice_id uuid references public.invoices(id) on delete set null;

create index if not exists time_entries_rate_id_idx on public.time_entries(rate_id);
create index if not exists time_entries_invoice_id_idx on public.time_entries(invoice_id);
