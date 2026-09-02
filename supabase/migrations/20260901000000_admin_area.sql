-- Admin-Bereich: Kunden, Angebote, Rechnungen, Firmen-/Briefkopf-Einstellungen
-- Führe diese Datei einmalig im Supabase SQL-Editor eures Projekts aus
-- (Dashboard -> SQL Editor -> New query -> Inhalt einfügen -> Run).

-- 1) Firmen-/Briefkopf-Einstellungen (genau eine Zeile)
create table if not exists public.company_settings (
  id uuid primary key default gen_random_uuid(),
  company_name text not null default 'Harbor Studios',
  owner_name text,
  address_line1 text,
  address_line2 text,
  postal_code text,
  city text,
  country text not null default 'Deutschland',
  email text,
  phone text,
  website text,
  tax_number text,
  vat_id text,
  iban text,
  bic text,
  bank_name text,
  logo_url text,
  footer_note text,
  payment_terms_days integer not null default 14,
  quote_prefix text not null default 'AN',
  invoice_prefix text not null default 'RE',
  quote_next_number integer not null default 1,
  invoice_next_number integer not null default 1,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2) Kunden
create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  company_name text,
  contact_name text,
  email text,
  phone text,
  address_line1 text,
  address_line2 text,
  postal_code text,
  city text,
  country text not null default 'Deutschland',
  vat_id text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 3) Angebote
create table if not exists public.quotes (
  id uuid primary key default gen_random_uuid(),
  quote_number text not null unique,
  customer_id uuid not null references public.customers(id) on delete restrict,
  issue_date date not null default current_date,
  valid_until date,
  status text not null default 'draft' check (status in ('draft', 'sent', 'accepted', 'declined')),
  tax_rate numeric(5,2) not null default 19,
  subtotal numeric(12,2) not null default 0,
  tax_amount numeric(12,2) not null default 0,
  total numeric(12,2) not null default 0,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quote_items (
  id uuid primary key default gen_random_uuid(),
  quote_id uuid not null references public.quotes(id) on delete cascade,
  position integer not null default 1,
  description text not null default '',
  quantity numeric(12,2) not null default 1,
  unit text not null default 'Stk.',
  unit_price numeric(12,2) not null default 0,
  line_total numeric(12,2) not null default 0,
  created_at timestamptz not null default now()
);

-- 4) Rechnungen
create table if not exists public.invoices (
  id uuid primary key default gen_random_uuid(),
  invoice_number text not null unique,
  customer_id uuid not null references public.customers(id) on delete restrict,
  quote_id uuid references public.quotes(id) on delete set null,
  issue_date date not null default current_date,
  due_date date,
  status text not null default 'draft' check (status in ('draft', 'sent', 'paid', 'overdue', 'cancelled')),
  tax_rate numeric(5,2) not null default 19,
  subtotal numeric(12,2) not null default 0,
  tax_amount numeric(12,2) not null default 0,
  total numeric(12,2) not null default 0,
  notes text,
  paid_at date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.invoice_items (
  id uuid primary key default gen_random_uuid(),
  invoice_id uuid not null references public.invoices(id) on delete cascade,
  position integer not null default 1,
  description text not null default '',
  quantity numeric(12,2) not null default 1,
  unit text not null default 'Stk.',
  unit_price numeric(12,2) not null default 0,
  line_total numeric(12,2) not null default 0,
  created_at timestamptz not null default now()
);

-- 5) updated_at automatisch pflegen
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_updated_at on public.company_settings;
create trigger set_updated_at before update on public.company_settings
  for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at on public.customers;
create trigger set_updated_at before update on public.customers
  for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at on public.quotes;
create trigger set_updated_at before update on public.quotes
  for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at on public.invoices;
create trigger set_updated_at before update on public.invoices
  for each row execute function public.set_updated_at();

-- 6) Fortlaufende Angebots-/Rechnungsnummern (atomar, pro Jahr fortlaufend: PREFIX-JAHR-0001)
create or replace function public.get_next_document_number(doc_type text)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  next_num integer;
  prefix text;
  formatted text;
begin
  if doc_type = 'quote' then
    update public.company_settings
      set quote_next_number = quote_next_number + 1
      returning quote_next_number - 1, quote_prefix into next_num, prefix;
  elsif doc_type = 'invoice' then
    update public.company_settings
      set invoice_next_number = invoice_next_number + 1
      returning invoice_next_number - 1, invoice_prefix into next_num, prefix;
  else
    raise exception 'Unbekannter doc_type: %', doc_type;
  end if;

  if next_num is null then
    raise exception 'company_settings hat keine Zeile — bitte zuerst eine Firmeneinstellungs-Zeile anlegen';
  end if;

  formatted := prefix || '-' || to_char(now(), 'YYYY') || '-' || lpad(next_num::text, 4, '0');
  return formatted;
end;
$$;

-- 7) Genau eine company_settings-Zeile sicherstellen
insert into public.company_settings (company_name)
select 'Harbor Studios'
where not exists (select 1 from public.company_settings);

-- 8) Row Level Security: nur eingeloggte Admin-Nutzer dürfen lesen/schreiben.
-- Es gibt keine öffentliche Registrierung für diese Tabellen — Zugänge legst du
-- selbst über das Supabase-Dashboard (Authentication -> Users -> Add user) an.
alter table public.company_settings enable row level security;
alter table public.customers enable row level security;
alter table public.quotes enable row level security;
alter table public.quote_items enable row level security;
alter table public.invoices enable row level security;
alter table public.invoice_items enable row level security;

drop policy if exists "Authenticated full access" on public.company_settings;
create policy "Authenticated full access" on public.company_settings
  for all to authenticated using (true) with check (true);

drop policy if exists "Authenticated full access" on public.customers;
create policy "Authenticated full access" on public.customers
  for all to authenticated using (true) with check (true);

drop policy if exists "Authenticated full access" on public.quotes;
create policy "Authenticated full access" on public.quotes
  for all to authenticated using (true) with check (true);

drop policy if exists "Authenticated full access" on public.quote_items;
create policy "Authenticated full access" on public.quote_items
  for all to authenticated using (true) with check (true);

drop policy if exists "Authenticated full access" on public.invoices;
create policy "Authenticated full access" on public.invoices
  for all to authenticated using (true) with check (true);

drop policy if exists "Authenticated full access" on public.invoice_items;
create policy "Authenticated full access" on public.invoice_items
  for all to authenticated using (true) with check (true);
