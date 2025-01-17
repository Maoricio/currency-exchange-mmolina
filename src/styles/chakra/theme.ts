import { extendTheme } from "@chakra-ui/react";

// DEFAULTS BREAKPOINTS
//   base: '0em', // 0px
//   sm: '30em', // ~480px
//   md: '48em', // ~768px
//   lg: '62em', // ~992px
//   xl: '80em', // ~1280px
//   '2xl': '96em', // ~1536px

export const chakraTheme = extendTheme({
  colors: {
    blue: {
      100: "#E8F3FF",
      200: "#1A8DFF",
      300: "#0E1342",
    },
  },
  fonts: {
    heading: `Inter, system-ui`,
    body: `Inter, system-ui`,
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "2rem", // 32px
    "4xl": "2.5rem", // 40px
  },
  components: {
    Heading: {
      baseStyle: {
        color: "black",
        fontWeight: 400,
        lineHeight: "32px",
      },
      sizes: {
        small: {
          fontSize: "xl",
          lineHeight: "24px",
        },
        regular: {
          fontSize: "2xl",
        },
        large: {
          fontWeight: 600,
          color: "white",
          fontSize: "3xl",
        },
      },
      defaultProps: {
        size: "regular",
      },
    },
    Text: {
      baseStyle: {
        fontWeight: 400,
        color: "black",
        lineHeight: "36px",
      },
      sizes: {
        mini: {
          fontWeight: 300,
          fontSize: "xs",
        },
        small: {
          fontSize: "sm",
        },
        regular: {
          fontWeight: 600,
          lineHeight: "20px",
          fontSize: "md",
        },
        large: {
          fontWeight: 600,
          fontSize: "3xl",
          lineHeight: "32px",
        },
      },
      defaultProps: {
        size: "small",
      },
    },
  },
});
