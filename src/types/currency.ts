export interface ExchangeRateInput {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
}

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
  toAmount?: number;
  rate?: number;
  lastUpdated?: string;
}

export type ExchangeData = ExchangeRateInput & ConversionResult;
