import { urlFor } from "../../../sanity/sanity";
import { Box, Text, Heading, Flex, Link, Image } from "@chakra-ui/react";

interface Ispeakers {
  title: "string";
  desc: "string";
  image: "string";
  slug: "string";
}

const ProductsComponent = ({ title, desc, image, slug }: Ispeakers) => {
  return (
    <Flex flexDir={{ base: "column" }} alignItems="center" mt="62px">
      <Flex
        key={title}
        flexDir={{ base: "column" }}
        width="89%"
        alignItems="center"
        mb="120px"
      >
        <Box height={{ base: "352px" }} width="100%" borderRadius="10px">
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
        <Text mt="25px" color="orange.100" height="14px" letterSpacing="10px">
          NEW PRODUCT
        </Text>
        <Flex
          mt="32px"
          flexDir={{ base: "column" }}
          width="100%"
          textAlign="center"
        >
          <Heading size="xl" letterSpacing="1px" textTransform="uppercase">
            {title}
          </Heading>
          <Text mt="37px">{desc}</Text>
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
