import { Flex, Box, Text, Heading, Image, Button } from "@chakra-ui/react";
import { urlFor } from "../../../../../sanity/sanity";
import { IProduct } from "../../../../types";
import Features from "./Features";
import YouMayAlsoLike from "./YouMayAlsoLike";
import Links from "../../home/Links";
import Testimonial from "../../home/Testimonial";

//Context
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
//Icons
import { HiMiniPlusSmall, HiMiniMinusSmall } from "react-icons/hi2";

const Product: React.FC<IProduct> = ({
  title,
  desc,
  image,
  price,
  features,
  box,
  productImages,
  products,
  slug,
  unit,
  _id,
}) => {
  const { increaseCartQuantity, decreaseCartQuantity, getItemsQuantity } =
    useContext(CartContext);
  const quantity = getItemsQuantity(_id);

  return (
    <>
      <Flex flexDir={{ base: "column" }} width="88%" height="100%">
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
        <Flex flexDir={{ base: "column" }} textAlign="start">
          <Text mt="32px" color="orange.100" height="14px" letterSpacing="10px">
            NEW PRODUCT
          </Text>

          <Heading mt="32px" size="xl">
            {title}
          </Heading>
          <Text
            mt="32px"
            fontSize="14px"
            lineHeight="25px"
            fontWeight="medium"
            opacity="0.6"
          >
            {desc}
          </Text>
          <Text
            fontSize={{ base: "18px" }}
            fontWeight="bold"
            letterSpacing="1.3px"
            mt="32px"
          >
            ${price}
          </Text>
        </Flex>

        {/* Add to cart */}

        <Flex mt="32px">
          <Flex width={{ base: "120px" }} height="48px" bgColor="grey.100">
            <Flex
              width={{ base: "100%" }}
              alignItems="center"
              justifyContent="space-around"
            >
              <Box onClick={() => decreaseCartQuantity(_id)}>
                <HiMiniMinusSmall />
              </Box>

              {quantity}
              <Box
                onClick={() => {
                  increaseCartQuantity(_id);
                }}
              >
                <HiMiniPlusSmall />
              </Box>
            </Flex>
          </Flex>
          <Flex>
            <Button
              width="160px"
              height="48px"
              bgColor="orange.100"
              color="white"
              borderRadius="0px"
              fontSize={{ base: "13px" }}
              letterSpacing="1px"
              onClick={() => increaseCartQuantity(_id)}
            >
              ADD TO CART
            </Button>
          </Flex>
        </Flex>

        {/* Features Component */}
        <Features
          features={features}
          box={box}
          productImages={productImages}
          desc={"string"}
          title={"string"}
          image={"string"}
          slug={"string"}
          price={0}
          unit={unit}
        />

        {/* You May Also Like Section */}

        <YouMayAlsoLike products={products} slug={slug} />

        {/* Links Section */}
        <Links />
        {/* Testimonial Section */}
        <Testimonial />
      </Flex>
    </>
  );
};

export default Product;
