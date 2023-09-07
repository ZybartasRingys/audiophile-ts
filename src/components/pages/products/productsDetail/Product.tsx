import { Flex, Box } from '@chakra-ui/react'

interface IProduct {
  desc: 'string'
  title: 'string'
  image: 'string'
  slug: 'string'
}

const Product: React.FC<IProduct> = ({ title }) => {
  return (
    <Flex>
      <Box>Image</Box>
      <Flex>{title}</Flex>
    </Flex>
  )
}

export default Product
