import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents an Advance Ruling Application.
 * A formal request made by an importer or exporter to customs authorities seeking a binding 
 * decision on specific customs matters (like tariff classification, origin, or valuation) 
 * prior to the actual importation or exportation of goods.
 */
export interface AdvanceRulingApplication {
  documentIdentifier?: string; // The application reference number

  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issueDate?: string;

  // --- Parties ---
  advanceRulingApplicant?: AdvanceRulingParty; // The entity applying for the ruling
  advanceRulingApplicationRecipient?: AdvanceRulingParty; // Typically the Customs Authority

  // --- Transaction Details ---
  natureOfTransaction?: string; // e.g., "Sale", "Free of Charge", "Temporary Import"

  // --- Goods Details ---
  /** List of goods for which the advance ruling is being requested */
  goods?: AdvanceRulingGoodsItem[]; // Mapped from @set container
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Advance Ruling Application.
 * Shared across Applicant and Recipient.
 */
export interface AdvanceRulingParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents an individual goods line item subject to the ruling.
 */
export interface AdvanceRulingGoodsItem {
  description?: string;
  hsCode?: string; // Harmonized System Code being proposed or queried
}

export type AdvanceRulingApplicationW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & AdvanceRulingApplication;
};

export type AdvanceRulingApplicationSchema = AdvanceRulingApplicationW3C;