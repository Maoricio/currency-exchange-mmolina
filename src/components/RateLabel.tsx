import { Link, Text } from "@chakra-ui/react";
import { ConversionResult } from "@/types/currency";
import { getErrorLoadingMsg, formatDate } from "@/utils";

interface RateLabelProps {
  result: ConversionResult | null;
  isLoading: boolean;
}

interface CurrencyLinkProps {
  currencyCode: string;
  currencyName: string;
}

const CurrencyLink: React.FC<CurrencyLinkProps> = ({
  currencyCode,
  currencyName,
}) => {
  const normalizedCode = currencyCode?.toLowerCase();
  const normalizedName = currencyName?.replace(/ /g, "-").toLowerCase();

  if (!currencyCode || !currencyName) {
    return null;
  }

  return (
    <Link
      href={`https://www.xe.com/currency/${normalizedCode}-${normalizedName}/`}
      borderBottom="1px solid #000000"
      _hover={{}}
      isExternal
    >
      {currencyName}
    </Link>
  );
};

export const RateLabel: React.FC<RateLabelProps> = ({ result, isLoading }) => {
  const renderCurrencyConversion = () => {
    if (!result) return null;

    const {
      fromCurrencyName,
      fromCurrency,
      toCurrencyName,
      toCurrency,
      lastUpdated,
    } = result;

    return (
      <>
        <CurrencyLink
          currencyCode={fromCurrency}
          currencyName={fromCurrencyName}
        />{" "}
        to{" "}
        <CurrencyLink currencyCode={toCurrency} currencyName={toCurrencyName} />{" "}
        conversion - Last updated on {formatDate(lastUpdated)}
      </>
    );
  };

  return (
    <Text
      size="mini"
      lineHeight={{ base: "23px", md: "36px" }}
      mr={{ base: "0", md: "10px" }}
    >
      {result ? renderCurrencyConversion() : getErrorLoadingMsg(isLoading)}
    </Text>
  );
};
