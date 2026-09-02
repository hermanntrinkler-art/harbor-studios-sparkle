import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Pencil, Download, ArrowLeft } from "lucide-react";
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

type Invoice = Tables<"invoices">;
type InvoiceItem = Tables<"invoice_items">;
type Customer = Tables<"customers">;
type CompanySettings = Tables<"company_settings">;

const statusLabels: Record<string, string> = {
  draft: "Entwurf",
  sent: "Versendet",
  paid: "Bezahlt",
  overdue: "Überfällig",
  cancelled: "Storniert",
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value);

const InvoiceView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [items, setItems] = useState<InvoiceItem[]>([]);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [company, setCompany] = useState<CompanySettings | null>(null);

  const load = async () => {
    const { data: invoiceData, error } = await supabase.from("invoices").select("*").eq("id", id).single();
    if (error || !invoiceData) {
      toast.error("Rechnung nicht gefunden");
      navigate("/admin/invoices");
      return;
    }
    setInvoice(invoiceData);

    const [{ data: itemsData }, { data: customerData }, { data: companyData }] = await Promise.all([
      supabase.from("invoice_items").select("*").eq("invoice_id", id).order("position"),
      supabase.from("customers").select("*").eq("id", invoiceData.customer_id).single(),
      supabase.from("company_settings").select("*").limit(1).single(),
    ]);

    setItems(itemsData || []);
    setCustomer(customerData || null);
    setCompany(companyData || null);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleStatusChange = async (status: string) => {
    if (!invoice) return;
    const patch: { status: string; paid_at?: string | null } = { status };
    if (status === "paid") {
      patch.paid_at = new Date().toISOString().slice(0, 10);
    }
    const { error } = await supabase.from("invoices").update(patch).eq("id", invoice.id);
    if (error) {
      toast.error("Status konnte nicht geändert werden");
    } else {
      setInvoice({ ...invoice, ...patch });
      toast.success("Status aktualisiert");
    }
  };

  const handleDownloadPdf = () => {
    if (!invoice || !customer || !company) return;
    const pdf = buildDocumentPdf(company, customer, {
      kind: "Rechnung",
      number: invoice.invoice_number,
      issueDate: invoice.issue_date,
      secondDateLabel: "Fällig am",
      secondDate: invoice.due_date,
      items: items.map((item) => ({
        position: item.position,
        description: item.description,
        quantity: Number(item.quantity),
        unit: item.unit,
        unit_price: Number(item.unit_price),
        line_total: Number(item.line_total),
      })),
      subtotal: Number(invoice.subtotal),
      taxRate: Number(invoice.tax_rate),
      taxAmount: Number(invoice.tax_amount),
      total: Number(invoice.total),
      notes: invoice.notes,
    });
    pdf.save(`${invoice.invoice_number}.pdf`);
  };

  if (!invoice || !customer) {
    return <p className="text-muted-foreground">Lädt…</p>;
  }

  return (
    <div>
      <Link
        to="/admin/invoices"
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 text-sm"
      >
        <ArrowLeft className="h-4 w-4" />
        Zurück zu Rechnungen
      </Link>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Rechnung {invoice.invoice_number}</h1>
        <div className="flex items-center gap-2">
          <Select value={invoice.status} onValueChange={handleStatusChange}>
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
            <Link to={`/admin/invoices/${invoice.id}/edit`}>
              <Pencil className="mr-2 h-4 w-4" />
              Bearbeiten
            </Link>
          </Button>
          <Button variant="outline" onClick={handleDownloadPdf}>
            <Download className="mr-2 h-4 w-4" />
            PDF
          </Button>
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
            <p>Rechnungsdatum: {new Date(invoice.issue_date).toLocaleDateString("de-DE")}</p>
            {invoice.due_date && <p>Fällig am: {new Date(invoice.due_date).toLocaleDateString("de-DE")}</p>}
            {invoice.paid_at && <p>Bezahlt am: {new Date(invoice.paid_at).toLocaleDateString("de-DE")}</p>}
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
            <p>Zwischensumme: {formatCurrency(Number(invoice.subtotal))}</p>
            <p>
              zzgl. {Number(invoice.tax_rate)} % USt.: {formatCurrency(Number(invoice.tax_amount))}
            </p>
            <p className="font-bold text-base">Gesamt: {formatCurrency(Number(invoice.total))}</p>
          </div>
          {invoice.notes && (
            <div className="mt-6 text-sm text-muted-foreground whitespace-pre-wrap">{invoice.notes}</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoiceView;
