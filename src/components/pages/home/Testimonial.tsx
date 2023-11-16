import { Flex, Box, Text, Heading } from "@chakra-ui/react";

const Testimonial = () => {
  return (
    <Flex
      flexDir={{ base: "column" }}
      width="100%"
      border="1px solid red"
      height={{ base: "689px", md: "100%" }}
      mt={{ base: "120px" }}
      mb={{ base: "120px", md: "96px" }}
      alignItems="center"
      textAlign="center"
      fontFamily="main.100"
    >
      <Box
        width={{ base: "100%", md: "100%" }}
        height={{ base: "300px" }}
        bgImg={{
          base: "/shared/mobile/image-best-gear.jpg",
          md: "/shared/tablet/image-best-gear.jpg",
        }}
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        borderRadius="8px"
        mb="43px"
      ></Box>

      <Flex flexDir={{ base: "column" }} width={{ base: "100%", md: "573px" }}>
        <Heading
          fontSize={{ base: "28px", md: "40px" }}
          letterSpacing="1px"
          textTransform="uppercase"
          fontWeight="bold"
          fontFamily="main.100"
          mb="32px"
          color="black.200"
          lineHeight={{ md: "44px" }}
        >
          Bringing you the
          <Text as="span" color="orange.100" textTransform="uppercase">
            best
          </Text>
          audio gear
        </Heading>
        <Text
          fontSize={{ base: "15px" }}
          lineHeight="25px"
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
