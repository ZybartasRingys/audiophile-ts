import { Flex, Text, Heading, Image, Grid, GridItem } from '@chakra-ui/react'
import { IProduct } from '../../../../types'
import { urlFor } from '../../../../../sanity/sanity'
import { Heading5, BodyText } from '../../../../chakra/appStyles'
import '../Features.css'
const Features: React.FC<IProduct> = ({
  features,
  box,
  productImages,
  unit,
}) => {
  return (
    <>
      <Flex flexDir={{ base: 'column' }} mt='88px' width='100%'>
        <Flex flexDir={{ base: 'column' }} mb={{ base: '90px' }}>
          <Heading
            mb={{ base: '32px' }}
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

        <Flex flexDir={{ base: 'column', md: 'row' }}>
          <Flex flexDir={{ base: 'column' }} width={{ md: '100%' }}>
            {/* In The Box Section */}
            <Flex
              width={{ md: '87%' }}
              flexDir={{ base: 'column', md: 'row' }}
              justifyContent={{ md: 'space-between' }}>
              <Heading
                {...Heading5}
                letterSpacing={{ base: '0.86px', md: '1.14px' }}
                mb='24px'>
                IN THE BOX
              </Heading>
              <Flex height={{ base: '157px' }} mb={{ base: '90px' }}>
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
                    <Text
                      {...BodyText}
                      fontSize='15px'
                      opacity='0.5'
                      key={item}>
                      {item}
                    </Text>
                  ))}
                </Flex>
              </Flex>

              {/* In The Box Section End */}
            </Flex>
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
      </Flex>
    </>
  )
}

export default Features
