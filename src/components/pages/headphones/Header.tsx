import { Flex, Heading } from '@chakra-ui/react'

//Types
import { HeaderProps } from '../../../types'

const Header = ({ title }: HeaderProps) => {
  return (
    <Flex
      width='100%'
      height={{ base: '102px' }}
      justifyContent='center'
      alignItems='center'
      bgColor='black.200'
      mb={{ base: '64px' }}>
      <Heading
        fontSize='28px'
        color='white'
        textTransform='uppercase'
        letterSpacing='2px'
        fontFamily='main.100'>
        {title}
      </Heading>
    </Flex>
  )
}

export default Header
