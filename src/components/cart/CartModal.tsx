import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";

// Context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

//Styles
import { SmallTextOpacity, BodyText } from "../../chakra/appStyles";

import CartItem from "./CartItem";

const CartModal = ({ isOpen, onClose }) => {
  const { totalCartQuantity, cartItems, removeAllCartItems, products } =
    useContext(CartContext);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent
        width={{ base: "100%" }}
        maxW={{ md: "23.5625rem" }}
        height={{ base: "30.5rem" }}
        bgColor="white.100"
        mt={{ base: "7.2rem", md: "7.125rem" }}
        mx={{ base: "24" }}
        left={{ md: "9.6875rem", lg: "342px" }}
      >
        {cartItems.length > 0 ? (
          <Flex
            flexDir={{ base: "column" }}
            border="1px solid red"
            width="100%"
            height="100%"
          >
            <Flex
              width={{ base: "100%" }}
              height={{ base: "80px" }}
              justifyContent={{ base: "space-between" }}
              alignItems="center"
              paddingX={{ base: "28px" }}
            >
              <Text {...BodyText} fontWeight="bold" letterSpacing="1.29px">
                CART {`(${totalCartQuantity})`}
              </Text>
              <Text
                bgColor="transparent"
                outline="none"
                textDecor="underline"
                cursor="pointer"
                {...SmallTextOpacity}
                onClick={() => removeAllCartItems()}
                _hover={{ color: "orange.100", opacity: "1" }}
              >
                Remove all
              </Text>
            </Flex>

            <Flex
              width={{ base: "100%" }}
              height={{ base: "276px" }}
              display="flex"
              flexDir={{ base: "column" }}
              paddingY={{ base: "15px" }}
              paddingX={{ base: "28px" }}
            >
              {cartItems.map((item) => (
                <CartItem key={item._id} {...item} />
              ))}
            </Flex>
            <Flex
              width={{ base: "100%" }}
              height={{ base: "140px" }}
              flexDir={{ base: "column" }}
              alignItems="center"
              pt={{ base: "10px" }}
            >
              <Flex
                width={{ base: "100%" }}
                justifyContent="space-between"
                paddingX={{ base: "28px" }}
                mb={{ base: "24px" }}
              >
                <Text {...SmallTextOpacity}>TOTAL</Text>
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "18px" }}
                  fontFamily="main.100"
                  color="black.200"
                >
                  $
                  {cartItems
                    .reduce((total, cartItem) => {
                      const item = products.find((i) => i._id === cartItem._id);
                      return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                    .toLocaleString("en-US")}
                </Text>
              </Flex>

              <Link
                href="/checkout"
                height={{ base: "48px" }}
                width={{ base: "271px", md: "313px" }}
                borderRadius="none"
                bgColor="orange.100"
                color="white.100"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textTransform="uppercase"
                fontSize={{ base: "13px" }}
                letterSpacing={{ base: "1px" }}
                fontWeight="bold"
                fontFamily="main.100"
                _hover={{ bgColor: "orange.200", outline: "none" }}
              >
                Checkout
              </Link>
            </Flex>
          </Flex>
        ) : (
          "CART EMPTY"
        )}
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
