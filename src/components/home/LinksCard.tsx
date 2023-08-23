import React, { useState } from 'react'
import NextLink from 'next/link'
import {
  Card,
  CardBody,
  Heading,
  Box,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'

type Props = {}

const LinksCard = (props: Props) => {
  return (
    <>
      {/* Headphones Card */}
      <Card height={{ base: '165px' }} bgColor='white.300' mt='60px'>
        <CardBody display='flex' alignItems='center' flexDir='column'>
          <Image
            src='/shared/desktop/image-category-thumbnail-headphones.png'
            alt='earphones'
            width='50%'
            height='150px'
          />

          <Heading
            fontSize='15px'
            fontFamily='main.100'
            textTransform='uppercase'
            letterSpacing='1px'
            mb='15px'>
            Headphones{' '}
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
      <Card height={{ base: '165px' }} bgColor='white.300' mt='80px'>
        <CardBody display='flex' alignItems='center' flexDir='column'>
          {/* <Image
            mt='-10px'
            src='/shared/desktop/image-zx9-speaker.jpg'
            alt='earphones'
            width='50%'
            border='1px solid red'
          /> */}
          <Heading
            fontSize='15px'
            fontFamily='main.100'
            textTransform='uppercase'
            letterSpacing='1px'
            mt='32px'
            mb='15px'>
            Speakers
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
      {/* Speaker  Card */}

      {/* Earphones Card */}
      <Card height={{ base: '165px' }} bgColor='white.300' mt='50px'>
        <CardBody display='flex' alignItems='center' flexDir='column'>
          <Image
            src='/shared/desktop/image-category-thumbnail-earphones.png'
            alt='earphones'
            width='50%'
            height='150px'
            mt='-70px'
          />
          <Heading
            fontSize='15px'
            fontFamily='main.100'
            textTransform='uppercase'
            letterSpacing='1px'
            mb='15px'>
            Earphones
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
      {/* Earphones  Card */}
    </>
  )
}

export default LinksCard
