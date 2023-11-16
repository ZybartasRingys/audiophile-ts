// React hook form
import { useForm } from "react-hook-form";
import { useState } from "react";

//Chakra UI
import {
  FormLabel,
  FormControl,
  Heading,
  useRadioGroup,
  Radio,
  Flex,
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

const CheckoutForm = () => {
  const options = ["e-Money", "Cash on Delivery"];
  const [checkedOption, setCheckedOption] = useState(options[0]);

  const handleChange = (value: string) => {
    setCheckedOption(value);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Payment Details",
    defaultValue: "e-Money",
    onChange: handleChange,
  });

  const group = getRootProps();

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
    <Flex width="100%" flexDir={{ base: "column" }} borderRadius="8px">
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

      <Flex
        width={{ base: "100%" }}
        justifyContent="center"
        border="2px solid green"
      >
        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          border="1px solid red"
          alignItems="center"
          justifyContent="center"
        >
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

            <Flex {...group} flexDir={{ base: "column" }}>
              {options.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <Flex {...formInputStyle} borderRadius="8px" key={value}>
                    <Radio colorScheme="orange" {...radio}>
                      {value}
                    </Radio>
                  </Flex>
                );
              })}

              {checkedOption === options[0] ? (
                <Flex flexDir={{ base: "column" }} justifyContent="center">
                  <InputField
                    autoComplete="off"
                    {...register("eMoneyNumber", {
                      required: "Field can't be empty",
                      minLength: 4,
                    })}
                    {...formInputStyle}
                    placeholder="238521993"
                    label="e-Money Number"
                    errors={errors.eMoneyNumber}
                  />
                  <InputField
                    autoComplete="off"
                    {...register("eMoneyPin", {
                      required: "Field can't be empty",
                      minLength: 4,
                    })}
                    {...formInputStyle}
                    placeholder="6891"
                    label="e-Money Pin"
                    errors={errors.eMoneyPin}
                  />
                </Flex>
              ) : (
                <Flex width={{ base: "87%" }} border="1px solid red">
                  <Text>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </Text>
                </Flex>
              )}
            </Flex>
          </FormControl>
        </Flex>
      </Flex>

      <Summary handleSubmit={handleSubmit(onSubmit)} errors={errors} />
    </Flex>
  );
};

export default CheckoutForm;
