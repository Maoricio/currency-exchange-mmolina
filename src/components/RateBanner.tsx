import { Box, Text } from "@chakra-ui/react";

export const RateBanner = () => {
  return (
    <Box
      w={"518px"}
      bgColor={"blue.100"}
      p={"10px 10px 10px 20px"}
      borderRadius={"8px"}
      boxShadow={"0px 2px 4px 0px rgba(0, 0, 0, 0.25)"}
    >
      <Text size={"small"}>
        We use the mid-market rate for our Converter. This is for informational
        purposes only. You won't receive this rate when sending money.
      </Text>
    </Box>
  );
};
