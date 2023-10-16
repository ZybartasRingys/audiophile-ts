/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react'

import ProductsComponent from '../products/ProductsComponent'
import { Flex } from '@chakra-ui/react'

//Types
import { IProduct } from '../../../types'

//Context
import { AppContext } from '../../../context/AppContext'

const Earphones: React.FC<IProduct> = () => {
  const { earphones } = useContext(AppContext)

  return (
    <Flex flexDir={{ base: 'column' }}>
      {earphones.map(({ title, desc, image, slug }) => (
        <ProductsComponent
          title={title}
          desc={desc}
          image={image}
          key={title}
          slug={slug}
          _id={'string'}
          price={0}
          box={[]}
          productImages={[]}
          unit={[]}
          products={[]}
        />
      ))}
    </Flex>
  )
}

export default Earphones
