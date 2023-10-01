import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Text,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

import { formLabelStyle } from "./checkoutStyle";

const CheckoutForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Flex width={{ base: "100%" }} height={{ base: "100%" }}>
      <Flex width="100%" justifyContent="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*Billing Address section */}
          <FormLabel
            color="orange.100"
            fontSize="13px"
            lineHeight="25px"
            letterSpacing="1px"
            fontWeight="bold"
          >
            BILLING DETAILS
          </FormLabel>
          <FormControl>
            <FormLabel color="black.100" fontWeight="bold" fontSize="12px">
              Name
            </FormLabel>
            <Input />
            <FormLabel {...formLabelStyle}>Email Address</FormLabel>
            <Input />
            <FormLabel {...formLabelStyle}>Phone Number</FormLabel>
            <Input />
          </FormControl>
          {/*Billing Address section end */}

          {/*Shipping info  section */}
          <FormLabel
            color="orange.100"
            fontSize="13px"
            lineHeight="25px"
            letterSpacing="1px"
            fontWeight="bold"
            textTransform="uppercase"
            mt="30px"
          >
            Shipping info
          </FormLabel>
          <FormControl>
            <FormLabel {...formLabelStyle}>Your Address</FormLabel>
            <Input />
            <FormLabel {...formLabelStyle}>ZIP Code</FormLabel>
            <Input />
            <FormLabel {...formLabelStyle}>City</FormLabel>
            <Input />
            <FormLabel {...formLabelStyle}>Country</FormLabel>
            <Input />
          </FormControl>

          {/*Shipping info  section end */}

          {/*Payment method  section */}
          <FormLabel
            color="orange.100"
            fontSize="13px"
            lineHeight="25px"
            letterSpacing="1px"
            fontWeight="bold"
            textTransform="uppercase"
            mt="30px"
          >
            Payment details
          </FormLabel>
          <FormControl>
            <FormLabel {...formLabelStyle}>Payment Method</FormLabel>
            <Flex flexDir={{ base: "column" }}>
              <Checkbox>e-Money</Checkbox>
              <Checkbox>Cash On Delivery</Checkbox>
            </Flex>

            <FormLabel {...formLabelStyle}>e-Money Number</FormLabel>
            <Input />
            <FormLabel {...formLabelStyle}>e-Money PIN</FormLabel>
            <Input />
          </FormControl>

          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default CheckoutForm;
