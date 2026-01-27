import React, { FunctionComponent } from "react";
import { ATACarnetTemplate } from "./ATACarnetTemplate";
import { ATACarnetSampleW3C } from "./sampleW3C";

export default {
  title: "ATA Carnet",
  component: ATACarnetTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal ATA Carnet Template",
  },
};


export const DefaultAirWaybill: FunctionComponent = () => {
  return (
    <ATACarnetTemplate
      document={ATACarnetSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};