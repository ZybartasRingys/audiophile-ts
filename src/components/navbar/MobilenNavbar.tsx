import { Box, Flex, useDisclosure, Image, Link } from "@chakra-ui/react";

import Cart from "../cart/Cart";
import NavbarModal from "./NavbarModal";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      width={{ base: "100%", md: "100%" }}
      height="100%"
      justifyContent="space-between"
      alignItems="center"
      px={{ base: "1.5rem", md: "0" }}
      mx={{ md: "38" }}
      borderBottom="1px solid rgb(151, 151, 151, 0.2)"
      display={{ base: "flex", lg: "none" }}
    >
      <Flex
        width={{ base: "70%" }}
        alignItems="center"
        justifyContent={{ base: "space-between", md: "start" }}
      >
        <Box
          onClick={onOpen}
          bgColor="transparent"
          _hover={{ bgColor: "transparent" }}
          width={{ base: "16px" }}
          height={{ base: "15px" }}
          cursor="pointer"
          mr={{ md: "40px" }}
        >
          <Image
            src="shared/tablet/icon-hamburger.svg"
            alt="hamburger"
            loading="lazy"
          />
        </Box>

        <Link href="/">
          <Image
            loading="lazy"
            src="/shared/desktop/logo.svg"
            alt="logo"
            cursor="pointer"
          />
        </Link>
      </Flex>

      {/* Navbar Modal */}
      <NavbarModal isOpen={isOpen} onClose={onClose} />
      {/* Navbar Modal */}

      <Cart />
    </Flex>
  );
};

export default MobileNav;
