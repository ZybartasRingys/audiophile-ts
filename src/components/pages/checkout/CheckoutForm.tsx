// React hook form
import { useForm } from "react-hook-form";

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

import Summary from "./Summary";

const CheckoutForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("submited");
  };
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
          {/*Billing Address section */}
          <FormLabel {...FormLabelHeading}>BILLING DETAILS</FormLabel>
          <FormControl>
            <Flex justifyContent="space-between" width="100%">
              <FormLabel color="black.100" fontWeight="bold" fontSize="12px">
                Name
              </FormLabel>
              <Text
                fontFamily="main.100"
                fontSize={{ base: "12px" }}
                fontWeight="medium"
                letterSpacing="-0.2"
                color="#CD2C2C"
              >
                {errors.name?.message}
              </Text>
            </Flex>

            <Input
              autoComplete="offer"
              _focusVisible={{ borderColor: "orange.100" }}
              {...register("name", {
                required: "Required",
              })}
              {...formInputStyle}
              placeholder="Alexei Ward"
            />
            <FormLabel {...formLabelStyle}>Email Address</FormLabel>
            <Input {...formInputStyle} />
            <FormLabel {...formLabelStyle}>Phone Number</FormLabel>
            <Input {...formInputStyle} />
          </FormControl>
          {/*Billing Address section end */}

          {/*Shipping info  section */}
          <FormLabel {...FormLabelHeading}>Shipping info</FormLabel>
          <FormControl>
            <FormLabel {...formLabelStyle}>Your Address</FormLabel>
            <Input {...formInputStyle} />
            <FormLabel {...formLabelStyle}>ZIP Code</FormLabel>
            <Input {...formInputStyle} />
            <FormLabel {...formLabelStyle}>City</FormLabel>
            <Input {...formInputStyle} />
            <FormLabel {...formLabelStyle}>Country</FormLabel>
            <Input {...formInputStyle} />
          </FormControl>

          {/*Shipping info  section end */}

          {/*Payment method  section */}
          <FormLabel {...FormLabelHeading}>Payment details</FormLabel>
          <FormControl>
            <FormLabel {...formLabelStyle}>Payment Method</FormLabel>
            <Flex flexDir={{ base: "column" }}>
              <Checkbox variant="circular">e-Money</Checkbox>
              <Checkbox>Cash On Delivery</Checkbox>
            </Flex>

            <FormLabel {...formLabelStyle}>e-Money Number</FormLabel>
            <Input {...formInputStyle} />
            <FormLabel {...formLabelStyle}>e-Money PIN</FormLabel>
            <Input {...formInputStyle} />
          </FormControl>
        </form>
      </Flex>

      <Summary handleSubmit={handleSubmit(onSubmit)} />
    </Flex>
  );
};

export default CheckoutForm;
