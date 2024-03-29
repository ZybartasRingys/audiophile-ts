(""); // 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/manrope";

// 2. Extend the theme to include custom colors, fonts, etc

const colors = {
  orange: {
    100: "#D87D4A",
    200: "#FBAF85",
  },
  black: {
    100: "#101010",
    200: "#000000",
    300: "#191919",
  },
  white: {
    100: "#FFFFFF",
    200: "#FAFAFA",
    300: "#F1F1F1",
  },
  grey: {
    100: "#979797",
    200: "#CFCFCF",
    300: "#4C4C4C",
    400: "#D9D9D9",
  },
};

const spacing = {
  space: {
    px: "1px",
    8: "0.5rem",
    24: "1.5rem",
    38: "2.37rem",
    47: "2.93rem",
    165: "10.3125rem",
  },
};

const fonts = {
  main: {
    100: `'Manrope Variable', sans-serif;`,
  },
};

const global = {
  styles: {
    global: {
      "html, body": {
        fontFamily: "Manrope Variable, sans-serif",
      },
    },
  },
};

export const theme = extendTheme({
  colors,
  fonts,
  global,

  ...spacing,
});
