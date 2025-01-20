import { useQuery } from "@tanstack/react-query";
import { fetchCurrencies } from "@/api/currency";
import type { Currency } from "@/types/currency";

const STALE_TIME = 5 * 60 * 60 * 1000; // 5 hours

export function useCurrencies() {
  return useQuery<Record<string, Currency>, Error>({
    queryKey: ["currencies"],
    queryFn: fetchCurrencies,
    staleTime: STALE_TIME,
  });
}
