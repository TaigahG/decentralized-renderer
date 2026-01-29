import React, { FunctionComponent } from "react";
import { ShipperLetterOfInstructionsTemplate } from "./ShipperLetterOfInstructionsTemplate";
import { ShipperLetterOfInstructionsSampleW3C } from "./sampleW3C";

export default {
  title: "Shipper Letter Of Instructions",
  component: ShipperLetterOfInstructionsTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal shipper letter of Instructions Template",
  },
};


export const DefaultInvoice: FunctionComponent = () => {
  return (
    <ShipperLetterOfInstructionsTemplate
      document={ShipperLetterOfInstructionsSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};