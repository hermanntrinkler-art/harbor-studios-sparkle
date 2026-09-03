import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface InvoiceRow {
  id: string;
  invoice_number: string;
  issue_date: string;
  due_date: string | null;
  status: string;
  total: number;
  customers: { company_name: string | null; contact_name: string | null } | null;
}

const statusLabels: Record<string, string> = {
  draft: "Entwurf",
  sent: "Versendet",
  paid: "Bezahlt",
  overdue: "Überfällig",
  cancelled: "Storniert",
};

const statusVariant: Record<string, "secondary" | "default" | "destructive" | "outline"> = {
  draft: "secondary",
  sent: "default",
  paid: "default",
  overdue: "destructive",
  cancelled: "outline",
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value);

const Invoices = () => {
  const [invoices, setInvoices] = useState<InvoiceRow[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const { data, error } = await supabase
      .from("invoices")
      .select("id, invoice_number, issue_date, due_date, status, total, customers(company_name, contact_name)")
      .order("created_at", { ascending: false });

    if (!error) setInvoices((data as unknown as InvoiceRow[]) || []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id: string) => {
    if (
      !confirm(
        "Diese Rechnung wirklich löschen? Bereits abgerechnete Projektstunden werden dadurch wieder freigegeben."
      )
    )
      return;
    const { error } = await supabase.from("invoices").delete().eq("id", id);
    if (error) {
      toast.error("Löschen fehlgeschlagen: " + error.message);
    } else {
      toast.success("Rechnung gelöscht");
      load();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Rechnungen</h1>
        <Button asChild>
          <Link to="/admin/invoices/new">
            <Plus className="mr-2 h-4 w-4" />
            Neue Rechnung
          </Link>
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nummer</TableHead>
              <TableHead>Kunde</TableHead>
              <TableHead>Datum</TableHead>
              <TableHead>Fällig</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Summe</TableHead>
              <TableHead className="text-right">Aktionen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                  Lädt…
                </TableCell>
              </TableRow>
            ) : invoices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                  Noch keine Rechnungen erstellt.
                </TableCell>
              </TableRow>
            ) : (
              invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">
                    <Link to={`/admin/invoices/${invoice.id}`} className="hover:underline">
                      {invoice.invoice_number}
                    </Link>
                  </TableCell>
                  <TableCell>{invoice.customers?.company_name || invoice.customers?.contact_name || "—"}</TableCell>
                  <TableCell>{new Date(invoice.issue_date).toLocaleDateString("de-DE")}</TableCell>
                  <TableCell>{invoice.due_date ? new Date(invoice.due_date).toLocaleDateString("de-DE") : "—"}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[invoice.status] || "secondary"}>
                      {statusLabels[invoice.status] || invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{formatCurrency(invoice.total)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(invoice.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Invoices;
