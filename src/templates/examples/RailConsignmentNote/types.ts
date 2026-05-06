import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Rail Consignment Note (often referred to as a CIM Consignment Note).
 * A transport document used in international rail freight that serves as proof 
 * of the contract of carriage between the shipper and the rail carrier.
 */
export interface RailConsignmentNote {
  // --- Parties ---
  consignee?: RailParty;
  consignor?: RailParty;

  // --- Routing ---
  nameOfTheDestinationStation?: string;

  // --- Goods Details ---
  /** List of standard goods covered under this rail consignment note */
  goods?: RailGoodsItem[]; // Mapped from @set container

  /** List of dangerous/hazardous goods covered under this rail consignment note */
  dangerousGoods?: RailDangerousGoodsItem[]; // Mapped from @set container

  // --- Transport & Equipment ---
  transportMeansIdentifier?: string; // e.g., Train number
  vehicleRegistrationNumber?: string; // e.g., Railcar/wagon registration number
  transportEquipmentIdentifier?: string; // e.g., Container number if intermodal
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Rail Consignment Note.
 * Shared across Consignee and Consignor.
 */
export interface RailParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents a standard goods line item.
 */
export interface RailGoodsItem {
  description?: string;
  numberOfPackages?: number;
}

/**
 * Represents a dangerous goods line item, which requires explicit hazard classification.
 */
export interface RailDangerousGoodsItem {
  description?: string;
  numberOfPackages?: number;
  classNumber?: string; // e.g., UN Hazard Class (like "3" for Flammable Liquids)
}

export type RailConsignmentNoteW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & RailConsignmentNote;
};

export type RailConsignmentNoteSchema = RailConsignmentNoteW3C;