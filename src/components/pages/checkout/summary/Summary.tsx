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
import { CartContext } from '../../../../context/CartContext'

//Styles props imports
import { SummaryTotalPrices, SummaryPricesText } from '../checkoutStyle'

//Components

import OrderComfirmItem from '../orderComfirm/OrderComfirmItem'
import SummaryItem from './SummaryItem'

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
      mt={{ base: '9' }}>
      {/*Summary section */}
      <Flex
        width='100%'
        height='100%'
        flexDir={{ base: 'column' }}
        bgColor='white.100'
        borderRadius='0.5rem'
        mb={{ base: '5.93rem' }}>
        <Text
          fontSize='1.1rem'
          fontWeight='bold'
          color='black.200'
          letterSpacing='1.3px'
          fontFamily='main.100'
          textTransform='uppercase'
          mt={{ base: '2rem' }}
          ml={{ base: '1.rem' }}
          mb={{ base: '0.37rem' }}>
          Summary
        </Text>

        <Flex flexDir={{ base: 'column' }} padding='24'>
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
              width={{ base: '87%', md: '33.75rem' }}
              height={{ base: '37.5rem' }}
              maxW='xl'
              display='flex'
              alignItems='center'
              px={{ base: '0.5rem' }}
              mt={{ base: '13.75rem', md: '0' }}
              top={{ md: '9.18rem' }}>
              <ModalHeader width={{ base: '86%' }} pl='0' mt='1.0625rem'>
                <Image src='/checkout/icon-order-confirmation.svg' />
              </ModalHeader>

              <ModalBody height={{ base: '23.1875rem' }} width='100%'>
                <Flex
                  flexDir={{ base: 'column' }}
                  width={{ base: '16.4375rem', md: '100%' }}
                  pt='0'>
                  <Text
                    fontSize='1.5rem'
                    lineHeight='1.75rem'
                    fontWeight='bold'
                    letterSpacing='1px'
                    color='black.200'
                    mb='1.25rem'>
                    THANK YOU <br /> FOR YOUR ORDER
                  </Text>
                  <Text
                    fontSize='.9375rem'
                    lineHeight='1.5625rem'
                    color='black.200'
                    opacity='0.5'
                    mb='1.25rem'>
                    You will receive an email confirmation shortly.
                  </Text>
                </Flex>

                <Flex
                  flexDir={{ base: 'column', md: 'row' }}
                  width={{ base: '100%' }}
                  pr={{ md: '1.7rem' }}>
                  <Flex
                    width={{ base: '100%' }}
                    flexDir='column'
                    height={{ base: '140px' }}
                    justifyContent='space-evenly'
                    padding='24px'
                    bgColor='white.300'
                    borderTopRightRadius={{ base: '0.5rem' }}
                    borderTopLeftRadius={{ base: '0.5rem', md: '0.5rem' }}
                    borderBottomLeftRadius={{ base: '0', md: '0.5rem' }}>
                    {cartItems.map((item, index) => {
                      if (index === 0) {
                        return <OrderComfirmItem key={item._id} {...item} />
                      }
                    })}
                  </Flex>

                  <Flex
                    width={{ base: '100%' }}
                    height={{ base: '92px', md: '8.75rem' }}
                    flexDir={{ base: 'column' }}
                    bgColor='black'
                    borderBottomRadius={{ base: '0.5rem', md: '0' }}
                    borderTopRightRadius={{ base: '0', md: '0.5rem' }}
                    borderBottomRightRadius={{ base: '0.5rem', md: '0.5rem' }}
                    color='white'
                    paddingX={{ base: '24px' }}
                    py={{ base: '17px' }}>
                    <Text
                      fontSize='15px'
                      lineHeight='25px'
                      fontWeight='medium'
                      textTransform='uppercase'
                      color='white.100'
                      fontFamily='main.100'
                      opacity='0.5'
                      mb={{ base: '5px' }}>
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
                  width={{ base: '263px', md: '444px' }}
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
              width={{ base: '279px', md: '623px' }}
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
              disabled={errors}
              padding='0'>
              Continue & pay
            </Button>
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Summary
