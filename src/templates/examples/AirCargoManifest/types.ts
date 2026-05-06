import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents an Air Cargo Manifest.
 * A document detailing the total cargo on board an aircraft, typically used 
 * by customs and airport authorities to process and clear incoming/outgoing freight.
 */
export interface AirCargoManifest {
  // --- Parties ---
  carrier?: AirCargoManifestParty;
  transportEquipmentOperator?: AirCargoManifestParty;

  // --- Locations & Routing ---
  originalLoadingLocation?: string;
  placeOrDeparture?: string; 
  arrivalLocation?: string;

  // --- Goods Details ---
  /** List of consolidated goods summaries covered under this air manifest */
  goods?: AirCargoManifestGoodsItem[]; // Mapped from @set container

  // --- Transport Details ---
  conveyanceReferenceNumber?: string; // e.g., Flight Number
  vehicleRegistrationNumber?: string; // e.g., Aircraft Tail Number
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Air Cargo Manifest.
 * Shared across Carrier and Transport Equipment Operator.
 */
export interface AirCargoManifestParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents a summarized goods line item within the air manifest.
 */
export interface AirCargoManifestGoodsItem {
  description?: string;
  consignmentSummaryDescription?: string;
}

export type AirCargoManifestW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & AirCargoManifest;
};

export type AirCargoManifestSchema = AirCargoManifestW3C;