import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface RoadConsignmentNote {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Parties ---
  sender?: CMRParty;
  consignee?: CMRParty;
  carrier?: CMRCarrier;

  // --- Transport Details ---
  placeOfTakingOver?: string;
  /** Date format: ISO 8601 DateTime (YYYY-MM-DDThh:mm:ss) */
  dateOfTakingOver?: string;
  placeOfDelivery?: string;

  // --- Goods Description ---
  marksAndNumbers?: string;
  numberOfPackages?: number;
  methodOfPacking?: string;
  natureOfGoods?: string;
  
  dangerousGoods?: DangerousGoodsDetails;
  
  grossWeight?: Measurement;
  volume?: Measurement;

  // --- Reservations & Instructions ---
  carrierReservations?: CarrierReservations;
  senderInstructions?: string; // Instructions for Customs, etc.
  specialAgreements?: string;

  // --- Execution ---
  establishedAt?: string; // Place where the document was created
  /** Date format: YYYY-MM-DD */
  establishedOn?: string;
  
  signatures?: CMRSignatures;

  // --- Metadata ---
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface CMRParty {
  name?: string;
  address?: string;
  countryCode?: string;
}

export interface CMRCarrier {
  name?: string;
  address?: string;
  stamp?: string; // Text representation or URL to stamp image
}

export interface DangerousGoodsDetails {
  isDangerous?: boolean;
  adrClass?: string; // ADR Class (e.g., "3" for Flammable Liquids)
  unNumber?: string; // UN ID (e.g., "1203")
}

export interface Measurement {
  value?: number;
  unit?: string;
}

export interface CarrierReservations {
  reservationText?: string;
  damagePresentOnPickup?: boolean;
  /** List of photo URLs or references */
  damagePhotos?: string[]; // Mapped from @set container
}

export interface CMRSignatures {
  senderSignature?: SignatureDetail;
  carrierSignature?: SignatureDetail;
  consigneeSignature?: SignatureDetail;
}

export interface SignatureDetail {
  signature?: string; // Name or Digital Signature String
  stamp?: string;
  /** Date format: ISO 8601 DateTime */
  date?: string;
}

export type RoadConsignmentNoteW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & RoadConsignmentNote;
};

export type RoadConsignmentNoteSchema = RoadConsignmentNoteW3C;