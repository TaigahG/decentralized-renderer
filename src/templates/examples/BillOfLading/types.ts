import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface BillOfLadingDocument {
  // --- Document Identifiers ---
  documentId?: string;
  shipmentId?: string;
  contractNumber?: string;

  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issueDate?: string;
  /** Date format: YYYY-MM-DD */
  consignmentLoadingDate?: string;

  // --- Parties ---
  carrier?: BOLParty;
  consignor?: BOLParty;
  freightPayer?: BOLParty;

  // --- Routing & Contract Details ---
  baseportUnloadingLocation?: string;
  transportContractDocumentConditions?: string;

  // --- Weights & Measures ---
  grossWeight?: string;
  volume?: string;

  // --- Goods Details ---
  /** List of goods items covered under this Bill of Lading */
  goods?: BOLGoodsItem[]; // Mapped from @set container

  // --- Equipment & Transport Details ---
  container?: BOLContainer;
  fullOrEmpty?: string; // e.g., "Full", "Empty", "FCL", "LCL"
  transportMeansIdentifier?: string; // e.g., Vessel name or Voyage number
  vehicleRegistrationNumber?: string; // For multimodal/road transport legs
  sealIdentifier?: string; // Security seal number
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Bill of Lading.
 * Shared across Carrier, Consignor, and Freight Payer.
 */
export interface BOLParty {
  name?: string;
  addressline?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents an individual goods line item in the shipment.
 */
export interface BOLGoodsItem {
  description?: string;
  numberOfPackages?: number;
  hsCode?: string; // Harmonized System Code for customs
}

/**
 * Represents the container equipment details.
 */
export interface BOLContainer {
  size?: string; // e.g., "20ft", "40ft HQ"
  type?: string; // e.g., "Dry Van", "Reefer", "Flat Rack"
}

/**
 * W3C Verifiable Credential format for Bill of Lading
 */
export type BillOfLadingW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & BillOfLadingDocument;
};

/**
 * Main schema type - supports W3C VC format
 */
export type BillOfLadingSchema = BillOfLadingW3C;