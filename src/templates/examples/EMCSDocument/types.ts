import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents an EMCS (Excise Movement and Control System) Document.
 * An electronic document used within the EU to track movements of excise goods 
 * (like alcohol, tobacco, and energy products) under duty suspension.
 */
export interface EMCS {
  invoiceNumber?: string;
  freightForwarderReferenceNumber?: string;
  eoriNumber?: string; // Economic Operators Registration and Identification number

  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issueDate?: string;
  /** Date format: YYYY-MM-DD */
  despatchDate?: string;
  /** Date format: YYYY-MM-DD */
  invoiceDate?: string;

  // --- Parties ---
  importer?: EMCSParty;
  exporter?: EMCSParty;
  guarantor?: EMCSParty;

  // --- Locations ---
  destinationCountry?: string;
  exportationCountry?: string;

  // --- Financial & Tax Data ---
  exciseDutyAmount?: number;
  exciseDutyAmountCurrency?: string; // e.g., "EUR", "USD"

  // --- Weights & Measures ---
  grossWeight?: number;
  grossWeightUnit?: string; // e.g., "KGM"
  netWeight?: number;
  netWeightUnit?: string;
  quantity?: number; // Usually references total volume/quantity of excise goods

  // --- Goods Details ---
  /** List of specific excise goods covered under this movement */
  goods?: EMCSGoodsItem[]; // Mapped from @set container

  // --- Transport Details ---
  transportMeansTypeCode?: string; // e.g., "1" for Sea, "3" for Road
  transportMeansIdentifier?: string; // e.g., Truck license plate or Vessel name
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the EMCS Document.
 * Shared across Importer, Exporter, and Guarantor.
 */
export interface EMCSParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents an individual excise goods line item.
 */
export interface EMCSGoodsItem {
  description?: string;
  numberOfPackages?: number;
  shippingMarks?: string;
  productIdentifier?: string; // Specific excise product code (EPC)
  hsCode?: string; // Harmonized System Code
}

export type EMCSW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & EMCS;
}

export type EMCSSchema = EMCSW3C;