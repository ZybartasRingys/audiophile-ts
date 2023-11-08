import { Flex } from '@chakra-ui/react'
import LinksCard from './LinksCard'

const cards = [
  {
    heading: 'Headphones',
    image: '/shared/mobile/image-xx99-mark-one-headphones-removebg-preview.png',
  },

  {
    heading: 'Speakers',
    image: "/shared/mobile/image-zx9-speaker-removebg-preview.png'",
  },

  {
    heading: 'Earphones',
    image: '/shared/desktop/image-category-thumbnail-earphones.png',
  },
]

const Links = () => {
  return (
    <Flex
      width='100%'
      height='100%'
      flexDir={{ base: 'column', md: 'row' }}
      alignItems='center'
      justifyContent='space-between'
      border='1px solid red'>
      {cards.map((card) => (
        <LinksCard
          key={card.heading}
          image={card.image}
          heading={card.heading}
        />
      ))}
    </Flex>
  )
}

export default Links
