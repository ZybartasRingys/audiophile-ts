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
//Components
import CartItem from "./CartItem";
// React Icons
import { MdOutlineAddShoppingCart } from "react-icons/md";
// Types
import { ModalProps } from "@chakra-ui/react";

const CartModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
        left={{ md: "9.6875rem", lg: "21.375rem" }}
      >
        {cartItems.length > 0 ? (
          <Flex flexDir={{ base: "column" }} width="100%" height="100%">
            <Flex
              width={{ base: "100%" }}
              height={{ base: "80px" }}
              justifyContent={{ base: "space-between" }}
              alignItems="center"
              paddingX={{ base: "1.75rem" }}
            >
              <Text {...BodyText} fontWeight="bold" letterSpacing=".0806rem">
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
              height={{ base: "8.75rem" }}
              flexDir={{ base: "column" }}
              alignItems="center"
              pt={{ base: ".625rem" }}
            >
              <Flex
                width={{ base: "100%" }}
                justifyContent="space-between"
                paddingX={{ base: "1.75rem" }}
                mb={{ base: "1.5rem" }}
              >
                <Text {...SmallTextOpacity}>TOTAL</Text>
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "1.125rem" }}
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
                height={{ base: "3rem" }}
                width={{ base: "16.9375rem", md: "19.5625rem" }}
                borderRadius="none"
                bgColor="orange.100"
                color="white.100"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textTransform="uppercase"
                fontSize={{ base: ".8125rem" }}
                letterSpacing={{ base: ".0625rem" }}
                fontWeight="bold"
                fontFamily="main.100"
                _hover={{ bgColor: "orange.200", outline: "none" }}
                _focus={{ outline: "none" }}
              >
                Checkout
              </Link>
            </Flex>
          </Flex>
        ) : (
          <Flex
            width="100%"
            height="100%"
            flexDir={{ base: "column" }}
            alignItems={{ base: "center" }}
            justifyContent={{ base: "center" }}
          >
            <Text
              fontFamily="main.100"
              fontSize="1.375rem"
              fontWeight="bold"
              mb={{ base: "1.5625rem" }}
            >
              Your cart is empty
            </Text>
            <MdOutlineAddShoppingCart size={130} />
          </Flex>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
