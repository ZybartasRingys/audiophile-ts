//Chakra UI

import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  Heading,
} from '@chakra-ui/react'

//Context
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

//Components

import CheckoutItem from './CheckoutItem'

const Summary = () => {
  const { cartItems, products } = useContext(CartContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex>
      {/*Summary section */}
      <Flex
        width='87%'
        height='100%'
        flexDir={{ base: 'column' }}
        bgColor='white.100'
        borderRadius='8px'
        mb={{ base: '95px' }}>
        <Text
          fontSize='18px'
          fontWeight='bold'
          letterSpacing='1.3px'
          textTransform='uppercase'
          mt={{ base: '32px' }}
          ml={{ base: '24px' }}>
          Summmary
        </Text>

        <Flex flexDir={{ base: 'column' }} padding='24px'>
          {cartItems.map((item) => (
            <CheckoutItem key={item._id} {...item} />
          ))}

          <Flex flexDir={{ base: 'column' }}>
            <Flex justifyContent='space-between'>
              <Text> TOTAL</Text>
              <Text>
                $
                {cartItems.reduce((total, cartItem) => {
                  const item = products.find((i) => i._id === cartItem._id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)}
              </Text>
            </Flex>
            <Flex justifyContent='space-between'>
              <Text>SHIPPING</Text>
              <Text>{cartItems.length ? '$ 50' : null}</Text>
            </Flex>
            <Flex justifyContent='space-between'>
              <Text>{`VAT (INCLUDED)`}</Text>
              <Text>
                $
                {cartItems.reduce((total, cartItem) => {
                  const item = products.find((i) => i._id === cartItem._id)
                  return total + (item?.price || 0) * cartItem.quantity * 0.2
                }, 0)}
              </Text>
            </Flex>
            <Flex justifyContent='space-between'>
              <Text>GRAND TOTAL</Text>
              <Text>
                $
                {cartItems.reduce((total, cartItem) => {
                  const item = products.find((i) => i._id === cartItem._id)
                  return (
                    total + (item?.price || 0) * cartItem.quantity * 1.2 + 50
                  )
                }, 0)}
              </Text>
            </Flex>
          </Flex>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              border='1px solid red'
              bgColor='white.100'
              width={{ base: '87%' }}
              height={{ base: '600px' }}
              display='flex'
              alignItems='center'>
              <ModalHeader width={{ base: '86%' }} border='1px solid red'>
                <Heading>THANK YOU FOR YOUR ORDER</Heading>
                <Text>You will receive an email confirmation shortly.</Text>
              </ModalHeader>

              <ModalBody>
                <Flex
                  border='1px solid red'
                  width={{ base: '86%' }}
                  height={{ base: '232px' }}>
                  Image
                </Flex>
              </ModalBody>

              <ModalFooter>
                <Button variant='ghost'>Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {cartItems.length ? (
            <Button
              mt='30px'
              width='279px'
              height='48px'
              color='white'
              bgColor='orange.100'
              fontSize='13px'
              letterSpacing='1px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              fontWeight='bold'
              textTransform='uppercase'
              borderRadius='none'
              onClick={onOpen}>
              Continue & pay
            </Button>
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Summary
