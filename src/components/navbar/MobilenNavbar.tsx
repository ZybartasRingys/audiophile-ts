import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";
import Cart from "../cart/Cart";
const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg="black.200"
      height="60px"
      px="20px"
      borderBottom="1px solid #979797"
    >
      <Flex height="100%" justifyContent="space-between" alignItems="center">
        <GiHamburgerMenu onClick={onOpen} fill="white" size={20} />
        <Text color="white" fontSize="25px" fontWeight="700">
          audiophile
        </Text>

        <Cart />

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bgColor="white" height={{ base: "700px" }}>
            <ModalBody></ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
};

export default MobileNav;
