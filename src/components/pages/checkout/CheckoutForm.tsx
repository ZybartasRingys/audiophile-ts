// React hook form
import { useForm } from 'react-hook-form'
import { useState } from 'react'

//Chakra UI
import {
  FormLabel,
  FormControl,
  Input,
  Flex,
  Checkbox,
  Heading,
  Text,
} from '@chakra-ui/react'

//Chakra Styles Import
import {
  formLabelStyle,
  formInputStyle,
  FormLabelHeading,
} from './checkoutStyle'
import { Heading4 } from '../../../chakra/appStyles'

//components

import Summary from './Summary'

const CheckoutForm = () => {
  const [checked, setChecked] = useState(true)

  console.log(checked)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  {
    console.log(errors)
  }

  const onSubmit = () => {
    console.log('submited')
  }
  return (
    <Flex
      width='89%'
      flexDir={{ base: 'column' }}
      justifyContent='center'
      borderRadius='8px'>
      <Flex
        width={{ base: '100%' }}
        height={{ base: '94px' }}
        alignItems='center'
        px={{ base: '23px' }}>
        <Heading {...Heading4} letterSpacing='1px'>
          CHECKOUT
        </Heading>
      </Flex>

      <Flex width={{ base: '100%' }} justifyContent='center'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*Billing Address section */}
          <FormLabel {...FormLabelHeading}>BILLING DETAILS</FormLabel>
          <FormControl>
            {/*Name input */}
            <Flex justifyContent='space-between' width='100%'>
              <FormLabel {...formLabelStyle}>Name</FormLabel>
              <Text
                fontFamily='main.100'
                fontSize={{ base: '12px' }}
                fontWeight='medium'
                letterSpacing='-0.2'
                color='#CD2C2C'>
                {errors.name?.message}
              </Text>
            </Flex>

            <Input
              autoComplete='off'
              _focusVisible={{ borderColor: 'orange.100' }}
              {...register('name', {
                required: "Can't be empty",
                minLength: 4,
              })}
              {...formInputStyle}
              placeholder='Alexei Ward'
            />
            {/*Name input end */}

            <Flex>
              <FormLabel {...formLabelStyle}>Email Address</FormLabel>
              <Text
                fontFamily='main.100'
                fontSize={{ base: '12px' }}
                fontWeight='medium'
                letterSpacing='-0.2'
                color='#CD2C2C'>
                {errors.email?.message}
              </Text>
            </Flex>
            <Input
              autoComplete='off'
              _focusVisible={{ borderColor: 'orange.100' }}
              {...register('email', {
                required: "Can't be empty",
                minLength: 4,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Wrong format',
                },
              })}
              {...formInputStyle}
              placeholder='alexei@mail.com'
            />

            <FormLabel {...formLabelStyle}>Phone Number</FormLabel>

            <Input
              autoComplete='off'
              _focusVisible={{ borderColor: 'orange.100' }}
              {...register('number', {
                required: "Can't be empty",
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Please enter a number',
                },
                minLength: 4,
              })}
              {...formInputStyle}
              placeholder='+1 202-555-0136'
            />
          </FormControl>
          {/*Billing Address section end */}

          {/*Shipping info  section */}
          <FormLabel {...FormLabelHeading}>Shipping info</FormLabel>
          <FormControl>
            <FormLabel {...formLabelStyle}>Your Address</FormLabel>
            <Input {...formInputStyle} placeholder='1137 Williams Avenue' />
            <FormLabel {...formLabelStyle}>ZIP Code</FormLabel>
            <Input {...formInputStyle} placeholder='10001' />
            <FormLabel {...formLabelStyle}>City</FormLabel>
            <Input {...formInputStyle} placeholder='New York' />
            <FormLabel {...formLabelStyle}>Country</FormLabel>
            <Input {...formInputStyle} placeholder='United States' />
          </FormControl>

          {/*Shipping info  section end */}

          {/*Payment method  section */}
          <FormLabel {...FormLabelHeading}>Payment details</FormLabel>
          <FormControl>
            <FormLabel {...formLabelStyle}>Payment Method</FormLabel>
            <Flex flexDir={{ base: 'column' }} mb={{ base: '32px' }}>
              <Checkbox
                width={{ base: '280px' }}
                height={{ base: '58px' }}
                display='flex'
                alignItems='center'
                mb={{ base: '15px' }}
                border='1px solid red'
                borderRadius='8px'
                borderColor='#CFCFCF'
                bgColor='white.100'
                variant='circular'
                colorScheme='orange'
                paddingLeft={{ base: '15px' }}
                onChange={() => setChecked(true)}>
                e-Money
              </Checkbox>

              <Checkbox
                width={{ base: '280px' }}
                height={{ base: '58px' }}
                border='1px solid red'
                borderRadius='8px'
                borderColor='#CFCFCF'
                bgColor='white.100'
                variant='circular'
                colorScheme='orange'
                paddingLeft={{ base: '15px' }}
                onChange={() => setChecked(false)}>
                Cash On Delivery
              </Checkbox>
            </Flex>

            {checked === true ? (
              <Flex flexDir={{ base: 'column' }}>
                <FormLabel {...formLabelStyle}>e-Money Number</FormLabel>
                <Input {...formInputStyle} />
                <FormLabel {...formLabelStyle}>e-Money PIN</FormLabel>
                <Input {...formInputStyle} />
              </Flex>
            ) : null}
          </FormControl>
        </form>
      </Flex>

      <Summary handleSubmit={handleSubmit(onSubmit)} errors={errors} />
    </Flex>
  )
}

export default CheckoutForm
