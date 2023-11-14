import { urlFor } from '../../../../sanity/sanity'
import { Box, Text, Heading, Flex, Link, Image } from '@chakra-ui/react'

// Types

import { IProduct } from '../../../types'

const ProductsComponent = ({
  title,
  desc,
  image,
  slug,
  isNewProduct,
}: IProduct) => {
  return (
    <Flex
      key={title}
      flexDir={{ base: 'column' }}
      width='100%'
      height={{ base: '100%' }}
      alignItems='center'
      mt={{ base: '40px', md: '120px' }}>
      <Flex
        boxShadow='sm'
        height={{ base: '352px' }}
        width='100%'
        borderRadius='8px'
        alignItems='center'
        justifyContent='center'
        bgColor='white.300'>
        <Box width={{ base: '100%', md: '50%' }} height='100%'>
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
        alignItems='center'
        width={{ base: '100%', md: '83%' }}>
        {isNewProduct === true ? (
          <Text
            mt='32px'
            color='orange.100'
            fontSize='14px'
            letterSpacing='10px'
            fontFamily='main.100'
            textTransform='uppercase'>
            New product
          </Text>
        ) : (
          <Flex height='32px'></Flex>
        )}
        <Flex
          mt={{ base: '32px', md: '15px' }}
          flexDir={{ base: 'column' }}
          width='99%'
          textAlign='center'
          alignItems={{ md: 'center' }}>
          <Flex width={{ md: '55%' }}>
            <Heading
              fontSize={{ base: '28px', md: '40px' }}
              letterSpacing={{ base: '1px', md: '1.43px' }}
              textTransform='uppercase'
              fontFamily='main.100'
              fontWeight='bold'
              color='black.200'
              lineHeight={{ md: '44px' }}>
              {title}
            </Heading>
          </Flex>

          <Text
            mt='25px'
            fontFamily='main.100'
            fontSize={{ base: '15px' }}
            lineHeight='25px'
            fontWeight='medium'
            opacity='0.5'
            color='black.200'>
            {desc}
          </Text>
        </Flex>
        <Link
          href={`/products/${slug.current}`}
          mt='30px'
          width='160px'
          height='48px'
          color='white'
          bgColor='orange.100'
          fontSize='13px'
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
