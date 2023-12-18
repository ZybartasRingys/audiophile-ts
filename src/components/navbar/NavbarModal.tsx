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

type NavbarModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

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
        border="1px solid red"
      >
        <ModalBody>
          {/* Headphones Card */}
          <Card
            width={{ base: "100%" }}
            height={{ base: "10.3125rem" }}
            bgColor="white.300"
            mt={{ base: "4.6875rem" }}
            mb={{ base: "4.1875rem" }}
          >
            <CardBody display="flex" alignItems="center" flexDir="column">
              <Box
                width="8.75rem"
                height="8.75rem"
                mt="-4.375rem"
                bgImage="url('/shared/desktop/image-category-thumbnail-headphones.png')"
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
                Headphones
              </Heading>
              <Link
                display="flex"
                alignItems="center"
                href="/headphones"
                textTransform="uppercase"
              >
                <Text
                  fontSize=".8125rem"
                  fontWeight="bold"
                  letterSpacing="1px"
                  opacity="0.6"
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
          {/* Headphones Card */}

          {/* Speaker Card */}
          <Card
            width={{ base: "100%" }}
            height={{ base: "10.3125rem" }}
            bgColor="white.300"
            mb={{ base: "4.25rem" }}
          >
            <CardBody display="flex" alignItems="center" flexDir="column">
              <Box
                width="8.75rem"
                height="8.75rem"
                mt="-5.625rem"
                bgImage="url('/shared/mobile/image-zx9-speaker-removebg-preview.png')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                mb=".625rem"
              ></Box>
              <Heading
                fontSize=".9375rem"
                fontFamily="main.100"
                textTransform="uppercase"
                letterSpacing="1px"
                mb="1.25rem"
              >
                Speakers
              </Heading>
              <Link
                display="flex"
                alignItems="center"
                href="/speakers"
                textTransform="uppercase"
              >
                <Text
                  fontSize="13px"
                  fontWeight="bold"
                  letterSpacing="1px"
                  opacity="0.6"
                >
                  SHOP
                </Text>
                <Image
                  width="7px"
                  height="12px"
                  ml="10px"
                  src="/shared/desktop/icon-arrow-right.svg"
                />
              </Link>
            </CardBody>
          </Card>
          {/* Speaker  Card */}

          {/* Earphones Card */}
          <Card
            width={{ base: "100%" }}
            height={{ base: "10.3125rem" }}
            bgColor="white.300"
          >
            <CardBody display="flex" alignItems="center" flexDir="column">
              <Box
                width="8.75rem"
                height="8.75rem"
                mt="-4.375rem"
                bgImage="url('/public/shared/desktop/image-category-thumbnail-earphones.png')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              ></Box>
              <Heading
                fontSize=".9375rem"
                fontFamily="main.100"
                textTransform="uppercase"
                letterSpacing="1px"
                mt={{ base: "-0.625rem" }}
                mb="1.25rem"
              >
                Earphones
              </Heading>
              <Link
                display="flex"
                alignItems="center"
                href="/earphones"
                textTransform="uppercase"
              >
                <Text
                  fontSize=".8125rem"
                  fontWeight="bold"
                  letterSpacing="1px"
                  opacity="0.6"
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NavbarModal;
