import { Flex, Text, Image, Link } from "@chakra-ui/react";
import { FooterLinkStyle } from "./FooterStyles";

const Footer = () => {
  return (
    <Flex
      bgColor="black.100"
      width="100%"
      height={{ base: "654px" }}
      flexDir={{ base: "column" }}
      color="white"
      alignItems="center"
    >
      <Flex
        width={{ base: "104px" }}
        height={{ base: "4px" }}
        bgColor="orange.100"
        mb={{ base: "48px" }}
      ></Flex>
      <Image src="/public/shared/desktop/logo.svg" />

      <Flex
        flexDir={{ base: "column" }}
        mt={{ base: "50px" }}
        textAlign="center"
        width={{ base: "108px" }}
        height={{ base: "148px" }}
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
        height={{ base: "150px" }}
        mt={{ base: "50px" }}
        textAlign="center"
        px="25px"
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
      <Text
        mt={{ base: "50px" }}
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
  );
};

export default Footer;
