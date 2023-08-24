import React from 'react'

import Header from './Header'
import { getProducts } from '../../../../sanity/sanity'
const Headphones = async () => {
  const data = await getProducts()

  return (
    <>
      {data?.map((product) => (
        <div>{product?.title}</div>
      ))}
      <Header />
    </>
  )
}

export default Headphones
