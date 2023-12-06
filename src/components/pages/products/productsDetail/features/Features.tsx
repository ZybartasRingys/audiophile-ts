// Chakra UI
import { Flex, Text, Heading } from "@chakra-ui/react";
// Types
import { IProduct } from "../../../../../types";
// Sanity

// Css file
import "./Features.css";

//Components
import ProductImages from "./ProductImages";
import InTheBox from "./InTheBox";
const Features: React.FC<IProduct> = ({
  features,
  box,
  productImages,
  unit,
}) => {
  return (
    <>
      <Flex flexDir={{ base: "column" }} mt="5.5rem" width="100%" height="100%">
        {/* Features Text Section */}
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          width={{ lg: "100%" }}
          height="100%"
          mb={{ base: "5.5rem", md: "7.5rem" }}
        >
          <Flex
            flexDir={{ base: "column", lg: "column" }}
            width="100%"
            mr={{ lg: "7.5rem" }}
          >
            <Heading
              mb={{ base: "1.5rem", md: "2rem" }}
              fontSize={{ base: "1.5rem", lg: "2rem" }}
              fontWeight="bold"
              lineHeight={{ base: "2.25rem" }}
              letterSpacing={{ base: ".0537rem", lg: ".0712rem" }}
              fontFamily="main.100"
              color="black.200"
            >
              FEATURES
            </Heading>
            <Text
              fontSize={{ base: ".9375rem" }}
              fontFamily="main.100"
              lineHeight={{ base: "1.5625rem" }}
              fontWeight="medium"
              opacity="0.5"
              color="black.200"
            >
              {features}
            </Text>
          </Flex>

          {/* Features Text End */}

          {/* In The Box Section */}
          <InTheBox unit={unit} box={box} />
          {/* In The Box Section End */}
        </Flex>

        {/* Product Images Section */}

        <ProductImages productImages={productImages} />

        {/* Product Images Section End */}
      </Flex>
    </>
  );
};

export default Features;
