import { Text, Heading, Link, Flex } from '@chakra-ui/react'
import { Default1btn } from '../../../chakra/appStyles'
const Banner = () => {
  return (
    <Flex
      width='100%'
      height={{ base: '509px', md: '637px' }}
      justifyContent='center'
      alignItems='center'
      fontFamily='main.100'
      bgImg={{
        base: '/home/mobile/image-header.jpg',
        md: 'home/tablet/image-header.jpg',
      }}
      backgroundPosition='center'
      bgSize='cover'
      bgRepeat='no-repeat'
      bgPos='center -90px'>
      <Flex
        width={{ base: '87%', md: '50%' }}
        height={{ base: '100%', md: '346px' }}
        flexDir={{ base: 'column' }}
        alignItems='center'
        justifyContent='center'
        px='15px'
        pt={{ base: '95px', md: '0px' }}
        textAlign='center'>
        <Heading
          fontFamily='main.100'
          fontWeight='regular'
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
          fontSize={{ base: '36px', md: '56px' }}
          fontFamily='main.100'
          textTransform='uppercase'
          letterSpacing={{ base: '1,4px', md: '2px' }}
          mb='22px'
          lineHeight={{ base: '40px', md: '58px' }}>
          XX99 Mark II Headphones
        </Heading>
        <Text
          color='white.100'
          textAlign='center'
          fontSize='15px'
          mb='28px'
          fontWeight='medium'
          opacity='0.75'
          lineHeight='25px'>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Text>
        <Link {...Default1btn}>See product</Link>
      </Flex>
    </Flex>
  )
}

export default Banner
