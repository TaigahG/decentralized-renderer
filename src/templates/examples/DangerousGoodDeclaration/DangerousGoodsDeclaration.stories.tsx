import React, { FunctionComponent } from "react";
import { DangerousGoodsDeclarationTemplate } from "./DangerousGoodsDeclaraionTemplate";
import { DangerousGoodsDeclarationSampleW3C } from "./sampleW3C";

export default {
  title: "Dangerous Goods Declaration",
  component: DangerousGoodsDeclarationTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Dangerous Goods Declaration Template",
  },
};

export const DefaultDangerousGoodsDeclaration: FunctionComponent = () => {
  return (
    <DangerousGoodsDeclarationTemplate
      document={DangerousGoodsDeclarationSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};