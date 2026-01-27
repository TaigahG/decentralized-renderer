import React, { FunctionComponent } from "react";
import { ConsignmentSecurityDeclarationTemplate } from "./ConsignmentSecurityDeclarationTemplate";
import { ConsignmentSecurityDeclarationSampleW3C } from "./sampleW3C";

export default {
  title: "Consignment Security Declaration",
  component: ConsignmentSecurityDeclarationTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal consignment security declaration Template",
  },
};


export const DefaultConsignmentSecurityDeclaration: FunctionComponent = () => {
  return (
    <ConsignmentSecurityDeclarationTemplate
      document={ConsignmentSecurityDeclarationSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};