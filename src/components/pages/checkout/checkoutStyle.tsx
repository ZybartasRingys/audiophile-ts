import { BoxProps } from "@chakra-ui/react";

// eslint-disable-next-line react-refresh/only-export-components
export const formLabelStyle: BoxProps = {
  color: "black.200",
  fontWeight: "bold",
  fontSize: "12px",
  fontFamily: "main.100",
  letterSpacing: "-0.21px",
};

// eslint-disable-next-line react-refresh/only-export-components
export const formInputStyle: BoxProps = {
  width: { base: "280px", md: "309px" },
  height: { base: "56px" },
  bgColor: "white.100",
  color: "black.200",
  mb: { base: "0", md: "0" },
  border: "1px solid",
  borderColor: "grey.200",
  fontFamily: "main.100",
  fontSize: { base: "14px" },
  letterSpacing: "-0.25",
  fontWeight: "bold",
  cursor: "pointer",
  _focus: {
    borderColor: "orange.100",
    outline: "none",
    boxShadow: "none",
  },
};

export const FormLabelHeading: BoxProps = {
  color: "orange.100",
  fontSize: "13px",
  lineHeight: "25px",
  letterSpacing: "1px",
  fontWeight: "bold",
  mb: { base: "1rem" },
  textTransform: "uppercase",
};

export const SummaryItemHeading: BoxProps = {
  fontSize: { base: "15px" },
  fontFamily: "main.100",
  fontWeight: "bold",
  lineHeight: "25px",
};

export const SummaryItemPrice: BoxProps = {
  fontSize: "14px",
  lineHeight: "25px",
  fontWeight: "bold",
  fontFamily: "main.100",
  opacity: "0.5",
  color: "black.200",
};

export const SummaryPricesText: BoxProps = {
  fontSize: "15px",
  lineHeight: "25px",
  fontWeight: "medium",
  fontFamily: "main.100",
  opacity: "0.5",
  color: "black.200",
};

export const SummaryTotalPrices: BoxProps = {
  fontSize: { base: "18px" },
  fontFamily: "main.100",
  fontWeight: "bold",
  lineHeight: "auto",
};
