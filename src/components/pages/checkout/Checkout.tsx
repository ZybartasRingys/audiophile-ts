//Chakra UI
import { Flex, Text } from "@chakra-ui/react";

// Style props

import { SmallTextOpacity } from "../../../chakra/appStyles";

//Components

import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  return (
    <Flex flexDir={{ base: "column" }} bgColor="white.300">
      <Flex
        width={{ base: "100%" }}
        height={{ base: "65px" }}
        alignItems="center"
        px={{ base: "24px" }}
      >
        <Text {...SmallTextOpacity}>Go Back</Text>
      </Flex>

      <Flex
        width={{ base: "100%" }}
        height={{ base: "100%" }}
        flexDir={{ base: "column" }}
        alignItems="center"
      >
        <CheckoutForm />
      </Flex>
    </Flex>
  );
};

export default Checkout;
