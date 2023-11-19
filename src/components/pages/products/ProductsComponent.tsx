import { urlFor } from "../../../../sanity/sanity";
import { Box, Text, Heading, Flex, Link, Image } from "@chakra-ui/react";

// Types

import { IProduct } from "../../../types";

const ProductsComponent = ({
  title,
  desc,
  image,
  slug,
  isNewProduct,
}: IProduct) => {
  return (
    <Flex
      key={title}
      flexDir={{ base: "column" }}
      width="100%"
      height={{ base: "100%" }}
      alignItems="center"
      mt={{ base: "3.875rem", md: "7.5rem" }}
    >
      <Flex
        boxShadow="sm"
        height={{ base: "22rem" }}
        width="100%"
        borderRadius=".5rem"
        alignItems="center"
        justifyContent="center"
        bgColor="white.300"
      >
        <Box width={{ base: "100%", md: "50%" }} height="100%">
          {image && (
            <Image
              width="100%"
              height="100%"
              borderRadius="10px"
              src={urlFor(image).url()}
              alt={title}
            ></Image>
          )}
        </Box>
      </Flex>

      <Flex
        flexDir={{ base: "column" }}
        alignItems="center"
        width={{ base: "100%", md: "83%" }}
      >
        {isNewProduct === true ? (
          <Text
            mt="2rem"
            color="orange.100"
            fontSize=".875rem"
            letterSpacing="10px"
            fontFamily="main.100"
            textTransform="uppercase"
          >
            New product
          </Text>
        ) : null}
        <Flex
          mt={{ base: "2rem", md: ".9375rem" }}
          flexDir={{ base: "column" }}
          width="100%"
          textAlign="center"
          alignItems={{ base: "center", md: "center" }}
        >
          <Flex
            width={{ base: "80%", md: "55%" }}
            justifyContent={{ base: "center" }}
          >
            <Heading
              fontSize={{ base: "1.75rem", md: "2.5rem" }}
              letterSpacing={{ base: "1px", md: "1.43px" }}
              textTransform="uppercase"
              fontFamily="main.100"
              fontWeight="bold"
              color="black.200"
              lineHeight={{ md: "2.75rem" }}
            >
              {title}
            </Heading>
          </Flex>

          <Text
            mt="1.5625rem"
            fontFamily="main.100"
            fontSize={{ base: ".9375rem" }}
            lineHeight="1.5625rem"
            fontWeight="medium"
            opacity="0.5"
            color="black.200"
          >
            {desc}
          </Text>
        </Flex>
        <Link
          href={`/products/${slug.current}`}
          mt="1.875rem"
          width="10rem"
          height="3rem"
          color="white"
          bgColor="orange.100"
          fontSize=".8125rem"
          letterSpacing="1px"
          fontFamily="main.100"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontWeight="bold"
        >
          SEE PRODUCT
        </Link>
      </Flex>
    </Flex>
  );
};

export default ProductsComponent;
