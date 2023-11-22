import { Flex, Image, Link } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  NavLink as RouterLink,
} from "react-router-dom";

const DesktopNav = () => {
  return (
    <Flex width="100%" height="100%" justifyContent="center">
      <Flex
        width="76%"
        height="100%"
        alignItems="center"
        borderBottom="1px solid rgb(151, 151, 151, 0.1)"
        justifyContent="space-between"
      >
        <Flex width="8.9375rem" height="1.5625rem">
          <Image src="/shared/desktop/logo.svg" />
        </Flex>
        <Flex color="white" width="50%" justifyContent="space-between">
          <Link as={RouterLink} to="/">
            Home
          </Link>
          <Link as={RouterLink} to="/headphones" _active={{ bgColor: "red" }}>
            Headphones
          </Link>
          <Link as={RouterLink} to="/">
            Speakers
          </Link>
          <Link as={RouterLink} to="/">
            Earphones
          </Link>
        </Flex>
        <Flex>
          <Image src="/shared/desktop/icon-cart.svg" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DesktopNav;
