import { Flex, Text, Image, Link } from "@chakra-ui/react";
import { FooterLinkStyle } from "./FooterStyles";

const Footer = () => {
  return (
    <Flex
      bgColor="black.100"
      width="100%"
      height={{ base: "100%" }}
      flexDir={{ base: "column" }}
      color="white"
      alignItems={{ base: "center", md: "start" }}
      px={{ md: "2.375rem", lg: "10.3125rem" }}
      pb={{ base: "2.25rem", md: "3rem" }}
    >
      <Flex
        width={{ base: "104px" }}
        height={{ base: "4px" }}
        bgColor="orange.100"
        mb={{ base: "3rem", lg: "4.375rem" }}
      ></Flex>

      <Flex
        width="100%"
        justifyContent={{ md: "space-between" }}
        alignItems={{ base: "center", md: "start" }}
        height={{ base: "100%", lg: "1.5625rem" }}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Image src="/public/shared/desktop/logo.svg" />
        <Flex
          flexDir={{ base: "column", md: "row" }}
          mt={{ base: "50px", md: "2rem", lg: "0rem" }}
          textAlign="center"
          width={{ base: "100%", md: "26.8125rem" }}
          height={{ base: "9.25rem", md: "22px", lg: "1.5625rem" }}
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
      </Flex>

      <Flex
        width={{ base: "100%", lg: "49%" }}
        height={{ base: "100%" }}
        mt={{ base: "3.125rem", md: "2rem" }}
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
        alignItems={{ base: "center" }}
        justifyContent={{ md: "space-between" }}
        pb={{ lg: "1.5rem" }}
        mt={{ base: "3rem", md: "4rem" }}
      >
        <Text
          fontSize={{ base: "15px" }}
          fontFamily="main.100"
          fontWeight="medium"
          lineHeight="25px"
          opacity="0.5"
        >
          Copyright 2023. All Rights Reserved
        </Text>

        <Flex
          mt={{ base: "3rem", md: "0px", lg: "-5.5rem" }}
          width={{ base: "6.5rem" }}
          height={{ base: "100%" }}
          justifyContent="space-between"
        >
          <Link href="https://facebook.com" isExternal>
            <Image src="/shared/desktop/icon-facebook.svg" />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Image src="/shared/desktop/icon-twitter.svg" />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Image src="/shared/desktop/icon-instagram.svg" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
