const QUARTER_HOUR_SECONDS = 15 * 60;

/** Rundet eine abgeschlossene Dauer immer auf die nächsten 15 Minuten auf
 * (z. B. 8 Min -> 15 Min, 46 Min -> 1 Std). Für laufende/live Zeiten NICHT
 * verwenden, nur für bereits gestoppte Zeiteinträge. */
export function roundUpToQuarterHour(totalSeconds: number): number {
  if (totalSeconds <= 0) return 0;
  return Math.ceil(totalSeconds / QUARTER_HOUR_SECONDS) * QUARTER_HOUR_SECONDS;
}

/** Kurzform für Summen/Listen, z. B. "2 Std 15 Min" oder "45 Min". */
export function formatDurationShort(totalSeconds: number): string {
  const safeSeconds = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(safeSeconds / 3600);
  const m = Math.floor((safeSeconds % 3600) / 60);
  if (h === 0) return `${m} Min`;
  if (m === 0) return `${h} Std`;
  return `${h} Std ${m} Min`;
}

/** Laufende Uhr im Format HH:MM:SS. */
export function formatDurationClock(totalSeconds: number): string {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(safeSeconds / 3600);
  const m = Math.floor((safeSeconds % 3600) / 60);
  const s = Math.floor(safeSeconds % 60);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}
