/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { getEarphones } from "../../../../sanity/sanity";
import ProductsComponent from "../../products/ProductsComponent";
import { Flex } from "@chakra-ui/react";

interface IEarphones {
  title: "string";
  desc: "string";
  image: "string";
  slug: "string";
}

const Earphones: React.FC<IEarphones> = () => {
  const [earphones, setEarphones] = useState([] as any[]);

  useEffect(() => {
    const getData = async () => {
      const earphones = await getEarphones();
      setEarphones(earphones);
    };
    getData();
  }, []);

  return (
    <Flex flexDir={{ base: "column" }}>
      {earphones.map(({ title, desc, image, slug }) => (
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

export default Earphones;
