import { Flex, Heading } from "@chakra-ui/react";
type Props = {
  title: "string";
};

const Header = ({ title }: Props) => {
  return (
    <Flex
      width="100%"
      height={{ base: "102px" }}
      justifyContent="center"
      alignItems="center"
      bgColor="black.200"
    >
      <Heading
        fontSize="28px"
        color="white"
        textTransform="uppercase"
        letterSpacing="2px"
      >
        {title}
      </Heading>
    </Flex>
  );
};

export default Header;
