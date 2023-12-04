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
      mt={{ base: "7.5rem" }}
    >
      <Heading
        {...Heading5}
        letterSpacing="0.86px"
        mb={{ base: "2.5rem", md: "3.5rem" }}
      >
        YOU MAY ALSO LIKE
      </Heading>
      <Flex flexDir={{ base: "column", md: "row" }} width={{ base: "100%" }}>
        {products
          .slice(0, 3)
          .filter((product) => product.slug.current !== slug.current)
          .map((item: { title: string; image: string }) => (
            <Flex
              key={item.title}
              width={{ md: "100%" }}
              flexDir={{ base: "column" }}
              alignItems="center"
              height={{ base: "16.5625rem", md: "29.4375rem" }}
              mb={{ base: "3.5rem" }}
              alignContent="space-between"
            >
              <Flex
                width={{ base: "100%", md: "96%" }}
                height={{ base: "7.5rem", md: "19.875rem" }}
                justifyContent="center"
                alignItems={{ md: "center" }}
                bgColor="white.300"
                mb={{ base: "2rem" }}
                borderRadius=".5rem"
              >
                <Image
                  width={{ md: "100%" }}
                  height={{ base: "120px", md: "90%" }}
                  mb={{ base: "1.875rem", md: "2.5rem" }}
                  borderRadius="10px"
                  src={urlFor(item.image).url()}
                  alt={item.title}
                ></Image>
              </Flex>
              <Heading {...Heading5} mb={{ base: "2rem" }}>
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
    </Flex>
  );
};

export default YouMayAlsoLike;
