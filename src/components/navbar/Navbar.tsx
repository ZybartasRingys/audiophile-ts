import { Flex } from "@chakra-ui/react";
import MobileNav from "./MobilenNavbar";

import DesktopNav from "./DesktopNav";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      width={{ base: "100%" }}
      height="5.4375rem"
      bgColor="black.300"
    >
      <MobileNav />
      <DesktopNav />
    </Flex>
  );
};

export default Navbar;
