import { Flex, Box, Text, Heading } from '@chakra-ui/react'

const Testimonial = () => {
  return (
    <Flex
      flexDir={{ base: 'column' }}
      width='88%'
      height='689px'
      mt='120px'
      mb='120px'
      alignContent='center'
      justifyContent='center'
      textAlign='center'
      fontFamily='main.100'>
      <Box
        width='100%'
        height={{ base: '300px' }}
        bgImg='/shared/mobile/image-best-gear.jpg'
        bgPos='center'
        bgSize='cover'
        bgRepeat='no-repeat'
        borderRadius='10px'
        mb='43px'></Box>

      <Flex flexDir={{ base: 'column' }} width={{ base: '100%' }}>
        <Heading
          fontSize={{ base: '28px' }}
          letterSpacing='1px'
          textTransform='uppercase'
          fontWeight='bold'
          fontFamily='main.100'
          mb='32px'>
          Bringing you the
          <Text as='span' color='orange.100' textTransform='uppercase'>
            best
          </Text>
          audio gear
        </Heading>
        <Text
          fontSize={{ base: '15px' }}
          lineHeight='25px'
          fontFamily='main.100'
          fontWeight='medium'
          opacity='0.5'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </Flex>
    </Flex>
  )
}

export default Testimonial
