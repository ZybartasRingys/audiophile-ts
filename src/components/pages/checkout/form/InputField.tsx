import { forwardRef } from 'react'
import { Input, Flex, Text, Box } from '@chakra-ui/react'
import { formInputStyle, formLabelStyle } from '../checkoutStyle'

type InputFieldProps = {
  placeholder: string
  errors?: { message: string } | undefined
  label: string
  type: string
  [prop: string]: unknown
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const { placeholder, label, type } = props

    console.log(props.errors)

    return (
      <>
        <Flex flexDir={{ base: 'column' }}>
          <Flex
            justifyContent={{ base: 'space-between' }}
            mb={{ base: '10px' }}>
            <Box as='label' {...formLabelStyle}>
              {label}
            </Box>

            <Text
              fontFamily='main.100'
              fontSize={{ base: '12px' }}
              fontWeight='medium'
              letterSpacing='-0.2'
              color='#CD2C2C'></Text>
          </Flex>
        </Flex>
        <Input
          ref={ref}
          placeholder={placeholder}
          type={type}
          {...formInputStyle}
          id={label}
        />
      </>
    )
  }
)

export default InputField
