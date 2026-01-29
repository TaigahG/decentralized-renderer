import React, { FunctionComponent } from "react";
import { ExciseGuaranteeTemplate } from "./ExciseGuaranteeTemplate";
import { ExciseGuaranteeSampleW3C } from "./sampleW3C";

export default {
  title: "Excise Guarantee",
  component: ExciseGuaranteeTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Excise Guarantee",
  },
};

export const DefaultExciseGuarantee: FunctionComponent = () => {
  return (
    <ExciseGuaranteeTemplate
      document={ExciseGuaranteeSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};