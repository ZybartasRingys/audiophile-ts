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
//Components
import OrderComfirmItem from "../orderComfirm/OrderComfirmItem";

//Context
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

//Type

type SummaryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SummaryModal: React.FC<SummaryModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, products } = useContext(CartContext);
  return (
    <>
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
                  fontSize=".9375rem"
                  lineHeight="1.5625rem"
                  fontWeight="medium"
                  textTransform="uppercase"
                  color="white.100"
                  fontFamily="main.100"
                  opacity="0.5"
                  mb={{ base: ".3125rem" }}
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
                      const item = products.find((i) => i._id === cartItem._id);
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
              _hover={{ bgColor: "orange.200" }}
            >
              Back to home
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SummaryModal;
