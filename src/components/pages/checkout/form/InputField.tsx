import { forwardRef } from "react";
import { Input, Flex, Text, Box } from "@chakra-ui/react";
import { formInputStyle, formLabelStyle } from "../checkoutStyle";

type InputFieldProps = {
  placeholder: string;
  errors?: { message: string } | undefined;
  label: string;
  type: string;
  [prop: string]: unknown;
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const { placeholder, label, type, ...other } = props;

    let errorMessage;
    if (props.errors) {
      errorMessage = props.errors.message;
    }

    return (
      <>
        <Flex flexDir={{ base: "column" }} width="100%">
          <Flex width="100%" flexDir={{ base: "column" }}>
            <Flex
              justifyContent={{ base: "space-between" }}
              mb={{ base: ".5625rem" }}
              width="100%"
            >
              <Box as="label" {...formLabelStyle}>
                {label}
              </Box>

              <Text
                fontFamily="main.100"
                fontSize={{ base: "12px" }}
                fontWeight="medium"
                letterSpacing="-0.2"
                color="#CD2C2C"
              >
                {errorMessage}
              </Text>
            </Flex>
          </Flex>
          <Input
            ref={ref}
            placeholder={placeholder}
            type={type}
            {...formInputStyle}
            id={label}
            {...other}
            width="100%"
            autoComplete="off"
          />
        </Flex>
      </>
    );
  }
);

export default InputField;
