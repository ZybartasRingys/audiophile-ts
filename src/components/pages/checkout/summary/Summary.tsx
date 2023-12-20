//Chakra UI

import {
  Flex,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Image,
  Link,
} from "@chakra-ui/react";

//Context
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

//Styles props imports
import { SummaryTotalPrices, SummaryPricesText } from "../checkoutStyle";

//Components

import OrderComfirmItem from "../orderComfirm/OrderComfirmItem";
import SummaryItem from "./SummaryItem";

const Summary = ({ handleSubmit, errors }) => {
  const { cartItems, products } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    handleSubmit();
    onOpen();
  };
  return (
    <Flex
      width={{ base: "100%", lg: "31%" }}
      height={{ base: "100%", lg: "38.75rem" }}
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

          {/* MODAL */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              bgColor="white.100"
              width={{ base: "87%", md: "33.75rem" }}
              height={{ base: "37.5rem", md: "36.3125rem" }}
              maxW="xl"
              display="flex"
              alignItems="center"
              p={{ base: "0.5rem", md: "1.5rem" }}
              mt={{ base: "13.75rem", md: "13.5625rem" }}
            >
              <ModalHeader
                width={{ base: "86%" }}
                mt={{ base: "2rem" }}
                p={{ base: "0" }}
              >
                <Image src="/checkout/icon-order-confirmation.svg" />
              </ModalHeader>

              <ModalBody
                height={{ base: "23.1875rem" }}
                width="100%"
                py={{ base: "0rem" }}
              >
                <Flex
                  flexDir={{ base: "column" }}
                  width={{ base: "16.4375rem", md: "100%" }}
                  mt={{ base: "1.4375rem" }}
                >
                  <Text
                    fontSize={{ base: "1.5rem", md: "2rem" }}
                    lineHeight={{ base: "1.75rem", md: "2.25rem" }}
                    fontWeight="bold"
                    letterSpacing="1.14px"
                    color="black.200"
                    mb={{ base: "1rem" }}
                  >
                    THANK YOU <br /> FOR YOUR ORDER
                  </Text>
                  <Text
                    fontSize=".9375rem"
                    lineHeight="1.5625rem"
                    color="black.200"
                    opacity="0.5"
                    fontWeight="medium"
                    mb={{ base: "1.5rem", md: "2.0625rem" }}
                  >
                    You will receive an email confirmation shortly.
                  </Text>
                </Flex>

                <Flex
                  flexDir={{ base: "column", md: "row" }}
                  width={{ base: "100%" }}
                >
                  <Flex
                    width={{ base: "100%" }}
                    flexDir="column"
                    height={{ base: "140px" }}
                    justifyContent="space-evenly"
                    padding="24px"
                    bgColor="white.300"
                    borderTopRightRadius={{ base: "0.5rem", md: "0" }}
                    borderTopLeftRadius={{ base: "0.5rem", md: "0.5rem" }}
                    borderBottomLeftRadius={{ base: "0", md: "0.5rem" }}
                  >
                    {cartItems.map((item, index) => {
                      if (index === 0) {
                        return <OrderComfirmItem key={item._id} {...item} />;
                      }
                    })}
                  </Flex>

                  <Flex
                    width={{ base: "100%", md: "80%" }}
                    height={{ base: "92px", md: "8.75rem" }}
                    flexDir={{ base: "column" }}
                    justifyContent={{ md: "center" }}
                    bgColor="black.200"
                    borderBottomRadius={{ base: "0.5rem", md: "0" }}
                    borderTopRightRadius={{ base: "0", md: "0.5rem" }}
                    borderBottomRightRadius={{ base: "0.5rem", md: "0.5rem" }}
                    color="white.100"
                    paddingX={{ base: "1.5rem" }}
                    py={{ base: "1.0625rem" }}
                  >
                    <Text
                      fontSize="15px"
                      lineHeight="25px"
                      fontWeight="medium"
                      textTransform="uppercase"
                      color="white.100"
                      fontFamily="main.100"
                      opacity="0.5"
                      mb={{ base: "5px" }}
                    >
                      Grand total
                    </Text>
                    <Text
                      fontSize={{ base: "18px" }}
                      fontWeight="bold"
                      fontFamily="main.100"
                    >
                      $ &nbsp;
                      {cartItems
                        .reduce((total, cartItem) => {
                          const item = products.find(
                            (i) => i._id === cartItem._id
                          );
                          return (
                            total +
                            (item?.price || 0) * cartItem.quantity * 1.2 +
                            50
                          );
                        }, 0)
                        .toLocaleString("en-US")}
                    </Text>
                  </Flex>
                </Flex>

                <Link
                  width={{ base: "16.4375rem", md: "27.75rem" }}
                  height="3rem"
                  mt={{ base: "1.5rem", md: "2.875rem" }}
                  color="white"
                  bgColor="orange.100"
                  fontSize=".8125rem"
                  letterSpacing=".0625rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  fontWeight="bold"
                  fontFamily="main.100"
                  textTransform="uppercase"
                  borderRadius="none"
                  href="/"
                  _hover={{bgColor:'orange.200'}}
              
                >
                  Back to home
                </Link>
              </ModalBody>
            </ModalContent>
          </Modal>

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
              onClick={handleClick}
              disabled={errors}
              padding="0"
              _hover={{bgColor:"orange.200"}}
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
