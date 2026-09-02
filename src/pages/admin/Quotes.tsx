import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface QuoteRow {
  id: string;
  quote_number: string;
  issue_date: string;
  status: string;
  total: number;
  customers: { company_name: string | null; contact_name: string | null } | null;
}

const statusLabels: Record<string, string> = {
  draft: "Entwurf",
  sent: "Versendet",
  accepted: "Angenommen",
  declined: "Abgelehnt",
};

const statusVariant: Record<string, "secondary" | "default" | "destructive" | "outline"> = {
  draft: "secondary",
  sent: "default",
  accepted: "default",
  declined: "destructive",
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value);

const Quotes = () => {
  const [quotes, setQuotes] = useState<QuoteRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from("quotes")
        .select("id, quote_number, issue_date, status, total, customers(company_name, contact_name)")
        .order("created_at", { ascending: false });

      if (!error) setQuotes((data as unknown as QuoteRow[]) || []);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Angebote</h1>
        <Button asChild>
          <Link to="/admin/quotes/new">
            <Plus className="mr-2 h-4 w-4" />
            Neues Angebot
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
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Summe</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  Lädt…
                </TableCell>
              </TableRow>
            ) : quotes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  Noch keine Angebote erstellt.
                </TableCell>
              </TableRow>
            ) : (
              quotes.map((quote) => (
                <TableRow key={quote.id} className="cursor-pointer">
                  <TableCell className="font-medium">
                    <Link to={`/admin/quotes/${quote.id}`} className="hover:underline">
                      {quote.quote_number}
                    </Link>
                  </TableCell>
                  <TableCell>{quote.customers?.company_name || quote.customers?.contact_name || "—"}</TableCell>
                  <TableCell>{new Date(quote.issue_date).toLocaleDateString("de-DE")}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[quote.status] || "secondary"}>
                      {statusLabels[quote.status] || quote.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{formatCurrency(quote.total)}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Quotes;
