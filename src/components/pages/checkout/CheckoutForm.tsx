import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

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
            <Input
              width={{ base: "280px" }}
              height={{ base: "56px" }}
              defaultValue="Alexei Ward"
              color="grey.100"
            />
            <FormLabel>Email Address</FormLabel>
            <Input />
            <FormLabel>Phone Number</FormLabel>
            <Input />
          </FormControl>
          {/*Billing Address section end */}

          {/*Shipping info  section */}
          <FormLabel>Shipping info</FormLabel>
          <FormControl>
            <FormLabel>Your Address</FormLabel>
            <Input />
            <FormLabel>ZIP Code</FormLabel>
            <Input />
            <FormLabel>City</FormLabel>
            <Input />
            <FormLabel>Country</FormLabel>
            <Input />
          </FormControl>
          {/*Shipping info  section end */}
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
