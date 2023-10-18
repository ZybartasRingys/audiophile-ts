// Chakra UI

import { Flex, Heading, Box, Button, Image } from "@chakra-ui/react";

// Sanity
import { urlFor } from "../../../../../sanity/sanity";

//Types
import { IProduct } from "../../../../types";

// Styles

import { Heading5 } from "../../../../chakra/appStyles";

const YouMayAlsoLike: React.FC<IProduct> = ({ products, slug }) => {
  return (
    <Flex
      flexDir={{ base: "column" }}
      textAlign="center"
      alignContent="center"
      mt={{ base: "120px" }}
    >
      <Heading {...Heading5} letterSpacing="0.86px" mb="50px">
        YOU MAY ALSO LIKE
      </Heading>
      {products
        .filter((product) => product.slug.current !== slug.current)
        .map((item: { title: string; image: string }) => (
          <Flex
            key={item.title}
            flexDir={{ base: "column" }}
            alignItems="center"
            height={{ base: "265px" }}
            mb={{ base: "56px" }}
            alignContent="space-between"
          >
            <Box width="100%">
              <Image
                width="100%"
                height={{ base: "120px" }}
                mb={{ base: "30px" }}
                borderRadius="10px"
                src={urlFor(item.image).url()}
                alt={item.title}
              ></Image>
            </Box>
            <Heading {...Heading5} mb={{ base: "30px" }}>
              {item.title}
            </Heading>
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
