export interface Currency {
  name: string;
  symbol: string;
}

export interface ExchangeRates {
  date: string;
  base: string;
  rates: Record<string, number>;
}

export interface ConversionResult {
  fromAmount: number;
  toAmount: number;
  fromCurrency: string;
  toCurrency: string;
  fromCurrencyName: string;
  toCurrencyName: string;
  rate: number;
  lastUpdated: string;
}
