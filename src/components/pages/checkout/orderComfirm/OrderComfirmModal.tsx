import {
  Flex,
  Text,
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

//components
import OrderComfirmItem from "./OrderComfirmItem";

//Types

import { ModalProps } from "@chakra-ui/react";

const OrderComfirmModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, products } = useContext(CartContext);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bgColor="white.100"
          width={{ base: "100%" }}
          height={{ base: "37.5rem" }}
          display="flex"
          alignItems="center"
        >
          <ModalHeader width={{ base: "86%" }} pl="0" mt="1.0625rem">
            <Image src="/checkout/icon-order-confirmation.svg" />
          </ModalHeader>

          <ModalBody height={{ base: "23.1875rem" }}>
            <Flex
              flexDir={{ base: "column" }}
              width={{ base: "16.4375rem" }}
              pt="0"
            >
              <Text
                fontSize="1.5rem"
                lineHeight="1.75rem"
                fontWeight="bold"
                letterSpacing=".0563rem"
                mb="1.25rem"
              >
                THANK YOU FOR YOUR ORDER
              </Text>
              <Text
                fontSize="15px"
                lineHeight="25px"
                color="grey.100"
                mb="25px"
              >
                You will receive an email confirmation shortly.
              </Text>
            </Flex>

            <Flex flexDir="column">
              <Flex
                width={{ base: "100%" }}
                borderTopRadius="8px"
                flexDir="column"
                height={{ base: "140px" }}
                justifyContent="space-evenly"
                padding="24px"
                bgColor="white.300"
              >
                {cartItems.map((item, index) => {
                  if (index === 0) {
                    return <OrderComfirmItem key={item._id} {...item} />;
                  }
                })}
              </Flex>

              <Flex
                width={{ base: "100%" }}
                height={{ base: "92px" }}
                flexDir={{ base: "column" }}
                bgColor="black"
                borderBottomRadius="8px"
                color="white"
                padding="20px"
              >
                <Text
                  mb="10px"
                  fontSize="15px"
                  lineHeight="25px"
                  textTransform="uppercase"
                  color="grey.100"
                >
                  Grand total
                </Text>
                <Text
                  fontSize={{ base: "18px" }}
                  fontWeight="bold"
                  border="1px solid red"
                >
                  $
                  {cartItems.reduce((total, cartItem) => {
                    const item = products.find((i) => i._id === cartItem._id);
                    return (
                      total + (item?.price || 0) * cartItem.quantity * 1.2 + 50
                    );
                  }, 0)}
                </Text>
              </Flex>
            </Flex>

            <Link
              width="263px"
              height="48px"
              mt="24px"
              color="white"
              bgColor="orange.100"
              fontSize="13px"
              letterSpacing="1px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontWeight="bold"
              textTransform="uppercase"
              borderRadius="none"
              href="/"
              _hover={{ bgColor: "orange.100" }}
            >
              Back to home
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OrderComfirmModal;
