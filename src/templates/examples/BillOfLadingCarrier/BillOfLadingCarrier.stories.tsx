import React, { FunctionComponent } from "react";
import { BillOfLadingCarrierTemplate } from "./BillOfLadingCarrierTemplate";
import { BillOfLadingCarrierSampleW3C } from "./sampleW3C";

export default {
  title: "BillOfLadingCarrier",
  component: BillOfLadingCarrierTemplate,
  parameters: {
    componentSubtitle: "ChainDox Bill of Lading Template",
  },
};

export const Default: FunctionComponent = () => {
  return (
    <BillOfLadingCarrierTemplate
      document={BillOfLadingCarrierSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};

export const MinimalData: FunctionComponent = () => {
  const minimalDoc = {
    ...BillOfLadingCarrierSampleW3C,
    credentialSubject: {
      ...BillOfLadingCarrierSampleW3C.credentialSubject,
      bolId: "MINIMAL-BOL-001",
      consignorName: "Simple Shipper",
      consigneeName: "Simple Consignee",
      goodsDescription: "General Cargo",
      grossWeight: "5000",
    },
  };

  return (
    <BillOfLadingCarrierTemplate
      document={minimalDoc}
      handleObfuscation={() => {}}
    />
  );
};