import { Flex, Text, Heading, Image } from '@chakra-ui/react'
import { IProduct } from '../../../../types'
import { urlFor } from '../../../../../sanity/sanity'
import { Heading4, BodyText } from '../../../../chakra/appStyles'
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
            lineHeight={{ base: '36px' }}
            letterSpacing={{ base: '0.9px' }}
            fontFamily='main.100'>
            FEATURES
          </Heading>
          <Text
            fontSize={{ base: '15px' }}
            fontFamily='main.100'
            lineHeight={{ base: '25px' }}
            fontWeight='medium'
            opacity='0.5'>
            {features}
          </Text>
        </Flex>

        <Flex flexDir={{ base: 'column' }}>
          <Heading {...Heading4} letterSpacing='0.86' mb='24px'>
            IN THE BOX
          </Heading>
          <Flex>
            {/* In The Box Section */}
            <Flex flexDir={{ base: 'column' }}>
              <Flex height={{ base: '199px' }}>
                {/* Unit */}
                <Flex flexDir={{ base: 'column' }} mr={{ base: '24px' }}>
                  {unit.map((number, i) => (
                    <Text
                      color='orange.100'
                      fontSize='15px'
                      lineHeight='25px'
                      key={i}>
                      {number}
                    </Text>
                  ))}
                </Flex>
                {/* Box item */}
                <Flex flexDir={{ base: 'column' }} mb='90px'>
                  {box.map((item) => (
                    <Text {...BodyText} opacity='0.5' key={item}>
                      {item}
                    </Text>
                  ))}
                </Flex>
              </Flex>

              {/* In The Box Section End */}

              {/* Product Images Section */}
              <Flex flexDir={{ base: 'column' }} mt='15px'>
                {productImages.map((image, index) => (
                  <Flex key={index} width='100%' borderRadius='5px'>
                    <Image
                      mb='20px'
                      borderRadius='5px'
                      src={urlFor(image).url()}
                    />
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default Features
