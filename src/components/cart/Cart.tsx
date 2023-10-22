import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
  Image,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";

//Styles
import { SmallTextOpacity, BodyText } from "../../chakra/appStyles";

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
          <Flex
            width={{ base: "100%" }}
            height={{ base: "80px" }}
            justifyContent={{ base: "space-between" }}
            alignItems="center"
            paddingX={{ base: "28px" }}
          >
            <Text {...BodyText} fontWeight="bold">
              CART {`(${totalCartQuantity})`}
            </Text>
            <Text
              bgColor="transparent"
              outline="none"
              textDecor="underline"
              {...SmallTextOpacity}
              onClick={() => removeAllCartItems()}
            >
              Remove all
            </Text>
          </Flex>

          <Flex
            width={{ base: "100%" }}
            height={{ base: "276px" }}
            display="flex"
            flexDir={{ base: "column" }}
            justifyContent="space-between"
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
            justifyContent="space-around"
          >
            <Flex
              width={{ base: "100%" }}
              justifyContent="space-between"
              paddingX={{ base: "28px" }}
            >
              <Text {...SmallTextOpacity}>TOTAL</Text>
              <Text fontWeight="bold">
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
              width={{ base: "271px" }}
              borderRadius="none"
              bgColor="orange.100"
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              textTransform="uppercase"
            >
              Checkout
            </Link>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Cart;
