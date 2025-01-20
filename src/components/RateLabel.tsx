import { Link, Text } from "@chakra-ui/react";
import { formatDate } from "@/utils";
import { ExchangeData, Currency } from "@/types/currency";

interface RateLabelProps {
  isLoading: boolean;
  error: boolean;
  exchangeData: ExchangeData;
  currencies?: Record<string, Currency>;
}

interface CurrencyLinkProps {
  currencyCode?: string;
  currencyName?: string;
}

const StyledText: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Text
    size="mini"
    lineHeight={{ base: "23px", md: "36px" }}
    mr={{ base: "0", md: "10px" }}
  >
    {children}
  </Text>
);

const CurrencyLink: React.FC<CurrencyLinkProps> = ({
  currencyCode,
  currencyName,
}) => {
  const normalizedCode = currencyCode?.toLowerCase();
  const normalizedName = currencyName?.replace(/ /g, "-").toLowerCase();

  const href =
    normalizedCode && normalizedName
      ? `https://www.xe.com/currency/${normalizedCode}-${normalizedName}/`
      : `https://www.xe.com/currency`;

  return (
    <Link href={href} borderBottom="1px solid #000000" _hover={{}} isExternal>
      {currencyName ?? normalizedCode}
    </Link>
  );
};

export const RateLabel: React.FC<RateLabelProps> = ({
  isLoading,
  error,
  exchangeData,
  currencies,
}) => {
  if (isLoading) return <StyledText>Loading...</StyledText>;

  const { fromCurrency, toCurrency, lastUpdated } = exchangeData;
  return (
    <StyledText>
      <CurrencyLink
        currencyCode={fromCurrency}
        currencyName={currencies?.[fromCurrency]?.name}
      />{" "}
      to{" "}
      <CurrencyLink
        currencyCode={toCurrency}
        currencyName={currencies?.[toCurrency]?.name}
      />{" "}
      conversion
      {!error && ` - Last updated on ${formatDate(lastUpdated)}`}
    </StyledText>
  );
};
