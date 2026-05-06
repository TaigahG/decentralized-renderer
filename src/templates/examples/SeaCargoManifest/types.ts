import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Sea Cargo Manifest.
 * A comprehensive document summarizing all bills of lading that have been issued by a carrier 
 * or its representative for a particular voyage, used primarily for customs declarations.
 */
export interface SeaCargoManifest {
  // --- Document Identifiers ---
  documentId?: string;
  shipmentId?: string;
  billOfLadingNumber?: string;

  // --- Parties ---
  consignee?: SeaCargoManifestParty;
  notifyParty?: SeaCargoManifestParty;
  consignor?: SeaCargoManifestParty;

  // --- Locations ---
  placeOfTheDeliveryOfTheGoods?: string;
  originalLoadingLocation?: string;
  baseportUnloadingLocation?: string;

  // --- Weights & Measures ---
  grossWeight?: number;
  grossWeightUnit?: string; // e.g., "KGM", "LBS"
  transportMeansGrossWeight?: number;
  transportMeansGrossWeightUnit?: string;

  // --- Goods Details ---
  /** List of consolidated goods summaries covered under this manifest */
  goods?: SeaCargoManifestGoodsItem[]; // Mapped from @set container

  // --- Transport & Equipment ---
  conveyanceReferenceNumber?: string; // e.g., Voyage Number
  transportMeansIdentifier?: string; // e.g., Vessel Name or IMO Number
  transportEquipmentIdentifier?: string; // e.g., Container Number
  sealIdentifier?: string; // Security seal number
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Sea Cargo Manifest.
 * Shared across Consignee, Notify Party, and Consignor.
 */
export interface SeaCargoManifestParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents a summarized goods line item within the manifest.
 */
export interface SeaCargoManifestGoodsItem {
  consignmentSummaryDescription?: string;
  shippingMarks?: string;
}

export type SeaCargoManifestW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & SeaCargoManifest;
};

export type SeaCargoManifestSchema = SeaCargoManifestW3C;