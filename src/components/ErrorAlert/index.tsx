import { Alert, AlertIcon } from "@chakra-ui/alert";
import React from "react";

interface ErrorAlertProps {
  message: string;
}

const ErrorAlert = (props: ErrorAlertProps) => {
  return (
    <Alert status="error">
      <AlertIcon />
      {props.message}
    </Alert>
  );
};

export default ErrorAlert;
