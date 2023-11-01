import { Flex } from "@chakra-ui/react";
import Banner from "./Banner";
import Links from "./Links";
import Products from "./Products";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <Flex
      flexDir={{ base: "column" }}
      alignItems="center"
      width={{ base: "100%" }}
      height={{ base: "100%" }}
    >
      <Banner />
      <Flex
        width={{ base: "87%" }}
        height={{ base: "100%" }}
        flexDir={{ base: "column" }}
        alignItems="center"
      >
        <Links />
        <Products />
        <Testimonial />
      </Flex>
    </Flex>
  );
};

export default Home;
