import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";

//Context

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

// Styles

const DesktopNav = () => {
  const { onOpen, totalCartQuantity } = useContext(CartContext);

  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="center"
      display={{ base: "none", md: "none", lg: "flex" }}
    >
      <Flex
        width="76%"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px solid rgb(151, 151, 151, 0.2)"
      >
        <Flex width="8.9375rem" height="1.5625rem">
          <Link as={RouterLink} to="/">
            <Image src="/shared/desktop/logo.svg" alt="logo" />
          </Link>
        </Flex>
        <Flex
          color="white"
          width="50%"
          justifyContent="space-between"
          textTransform="uppercase"
        >
          <Link
            as={RouterLink}
            to="/"
            _activeLink={{ color: "orange.100" }}
            fontSize=".8125rem"
            fontFamily="main.100"
            fontWeight="bold"
            letterSpacing=".125rem"
            lineHeight="1.5625rem"
            cursor="pointer"
            _hover={{ textDecoration: "none", color: "orange.100" }}
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            to="/headphones"
            _activeLink={{ color: "orange.100" }}
            fontSize=".8125rem"
            fontFamily="main.100"
            fontWeight="bold"
            letterSpacing=".125rem"
            lineHeight="1.5625rem"
            cursor="pointer"
            _hover={{ textDecoration: "none", color: "orange.100" }}
          >
            Headphones
          </Link>
          <Link
            as={RouterLink}
            to="/speakers"
            _activeLink={{ color: "orange.100" }}
            fontSize=".8125rem"
            fontFamily="main.100"
            fontWeight="bold"
            letterSpacing=".125rem"
            lineHeight="1.5625rem"
            cursor="pointer"
            _hover={{ textDecoration: "none", color: "orange.100" }}
          >
            Speakers
          </Link>
          <Link
            as={RouterLink}
            to="/earphones"
            _activeLink={{ color: "orange.100" }}
            fontSize=".8125rem"
            fontFamily="main.100"
            fontWeight="bold"
            letterSpacing=".125rem"
            lineHeight="1.5625rem"
            cursor="pointer"
            _hover={{ textDecoration: "none", color: "orange.100" }}
          >
            Earphones
          </Link>
        </Flex>
        <Flex>
          <Image
            src="/shared/desktop/icon-cart.svg "
            alt="cart"
            onClick={onOpen}
            cursor="pointer"
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
              right={{ base: "1.7rem", md: "2.5rem", lg: "10.9rem" }}
              top="1.6rem"
            >
              <Text color="white" fontSize=".6875rem">
                {totalCartQuantity}
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DesktopNav;
