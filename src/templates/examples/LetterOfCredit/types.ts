import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Letter of Credit (Documentary Credit).
 * A binding document issued by a bank on behalf of a buyer, guaranteeing that a seller 
 * will receive payment in full as long as certain delivery conditions and documents have been met.
 */
export interface LetterOfCredit {
  documentaryCreditIdentifier?: string; // The L/C Number

  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  documentaryCreditDocumentIssueDate?: string;
  /** Date format: YYYY-MM-DD */
  documentaryCreditDocumentEffectiveEndDate?: string; // The Expiry Date

  // --- Parties ---
  applicant?: LCParty; // The Buyer
  documentaryCreditAvailableBank?: LCBank; // The Advising/Negotiating Bank
  documentaryCreditBeneficiary?: LCBeneficiary; // The Seller

  // --- Financials ---
  documentaryCreditAmount?: number;
  currencyCode?: string; // e.g., "USD", "EUR"
}

// --- Sub-Interfaces ---

/**
 * Base representation of the Applicant (Buyer) in the Letter of Credit.
 * Contains full contact details.
 */
export interface LCParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents the Beneficiary (Seller) of the Letter of Credit.
 * Note: Based on your context, this entity does not include city/country/email.
 */
export interface LCBeneficiary {
  name?: string;
  addressLine?: string;
}

/**
 * Represents the Bank where the Letter of Credit is available.
 * Note: Based on your context, this entity does not include city/country/email.
 */
export interface LCBank {
  name?: string;
  addressLine?: string;
}

export type LetterOfCreditW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & LetterOfCredit;
};

export type LetterOfCreditSchema = LetterOfCreditW3C;