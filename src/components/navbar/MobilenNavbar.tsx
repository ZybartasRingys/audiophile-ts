import React from 'react'
import { Box, Flex, Text, Image } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'

const MobileNav = () => {
  return (
    <Box
      bg='black.200'
      height='60px'
      px='20px'
      borderBottom='1px solid #979797'>
      <Flex height='100%' justifyContent='space-between' alignItems='center'>
        <GiHamburgerMenu fill='white' size={20} />
        <Text color='white' fontSize='25px' fontWeight='700'>
          audiophile
        </Text>

        <Image src='/shared/desktop/icon-cart.svg' cursor='pointer' />
      </Flex>
    </Box>
  )
}

export default MobileNav
