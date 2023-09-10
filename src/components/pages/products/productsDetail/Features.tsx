import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import { IProduct } from "../../../../types";

const Features: React.FC<IProduct> = ({ features, box }) => {
  console.log(box);
  return (
    <>
      <Flex flexDir={{ base: "column" }} mt="88px" width="89%">
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

              <Flex border="1px solid red" flexDir={{ base: "column" }}>
                {box.map((item) => (
                  <Flex key={item}>{item}</Flex>
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
