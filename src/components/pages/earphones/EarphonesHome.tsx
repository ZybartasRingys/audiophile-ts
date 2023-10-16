// Chakra UI
import { Flex } from '@chakra-ui/react'

//Components
import Header from '../headphones/Header'
import Earphones from './Earphones'
import Links from '../home/Links'
import Testimonial from '../home/Testimonial'

const EarphonesHome = () => {
  const headerTitle = 'earphones'
  return (
    <Flex flexDir={{ base: 'column' }} alignItems='center'>
      <Header title={headerTitle} />
      <Earphones
        title={'string'}
        desc={'string'}
        image={'string'}
        slug={'string'}
        _id={'string'}
        price={0}
        box={[]}
        productImages={[]}
        unit={[]}
        products={[]}
      />

      <Links />
      <Testimonial />
    </Flex>
  )
}

export default EarphonesHome
