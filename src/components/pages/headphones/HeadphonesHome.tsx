import { Flex } from "@chakra-ui/react";

import Header from "./Header";
import Links from "../home/Links";
import Headphones from "./Headphones";
import Testimonial from "../home/Testimonial";

const HeadphonesHome = () => {
  const headerTitle: string = "headphones";
  return (
    <Flex
      flexDir={{ base: "column" }}
      alignItems="center"
      width={{ base: "100%" }}
    >
      <Header title={headerTitle} />
      <Headphones
        desc={"string"}
        title={"string"}
        image={"string"}
        _id={"string"}
        price={0}
        box={[]}
        productImages={[]}
        unit={[]}
        products={[]}
        isNewProduct={false}
        slug={{
          current: "",
        }}
        features1={""}
        features2={""}
        className={""}
      />
      <Flex
        width={{ base: "100%" }}
        flexDir={{ base: "column" }}
        alignItems={{ md: "center" }}
        px={{ base: "24px", md: "38px", lg: "10.3125rem" }}
      >
        <Links />
        <Testimonial />
      </Flex>
    </Flex>
  );
};

export default HeadphonesHome;
