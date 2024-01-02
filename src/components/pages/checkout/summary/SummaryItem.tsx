// Chakra
import { urlFor } from "../../../../../sanity/sanity";
import { Image, Text, Flex, Box } from "@chakra-ui/react";

//Context
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
// Types
import { CheckoutItemProps, IProduct } from "../../../../types";
//Styles props imports
import { SummaryItemPrice, SummaryItemHeading } from "../checkoutStyle";

const CheckoutItem = ({ _id }: CheckoutItemProps) => {
  const { products, getItemsQuantity } = useContext(CartContext);
  const item = products.find((i: IProduct) => i._id === _id);
  if (item === undefined) return null;

  const itemsQuantity = getItemsQuantity(_id);
  return (
    <Flex flexDir={{ base: "column" }} mb={{ base: "1.5rem" }}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex>
          <Box
            width={{ base: "4rem" }}
            height={{ base: "4rem" }}
            mr={{ base: "1.1rem" }}
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

          <Flex
            flexDir={{ base: "column" }}
            justifyContent="center"
            width={{ base: "90px" }}
            height={{ base: "64px" }}
          >
            <Text {...SummaryItemHeading}>
              {item.title.replace("Headphones", "").replace("speaker", "")}
            </Text>
            <Text {...SummaryItemPrice}>
              $ {item.price.toLocaleString("en-US")}
            </Text>
          </Flex>
        </Flex>

        <Text {...SummaryItemPrice}>x{itemsQuantity}</Text>
      </Flex>
    </Flex>
  );
};

export default CheckoutItem;
