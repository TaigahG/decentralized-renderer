import React, { FunctionComponent } from "react";
import { CustomsBondTemplate } from "./CustomsBondTemplate";
import { CustomsBondSampleW3C } from "./sampleW3C";

export default {
  title: "Customs Bond",
  component: CustomsBondTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Customs Bond Template",
  },
};


export const DefaultCustomsBond: FunctionComponent = () => {
  return (
    <CustomsBondTemplate
      document={CustomsBondSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};