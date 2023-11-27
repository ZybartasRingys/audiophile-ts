import { Text, Flex, Image, Link } from "@chakra-ui/react";
import { homeProductsHeadingStyle } from "../HomeStyles";

const Zx9 = () => {
  return (
    <Flex
      width={{ base: "100%" }}
      height={{ base: "37.5rem", md: "45rem", lg: "35rem" }}
      pt={{ md: ".625rem" }}
      pl={{ lg: "9.125rem" }}
      flexDir={{ base: "column", lg: "row" }}
      alignItems={{ base: "center", lg: "start" }}
      justifyContent={{ lg: "start" }}
      overflow="hidden"
      borderRadius=".5rem"
      bgColor="orange.100"
      bgImg={{ base: "/home/desktop/pattern-circles.svg" }}
      bgRepeat="no-repeat"
      bgSize={{ base: "173%", md: "126%", lg: "85%" }}
      bgPos={{
        base: "center -7.6875rem",
        md: "center -15rem",
        lg: "top -1.5rem left -8.5rem ",
      }}
    >
      <Image
        position="relative"
        width={{ base: "10.625rem", md: "11.875rem", lg: "23.75rem" }}
        height={{ base: "12.9375rem", md: "13.625rem", lg: "27.5rem" }}
        src="/home/desktop/image-speaker-zx9.png"
        alt="ZX9"
        loading="lazy"
        mt={{ base: "3.4375rem", md: "3.125rem", lg: "7.6rem" }}
        mr={{ lg: "9.4375rem" }}
      ></Image>
      <Flex
        width={{ base: "86%", md: "21.8125rem" }}
        flexDir={{ base: "column" }}
        textAlign={{ base: "center" }}
        alignItems={{ base: "center", lg: "start" }}
        mt={{ lg: "8.3125rem" }}
        pt={{ base: "2.25rem", md: "4rem", lg: "0" }}
      >
        <Text {...homeProductsHeadingStyle}>ZX9</Text>
        <Text {...homeProductsHeadingStyle}>speaker</Text>
        <Text
          textAlign={{ base: "center", lg: "start" }}
          fontSize=".9375rem"
          lineHeight="1.5625rem"
          opacity="0.75"
          color="white.100"
          mt={{ base: "1.625rem", md: "1.25rem" }}
          mb={{ base: "1.6rem", md: "1.875rem" }}
        >
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Text>

        <Link
          width="10rem"
          height="3rem"
          borderRadius="none"
          color="white.100"
          bgColor="black.200"
          textTransform="uppercase"
          fontSize=".8125rem"
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
    </Flex>
  );
};

export default Zx9;
