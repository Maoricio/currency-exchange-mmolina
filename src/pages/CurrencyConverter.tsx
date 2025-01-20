import {
  Flex,
  IconButton,
  Icon,
  Card,
  CardBody,
  VStack,
  Show,
  Heading,
} from "@chakra-ui/react";
import { useCurrencyConverter } from "@/hooks/useCurrencyConverter";
import { ExchangeResult, RateBanner, RateLabel } from "@/components";
import { PageWrapper, AmountInput, CurrencySelect } from "@/components/ui";
import { getMainTitle } from "@/utils";
import ChangeCurrencyIcon from "@/assets/img/icon/change-currency.svg?react";

export const CurrencyConverter = () => {
  const {
    error,
    isLoading,
    currencies,
    exchangeData,
    setAmount,
    setToCurrency,
    setFromCurrency,
  } = useCurrencyConverter();

  const rateError = !isLoading && !exchangeData?.rate;

  return (
    <PageWrapper>
      <Flex
        align={"center"}
        w={"100%"}
        justifyContent={"center"}
        mb={{ base: "35px", md: "72px" }}
        minH={{ base: "96px", md: "0" }}
      >
        <Heading size={"large"} textAlign={"center"}>
          {getMainTitle({
            exchangeData,
            currencies,
            error: error,
            rateError: rateError,
            isLoading,
          })}
        </Heading>
      </Flex>

      <Card
        align={"center"}
        justify={"center"}
        boxShadow={"lg"}
        borderRadius={"md"}
        w={"100%"}
        h={{ base: "auto", md: "400px" }}
      >
        <CardBody
          w={"100%"}
          position={"relative"}
          p={{ base: "24px 16px 5px 16px", md: "33px 42px" }}
        >
          <Flex
            gap={{ base: "30px", md: "54px" }}
            flexDirection={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            mb={{ base: "16px", md: "70px" }}
          >
            <AmountInput value={exchangeData.amount} onChange={setAmount} />

            <CurrencySelect
              label="From"
              value={exchangeData.fromCurrency}
              onChange={setFromCurrency}
              currencies={currencies}
              error={error}
            />
            <IconButton
              aria-label={`change-currency`}
              bgColor={"white"}
              icon={<Icon w={"42px"} h={"42px"} as={ChangeCurrencyIcon} />}
              onClick={(e) => {
                e.preventDefault();
                setFromCurrency(exchangeData.toCurrency);
                setToCurrency(exchangeData.fromCurrency);
              }}
              _hover={{}}
              _active={{}}
              mt={{ base: "-14px", md: "0" }}
              mb={{ base: "-14px", md: "0" }}
            />

            <CurrencySelect
              label="To"
              value={exchangeData.toCurrency}
              onChange={setToCurrency}
              currencies={currencies}
              error={rateError && !error}
            />
          </Flex>

          <ExchangeResult
            exchangeData={exchangeData}
            currencies={currencies}
            isLoading={isLoading}
            error={error || !exchangeData?.rate}
          />

          <Show above={"lg"}>
            <VStack
              position={"absolute"}
              alignItems={"flex-end"}
              bottom={0}
              right={0}
              p={"0 20px"}
            >
              <RateBanner />
              <RateLabel
                exchangeData={exchangeData}
                currencies={currencies}
                isLoading={isLoading}
                error={error}
              />
            </VStack>
          </Show>
        </CardBody>
      </Card>

      <Show below={"lg"}>
        <RateLabel
          exchangeData={exchangeData}
          currencies={currencies}
          isLoading={isLoading}
          error={error}
        />
      </Show>
    </PageWrapper>
  );
};
