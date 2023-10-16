import {
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  Text,
  Box,
} from "@chakra-ui/react";

const LinksCard = () => {
  return (
    <>
      {/* Headphones Card */}
      <Card
        width={{ base: "95%" }}
        height={{ base: "165px" }}
        bgColor="white.300"
        mt="60px"
      >
        <CardBody display="flex" alignItems="center" flexDir="column">
          <Box
            width="103px"
            height="120px"
            mt="-60px"
            bgImage="url('/shared/desktop/image-category-thumbnail-headphones.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          ></Box>

          <Text
            fontSize="15px"
            fontFamily="main.100"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="1px"
            mb="17px"
          >
            Headphones{" "}
          </Text>
          <Link
            display="flex"
            alignItems="center"
            href="/headphones"
            textTransform="uppercase"
          >
            <Text
              fontSize="13px"
              fontWeight="bold"
              letterSpacing="1px"
              opacity="0.6"
            >
              SHOP
            </Text>
            <Image
              width="7px"
              height="12px"
              ml="10px"
              src="/shared/desktop/icon-arrow-right.svg"
            />
          </Link>
        </CardBody>
      </Card>
      {/* Headphones Card */}

      {/* Speaker Card */}
      <Card
        width={{ base: "95%" }}
        height={{ base: "165px" }}
        bgColor="white.300"
        mt="80px"
      >
        <CardBody display="flex" alignItems="center" flexDir="column">
          <Box
            width="103px"
            height="120px"
            mt="-60px"
            bgImage="url('public/shared/desktop/image-zx9-speaker-nobg.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          ></Box>
          <Heading
            fontSize="15px"
            fontFamily="main.100"
            textTransform="uppercase"
            letterSpacing="1px"
            mb="17px"
          >
            Speakers
          </Heading>
          <Link
            display="flex"
            alignItems="center"
            href="/speakers"
            textTransform="uppercase"
          >
            <Text
              fontSize="13px"
              fontWeight="bold"
              letterSpacing="1px"
              opacity="0.6"
            >
              SHOP
            </Text>
            <Image
              width="7px"
              height="12px"
              ml="10px"
              src="/shared/desktop/icon-arrow-right.svg"
            />
          </Link>
        </CardBody>
      </Card>
      {/* Speaker  Card */}

      {/* Earphones Card */}
      <Card
        width={{ base: "95%" }}
        height={{ base: "165px" }}
        bgColor="white.300"
        mt="50px"
      >
        <CardBody display="flex" alignItems="center" flexDir="column">
          <Box
            width="103px"
            height="120px"
            mt="-60px"
            bgImage="url('/public/shared/desktop/image-category-thumbnail-earphones.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          ></Box>
          <Heading
            fontSize="15px"
            fontFamily="main.100"
            textTransform="uppercase"
            letterSpacing="1px"
            mb="17px"
          >
            Earphones
          </Heading>
          <Link
            display="flex"
            alignItems="center"
            href="/earphones"
            textTransform="uppercase"
          >
            <Text
              fontSize="13px"
              fontWeight="bold"
              letterSpacing="1px"
              opacity="0.6"
            >
              SHOP
            </Text>
            <Image
              width="7px"
              height="12px"
              ml="10px"
              src="/shared/desktop/icon-arrow-right.svg"
            />
          </Link>
        </CardBody>
      </Card>
      {/* Earphones  Card */}
    </>
  );
};

export default LinksCard;
