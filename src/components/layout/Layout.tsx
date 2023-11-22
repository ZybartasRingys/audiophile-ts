import { Box } from "@chakra-ui/react";
import Navbar from "../navbar/Navbar";
import MobileNav from "../navbar/MobilenNavbar";
import Footer from "../footer/Footer";
// Pass the child props
export default function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
