// Chakra
import { urlFor } from "../../../sanity/sanity";
import { Image, Text, Button, Flex, Box } from "@chakra-ui/react";

// Types
import { CartItemProps, IProduct } from "../../types";

//Context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

//icons

import { HiMiniPlusSmall } from "react-icons/hi2";

const CartItem = ({ _id, quantity }: CartItemProps) => {
  const { removeFromCart, products } = useContext(CartContext);
  console.log(products);
  console.log(_id);

  const item = products.find((i: IProduct) => i._id === _id);

  if (item === null) return null;
  return (
    <Flex>
      <Box>
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
      <Flex>
        <Text>{item.title}</Text>
        <Text>{item.price}</Text>
      </Flex>
      <Flex
        width={{ base: "96px" }}
        height={{ base: "32px" }}
        bgColor="grey.100"
      >
        <Box>
          <HiMiniPlusSmall />
        </Box>
        <Button></Button>
        <Box></Box>
      </Flex>
    </Flex>
  );
};
export default CartItem;
