import Header from "./Header";
import Links from "../home/Links";
import Headphones from "./Headphones";
import Testimonial from "../home/Testimonial";

const HeadphonesHome = () => {
  const headerTitle = "headphones";
  return (
    <>
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
      />
      <Links />
      <Testimonial />
    </>
  );
};

export default HeadphonesHome;
