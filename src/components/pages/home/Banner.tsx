import { Text, Heading, Link, Flex, Image } from "@chakra-ui/react";
import { Default1btn } from "../../../chakra/appStyles";

const Banner = () => {
  return (
    <Flex
      width="100%"
      height={{ base: "31.81rem", md: "39.8125rem", lg: "39.5rem" }}
      mb={{ base: "1.4375rem" }}
      justifyContent={{ base: "center", lg: "start" }}
      alignItems="center"
      fontFamily="main.100"
      bgColor="black.300"
      bgImg={{
        base: "/home/mobile/image-header.jpg",
        md: "home/tablet/image-header.jpg",
        lg: "",
      }}
      backgroundPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos={{ base: "center -5.625rem", lg: "center" }}
      border="1px solid red"
      px={{ lg: "10.3125rem" }}
    >
      <Flex
        width={{ base: "100%", md: "50%", lg: "100%" }}
        maxW={{ lg: "24.875rem" }}
        height={{ base: "100%", md: "21.625rem" }}
        flexDir={{ base: "column" }}
        alignItems={{ base: "center", lg: "start" }}
        justifyContent={{ base: "center" }}
        px={{ base: "1rem", lg: "0" }}
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
          letterSpacing={{ base: "1,4px", md: "2px" }}
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
        <Link {...Default1btn}>See product</Link>
      </Flex>
      <Flex width="100%" height="100%">
        <Image src="/home/tablet/image-header.jpg" />
      </Flex>
    </Flex>
  );
};

export default Banner;
