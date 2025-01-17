import React from "react";
import { VStack, Skeleton, Box, Text } from "@chakra-ui/react";
import { ConversionResult } from "@/types/currency";

interface ExchangeResultProps {
  result: ConversionResult | null;
  isLoading: boolean;
}

export const ExchangeResult: React.FC<ExchangeResultProps> = ({
  isLoading,
  result,
}) => {
  if (!isLoading && !result) {
    return null;
  }

  return (
    <VStack align={"flex-start"} gap={"12px"}>
      <Skeleton isLoaded={!isLoading} borderRadius={"md"} minH={"107px"}>
        <Box>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={600}>
            {result?.fromAmount.toFixed(2)} {result?.fromCurrencyName} =
          </Text>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={600}>
            {result?.toAmount.toFixed(4)} {result?.toCurrencyName}
          </Text>
        </Box>
        <Text fontSize={"md"} color={"#757575"}>
          {`1 ${result?.fromCurrency} = ${result?.rate.toFixed(5)} ${
            result?.toCurrency
          }`}
        </Text>
      </Skeleton>
    </VStack>
  );
};
