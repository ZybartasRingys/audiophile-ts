/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { getProducts } from "../../../../sanity/sanity";
import ProductsComponent from "../../ProductsComponent";
interface IProduct {
  desc: "string";
  title: "string";
  image: "string";
  slug: "string";
}

const Headphones: React.FC<IProduct> = () => {
  const [products, setProducts] = useState([] as any[]);
  console.log(products);

  useEffect(() => {
    const getData = async () => {
      const headphones = await getProducts();
      setProducts(headphones);
    };
    getData();
  }, []);
  return (
    <div>
      {products.map(({ title, desc, image, slug }) => (
        <ProductsComponent
          title={title}
          desc={desc}
          image={image}
          key={title}
          slug={slug}
        />
      ))}
    </div>
  );
};

export default Headphones;
