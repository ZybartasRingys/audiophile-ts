import { Flex } from "@chakra-ui/react";
import LinksCard from "./LinksCard";

const Links = () => {
  return (
    <>
      <Flex
        width="100%"
        height="100%"
        flexDir="column"
        alignItems="center"
        justifyContent="space-between"
        pt="25px"
      >
        <LinksCard />
      </Flex>
    </>
  );
};

export default Links;
