import React from 'react'

import { Flex, Text, Link, Heading } from '@chakra-ui/react'
type Props = {}

const Footer = (props: Props) => {
  return (
    <Flex
      bgColor='black.100'
      width='100%'
      height={{ base: '654px' }}
      flexDir={{ base: 'column' }}
      color='white'
      alignItems='center'
      pt={{ base: '50px' }}>
      <Heading>Audiophile</Heading>

      <Flex
        flexDir={{ base: 'column' }}
        mt={{ base: '50px' }}
        textAlign='center'
        width={{ base: '108px' }}
        height={{ base: '148px' }}
        justifyContent='space-between'>
        <Link>HOME</Link>
        <Link>HEADPHONES</Link>
        <Link>SPEAKERS</Link>
        <Link>EARPHONES</Link>
      </Flex>

      <Flex mt={{ base: '50px' }} textAlign='center' px='25px'>
        <Text fontSize={{ base: '15px' }}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </Text>
      </Flex>
      <Text mt={{ base: '50px' }}>Copyright 2021. All Rights Reserved</Text>

      <Flex
        mt={{ base: '48px' }}
        width={{ base: '104px' }}
        height={{ base: '24px' }}
        justifyContent='space-between'>
        <Link>Fb</Link>
        <Link>Twi</Link>
        <Link>Insta</Link>
      </Flex>
    </Flex>
  )
}

export default Footer
