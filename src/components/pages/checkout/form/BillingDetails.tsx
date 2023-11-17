//Chakra UI
import { FormLabel, SimpleGrid } from '@chakra-ui/react'

//Chakra Styles Import
import { formInputStyle, FormLabelHeading } from '../checkoutStyle'

//Components
import InputField from './InputField'

const BillingDetails = ({ errors, register }) => {
  return (
    <>
      <FormLabel htmlFor='name' {...FormLabelHeading}>
        BILLING DETAILS
      </FormLabel>

      <SimpleGrid border='1px solid red'>
        {/*Name input */}
        <InputField
          {...register('name', {
            required: "Field can't be empty",
            minLength: 4,
          })}
          placeholder='Alexei Ward'
          errors={errors.name}
          label='Name'
        />

        {/*Name input end */}

        {/*Email input */}

        <InputField
          {...register('email', {
            required: "Field can't be empty",
            minLength: 4,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Wrong format',
            },
          })}
          {...formInputStyle}
          placeholder='alexei@mail.com'
          label='Email Address'
          errors={errors.email}
          aria-invalid={errors.email ? 'true' : 'false'}
        />

        {/*Email input end */}

        {/*Phone number input */}

        <InputField
          {...register('phoneNumber', {
            required: "Field can't be empty",
            pattern: {
              value: /^(0|[1-9]\d*)(\.\d+)?$/,
              message: 'Please enter valid number',
            },
            minLength: 8,
          })}
          {...formInputStyle}
          placeholder='+1 202-555-0136'
          type='number'
          label='Phone Number'
          errors={errors.phoneNumber}
        />

        {/*Phone input end */}
      </SimpleGrid>
    </>
  )
}

export default BillingDetails
