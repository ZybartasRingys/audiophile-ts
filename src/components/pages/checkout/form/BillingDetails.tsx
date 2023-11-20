//Chakra UI
import { FormLabel, GridItem, Grid } from "@chakra-ui/react";

//Chakra Styles Import
import { formInputStyle, FormLabelHeading } from "../checkoutStyle";

//Components
import InputField from "./InputField";

import {
  FieldValues,
  UseFormRegister,
  // useForm, // don't need this import
} from "react-hook-form";

type BillingProps = {
  errors: string;
  register: UseFormRegister<FieldValues>;
  name: string;
};

const BillingDetails: React.FC<BillingProps> = ({ errors, register }) => {
  return (
    <>
      <FormLabel htmlFor="name" {...FormLabelHeading}>
        BILLING DETAILS
      </FormLabel>

      <Grid
        gridTemplateColumns={{ md: "repeat(2,1fr)" }}
        gap={5}
        mb={{ md: "3.875rem" }}
      >
        <GridItem gridArea={""}>
          {/*Name input */}
          <InputField
            {...register("name", {
              required: "Field can't be empty",
              minLength: 4,
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
              minLength: 4,
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
              minLength: 8,
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
