import { Flex } from "@chakra-ui/react";

import Header from "./Header";
import Links from "../home/Links";
import Headphones from "./Headphones";
import Testimonial from "../home/Testimonial";

const HeadphonesHome = () => {
  const headerTitle: string = "headphones";
  return (
    <Flex flexDir={{ base: "column" }} alignItems="center">
      <Header title={headerTitle} />
      <Headphones
        desc={"string"}
        title={"string"}
        image={"string"}
        slug={"string"}
        _id={"string"}
        price={0}
        box={[]}
        productImages={[]}
        unit={[]}
        products={[]}
        isNewProduct={false}
      />
      <Flex
        width={{ base: "87%", md: "100%" }}
        flexDir={{ base: "column" }}
        alignItems={{ md: "center" }}
      >
        <Links />
        <Testimonial />
      </Flex>
    </Flex>
  );
};

export default HeadphonesHome;
