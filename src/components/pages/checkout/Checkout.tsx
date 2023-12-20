//Chakra UI
import { Flex, Text } from "@chakra-ui/react";

// Style props

import { SmallTextOpacity } from "../../../chakra/appStyles";

//Components

import CheckoutForm from "./form/CheckoutForm";

const Checkout = () => {
  return (
    <Flex
      flexDir={{ base: "column" }}
      px={{ base: "24", md: "47", lg: "10.3125rem" }}
      bgColor="grey"
    >
      <Flex
        width={{ base: "100%" }}
        height={{ base: "100%" }}
        alignItems="center"
        mt={{ base: "1rem", md: "3rem" }}
        mb={{ base: "1.5rem" }}
      >
        <Text {...SmallTextOpacity} _hover={{color:"orange.100", cursor:"pointer"}}>Go Back</Text>
      </Flex>

      <Flex
        width={{ base: "100%" }}
        height={{ base: "100%" }}
        flexDir={{ base: "column" }}
        alignItems="center"
      >
        <CheckoutForm name={"string"} />
      </Flex>
    </Flex>
  );
};

export default Checkout;
