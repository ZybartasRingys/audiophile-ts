import { urlFor } from '../../../../sanity/sanity'
import { Box, Text, Heading, Flex, Link, Image } from '@chakra-ui/react'
import '../headphones/Headphones.css'
// Types

import { IProduct } from '../../../types'

const ProductsComponent = ({
  title,
  desc,
  image,
  slug,
  isNewProduct,
  className,
}: IProduct) => {
  return (
    <Flex
      key={title}
      flexDir={{ base: 'column', lg: 'row' }}
      width='100%'
      height={{ base: '100%' }}
      alignItems='center'
      gap={{ lg: '7.5rem' }}
      mt={{ base: '3.875rem', md: '7.5rem' }}
      mb={{ base: '3.5rem' }}
      className={className}>
      <Flex
        boxShadow='sm'
        height={{ base: '22rem', lg: '35rem' }}
        width={{ base: '100%', lg: '100%' }}
        borderRadius='.5rem'
        alignItems='center'
        justifyContent={{ base: 'center' }}
        bgColor='white.300'>
        <Box width={{ base: '100%', md: '50%', lg: '100%' }} height='100%'>
          {image && (
            <Image
              width='100%'
              height='100%'
              borderRadius='10px'
              src={urlFor(image).url()}
              alt={title}></Image>
          )}
        </Box>
      </Flex>

      <Flex
        flexDir={{ base: 'column' }}
        alignItems={{ base: 'center', lg: 'start' }}
        width={{ base: '100%', md: '83%' }}>
        {isNewProduct === true ? (
          <Text
            mt={{ base: '2rem', md: '3.25rem' }}
            color='orange.100'
            fontSize='.875rem'
            letterSpacing='10px'
            fontFamily='main.100'
            textTransform='uppercase'>
            New product
          </Text>
        ) : (
          <Flex height={{ md: '2.375rem' }}></Flex>
        )}
        <Flex
          mt={{ base: '2rem', md: '.9375rem' }}
          flexDir={{ base: 'column' }}
          width={{ base: '100%', lg: '99%' }}
          height='100%'
          alignItems={{ base: 'center', lg: 'start' }}
          justifyContent={{ base: 'center' }}
          textAlign={{ base: 'center', lg: 'start' }}>
          <Flex
            width={{ base: '80%', md: '48%', lg: '100%' }}
            justifyContent={{ base: 'center', lg: 'start' }}>
            <Heading
              fontSize={{ base: '1.75rem', md: '2.5rem' }}
              letterSpacing={{ base: '1px', md: '1.43px' }}
              textTransform='uppercase'
              fontFamily='main.100'
              fontWeight='bold'
              color='black.200'
              lineHeight={{ md: '2.75rem' }}>
              {title}
            </Heading>
          </Flex>

          <Text
            mt='1.5625rem'
            fontFamily='main.100'
            fontSize={{ base: '.9375rem' }}
            lineHeight='1.5625rem'
            fontWeight='medium'
            opacity='0.5'
            color='black.200'>
            {desc}
          </Text>
        </Flex>
        <Link
          href={`/products/${slug.current}`}
          mt='1.875rem'
          width='10rem'
          height='3rem'
          color='white'
          bgColor='orange.100'
          fontSize='.8125rem'
          letterSpacing='1px'
          fontFamily='main.100'
          display='flex'
          justifyContent='center'
          alignItems='center'
          fontWeight='bold'>
          SEE PRODUCT
        </Link>
      </Flex>
    </Flex>
  )
}

export default ProductsComponent
