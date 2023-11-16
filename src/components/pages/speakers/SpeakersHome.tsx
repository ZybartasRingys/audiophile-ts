import Speakers from "./Speakers";
import Header from "../headphones/Header";
import Links from "../home/Links";
import Testimonial from "../home/Testimonial";
import { Flex } from "@chakra-ui/react";

const SpeakersHome = () => {
  const headerTitle = "speakers";
  return (
    <Flex
      flexDir={{ base: "column" }}
      alignItems="center"
      width={{ base: "100%" }}
    >
      <Header title={headerTitle} />
      <Speakers
        title={"string"}
        desc={"string"}
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
        width={{ base: "100%" }}
        flexDir={{ base: "column" }}
        alignItems={{ md: "center" }}
        px={{ base: "24px", md: "38px" }}
      >
        <Links />
        <Testimonial />
      </Flex>
    </Flex>
  );
};

export default SpeakersHome;
