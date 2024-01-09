// React hook form
import { FieldValues, UseFormRegister, useForm } from "react-hook-form";

//Chakra UI
import { Heading, Flex } from "@chakra-ui/react";

import { Heading4 } from "../../../../chakra/appStyles";

//Components
import Summary from "../summary/Summary";
import BillingDetails from "./BillingDetails";
import ShippingInfo from "./ShippingInfo";
import PaymentDetails from "./PaymentDetails";

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
} & FieldValues;

type ExtendedFieldValues = FieldValues & Inputs;

type CheckoutFormProps = {
  register: UseFormRegister<ExtendedFieldValues>;
};

const CheckoutForm: React.FC<CheckoutFormProps> = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "all" });

  const onSubmit = () => {
    console.log("good");
  };

  return (
    <>
      <Flex
        as="section"
        flexDir={{ base: "column", lg: "row" }}
        gap={{ lg: "1.875rem" }}
        width="100%"
        mb={{ lg: "8.8125rem" }}
      >
        {/* Form */}
        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          width={{ base: "100%" }}
          height={{ base: "100%" }}
          flexDir={{ base: "column" }}
          px={{ base: "24", lg: "3rem" }}
          borderRadius="0.5rem"
          bgColor="white.100"
          pt={{ base: "1.5rem", md: "1.875rem", lg: "3.375rem" }}
          pb={{ base: "1.5rem", md: "1.875rem", lg: "3rem" }}
        >
          {/* Form heading */}
          <Flex
            width={{ base: "100%" }}
            height={{ base: "100%" }}
            alignItems="center"
            mb={{ base: "2rem" }}
          >
            <Heading {...Heading4} letterSpacing="1px">
              CHECKOUT
            </Heading>
          </Flex>

          {/*Billing Address section */}

          <BillingDetails register={register} errors={errors} />

          {/*Billing Address section end */}

          {/*Shipping info  section */}

          <ShippingInfo register={register} errors={errors} />

          {/*Shipping info  section end */}

          {/*Payment method  section */}
          <PaymentDetails register={register} errors={errors} />
          {/*Payment method  section end */}
        </Flex>
        <Summary
          handleSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isValid={isValid}
        />
      </Flex>
    </>
  );
};

export default CheckoutForm;
