import { Heading, Flex, Link } from "@chakra-ui/react";

//Styles

import { homeProductsHeadingStyle2, seeProductButton } from "../HomeStyles";

const Zx7 = () => {
  return (
    <Flex
      width={{ base: "100%" }}
      flexDir={{ base: "column" }}
      justifyContent="center"
      height={{ base: "20rem" }}
      mt={{ base: "1.25rem", md: "2rem" }}
      bgImage={{
        base: "/home/mobile/image-speaker-zx7.jpg",
        md: "/home/tablet/image-speaker-zx7.jpg",
        lg: "/home/desktop/image-speaker-zx7.jpg",
      }}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      pl="1.5625rem"
      letterSpacing=".125rem"
      textTransform="uppercase"
      borderRadius=".5rem"
    >
      <Heading {...homeProductsHeadingStyle2} mb="2rem">
        ZX7 speaker
      </Heading>
      <Link href="/products/zx7-speaker" {...seeProductButton}>
        See product
      </Link>
    </Flex>
  );
};

export default Zx7;
