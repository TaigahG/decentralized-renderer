import React, { FunctionComponent } from "react";
import { CertificateOfOriginTemplate } from "./CertificateOfOriginTemplate";
import { CertificateOfOriginSampleW3C } from "./sampleW3C";

export default {
  title: "CertificateOfOrigin",
  component: CertificateOfOriginTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Certificate Of Origin Template",
  },
};

/**
 * Default Bill of Lading View
 * Shows your actual VC data with many fields as "-"
 */
export const DefaultBillOfLading: FunctionComponent = () => {
  return (
    <CertificateOfOriginTemplate
      document={CertificateOfOriginSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};