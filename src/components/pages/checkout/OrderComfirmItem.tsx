// Chakra
import { urlFor } from "../../../../sanity/sanity";
import { Image, Text, Flex, Box } from "@chakra-ui/react";

//Context
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

// Types
import { CheckoutItemProps, IProduct } from "../../../types";

const OrderComfirmItem = ({ _id }: CheckoutItemProps) => {
  const { products, getItemsQuantity, totalCartQuantity } =
    useContext(CartContext);
  const item = products.find((i: IProduct) => i._id === _id);
  if (item === undefined) return null;

  const itemsQuantity = getItemsQuantity(_id);
  const otherItemsQuantity = totalCartQuantity - 1;
  return (
    <Flex
      justifyContent="space-between"
      flexDir={{ base: "column" }}
      marginBottom="24px"
      pt={{ base: "24px" }}
      width="100%"
    >
      {/* Item */}
      <Flex width="100%" borderBottom="1px solid #979797" pb="15px">
        <Flex width={{ base: "100%" }}>
          <Box
            width={{ base: "50px" }}
            height={{ base: "50px" }}
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

          <Flex flexDir={{ base: "column" }}>
            <Text
              fontSize="15px"
              fontWeight="bold"
              fontFamily="main.100"
              lineHeight="25px"
            >
              {item.title.replace("Headphones", "").replace("speaker", "")}
            </Text>
            <Text
              fontSize={{ base: "14px" }}
              fontWeight="bold"
              fontFamily="main.100"
              lineHeight="25px"
              opacity="0.5"
            >
              $ {item.price.toLocaleString("en-US")}
            </Text>
          </Flex>
        </Flex>

        <Text
          fontSize="15px"
          lineHeight="25px"
          fontWeight="bold"
          opacity="0.6"
          fontFamily="main.100"
        >
          x{itemsQuantity}
        </Text>
      </Flex>

      {/* Item */}
      <Flex
        width={{ base: "100%" }}
        justifyContent="center"
        mt={{ base: "13px" }}
      >
        <Text
          fontSize={{ base: "12px" }}
          fontFamily="main.100"
          fontWeight="bold"
          letterSpacing="-0.21px"
          opacity="0.5"
        >
          and {otherItemsQuantity} other {`items(s)`}
        </Text>
      </Flex>
    </Flex>
  );
};

export default OrderComfirmItem;
