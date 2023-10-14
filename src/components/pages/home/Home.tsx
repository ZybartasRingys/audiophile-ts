import { Flex } from "@chakra-ui/react";
import Banner from "./Banner";
import Links from "./Links";
import Products from "./Products";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <Flex flexDir={{ base: "column" }} alignItems="center">
      <Banner />
      <Links />
      <Products />
      <Testimonial />
    </Flex>
  );
};

export default Home;
