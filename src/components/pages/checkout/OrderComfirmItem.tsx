// Chakra
import { urlFor } from "../../../../sanity/sanity";
import { Image, Text, Flex, Box } from "@chakra-ui/react";

//Context
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

// Types
import { CheckoutItemProps, IProduct } from "../../../types";

const OrderComfirmItem = ({ _id }: CheckoutItemProps) => {
  const { products, getItemsQuantity } = useContext(CartContext);
  const item = products.find((i: IProduct) => i._id === _id);
  if (item === undefined) return null;

  const itemsQuantity = getItemsQuantity(_id);
  return (
    <Flex
      justifyContent="space-between"
      flexDir={{ base: "column" }}
      marginBottom="24px"
      width="100%"
    >
      {/* Item */}
      <Flex width="100%" borderBottom="1px solid #979797" pb="15px">
        <Flex width={{ base: "100%" }}>
          <Box
            width={{ base: "28px" }}
            height={{ base: "32px" }}
            mr={{ base: "18px" }}
          >
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

          <Flex flexDir={{ base: "column" }} border="1px solid red">
            <Text fontSize="15px" fontWeight="bold">
              {item.title.replace("Headphones", "").replace("speaker", "")}
            </Text>
            <Text fontSize="12px"> $ {item.price.toLocaleString("en-US")}</Text>
          </Flex>
        </Flex>

        <Text
          fontSize="15px"
          lineHeight="25px"
          fontWeight="bold"
          opacity="0.6"
          fontFamily="manrope"
        >
          x{itemsQuantity}
        </Text>
      </Flex>

      {/* Item */}
    </Flex>
  );
};

export default OrderComfirmItem;
