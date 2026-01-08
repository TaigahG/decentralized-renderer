import React, { FunctionComponent } from "react";
import { PromissoryNoteTemplate } from "./PromissoryNoteTemplate";
import { PromissoryNoteSampleW3C } from "./sampleW3C";

export default {
  title: "PromissoryNote",
  component: PromissoryNoteTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Promissory Note Template",
  },
};

/**
 * Default Bill of Lading View
 * Shows your actual VC data with many fields as "-"
 */
export const DefaultBillOfLading: FunctionComponent = () => {
  return (
    <PromissoryNoteTemplate
      document={PromissoryNoteSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};