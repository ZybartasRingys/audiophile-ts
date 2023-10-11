// Chakra
import { urlFor } from '../../../../sanity/sanity'
import { Image, Text, Flex, Box } from '@chakra-ui/react'

//Context
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
// Types

import { CheckoutItemProps, IProduct } from '../../../types'

const CheckoutItem = ({ _id }: CheckoutItemProps) => {
  const { products, getItemsQuantity } = useContext(CartContext)
  const item = products.find((i: IProduct) => i._id === _id)
  if (item === undefined) return null

  const itemsQuantity = getItemsQuantity(_id)
  return (
    <Flex
      justifyContent='space-between'
      alignItems='center'
      marginBottom='24px'>
      <Flex>
        <Box
          width={{ base: '64px' }}
          height={{ base: '64px' }}
          mr={{ base: '18px' }}>
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
          <Text fontSize='12px'>{item.title}</Text>
          <Text fontSize='12px'> $ {item.price}</Text>
        </Flex>
      </Flex>

      <Text
        fontSize='15px'
        lineHeight='25px'
        fontWeight='bold'
        opacity='0.6'
        fontFamily='manrope'>
        x{itemsQuantity}
      </Text>
    </Flex>
  )
}

export default CheckoutItem
