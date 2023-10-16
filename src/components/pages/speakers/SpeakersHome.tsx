import Speakers from './Speakers'
import Header from '../headphones/Header'
import Links from '../home/Links'
import Testimonial from '../home/Testimonial'
import { Flex } from '@chakra-ui/react'

const SpeakersHome = () => {
  const headerTitle = 'speakers'
  return (
    <Flex flexDir={{ base: 'column' }} alignItems='center'>
      <Header title={headerTitle} />
      <Speakers
        title={'string'}
        desc={'string'}
        image={'string'}
        slug={'string'}
      />
      <Links />
      <Testimonial />
    </Flex>
  )
}

export default SpeakersHome
