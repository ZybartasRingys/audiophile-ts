import { Flex } from "@chakra-ui/react";
import LinksCard from "./LinksCard";

//Cards

import { cards } from "../../../utils/ProductsCards.tsx/ProductsCards";

const Links = () => {
  return (
    <Flex
      width={{ base: "100%" }}
      height={{ base: "41.75rem", md: "10.4375rem", lg: "17.75rem" }}
      flexDir={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent={{ base: "space-between" }}
      mt={{ base: "4.25rem" }}
    >
      {cards.map((card) => (
        <LinksCard
          key={card.heading}
          image={card.image}
          heading={card.heading}
        />
      ))}
    </Flex>
  );
};

export default Links;
