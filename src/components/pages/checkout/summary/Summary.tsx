//Chakra UI

import { Flex, Text, Button, useDisclosure } from "@chakra-ui/react";

//Context
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

//Styles props imports
import { SummaryTotalPrices, SummaryPricesText } from "../checkoutStyle";

//Components
import SummaryItem from "./SummaryItem";
import SummaryModal from "./SummaryModal";

//Type

import { CheckoutFormProps } from "../form/CheckoutForm";

const Summary: React.FC<CheckoutFormProps> = ({ handleSubmit, isValid }) => {
  const { cartItems, products, checkedOption } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = () => {
    handleSubmit();

    if (isValid) {
      onOpen();
    }
    if (checkedOption === "Cash on Delivery") {
      onOpen();
    }
  };

  return (
    <Flex
      width={{ base: "100%", lg: "31%" }}
      height={{ base: "100%" }}
      alignItems="center"
      justifyContent="center"
      mt={{ base: "9", lg: "0" }}
      borderRadius={{ base: ".5rem" }}
    >
      {/*Summary section */}
      <Flex
        width="100%"
        height="100%"
        flexDir={{ base: "column" }}
        bgColor="white.100"
        borderRadius="0.5rem"
        mb={{ base: "5.93rem", lg: "0" }}
      >
        <Text
          fontSize="1.1rem"
          fontWeight="bold"
          color="black.200"
          letterSpacing="1.3px"
          fontFamily="main.100"
          textTransform="uppercase"
          mt={{ base: "2rem" }}
          ml={{ base: "1.rem" }}
          mb={{ base: "0.37rem" }}
          pl={{ base: "24" }}
        >
          Summary
        </Text>

        <Flex flexDir={{ base: "column" }} padding="24">
          {cartItems.map((item) => (
            <SummaryItem key={item._id} {...item} />
          ))}

          <Flex flexDir={{ base: "column" }}>
            <Flex justifyContent="space-between">
              <Text {...SummaryPricesText}> TOTAL</Text>
              <Text {...SummaryTotalPrices}>
                $
                {cartItems
                  .reduce((total, cartItem) => {
                    const item = products.find((i) => i._id === cartItem._id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                  .toLocaleString("en-US")}
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text {...SummaryPricesText}>SHIPPING</Text>
              <Text {...SummaryTotalPrices}>
                {cartItems.length ? "$ 50" : null}
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text {...SummaryPricesText}>{`VAT (INCLUDED)`}</Text>
              <Text {...SummaryTotalPrices}>
                $
                {cartItems
                  .reduce((total, cartItem) => {
                    const item = products.find((i) => i._id === cartItem._id);
                    return total + (item?.price || 0) * cartItem.quantity * 0.2;
                  }, 0)
                  .toLocaleString("en-US")}
              </Text>
            </Flex>
            <Flex justifyContent="space-between" mt={{ base: "24px" }}>
              <Text {...SummaryPricesText}>GRAND TOTAL</Text>
              <Text {...SummaryTotalPrices} color="orange.100">
                $
                {cartItems
                  .reduce((total, cartItem) => {
                    const item = products.find((i) => i._id === cartItem._id);
                    return (
                      total + (item?.price || 0) * cartItem.quantity * 1.2 + 50
                    );
                  }, 0)
                  .toLocaleString("en-US")}
              </Text>
            </Flex>
          </Flex>

          <SummaryModal isOpen={isOpen} onClose={onClose} />

          {cartItems.length ? (
            <Button
              mt="1.5625rem"
              width={{ base: "17.4375rem", md: "38.9375rem", lg: "17.75rem" }}
              height="48px"
              color="white"
              bgColor="orange.100"
              fontSize="13px"
              fontFamily="main.100"
              letterSpacing="1px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontWeight="bold"
              textTransform="uppercase"
              textDecoration="none"
              borderRadius="none"
              onClick={handleForm}
              padding="0"
              _hover={{ bgColor: "orange.200" }}
            >
              Continue & pay
            </Button>
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Summary;
