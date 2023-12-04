// Chakra UI
import { Flex, Text, Heading, Image, Grid, GridItem } from '@chakra-ui/react'
// Types
import { IProduct } from '../../../../../types'
// Sanity
import { urlFor } from '../../../../../../sanity/sanity'
// Css file
import './Features.css'

//Components

import InTheBox from './InTheBox'
const Features: React.FC<IProduct> = ({
  features,
  box,
  productImages,
  unit,
}) => {
  return (
    <>
      <Flex
        flexDir={{ base: 'column', lg: 'row' }}
        mt='88px'
        width='100%'
        height='100%'
        border='1px solid red'>
        {/* Features Text Section */}
        <Flex
          flexDir={{ base: 'column' }}
          width={{ lg: '100%' }}
          mb={{ base: '88px', md: '7.5rem' }}
          border='3px solid black'>
          <Heading
            mb={{ base: '1.5rem', md: '2rem' }}
            fontSize={{ base: '24px' }}
            fontWeight='bold'
            lineHeight={{ base: '36px' }}
            letterSpacing={{ base: '0.86px' }}
            fontFamily='main.100'
            color='black.200'>
            FEATURES
          </Heading>
          <Text
            fontSize={{ base: '15px' }}
            fontFamily='main.100'
            lineHeight={{ base: '25px' }}
            fontWeight='medium'
            opacity='0.5'
            color='black.200'>
            {features}
          </Text>
        </Flex>
        {/* Features Text Section end */}

        <Flex
          flexDir={{ base: 'column' }}
          width={{ md: '100%' }}
          border='2px solid green'>
          {/* In The Box Section */}
          <InTheBox unit={unit} box={box} />
          {/* In The Box Section End */}
          {/* Product Images Section */}
          <Grid
            gridTemplateColumns={{ base: '1fr' }}
            gap={5}
            gridTemplateAreas={{
              base: `
             "A A"
             "B B"
             "C C"
            `,
              md: `
            "A C"
            "B C"
            `,
            }}>
            {productImages.map((image, index) => (
              <GridItem className='grid-box' key={index}>
                <Image
                  mb='20px'
                  width={{ base: '100%' }}
                  height={{ base: '100%' }}
                  borderRadius='5px'
                  src={urlFor(image).url()}
                />
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </>
  )
}

export default Features
