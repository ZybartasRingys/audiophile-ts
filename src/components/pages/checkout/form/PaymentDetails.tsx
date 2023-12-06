import { useState } from "react";

//Chakra UI
import {
  FormLabel,
  useRadioGroup,
  Radio,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";

//Chakra Styles Import

import {
  FormLabelHeading,
  formInputStyle,
  formLabelStyle,
} from "../checkoutStyle";

//Components
import InputField from "./InputField";

import {
  FieldValues,
  UseFormRegister,
  // useForm, // don't need this import
} from "react-hook-form";

type PaymentProps = {
  errors: string;
  register: UseFormRegister<FieldValues>;
  name: string;
};

const PaymentDetails: React.FC<PaymentProps> = ({ register, errors }) => {
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
  return (
    <>
      <FormLabel {...FormLabelHeading}>Payment details</FormLabel>
      <FormLabel {...formLabelStyle}>Payment Method</FormLabel>
      <Flex {...group} flexDir={{ base: "column" }}>
        <Grid
          gridTemplateAreas={{
            base: `
          "A A"
          "B B"
          `,
            md: `
        ". A"
        "B B"
        
        `,
          }}
          gap={5}
        >
          <GridItem
            area={"A"}
            display="flex"
            flexDir={{ base: "column" }}
            alignItems={{ md: "end" }}
            gap={{ base: "1rem" }}
          >
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <Flex
                  {...formInputStyle}
                  borderRadius=".5rem"
                  key={value}
                  marginBottom={{ md: "1rem" }}
                  pl="1rem"
                >
                  <Radio colorScheme="orange" {...radio}>
                    {value}
                  </Radio>
                </Flex>
              );
            })}
          </GridItem>

          <GridItem area={"B"} width="100%">
            {checkedOption === options[0] ? (
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
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
              </SimpleGrid>
            ) : (
              <Flex width={{ base: "100%" }} alignItems="center">
                <Image
                  width={{ base: "3rem" }}
                  height={{ base: "3rem" }}
                  mr={{ base: "1.56rem" }}
                  src="/checkout/icon-cash-on-delivery.svg"
                />
                <Text
                  fontFamily="main.100"
                  fontSize={{ base: "1rem" }}
                  fontWeight="medium"
                  lineHeight="25px"
                  opacity="0.5"
                >
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </Text>
              </Flex>
            )}
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default PaymentDetails;
