import { Box } from "@chakra-ui/react";
import Navbar from "../navbar/Navbar";

import Footer from "../footer/Footer";
// Pass the child props

type LayoutProps = {
  children: JSX.Element;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
