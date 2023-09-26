/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Link } from "@chakra-ui/react";
import Product from "./Product";
import { IProduct } from "../../../../types";
import { useParams } from "react-router-dom";

//Context
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

const ProductsDetail: React.FC<IProduct> = () => {
  const { products } = useContext(CartContext);
  const { slug } = useParams();

  return (
    <>
      <Flex flexDir={{ base: "column" }} alignItems="center">
        <Box
          width="88%"
          textAlign="start"
          mt={{ base: "20px" }}
          mb={{ base: "30px" }}
        >
          <Link href="/">Go back</Link>
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
                features,
                box,
                productImages,
                unit,
                _id,
              }) => (
                <Product
                  key={title}
                  title={title}
                  desc={desc}
                  image={image}
                  slug={slug}
                  price={price}
                  features={features}
                  box={box}
                  productImages={productImages}
                  products={products}
                  unit={unit}
                  _id={_id}
                />
              )
            )}
        </Flex>
      </Flex>
    </>
  );
};

export default ProductsDetail;
