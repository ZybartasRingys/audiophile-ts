import { Flex } from "@chakra-ui/react";

//Components
import CheckoutForm from "./CheckoutForm";
import Summary from "./Summary";

const Checkout = () => {
  return (
    <Flex flexDir={{ base: "column" }}>
      Go back
      <CheckoutForm />
      <Summary />
    </Flex>
  );
};

export default Checkout;
