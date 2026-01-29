import React, { FunctionComponent } from "react";
import { CustomsDeclarationTemplate } from "./CustomsDeclarationTemplate";
import { CustomsDeclarationSampleW3C } from "./sampleW3C";

export default {
  title: "Customs Declaration",
  component: CustomsDeclarationTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Customs Declaration Template",
  },
};

export const DefaultCustomsDeclaration: FunctionComponent = () => {
  return (
    <CustomsDeclarationTemplate
      document={CustomsDeclarationSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};