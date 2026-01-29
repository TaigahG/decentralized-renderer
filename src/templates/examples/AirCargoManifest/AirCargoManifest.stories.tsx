import React, { FunctionComponent } from "react";
import { AirCargoManifestTemplate } from "./AirCargoManifestTemplate";
import { AirCargoManifestSampleW3C } from "./sampleW3C";
import { AirCargoManifest } from "./types";

export default {
  title: "Air Cargo Manifest",
  component: AirCargoManifestTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Air Cargo Manifest Template",
  },
};


export const DefaultAirCargoManifest: FunctionComponent = () => {
  return (
    <AirCargoManifestTemplate
      document={AirCargoManifestSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};