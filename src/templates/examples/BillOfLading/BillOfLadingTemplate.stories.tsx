import React, { FunctionComponent } from "react";
import { BillOfLadingTemplate } from "./BillOfLadingTemplate";
import { BillOfLadingSampleW3C } from "./sampleW3C";

export default {
  title: "BillOfLading",
  component: BillOfLadingTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Bill of Lading Template",
  },
};

/**
 * Default Bill of Lading View
 * Shows your actual VC data with many fields as "-"
 */
export const DefaultBillOfLading: FunctionComponent = () => {
  return (
    <BillOfLadingTemplate
      document={BillOfLadingSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};