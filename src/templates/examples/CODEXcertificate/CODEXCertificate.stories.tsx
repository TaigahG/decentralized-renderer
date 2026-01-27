import React, { FunctionComponent } from "react";
import { CODEXCertificateTemplate } from "./CODEXCertificateTemplates";
import { CODEXCertificateSampleW3C } from "./sampleW3C";

export default {
  title: "CODEX Generic Model Official Certificate",
  component: CODEXCertificateTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal CODEX Generic Model Official Certificate Template",
  },
};

export const DefaultCODEXCertificate: FunctionComponent = () => {
  return (
    <CODEXCertificateTemplate
      document={CODEXCertificateSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};