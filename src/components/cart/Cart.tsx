// Chakra Ui
import { Image } from "@chakra-ui/react";

// Context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

// Modal
import CartModal from "./CartModal";

const Cart = () => {
  const { isOpen, onClose, onOpen } = useContext(CartContext);

  return (
    <>
      <Image
        src="/shared/desktop/icon-cart.svg"
        cursor="pointer"
        onClick={onOpen}
      />

      <CartModal isOpen={isOpen} onClose={onClose} children={undefined} />
    </>
  );
};

export default Cart;
