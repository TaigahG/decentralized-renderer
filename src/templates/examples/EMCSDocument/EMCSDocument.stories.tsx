import React, { FunctionComponent } from "react";
import { EMCSDocumentTemplate } from "./EMCSDocumentTemplate";
import { EMCSDocumentSampleW3C } from "./sampleW3C";

export default {
  title: "Administrative Documents used in the Excise Movement Control System",
  component: EMCSDocumentTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Administrative Documents used in the Excise Movement Control System",
  },
};

export const DefaultEILicenseAgricultural: FunctionComponent = () => {
  return (
    <EMCSDocumentTemplate
      document={EMCSDocumentSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};