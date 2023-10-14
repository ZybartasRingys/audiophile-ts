import { Box, Heading, Text, Flex, Image, Link } from "@chakra-ui/react";

// Styles imports

import {
  homeProductsHeadingStyle,
  seeProductButton,
  homeProductsHeadingStyle2,
} from "./HomeStyles";

const Products = () => {
  return (
    <Flex flexDir={{ base: "column" }} mt="120px" width="89%">
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        bgColor="#D87D4A"
        borderRadius="10px"
      >
        <Flex
          flexDir={{ base: "column" }}
          alignItems="center"
          justifyContent="center"
          width={{ base: "100%" }}
          height="600px"
          bgImg="/home/desktop/pattern-circles.svg"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center -126px"
        >
          <Image
            width="173px"
            height="207px"
            src="/home/mobile/image-speaker-zx9.png"
            alt="ZX9"
            mb="39px"
          ></Image>
          <Flex
            width={{ base: "86%" }}
            flexDir={{ base: "column" }}
            textAlign="center"
            mb="30px"
          >
            <Text {...homeProductsHeadingStyle}>ZX9</Text>
            <Text {...homeProductsHeadingStyle}>speaker</Text>
            <Text
              textAlign="center"
              fontSize="15px"
              lineHeight="25px"
              opacity="0.8"
              color="white.100"
              mt="30px"
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
            bgColor="black.100"
            textTransform="uppercase"
            fontSize="13px"
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
      </Flex>
      <Flex
        width="100%"
        flexDir={{ base: "column" }}
        justifyContent="center"
        height={{ base: "320px" }}
        mt="20px"
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

      <Flex flexDir={{ base: "column" }} mt="24px">
        <Box
          borderRadius="10px"
          height="200px"
          width="100%"
          bgImg="/home/mobile/image-earphones-yx1.jpg"
          bgPos="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          mb="24px"
        ></Box>
        <Flex
          height="200px"
          width="100%"
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
    </Flex>
  );
};

export default Products;
