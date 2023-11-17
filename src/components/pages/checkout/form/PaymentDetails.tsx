import { useState } from 'react'

//Chakra UI
import { FormLabel, useRadioGroup, Radio, Flex, Text } from '@chakra-ui/react'

//Chakra Styles Import

import {
  FormLabelHeading,
  formInputStyle,
  formLabelStyle,
} from '../checkoutStyle'

//Components
import InputField from './InputField'

const PaymentDetails = ({ register, errors }) => {
  const options = ['e-Money', 'Cash on Delivery']
  const [checkedOption, setCheckedOption] = useState(options[0])

  const handleChange = (value: string) => {
    setCheckedOption(value)
  }

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'Payment Details',
    defaultValue: 'e-Money',
    onChange: handleChange,
  })

  const group = getRootProps()
  return (
    <>
      <FormLabel {...FormLabelHeading}>Payment details</FormLabel>

      <FormLabel {...formLabelStyle}>Payment Method</FormLabel>

      <Flex {...group} flexDir={{ base: 'column' }}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <Flex {...formInputStyle} borderRadius='8px' key={value}>
              <Radio colorScheme='orange' {...radio}>
                {value}
              </Radio>
            </Flex>
          )
        })}

        {checkedOption === options[0] ? (
          <Flex flexDir={{ base: 'column' }} justifyContent='center'>
            <InputField
              autoComplete='off'
              {...register('eMoneyNumber', {
                required: "Field can't be empty",
                minLength: 4,
              })}
              {...formInputStyle}
              placeholder='238521993'
              label='e-Money Number'
              errors={errors.eMoneyNumber}
            />
            <InputField
              autoComplete='off'
              {...register('eMoneyPin', {
                required: "Field can't be empty",
                minLength: 4,
              })}
              {...formInputStyle}
              placeholder='6891'
              label='e-Money Pin'
              errors={errors.eMoneyPin}
            />
          </Flex>
        ) : (
          <Flex width={{ base: '87%' }} border='1px solid red'>
            <Text>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </Text>
          </Flex>
        )}
      </Flex>
    </>
  )
}

export default PaymentDetails
