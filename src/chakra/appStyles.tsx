import { BoxProps } from "@chakra-ui/react";

// Headings

export const Heading1: BoxProps = {
  fontSize: "56px",
  textTransform: "uppercase",
  letterSpacing: "2px",
  lineHeight: "58px",
  fontWeight: "bold",
  fontFamily: "main.100",
};

export const Heading2: BoxProps = {
  fontSize: "40px",
  textTransform: "uppercase",
  letterSpacing: "1.43px",
  lineHeight: "44px",
  fontWeight: "bold",
  fontFamily: "main.100",
};

export const Heading3: BoxProps = {
  fontSize: "32px",
  textTransform: "uppercase",
  letterSpacing: "1.14px",
  lineHeight: "36px",
  fontWeight: "bold",
  fontFamily: "main.100",
};

export const Heading4: BoxProps = {
  fontSize: { base: "1.75rem", md: "2rem" },
  textTransform: "uppercase",
  letterSpacing: "2px",
  lineHeight: "auto",
  fontWeight: "bold",
  fontFamily: "main.100",
  color: "black.200",
};

export const Heading5: BoxProps = {
  fontSize: { base: "1.5rem", lg: "2rem" },
  textTransform: "uppercase",
  letterSpacing: "1.71px",
  lineHeight: "auto",
  fontWeight: "bold",
  fontFamily: "main.100",
  color: "black.200",
};

export const Heading6: BoxProps = {};

export const BodyText: BoxProps = {
  fontSize: "18px",
  lineHeight: "25px",
  fontWeight: "medium",
  fontFamily: "main.100",
  color: "black.200",
};

export const SmallTextOpacity: BoxProps = {
  fontSize: "15px",
  lineHeight: "25px",
  fontWeight: "medium",
  fontFamily: "main.100",
  color: "black.200",
  opacity: "0.5",
};

export const ItemHeading: BoxProps = {
  fontSize: { base: "15px" },
  fontFamily: "main.100",
  fontWeight: "bold",
  lineHeight: "25px",
  color: "black.200",
};

//buttons

export const Default1btn: BoxProps = {
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
  color: "white",
  bgColor: "orange.100",
  _hover: { textDecoration: "none", bgcolor: "orange.200" },
};

export const Default2btn: BoxProps = {
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
  border: "1px solid black",
  color: "black.200",
};

// Desktop navbar link styles

export const DesktopNavbarLink: BoxProps = {
  _activeLink: { color: "orange.100" },
  fontSize: ".8125rem",
  fontFamily: "main.100",
  fontWeight: "bold",
  letterSpacing: ".125rem",
  lineHeight: "1.5625rem",
  cursor: "pointer",
  _hover: { textDecoration: "none", color: "orange.100" },
};
