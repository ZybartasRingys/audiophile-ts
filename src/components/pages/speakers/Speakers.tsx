/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty-pattern */
import { useContext } from "react";

import ProductsComponent from "../products/ProductsComponent";
import { Flex } from "@chakra-ui/react";

//Types
import { IProduct } from "../../../types";

//Context
import { AppContext } from "../../../context/AppContext";

const Speakers: React.FC<IProduct> = () => {
  const { speakers } = useContext(AppContext);

  return (
    <Flex
      flexDir={{ base: "column" }}
      width={{ base: "100%" }}
      px={{ base: "24", md: "38" }}
      as="section"
    >
      {speakers
        .slice(0)
        .reverse()
        .map(({ title, desc, image, slug, isNewProduct }) => (
          <ProductsComponent
            title={title}
            desc={desc}
            image={image}
            key={title}
            slug={slug}
            _id={"string"}
            price={0}
            box={[]}
            productImages={[]}
            unit={[]}
            products={[]}
            isNewProduct={isNewProduct}
          />
        ))}
    </Flex>
  );
};

export default Speakers;
