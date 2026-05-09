import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Bill of Exchange.
 * A written, unconditional order by one party (the drawer/issuer) directing another party 
 * (the drawee) to pay a fixed sum of money to a third party (the payee) at a specific date.
 */
export interface BillOfExchange {
  contractNumber?: string;

  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issueDate?: string;
  /** Date format: YYYY-MM-DD */
  paymentDueDate?: string;

  // --- Parties ---
  payee?: BOEParty;      // The entity receiving the payment
  issuer?: BOEParty;     // The entity creating the bill (Drawer)
  drawee?: BOEParty;     // The entity directed to pay the bill
  guarantor?: BOEParty;  // A party guaranteeing the payment (Aval)

  // --- Issuance & Terms ---
  placeOfIssue?: string;
  paymentTerm?: string; // e.g., "At Sight", "30 Days after Bill of Lading"

  // --- Financials ---
  monetaryAmount?: number;
  currencyCode?: string; // e.g., "USD", "EUR", "GBP"
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Bill of Exchange.
 * Shared across Payee, Issuer, Drawee, and Guarantor.
 */
export interface BOEParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

export type BillOfExchangeW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & BillOfExchange;
};

export type BillOfEcxhangeSchema = BillOfExchangeW3C;