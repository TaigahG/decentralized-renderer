import React, { FunctionComponent } from "react";
import { EILIcenseAgriculturalTemplate } from "./EILicenseAgriculturalTemplate";
import { EILIcenseAgriculturalSampleW3C } from "./sampleW3C";

export default {
  title: "EI License of Agricultural Product",
  component: EILIcenseAgriculturalTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Dangerous Export/Import License of Agricultural Product Template",
  },
};

export const DefaultEILicenseAgricultural: FunctionComponent = () => {
  return (
    <EILIcenseAgriculturalTemplate
      document={EILIcenseAgriculturalSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};