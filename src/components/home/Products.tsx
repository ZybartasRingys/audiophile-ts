import React from 'react'

import { Box, Heading, Text, Button, Flex, Image, Link } from '@chakra-ui/react'
type Props = {}

const Products = (props: Props) => {
  return (
    <Box mt='120px' width='89%'>
      <Flex
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        bgColor='#D87D4A'
        borderRadius='10px'
        bgImg='/home/desktop/pattern-circles.svg'
        bgPos='top'
        bgSize='cover'
        bgRepeat='no-repeat'>
        <Flex
          flexDir={{ base: 'column' }}
          alignItems='center'
          justifyContent='center'
          height='600px'>
          <Image
            width='170px'
            height='200px'
            src='/home/mobile/image-speaker-zx9.png'
            alt='ZX9'></Image>
          <Flex flexDir={{ base: 'column' }} alignContent='center'>
            <Heading size='lg' color='white.100' textTransform='uppercase'>
              ZX9
            </Heading>
            <Heading size='lg' color='white.100' textTransform='uppercase'>
              speaker
            </Heading>
          </Flex>

          <Text textAlign='center'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Text>
          <Button>See product</Button>
        </Flex>
      </Flex>
      <Flex
        width='100%'
        flexDir={{ base: 'column' }}
        justifyContent='center'
        height={{ base: '320px' }}
        mt='20px'
        bgImage='/home/mobile/image-speaker-zx7.jpg'
        bgPos='center'
        bgSize='cover'
        bgRepeat='no-repeat'
        pl='25px'
        letterSpacing='2px'
        textTransform='uppercase'
        borderRadius='10px'>
        <Heading color='black.100' mb='32px'>
          ZX7 speaker
        </Heading>
        <Link
          width='204px'
          height='48px'
          border='1px solid black'
          href='/headphones'
          display='flex'
          justifyContent='center'
          alignItems='center'
          cursor='pointer'>
          See product YX1
        </Link>
      </Flex>

      <Flex flexDir={{ base: 'column' }} mt='24px'>
        <Box
          borderRadius='10px'
          height='200px'
          width='100%'
          bgImg='/home/mobile/image-earphones-yx1.jpg'
          bgPos='center'
          bgSize='cover'
          bgRepeat='no-repeat'
          mb='24px'></Box>
        <Flex
          height='200px'
          width='100%'
          bgColor='white.300'
          flexDir={{ base: 'column' }}
          justifyContent='center'
          pl='25px'
          borderRadius='10px'>
          <Heading textTransform='uppercase' letterSpacing='2px' mb='34px'>
            yx1 earphones{' '}
          </Heading>
          <Link
            width='204px'
            height='48px'
            border='1px solid black'
            href='/headphones'
            display='flex'
            justifyContent='center'
            alignItems='center'
            cursor='pointer'>
            See product
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Products
