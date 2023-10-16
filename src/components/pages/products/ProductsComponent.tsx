import { urlFor } from "../../../../sanity/sanity";
import { Box, Text, Heading, Flex, Link, Image } from "@chakra-ui/react";

// Types

import { IProduct } from "../../../types";

const ProductsComponent = ({ title, desc, image, slug }: IProduct) => {
  return (
    <Flex flexDir={{ base: "column" }} alignItems="center" mt="62px">
      <Flex
        key={title}
        flexDir={{ base: "column" }}
        width="88%"
        alignItems="center"
        mb="120px"
      >
        <Box
          boxShadow="md"
          height={{ base: "352px" }}
          width="100%"
          borderRadius="10px"
        >
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

        <Text
          mt="30px"
          color="orange.100"
          height="14px"
          letterSpacing="10px"
          fontFamily="main.100"
        >
          NEW PRODUCT
        </Text>
        <Flex
          mt="32px"
          flexDir={{ base: "column" }}
          width="100%"
          textAlign="center"
        >
          <Heading
            size="xl"
            letterSpacing="1px"
            textTransform="uppercase"
            fontFamily="main.100"
            color="black.200"
          >
            {title}
          </Heading>
          <Text
            mt="37px"
            fontFamily="main.100"
            fontSize={{ base: "15px" }}
            lineHeight="25px"
            fontWeight="medium"
            opacity="0.5"
          >
            {desc}
          </Text>
        </Flex>
        <Link
          href={`/products/${slug.current}`}
          mt="30px"
          width="160px"
          height="48px"
          color="white"
          bgColor="orange.100"
          fontSize="13px"
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
