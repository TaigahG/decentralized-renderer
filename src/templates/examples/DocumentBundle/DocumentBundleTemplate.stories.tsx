import React, { FunctionComponent } from "react";
import { DocumentBundleTemplate } from "./DocumentBundleTemplate";
import { BundleSampleW3C } from "./sampleW3C";

export default {
  title: "Document Bundle",
  component: DocumentBundleTemplate,
  parameters: {
    componentSubtitle: "Minimal Document Bundle Template",
  },
};

/**
 * Default Bundle View
 * Displays the real VC payload with its attachments.
 */
export const DefaultBundle: FunctionComponent = () => {
  return (
    <DocumentBundleTemplate
      document={BundleSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};
