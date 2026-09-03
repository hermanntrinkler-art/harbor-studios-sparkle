import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type HourlyRate = Tables<"hourly_rates">;

/** Liefert alle Stundensatz-Kategorien (z. B. Webdesign, Programmierung),
 * sortiert nach sort_order. */
export const useHourlyRates = () => {
  const [rates, setRates] = useState<HourlyRate[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    const { data } = await supabase.from("hourly_rates").select("*").order("sort_order");
    setRates(data || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { rates, loading, refresh };
};
