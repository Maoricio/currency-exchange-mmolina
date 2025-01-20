import { FormControl, FormLabel, Icon, Select } from "@chakra-ui/react";
import { Currency } from "@/types/currency";
import ChevronDownIcon from "@/assets/img/icon/chevron-down.svg?react";

interface CurrencySelectProps {
  label: string;
  value: string;
  error: boolean;
  onChange: (value: string) => void;
  currencies?: Record<string, Currency>;
  errorMessage?: string;
}

export const CurrencySelect: React.FC<CurrencySelectProps> = ({
  label,
  value,
  error,
  onChange,
  currencies,
}) => {
  return (
    <FormControl id={`currency-${label}`} w={"100%"} isInvalid={error}>
      <FormLabel
        htmlFor={`currency-${label}`}
        fontWeight={600}
        fontSize={"md"}
        lineHeight={"20px"}
        mb={"16px"}
      >
        {label}
      </FormLabel>
      <Select
        id={`currency-${label}`}
        fontWeight={600}
        fontSize={"md"}
        lineHeight={"20px"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        icon={<Icon w={"16px"} h={"16px"} as={ChevronDownIcon} />}
        isDisabled={!currencies}
      >
        {currencies
          ? Object.keys(currencies).map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))
          : null}
      </Select>
    </FormControl>
  );
};
