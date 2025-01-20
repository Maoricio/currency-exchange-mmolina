import { useQuery } from "@tanstack/react-query";
import { fetchExchangeRates } from "@/api/currency";
import type { ExchangeRates } from "@/types/currency";

const STALE_TIME = 5 * 60 * 60 * 1000; // 5 hours

export function useExchangeRates(fromCurrency: string) {
  return useQuery<ExchangeRates, Error>({
    queryKey: ["rates", fromCurrency],
    queryFn: () => fetchExchangeRates(fromCurrency),
    enabled: !!fromCurrency,
    staleTime: STALE_TIME,
  });
}
