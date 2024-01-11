// Chakra Ui
import { Image, Flex, Text } from "@chakra-ui/react";

// Context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

// Modal
import CartModal from "./CartModal";

const Cart = () => {
  const { isOpen, onClose, onOpen, totalCartQuantity } =
    useContext(CartContext);

  return (
    <>
      <Image
        src="/shared/desktop/icon-cart.svg"
        cursor="pointer"
        onClick={onOpen}
        alt="cart-icon"
      />

      {totalCartQuantity <= 0 ? null : (
        <Flex
          width=".75rem"
          height=".8125rem"
          fontFamily="main.100"
          bgColor="orange.100"
          color="white.100"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          right="2.5rem"
          top="2rem"
        >
          <Text color="white" fontSize=".6875rem">
            {totalCartQuantity}
          </Text>
        </Flex>
      )}

      <CartModal isOpen={isOpen} onClose={onClose} children={undefined} />
    </>
  );
};

export default Cart;
