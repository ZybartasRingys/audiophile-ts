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
} from '@chakra-ui/react'

const NavbarModal = (isOpen, onClose) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bgColor='white'
        height={{ base: '750px' }}
        borderTopRadius='none'
        mt={{ base: '98px' }}>
        <ModalBody>
          {/* Headphones Card */}
          <Card
            width={{ base: '100%' }}
            height={{ base: '165px' }}
            bgColor='white.300'
            mt={{ base: '75px' }}
            mb={{ base: '67px' }}>
            <CardBody display='flex' alignItems='center' flexDir='column'>
              <Box
                width='140px'
                height='140px'
                mt='-70px'
                bgImage="url('/shared/desktop/image-category-thumbnail-headphones.png')"
                bgRepeat='no-repeat'
                bgPos='bottom'
                bgSize='cover'></Box>

              <Heading
                fontSize='15px'
                fontFamily='main.100'
                textTransform='uppercase'
                letterSpacing='1px'
                mb='17px'>
                Headphones
              </Heading>
              <Link
                display='flex'
                alignItems='center'
                href='/headphones'
                textTransform='uppercase'>
                <Text
                  fontSize='13px'
                  fontWeight='bold'
                  letterSpacing='1px'
                  opacity='0.6'>
                  SHOP
                </Text>
                <Image
                  width='7px'
                  height='12px'
                  ml='10px'
                  src='/shared/desktop/icon-arrow-right.svg'
                />
              </Link>
            </CardBody>
          </Card>
          {/* Headphones Card */}

          {/* Speaker Card */}
          <Card
            width={{ base: '100%' }}
            height={{ base: '165px' }}
            bgColor='white.300'
            mb={{ base: '68px' }}>
            <CardBody display='flex' alignItems='center' flexDir='column'>
              <Box
                width='140px'
                height='140px'
                mt='-90px'
                bgImage="url('/shared/mobile/image-zx9-speaker-removebg-preview.png')"
                bgPosition='center'
                bgRepeat='no-repeat'
                bgSize='cover'
                mb='10px'></Box>
              <Heading
                fontSize='15px'
                fontFamily='main.100'
                textTransform='uppercase'
                letterSpacing='1px'
                mb='20px'>
                Speakers
              </Heading>
              <Link
                display='flex'
                alignItems='center'
                href='/speakers'
                textTransform='uppercase'>
                <Text
                  fontSize='13px'
                  fontWeight='bold'
                  letterSpacing='1px'
                  opacity='0.6'>
                  SHOP
                </Text>
                <Image
                  width='7px'
                  height='12px'
                  ml='10px'
                  src='/shared/desktop/icon-arrow-right.svg'
                />
              </Link>
            </CardBody>
          </Card>
          {/* Speaker  Card */}

          {/* Earphones Card */}
          <Card
            width={{ base: '100%' }}
            height={{ base: '165px' }}
            bgColor='white.300'>
            <CardBody display='flex' alignItems='center' flexDir='column'>
              <Box
                width='140px'
                height='140px'
                mt='-70px'
                bgImage="url('/public/shared/desktop/image-category-thumbnail-earphones.png')"
                bgPosition='center'
                bgRepeat='no-repeat'
                bgSize='cover'></Box>
              <Heading
                fontSize='15px'
                fontFamily='main.100'
                textTransform='uppercase'
                letterSpacing='1px'
                mt={{ base: '-10px' }}
                mb='20px'>
                Earphones
              </Heading>
              <Link
                display='flex'
                alignItems='center'
                href='/earphones'
                textTransform='uppercase'>
                <Text
                  fontSize='13px'
                  fontWeight='bold'
                  letterSpacing='1px'
                  opacity='0.6'>
                  SHOP
                </Text>
                <Image
                  width='7px'
                  height='12px'
                  ml='10px'
                  src='/shared/desktop/icon-arrow-right.svg'
                />
              </Link>
            </CardBody>
          </Card>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default NavbarModal
