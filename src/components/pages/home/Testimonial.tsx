import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import "../../../App.css";
const Testimonial = () => {
  return (
    <Flex
      flexDir={{ base: "column", lg: "row-reverse" }}
      width="100%"
      height={{ base: "100%", lg: " 36.75rem" }}
      mt={{ base: "7.5rem", md: "6rem" }}
      mb={{ base: "7.5rem", md: "96px" }}
      alignItems="center"
      justifyContent={{ lg: "space-between" }}
      textAlign="center"
      fontFamily="main.100"
    >
      <Box
        width={{ base: "100%", md: "100%", lg: "50%" }}
        height={{ base: "18.75rem", lg: "36.75rem" }}
        bgImg={{
          base: "/shared/mobile/image-best-gear.jpg",
          md: "/shared/tablet/image-best-gear.jpg",
          lg: "/shared/desktop/image-best-gear.jpg",
        }}
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        borderRadius="8"
        mb="2.68rem"
      ></Box>

      <Flex
        flexDir={{ base: "column" }}
        width={{ base: "100%", md: "35.81rem", lg: "27.8125rem" }}
        alignItems={{ base: "center" }}
      >
        <Flex width={{ base: "85%", md: "100%" }} textAlign={{ lg: "start" }}>
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
            <span className="best"> best </span>
            audio gear
          </Heading>
        </Flex>

        <Text
          fontSize={{ base: "0.937rem" }}
          lineHeight="1.56rem"
          fontFamily="main.100"
          fontWeight="medium"
          opacity="0.5"
          color="black.200"
          textAlign={{ lg: "start" }}
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
