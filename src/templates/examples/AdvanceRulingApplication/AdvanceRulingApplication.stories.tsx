import React, { FunctionComponent } from "react";
import { AdvanceRulingApplicationTemplate } from "./AdvanceRulingApplicationTemplate";
import { AdvanceRulingApplicationSampleW3C } from "./sampleW3C";

export default {
  title: "Advance Ruling Application",
  component: AdvanceRulingApplicationTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Advance Ruling Application Template",
  },
};

export const DefaultAdvanceRulingApplication: FunctionComponent = () => {
  return (
    <AdvanceRulingApplicationTemplate
      document={AdvanceRulingApplicationSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};
