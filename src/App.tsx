import { Routes, Route } from "react-router-dom";

// Layout imports
import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
import HeadphonesHome from "./components/pages/headphones/HeadphonesHome";
import SpeakersHome from "./components/pages/speakers/SpeakersHome";
import EarphonesHome from "./components/pages/earphones/EarphonesHome";
import ProductsDetail from "./components/pages/products/productsDetail/ProductsDetail";
import Checkout from "./components/pages/checkout/Checkout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<HeadphonesHome />} />
          <Route path="/speakers" element={<SpeakersHome />} />
          <Route path="/earphones" element={<EarphonesHome />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/products/:slug"
            element={
              <ProductsDetail
                desc={"string"}
                title={"string"}
                image={"string"}
                _id={""}
                price={0}
                box={[]}
                productImages={[]}
                unit={[]}
                products={[]}
                isNewProduct={false}
                features1={""}
                features2={""}
                className={""}
                item={{
                  image: "",
                  price: 0,
                  title: "",
                  slug: "",
                }}
                slug={{
                  current: "",
                }}
              />
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
