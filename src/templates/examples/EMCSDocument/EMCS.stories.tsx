import React, { FunctionComponent } from "react";
import { EMCSTemplate } from "./EMCSTemplate";
import { EMCSSampleW3C } from "./sampleW3C";

export default {
  title: "EMCS",
  component: EMCSTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Administrative Documents used in the Excise Movement Control System",
  },
};

export const DefaultEMCS: FunctionComponent = () => {
  return (
    <EMCSTemplate
      document={EMCSSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};