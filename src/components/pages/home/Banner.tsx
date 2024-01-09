import { Text, Heading, Link, Flex } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Flex
      width="100%"
      height={{ base: "31.81rem", md: "39.8125rem", lg: "39.5rem" }}
      mb={{ base: "1.4375rem" }}
      justifyContent={{ md: "center", lg: "start" }}
      alignItems={{ md: "center", lg: "center" }}
      fontFamily="main.100"
      bgColor="black.300"
      bgImg={{
        base: "/home/mobile/image-header.jpg",
        md: "home/tablet/image-header.jpg",
        lg: "/home/desktop/image-hero.jpg",
      }}
      backgroundPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos={{ base: "center -5.625rem" }}
      px={{ lg: "10.3125rem" }}
    >
      <Flex
        width={{ base: "100%", md: "55%", lg: "100%" }}
        maxW={{ lg: "22.875rem" }}
        height={{ base: "100%", md: "21.625rem" }}
        flexDir={{ base: "column" }}
        alignItems={{ base: "center", lg: "start" }}
        px={{ base: "2.8125rem", md: "1.25rem", lg: "0" }}
        pt={{ base: "5.9375rem", md: "0" }}
        textAlign={{ base: "center", lg: "start" }}
      >
        <Heading
          fontFamily="main.100"
          fontWeight="regular"
          color="white"
          opacity="0.5"
          textTransform="uppercase"
          letterSpacing=".625rem"
          mb="1.25rem"
          fontSize={{ base: ".875rem" }}
        >
          New product
        </Heading>
        <Heading
          color="white"
          fontSize={{ base: "2.25rem", md: "3.5rem" }}
          fontFamily="main.100"
          textTransform="uppercase"
          letterSpacing={{ base: ".25rem", md: ".125rem" }}
          mb="1.375rem"
          lineHeight={{ base: "2.5rem", md: "3.625rem" }}
        >
          XX99 Mark II Headphones
        </Heading>
        <Text
          color="white.100"
          textAlign={{ base: "center", lg: "start" }}
          fontSize=".9375rem"
          mb="1.75rem"
          fontWeight="medium"
          opacity="0.75"
          lineHeight="1.5625rem"
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Text>
        <Link
          width="160px"
          height="48px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          textTransform="uppercase"
          fontSize="13px"
          fontWeight="bold"
          fontFamily="main.100"
          letterSpacing="1px"
          color="white"
          bgColor="orange.100"
          _hover={{ textDecoration: "none", bgcolor: "orange.200" }}
          href="/products/xx99-mark-ii-headphones"
        >
          See product
        </Link>
      </Flex>
    </Flex>
  );
};

export default Banner;
