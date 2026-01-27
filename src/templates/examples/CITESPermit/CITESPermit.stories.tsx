import React, { FunctionComponent } from "react";
import { CITESPermitTemplate } from "./CITESPermitTemplate";
import { CITESPermitSampleW3C } from "./sampleW3C";

export default {
  title: "CITES Permit Certificate",
  component: CITESPermitTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal CITES Permit/Certificate Template",
  },
};

export const DefaultCITESPermit: FunctionComponent = () => {
  return (
    <CITESPermitTemplate
      document={CITESPermitSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};