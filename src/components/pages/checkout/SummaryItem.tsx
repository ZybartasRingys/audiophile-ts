// Chakra
import { urlFor } from "../../../../sanity/sanity";
import { Image, Text, Flex, Box } from "@chakra-ui/react";

//Context
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
// Types
import { CheckoutItemProps, IProduct } from "../../../types";
//Styles props imports
import { SummaryItemPrice, SummaryItemHeading } from "./checkoutStyle";

const CheckoutItem = ({ _id }: CheckoutItemProps) => {
  const { products, getItemsQuantity } = useContext(CartContext);
  const item = products.find((i: IProduct) => i._id === _id);
  if (item === undefined) return null;

  const itemsQuantity = getItemsQuantity(_id);
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      marginBottom="24px"
    >
      <Flex>
        <Flex>
          <Box
            width={{ base: "64px" }}
            height={{ base: "64px" }}
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
      </Flex>

      <Text {...SummaryItemPrice}>x{itemsQuantity}</Text>
    </Flex>
  );
};

export default CheckoutItem;
