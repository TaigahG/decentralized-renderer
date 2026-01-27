import React, { FunctionComponent } from "react";
import { InterVeterinaryCertificateTemplate } from "./InterVeterinaryCertificateTemplate";
import { InterVeterinaryCertificateSampleW3C } from "./sampleW3C";

export default {
  title: "International Veterinary Certificates",
  component: InterVeterinaryCertificateTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal International Veterinary Certificates Template",
  },
};

export const DefaultInterVeterinaryCertificate: FunctionComponent = () => {
  return (
    <InterVeterinaryCertificateTemplate
      document={InterVeterinaryCertificateSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};