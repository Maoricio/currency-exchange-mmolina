import React from "react";
import { VStack, Skeleton, Box, Text } from "@chakra-ui/react";
import { ExchangeData, Currency } from "@/types/currency";

interface ExchangeResultProps {
  isLoading: boolean;
  error: boolean;
  exchangeData: ExchangeData;
  currencies?: Record<string, Currency>;
}

export const ExchangeResult: React.FC<ExchangeResultProps> = ({
  isLoading,
  error,
  currencies,
  exchangeData,
}) => {
  if (error) return null;

  const {
    amount,
    fromCurrency,
    toCurrency,
    toAmount = 1,
    rate = 1,
  } = exchangeData;
  const from = currencies?.[fromCurrency]?.name ?? fromCurrency;
  const to = currencies?.[toCurrency]?.name ?? fromCurrency;

  return (
    <VStack align={"flex-start"} gap={"12px"}>
      <Skeleton isLoaded={!isLoading} borderRadius={"md"} minH={"107px"}>
        <Box>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={600}>
            {amount.toFixed(2)} {from} =
          </Text>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={600}>
            {toAmount.toFixed(4)} {to}
          </Text>
        </Box>
        <Text fontSize={"md"} color={"#757575"}>
          {`1 ${exchangeData?.fromCurrency} = ${rate.toFixed(5)} ${
            exchangeData?.toCurrency
          }`}
        </Text>
      </Skeleton>
    </VStack>
  );
};
