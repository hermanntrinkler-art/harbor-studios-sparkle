import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesInsert, TablesUpdate } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { useHourlyRates, type HourlyRate } from "@/hooks/useHourlyRates";

type CompanySettings = Tables<"company_settings">;

const emptyRateForm: TablesInsert<"hourly_rates"> = { label: "", rate: 0, sort_order: 0 };

const Settings = () => {
  const [settings, setSettings] = useState<CompanySettings | null>(null);
  const [saving, setSaving] = useState(false);

  const { rates, refresh: refreshRates } = useHourlyRates();
  const [rateDialogOpen, setRateDialogOpen] = useState(false);
  const [editingRateId, setEditingRateId] = useState<string | null>(null);
  const [rateForm, setRateForm] = useState<TablesInsert<"hourly_rates">>(emptyRateForm);
  const [savingRate, setSavingRate] = useState(false);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from("company_settings").select("*").limit(1).single();
      setSettings(data);
    };
    load();
  }, []);

  const openNewRateDialog = () => {
    setEditingRateId(null);
    setRateForm({ label: "", rate: 0, sort_order: rates.length });
    setRateDialogOpen(true);
  };

  const openEditRateDialog = (rate: HourlyRate) => {
    setEditingRateId(rate.id);
    setRateForm({ label: rate.label, rate: Number(rate.rate), sort_order: rate.sort_order });
    setRateDialogOpen(true);
  };

  const handleSaveRate = async () => {
    if (!rateForm.label?.trim()) {
      toast.error("Bitte eine Bezeichnung angeben");
      return;
    }
    setSavingRate(true);
    const { error } = editingRateId
      ? await supabase.from("hourly_rates").update(rateForm).eq("id", editingRateId)
      : await supabase.from("hourly_rates").insert(rateForm);
    setSavingRate(false);
    if (error) {
      toast.error("Speichern fehlgeschlagen: " + error.message);
    } else {
      toast.success(editingRateId ? "Stundensatz aktualisiert" : "Stundensatz angelegt");
      setRateDialogOpen(false);
      refreshRates();
    }
  };

  const handleDeleteRate = async (id: string) => {
    if (!confirm("Diese Kategorie wirklich löschen? Bestehende Zeiteinträge behalten ihre Stunden, verlieren aber die Kategorie-Zuordnung.")) return;
    const { error } = await supabase.from("hourly_rates").delete().eq("id", id);
    if (error) {
      toast.error("Löschen fehlgeschlagen");
    } else {
      toast.success("Kategorie gelöscht");
      refreshRates();
    }
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value);

  const update = (patch: Partial<CompanySettings>) => {
    setSettings((prev) => (prev ? { ...prev, ...patch } : prev));
  };

  const handleSave = async () => {
    if (!settings) return;
    setSaving(true);
    const payload: TablesUpdate<"company_settings"> = { ...settings };
    delete (payload as { id?: string }).id;
    const { error } = await supabase.from("company_settings").update(payload).eq("id", settings.id);
    setSaving(false);
    if (error) {
      toast.error("Speichern fehlgeschlagen");
    } else {
      toast.success("Einstellungen gespeichert");
    }
  };

  if (!settings) {
    return <p className="text-muted-foreground">Lädt…</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Einstellungen &amp; Briefkopf</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-base">Firmendaten (erscheinen auf Angeboten &amp; Rechnungen)</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 md:col-span-2">
            <Label>Firmenname</Label>
            <Input value={settings.company_name} onChange={(e) => update({ company_name: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Inhaber / Ansprechpartner</Label>
            <Input value={settings.owner_name || ""} onChange={(e) => update({ owner_name: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Website</Label>
            <Input value={settings.website || ""} onChange={(e) => update({ website: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Straße und Hausnummer</Label>
            <Input value={settings.address_line1 || ""} onChange={(e) => update({ address_line1: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Adresszusatz</Label>
            <Input value={settings.address_line2 || ""} onChange={(e) => update({ address_line2: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>PLZ</Label>
            <Input value={settings.postal_code || ""} onChange={(e) => update({ postal_code: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Ort</Label>
            <Input value={settings.city || ""} onChange={(e) => update({ city: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Land</Label>
            <Input value={settings.country} onChange={(e) => update({ country: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>E-Mail</Label>
            <Input value={settings.email || ""} onChange={(e) => update({ email: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Telefon</Label>
            <Input value={settings.phone || ""} onChange={(e) => update({ phone: e.target.value })} />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-base">Steuer &amp; Bank</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Steuernummer</Label>
            <Input value={settings.tax_number || ""} onChange={(e) => update({ tax_number: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>USt-IdNr.</Label>
            <Input value={settings.vat_id || ""} onChange={(e) => update({ vat_id: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>IBAN</Label>
            <Input value={settings.iban || ""} onChange={(e) => update({ iban: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>BIC</Label>
            <Input value={settings.bic || ""} onChange={(e) => update({ bic: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Bank</Label>
            <Input value={settings.bank_name || ""} onChange={(e) => update({ bank_name: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Zahlungsziel (Tage)</Label>
            <Input
              type="number"
              value={settings.payment_terms_days}
              onChange={(e) => update({ payment_terms_days: Number(e.target.value) })}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-base">Nummernkreise</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Präfix Angebote</Label>
            <Input value={settings.quote_prefix} onChange={(e) => update({ quote_prefix: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Präfix Rechnungen</Label>
            <Input value={settings.invoice_prefix} onChange={(e) => update({ invoice_prefix: e.target.value })} />
          </div>
          <p className="md:col-span-2 text-xs text-muted-foreground">
            Format: PRÄFIX-JAHR-LAUFENDENUMMER, z. B. {settings.invoice_prefix}-{new Date().getFullYear()}-0001. Die
            nächste Nummer wird automatisch beim Erstellen vergeben.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base">Stundensätze</CardTitle>
          <Button size="sm" onClick={openNewRateDialog}>
            <Plus className="mr-2 h-4 w-4" />
            Kategorie hinzufügen
          </Button>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground mb-3">
            Diese Kategorien stehen bei der Zeiterfassung und beim Einfügen von Projektzeit in Rechnungen zur
            Auswahl.
          </p>
          {rates.length === 0 ? (
            <p className="text-sm text-muted-foreground">Noch keine Kategorien angelegt.</p>
          ) : (
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Bezeichnung</TableHead>
                    <TableHead>Satz pro Stunde</TableHead>
                    <TableHead className="text-right">Aktionen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rates.map((rate) => (
                    <TableRow key={rate.id}>
                      <TableCell className="font-medium">{rate.label}</TableCell>
                      <TableCell>{formatCurrency(Number(rate.rate))}</TableCell>
                      <TableCell className="text-right space-x-1">
                        <Button variant="ghost" size="icon" onClick={() => openEditRateDialog(rate)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteRate(rate.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={rateDialogOpen} onOpenChange={setRateDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>{editingRateId ? "Kategorie bearbeiten" : "Neue Kategorie"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Bezeichnung</Label>
              <Input
                placeholder="z. B. Webdesign, Programmierung, Datenbank"
                value={rateForm.label}
                onChange={(e) => setRateForm({ ...rateForm, label: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Satz pro Stunde (€)</Label>
              <Input
                type="number"
                step="0.01"
                min="0"
                value={rateForm.rate}
                onChange={(e) => setRateForm({ ...rateForm, rate: Number(e.target.value) })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRateDialogOpen(false)}>
              Abbrechen
            </Button>
            <Button onClick={handleSaveRate} disabled={savingRate}>
              {savingRate ? "Speichert…" : "Speichern"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-base">Fußzeile</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={settings.footer_note || ""}
            onChange={(e) => update({ footer_note: e.target.value })}
            placeholder="Wird klein am unteren Rand jedes PDFs angezeigt."
          />
        </CardContent>
      </Card>

      <Button onClick={handleSave} disabled={saving}>
        {saving ? "Speichert…" : "Speichern"}
      </Button>
    </div>
  );
};

export default Settings;
