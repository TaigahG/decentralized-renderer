import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Road Consignment Note (CMR).
 * A standard document used in international road freight transport that serves as proof 
 * of the contract of carriage, receipt of the goods, and delivery instructions.
 */
export interface RoadConsignmentNote {
  documentIdentifier?: string; // Often the CMR number

  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issueDate?: string;
  /** Date format: YYYY-MM-DD */
  deliveryDate?: string;
  /** Date format: YYYY-MM-DD */
  consignmentLoadingDate?: string;

  // --- Parties ---
  buyer?: RoadParty;
  carrierTransportServicesProvider?: RoadParty;
  consignee?: RoadParty;
  consignor?: RoadParty;
  issuer?: RoadParty;

  // --- Locations & Routing ---
  placeOfTheDeliveryOfTheGoods?: string;
  destinationCountry?: string;
  baseportUnloadingLocation?: string;
  placeOfIssue?: string;

  // --- Weights & Measures ---
  grossWeight?: number;
  grossWeightUnit?: string; // e.g., "KGM"
  volume?: number;
  volumeUnit?: string; // e.g., "MTQ"

  // --- Goods Details ---
  /** List of goods covered under this road consignment note */
  goods?: RoadGoodsItem[]; // Mapped from @set container

  // --- Transport & Equipment ---
  transportMeansIdentifier?: string; // e.g., Truck make/model or fleet ID
  vehicleRegistrationNumber?: string; // e.g., License plate number of the truck/trailer
  transportEquipmentIdentifier?: string; // e.g., Container or swap body number
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Road Consignment Note.
 * Shared across Buyer, Carrier, Consignee, Consignor, and Issuer.
 */
export interface RoadParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents an individual goods line item in the road shipment.
 */
export interface RoadGoodsItem {
  description?: string;
  numberOfPackages?: number;
  hsCode?: string; // Harmonized System Code for customs
}

export type RoadConsignmentNoteW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & RoadConsignmentNote;
};

export type RoadConsignmentNoteSchema = RoadConsignmentNoteW3C;