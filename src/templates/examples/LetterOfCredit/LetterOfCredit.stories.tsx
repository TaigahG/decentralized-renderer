import React, { FunctionComponent } from "react";
import { LetterOfCreditTemplate } from "./LetterOfCreditTemplate";
import { LetterOfCreditSampleW3C } from "./sampleW3C";

export default {
  title: "Letter Of Credit",
  component: LetterOfCreditTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Letter Of Credit",
  },
};

export const DefaultLetterOfCredit: FunctionComponent = () => {
  return (
    <LetterOfCreditTemplate
      document={LetterOfCreditSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};