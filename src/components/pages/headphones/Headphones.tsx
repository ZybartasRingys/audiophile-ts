import React, { useEffect, useState } from 'react'

import Header from './Header'
import { getProducts } from '../../../../sanity/sanity'
const Headphones = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const products = await getProducts()
      setProducts(products)
    }
    getData()
  }, [])

  return (
    <>
      <div>{products.map((product) => product.title)}</div>
      <Header />
    </>
  )
}

export default Headphones
