import { Flex } from "@chakra-ui/react";
import LinksCard from "./LinksCard";

const Links = () => {
  return (
    <Flex
      width="100%"
      height="100%"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <LinksCard />
    </Flex>
  );
};

export default Links;
