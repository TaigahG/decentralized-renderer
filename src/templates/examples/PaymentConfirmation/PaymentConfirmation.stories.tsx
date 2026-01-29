import React, { FunctionComponent } from "react";
import { PaymentConfirmationTemplate } from "./PaymentConfirmationTemplate";
import { PaymentConfirmationSampleW3C } from "./sampleW3C";

export default {
  title: "Payment Confirmation",
  component: PaymentConfirmationTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Payment Confirmation Template",
  },
};


export const DefaultPaymentConfirmation: FunctionComponent = () => {
  return (
    <PaymentConfirmationTemplate
      document={PaymentConfirmationSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};