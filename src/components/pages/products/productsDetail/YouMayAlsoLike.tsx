// Chakra UI

import { Flex, Heading, Image, Link } from "@chakra-ui/react";

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
      width={{ base: "100%" }}
      textAlign="center"
      alignContent="center"
      mt={{ base: "120px" }}
    >
      <Heading {...Heading5} letterSpacing="0.86px" mb="50px">
        YOU MAY ALSO LIKE
      </Heading>
      {products
        .slice(0, 3)
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
            <Flex
              width="100%"
              height={{ base: "120px" }}
              justifyContent="center"
              bgColor="white.300"
              mb={{ base: "30px" }}
              borderRadius="8px"
            >
              <Image
                height={{ base: "120px" }}
                mb={{ base: "30px" }}
                borderRadius="10px"
                src={urlFor(item.image).url()}
                alt={item.title}
              ></Image>
            </Flex>
            <Heading {...Heading5} mb={{ base: "30px" }}>
              {item.title.replace("Headphones", "")}
            </Heading>

            <Link
              width="160px"
              height="48px"
              bgColor="orange.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              borderRadius="0px"
              fontFamily="main.100"
              fontWeight="medium"
              fontSize={{ base: "13px" }}
              letterSpacing="1px"
              href={`/products/${slug.current}`}
            >
              SEE PRODUCT
            </Link>
          </Flex>
        ))}
    </Flex>
  );
};

export default YouMayAlsoLike;
