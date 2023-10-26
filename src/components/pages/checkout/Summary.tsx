//Chakra UI

import {
  Flex,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react'

//Context
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

//Styles props imports
import { SummaryTotalPrices, SummaryPricesText } from './checkoutStyle'

//Components
import SummaryItem from './SummaryItem'
import OrderComfirmItem from './OrderComfirmItem'

const Summary = ({ handleSubmit, errors }) => {
  const { cartItems, products } = useContext(CartContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleClick = () => {
    handleSubmit()
    onOpen()
  }
  return (
    <Flex
      width={{ base: '100%' }}
      alignItems='center'
      justifyContent='center'
      mt={{ base: '36px' }}>
      {/*Summary section */}
      <Flex
        width='100%'
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
          ml={{ base: '24px' }}
          mb={{ base: '6px' }}>
          Summmary
        </Text>

        <Flex flexDir={{ base: 'column' }} padding='24px'>
          {cartItems.map((item) => (
            <SummaryItem key={item._id} {...item} />
          ))}

          <Flex flexDir={{ base: 'column' }}>
            <Flex justifyContent='space-between'>
              <Text {...SummaryPricesText}> TOTAL</Text>
              <Text {...SummaryTotalPrices}>
                $
                {cartItems
                  .reduce((total, cartItem) => {
                    const item = products.find((i) => i._id === cartItem._id)
                    return total + (item?.price || 0) * cartItem.quantity
                  }, 0)
                  .toLocaleString('en-US')}
              </Text>
            </Flex>
            <Flex justifyContent='space-between'>
              <Text {...SummaryPricesText}>SHIPPING</Text>
              <Text {...SummaryTotalPrices}>
                {cartItems.length ? '$ 50' : null}
              </Text>
            </Flex>
            <Flex justifyContent='space-between'>
              <Text {...SummaryPricesText}>{`VAT (INCLUDED)`}</Text>
              <Text {...SummaryTotalPrices}>
                $
                {cartItems
                  .reduce((total, cartItem) => {
                    const item = products.find((i) => i._id === cartItem._id)
                    return total + (item?.price || 0) * cartItem.quantity * 0.2
                  }, 0)
                  .toLocaleString('en-US')}
              </Text>
            </Flex>
            <Flex justifyContent='space-between' mt={{ base: '24px' }}>
              <Text {...SummaryPricesText}>GRAND TOTAL</Text>
              <Text {...SummaryTotalPrices} color='orange.100'>
                $
                {cartItems
                  .reduce((total, cartItem) => {
                    const item = products.find((i) => i._id === cartItem._id)
                    return (
                      total + (item?.price || 0) * cartItem.quantity * 1.2 + 50
                    )
                  }, 0)
                  .toLocaleString('en-US')}
              </Text>
            </Flex>
          </Flex>

          {/* MODAL */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              bgColor='white.100'
              width={{ base: '87%' }}
              height={{ base: '600px' }}
              display='flex'
              alignItems='center'>
              <ModalHeader width={{ base: '86%' }} pl='0' mt='17px'>
                <Image src='/public/checkout/icon-order-confirmation.svg' />
              </ModalHeader>

              <ModalBody height={{ base: '371px' }}>
                <Flex
                  flexDir={{ base: 'column' }}
                  width={{ base: '263px' }}
                  pt='0'>
                  <Text
                    fontSize='24px'
                    lineHeight='28px'
                    fontWeight='bold'
                    letterSpacing='1px'
                    mb='20px'>
                    THANK YOU <br /> FOR YOUR ORDER
                  </Text>
                  <Text
                    fontSize='15px'
                    lineHeight='25px'
                    color='black.200'
                    opacity='0.5'
                    mb='25px'>
                    You will receive an email confirmation shortly.
                  </Text>
                </Flex>

                <Flex flexDir='column'>
                  <Flex
                    width={{ base: '100%' }}
                    borderTopRadius='8px'
                    flexDir='column'
                    height={{ base: '140px' }}
                    justifyContent='space-evenly'
                    padding='24px'
                    bgColor='white.300'>
                    {cartItems.map((item, index) => {
                      if (index === 0) {
                        return <OrderComfirmItem key={item._id} {...item} />
                      }
                    })}
                  </Flex>

                  <Flex
                    width={{ base: '100%' }}
                    height={{ base: '92px' }}
                    flexDir={{ base: 'column' }}
                    bgColor='black'
                    borderBottomRadius='8px'
                    color='white'
                    padding='20px'>
                    <Text
                      mb='10px'
                      fontSize='15px'
                      lineHeight='25px'
                      textTransform='uppercase'
                      color='white.100'
                      fontFamily='main.100'
                      opacity='0.5'>
                      Grand total
                    </Text>
                    <Text
                      fontSize={{ base: '18px' }}
                      fontWeight='bold'
                      fontFamily='main.100'>
                      $ &nbsp;
                      {cartItems
                        .reduce((total, cartItem) => {
                          const item = products.find(
                            (i) => i._id === cartItem._id
                          )
                          return (
                            total +
                            (item?.price || 0) * cartItem.quantity * 1.2 +
                            50
                          )
                        }, 0)
                        .toLocaleString('en-US')}
                    </Text>
                  </Flex>
                </Flex>

                <Link
                  width='263px'
                  height='48px'
                  mt='24px'
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
                  href='/'>
                  Back to home
                </Link>
              </ModalBody>
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
              fontFamily='main.100'
              letterSpacing='1px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              fontWeight='bold'
              textTransform='uppercase'
              borderRadius='none'
              onClick={handleClick}
              disabled={errors}>
              Continue & pay
            </Button>
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Summary
