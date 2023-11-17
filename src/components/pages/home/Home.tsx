import { Flex } from '@chakra-ui/react'
import Banner from './Banner'
import Links from './Links'
import Products from './Products'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <Flex
      flexDir={{ base: 'column' }}
      alignItems='center'
      width={{ base: '100%' }}
      height={{ base: '100%' }}
      as='main'>
      <Banner />
      <Flex
        width='100%'
        height={{ base: '100%' }}
        px={{ base: '24', md: '38' }}
        flexDir={{ base: 'column' }}
        alignItems='center'
        as='section'>
        <Links />
        <Products />
        <Testimonial />
      </Flex>
    </Flex>
  )
}

export default Home
