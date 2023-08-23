import React from 'react'
import { Box, Text, Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
type Props = {}

const Banner = (props: Props) => {
  return (
    <Box
      width='100%'
      height='500px'
      bg='black.200'
      pt='95px'
      display='flex'
      justifyContent='center'>
      <Box
        width='88%'
        display='flex'
        flexDir='column'
        alignItems='center'
        px='15px'
        textAlign='center'>
        <Heading
          fontFamily='main.100'
          fontWeight='400'
          color='white'
          opacity='0.5'
          textTransform='uppercase'
          letterSpacing='10px'
          mb='20px'
          fontSize='14px'>
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
          opacity='0.7'
          lineHeight='25px'>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Text>
        <Link
          width='160px'
          height='48px'
          fontSize='13px'
          fontWeight='bold'
          fontFamily='main.100'
          letterSpacing='1px'
          bgColor='orange.100'
          color='white.100'
          textTransform='uppercase'
          href='/headphones'
          display='flex'
          justifyContent='center'
          alignItems='center'
          cursor='pointer'>
          See product
        </Link>
      </Box>
    </Box>
  )
}

export default Banner
