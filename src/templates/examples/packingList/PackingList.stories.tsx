import React, { FunctionComponent } from "react";
import { PackingListTemplate } from "./PackingListTemplate";
import { PackingListSampleW3C } from "./sampleW3C";

export default {
  title: "Packing List",
  component: PackingListTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Packing List Template",
  },
};


export const DefaultInvoice: FunctionComponent = () => {
  return (
    <PackingListTemplate
      document={PackingListSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};