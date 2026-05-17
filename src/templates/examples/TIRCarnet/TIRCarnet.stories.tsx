import React, { FunctionComponent } from "react";
import { TIRCarnetTemplate } from "./TIRCarnetTemplate";
import { TIRCarnetSampleW3C } from "./sampleW3C";

export default {
  title: "TIR Carnet",
  component: TIRCarnetTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal TIRCarnet template",
  },
};


export const DefaultTIRCarnet: FunctionComponent = () => {
  return (
    <TIRCarnetTemplate
      document={TIRCarnetSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};