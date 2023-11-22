import { Flex } from "@chakra-ui/react";
import MobileNav from "./MobilenNavbar";

import { useWindowWidth } from "@react-hook/window-size";

type NavbarProps = {
  windowWidth: number;
};

import DesktopNav from "./DesktopNav";

const Navbar: React.FC<NavbarProps> = () => {
  const onlyWidth = useWindowWidth();
  return (
    <Flex
      as="nav"
      width={{ base: "100%" }}
      height="5.4375rem"
      bgColor="black.300"
    >
      {onlyWidth >= 992 ? <DesktopNav /> : <MobileNav />}
    </Flex>
  );
};

export default Navbar;
