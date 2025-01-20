import { useState, useMemo } from "react";
import { useCurrencies } from "./useCurrencies";
import { useExchangeRates } from "./useExchangeRates";
import { type ConversionResult } from "@/types/currency";
import { ConvertCurrency } from "@/utils";

const DEFAULT_FROM_CURRENCY = "USD";
const DEFAULT_TO_CURRENCY = "EUR";
const DEFAULT_AMOUNT = 1;

export function useCurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState<string>(
    DEFAULT_FROM_CURRENCY
  );
  const [toCurrency, setToCurrency] = useState<string>(DEFAULT_TO_CURRENCY);
  const [amount, setAmount] = useState<number>(DEFAULT_AMOUNT);

  const {
    data: currencies,
    isLoading: isLoadingCurrencies,
    error: currencyError,
  } = useCurrencies();

  const {
    data: rates,
    isLoading: isLoadingRates,
    error: ratesError,
  } = useExchangeRates(fromCurrency);

  const conversionResult = useMemo<ConversionResult | null>(() => {
    if (!rates || !currencies) return null;
    const result = ConvertCurrency({
      amount,
      fromCurrency,
      toCurrency,
      rates,
    });

    return {
      ...result,
      lastUpdated: rates.date,
    };
  }, [amount, fromCurrency, toCurrency, currencies, rates]);

  return {
    setFromCurrency,
    setToCurrency,
    setAmount: setAmount,
    error: !!(currencyError || ratesError),
    isLoading: isLoadingCurrencies || isLoadingRates,
    currencies,
    exchangeData: { ...conversionResult, fromCurrency, toCurrency, amount },
  };
}
