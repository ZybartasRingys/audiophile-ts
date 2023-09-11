import { Flex, Heading, Box, Button, Image } from '@chakra-ui/react'
import { urlFor } from '../../../../../sanity/sanity'
import { IProduct } from '../../../../types'
const YouMayAlsoLike: React.FC<IProduct> = ({ products }) => {
  return (
    <Flex
      flexDir={{ base: 'column' }}
      textAlign='center'
      alignContent='center'
      mt={{ base: '120px' }}>
      <Heading mb='50px'>YOU MAY ALSO LIKE</Heading>
      {products.map(({ title, image }) => (
        <Flex
          key={title}
          flexDir={{ base: 'column' }}
          alignItems='center'
          height={{ base: '265px' }}
          alignContent='space-between'>
          <Box width='100%'>
            <Image
              width='100%'
              height={{ base: '120px' }}
              borderRadius='10px'
              src={urlFor(image).url()}
              alt={title}></Image>
          </Box>
          <Heading size='sm'>{title}</Heading>
          <Box>
            <Button
              width='160px'
              height='48px'
              bgColor='orange.100'
              color='white'
              borderRadius='0px'
              fontSize={{ base: '13px' }}
              letterSpacing='1px'>
              SEE PRODUCT
            </Button>
          </Box>
        </Flex>
      ))}
    </Flex>
  )
}

export default YouMayAlsoLike
