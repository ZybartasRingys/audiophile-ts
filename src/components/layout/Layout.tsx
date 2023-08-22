import { Box } from '@chakra-ui/react'
import MobileNav from '../navbar/MobilenNavbar'
// Pass the child props
export default function Layout({ children }) {
  return (
    <Box>
      <MobileNav />
      {children}
    </Box>
  )
}
