import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Sea Waybill.
 * A transport document used in maritime trade that serves as a receipt for the goods and 
 * evidence of the contract of carriage, but unlike a Bill of Lading, it is not a document of title.
 */
export interface SeaWaybill {
  // --- Document Identifiers ---
  documentId?: string;
  shipmentId?: string;
  billOfLadingNumber?: string; // Often shares the same numbering system as a B/L
  freightForwarderReferenceNumber?: string;

  // --- Parties ---
  carrier?: SeaWaybillParty;
  consignee?: SeaWaybillParty;
  notifyParty?: SeaWaybillParty;
  consignor?: SeaWaybillParty;

  // --- Routing & Locations ---
  placeOfTheDeliveryByCarrier?: SeaWaybillDeliveryPlace;
  originalLoadingLocation?: string;
  paymentLocation?: string;
  baseportUnloadingLocation?: string;

  // --- Weights & Measures ---
  grossWeight?: number;
  volume?: number;

  // --- Goods Details ---
  /** List of goods covered under this Sea Waybill */
  goods?: SeaWaybillGoodsItem[]; // Mapped from @set container

  // --- Transport & Equipment ---
  modeOfTransport?: string;
  containerSizeAndTypeCode?: string; // e.g., "40H0" for 40ft High Cube
  fullOrEmptyContainer?: string; // e.g., "FCL", "LCL", "Empty"
  transportMeansIdentifier?: string; // e.g., Vessel Name
  transportEquipmentIdentifier?: string; // e.g., Container Number
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Sea Waybill.
 * Shared across Carrier, Consignee, Notify Party, and Consignor.
 */
export interface SeaWaybillParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents the specific location where the carrier delivers the goods.
 */
export interface SeaWaybillDeliveryPlace {
  name?: string;
  address?: string; // Note: Uses 'address' instead of 'addressLine' based on your context
}

/**
 * Represents an individual goods line item in the shipment.
 */
export interface SeaWaybillGoodsItem {
  description?: string;
  numberOfPackages?: number;
  typeOfPackaging?: string; // e.g., "Pallets", "Cartons"
}

export type SeaWaybillW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & SeaWaybill;
}

export type SeaWaybillSchema = SeaWaybillW3C;