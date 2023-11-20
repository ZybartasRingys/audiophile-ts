import { Flex, Box, Text, Heading, Image, Button } from '@chakra-ui/react'
import { urlFor } from '../../../../../sanity/sanity'
import { IProduct } from '../../../../types'
import Features from './features/Features'
import YouMayAlsoLike from './YouMayAlsoLike'
import Links from '../../home/Links'
import Testimonial from '../../home/Testimonial'

//Context
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
//Icons
import { HiMiniPlusSmall, HiMiniMinusSmall } from 'react-icons/hi2'

const Product: React.FC<IProduct> = ({
  title,
  desc,
  image,
  price,
  features,
  box,
  productImages,
  products,
  slug,
  unit,
  _id,
  isNewProduct,
}) => {
  const { increaseCartQuantity, decreaseCartQuantity, getItemsQuantity } =
    useContext(CartContext)
  const quantity = getItemsQuantity(_id)

  return (
    <>
      <Flex
        flexDir={{ base: 'column' }}
        width={{ base: '100%' }}
        height='100%'
        alignItems='center'
        justifyContent='center'
        px={{ base: '24', md: '38' }}>
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          alignItems={{ md: 'center' }}>
          <Flex
            height={{ base: '327px', md: '480px' }}
            width={{ base: '100%', md: '42%' }}
            borderRadius='8px'
            bgColor='white.300'
            alignItems={{ md: 'center' }}
            justifyContent={{ md: 'center' }}>
            {image && (
              <Image
                width={{ base: '100%', md: '100%' }}
                height={{ base: '100%', md: '62%' }}
                borderRadius='8px'
                src={urlFor(image).url()}
                alt={title}></Image>
            )}
          </Flex>
          <Flex
            flexDir={{ base: 'column' }}
            textAlign='start'
            width={{ base: '100%', md: '50%' }}
            height={{ md: '100%' }}
            alignItems={{ md: 'start' }}>
            {isNewProduct === true ? (
              <Text
                mt={{ base: '2rem', md: '0px' }}
                mb={{ base: '1.5rem', md: '17px' }}
                color='orange.100'
                fontSize={{ base: '.875rem' }}
                fontFamily='main.100'
                letterSpacing='.625rem'
                textTransform='uppercase'>
                New product
              </Text>
            ) : (
              <Flex width={{ base: '100%' }} height={{ base: '2.5rem' }} />
            )}
            <Flex width={{ base: '62%' }}>
              <Heading
                fontSize={{ base: '1.75rem' }}
                letterSpacing='1px'
                textTransform='uppercase'
                fontFamily='main.100'
                fontWeight='bold'
                color='black.200'>
                {title}
              </Heading>
            </Flex>

            <Text
              mt={{ base: '2rem' }}
              fontFamily='main.100'
              color='black.200'
              fontSize={{ base: '.9375rem' }}
              lineHeight='1.5625rem'
              fontWeight='medium'
              opacity='0.5'>
              {desc}
            </Text>
            <Text
              fontSize={{ base: '1.125rem' }}
              fontWeight='bold'
              fontFamily='main.100'
              color='black.200'
              letterSpacing='1.3px'
              mt='1.875rem'>
              $ {price.toLocaleString('en-US')}
            </Text>

            {/* Add to cart */}

            <Flex
              mt='2.1875rem'
              width={{ base: '100%' }}
              height={{ base: '3rem' }}
              justifyContent='space-between'
              pr={{ base: '1.75rem', md: '3.125rem' }}>
              <Flex
                width={{ base: '7.5rem' }}
                height='3rem'
                bgColor='white.300'>
                <Flex
                  width={{ base: '100%' }}
                  alignItems='center'
                  justifyContent='space-around'>
                  <Box opacity='0.5' cursor='pointer'>
                    <HiMiniMinusSmall
                      onClick={() => decreaseCartQuantity(_id)}
                    />
                  </Box>

                  <Text
                    fontSize='.8125rem'
                    fontWeight='bold'
                    fontFamily='main.100'
                    color='black.200'>
                    {quantity}
                  </Text>

                  <Box opacity='0.5' cursor='pointer'>
                    <HiMiniPlusSmall
                      onClick={() => {
                        increaseCartQuantity(_id)
                      }}
                    />
                  </Box>
                </Flex>
              </Flex>
              <Flex>
                <Button
                  width='10rem'
                  height='3rem'
                  bgColor='orange.100'
                  color='white'
                  borderRadius='0px'
                  fontSize={{ base: '.8125rem' }}
                  letterSpacing='1px'
                  onClick={() => increaseCartQuantity(_id)}>
                  ADD TO CART
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* Features Component */}
        <Features
          features={features}
          box={box}
          productImages={productImages}
          desc={'string'}
          title={'string'}
          image={'string'}
          slug={'string'}
          price={0}
          unit={unit}
          _id={'string'}
          products={[]}
          isNewProduct={false}
        />

        {/* You May Also Like Section */}

        <YouMayAlsoLike
          products={products}
          slug={slug}
          desc={'string'}
          title={'string'}
          image={'string'}
          _id={'string'}
          price={0}
          box={[]}
          productImages={[]}
          unit={[]}
          isNewProduct={false}
        />

        {/* Links Section */}
        <Links />
        {/* Testimonial Section */}
        <Testimonial />
      </Flex>
    </>
  )
}

export default Product
