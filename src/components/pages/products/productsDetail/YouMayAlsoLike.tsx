import { Flex, Heading, Box, Button, Image } from "@chakra-ui/react";
import { urlFor } from "../../../../../sanity/sanity";
import { IProduct } from "../../../../types";
const YouMayAlsoLike: React.FC<IProduct> = ({ products, slug }) => {
  return (
    <Flex
      flexDir={{ base: "column" }}
      textAlign="center"
      alignContent="center"
      mt={{ base: "120px" }}
    >
      <Heading mb="50px">YOU MAY ALSO LIKE</Heading>
      {products
        .filter((product) => product.slug.current !== slug.current)
        .map((item: { title: string; image: string }) => (
          <Flex
            key={item.title}
            flexDir={{ base: "column" }}
            alignItems="center"
            height={{ base: "265px" }}
            alignContent="space-between"
          >
            <Box width="100%">
              <Image
                width="100%"
                height={{ base: "120px" }}
                borderRadius="10px"
                src={urlFor(item.image).url()}
                alt={item.title}
              ></Image>
            </Box>
            <Heading size="sm">{item.title}</Heading>
            <Box>
              <Button
                width="160px"
                height="48px"
                bgColor="orange.100"
                color="white"
                borderRadius="0px"
                fontSize={{ base: "13px" }}
                letterSpacing="1px"
              >
                SEE PRODUCT
              </Button>
            </Box>
          </Flex>
        ))}
    </Flex>
  );
};

export default YouMayAlsoLike;
