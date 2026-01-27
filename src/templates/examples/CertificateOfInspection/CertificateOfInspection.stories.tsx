import React, { FunctionComponent } from "react";
import { CertificateOfInspectionTemplate } from "./CertificateOfInspectionTemplate";
import { CertificateOfInspectionSampleW3C } from "./sampleW3C";

export default {
  title: "Certificate of Inspection for Organic Products",
  component: CertificateOfInspectionTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Certificate of Inspection for Organic Products Template",
  },
};


export const DefaultCertificateOfInspection: FunctionComponent = () => {
  return (
    <CertificateOfInspectionTemplate
      document={CertificateOfInspectionSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};