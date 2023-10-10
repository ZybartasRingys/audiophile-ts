// Chakra
import { urlFor } from '../../../../sanity/sanity'
import { Image, Text, Flex, Box } from '@chakra-ui/react'

//Context
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
// Types

import { CheckoutItemProps, IProduct } from '../../../types'

const CheckoutItem = ({ _id }: CheckoutItemProps) => {
  const { products } = useContext(CartContext)
  const item = products.find((i: IProduct) => i._id === _id)
  if (item === undefined) return null

  return (
    <Flex justifyContent='space-between' alignItems='center'>
      <Flex>
        <Box width={{ base: '64px' }} height={{ base: '64px' }}>
          {item.image && (
            <Image
              width='100%'
              height='100%'
              borderRadius='10px'
              src={urlFor(item.image).url()}
              alt={item.title}></Image>
          )}
        </Box>
        <Flex
          flexDir={{ base: 'column' }}
          width={{ base: '76px' }}
          height={{ base: '50px' }}>
          <Text fontSize='11px'>{item.title}</Text>
          <Text fontSize='15px'> {item.price}</Text>
        </Flex>
      </Flex>

      <Flex>1x</Flex>
    </Flex>
  )
}

export default CheckoutItem
