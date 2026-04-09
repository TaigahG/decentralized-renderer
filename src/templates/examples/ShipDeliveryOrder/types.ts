import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Ship's Delivery Order (SDO).
 * A document issued by a carrier or its agent, in exchange for a Bill of Lading, 
 * authorizing the release of cargo to the named consignee or party.
 */
export interface ShipDeliveryOrder {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Document Identifiers ---
  documentId?: string;
  shipmentId?: string;
  billOfLadingNumber?: string;

  // --- Parties ---
  carrier?: SDOParty;
  consignee?: SDOParty;

  // --- Location & Routing ---
  placeOfTheDeliveryByCarrier?: PlaceOfDelivery;
  originalLoadingLocation?: string;
  baseportUnloadingLocation?: string;

  // --- Goods Details ---
  grossWeight?: number;
  shippingMarks?: string;

  // --- Transport & Equipment ---
  conveyanceReferenceNumber?: string; // e.g., Voyage Number
  transportMeansIdentifier?: string;  // e.g., Vessel Name
  transportEquipmentIdentifier?: string; // e.g., Container Number
  sealIdentifier?: string;
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Ship's Delivery Order.
 * Shared across Carrier and Consignee.
 */
export interface SDOParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents the specific location where the carrier hands over the goods.
 */
export interface PlaceOfDelivery {
  name?: string;
  addressLine?: string;
}

export type ShipDeliveryOrderW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & ShipDeliveryOrder;
}

export type ShipDeliveryOrderSchema = ShipDeliveryOrderW3C;