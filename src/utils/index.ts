import { ConversionResult } from "@/types/currency";

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

export const getErrorLoadingMsg = (isLoading: boolean): string =>
  isLoading ? "Loading..." : "Something went wrong. Please try again later.";

export const getMainTitle = ({
  result,
  isLoading,
}: {
  result: ConversionResult | null;
  isLoading: boolean;
}): string => {
  if (result) {
    const {
      fromAmount,
      fromCurrencyName,
      toCurrencyName,
      fromCurrency,
      toCurrency,
    } = result;
    return `${fromAmount} ${fromCurrency} to ${toCurrency} - Converted ${fromCurrencyName} to ${toCurrencyName}`;
  }
  return getErrorLoadingMsg(isLoading);
};
