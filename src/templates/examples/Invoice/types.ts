import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Invoice document structure matching your VC's flat structure
 */
export interface InvoiceDocument {
  invoiceId?: string;
  invoiceName?: string;
  date?: string;
  customerId?: string;
  terms?: string;
  
  // Bill From (flat structure)
  billFromName?: string;
  billFromStreetAddress?: string;
  billFromCity?: string;
  billFromPostalCode?: string;
  billFromPhoneNumber?: string;
  
  // Bill To (flat structure)
  billToName?: string;
  billToEmail?: string;
  
  // Bill To Company (flat structure)
  billToCompanyName?: string;
  billToCompanyStreetAddress?: string;
  billToCompanyCity?: string;
  billToCompanyPostalCode?: string;
  billToCompanyPhoneNumber?: string;
  
  // Billable Items (single item)
  billableItemsDescription?: string;
  billableItemsQuantity?: string | number;
  billableItemsRate?: string | number;
  billableItemsAmount?: number;
  
  // Totals
  subtotal?: number;
  tax?: number;
  taxTotal?: number;
  total?: number;
}

/**
 * W3C Verifiable Credential format for Invoice
 */
export type InvoiceW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & InvoiceDocument;
};

/**
 * Main schema type - supports W3C VC format
 */
export type InvoiceSchema = InvoiceW3C;