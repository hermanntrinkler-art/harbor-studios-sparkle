import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesInsert } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

type Project = Tables<"projects">;
type ProjectInsert = TablesInsert<"projects">;
type Customer = Tables<"customers">;

const statusLabels: Record<string, string> = {
  anfrage: "Anfrage",
  in_arbeit: "In Arbeit",
  review: "In Review",
  live: "Live",
  pausiert: "Pausiert",
};

const emptyForm: ProjectInsert = {
  customer_id: "",
  title: "",
  description: "",
  status: "anfrage",
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<ProjectInsert>(emptyForm);
  const [saving, setSaving] = useState(false);

  const loadAll = async () => {
    setLoading(true);
    const [{ data: projectRows, error }, { data: customerRows }] = await Promise.all([
      supabase.from("projects").select("*").order("created_at", { ascending: false }),
      supabase.from("customers").select("*").order("company_name"),
    ]);
    if (error) {
      toast.error("Projekte konnten nicht geladen werden");
    } else {
      setProjects(projectRows || []);
    }
    setCustomers(customerRows || []);
    setLoading(false);
  };

  useEffect(() => {
    loadAll();
  }, []);

  const customerName = (customerId: string) => {
    const customer = customers.find((c) => c.id === customerId);
    return customer?.company_name || customer?.contact_name || "—";
  };

  const openNewDialog = () => {
    setEditingId(null);
    setForm({ ...emptyForm, customer_id: customers[0]?.id || "" });
    setDialogOpen(true);
  };

  const openEditDialog = (project: Project) => {
    setEditingId(project.id);
    setForm(project);
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.customer_id) {
      toast.error("Bitte einen Kunden auswählen");
      return;
    }
    setSaving(true);
    if (editingId) {
      const { error } = await supabase.from("projects").update(form).eq("id", editingId);
      if (error) {
        toast.error("Speichern fehlgeschlagen");
      } else {
        toast.success("Projekt aktualisiert");
        setDialogOpen(false);
        loadAll();
      }
    } else {
      const { error } = await supabase.from("projects").insert(form);
      if (error) {
        toast.error("Speichern fehlgeschlagen");
      } else {
        toast.success("Projekt angelegt");
        setDialogOpen(false);
        loadAll();
      }
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Dieses Projekt inklusive aller Updates wirklich löschen?")) return;
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) {
      toast.error("Löschen fehlgeschlagen");
    } else {
      toast.success("Projekt gelöscht");
      loadAll();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Projekte</h1>
        <Button onClick={openNewDialog} disabled={customers.length === 0}>
          <Plus className="mr-2 h-4 w-4" />
          Neues Projekt
        </Button>
      </div>

      {customers.length === 0 && (
        <p className="text-sm text-muted-foreground mb-4">
          Lege zuerst unter „Kunden" einen Kunden an, bevor du ein Projekt erstellst.
        </p>
      )}

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Projekt</TableHead>
              <TableHead>Kunde</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aktionen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                  Lädt…
                </TableCell>
              </TableRow>
            ) : projects.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                  Noch keine Projekte angelegt.
                </TableCell>
              </TableRow>
            ) : (
              projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell>{customerName(project.customer_id)}</TableCell>
                  <TableCell>{statusLabels[project.status] || project.status}</TableCell>
                  <TableCell className="text-right space-x-1">
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/admin/projects/${project.id}`}>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => openEditDialog(project)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(project.id)}>
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
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingId ? "Projekt bearbeiten" : "Neues Projekt"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Kunde</Label>
              <Select value={form.customer_id} onValueChange={(value) => setForm({ ...form, customer_id: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Kunde auswählen" />
                </SelectTrigger>
                <SelectContent>
                  {customers.map((customer) => (
                    <SelectItem key={customer.id} value={customer.id}>
                      {customer.company_name || customer.contact_name || customer.email}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Titel</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Beschreibung</Label>
              <Textarea
                value={form.description || ""}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select value={form.status} onValueChange={(value) => setForm({ ...form, status: value })}>
                <SelectTrigger>
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
    </div>
  );
};

export default Projects;
