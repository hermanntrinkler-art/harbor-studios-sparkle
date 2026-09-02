import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Square, Timer } from "lucide-react";
import { useRunningTimeEntry } from "@/hooks/useRunningTimeEntry";
import { stopTimeEntry } from "@/lib/timeTracking";
import { formatDurationClock } from "@/lib/time";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

/** Zeigt, egal auf welcher Admin-Seite man sich befindet, ob gerade eine
 * Zeiterfassung läuft, mit laufender Uhr und Stopp-Knopf. */
const RunningTimer = () => {
  const { running, refresh } = useRunningTimeEntry();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, [running]);

  if (!running) return null;

  const elapsedSeconds = Math.max(0, (now - new Date(running.started_at).getTime()) / 1000);

  const handleStop = async () => {
    const { error } = await stopTimeEntry(running.id);
    if (error) {
      toast.error("Stoppen fehlgeschlagen: " + error.message);
    } else {
      toast.success("Zeiterfassung gestoppt");
      refresh();
    }
  };

  return (
    <div className="mx-2 mb-3 rounded-md border border-primary/30 bg-primary/5 p-3">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
        <Timer className="h-3.5 w-3.5" />
        Läuft gerade
      </div>
      <Link
        to={`/admin/projects/${running.project_id}`}
        className="block text-sm font-medium hover:underline truncate"
      >
        {running.project?.title || "Projekt"}
      </Link>
      <div className="flex items-center justify-between mt-2">
        <span className="font-mono text-lg tabular-nums">{formatDurationClock(elapsedSeconds)}</span>
        <Button size="sm" variant="outline" onClick={handleStop}>
          <Square className="mr-1.5 h-3.5 w-3.5" />
          Stopp
        </Button>
      </div>
    </div>
  );
};

export default RunningTimer;
