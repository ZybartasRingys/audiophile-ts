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
  isNewProduct,
}) => {
  const { increaseCartQuantity, decreaseCartQuantity, getItemsQuantity } =
    useContext(CartContext);
  const quantity = getItemsQuantity(_id);

  return (
    <>
      <Flex
        flexDir={{ base: "column" }}
        width="87%"
        height="100%"
        alignItems="center"
      >
        <Box height={{ base: "327px" }} width="100%" borderRadius="10px">
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
          {isNewProduct === true ? (
            <Text
              mt="32px"
              mb={{ base: "30px" }}
              color="orange.100"
              fontSize="14px"
              letterSpacing="10px"
              textTransform="uppercase"
            >
              New product
            </Text>
          ) : null}

          <Heading
            fontSize={{ base: "28px" }}
            letterSpacing="1px"
            textTransform="uppercase"
            fontFamily="main.100"
            fontWeight="bold"
            color="black.200"
          >
            {title}
          </Heading>
          <Text
            mt={{ base: "32px" }}
            fontFamily="main.100"
            fontSize={{ base: "15px" }}
            lineHeight="25px"
            fontWeight="medium"
            opacity="0.5"
          >
            {desc}
          </Text>
          <Text
            fontSize={{ base: "18px" }}
            fontWeight="bold"
            fontFamily="main.100"
            letterSpacing="1.3px"
            mt="32px"
          >
            $ {price}
          </Text>
        </Flex>

        {/* Add to cart */}

        <Flex
          mt="32px"
          width={{ base: "91%" }}
          height={{ base: "48px" }}
          justifyContent="space-between"
        >
          <Flex width={{ base: "120px" }} height="48px" bgColor="white.300">
            <Flex
              width={{ base: "100%" }}
              alignItems="center"
              justifyContent="space-around"
            >
              <Box opacity="0.5">
                <HiMiniMinusSmall onClick={() => decreaseCartQuantity(_id)} />
              </Box>

              <Text fontSize="13px" fontWeight="bold" fontFamily="main.100">
                {quantity}
              </Text>

              <Box opacity="0.5">
                <HiMiniPlusSmall
                  onClick={() => {
                    increaseCartQuantity(_id);
                  }}
                />
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
          _id={"string"}
          products={[]}
          isNewProduct={false}
        />

        {/* You May Also Like Section */}

        <YouMayAlsoLike
          products={products}
          slug={slug}
          desc={"string"}
          title={"string"}
          image={"string"}
          _id={"string"}
          price={0}
          box={[]}
          productImages={[]}
          unit={[]}
          isNewProduct={false}
        />

        {/* Links Section */}
        <Links />
        {/* Testimonial Section */}
        <Testimonial />
      </Flex>
    </>
  );
};

export default Product;
