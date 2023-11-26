import { Box, Heading, Text, Flex, Image, Link } from "@chakra-ui/react";

// Styles imports

import {
  homeProductsHeadingStyle,
  seeProductButton,
  homeProductsHeadingStyle2,
} from "./HomeStyles";

const Products = () => {
  return (
    <Flex
      flexDir={{ base: "column" }}
      height="100%"
      mt={{ base: "7.5rem", md: "6rem" }}
      width="100%"
      alignItems={{ md: "center" }}
    >
      <Flex
        width={{ base: "100%" }}
        height={{ base: "37.5rem", md: "45rem" }}
        pt={{ md: ".625rem" }}
        flexDir={{ base: "column" }}
        alignItems="center"
        overflow="hidden"
        borderRadius="8px"
        bgColor="orange.100"
        bgImg={{ base: "/home/desktop/pattern-circles.svg" }}
        bgRepeat="no-repeat"
        bgSize={{ base: "173%", md: "126%" }}
        bgPos={{ base: "center -7.6875rem", md: "center -15rem" }}
      >
        <Image
          position="relative"
          width={{ base: "10.625rem", md: "11.875rem" }}
          height={{ base: "12.9375rem", md: "13.625rem" }}
          src="/home/mobile/image-speaker-zx9.png"
          alt="ZX9"
          loading="lazy"
          mt={{ base: "3.4375rem" }}
        ></Image>
        <Flex
          width={{ base: "86%", md: "349px" }}
          flexDir={{ base: "column" }}
          textAlign="center"
          pt={{ base: "2.25rem", md: "4rem" }}
          mb={{ base: "1.6rem", md: "1.875rem" }}
        >
          <Text {...homeProductsHeadingStyle}>ZX9</Text>
          <Text {...homeProductsHeadingStyle}>speaker</Text>
          <Text
            textAlign="center"
            fontSize="15px"
            lineHeight="25px"
            opacity="0.75"
            color="white.100"
            mt={{ base: "1.625rem", md: "1.25rem" }}
          >
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Text>
        </Flex>

        <Link
          width="160px"
          height="48px"
          borderRadius="none"
          color="white.100"
          bgColor="black.200"
          textTransform="uppercase"
          fontSize="13px"
          fontFamily="main.100"
          letterSpacing="1px"
          fontWeight="bold"
          display="flex"
          justifyContent="center"
          alignItems="center"
          href="/speakers"
        >
          See product
        </Link>
      </Flex>

      {/* ZX 7 SPEAKER */}
      <Flex
        width={{ base: "100%" }}
        flexDir={{ base: "column" }}
        justifyContent="center"
        height={{ base: "320px" }}
        mt={{ base: "20px", md: "32px" }}
        bgImage="/home/mobile/image-speaker-zx7.jpg"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        pl="25px"
        letterSpacing="2px"
        textTransform="uppercase"
        borderRadius="10px"
      >
        <Heading {...homeProductsHeadingStyle2} mb="32px">
          ZX7 speaker
        </Heading>
        <Link href="/speakers" {...seeProductButton}>
          See product
        </Link>
      </Flex>

      {/* ZX 7 SPEAKER END*/}

      {/* YX1 EARPHONES */}

      <Flex
        flexDir={{ base: "column", md: "row" }}
        mt={{ base: "20px", md: "32px" }}
        width={{ md: "100%" }}
        justifyContent={{ md: "space-between" }}
      >
        <Box
          borderRadius="10px"
          width={{ base: "100%", md: "339px" }}
          height={{ base: "200px", md: "320px" }}
          bgImg="/home/mobile/image-earphones-yx1.jpg"
          bgPos="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          mb={{ base: "24px", md: "0px" }}
        ></Box>
        <Flex
          width={{ base: "100%", md: "339px" }}
          height={{ base: "200px", md: "320px" }}
          bgColor="white.300"
          flexDir={{ base: "column" }}
          justifyContent="center"
          pl="25px"
          borderRadius="10px"
        >
          <Heading {...homeProductsHeadingStyle2} mb="34px">
            yx1 earphones{" "}
          </Heading>
          <Link {...seeProductButton}>See product</Link>
        </Flex>
      </Flex>

      {/* YX1 EARPHONES END */}
    </Flex>
  );
};

export default Products;
