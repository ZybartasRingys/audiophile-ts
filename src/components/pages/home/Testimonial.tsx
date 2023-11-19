import { Flex, Box, Text, Heading } from "@chakra-ui/react";

const Testimonial = () => {
  return (
    <Flex
      flexDir={{ base: "column" }}
      width="100%"
      height={{ base: "100%" }}
      mt={{ base: "7.5rem", md: "6rem" }}
      mb={{ base: "7.5rem", md: "96px" }}
      alignItems="center"
      textAlign="center"
      fontFamily="main.100"
    >
      <Box
        width={{ base: "100%", md: "100%" }}
        height={{ base: "18.75rem" }}
        bgImg={{
          base: "/shared/mobile/image-best-gear.jpg",
          md: "/shared/tablet/image-best-gear.jpg",
        }}
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        borderRadius="8"
        mb="2.68rem"
      ></Box>

      <Flex
        flexDir={{ base: "column" }}
        width={{ base: "100%", md: "35.81rem" }}
      >
        <Heading
          fontSize={{ base: "1.75rem", md: "2.5rem" }}
          letterSpacing="1px"
          textTransform="uppercase"
          fontWeight="bold"
          fontFamily="main.100"
          mb="2rem"
          color="black.200"
          lineHeight={{ md: "2.75rem" }}
        >
          Bringing you the
          <Text as="span" color="orange.100" textTransform="uppercase">
            best
          </Text>
          audio gear
        </Heading>
        <Text
          fontSize={{ base: "1rem" }}
          lineHeight="1.56rem"
          fontFamily="main.100"
          fontWeight="medium"
          opacity="0.5"
          color="black.200"
        >
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Testimonial;
