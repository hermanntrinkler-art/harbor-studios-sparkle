import { useEffect, useState, type FormEvent } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Trash2, Play, Square, PlusCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { useRunningTimeEntry } from "@/hooks/useRunningTimeEntry";
import { startTimeEntry, stopTimeEntry } from "@/lib/timeTracking";
import { formatDurationClock, formatDurationShort, roundUpToQuarterHour } from "@/lib/time";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const todayIso = () => new Date().toISOString().slice(0, 10);

type Project = Tables<"projects">;
type ProjectUpdate = Tables<"project_updates">;
type Customer = Tables<"customers">;
type TimeEntry = Tables<"time_entries">;

const statusLabels: Record<string, string> = {
  anfrage: "Anfrage",
  in_arbeit: "In Arbeit",
  review: "In Review",
  live: "Live",
  pausiert: "Pausiert",
};

const formatDate = (value: string) => new Date(value).toLocaleString("de-DE");
const formatTime = (value: string) => new Date(value).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });

const ProjectView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [updates, setUpdates] = useState<ProjectUpdate[]>([]);
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [posting, setPosting] = useState(false);
  const [trackingBusy, setTrackingBusy] = useState(false);
  const { running, refresh: refreshRunning } = useRunningTimeEntry();
  const [now, setNow] = useState(Date.now());
  const [manualDialogOpen, setManualDialogOpen] = useState(false);
  const [manualDate, setManualDate] = useState(todayIso());
  const [manualHours, setManualHours] = useState("");
  const [manualNote, setManualNote] = useState("");
  const [savingManual, setSavingManual] = useState(false);

  const load = async () => {
    const { data: projectData, error } = await supabase.from("projects").select("*").eq("id", id).single();
    if (error || !projectData) {
      toast.error("Projekt nicht gefunden");
      navigate("/admin/projects");
      return;
    }
    setProject(projectData);

    const [{ data: customerData }, { data: updateRows }, { data: timeRows }] = await Promise.all([
      supabase.from("customers").select("*").eq("id", projectData.customer_id).single(),
      supabase.from("project_updates").select("*").eq("project_id", id).order("created_at", { ascending: false }),
      supabase.from("time_entries").select("*").eq("project_id", id).order("started_at", { ascending: false }),
    ]);
    setCustomer(customerData || null);
    setUpdates(updateRows || []);
    setTimeEntries(timeRows || []);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const runningHere = running?.project_id === id;

  useEffect(() => {
    if (!runningHere) return;
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, [runningHere]);

  const handleStart = async () => {
    if (!project) return;
    setTrackingBusy(true);
    if (running) {
      await stopTimeEntry(running.id);
    }
    const { error } = await startTimeEntry(project.id);
    setTrackingBusy(false);
    if (error) {
      toast.error("Start fehlgeschlagen: " + error.message);
    } else {
      toast.success("Zeiterfassung gestartet");
      refreshRunning();
      load();
    }
  };

  const handleStop = async () => {
    if (!running) return;
    setTrackingBusy(true);
    const { error } = await stopTimeEntry(running.id);
    setTrackingBusy(false);
    if (error) {
      toast.error("Stoppen fehlgeschlagen: " + error.message);
    } else {
      toast.success("Zeiterfassung gestoppt");
      refreshRunning();
      load();
    }
  };

  const handleDeleteTimeEntry = async (entryId: string) => {
    if (!confirm("Diesen Zeiteintrag wirklich löschen?")) return;
    const { error } = await supabase.from("time_entries").delete().eq("id", entryId);
    if (error) {
      toast.error("Löschen fehlgeschlagen");
    } else {
      load();
      refreshRunning();
    }
  };

  const handleAddManualEntry = async (e: FormEvent) => {
    e.preventDefault();
    if (!project) return;
    const hours = parseFloat(manualHours.replace(",", "."));
    if (!manualDate || !hours || hours <= 0) {
      toast.error("Bitte Datum und eine Dauer größer 0 angeben");
      return;
    }
    setSavingManual(true);
    const startedAt = new Date(`${manualDate}T12:00:00`);
    const endedAt = new Date(startedAt.getTime() + hours * 3600 * 1000);
    const { error } = await supabase.from("time_entries").insert({
      project_id: project.id,
      started_at: startedAt.toISOString(),
      ended_at: endedAt.toISOString(),
      note: manualNote.trim() || "Manuell erfasst",
    });
    setSavingManual(false);
    if (error) {
      toast.error("Eintragen fehlgeschlagen: " + error.message);
    } else {
      toast.success("Zeit manuell eingetragen");
      setManualDialogOpen(false);
      setManualHours("");
      setManualNote("");
      setManualDate(todayIso());
      load();
    }
  };

  // Abgeschlossene Einträge werden für Anzeige/Summe immer auf die nächsten
  // 15 Minuten aufgerundet; die laufende (noch nicht gestoppte) Zeit bleibt
  // als Live-Anzeige unverändert.
  const completedSeconds = timeEntries.reduce((sum, entry) => {
    if (!entry.ended_at) return sum;
    const raw = (new Date(entry.ended_at).getTime() - new Date(entry.started_at).getTime()) / 1000;
    return sum + roundUpToQuarterHour(raw);
  }, 0);
  const runningSeconds = runningHere && running ? (now - new Date(running.started_at).getTime()) / 1000 : 0;
  const totalSeconds = completedSeconds + runningSeconds;

  const handleStatusChange = async (status: string) => {
    if (!project) return;
    const { error } = await supabase.from("projects").update({ status }).eq("id", project.id);
    if (error) {
      toast.error("Status konnte nicht geändert werden");
    } else {
      setProject({ ...project, status });
      toast.success("Status aktualisiert");
    }
  };

  const handleAddUpdate = async (e: FormEvent) => {
    e.preventDefault();
    if (!project || !newTitle.trim()) return;
    setPosting(true);
    const { error } = await supabase
      .from("project_updates")
      .insert({ project_id: project.id, title: newTitle.trim(), body: newBody.trim() || null });
    setPosting(false);
    if (error) {
      toast.error("Update konnte nicht gespeichert werden");
    } else {
      setNewTitle("");
      setNewBody("");
      toast.success("Update veröffentlicht");
      load();
    }
  };

  const handleDeleteUpdate = async (updateId: string) => {
    if (!confirm("Dieses Update wirklich löschen?")) return;
    const { error } = await supabase.from("project_updates").delete().eq("id", updateId);
    if (error) {
      toast.error("Löschen fehlgeschlagen");
    } else {
      load();
    }
  };

  if (!project) {
    return <p className="text-muted-foreground">Lädt…</p>;
  }

  return (
    <div>
      <Link
        to="/admin/projects"
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 text-sm"
      >
        <ArrowLeft className="h-4 w-4" />
        Zurück zu Projekten
      </Link>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <p className="text-sm text-muted-foreground">
            {customer?.company_name || customer?.contact_name || "—"}
            {customer && !customer.user_id && (
              <span className="ml-2 text-amber-600">(noch kein Portal-Zugang verknüpft)</span>
            )}
          </p>
        </div>
        <Select value={project.status} onValueChange={handleStatusChange}>
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
      </div>

      {project.description && (
        <Card className="mb-6">
          <CardContent className="pt-6 text-sm whitespace-pre-wrap">{project.description}</CardContent>
        </Card>
      )}

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Zeiterfassung</h2>
            <span className="text-sm text-muted-foreground">
              Gesamt: <span className="font-medium text-foreground">{formatDurationShort(totalSeconds)}</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {runningHere ? (
              <div className="flex items-center justify-between rounded-md border border-primary/30 bg-primary/5 p-4 flex-1 min-w-[240px]">
                <span className="font-mono text-2xl tabular-nums">{formatDurationClock(runningSeconds)}</span>
                <Button variant="outline" onClick={handleStop} disabled={trackingBusy}>
                  <Square className="mr-2 h-4 w-4" />
                  Stopp
                </Button>
              </div>
            ) : running ? (
              <div className="flex items-center justify-between rounded-md border border-border/60 p-4 text-sm flex-1 min-w-[240px]">
                <span className="text-muted-foreground">
                  Läuft gerade für <span className="font-medium text-foreground">{running.project?.title}</span>
                </span>
                <Button variant="outline" onClick={handleStart} disabled={trackingBusy}>
                  <Play className="mr-2 h-4 w-4" />
                  Hier stoppen &amp; starten
                </Button>
              </div>
            ) : (
              <Button onClick={handleStart} disabled={trackingBusy}>
                <Play className="mr-2 h-4 w-4" />
                Zeiterfassung starten
              </Button>
            )}
            <Button variant="outline" onClick={() => setManualDialogOpen(true)}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Manuell eintragen
            </Button>
          </div>

          {timeEntries.length > 0 && (
            <ul className="mt-4 divide-y divide-border/60 text-sm">
              {timeEntries.map((entry) => (
                <li key={entry.id} className="flex items-center justify-between py-2">
                  <span className="text-muted-foreground">
                    {formatDate(entry.started_at).split(",")[0]} · {formatTime(entry.started_at)}
                    {" – "}
                    {entry.ended_at ? formatTime(entry.ended_at) : "läuft…"}
                    {entry.note && <span className="block text-xs text-muted-foreground/70">{entry.note}</span>}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">
                      {entry.ended_at
                        ? formatDurationShort(
                            roundUpToQuarterHour(
                              (new Date(entry.ended_at).getTime() - new Date(entry.started_at).getTime()) / 1000
                            )
                          )
                        : "—"}
                    </span>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteTimeEntry(entry.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Dialog open={manualDialogOpen} onOpenChange={setManualDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Zeit manuell eintragen</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddManualEntry} className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Datum</Label>
              <Input type="date" value={manualDate} onChange={(e) => setManualDate(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label>Dauer (Stunden)</Label>
              <Input
                type="number"
                step="0.25"
                min="0.25"
                placeholder="z. B. 2.5 für 2 Std 30 Min"
                value={manualHours}
                onChange={(e) => setManualHours(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Notiz (optional)</Label>
              <Textarea
                placeholder="z. B. Wolfgangs Webseite überarbeitet"
                value={manualNote}
                onChange={(e) => setManualNote(e.target.value)}
              />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setManualDialogOpen(false)}>
                Abbrechen
              </Button>
              <Button type="submit" disabled={savingManual}>
                {savingManual ? "Speichert…" : "Eintragen"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <h2 className="font-semibold mb-3">Neues Update für den Kunden</h2>
          <form onSubmit={handleAddUpdate} className="space-y-3">
            <div className="space-y-2">
              <Label>Titel</Label>
              <Input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label>Details (optional)</Label>
              <Textarea value={newBody} onChange={(e) => setNewBody(e.target.value)} />
            </div>
            <Button type="submit" disabled={posting}>
              {posting ? "Veröffentlicht…" : "Update veröffentlichen"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h2 className="font-semibold mb-4">Verlauf</h2>
          {updates.length === 0 ? (
            <p className="text-sm text-muted-foreground">Noch keine Updates.</p>
          ) : (
            <ul className="space-y-4">
              {updates.map((update) => (
                <li key={update.id} className="flex items-start justify-between gap-4 border-b last:border-0 pb-4 last:pb-0">
                  <div>
                    <p className="text-xs text-muted-foreground">{formatDate(update.created_at)}</p>
                    <p className="font-medium text-sm">{update.title}</p>
                    {update.body && <p className="text-sm text-muted-foreground whitespace-pre-wrap">{update.body}</p>}
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleDeleteUpdate(update.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectView;
