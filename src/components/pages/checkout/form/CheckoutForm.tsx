// React hook form
import {
  FieldErrors,
  RegisterOptions,
  UseFormRegister,
  UseFormRegisterReturn,
  useForm,
} from "react-hook-form";

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
  phoneNumber: number;
  address: string;
  ZIPCode: number;
  city: string;
  country: string;
  eMoneyNumber: number;
  eMoneyPin: number;
};

export type CheckoutFormProps = {
  handleSubmit: () => void;
  isValid: boolean;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
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

          <BillingDetails
            register={register}
            errors={errors}
            handleSubmit={function (): void {
              throw new Error("Function not implemented.");
            }}
            isValid={false}
          />

          {/*Billing Address section end */}

          {/*Shipping info  section */}

          <ShippingInfo
            register={register}
            errors={errors}
            handleSubmit={function (): void {
              throw new Error("Function not implemented.");
            }}
            isValid={false}
          />

          {/*Shipping info  section end */}

          {/*Payment method  section */}
          <PaymentDetails
            register={register}
            errors={errors}
            handleSubmit={function (): void {
              throw new Error("Function not implemented.");
            }}
            isValid={false}
          />
          {/*Payment method  section end */}
        </Flex>
        <Summary
          handleSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isValid={isValid}
          register={function <
            TFieldName extends
              | "name"
              | "email"
              | "phoneNumber"
              | "address"
              | "ZIPCode"
              | "city"
              | "country"
              | "eMoneyNumber"
              | "eMoneyPin" =
              | "name"
              | "email"
              | "phoneNumber"
              | "address"
              | "ZIPCode"
              | "city"
              | "country"
              | "eMoneyNumber"
              | "eMoneyPin"
          >(
            _name: TFieldName,
            _options?: RegisterOptions<Inputs, TFieldName> | undefined
          ): UseFormRegisterReturn<TFieldName> {
            throw new Error("Function not implemented.");
          }}
        />
      </Flex>
    </>
  );
};

export default CheckoutForm;
