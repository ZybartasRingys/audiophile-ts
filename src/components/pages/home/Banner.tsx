import { Text, Heading, Link, Flex } from '@chakra-ui/react'
import { seeProductButton } from './HomeStyles'
const Banner = () => {
  return (
    <Flex
      width='100%'
      height='500px'
      bg='black.200'
      pt='95px'
      justifyContent='center'
      fontFamily='main.100'>
      <Flex
        width='88%'
        flexDir={{ base: 'column' }}
        alignItems='center'
        px='15px'
        textAlign='center'>
        <Heading
          fontWeight='400'
          color='white'
          opacity='0.5'
          textTransform='uppercase'
          letterSpacing='10px'
          mb='20px'
          fontSize={{ base: '14px' }}>
          New product
        </Heading>
        <Heading
          color='white'
          fontSize='36px'
          fontFamily='main.100'
          textTransform='uppercase'
          letterSpacing='1.4px'
          mb='22px'
          lineHeight='40px'>
          XX99 Mark II Headphones
        </Heading>
        <Text
          color='white'
          textAlign='center'
          fontSize='15px'
          mb='28px'
          fontWeight='medium'
          opacity='0.75'
          lineHeight='25px'>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Text>
        <Link {...seeProductButton}>See product</Link>
      </Flex>
    </Flex>
  )
}

export default Banner
