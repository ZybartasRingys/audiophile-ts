import { useState, useEffect } from 'react'
import { getSpeakers } from '../../../../sanity/sanity'
import ProductsComponent from '../../ProductsComponent'
interface Ispeakers {
  title: 'string'
  desc: 'string'
  image: 'string'
}

const Speakers: React.FC<Ispeakers> = ({}: Ispeakers) => {
  const [products, setProducts] = useState([] as any[])

  useEffect(() => {
    const getData = async () => {
      const speakers = await getSpeakers()
      setProducts(speakers)
    }
    getData()
  }, [])
  return (
    <div>
      {products.map(({ title, desc, image }) => (
        <ProductsComponent
          title={title}
          desc={desc}
          image={image}
          key={title}
        />
      ))}
    </div>
  )
}

export default Speakers
