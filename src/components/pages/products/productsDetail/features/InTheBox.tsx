// Chakra UI
import { Flex, Text, Heading } from "@chakra-ui/react";

// App styles
import { Heading5, BodyText } from "../../../../../chakra/appStyles";

type InTheBoxProps = {
  unit: Array<string>;
  box: Array<string>;
};

const InTheBox: React.FC<InTheBoxProps> = ({ unit, box }) => {
  return (
    <Flex
      width={{ md: "87%", lg: "55%" }}
      flexDir={{ base: "column", md: "row", lg: "column" }}
      mt={{ base: "5.5rem", lg: "0" }}
    >
      <Heading
        {...Heading5}
        letterSpacing={{ base: ".0537rem", md: ".0712rem" }}
        mb="1.5rem"
        mr={{ md: "9.25rem", lg: "9.0625rem" }}
      >
        IN THE BOX
      </Heading>
      <Flex height={{ base: "9.8125rem" }}>
        {/* Unit */}
        <Flex
          flexDir={{ base: "column" }}
          height={{ base: "9.8125rem" }}
          justifyContent="space-between"
          mr={{ base: "1.5rem" }}
        >
          {unit.map((number, i) => (
            <Text
              color="orange.100"
              fontSize=".9375rem"
              lineHeight="1.5625rem"
              fontFamily="main.100"
              fontWeight="bold"
              key={i}
            >
              {number}
            </Text>
          ))}
        </Flex>
        {/* Box item */}
        <Flex
          flexDir={{ base: "column" }}
          height={{ base: "9.8125rem" }}
          justifyContent="space-between"
          mb="5.625rem"
        >
          {box.map((item) => (
            <Text {...BodyText} fontSize="15px" opacity="0.5" key={item}>
              {item}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InTheBox;
