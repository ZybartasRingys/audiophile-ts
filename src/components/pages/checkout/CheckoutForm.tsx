import { useForm } from 'react-hook-form'

//Chakra UI
import {
  FormLabel,
  FormControl,
  Input,
  Flex,
  Checkbox,
  Text,
} from '@chakra-ui/react'

//Chakra Styles Import
import { formLabelStyle } from './checkoutStyle'

//Context
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

//Components
import CheckoutItem from './CheckoutItem'

const CheckoutForm = () => {
  const { cartItems } = useContext(CartContext)

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = () => {
    console.log('submited')
  }

  return (
    <Flex
      width={{ base: '100%' }}
      height={{ base: '100%' }}
      flexDir={{ base: 'column' }}
      alignItems='center'>
      <Flex width='89%' justifyContent='center'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*Billing Address section */}
          <FormLabel
            color='orange.100'
            fontSize='13px'
            lineHeight='25px'
            letterSpacing='1px'
            fontWeight='bold'>
            BILLING DETAILS
          </FormLabel>
          <FormControl>
            <FormLabel color='black.100' fontWeight='bold' fontSize='12px'>
              Name
            </FormLabel>
            <Input />
            <FormLabel {...formLabelStyle}>Email Address</FormLabel>
            <Input />
            <FormLabel {...formLabelStyle}>Phone Number</FormLabel>
            <Input />
          </FormControl>
          {/*Billing Address section end */}

          {/*Shipping info  section */}
          <FormLabel
            color='orange.100'
            fontSize='13px'
            lineHeight='25px'
            letterSpacing='1px'
            fontWeight='bold'
            textTransform='uppercase'
            mt='30px'>
            Shipping info
          </FormLabel>
          <FormControl>
            <FormLabel {...formLabelStyle}>Your Address</FormLabel>
            <Input />
            <FormLabel {...formLabelStyle}>ZIP Code</FormLabel>
            <Input />
            <FormLabel {...formLabelStyle}>City</FormLabel>
            <Input />
            <FormLabel {...formLabelStyle}>Country</FormLabel>
            <Input />
          </FormControl>

          {/*Shipping info  section end */}

          {/*Payment method  section */}
          <FormLabel
            color='orange.100'
            fontSize='13px'
            lineHeight='25px'
            letterSpacing='1px'
            fontWeight='bold'
            textTransform='uppercase'
            mt='30px'>
            Payment details
          </FormLabel>
          <FormControl>
            <FormLabel {...formLabelStyle}>Payment Method</FormLabel>
            <Flex flexDir={{ base: 'column' }}>
              <Checkbox>e-Money</Checkbox>
              <Checkbox>Cash On Delivery</Checkbox>
            </Flex>

            <FormLabel {...formLabelStyle}>e-Money Number</FormLabel>
            <Input />
            <FormLabel {...formLabelStyle}>e-Money PIN</FormLabel>
            <Input />
          </FormControl>
        </form>
      </Flex>

      {/*Summary section */}
      <Flex
        border='1px solid red'
        width='89%'
        justifyContent='center'
        flexDir={{ base: 'column' }}>
        <Text>Summmary</Text>

        <Flex flexDir={{ base: 'column' }}>
          {cartItems.map((item) => (
            <CheckoutItem key={item._id} {...item} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default CheckoutForm
