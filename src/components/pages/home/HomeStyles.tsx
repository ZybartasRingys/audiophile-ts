import { BoxProps } from "@chakra-ui/react";

// interface LinkProps extends BoxProps {
//   children: string;
//   as?: string | undefined;
//   translate: "yes" | "no" | undefined;
//   style?: CSSProperties | undefined;
//   title?: string | undefined;
//   _vertical?: SystemStyleObject | undefined;
// }
// headings

export const homeProductsHeadingStyle: BoxProps = {
  fontSize: { base: "36px" },
  fontWeight: "bold",
  lineHeight: "40px",
  fontFamily: "main.100",
  letterSpacing: "1.3px",
  color: "white.100",
  textTransform: "uppercase",
};

export const homeProductsHeadingStyle2: BoxProps = {
  fontSize: { base: "28px" },
  fontWeight: "bold",
  lineHeight: "40px",
  fontFamily: "main.100",
  letterSpacing: "2px",
  color: "black.100",
  textTransform: "uppercase",
};
// button

export const seeProductButton: BoxProps = {
  width: "160px",
  height: "48px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  textTransform: "uppercase",
  fontSize: "13px",
  fontWeight: "bold",
  fontFamily: "main.100",
  letterSpacing: "1px",
  bgColor: "orange.100",
  color: "white",
};
