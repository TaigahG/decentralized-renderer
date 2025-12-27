import React, { FunctionComponent } from "react";
import { BillOfLadingCarrierTemplate } from "./BillOfLadingCarrierTemplate";
import { BillOfLadingCarrierSampleV2, BillOfLadingChainDoxSampleV2 } from "./sampleV2";
import { BillOfLadingCarrierSampleW3C } from "./sampleW3C";

export default {
  title: "BillOfLadingCarrier",
  component: BillOfLadingCarrierTemplate,
  parameters: {
    componentSubtitle: "TradeTrust & ChainDox Compatible Bill of Lading Template",
  },
};

/**
 * TradeTrust Format
 * Standard TradeTrust BILL_OF_LADING_CARRIER format with nested structures
 */
export const TradeTrustFormat: FunctionComponent = () => {
  return (
    <BillOfLadingCarrierTemplate
      document={BillOfLadingCarrierSampleV2}
      handleObfuscation={() => {}}
    />
  );
};

/**
 * ChainDox Format
 * ChainDox Bill of Lading with flat field structure
 */
export const ChainDoxFormat: FunctionComponent = () => {
  return (
    <BillOfLadingCarrierTemplate
      document={BillOfLadingChainDoxSampleV2}
      handleObfuscation={() => {}}
    />
  );
};

/**
 * W3C Verifiable Credential Format
 * Bill of Lading as a W3C VC
 */
export const W3CVerifiableCredential: FunctionComponent = () => {
  return (
    <BillOfLadingCarrierTemplate
      document={BillOfLadingCarrierSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};

/**
 * Minimal Data
 * Bill of Lading with only essential fields
 */
export const MinimalData: FunctionComponent = () => {
  const minimalDoc = {
    ...BillOfLadingCarrierSampleV2,
    blNumber: "MINIMAL-BL-001",
    shipper: {
      name: "Simple Shipper Co.",
    },
    consignee: {
      name: "Simple Consignee Ltd.",
    },
    portOfLoading: "SHANGHAI",
    portOfDischarge: "SINGAPORE",
    descriptionOfGoods: "General Cargo",
    grossWeight: "5000 KGS",
  } as unknown as typeof BillOfLadingCarrierSampleV2;

  return (
    <BillOfLadingCarrierTemplate
      document={minimalDoc}
      handleObfuscation={() => {}}
    />
  );
};

/**
 * To Order Consignment
 * Bill of Lading with "To Order" consignee
 */
export const ToOrderConsignment: FunctionComponent = () => {
  const toOrderDoc = {
    ...BillOfLadingCarrierSampleV2,
    blNumber: "TO-ORDER-BL-001",
    consignee: {
      name: "",
      toOrder: true,
    },
  };

  return (
    <BillOfLadingCarrierTemplate
      document={toOrderDoc}
      handleObfuscation={() => {}}
    />
  );
};