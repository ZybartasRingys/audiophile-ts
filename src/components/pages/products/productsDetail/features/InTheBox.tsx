import { Flex, Text, Heading } from '@chakra-ui/react'
import { Heading5, BodyText } from '../../../../../chakra/appStyles'

import { IProduct } from '../../../../../types'
import React from 'react'
const InTheBox: React.FC<IProduct> = ({ unit, box }) => {
  return (
    <Flex
      width={{ md: '87%', lg: '100%' }}
      flexDir={{ base: 'column', md: 'row', lg: 'column' }}
      border='2px solid red'>
      <Heading
        {...Heading5}
        letterSpacing={{ base: '0.86px', md: '1.14px' }}
        mb='24px'
        mr={{ md: '9.25rem', lg: '0rem' }}>
        IN THE BOX
      </Heading>
      <Flex height={{ base: '157px' }} mb={{ base: '5.5rem', md: '7.5rem' }}>
        {/* Unit */}
        <Flex
          flexDir={{ base: 'column' }}
          height={{ base: '157px' }}
          justifyContent='space-between'
          mr={{ base: '24px' }}>
          {unit.map((number, i) => (
            <Text
              color='orange.100'
              fontSize='15px'
              lineHeight='25px'
              fontFamily='main.100'
              fontWeight='bold'
              key={i}>
              {number}
            </Text>
          ))}
        </Flex>
        {/* Box item */}
        <Flex
          flexDir={{ base: 'column' }}
          height={{ base: '157px' }}
          justifyContent='space-between'
          mb='90px'>
          {box.map((item) => (
            <Text {...BodyText} fontSize='15px' opacity='0.5' key={item}>
              {item}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default InTheBox
