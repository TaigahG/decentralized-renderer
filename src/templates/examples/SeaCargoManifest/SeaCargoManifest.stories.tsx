import React, { FunctionComponent } from "react";
import { SeaCargoManifestTemplate } from "./SeaCargoManifestTemplate";
import { SeaCargoManifestSampleW3C } from "./sampleW3C";

export default {
  title: "Sea Cargo Manifest",
  component: SeaCargoManifestTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Sea Cargo Manifest Template",
  },
};


export const DefaultSeaCargoManifest: FunctionComponent = () => {
  return (
    <SeaCargoManifestTemplate
      document={SeaCargoManifestSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};