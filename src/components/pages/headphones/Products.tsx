/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { getProducts } from "../../../../sanity/sanity";
import { urlFor } from "../../../../sanity/sanity";
import { Box, Text, Heading, Flex, Link, Image } from "@chakra-ui/react";
interface Product {
  desc: "string";
  title: "string";
}

const Products = (props: Product) => {
  const [products, setProducts] = useState([] as any[]);
  console.log(products);

  useEffect(() => {
    const getData = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    getData();
  }, []);
  return (
    <Flex flexDir={{ base: "column" }} alignItems="center" mt="62px">
      {products.map((product) => (
        <Flex
          flexDir={{ base: "column" }}
          width="89%"
          alignItems="center"
          mt="120px"
        >
          <Box height={{ base: "352px" }} width="100%" borderRadius="10px">
            {product.image && (
              <Image
                width="100%"
                height="100%"
                borderRadius="10px"
                src={urlFor(product.image).url()}
                alt={product.title}
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
              {product.title}
            </Heading>
            <Text mt="37px">{product.desc}</Text>
          </Flex>
          <Link
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
      ))}
    </Flex>
  );
};

export default Products;
