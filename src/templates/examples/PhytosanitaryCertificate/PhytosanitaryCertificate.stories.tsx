import React, { FunctionComponent } from "react";
import { PhytosanitaryCertificateTemplate } from "./PhytosanitaryCertificateTemplate";
import { PhytosanitaryCertificateSampleW3C } from "./sampleW3C";

export default {
  title: "Phytosanitary Certificate",
  component: PhytosanitaryCertificateTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Phytosanitary Certificate Template",
  },
};

/**
 * Default Phytosanitary Certificate View
 * Shows your actual VC data with many fields as "-"
 */
export const DefaultPhytosanitaryCertificate: FunctionComponent = () => {
  return (
    <PhytosanitaryCertificateTemplate
      document={PhytosanitaryCertificateSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};