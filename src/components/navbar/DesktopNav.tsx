import { Flex, Image, Link } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";

//Context

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

// Styles

import { DesktopNavbarLink } from "../../chakra/appStyles";

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
          <Link as={RouterLink} to="/" {...DesktopNavbarLink}>
            Home
          </Link>
          <Link as={RouterLink} to="/headphones" {...DesktopNavbarLink}>
            Headphones
          </Link>
          <Link as={RouterLink} to="/speakers" {...DesktopNavbarLink}>
            Speakers
          </Link>
          <Link as={RouterLink} to="/earphones" {...DesktopNavbarLink}>
            Earphones
          </Link>
        </Flex>
        <Flex>
          <Image src="/shared/desktop/icon-cart.svg" onClick={onOpen} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DesktopNav;
