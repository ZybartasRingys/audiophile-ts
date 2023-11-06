// React hook form
import { useForm } from "react-hook-form";
import { useState } from "react";

//Chakra UI
import {
  FormLabel,
  FormControl,
  Input,
  Flex,
  Checkbox,
  Heading,
  Text,
} from "@chakra-ui/react";

//Chakra Styles Import
import {
  formLabelStyle,
  formInputStyle,
  FormLabelHeading,
} from "./checkoutStyle";
import { Heading4 } from "../../../chakra/appStyles";

//components
import InputField from "./form/InputField";
import Summary from "./summary/Summary";

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  ZIPCode: string;
  city: string;
  country: string;
  eMoneyNumber: number;
  eMoneyPin: number;
};

interface IFormInputs {
  name: "string";
}

const CheckoutForm: React.FC<IFormInputs> = () => {
  const [checked, setChecked] = useState(true);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("good");
  };

  console.log(errors);
  return (
    <Flex
      width="89%"
      flexDir={{ base: "column" }}
      justifyContent="center"
      borderRadius="8px"
    >
      <Flex
        width={{ base: "100%" }}
        height={{ base: "94px" }}
        alignItems="center"
        px={{ base: "23px" }}
      >
        <Heading {...Heading4} letterSpacing="1px">
          CHECKOUT
        </Heading>
      </Flex>

      <Flex width={{ base: "100%" }} justifyContent="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            {/*Billing Address section */}
            <FormLabel htmlFor="name" {...FormLabelHeading}>
              BILLING DETAILS
            </FormLabel>

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

            {/*Billing Address section end */}

            {/*Shipping info  section */}
            <FormLabel {...FormLabelHeading}>Shipping info</FormLabel>

            {/*Address input  */}
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

            {/*Country input  */}

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

            {/*Country input end  */}

            {/*Shipping info  section end */}

            {/*Payment method  section */}
            <FormLabel {...FormLabelHeading}>Payment details</FormLabel>

            <FormLabel {...formLabelStyle}>Payment Method</FormLabel>
            <Flex flexDir={{ base: "column" }} mb={{ base: "32px" }}>
              <Checkbox
                width={{ base: "280px" }}
                height={{ base: "58px" }}
                display="flex"
                alignItems="center"
                mb={{ base: "15px" }}
                border="1px solid red"
                borderRadius="8px"
                borderColor="#CFCFCF"
                bgColor="white.100"
                variant="circular"
                colorScheme="orange"
                paddingLeft={{ base: "15px" }}
                onChange={() => setChecked(true)}
                defaultChecked
              >
                e-Money
              </Checkbox>

              <Checkbox
                width={{ base: "280px" }}
                height={{ base: "58px" }}
                border="1px solid red"
                borderRadius="8px"
                borderColor="#CFCFCF"
                bgColor="white.100"
                variant="circular"
                colorScheme="orange"
                paddingLeft={{ base: "15px" }}
                onChange={() => setChecked(false)}
              >
                Cash On Delivery
              </Checkbox>
            </Flex>

            {checked === true ? (
              <Flex flexDir={{ base: "column" }}>
                <FormLabel {...formLabelStyle}>e-Money Number</FormLabel>
                <Input {...formInputStyle} placeholder="238521993" />
                <FormLabel {...formLabelStyle}>e-Money PIN</FormLabel>
                <Input {...formInputStyle} placeholder="6891" />
              </Flex>
            ) : null}
          </FormControl>
        </form>
      </Flex>

      <Summary handleSubmit={handleSubmit(onSubmit)} errors={errors} />
    </Flex>
  );
};

export default CheckoutForm;
