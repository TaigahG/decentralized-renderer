import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Shipper's Letter of Instructions (SLI).
 * A document issued by a shipper to a freight forwarder, providing all the necessary 
 * details and instructions to successfully move a shipment.
 */
export interface ShipperLetterOfInstructions {
  // --- Document Identifiers ---
  documentId?: string;
  shipmentId?: string;

  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issueDate?: string;
  /** Date format: YYYY-MM-DD */
  despatchDate?: string;

  // --- Parties ---
  consignee?: SLIParty;
  freightForwarder?: SLIParty;
  consignor?: SLIParty;

  // --- Location & Trade Terms ---
  despatchLocationName?: string;
  originCountry?: string;
  placeOfIssue?: string;
  tradeTermsConditionsDescription?: string; // e.g., Incoterms like "FOB Shanghai"

  // --- Weights ---
  grossWeight?: number;
  netWeight?: number;

  // --- Goods Details ---
  /** List of goods included in this shipment */
  goods?: SLIGoodsItem[]; // Mapped from @set container
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Shipper's Letter of Instructions.
 * Shared across Consignee, Freight Forwarder, and Consignor.
 */
export interface SLIParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents an individual goods line item in the shipment.
 */
export interface SLIGoodsItem {
  description?: string;
  numberOfPackages?: number;
  typeOfPackaging?: string; // e.g., "Pallets", "Cartons"
  hsCode?: string; // Harmonized System Code
}

export type ShipperLetterOfInstructionsW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & ShipperLetterOfInstructions;
}

export type ShipperLetterOfInstructionsSchema = ShipperLetterOfInstructionsW3C;