import React, { FunctionComponent } from "react";
import { CargoInsuranceTemplate } from "./CargoInsuranceTemplate";
import { CargoInsuranceSampleW3C } from "./sampleW3C";

export default {
  title: "Cargo Insurance",
  component: CargoInsuranceTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal cargo insurance Template",
  },
};


export const DefaultCargoInsurance: FunctionComponent = () => {
  return (
    <CargoInsuranceTemplate
      document={CargoInsuranceSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};