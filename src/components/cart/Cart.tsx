import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  Image,
  Text,
  Flex,
} from '@chakra-ui/react'

// Context
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { totalPrice, totalCartItems } = useContext(CartContext)
  return (
    <>
      <Image
        src='/shared/desktop/icon-cart.svg'
        cursor='pointer'
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          width={{ base: '89%' }}
          height={{ base: '488px' }}
          bgColor='white'
          mt={{ base: '85px' }}>
          <ModalHeader>
            <Flex justifyContent={{ base: 'space-between' }}>
              <Text>CART {`(${totalCartItems})`}</Text>
              <Text>Remove all</Text>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Text>Your Cart is empty</Text>
          </ModalBody>
          <ModalFooter>
            <Flex flexDir={{ base: 'column' }}>
              <Flex justifyContent='space-between'>
                <Text>TOTAL</Text>
                <Text fontWeight='bold'>$ {totalPrice}</Text>
              </Flex>

              <Button
                height={{ base: '48px' }}
                width={{ base: '271px' }}
                borderRadius='none'
                bgColor='orange.100'
                color='white'>
                Checkout
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Cart
