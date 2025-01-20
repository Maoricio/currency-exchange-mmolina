import type {
  ConversionResult,
  ExchangeRateInput,
  ExchangeRates,
} from "@/types/currency";

type ConvertCurrencyParams = {
  rates: ExchangeRates;
} & ExchangeRateInput;

export function ConvertCurrency({
  amount,
  toCurrency,
  rates,
}: ConvertCurrencyParams): ConversionResult {
  const rate = rates.rates[toCurrency];
  const toAmount = amount * rate;
  const lastUpdated = rates.date;

  return {
    toAmount,
    rate,
    lastUpdated,
  };
}
