import React from 'react'
import { Flex, Box, Heading, Text } from '@chakra-ui/react'
type Props = {}

const Testimonial = (props: Props) => {
  return (
    <Flex
      flexDir={{ base: 'column' }}
      width='89%'
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
      <Heading textTransform='uppercase' mb='40px'>
        Bringing you the{' '}
        <Text as='span' color='orange.100'>
          best
        </Text>{' '}
        audio gear
      </Heading>
      <Text opacity='0.9'>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </Text>
    </Flex>
  )
}

export default Testimonial
