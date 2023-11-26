import { Flex } from "@chakra-ui/react";
import LinksCard from "./LinksCard";

const cards = [
  {
    heading: "Headphones",
    image: "shared/desktop/image-category-thumbnail-headphones.png",
  },

  {
    heading: "Speakers",
    image: "/shared/desktop/image-category-thumbnail-speakers.png",
  },

  {
    heading: "Earphones",
    image: "/shared/desktop/image-category-thumbnail-earphones.png",
  },
];

const Links = () => {
  return (
    <Flex
      width={{ base: "100%" }}
      height={{ base: "41.75rem", md: "10.4375rem", lg: "17.75rem" }}
      flexDir={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent={{ base: "space-between" }}
      mt={{ base: "4.5625rem" }}
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
