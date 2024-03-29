//Chakra UI
import { Text, GridItem, Grid } from "@chakra-ui/react";

//Chakra Styles Import
import { formInputStyle, FormLabelHeading } from "../checkoutStyle";

//Components
import InputField from "./InputField";

//Types

import { CheckoutFormProps } from "./CheckoutForm";

const BillingDetails: React.FC<CheckoutFormProps> = ({ register, errors }) => {
  return (
    <>
      <Text as="label" htmlFor="name" {...FormLabelHeading}>
        BILLING DETAILS
      </Text>

      <Grid
        gridTemplateColumns={{ md: "repeat(2,1fr)" }}
        gap={{ base: "1.5625rem", md: "1rem" }}
        mb={{ base: "2.1875rem", md: "3.3125rem" }}
      >
        <GridItem gridArea={""}>
          {/*Name input */}
          <InputField
            {...register("name", {
              required: "Field can't be empty",
              minLength: {
                value: 4,
                message: "At least 4 letters",
              },
            })}
            placeholder="Alexei Ward"
            errors={errors.name}
            label="Name"
          />
          {/*Name input end */}
        </GridItem>

        <GridItem>
          {/*Email input */}
          <InputField
            {...register("email", {
              required: "Field can't be empty",
              minLength: {
                value: 4,
                message: "At least 4 letters",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Wrong format",
              },
            })}
            {...formInputStyle}
            placeholder="alexei@mail.com"
            label="Email Address"
            errors={errors.email}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {/*Email input end */}
        </GridItem>

        <GridItem>
          {/*Phone number input */}
          <InputField
            {...register("phoneNumber", {
              required: "Field can't be empty",
              pattern: {
                value: /^(0|[1-9]\d*)(\.\d+)?$/,
                message: "Please enter valid number",
              },
              minLength: {
                value: 8,
                message: "At least 8 numbers",
              },
            })}
            {...formInputStyle}
            placeholder="+1 202-555-0136"
            type="number"
            label="Phone Number"
            errors={errors.phoneNumber}
          />
          {/*Phone input end */}
        </GridItem>
      </Grid>
    </>
  );
};

export default BillingDetails;
