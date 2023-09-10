/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { getProductsBySlug } from "../../../../../sanity/sanity";
import Product from "./Product";
import { IProduct } from "../../../../types";
import { useParams } from "react-router-dom";

const ProductsDetail: React.FC<IProduct> = () => {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const { slug } = useParams();

  useEffect(() => {
    const getData = async () => {
      const allProducts = await getProductsBySlug();
      setProducts(allProducts);
    };
    getData();
  }, []);
  return (
    <>
      <Box>
        <Link href="/">Go back</Link>
      </Box>

      <Flex
        flexDir={{ base: "column" }}
        width="100%"
        height="100%"
        alignItems="center"
      >
        {products
          .filter((product) => product.slug.current == slug)
          .map(({ title, desc, image, slug, price, features, box }) => (
            <Product
              key={title}
              title={title}
              desc={desc}
              image={image}
              slug={slug}
              price={price}
              features={features}
              box={box}
            />
          ))}
      </Flex>
    </>
  );
};

export default ProductsDetail;
