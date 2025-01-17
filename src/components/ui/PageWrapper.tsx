import { Box, Text } from "@chakra-ui/react";

export const PageWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <Box h={"100vh"} display={"flex"} flexDirection={"column"}>
      <Box
        as={"header"}
        w={"full"}
        minH={"60px"}
        bgColor={"blue.300"}
        alignContent={"center"}
        boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
      >
        <Text
          color={"white"}
          alignItems={"center"}
          fontWeight={600}
          fontSize={"1.375rem"}
          lineHeight={"20px"}
          pl={{ base: "16px", md: "54.61px" }}
        >
          Currency Exchange
        </Text>
      </Box>
      <Box
        as={"main"}
        h={"100%"}
        position={"relative"}
        p={{ base: "31px", md: "63px 77px" }}
      >
        <Box
          position="absolute"
          top={"0px"}
          left={"0"}
          right={"0"}
          h={"295px"}
          bg={"blue.200"}
          zIndex={-1}
        />

        {children}
      </Box>
    </Box>
  );
};
