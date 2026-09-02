import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Pencil, Download, ArrowLeft, FileOutput } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { buildDocumentPdf } from "@/lib/pdf";

type Quote = Tables<"quotes">;
type QuoteItem = Tables<"quote_items">;
type Customer = Tables<"customers">;
type CompanySettings = Tables<"company_settings">;

const statusLabels: Record<string, string> = {
  draft: "Entwurf",
  sent: "Versendet",
  accepted: "Angenommen",
  declined: "Abgelehnt",
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value);

const QuoteView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quote, setQuote] = useState<Quote | null>(null);
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [company, setCompany] = useState<CompanySettings | null>(null);
  const [converting, setConverting] = useState(false);
  const [hasInvoice, setHasInvoice] = useState(false);

  const load = async () => {
    const { data: quoteData, error } = await supabase.from("quotes").select("*").eq("id", id).single();
    if (error || !quoteData) {
      toast.error("Angebot nicht gefunden");
      navigate("/admin/quotes");
      return;
    }
    setQuote(quoteData);

    const [{ data: itemsData }, { data: customerData }, { data: companyData }, { count: invoiceCount }] =
      await Promise.all([
        supabase.from("quote_items").select("*").eq("quote_id", id).order("position"),
        supabase.from("customers").select("*").eq("id", quoteData.customer_id).single(),
        supabase.from("company_settings").select("*").limit(1).single(),
        supabase.from("invoices").select("*", { count: "exact", head: true }).eq("quote_id", id),
      ]);

    setItems(itemsData || []);
    setCustomer(customerData || null);
    setCompany(companyData || null);
    setHasInvoice((invoiceCount || 0) > 0);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleStatusChange = async (status: string) => {
    if (!quote) return;
    const { error } = await supabase.from("quotes").update({ status }).eq("id", quote.id);
    if (error) {
      toast.error("Status konnte nicht geändert werden");
    } else {
      setQuote({ ...quote, status });
      toast.success("Status aktualisiert");
    }
  };

  const handleDownloadPdf = () => {
    if (!quote || !customer || !company) return;
    const pdf = buildDocumentPdf(company, customer, {
      kind: "Angebot",
      number: quote.quote_number,
      issueDate: quote.issue_date,
      secondDateLabel: "Gültig bis",
      secondDate: quote.valid_until,
      items: items.map((item) => ({
        position: item.position,
        description: item.description,
        quantity: Number(item.quantity),
        unit: item.unit,
        unit_price: Number(item.unit_price),
        line_total: Number(item.line_total),
      })),
      subtotal: Number(quote.subtotal),
      taxRate: Number(quote.tax_rate),
      taxAmount: Number(quote.tax_amount),
      total: Number(quote.total),
      notes: quote.notes,
    });
    pdf.save(`${quote.quote_number}.pdf`);
  };

  const handleConvertToInvoice = async () => {
    if (!quote) return;
    setConverting(true);

    const { data: numberData, error: numberError } = await supabase.rpc("get_next_document_number", {
      doc_type: "invoice",
    });

    if (numberError || !numberData) {
      toast.error("Rechnungsnummer konnte nicht erzeugt werden");
      setConverting(false);
      return;
    }

    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14);

    const { data: invoice, error: invoiceError } = await supabase
      .from("invoices")
      .insert({
        invoice_number: numberData,
        customer_id: quote.customer_id,
        quote_id: quote.id,
        issue_date: new Date().toISOString().slice(0, 10),
        due_date: dueDate.toISOString().slice(0, 10),
        status: "draft",
        tax_rate: quote.tax_rate,
        subtotal: quote.subtotal,
        tax_amount: quote.tax_amount,
        total: quote.total,
        notes: quote.notes,
      })
      .select()
      .single();

    if (invoiceError || !invoice) {
      toast.error("Rechnung konnte nicht erstellt werden");
      setConverting(false);
      return;
    }

    const { error: itemsError } = await supabase.from("invoice_items").insert(
      items.map((item) => ({
        invoice_id: invoice.id,
        position: item.position,
        description: item.description,
        quantity: item.quantity,
        unit: item.unit,
        unit_price: item.unit_price,
        line_total: item.line_total,
      }))
    );

    setConverting(false);

    if (itemsError) {
      toast.error("Rechnungspositionen konnten nicht übernommen werden");
      return;
    }

    toast.success("Rechnung erstellt");
    navigate(`/admin/invoices/${invoice.id}`);
  };

  if (!quote || !customer) {
    return <p className="text-muted-foreground">Lädt…</p>;
  }

  return (
    <div>
      <Link to="/admin/quotes" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 text-sm">
        <ArrowLeft className="h-4 w-4" />
        Zurück zu Angeboten
      </Link>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Angebot {quote.quote_number}</h1>
        <div className="flex items-center gap-2">
          <Select value={quote.status} onValueChange={handleStatusChange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(statusLabels).map(([value, label]) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" asChild>
            <Link to={`/admin/quotes/${quote.id}/edit`}>
              <Pencil className="mr-2 h-4 w-4" />
              Bearbeiten
            </Link>
          </Button>
          <Button variant="outline" onClick={handleDownloadPdf}>
            <Download className="mr-2 h-4 w-4" />
            PDF
          </Button>
          {!hasInvoice && (
            <Button onClick={handleConvertToInvoice} disabled={converting}>
              <FileOutput className="mr-2 h-4 w-4" />
              {converting ? "Erstellt…" : "In Rechnung umwandeln"}
            </Button>
          )}
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-1">Kunde</p>
            <p>{customer.company_name}</p>
            {customer.contact_name && <p>{customer.contact_name}</p>}
            <p>{customer.address_line1}</p>
            <p>
              {customer.postal_code} {customer.city}
            </p>
          </div>
          <div className="text-right">
            <p>Datum: {new Date(quote.issue_date).toLocaleDateString("de-DE")}</p>
            {quote.valid_until && <p>Gültig bis: {new Date(quote.valid_until).toLocaleDateString("de-DE")}</p>}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-muted-foreground">
                <th className="py-2">Beschreibung</th>
                <th className="py-2 text-right">Menge</th>
                <th className="py-2">Einheit</th>
                <th className="py-2 text-right">Einzelpreis</th>
                <th className="py-2 text-right">Gesamt</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b last:border-0">
                  <td className="py-2">{item.description}</td>
                  <td className="py-2 text-right">{item.quantity}</td>
                  <td className="py-2">{item.unit}</td>
                  <td className="py-2 text-right">{formatCurrency(Number(item.unit_price))}</td>
                  <td className="py-2 text-right">{formatCurrency(Number(item.line_total))}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex flex-col items-end gap-1 text-sm">
            <p>Zwischensumme: {formatCurrency(Number(quote.subtotal))}</p>
            <p>
              zzgl. {Number(quote.tax_rate)} % USt.: {formatCurrency(Number(quote.tax_amount))}
            </p>
            <p className="font-bold text-base">Gesamt: {formatCurrency(Number(quote.total))}</p>
          </div>
          {quote.notes && (
            <div className="mt-6 text-sm text-muted-foreground whitespace-pre-wrap">{quote.notes}</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteView;
