// Chakra
import { urlFor } from "../../../sanity/sanity";
import { Image, Text, Flex, Box } from "@chakra-ui/react";

// Types
import { CartItemProps, IProduct } from "../../types";

//Context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

//icons

import { HiMiniPlusSmall, HiMiniMinusSmall } from "react-icons/hi2";

const CartItem = ({ _id }: CartItemProps) => {
  const {
    products,
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemsQuantity,
  } = useContext(CartContext);

  const item = products.find((i: IProduct) => i._id === _id);
  if (item === null) return null;
  const cartQuantity = getItemsQuantity(_id);

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Box width={{ base: "64px" }} height={{ base: "64px" }}>
        {item.image && (
          <Image
            width="100%"
            height="100%"
            borderRadius="10px"
            src={urlFor(item.image).url()}
            alt={item.title}
          ></Image>
        )}
      </Box>
      <Flex
        flexDir={{ base: "column" }}
        width={{ base: "76px" }}
        height={{ base: "50px" }}
      >
        <Text fontSize="11px">{item.title}</Text>
        <Text fontSize="15px">$ {item.price}</Text>
      </Flex>
      <Flex
        width={{ base: "96px" }}
        height={{ base: "32px" }}
        bgColor="grey.100"
      >
        <Flex
          width={{ base: "100%" }}
          alignItems="center"
          justifyContent="space-around"
          bgColor="white.300"
        >
          <Box onClick={() => decreaseCartQuantity(_id)}>
            <HiMiniMinusSmall />
          </Box>

          {cartQuantity}
          <Box
            onClick={() => {
              increaseCartQuantity(_id);
            }}
          >
            <HiMiniPlusSmall />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default CartItem;
