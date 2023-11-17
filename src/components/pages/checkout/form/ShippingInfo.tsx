//Chakra UI
import { SimpleGrid, FormLabel } from '@chakra-ui/react'

//Chakra Styles Import
import { formInputStyle, FormLabelHeading } from '../checkoutStyle'

//Components
import InputField from './InputField'

function ShippingInfo({ register, errors }) {
  return (
    <>
      <SimpleGrid border='2px solid green'>
        <FormLabel {...FormLabelHeading}>Shipping info</FormLabel>
        {/*Address input  */}
        <InputField
          {...formInputStyle}
          {...register('address', {
            required: "Field can't be empty",
            minLength: 4,
          })}
          placeholder='1137 Williams Avenue'
          type='text'
          label='Your Address'
          errors={errors.address}
        />

        {/*Address input end  */}

        {/*ZIP Code  input  */}

        <InputField
          autoComplete='off'
          {...register('ZIPCode', {
            required: "Field can't be empty",
            minLength: 4,
          })}
          {...formInputStyle}
          placeholder='10001'
          label='ZIP Code'
          errors={errors.ZIPCode}
          type='number'
        />

        {/*ZIP Code  input end */}

        <InputField
          autoComplete='off'
          {...register('city', {
            required: "Field can't be empty",
            minLength: 4,
          })}
          {...formInputStyle}
          placeholder='New York'
          label='City'
          errors={errors.city}
        />

        {/*Country input  */}

        <InputField
          autoComplete='off'
          {...register('country', {
            required: "Field can't be empty",
            minLength: 4,
          })}
          {...formInputStyle}
          placeholder='United States'
          label='Country'
          errors={errors.country}
        />
        {/*Country input end  */}
      </SimpleGrid>
    </>
  )
}

export default ShippingInfo
