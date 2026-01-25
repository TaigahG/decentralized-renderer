import React, { FunctionComponent } from "react";
import { SeaWaybillTemplate } from "./SeaWaybillTemplate";
import { SeaWaybillSampleW3C } from "./sampleW3C";

export default {
  title: "Sea Waybill",
  component: SeaWaybillTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal sea waybill Template",
  },
};


export const DefaultInvoice: FunctionComponent = () => {
  return (
    <SeaWaybillTemplate
      document={SeaWaybillSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};