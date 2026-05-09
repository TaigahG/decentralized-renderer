import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Payment Confirmation.
 * A financial document issued to confirm that a specific payment has been successfully 
 * processed and transferred from the payer (invoicee) to the payee.
 */
export interface PaymentConfirmation {
  invoiceNumber?: string; // Links this payment to a specific commercial invoice

  // --- Parties ---
  invoicee?: PaymentConfirmationParty; // The entity making the payment (Payer)
  payee?: PaymentConfirmationParty;    // The entity receiving the payment (Beneficiary)

  // --- Payment Details ---
  accountHolderName?: string;
  
  // --- Financials ---
  monetaryAmount?: number;
  currencyCode?: string; // e.g., "USD", "EUR", "GBP"
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Payment Confirmation.
 * Shared across Invoicee and Payee.
 */
export interface PaymentConfirmationParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

export type PaymentConfirmationW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & PaymentConfirmation;
}

export type PaymentConfirmationSchema = PaymentConfirmationW3C;