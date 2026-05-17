import React, { FunctionComponent } from "react";
import { TransitAccompanyingDocumentTemplate } from "./TransitAccompanyingDocumentTemplate";
import { TransitAccompanyingDocumentSampleW3C } from "./sampleW3C";

export default {
  title: "Transit Accompanying Document",
  component: TransitAccompanyingDocumentTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Transit Accompanying Document Template",
  },
};

export const DefaultTransitAccompanyingDocument: FunctionComponent = () => {
  return (
    <TransitAccompanyingDocumentTemplate
      document={TransitAccompanyingDocumentSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};
