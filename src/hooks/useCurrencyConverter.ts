import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCurrencies, fetchExchangeRates } from "@/api/currency";
import { ConversionResult } from "@/types/currency";

export function useCurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [amount, setAmount] = useState<number>(1);

  const { data: currencies, isLoading: isLoadingCurrencies } = useQuery({
    queryKey: ["currencies"],
    queryFn: fetchCurrencies,
    staleTime: 5 * 60 * 60 * 1000, // 5 horas en milisegundos
    cacheTime: 5 * 60 * 60 * 1000, // También puedes usar cacheTime para eliminar la caché después de 5 horas
  });

  const { data: rates, isLoading: isLoadingRates } = useQuery({
    queryKey: ["rates", fromCurrency],
    queryFn: () => fetchExchangeRates(fromCurrency),
    enabled: !!fromCurrency,
  });

  const convert = (): ConversionResult | null => {
    if (!rates || !currencies) return null;

    const rate = rates.rates[toCurrency] / rates.rates[fromCurrency];
    const toAmount = amount * rate;

    return {
      fromAmount: amount,
      toAmount,
      fromCurrency,
      toCurrency,
      fromCurrencyName: currencies[fromCurrency].name,
      toCurrencyName: currencies[toCurrency].name,
      rate,
      lastUpdated: rates.date,
    };
  };

  return {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
    currencies,
    isLoading: isLoadingCurrencies || isLoadingRates,
    convert,
  };
}
