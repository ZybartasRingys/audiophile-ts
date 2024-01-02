// Chakra
import { urlFor } from "../../../../../sanity/sanity";
import { Image, Text, Flex, Box } from "@chakra-ui/react";

//Context
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

// Types
import { CheckoutItemProps, IProduct } from "../../../../types";

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
      marginBottom="1.5rem"
      pt={{ base: "1.5rem" }}
      width="100%"
    >
      {/* Item */}
      <Flex width="100%" borderBottom="1px solid rgba(0,0,0,0.1)" pb="15px">
        <Flex width={{ base: "100%" }}>
          <Box
            width={{ base: "3.125rem" }}
            height={{ base: "3.125rem" }}
            mr={{ base: "1.125rem" }}
          >
            {item.image && (
              <Image
                width="100%"
                height="100%"
                borderRadius="0.5rem"
                src={urlFor(item.image).url()}
                alt={item.title}
              ></Image>
            )}
          </Box>

          <Flex flexDir={{ base: "column" }}>
            <Text
              fontSize=".9375rem"
              fontWeight="bold"
              fontFamily="main.100"
              lineHeight="1.5625rem"
              color="black.200"
            >
              {item.title.replace("Headphones", "").replace("speaker", "")}
            </Text>
            <Text
              fontSize={{ base: ".875rem" }}
              fontWeight="bold"
              fontFamily="main.100"
              lineHeight="1.5625rem"
              opacity="0.5"
              color="black.200"
            >
              $ {item.price.toLocaleString("en-US")}
            </Text>
          </Flex>
        </Flex>

        <Text
          fontSize=".9375rem"
          lineHeight="1.5625rem"
          fontWeight="bold"
          opacity="0.5"
          fontFamily="main.100"
          color="black.200"
        >
          x{itemsQuantity}
        </Text>
      </Flex>

      {/* Item */}

      {otherItemsQuantity <= 1 ? (
        <Flex
          width={{ base: "100%" }}
          justifyContent="center"
          mt={{ base: ".8125rem" }}
        >
          <Text
            fontSize={{ base: ".75rem" }}
            fontFamily="main.100"
            fontWeight="bold"
            letterSpacing="-0.0131rem"
            opacity="0.5"
            color="black.200"
          >
            and {otherItemsQuantity} other {`item`}
          </Text>
        </Flex>
      ) : (
        <Flex
          width={{ base: "100%" }}
          justifyContent="center"
          mt={{ base: ".8125rem" }}
        >
          <Text
            fontSize={{ base: ".75rem" }}
            fontFamily="main.100"
            fontWeight="bold"
            letterSpacing="-0.0131rem"
            opacity="0.5"
            color="black.200"
          >
            and {otherItemsQuantity} other {`item(s)`}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default OrderComfirmItem;
