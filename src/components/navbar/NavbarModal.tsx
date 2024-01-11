// Chakra Ui
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  Image,
  Card,
  CardBody,
  Heading,
  Link,
} from "@chakra-ui/react";

// Types

type NavbarModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

import { cards } from "../../utils/ProductsCards.tsx/ProductsCards";

const NavbarModal: React.FC<NavbarModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bgColor="white"
        width={{ base: "100%", md: "48rem" }}
        height={{ base: "46.875rem" }}
        borderTopRadius="none"
        mt={{ base: "6.125rem", md: "5.4375rem" }}
      >
        <ModalBody>
          {cards.map((card) => (
            <Card
              width={{ base: "100%" }}
              height={{ base: "10.3125rem" }}
              bgColor="white.300"
              mt={{ base: "4.6875rem" }}
              mb={{ base: "4.1875rem" }}
              key={card.heading}
            >
              <CardBody display="flex" alignItems="center" flexDir="column">
                <Box
                  width="8.75rem"
                  height="8.75rem"
                  mt="-4.375rem"
                  bgImage={card.image}
                  bgRepeat="no-repeat"
                  bgPos="bottom"
                  bgSize="cover"
                ></Box>

                <Heading
                  fontSize=".9375rem"
                  fontFamily="main.100"
                  textTransform="uppercase"
                  letterSpacing="1px"
                  mb="1.0625rem"
                >
                  {card.heading}
                </Heading>
                <Link
                  display="flex"
                  alignItems="center"
                  href={card.heading}
                  textTransform="uppercase"
                >
                  <Text
                    fontSize=".8125rem"
                    fontWeight="bold"
                    letterSpacing="1px"
                    opacity="0.6"
                    textDecor="none"
                    _hover={{
                      color: "orange.100",
                      opacity: "1",
                    }}
                  >
                    SHOP
                  </Text>
                  <Image
                    width=".4375rem"
                    height=".75rem"
                    ml=".625rem"
                    src="/shared/desktop/icon-arrow-right.svg"
                  />
                </Link>
              </CardBody>
            </Card>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NavbarModal;
