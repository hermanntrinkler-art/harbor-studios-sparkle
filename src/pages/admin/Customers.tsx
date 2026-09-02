import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Link2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesInsert } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

type Customer = Tables<"customers">;
type CustomerInsert = TablesInsert<"customers">;

const emptyForm: CustomerInsert = {
  company_name: "",
  contact_name: "",
  email: "",
  phone: "",
  address_line1: "",
  address_line2: "",
  postal_code: "",
  city: "",
  country: "Deutschland",
  vat_id: "",
  notes: "",
};

const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<CustomerInsert>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [linkDialogCustomer, setLinkDialogCustomer] = useState<Customer | null>(null);
  const [linkEmail, setLinkEmail] = useState("");
  const [linking, setLinking] = useState(false);

  const loadCustomers = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("customers").select("*").order("company_name");
    if (error) {
      toast.error("Kunden konnten nicht geladen werden");
    } else {
      setCustomers(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const openNewDialog = () => {
    setEditingId(null);
    setForm(emptyForm);
    setDialogOpen(true);
  };

  const openEditDialog = (customer: Customer) => {
    setEditingId(customer.id);
    setForm(customer);
    setDialogOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    if (editingId) {
      const { error } = await supabase.from("customers").update(form).eq("id", editingId);
      if (error) {
        toast.error("Speichern fehlgeschlagen");
      } else {
        toast.success("Kunde aktualisiert");
        setDialogOpen(false);
        loadCustomers();
      }
    } else {
      const { error } = await supabase.from("customers").insert(form);
      if (error) {
        toast.error("Speichern fehlgeschlagen");
      } else {
        toast.success("Kunde angelegt");
        setDialogOpen(false);
        loadCustomers();
      }
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Diesen Kunden wirklich löschen?")) return;
    const { error } = await supabase.from("customers").delete().eq("id", id);
    if (error) {
      toast.error("Löschen fehlgeschlagen (evtl. gibt es noch Angebote/Rechnungen zu diesem Kunden)");
    } else {
      toast.success("Kunde gelöscht");
      loadCustomers();
    }
  };

  const openLinkDialog = (customer: Customer) => {
    setLinkDialogCustomer(customer);
    setLinkEmail(customer.email || "");
  };

  const handleLinkPortalAccount = async () => {
    if (!linkDialogCustomer || !linkEmail.trim()) return;
    setLinking(true);
    const { error } = await supabase.rpc("admin_link_customer_to_user", {
      p_customer_id: linkDialogCustomer.id,
      p_email: linkEmail.trim(),
    });
    setLinking(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Portal-Zugang verknüpft");
      setLinkDialogCustomer(null);
      loadCustomers();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Kunden</h1>
        <Button onClick={openNewDialog}>
          <Plus className="mr-2 h-4 w-4" />
          Neuer Kunde
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Firma / Name</TableHead>
              <TableHead>E-Mail</TableHead>
              <TableHead>Ort</TableHead>
              <TableHead>Portal-Zugang</TableHead>
              <TableHead className="text-right">Aktionen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  Lädt…
                </TableCell>
              </TableRow>
            ) : customers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  Noch keine Kunden angelegt.
                </TableCell>
              </TableRow>
            ) : (
              customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">
                    {customer.company_name || customer.contact_name || "—"}
                    {customer.company_name && customer.contact_name && (
                      <div className="text-xs text-muted-foreground">{customer.contact_name}</div>
                    )}
                  </TableCell>
                  <TableCell>{customer.email || "—"}</TableCell>
                  <TableCell>{[customer.postal_code, customer.city].filter(Boolean).join(" ") || "—"}</TableCell>
                  <TableCell>
                    {customer.user_id ? (
                      <span className="inline-flex items-center gap-1 text-xs text-green-600">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Verknüpft
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">Kein Zugang</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right space-x-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      title="Portal-Zugang verknüpfen"
                      onClick={() => openLinkDialog(customer)}
                    >
                      <Link2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => openEditDialog(customer)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(customer.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingId ? "Kunde bearbeiten" : "Neuer Kunde"}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-2">
            <div className="col-span-2 space-y-2">
              <Label>Firma</Label>
              <Input
                value={form.company_name || ""}
                onChange={(e) => setForm({ ...form, company_name: e.target.value })}
              />
            </div>
            <div className="col-span-2 space-y-2">
              <Label>Ansprechpartner</Label>
              <Input
                value={form.contact_name || ""}
                onChange={(e) => setForm({ ...form, contact_name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>E-Mail</Label>
              <Input type="email" value={form.email || ""} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Telefon</Label>
              <Input value={form.phone || ""} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div className="col-span-2 space-y-2">
              <Label>Adresse</Label>
              <Input
                placeholder="Straße und Hausnummer"
                value={form.address_line1 || ""}
                onChange={(e) => setForm({ ...form, address_line1: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>PLZ</Label>
              <Input value={form.postal_code || ""} onChange={(e) => setForm({ ...form, postal_code: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Ort</Label>
              <Input value={form.city || ""} onChange={(e) => setForm({ ...form, city: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Land</Label>
              <Input value={form.country || ""} onChange={(e) => setForm({ ...form, country: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>USt-IdNr.</Label>
              <Input value={form.vat_id || ""} onChange={(e) => setForm({ ...form, vat_id: e.target.value })} />
            </div>
            <div className="col-span-2 space-y-2">
              <Label>Notizen</Label>
              <Textarea value={form.notes || ""} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Abbrechen
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Speichert…" : "Speichern"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!linkDialogCustomer} onOpenChange={(open) => !open && setLinkDialogCustomer(null)}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Portal-Zugang verknüpfen</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <p className="text-sm text-muted-foreground">
              Trage die E-Mail-Adresse ein, mit der sich{" "}
              <strong>{linkDialogCustomer?.company_name || linkDialogCustomer?.contact_name}</strong> im{" "}
              <em>Kundenbereich</em> registriert hat. Der Kunde muss sich vorher dort selbst ein Konto angelegt
              haben.
            </p>
            <div className="space-y-2">
              <Label>E-Mail (Portal-Konto)</Label>
              <Input type="email" value={linkEmail} onChange={(e) => setLinkEmail(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setLinkDialogCustomer(null)}>
              Abbrechen
            </Button>
            <Button onClick={handleLinkPortalAccount} disabled={linking}>
              {linking ? "Verknüpft…" : "Verknüpfen"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Customers;
