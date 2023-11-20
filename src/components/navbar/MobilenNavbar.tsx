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
    <Flex
      width={{ base: '100%' }}
      justifyContent='center'
      bg='black.300'
      height='87px'
      px='20px'
      borderBottom={{
        base: '1px solid rgb(151, 151, 151, 0.1)',
        md: '0px solid',
      }}>
      <Flex
        width={{ base: '100%', md: '95%' }}
        height='100%'
        justifyContent='space-between'
        alignItems='center'
        borderBottom={{
          md: '1px solid rgb(151, 151, 151, 0.1)',
        }}>
        <Flex
          width={{ base: '70%' }}
          alignItems='center'
          justifyContent={{ base: 'space-between', md: 'start' }}>
          <Box
            onClick={onOpen}
            bgColor='transparent'
            _hover={{ bgColor: 'transparent' }}
            width={{ base: '16px' }}
            height={{ base: '15px' }}
            cursor='pointer'
            mr={{ md: '40px' }}>
            <Image src='shared/tablet/icon-hamburger.svg' alt='h' />
          </Box>

          <Link href='/'>
            <Image
              loading='lazy'
              src='/shared/desktop/logo.svg'
              alt='logo'
              cursor='pointer'
            />
          </Link>
        </Flex>

        <Cart />
      </Flex>
    </Flex>
  )
}

export default MobileNav
