import { Flex } from "@chakra-ui/react";
import LinksCard from "./LinksCard";

const cards = [
  {
    heading: "Headphones",
    image: "/shared/mobile/image-xx99-mark-one-headphones-removebg-preview.png",
  },

  {
    heading: "Speakers",
    image: "/shared/mobile/image-zx9-speaker-removebg-preview.png",
  },

  {
    heading: "Earphones",
    image: "/shared/desktop/image-category-thumbnail-earphones.png",
  },
];

const Links = () => {
  return (
    <Flex
      width={{ base: "100%", md: "100%" }}
      height={{ base: "631px", md: "167px" }}
      flexDir={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent={{ base: "space-between" }}
      mt={{ base: "90px" }}
      px={{ md: "0px" }}
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
