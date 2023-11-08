import {
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  Text,
  Box,
} from '@chakra-ui/react'

type LinksProps = {
  heading: string
  image: string
}

const LinksCard: React.FC<LinksProps> = ({ heading, image }) => {
  return (
    <>
      {/* Links Card */}
      <Card
        width={{ base: '100%', md: '223px' }}
        height={{ base: '165px', md: '217px' }}
        bgColor='white.300'
        mt={{ base: '99px' }}
        mb={{ base: '67px' }}>
        <CardBody display='flex' alignItems='center' flexDir='column'>
          <Box
            width='140px'
            height='140px'
            mt='-70px'
            bgImage={image}
            bgRepeat='no-repeat'
            bgPos='bottom'
            bgSize='cover'></Box>

          <Heading
            fontSize='15px'
            fontFamily='main.100'
            textTransform='uppercase'
            letterSpacing='1px'
            mb='17px'>
            {heading}
          </Heading>
          <Link
            display='flex'
            alignItems='center'
            href='/headphones'
            textTransform='uppercase'>
            <Text
              fontSize='13px'
              fontWeight='bold'
              letterSpacing='1px'
              opacity='0.6'>
              SHOP
            </Text>
            <Image
              width='7px'
              height='12px'
              ml='10px'
              src='/shared/desktop/icon-arrow-right.svg'
            />
          </Link>
        </CardBody>
      </Card>
      {/* Links Card */}
    </>
  )
}

export default LinksCard
