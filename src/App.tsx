import { Routes, Route } from "react-router-dom";

// Layout imports
import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
import Headphones from "./components/pages/headphones/Headphones";
import Speakers from "./components/pages/speakers/Speakers";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
