import React from 'react'
import { Box } from '@chakra-ui/react'
import LinksCard from './LinksCard'
type Props = {}

const Links = (props: Props) => {
  return (
    <>
      <Box
        width='100%'
        px='15px'
        display={{ base: 'flex' }}
        flexDir='column'
        justifyContent='center'
        pt='25px'>
        <LinksCard />
      </Box>
    </>
  )
}

export default Links
