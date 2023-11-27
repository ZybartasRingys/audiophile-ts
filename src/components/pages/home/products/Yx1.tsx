import { Box, Heading, Flex, Link } from "@chakra-ui/react";

//Styles
import { homeProductsHeadingStyle2, seeProductButton } from "../HomeStyles";

const Yx1 = () => {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      mt={{ base: "1.25rem", md: "2rem" }}
      width={{ md: "100%" }}
      justifyContent={{ md: "space-between" }}
      gap={{ md: ".6875rem", lg: "1.875rem" }}
    >
      <Box
        borderRadius=".625rem"
        width={{ base: "100%" }}
        height={{ base: "12.5rem", md: "20rem" }}
        bgImg={{
          base: "/home/mobile/image-earphones-yx1.jpg",
          md: "/home/tablet/image-earphones-yx1.jpg",
          lg: "/home/desktop/image-earphones-yx1.jpg",
        }}
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        mb={{ base: "1.5rem", md: "0px" }}
      ></Box>
      <Flex
        width={{ base: "100%" }}
        height={{ base: "12.5rem", md: "20rem" }}
        bgColor="white.300"
        flexDir={{ base: "column" }}
        justifyContent="center"
        pl="1.5625rem"
        borderRadius=".625rem"
      >
        <Heading {...homeProductsHeadingStyle2} mb="2.125rem">
          yx1 earphones
        </Heading>
        <Link {...seeProductButton}>See product</Link>
      </Flex>
    </Flex>
  );
};

export default Yx1;
