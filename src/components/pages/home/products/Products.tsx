import { Flex } from "@chakra-ui/react";

// Styles imports

import { seeProductButton, homeProductsHeadingStyle2 } from "../HomeStyles";

//Components

import Zx9 from "./Zx9";
import Zx7 from "./Zx7";
import Yx1 from "./Yx1";

const Products = () => {
  return (
    <Flex
      flexDir={{ base: "column" }}
      height="100%"
      mt={{ base: "7.5rem", md: "6rem" }}
      width="100%"
      alignItems={{ md: "center" }}
    >
      {/* ZX 9 SPEAKER */}
      <Zx9 />
      {/* ZX 9 SPEAKER END */}

      {/* ZX 7 SPEAKER */}
      <Zx7 />
      {/* ZX 7 SPEAKER END */}

      {/* YX1 EARPHONES */}
      <Yx1 />
      {/* YX1 EARPHONES END */}
    </Flex>
  );
};

export default Products;
