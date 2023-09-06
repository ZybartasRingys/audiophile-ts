/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Box, Text, Heading, Flex, Button } from "@chakra-ui/react";
import { getAllProducts } from "../../../../sanity/sanity";
import Product from "./Product";

interface IProduct {
  desc: "string";
  title: "string";
  image: "string";
  slug: "string";
}

const ProductsDetail: React.FC<IProduct> = () => {
  const [products, setProducts] = useState([] as any[]);
  console.log(products);
  useEffect(() => {
    const getData = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
    };
    getData();
  }, []);
  return (
    <Flex flexDir={{ base: "column" }}>
      <Box>Go back</Box>

      {products.map(({ title, desc, image, slug }) => (
        <Product
          title={title}
          desc={desc}
          image={image}
          key={title}
          slug={slug}
        />
      ))}
    </Flex>
  );
};

export default ProductsDetail;
