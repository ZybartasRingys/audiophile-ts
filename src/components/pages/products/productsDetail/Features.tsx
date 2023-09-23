import { Flex, Text, Heading, Image } from "@chakra-ui/react";
import { IProduct } from "../../../../types";
import { urlFor } from "../../../../../sanity/sanity";

const Features: React.FC<IProduct> = ({
  features,
  box,
  productImages,
  unit,
}) => {
  return (
    <>
      <Flex flexDir={{ base: "column" }} mt="88px" width="100%">
        <Heading>FEATURES</Heading>
        <Text mt="32px">{features}</Text>

        <Flex flexDir={{ base: "column" }}>
          <Heading>IN THE BOX</Heading>
          <Flex>
            {/* In The Box Section */}
            <Flex flexDir={{ base: "column" }}>
              <Flex height={{ base: "199px" }}>
                <Flex flexDir={{ base: "column" }} mr={{ base: "24px" }}>
                  {unit.map((number, i) => (
                    <Text
                      color="orange.100"
                      fontSize="15px"
                      lineHeight="25px"
                      key={i}
                    >
                      {number}
                    </Text>
                  ))}
                </Flex>

                <Flex flexDir={{ base: "column" }} mb="90px">
                  {box.map((item) => (
                    <Text fontSize="15px" lineHeight="25px" key={item}>
                      {item}
                    </Text>
                  ))}
                </Flex>
              </Flex>

              {/* In The Box Section End */}

              {/* Product Images Section */}
              <Flex flexDir={{ base: "column" }}>
                {productImages.map((image, index) => (
                  <Flex key={index} width="100%" borderRadius="5px">
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
