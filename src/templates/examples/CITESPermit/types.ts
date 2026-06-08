import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a CITES Permit / Certificate.
 * An official document required for the international trade, import, or export 
 * of protected species of wild fauna and flora, ensuring the trade does not 
 * threaten their survival.
 */
export interface CITESPermit {
  transportContractDocument?: string; // Link to the waybill, bill of lading, etc.
  permitNumber?: string;

  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issueDate?: string;
  /** Date format: YYYY-MM-DD */
  permitExpiryDate?: string;

  // --- Parties & Authorities ---
  importer?: CITESParty;
  exporter?: CITESParty;
  permitIssuer?: CITESParty;       // The specific office issuing the document
  managementAuthority?: CITESParty; // The national CITES Management Authority

  // --- Regulatory & Routing Countries ---
  consignmentDestinationCountry?: string;
  specimenCountryOfReExport?: string;
  specimenCountryOfOrigin?: string;

  // --- CITES Classifications ---
  citesAppendixReference?: string; // e.g., "Appendix I", "Appendix II", "Appendix III"
  purposeOfCITESTradeTransaction?: string; // e.g., "T" for Commercial, "S" for Scientific, "P" for Personal

  // --- Quotas & Quantities ---
  quantity?: number;         // Quantity of the specific consignment
  annualQuota?: number;      // Total allowed quota for the country/entity per year
  exportedQuantity?: number; // Total quantity exported to date under the quota

  // --- Species Details ---
  nameOfAnimalOrPlant?: string; // Scientific name (e.g., "Panthera leo") or common name
  specimenDescription?: string; // Details on the type of specimen (e.g., "live animal", "skeletal material", "caviar")
}

// --- Sub-Interfaces ---

/**
 * Base representation of an entity, agency, or authority involved in a CITES Permit.
 * Shared across Importer, Exporter, Permit Issuer, and Management Authority.
 */
export interface CITESParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

export type CITESPermitW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & CITESPermit;
}

export type CITESPermitSchema = CITESPermitW3C;