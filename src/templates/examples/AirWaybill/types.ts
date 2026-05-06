import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents an Air Waybill (AWB).
 * A non-negotiable transport document issued by or on behalf of the shipper 
 * that serves as a receipt of goods by an airline and as a contract of carriage.
 */
export interface AirWaybill {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Document Identifiers ---
  documentId?: string;
  shipmentId?: string;
  houseWaybillDocumentIdentifier?: string; // HAWB number
  billOfLadingNumber?: string; // MAWB or related reference

  // --- Parties ---
  carrier?: AWBParty;
  consignee?: AWBParty;
  freightForwarder?: AWBParty;
  transportEquipmentOperator?: AWBParty;
  consignor?: AWBParty;

  // --- Locations & Routing ---
  originalLoadingLocation?: string;
  placeOrDeparture?: string;
  arrivalLocation?: string;

  // --- Contract Details ---
  transportContractDocumentConditions?: string;

  // --- Weights & Measures ---
  grossWeight?: number;
  grossWeightUnit?: string; // e.g., "KGM", "LBS"
  volume?: number;
  volumeUnit?: string; // e.g., "MTQ" (Cubic Meters)

  // --- Goods Details ---
  /** List of goods covered under this Air Waybill */
  goods?: AWBGoodsItem[]; // Mapped from @set container

  // --- Transport Details ---
  conveyanceReferenceNumber?: string; // e.g., Flight Number
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Air Waybill.
 * Shared across Carrier, Consignee, Freight Forwarder, Operator, and Consignor.
 */
export interface AWBParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents an individual goods line item in the air shipment.
 */
export interface AWBGoodsItem {
  description?: string;
  consignmentSummaryDescription?: string;
  numberOfPackages?: number;
  hsCode?: string; // Harmonized System Code for customs
}

export type AirWaybillW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & AirWaybill;
};

export type AirWaybillSchema = AirWaybillW3C;