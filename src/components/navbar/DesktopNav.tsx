import { Flex, Image, Link } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";

//Context

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

// Styles

const DesktopNav = () => {
  const { onOpen } = useContext(CartContext);

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
            <Image src="/shared/desktop/logo.svg" />
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
            src="/shared/desktop/icon-cart.svg"
            onClick={onOpen}
            cursor="pointer"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DesktopNav;
