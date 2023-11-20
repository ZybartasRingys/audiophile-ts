//Chakra UI
import { Grid, FormLabel, Flex, GridItem } from "@chakra-ui/react";

//Chakra Styles Import
import { formInputStyle, FormLabelHeading } from "../checkoutStyle";

//Components
import InputField from "./InputField";

import {
  FieldValues,
  UseFormRegister,
  // useForm, // don't need this import
} from "react-hook-form";

type ShippingProps = {
  errors: string;
  register: UseFormRegister<FieldValues>;
  name: string;
};

const ShippingInfo: React.FC<ShippingProps> = ({ register, errors }) => {
  return (
    <>
      <Flex flexDir={{ base: "column" }} mb={{ md: "3.875rem" }}>
        <FormLabel {...FormLabelHeading}>Shipping info</FormLabel>
        {/*Address input  */}

        <Grid
          gridTemplateAreas={{
            base: `
            "A A"
            "B B"
            "C C"
            "D D"
            `,
            md: `
          "A A"
          "B C"
          "D ."`,
          }}
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={5}
        >
          <GridItem gridArea={"A"}>
            {/*Address input end  */}

            <InputField
              {...formInputStyle}
              {...register("address", {
                required: "Field can't be empty",
                minLength: 4,
              })}
              placeholder="1137 Williams Avenue"
              type="text"
              label="Your Address"
              errors={errors.address}
            />

            {/*Address input end  */}
          </GridItem>
          <GridItem gridArea={"B"}>
            {/*ZIP Code  input  */}

            <InputField
              autoComplete="off"
              {...register("ZIPCode", {
                required: "Field can't be empty",
                minLength: 4,
              })}
              {...formInputStyle}
              placeholder="10001"
              label="ZIP Code"
              errors={errors.ZIPCode}
              type="number"
            />

            {/*ZIP Code  input end */}
          </GridItem>

          <GridItem gridArea={"C"}>
            {/* City input */}

            <InputField
              autoComplete="off"
              {...register("city", {
                required: "Field can't be empty",
                minLength: 4,
              })}
              {...formInputStyle}
              placeholder="New York"
              label="City"
              errors={errors.city}
            />

            {/*Country input   */}
          </GridItem>

          <GridItem gridArea={"D"}>
            <InputField
              autoComplete="off"
              {...register("country", {
                required: "Field can't be empty",
                minLength: 4,
              })}
              {...formInputStyle}
              placeholder="United States"
              label="Country"
              errors={errors.country}
            />

            {/*City input end  */}
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default ShippingInfo;
