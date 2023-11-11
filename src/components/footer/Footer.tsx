import { Flex, Text, Image, Link } from "@chakra-ui/react";
import { FooterLinkStyle } from "./FooterStyles";

const Footer = () => {
  return (
    <Flex
      bgColor="black.100"
      width="100%"
      height={{ base: "654px", md: "100%" }}
      flexDir={{ base: "column" }}
      color="white"
      alignItems={{ base: "center", md: "start" }}
      px={{ md: "25px" }}
    >
      <Flex
        width={{ base: "104px" }}
        height={{ base: "4px" }}
        bgColor="orange.100"
        mb={{ base: "48px" }}
      ></Flex>
      <Image src="/public/shared/desktop/logo.svg" />

      <Flex
        flexDir={{ base: "column", md: "row" }}
        mt={{ base: "50px" }}
        textAlign="center"
        width={{ base: "100%", md: "429px" }}
        height={{ base: "148px", md: "22px" }}
        justifyContent="space-between"
      >
        <Link href="/" {...FooterLinkStyle}>
          Home
        </Link>
        <Link href="/headphones" {...FooterLinkStyle}>
          Headphones
        </Link>
        <Link href="/speakers" {...FooterLinkStyle}>
          Speakers
        </Link>
        <Link href="/earphones" {...FooterLinkStyle}>
          Earphones
        </Link>
      </Flex>

      <Flex
        width={{ base: "100%" }}
        height={{ base: "100%" }}
        mt={{ base: "50px" }}
        textAlign={{ base: "center", md: "start" }}
        px={{ base: "25px", md: "0px" }}
      >
        <Text
          fontSize={{ base: "15px" }}
          fontFamily="main.100"
          fontWeight="medium"
          lineHeight="25px"
          opacity="0.5"
        >
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </Text>
      </Flex>

      <Flex
        width={{ base: "100%" }}
        flexDir={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent={{ md: "space-between" }}
      >
        <Text
          mt={{ base: "50px", md: "0px" }}
          fontSize={{ base: "15px" }}
          fontFamily="main.100"
          fontWeight="medium"
          lineHeight="25px"
          opacity="0.5"
        >
          Copyright 2021. All Rights Reserved
        </Text>

        <Flex
          mt={{ base: "48px" }}
          mb={{ base: "38px" }}
          width={{ base: "104px" }}
          height={{ base: "24px" }}
          justifyContent="space-between"
        >
          <Link href="https://facebook.com" isExternal>
            <Image src="/public/shared/desktop/icon-facebook.svg" />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Image src="/public/shared/desktop/icon-twitter.svg" />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Image src="/public/shared/desktop/icon-instagram.svg" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
