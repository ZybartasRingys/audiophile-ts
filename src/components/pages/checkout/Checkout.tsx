import { Flex } from "@chakra-ui/react";

//Components
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  return (
    <Flex flexDir={{ base: "column" }}>
      Go back
      <CheckoutForm />
    </Flex>
  );
};

export default Checkout;
