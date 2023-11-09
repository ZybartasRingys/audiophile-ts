import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Text,
  Image,
  Card,
  CardBody,
  Heading,
  Link,
  Button,
} from '@chakra-ui/react'

import Cart from '../cart/Cart'

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      bg='black.300'
      height='87px'
      px='20px'
      borderBottom='1px solid rgb(151, 151, 151, 0.5)'>
      <Flex height='100%' justifyContent='space-between' alignItems='center'>
        <Button
          onClick={onOpen}
          bgColor='transparent'
          _hover={{ bgColor: 'transparent' }}>
          <Image src='shared/tablet/icon-hamburger.svg' />
        </Button>

        <Link href='/'>
          <Image
            loading='lazy'
            src='/shared/desktop/logo.svg'
            alt='logo'
            cursor='pointer'
          />
        </Link>

        <Cart />
      </Flex>
    </Box>
  )
}

export default MobileNav
