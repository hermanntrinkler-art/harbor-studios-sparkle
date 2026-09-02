import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Plus, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

type Customer = Tables<"customers">;

interface LineItemForm {
  description: string;
  quantity: number;
  unit: string;
  unit_price: number;
}

const emptyItem: LineItemForm = { description: "", quantity: 1, unit: "Stk.", unit_price: 0 };

const QuoteForm = () => {
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [customerId, setCustomerId] = useState<string>("");
  const [issueDate, setIssueDate] = useState(new Date().toISOString().slice(0, 10));
  const [validUntil, setValidUntil] = useState("");
  const [taxRate, setTaxRate] = useState(19);
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState<LineItemForm[]>([{ ...emptyItem }]);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(isEdit);

  useEffect(() => {
    const loadCustomers = async () => {
      const { data } = await supabase.from("customers").select("*").order("company_name");
      setCustomers(data || []);
    };
    loadCustomers();
  }, []);

  useEffect(() => {
    if (!isEdit) return;
    const loadQuote = async () => {
      const { data: quote, error } = await supabase.from("quotes").select("*").eq("id", id).single();
      if (error || !quote) {
        toast.error("Angebot konnte nicht geladen werden");
        navigate("/admin/quotes");
        return;
      }
      const { data: quoteItems } = await supabase
        .from("quote_items")
        .select("*")
        .eq("quote_id", id)
        .order("position");

      setCustomerId(quote.customer_id);
      setIssueDate(quote.issue_date);
      setValidUntil(quote.valid_until || "");
      setTaxRate(Number(quote.tax_rate));
      setNotes(quote.notes || "");
      setItems(
        (quoteItems || []).map((item) => ({
          description: item.description,
          quantity: Number(item.quantity),
          unit: item.unit,
          unit_price: Number(item.unit_price),
        }))
      );
      setLoading(false);
    };
    loadQuote();
  }, [id, isEdit, navigate]);

  const updateItem = (index: number, patch: Partial<LineItemForm>) => {
    setItems((prev) => prev.map((item, i) => (i === index ? { ...item, ...patch } : item)));
  };

  const addItem = () => setItems((prev) => [...prev, { ...emptyItem }]);
  const removeItem = (index: number) => setItems((prev) => prev.filter((_, i) => i !== index));

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unit_price, 0);
  const taxAmount = subtotal * (taxRate / 100);
  const total = subtotal + taxAmount;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value);

  const handleSave = async () => {
    if (!customerId) {
      toast.error("Bitte einen Kunden auswählen");
      return;
    }
    if (items.some((item) => !item.description.trim())) {
      toast.error("Bitte alle Positionen mit einer Beschreibung versehen");
      return;
    }

    setSaving(true);

    let quoteId = id;

    if (!isEdit) {
      const { data: numberData, error: numberError } = await supabase.rpc("get_next_document_number", {
        doc_type: "quote",
      });
      if (numberError || !numberData) {
        toast.error("Angebotsnummer konnte nicht erzeugt werden");
        setSaving(false);
        return;
      }

      const { data: inserted, error: insertError } = await supabase
        .from("quotes")
        .insert({
          quote_number: numberData,
          customer_id: customerId,
          issue_date: issueDate,
          valid_until: validUntil || null,
          status: "draft",
          tax_rate: taxRate,
          subtotal,
          tax_amount: taxAmount,
          total,
          notes: notes || null,
        })
        .select()
        .single();

      if (insertError || !inserted) {
        toast.error("Angebot konnte nicht gespeichert werden");
        setSaving(false);
        return;
      }
      quoteId = inserted.id;
    } else {
      const { error: updateError } = await supabase
        .from("quotes")
        .update({
          customer_id: customerId,
          issue_date: issueDate,
          valid_until: validUntil || null,
          tax_rate: taxRate,
          subtotal,
          tax_amount: taxAmount,
          total,
          notes: notes || null,
        })
        .eq("id", id);

      if (updateError) {
        toast.error("Angebot konnte nicht aktualisiert werden");
        setSaving(false);
        return;
      }

      await supabase.from("quote_items").delete().eq("quote_id", id);
    }

    const { error: itemsError } = await supabase.from("quote_items").insert(
      items.map((item, index) => ({
        quote_id: quoteId as string,
        position: index + 1,
        description: item.description,
        quantity: item.quantity,
        unit: item.unit,
        unit_price: item.unit_price,
        line_total: item.quantity * item.unit_price,
      }))
    );

    setSaving(false);

    if (itemsError) {
      toast.error("Positionen konnten nicht gespeichert werden");
      return;
    }

    toast.success(isEdit ? "Angebot aktualisiert" : "Angebot erstellt");
    navigate(`/admin/quotes/${quoteId}`);
  };

  if (loading) {
    return <p className="text-muted-foreground">Lädt…</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{isEdit ? "Angebot bearbeiten" : "Neues Angebot"}</h1>

      {customers.length === 0 && (
        <p className="mb-4 text-sm text-muted-foreground">
          Noch keine Kunden vorhanden.{" "}
          <Link to="/admin/customers" className="underline text-primary">
            Zuerst einen Kunden anlegen
          </Link>
          .
        </p>
      )}

      <Card className="mb-6">
        <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2 md:col-span-1">
            <Label>Kunde</Label>
            <Select value={customerId} onValueChange={setCustomerId}>
              <SelectTrigger>
                <SelectValue placeholder="Kunde wählen" />
              </SelectTrigger>
              <SelectContent>
                {customers.map((customer) => (
                  <SelectItem key={customer.id} value={customer.id}>
                    {customer.company_name || customer.contact_name || customer.id}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Datum</Label>
            <Input type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Gültig bis</Label>
            <Input type="date" value={validUntil} onChange={(e) => setValidUntil(e.target.value)} />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={index} className="grid grid-cols-12 gap-2 items-end">
                <div className="col-span-5 space-y-1">
                  {index === 0 && <Label className="text-xs">Beschreibung</Label>}
                  <Input
                    value={item.description}
                    onChange={(e) => updateItem(index, { description: e.target.value })}
                  />
                </div>
                <div className="col-span-2 space-y-1">
                  {index === 0 && <Label className="text-xs">Menge</Label>}
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateItem(index, { quantity: Number(e.target.value) })}
                  />
                </div>
                <div className="col-span-2 space-y-1">
                  {index === 0 && <Label className="text-xs">Einheit</Label>}
                  <Input value={item.unit} onChange={(e) => updateItem(index, { unit: e.target.value })} />
                </div>
                <div className="col-span-2 space-y-1">
                  {index === 0 && <Label className="text-xs">Einzelpreis (€)</Label>}
                  <Input
                    type="number"
                    step="0.01"
                    value={item.unit_price}
                    onChange={(e) => updateItem(index, { unit_price: Number(e.target.value) })}
                  />
                </div>
                <div className="col-span-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(index)}
                    disabled={items.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" size="sm" className="mt-4" onClick={addItem}>
            <Plus className="mr-2 h-4 w-4" />
            Position hinzufügen
          </Button>

          <div className="mt-6 flex flex-col items-end gap-1 text-sm">
            <div className="flex items-center gap-3">
              <span>Steuersatz (%):</span>
              <Input
                type="number"
                className="w-20"
                value={taxRate}
                onChange={(e) => setTaxRate(Number(e.target.value))}
              />
            </div>
            <p>Zwischensumme: {formatCurrency(subtotal)}</p>
            <p>zzgl. USt.: {formatCurrency(taxAmount)}</p>
            <p className="font-bold text-base">Gesamt: {formatCurrency(total)}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="pt-6 space-y-2">
          <Label>Notizen (erscheinen auf dem Angebot)</Label>
          <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Speichert…" : "Speichern"}
        </Button>
        <Button variant="outline" onClick={() => navigate("/admin/quotes")}>
          Abbrechen
        </Button>
      </div>
    </div>
  );
};

export default QuoteForm;
