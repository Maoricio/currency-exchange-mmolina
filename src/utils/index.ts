import { ExchangeData, type Currency } from "@/types/currency";
export { ConvertCurrency } from "./currency";

export const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return "unknown date";

  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    timeZoneName: "short",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const getMainTitle = ({
  exchangeData,
  currencies,
  isLoading,
  error,
  rateError,
}: {
  exchangeData: ExchangeData;
  currencies: Record<string, Currency> | undefined;
  isLoading: boolean;
  error: boolean;
  rateError: boolean;
}): string => {
  if (error) return "Something went wrong, please try again";
  if (rateError)
    return "Something went wrong. Please select a different currency.";
  if (isLoading) return "Loading...";
  const { amount, fromCurrency, toCurrency } = exchangeData;
  const title = `${amount} ${fromCurrency} to ${toCurrency}`;
  return currencies
    ? `${title} - Converted ${currencies[fromCurrency].name} to ${currencies[toCurrency].name}`
    : title;
};
