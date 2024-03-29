// Chakra UI
import { Flex, Box, Text, Heading, Image, Button } from "@chakra-ui/react";
import { urlFor } from "../../../../../sanity/sanity";

// Types
import { IProduct } from "../../../../types";

// Components
import Features from "./features/Features";
import YouMayAlsoLike from "./YouMayAlsoLike";
import Links from "../../home/Links";
import Testimonial from "../../home/Testimonial";

//Context
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
//Icons
import { HiMiniPlusSmall, HiMiniMinusSmall } from "react-icons/hi2";

//React toast

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product: React.FC<IProduct> = ({
  title,
  desc,
  image,
  price,
  features1,
  features2,
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

  const addToCartWithToast = (_id: string) => {
    toast.success("Item added to cart", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    increaseCartQuantity(_id);
  };

  return (
    <>
      <Flex
        flexDir={{ base: "column" }}
        width={{ base: "100%" }}
        height="100%"
        alignItems="center"
        justifyContent="center"
        px={{ base: "24", md: "38", lg: "10.3125rem" }}
      >
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent={{ md: "space-between" }}
          alignItems={{ md: "center" }}
          gap={{ md: "3.625rem", lg: "125px" }}
        >
          <Flex
            height={{ base: "327px", md: "480px", lg: "560px" }}
            width={{ base: "100%" }}
            borderRadius="8px"
            bgColor="white.300"
            alignItems={{ md: "center" }}
            justifyContent={{ md: "center" }}
          >
            {image && (
              <Image
                width={{ base: "100%", md: "90%", lg: "100%" }}
                height={{ base: "100%", md: "60%", lg: "100%" }}
                borderRadius=".5rem"
                src={urlFor(image).url()}
                alt={title}
                loading="lazy"
              ></Image>
            )}
          </Flex>
          <Flex
            flexDir={{ base: "column" }}
            textAlign="start"
            width={{ base: "100%", md: "100%", lg: "83%" }}
            height={{ md: "100%" }}
            alignItems={{ md: "start" }}
          >
            {isNewProduct === true ? (
              <Text
                mt={{ base: "2rem", md: "0px" }}
                mb={{ base: "1.5rem", md: "17px" }}
                color="orange.100"
                fontSize={{ base: ".875rem" }}
                fontFamily="main.100"
                letterSpacing=".625rem"
                textTransform="uppercase"
              >
                New product
              </Text>
            ) : (
              <Flex width={{ base: "100%" }} height={{ base: "2.5rem" }} />
            )}
            <Flex width={{ base: "62%" }}>
              <Heading
                fontSize={{ base: "1.75rem", lg: "2.5rem" }}
                letterSpacing="1px"
                textTransform="uppercase"
                fontFamily="main.100"
                fontWeight="bold"
                color="black.200"
              >
                {title}
              </Heading>
            </Flex>

            <Text
              mt={{ base: "2rem" }}
              fontFamily="main.100"
              color="black.200"
              fontSize={{ base: ".9375rem" }}
              lineHeight="1.5625rem"
              fontWeight="medium"
              opacity="0.5"
            >
              {desc}
            </Text>
            <Text
              fontSize={{ base: "1.125rem" }}
              fontWeight="bold"
              fontFamily="main.100"
              color="black.200"
              letterSpacing="1.3px"
              mt="1.875rem"
            >
              $ {price}
            </Text>

            {/* Add to cart */}

            <Flex
              mt="2.1875rem"
              width={{ base: "100%" }}
              height={{ base: "3rem" }}
            >
              <Flex
                width={{ base: "7.5rem" }}
                mr={{ base: "1rem" }}
                height="3rem"
                bgColor="white.300"
              >
                <Flex
                  width={{ base: "100%" }}
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <Box opacity="0.5" cursor="pointer">
                    <HiMiniMinusSmall
                      _hover={{ fill: "orange.200" }}
                      onClick={() => decreaseCartQuantity(_id)}
                    />
                  </Box>

                  <Text
                    fontSize=".8125rem"
                    fontWeight="bold"
                    fontFamily="main.100"
                    color="black.200"
                  >
                    {quantity}
                  </Text>

                  <Box opacity="0.5" cursor="pointer">
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
                  width="10rem"
                  height="3rem"
                  bgColor="orange.100"
                  _hover={{ bgColor: "orange.200" }}
                  color="white"
                  borderRadius="0px"
                  fontSize={{ base: ".8125rem" }}
                  letterSpacing="1px"
                  onClick={() => addToCartWithToast(_id)}
                >
                  ADD TO CART
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* Features Component */}
        <Features
          features1={features1}
          features2={features2}
          box={box}
          productImages={productImages}
          desc={"string"}
          title={"string"}
          image={"string"}
          slug={slug}
          price={0}
          unit={unit}
          _id={"string"}
          products={[]}
          isNewProduct={false}
          className={""}
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
          className={""}
          features1={""}
          features2={""}
          item={{
            image: "",
            price: 0,
            title: "",
            slug: "",
          }}
        />

        {/* Links Section */}
        <Links />
        {/* Testimonial Section */}
        <Testimonial />

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Flex>
    </>
  );
};

export default Product;
