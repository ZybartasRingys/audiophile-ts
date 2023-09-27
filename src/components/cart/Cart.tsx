import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  Image,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";

// Context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import CartItem from "./CartItem";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { totalCartQuantity, cartItems, removeAllCartItems, products } =
    useContext(CartContext);

  return (
    <>
      <Image
        src="/shared/desktop/icon-cart.svg"
        cursor="pointer"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          width={{ base: "89%" }}
          height={{ base: "488px" }}
          bgColor="white"
          mt={{ base: "85px" }}
        >
          <ModalHeader>
            <Flex justifyContent={{ base: "space-between" }}>
              <Text>CART {`(${totalCartQuantity})`}</Text>
              <Button onClick={() => removeAllCartItems()}>Remove All</Button>
            </Flex>
          </ModalHeader>
          <ModalBody>
            {cartItems.map((item) => (
              <CartItem key={item._id} {...item} />
            ))}
          </ModalBody>
          <ModalFooter>
            <Flex flexDir={{ base: "column" }}>
              <Flex justifyContent="space-between">
                <Text>TOTAL</Text>
                <Text fontWeight="bold">
                  $
                  {cartItems.reduce((total, cartItem) => {
                    const item = products.find((i) => i._id === cartItem._id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)}
                </Text>
              </Flex>

              <Link
                href="/checkout"
                height={{ base: "48px" }}
                width={{ base: "271px" }}
                borderRadius="none"
                bgColor="orange.100"
                color="white"
              >
                Checkout
              </Link>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Cart;
