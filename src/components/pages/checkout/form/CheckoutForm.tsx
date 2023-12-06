// React hook form
import { useForm } from "react-hook-form";

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
};

const CheckoutForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("good");
  };

  return (
    <>
      {/* Form heading end */}

      {/* Form container */}

      {/* Form */}
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        width={{ base: "100%" }}
        height={{ base: "100%" }}
        flexDir={{ base: "column" }}
        px={{ base: "24" }}
        borderRadius="0.5rem"
        bgColor="white.100"
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
      <Summary handleSubmit={handleSubmit(onSubmit)} errors={errors} />
    </>
  );
};

export default CheckoutForm;
