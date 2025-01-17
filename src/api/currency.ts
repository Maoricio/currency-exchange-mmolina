import { Currency, ExchangeRates } from "@/types/currency";

const BASE_URL = "https://api.vatcomply.com";

export async function fetchCurrencies(): Promise<Record<string, Currency>> {
  const response = await fetch(`${BASE_URL}/currencies`);
  if (!response.ok) {
    throw new Error("Failed to fetch currencies");
  }
  return response.json();
}

export async function fetchExchangeRates(base: string): Promise<ExchangeRates> {
  const response = await fetch(`${BASE_URL}/rates?base=${base}`);
  if (!response.ok) {
    throw new Error("Failed to fetch exchange rates");
  }
  return response.json();
}
