import React, { FunctionComponent } from "react";
import { AirWaybillTemplate } from "./AirWaybillTemplate";
import { AirWaybillSampleW3C } from "./sampleW3C";

export default {
  title: "Air Waybill",
  component: AirWaybillTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Air Waybill Template",
  },
};


export const DefaultAirWaybill: FunctionComponent = () => {
  return (
    <AirWaybillTemplate
      document={AirWaybillSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};