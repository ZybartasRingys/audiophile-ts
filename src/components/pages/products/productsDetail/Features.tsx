import { Flex, Text, Heading, Image, Grid, GridItem } from "@chakra-ui/react";
import { IProduct } from "../../../../types";
import { urlFor } from "../../../../../sanity/sanity";
import { Heading5, BodyText } from "../../../../chakra/appStyles";
const Features: React.FC<IProduct> = ({
  features,
  box,
  productImages,
  unit,
}) => {
  return (
    <>
      <Flex flexDir={{ base: "column" }} mt="88px" width="100%">
        <Flex flexDir={{ base: "column" }} mb={{ base: "90px" }}>
          <Heading
            mb={{ base: "32px" }}
            fontSize={{ base: "24px" }}
            fontWeight="bold"
            lineHeight={{ base: "36px" }}
            letterSpacing={{ base: "0.86px" }}
            fontFamily="main.100"
            color="black.200"
          >
            FEATURES
          </Heading>
          <Text
            fontSize={{ base: "15px" }}
            fontFamily="main.100"
            lineHeight={{ base: "25px" }}
            fontWeight="medium"
            opacity="0.5"
            color="black.200"
          >
            {features}
          </Text>
        </Flex>

        <Flex flexDir={{ base: "column", md: "row" }}>
          <Flex
            border="1px solid red"
            flexDir={{ base: "column" }}
            width={{ md: "100%" }}
          >
            {/* In The Box Section */}
            <Flex
              width={{ md: "87%" }}
              flexDir={{ base: "column", md: "row" }}
              justifyContent={{ md: "space-between" }}
            >
              <Heading
                {...Heading5}
                letterSpacing={{ base: "0.86px", md: "1.14px" }}
                mb="24px"
              >
                IN THE BOX
              </Heading>
              <Flex height={{ base: "157px" }} mb={{ base: "90px" }}>
                {/* Unit */}
                <Flex
                  flexDir={{ base: "column" }}
                  height={{ base: "157px" }}
                  justifyContent="space-between"
                  mr={{ base: "24px" }}
                >
                  {unit.map((number, i) => (
                    <Text
                      color="orange.100"
                      fontSize="15px"
                      lineHeight="25px"
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
                  height={{ base: "157px" }}
                  justifyContent="space-between"
                  mb="90px"
                >
                  {box.map((item) => (
                    <Text
                      {...BodyText}
                      fontSize="15px"
                      opacity="0.5"
                      key={item}
                    >
                      {item}
                    </Text>
                  ))}
                </Flex>
              </Flex>

              {/* In The Box Section End */}
            </Flex>
            {/* Product Images Section */}
            <Grid
              height={{ base: "756px", md: "368px" }}
              borderRadius="5px"
              border="2px solid green"
              templateColumns={{ md: "repeat(2,1fr) 2fr" }}
              templateRows={{ md: "50% 50%" }}
              gridAutoFlow={{ md: "column" }}
              gridAutoColumns={{}}
              gap={"15px"}
              mt="15px"
            >
              {productImages.map((image, index) => (
                <GridItem
                  key={index}
                  width="100%"
                  h="100%"
                  border="1px solid red"
                >
                  <Image
                    mb="20px"
                    width={{ md: "100%" }}
                    height={{ md: "100%" }}
                    borderRadius="5px"
                    src={urlFor(image).url()}
                  />
                </GridItem>
              ))}
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Features;
