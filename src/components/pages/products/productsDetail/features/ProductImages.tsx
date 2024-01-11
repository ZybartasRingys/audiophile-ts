// Chakra UI
import { Grid, GridItem, Box } from "@chakra-ui/react";
// Sanity
import { urlFor } from "../../../../../../sanity/sanity";
// Css
import "../features/Features.css";

type ProductImagesProps = {
  productImages: Array<string>;
};
const ProductImages: React.FC<ProductImagesProps> = ({ productImages }) => {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "1fr 2fr" }}
      gap={5}
      gridTemplateAreas={{
        base: `
             "A A"
             "B B"
             "C C"
            `,
        md: `
            "A C C"
            "B C C"
            `,

        lg: `
            "A C C"
            "B C C"
            `,
      }}
    >
      {productImages.map((image, index) => (
        <GridItem key={index} className="grid-box">
          <Box
            mb="20px"
            width={{ base: "100%" }}
            height={{ base: "100%" }}
            borderRadius=".5rem"
            bgImage={urlFor(image).url()}
            bgSize={{ base: "cover" }}
            bgPos={{ base: "cover" }}
            bgRepeat="no-repeat"
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProductImages;
