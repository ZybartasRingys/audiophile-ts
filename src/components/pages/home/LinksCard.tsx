//Chakra ui
import { Card, CardBody, Heading, Image, Link, Text } from "@chakra-ui/react";

type LinksProps = {
  heading: string;
  image: string;
};

const LinksCard: React.FC<LinksProps> = ({ heading, image }) => {
  return (
    <>
      {/* Links Card */}
      <Card
        width={{ base: "100%" }}
        maxW={{ md: "13.6rem", lg: "22.2rem" }}
        height={{ base: "10.3125rem", lg: "12.75rem" }}
      >
        <CardBody
          display="flex"
          alignItems="center"
          flexDir="column"
          bgColor="white.300"
          pb={{ lg: "1.875rem" }}
        >
          <Image
            src={image}
            mt={{ base: "-70px", lg: "-90px" }}
            width={{ base: "150px", lg: "200px" }}
            height={{ base: "132px", lg: "180px" }}
            loading="lazy"
            alt="product"
          />

          <Heading
            fontSize=".9375rem"
            fontFamily="main.100"
            textTransform="uppercase"
            letterSpacing="1px"
            mb="1.0625rem"
          >
            {heading}
          </Heading>
          <Link
            display="flex"
            alignItems="center"
            href={`/${heading}`}
            textTransform="uppercase"
            _hover={{ textDecoration: "none" }}
          >
            <Text
              fontSize=".8125rem"
              fontWeight="bold"
              letterSpacing="1px"
              opacity="0.6"
              cursor="pointer"
              _hover={{ color: "orange.100", opacity: "1" }}
            >
              SHOP
            </Text>
            <Image
              width=".4375rem"
              height=".75rem"
              ml=".625rem"
              src="/shared/desktop/icon-arrow-right.svg"
              alt="arrow"
            />
          </Link>
        </CardBody>
      </Card>
      {/* Links Card */}
    </>
  );
};

export default LinksCard;
