import { useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Link } from "@chakra-ui/react";
import Product from "./Product";
import { IProduct } from "../../../../types";
import { useParams } from "react-router-dom";

//Context
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

//sanity

import { getProductsBySlug } from "../../../../../sanity/sanity";

const ProductsDetail: React.FC<IProduct> = () => {
  const { products, setProducts } = useContext(CartContext);
  const { slug } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductsBySlug(slug);
      console.log(products);
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Flex
        flexDir={{ base: "column" }}
        width={{ base: "100%" }}
        height={{ base: "100%" }}
        alignItems="center"
        justifyContent="center"
        as="section"
      >
        <Box
          width="100%"
          textAlign="start"
          px={{ base: "22", md: "38", lg: "10.3125rem" }}
          mt={{ base: "1.25rem", md: "24", lg: "5rem" }}
          mb={{ base: "1.25rem", md: "24", lg: "3.5rem" }}
        >
          <Link
            fontSize=".9375rem"
            color="black.200"
            fontFamily="main.100"
            fontWeight="medium"
            lineHeight="1.5625rem"
            opacity="0.5"
            href="/"
          >
            Go Back
          </Link>
        </Box>

        <Flex
          flexDir={{ base: "column" }}
          width="100%"
          height="100%"
          alignItems="center"
        >
          {products
            .filter((product: IProduct) => product.slug.current == slug)
            .map(
              ({
                title,
                desc,
                image,
                slug,
                price,
                features1,
                features2,
                box,
                productImages,
                unit,
                _id,
                isNewProduct,
              }) => (
                <Product
                  key={title}
                  title={title}
                  desc={desc}
                  image={image}
                  slug={slug}
                  price={price}
                  features1={features1}
                  features2={features2}
                  box={box}
                  productImages={productImages}
                  products={products}
                  unit={unit}
                  _id={_id}
                  isNewProduct={isNewProduct}
                  className={""}
                />
              )
            )}
        </Flex>
      </Flex>
    </>
  );
};

export default ProductsDetail;
