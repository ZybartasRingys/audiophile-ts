/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty-pattern */
import { useState, useEffect } from "react";
import { getSpeakers } from "../../../../sanity/sanity";
import ProductsComponent from "../../ProductsComponent";
import { Flex } from "@chakra-ui/react";
interface Ispeakers {
  title: "string";
  desc: "string";
  image: "string";
  slug: "string";
}

const Speakers: React.FC<Ispeakers> = () => {
  const [products, setProducts] = useState([] as any[]);

  useEffect(() => {
    const getData = async () => {
      const speakers = await getSpeakers();
      setProducts(speakers);
    };
    getData();
  }, []);
  return (
    <Flex flexDir={{ base: "column" }}>
      {products.map(({ title, desc, image, slug }) => (
        <ProductsComponent
          title={title}
          desc={desc}
          image={image}
          key={title}
          slug={slug}
        />
      ))}
    </Flex>
  );
};

export default Speakers;
