import { Routes, Route } from "react-router-dom";

// Layout imports
import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
import HeadphonesHome from "./components/pages/headphones/HeadphonesHome";
import SpeakersHome from "./components/pages/speakers/SpeakersHome";
import EarphonesHome from "./components/pages/earphones/EarphonesHome";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<HeadphonesHome />} />
          <Route path="/speakers" element={<SpeakersHome />} />
          <Route path="/earphones" element={<EarphonesHome />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
