// Chakra UI
import { Flex } from "@chakra-ui/react";

//Components
import Header from "../headphones/Header";
import Earphones from "./Earphones";
import Links from "../home/Links";
import Testimonial from "../home/Testimonial";

const EarphonesHome = () => {
  const headerTitle = "earphones";
  return (
    <Flex flexDir={{ base: "column" }} alignItems="center">
      <Header title={headerTitle} />
      <Earphones
        title={"string"}
        desc={"string"}
        image={"string"}
        _id={"string"}
        price={0}
        box={[]}
        productImages={[]}
        unit={[]}
        products={[]}
        isNewProduct={false}
        features1={""}
        features2={""}
        className={""}
        slug={{
          current: "",
        }}
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

export default EarphonesHome;
