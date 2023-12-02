/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import "./Headphones.css";

// Chakra UI
import { Flex } from "@chakra-ui/react";

//Types
import { IProduct } from "../../../types";

//Context
import { AppContext } from "../../../context/AppContext";

//Components
import ProductsComponent from "../products/ProductsComponent";

const Headphones: React.FC<IProduct> = () => {
  const { headphones } = useContext(AppContext);

  console.log(headphones);

  return (
    <Flex
      flexDir={{ base: "column" }}
      width={{ base: "100%" }}
      px={{ base: "24", md: "38", lg: "10.3125rem" }}
      mb={{ md: "4.6875rem" }}
    >
      {headphones
        .slice(0)
        .reverse()
        .map(({ title, desc, image, slug, isNewProduct }) => (
          <ProductsComponent
            title={title}
            desc={desc}
            image={image}
            slug={slug}
            _id={"string"}
            price={0}
            box={[]}
            productImages={[]}
            unit={[]}
            products={[]}
            isNewProduct={isNewProduct}
            key={title}
            className={`${slug.current}`}
          />
        ))}
    </Flex>
  );
};

export default Headphones;
