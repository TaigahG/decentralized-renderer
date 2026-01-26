import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface RailConsignmentNote {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Header Information ---
  consignmentNoteNumber?: string;
  contractType?: string; // e.g., "CIM", "SMGS", "CIM/SMGS"
  
  /** Date format: ISO 8601 DateTime (YYYY-MM-DDThh:mm:ss) */
  destinationStationDateStamp?: string;

  // --- Parties ---
  consignor?: RailParty;
  consignee?: RailParty;
  railwayUndertaking?: RailwayUndertaking;

  // --- Route & Transport ---
  departureStation?: string;
  destinationStation?: string;
  wagonNumber?: string;
  
  /** List of border crossing points */
  borderCrossings?: BorderCrossing[]; // Mapped from @set container

  // --- Goods Details ---
  /** List of goods items loaded on the wagon */
  goodsDetails?: RailGoodsDetail[]; // Mapped from @set container

  // --- Payment / Franking ---
  frankingInstructions?: FrankingInstructions;

  // --- Metadata ---
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

/**
 * Standard party definition for Rail Consignment Note.
 */
export interface RailParty {
  name?: string;
  address?: string;
  countryCode?: string;
}

export interface RailwayUndertaking {
  carrierName?: string;
  carrierCode?: string; // e.g., RICS code
}

export interface BorderCrossing {
  stationCode?: string;
  stationName?: string;
  crossingType?: string; // e.g., "Transit", "Entry", "Exit"
}

export interface RailGoodsDetail {
  descriptionOfGoods?: string;
  nhmCode?: string; // Harmonized Commodity Code (Rail specific)
  hsCode?: string; // Harmonized System Code
  
  mass?: Measurement;
  
  isDangerous?: boolean;
  ridDangerousGoods?: RIDDangerousGoods;
}

/**
 * Regulations concerning the International Carriage of Dangerous Goods by Rail (RID).
 */
export interface RIDDangerousGoods {
  unNumber?: string;
  ridClass?: string;
  packingGroup?: string;
  properShippingName?: string;
}

export interface Measurement {
  value?: number;
  unit?: string;
}

export interface FrankingInstructions {
  paymentTerms?: string; // e.g., "Paid", "To Collect"
  paidToStation?: string;
  senderPaysUntil?: string; // Station code or name
  receiverPaysFrom?: string; // Station code or name
}

export type RailConsignmentNoteW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & RailConsignmentNote;
};

export type RailConsignmentNoteSchema = RailConsignmentNoteW3C;