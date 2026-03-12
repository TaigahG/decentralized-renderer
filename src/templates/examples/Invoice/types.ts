import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a standard commercial Invoice.
 * Used to request payment for goods or services provided.
 */
export interface InvoiceDocument {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Document Identifiers ---
  documentId?: string;
  shipmentId?: string;
  invoiceNumber?: string;

  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issueDate?: string;
  /** Date format: YYYY-MM-DD */
  invoiceDate?: string;
  /** Date format: YYYY-MM-DD */
  paymentDueDate?: string;

  // --- Parties ---
  billFrom?: InvoiceParty;
  billTo?: BillToParty;

  // --- Line Items ---
  /** List of individual items or services being billed */
  billableItem?: BillableItem[]; // Mapped from @set container

  // --- Totals ---
  tax?: number;
  totalAmount?: number;
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Invoice.
 */
export interface InvoiceParty {
  name?: string;
  addressline?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents the entity being billed, which includes payment destination details.
 */
export interface BillToParty extends InvoiceParty {
  bankName?: string;
  accountName?: string;
  accountNumber?: string;
}

/**
 * Represents an individual line item on the invoice.
 */
export interface BillableItem {
  description?: string;
  quantity?: number;
  amount?: number;
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