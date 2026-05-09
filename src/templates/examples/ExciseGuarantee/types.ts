import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents an Excise Guarantee.
 * A financial document ensuring that the excise duties on specific goods (like alcohol or tobacco) 
 * will be paid to the relevant authorities if the goods do not reach their intended destination 
 * or if a tax irregularity occurs during transit.
 */
export interface ExciseGuarantee {
  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issueDate?: string;

  // --- Parties ---
  importer?: ExciseGuaranteeParty;
  exporter?: ExciseGuaranteeParty;
  guarantor?: ExciseGuaranteeParty;
  exciseGuaranteeBeneficiary?: ExciseGuaranteeParty; // Typically the Customs/Tax Authority

  // --- Guarantee Terms & Financials ---
  conditionsOfGuarantee?: string;
  
  taxOrFeeAssessmentBasisAmount?: number;
  taxOrFeeAssessmentBasisAmountCurrency?: string; // e.g., "EUR", "GBP"
  
  exciseDutyAmount?: number;
  exciseDutyAmountCurrency?: string; // e.g., "EUR", "GBP"
  
  typeOfExciseDuty?: string; // e.g., "Alcohol", "Tobacco", "Energy"

  // --- Volume/Quantity ---
  quantity?: number;

  // --- Goods Details ---
  /** List of the specific goods covered by this guarantee */
  goods?: ExciseGuaranteeGoodsItem[]; // Mapped from @set container
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Excise Guarantee document.
 * Shared across Importer, Exporter, Guarantor, and Beneficiary.
 */
export interface ExciseGuaranteeParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents an individual goods line item covered under the guarantee.
 */
export interface ExciseGuaranteeGoodsItem {
  description?: string;
  productIdentifier?: string; // e.g., Specific Excise Product Code (EPC)
  hsCode?: string; // Harmonized System Code
}

export type ExciseGuaranteeW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & ExciseGuarantee;
}

export type ExciseGuaranteeSchema = ExciseGuaranteeW3C;