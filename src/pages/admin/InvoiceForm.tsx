import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Plus, Trash2, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { roundUpToQuarterHour } from "@/lib/time";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

type Customer = Tables<"customers">;
type CompanySettings = Tables<"company_settings">;

interface LineItemForm {
  description: string;
  quantity: number;
  unit: string;
  unit_price: number;
  /** Falls diese Position aus erfasster Projektzeit stammt: die Zeiteinträge,
   * die beim Speichern als abgerechnet markiert werden. */
  timeEntryIds?: string[];
}

interface TimeGroup {
  key: string;
  projectTitle: string;
  rateLabel: string;
  rate: number;
  totalHours: number;
  entryIds: string[];
}

const emptyItem: LineItemForm = { description: "", quantity: 1, unit: "Stk.", unit_price: 0 };

const addDays = (dateStr: string, days: number) => {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
};

const InvoiceForm = () => {
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [customerId, setCustomerId] = useState<string>("");
  const [issueDate, setIssueDate] = useState(new Date().toISOString().slice(0, 10));
  const [dueDate, setDueDate] = useState("");
  const [taxRate, setTaxRate] = useState(19);
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState<LineItemForm[]>([{ ...emptyItem }]);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(isEdit);

  const [timeDialogOpen, setTimeDialogOpen] = useState(false);
  const [loadingTimeGroups, setLoadingTimeGroups] = useState(false);
  const [timeGroups, setTimeGroups] = useState<TimeGroup[]>([]);
  const [selectedGroupKeys, setSelectedGroupKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadInitial = async () => {
      const [{ data: customerData }, { data: companyData }] = await Promise.all([
        supabase.from("customers").select("*").order("company_name"),
        supabase.from("company_settings").select("*").limit(1).single<CompanySettings>(),
      ]);
      setCustomers(customerData || []);
      if (!isEdit && companyData) {
        setDueDate(addDays(new Date().toISOString().slice(0, 10), companyData.payment_terms_days || 14));
      }
    };
    loadInitial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isEdit) return;
    const loadInvoice = async () => {
      const { data: invoice, error } = await supabase.from("invoices").select("*").eq("id", id).single();
      if (error || !invoice) {
        toast.error("Rechnung konnte nicht geladen werden");
        navigate("/admin/invoices");
        return;
      }
      const { data: invoiceItems } = await supabase
        .from("invoice_items")
        .select("*")
        .eq("invoice_id", id)
        .order("position");

      setCustomerId(invoice.customer_id);
      setIssueDate(invoice.issue_date);
      setDueDate(invoice.due_date || "");
      setTaxRate(Number(invoice.tax_rate));
      setNotes(invoice.notes || "");
      setItems(
        (invoiceItems || []).map((item) => ({
          description: item.description,
          quantity: Number(item.quantity),
          unit: item.unit,
          unit_price: Number(item.unit_price),
        }))
      );
      setLoading(false);
    };
    loadInvoice();
  }, [id, isEdit, navigate]);

  const updateItem = (index: number, patch: Partial<LineItemForm>) => {
    setItems((prev) => prev.map((item, i) => (i === index ? { ...item, ...patch } : item)));
  };

  const addItem = () => setItems((prev) => [...prev, { ...emptyItem }]);
  const removeItem = (index: number) => setItems((prev) => prev.filter((_, i) => i !== index));

  const openTimeDialog = async () => {
    if (!customerId) return;
    setTimeDialogOpen(true);
    setLoadingTimeGroups(true);
    setSelectedGroupKeys(new Set());

    const { data: projectRows } = await supabase
      .from("projects")
      .select("id, title")
      .eq("customer_id", customerId);
    const projectIds = (projectRows || []).map((p) => p.id);

    if (projectIds.length === 0) {
      setTimeGroups([]);
      setLoadingTimeGroups(false);
      return;
    }

    const { data: entryRows } = await supabase
      .from("time_entries")
      .select("id, project_id, started_at, ended_at, rate_id")
      .in("project_id", projectIds)
      .is("invoice_id", null)
      .not("ended_at", "is", null);

    const rateIds = Array.from(new Set((entryRows || []).map((e) => e.rate_id).filter(Boolean))) as string[];
    const { data: rateRows } =
      rateIds.length > 0 ? await supabase.from("hourly_rates").select("*").in("id", rateIds) : { data: [] };

    const groups: Record<string, TimeGroup> = {};
    for (const entry of entryRows || []) {
      if (!entry.ended_at) continue;
      const project = (projectRows || []).find((p) => p.id === entry.project_id);
      const rate = (rateRows || [])?.find((r) => r.id === entry.rate_id);
      const key = `${entry.project_id}__${entry.rate_id || "none"}`;
      const seconds = roundUpToQuarterHour(
        (new Date(entry.ended_at).getTime() - new Date(entry.started_at).getTime()) / 1000
      );
      if (!groups[key]) {
        groups[key] = {
          key,
          projectTitle: project?.title || "—",
          rateLabel: rate?.label || "Ohne Kategorie",
          rate: rate ? Number(rate.rate) : 0,
          totalHours: 0,
          entryIds: [],
        };
      }
      groups[key].totalHours += seconds / 3600;
      groups[key].entryIds.push(entry.id);
    }

    setTimeGroups(Object.values(groups));
    setLoadingTimeGroups(false);
  };

  const toggleGroup = (key: string) => {
    setSelectedGroupKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const handleInsertTimeGroups = () => {
    const toInsert = timeGroups.filter((g) => selectedGroupKeys.has(g.key));
    if (toInsert.length === 0) {
      setTimeDialogOpen(false);
      return;
    }
    setItems((prev) => {
      const base = prev.length === 1 && !prev[0].description.trim() && !prev[0].timeEntryIds ? [] : prev;
      return [
        ...base,
        ...toInsert.map((g) => ({
          description: `${g.rateLabel} – ${g.projectTitle}`,
          quantity: Number(g.totalHours.toFixed(2)),
          unit: "Std.",
          unit_price: g.rate,
          timeEntryIds: g.entryIds,
        })),
      ];
    });
    setTimeDialogOpen(false);
  };

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
    let invoiceId = id;

    if (!isEdit) {
      const { data: numberData, error: numberError } = await supabase.rpc("get_next_document_number", {
        doc_type: "invoice",
      });
      if (numberError || !numberData) {
        toast.error("Rechnungsnummer konnte nicht erzeugt werden");
        setSaving(false);
        return;
      }

      const { data: inserted, error: insertError } = await supabase
        .from("invoices")
        .insert({
          invoice_number: numberData,
          customer_id: customerId,
          issue_date: issueDate,
          due_date: dueDate || null,
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
        toast.error("Rechnung konnte nicht gespeichert werden");
        setSaving(false);
        return;
      }
      invoiceId = inserted.id;
    } else {
      const { error: updateError } = await supabase
        .from("invoices")
        .update({
          customer_id: customerId,
          issue_date: issueDate,
          due_date: dueDate || null,
          tax_rate: taxRate,
          subtotal,
          tax_amount: taxAmount,
          total,
          notes: notes || null,
        })
        .eq("id", id);

      if (updateError) {
        toast.error("Rechnung konnte nicht aktualisiert werden");
        setSaving(false);
        return;
      }

      await supabase.from("invoice_items").delete().eq("invoice_id", id);
    }

    const { error: itemsError } = await supabase.from("invoice_items").insert(
      items.map((item, index) => ({
        invoice_id: invoiceId as string,
        position: index + 1,
        description: item.description,
        quantity: item.quantity,
        unit: item.unit,
        unit_price: item.unit_price,
        line_total: item.quantity * item.unit_price,
      }))
    );

    if (itemsError) {
      setSaving(false);
      toast.error("Positionen konnten nicht gespeichert werden");
      return;
    }

    const timeEntryIdsToMark = items.flatMap((item) => item.timeEntryIds || []);
    if (timeEntryIdsToMark.length > 0) {
      await supabase.from("time_entries").update({ invoice_id: invoiceId }).in("id", timeEntryIdsToMark);
    }

    setSaving(false);
    toast.success(isEdit ? "Rechnung aktualisiert" : "Rechnung erstellt");
    navigate(`/admin/invoices/${invoiceId}`);
  };

  if (loading) {
    return <p className="text-muted-foreground">Lädt…</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{isEdit ? "Rechnung bearbeiten" : "Neue Rechnung"}</h1>

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
            <Label>Rechnungsdatum</Label>
            <Input type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Fällig am</Label>
            <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
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
          <div className="mt-4 flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={addItem}>
              <Plus className="mr-2 h-4 w-4" />
              Position hinzufügen
            </Button>
            <Button variant="outline" size="sm" onClick={openTimeDialog} disabled={!customerId}>
              <Clock className="mr-2 h-4 w-4" />
              Projektzeit einfügen
            </Button>
          </div>

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
          <Label>Notizen (erscheinen auf der Rechnung)</Label>
          <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Speichert…" : "Speichern"}
        </Button>
        <Button variant="outline" onClick={() => navigate("/admin/invoices")}>
          Abbrechen
        </Button>
      </div>

      <Dialog open={timeDialogOpen} onOpenChange={setTimeDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Projektzeit einfügen</DialogTitle>
          </DialogHeader>
          {loadingTimeGroups ? (
            <p className="text-sm text-muted-foreground py-4">Lädt…</p>
          ) : timeGroups.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4">
              Keine noch nicht abgerechneten, abgeschlossenen Zeiteinträge für diesen Kunden gefunden.
            </p>
          ) : (
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-8" />
                    <TableHead>Projekt</TableHead>
                    <TableHead>Kategorie</TableHead>
                    <TableHead>Stunden</TableHead>
                    <TableHead>Satz</TableHead>
                    <TableHead className="text-right">Summe</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {timeGroups.map((group) => (
                    <TableRow
                      key={group.key}
                      className="cursor-pointer"
                      onClick={() => toggleGroup(group.key)}
                    >
                      <TableCell onClick={(e) => e.stopPropagation()}>
                        <Checkbox
                          checked={selectedGroupKeys.has(group.key)}
                          onCheckedChange={() => toggleGroup(group.key)}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{group.projectTitle}</TableCell>
                      <TableCell>{group.rateLabel}</TableCell>
                      <TableCell>{group.totalHours.toFixed(2)} Std.</TableCell>
                      <TableCell>{formatCurrency(group.rate)}</TableCell>
                      <TableCell className="text-right">{formatCurrency(group.totalHours * group.rate)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setTimeDialogOpen(false)}>
              Abbrechen
            </Button>
            <Button onClick={handleInsertTimeGroups} disabled={selectedGroupKeys.size === 0}>
              Ausgewählte einfügen
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InvoiceForm;
