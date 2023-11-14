import { Flex, Box, Text, Heading, Image, Button } from '@chakra-ui/react'
import { urlFor } from '../../../../../sanity/sanity'
import { IProduct } from '../../../../types'
import Features from './Features'
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
        width={{ base: '87%', md: '90%' }}
        height='100%'
        alignItems='center'
        justifyContent='center'>
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
                width={{ base: '100%', md: '90%' }}
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
                mt={{ base: '30px', md: '0px' }}
                mb={{ base: '30px', md: '17px' }}
                color='orange.100'
                fontSize={{ base: '14px' }}
                fontFamily='main.100'
                letterSpacing='10px'
                textTransform='uppercase'>
                New product
              </Text>
            ) : (
              <Flex width={{ base: '100%' }} height={{ base: '40px' }} />
            )}
            <Flex width={{ base: '59%' }}>
              <Heading
                fontSize={{ base: '28px' }}
                letterSpacing='1px'
                textTransform='uppercase'
                fontFamily='main.100'
                fontWeight='bold'
                color='black.200'>
                {title}
              </Heading>
            </Flex>

            <Text
              mt={{ base: '32px' }}
              fontFamily='main.100'
              color='black.200'
              fontSize={{ base: '15px' }}
              lineHeight='25px'
              fontWeight='medium'
              opacity='0.5'>
              {desc}
            </Text>
            <Text
              fontSize={{ base: '18px' }}
              fontWeight='bold'
              fontFamily='main.100'
              color='black.200'
              letterSpacing='1.3px'
              mt='30px'>
              $ {price.toLocaleString('en-US')}
            </Text>

            {/* Add to cart */}

            <Flex
              mt='32px'
              width={{ base: '100%' }}
              height={{ base: '48px' }}
              justifyContent='space-between'
              pr={{ base: '28px', md: '50px' }}>
              <Flex width={{ base: '120px' }} height='48px' bgColor='white.300'>
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
                    fontSize='13px'
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
                  width='160px'
                  height='48px'
                  bgColor='orange.100'
                  color='white'
                  borderRadius='0px'
                  fontSize={{ base: '13px' }}
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
