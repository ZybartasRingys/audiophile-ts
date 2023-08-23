import React from 'react'

import Header from './Header'
import { sanity } from '../../../../audiophile/sanityClient'
import { useQuery } from 'react-query'
import { Box } from '@chakra-ui/react'

const query = `
  *[ _type == 'products' ] { title, slug }
`

const Headphones = () => {
  const { data: products } = useQuery('products', () => sanity.fetch(query))
  return (
    <>
      {products.map((product) => (
        <Box>{product.title}</Box>
      ))}
      <Header />
    </>
  )
}

export default Headphones
