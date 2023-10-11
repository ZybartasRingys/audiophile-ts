//Chakra UI
import { Flex } from '@chakra-ui/react'

//Components

import CheckoutForm from './CheckoutForm'
import Summary from './Summary'

const Checkout = () => {
  return (
    <Flex flexDir={{ base: 'column' }} bgColor='white.300'>
      Go back
      <Flex
        width={{ base: '100%' }}
        height={{ base: '100%' }}
        flexDir={{ base: 'column' }}
        alignItems='center'>
        <CheckoutForm />
        <Summary />
      </Flex>
    </Flex>
  )
}

export default Checkout
