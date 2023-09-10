import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";
import { IProduct } from "../../../../types";
import { urlFor } from "../../../../../sanity/sanity";
const Features: React.FC<IProduct> = ({ features, box, productImages }) => {
  return (
    <>
      <Flex flexDir={{ base: "column" }} mt="88px" width="100%">
        <Heading>FEATURES</Heading>
        <Text mt="32px">{features}</Text>

        <Flex flexDir={{ base: "column" }}>
          <Heading>IN THE BOX</Heading>
          <Flex>
            <Flex flexDir={{ base: "column" }}>
              <Text
                color="orange.100"
                fontSize="15px"
                lineHeight="25px"
                mr="10px"
                fontWeight="bold"
              >
                1x
              </Text>

              {/* In The Box Section */}

              <Flex
                border="1px solid red"
                flexDir={{ base: "column" }}
                mb="90px"
              >
                {box.map((item) => (
                  <Flex key={item}>{item}</Flex>
                ))}
              </Flex>

              {/* Product Images Section */}
              <Flex flexDir={{ base: "column" }}>
                {productImages.map((image) => (
                  <Flex width="100%" borderRadius="5px">
                    <Image
                      mb="15px"
                      borderRadius="5px"
                      src={urlFor(image).url()}
                    />
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Features;
