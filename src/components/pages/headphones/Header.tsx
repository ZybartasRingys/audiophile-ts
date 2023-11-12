import { Flex, Heading } from "@chakra-ui/react";

//Types
import { HeaderProps } from "../../../types";

const Header = ({ title }: HeaderProps) => {
  return (
    <Flex
      width="100%"
      height={{ base: "102px", md: "246px" }}
      justifyContent="center"
      alignItems="center"
      bgColor="black.200"
    >
      <Heading
        fontSize={{ base: "28px", md: "40px" }}
        fontWeight="bold"
        color="white.100"
        textTransform="uppercase"
        letterSpacing="2px"
        fontFamily="main.100"
      >
        {title}
      </Heading>
    </Flex>
  );
};

export default Header;
