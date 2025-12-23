import React, { FunctionComponent } from "react";
import { InvoiceTemplate } from "./InvoiceTemplate";
import { InvoiceSampleW3C } from "./sampleW3C";

export default {
  title: "Invoice",
  component: InvoiceTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Invoice Template",
  },
};

/**
 * Default Invoice View
 * Displays your actual VC data structure
 */
export const DefaultInvoice: FunctionComponent = () => {
  return (
    <InvoiceTemplate
      document={InvoiceSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};

/**
 * Invoice with Different Data
 * Example of how to customize the display
 */
export const CustomInvoice: FunctionComponent = () => {
  const customInvoice = {
    ...InvoiceSampleW3C,
    credentialSubject: {
      ...InvoiceSampleW3C.credentialSubject,
      invoiceId: "INV-2024-001",
      invoiceName: "Website Development",
      billFromName: "Your Company Name",
      billToName: "Client Name",
      billToCompanyName: "Client Company",
      billableItemsDescription: "Full-stack website development",
      billableItemsQuantity: "40",
      billableItemsRate: "150",
      billableItemsAmount: 6000,
      subtotal: 6000,
      tax: 10,
      taxTotal: 600,
      total: 6600,
    },
  };

  return (
    <InvoiceTemplate
      document={customInvoice}
      handleObfuscation={() => {}}
    />
  );
};