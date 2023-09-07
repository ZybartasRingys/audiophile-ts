/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { getAllProducts } from '../../../../../sanity/sanity'
import Product from './Product'
import { useParams } from 'react-router-dom'

interface IProduct {
  desc: 'string'
  title: 'string'
  image: 'string'
  slug: 'string'
  route: 'string'
}

const ProductsDetail: React.FC<IProduct> = () => {
  const [products, setProducts] = useState<Array<IProduct>>([])
  const location = useParams()
  console.log(location.slug)

  useEffect(() => {
    const getData = async () => {
      const allProducts = await getAllProducts({ slug })
      setProducts(allProducts)
    }
    getData()
  }, [])
  return (
    <Flex flexDir={{ base: 'column' }}>
      <Box>Go back</Box>

      {products.map(({ title, desc, image, slug }) => (
        <Product
          title={title}
          desc={desc}
          image={image}
          key={title}
          slug={slug}
        />
      ))}
    </Flex>
  )
}

export default ProductsDetail
