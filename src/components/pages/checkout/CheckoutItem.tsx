// Chakra
import { urlFor } from '../../../../sanity/sanity'
import { Image, Text, Flex, Box } from '@chakra-ui/react'

import { useState, useEffect } from 'react'

// Sanity functions

import { getProductsBySlug } from '../../../../sanity/sanity'

// Types

import { CheckoutItemProps, IProduct } from '../../../types'

const CheckoutItem = ({ _id }: CheckoutItemProps) => {
  const [products, setProducts] = useState<IProduct[]>([])

  console.log(products)

  useEffect(() => {
    const getData = async () => {
      const allProducts = await getProductsBySlug()
      setProducts(allProducts)
    }
    getData()
  }, [])

  const item = products.find((i: IProduct) => i._id === _id)
  if (item === undefined) return null

  return (
    <Flex justifyContent='space-between' alignItems='center'>
      <Box
        border='1px solid red'
        width={{ base: '64px' }}
        height={{ base: '64px' }}>
        {item.image && (
          <Image
            width='100%'
            height='100%'
            borderRadius='10px'
            src={urlFor(item.image).url()}
            alt={item.title}></Image>
        )}
        Image
      </Box>
      <Flex
        flexDir={{ base: 'column' }}
        width={{ base: '76px' }}
        height={{ base: '50px' }}>
        <Text fontSize='11px'>{item.price}</Text>
        <Text fontSize='15px'> quantity</Text>
      </Flex>
    </Flex>
  )
}

export default CheckoutItem
