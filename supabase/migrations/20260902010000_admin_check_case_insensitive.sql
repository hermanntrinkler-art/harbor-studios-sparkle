-- Kleine Absicherung: die Admin-Erkennung sollte unabhängig von Groß-/Kleinschreibung
-- der E-Mail-Adresse funktionieren (z. B. falls beim Registrieren mal
-- "Hermann.Trinkler@gmail.com" statt "hermann.trinkler@gmail.com" eingegeben wird).
-- Führe diese Datei NACH 20260902000000_customer_portal.sql einmalig im
-- Supabase SQL-Editor aus.

create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select lower(coalesce(auth.jwt() ->> 'email', '')) = 'hermann.trinkler@gmail.com';
$$;
