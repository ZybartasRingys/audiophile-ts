import Speakers from './Speakers'
import Header from '../headphones/Header'
import Links from '../home/Links'
import Testimonial from '../home/Testimonial'
import { Flex } from '@chakra-ui/react'
type Props = {}

function SpeakersHome({}: Props) {
  return (
    <Flex>
      <Header />
      <Speakers title={'string'} desc={'string'} image={'string'} />
      <Links />
      <Testimonial />
    </Flex>
  )
}

export default SpeakersHome
