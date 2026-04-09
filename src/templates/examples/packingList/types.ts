import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Packing List.
 * A shipping document that provides detailed information about the contents of a package 
 * or shipment, including weights, volumes, and packaging types, but typically excluding pricing.
 */
export interface PackingList {
  // --- Document Identifiers ---
  documentId?: string;
  shipmentId?: string;

  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issueDate?: string;

  // --- Parties ---
  buyer?: PackingListParty;
  consignee?: PackingListParty;
  seller?: PackingListParty;

  // --- Location ---
  placeOfTheDeliveryByCarrier?: DeliveryPlace;

  // --- Weights & Measures ---
  netWeight?: number;
  volume?: number;

  // --- Goods Details ---
  /** List of goods and how they are packed */
  goods?: PackingListGoodsItem[]; // Mapped from @set container

  // --- Transport Details ---
  conveyanceReferenceNumber?: string; // e.g., Voyage or Flight Number
  transportMeansIdentifier?: string;  // e.g., Vessel Name
  vehicleRegistrationNumber?: string; // e.g., Truck License Plate
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Packing List.
 * Shared across Buyer, Consignee, and Seller.
 */
export interface PackingListParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents the specific delivery location.
 */
export interface DeliveryPlace {
  name?: string;
  address?: string; // Note: Context uses 'address' here, not 'addressLine'
}

/**
 * Represents an individual packaged goods line item.
 */
export interface PackingListGoodsItem {
  description?: string;
  numberOfPackages?: number;
  typeOfPackaging?: string; // e.g., "Pallets", "Cartons", "Crates"
}

export type PackingListW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & PackingList;
}

export type PackingListSchema = PackingListW3C;