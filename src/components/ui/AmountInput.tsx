import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

interface AmountInputProps {
  value: number | undefined;
  onChange: (value: number) => void;
  defaultValue?: number;
}

export const AmountInput: React.FC<AmountInputProps> = ({
  value,
  onChange,
  defaultValue = 1,
}) => {
  const handleChange = (valueString: string) => {
    const sanitizedValue = valueString.replace(/[^0-9.]/g, "");
    if (!isNaN(Number(sanitizedValue))) {
      onChange(Number(sanitizedValue));
    }
  };
  return (
    <FormControl id={"amount"} w={"100%"}>
      <FormLabel
        htmlFor={"amount"}
        fontWeight={600}
        fontSize={"md"}
        lineHeight={"20px"}
        mb={"16px"}
      >
        Amount
      </FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents={"none"} fontSize={"md"}>
          $
        </InputLeftElement>
        <NumberInput
          id={"amount"}
          w={"100%"}
          defaultValue={1}
          min={1}
          value={value ?? defaultValue}
          onChange={(valueString) => handleChange(valueString)}
        >
          <NumberInputField
            fontWeight={600}
            fontSize={"md"}
            lineHeight={"20px"}
            pl={"30px"}
          />
        </NumberInput>
      </InputGroup>
    </FormControl>
  );
};
