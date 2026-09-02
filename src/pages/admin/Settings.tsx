import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesUpdate } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

type CompanySettings = Tables<"company_settings">;

const Settings = () => {
  const [settings, setSettings] = useState<CompanySettings | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from("company_settings").select("*").limit(1).single();
      setSettings(data);
    };
    load();
  }, []);

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
