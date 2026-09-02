-- Supabase's neuere Postgres-Version blockiert UPDATEs ohne WHERE-Klausel
-- ("UPDATE requires a WHERE clause"). Die Nummern-Funktion aktualisierte
-- company_settings bisher ohne WHERE, da es ohnehin nur eine Zeile gibt.
-- Fix: die eine Zeile explizit per id ansprechen.
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
  settings_id uuid;
begin
  select id into settings_id from public.company_settings limit 1;

  if settings_id is null then
    raise exception 'company_settings hat keine Zeile — bitte zuerst eine Firmeneinstellungs-Zeile anlegen';
  end if;

  if doc_type = 'quote' then
    update public.company_settings
      set quote_next_number = quote_next_number + 1
      where id = settings_id
      returning quote_next_number - 1, quote_prefix into next_num, prefix;
  elsif doc_type = 'invoice' then
    update public.company_settings
      set invoice_next_number = invoice_next_number + 1
      where id = settings_id
      returning invoice_next_number - 1, invoice_prefix into next_num, prefix;
  else
    raise exception 'Unbekannter doc_type: %', doc_type;
  end if;

  formatted := prefix || '-' || to_char(now(), 'YYYY') || '-' || lpad(next_num::text, 4, '0');
  return formatted;
end;
$$;
