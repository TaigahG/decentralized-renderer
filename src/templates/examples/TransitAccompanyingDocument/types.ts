import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Transit Accompanying Document (TAD).
 * A customs document used in international logistics to accompany goods moving under a 
 * transit procedure (like the New Computerised Transit System - NCTS in Europe), 
 * ensuring that customs duties are suspended until the goods reach their final destination.
 */
export interface TransitAccompanyingDocument {
  documentIdentifier?: string; // Often the MRN (Master Reference Number)

  // --- Customs Offices ---
  customsOfficeOfDestinationName?: string;
  customsOfficeOfTransitName?: string;
  customsOfficeOfGuaranteeLocation?: string;

  // --- Parties ---
  consignee?: TADParty;
  agent?: TADParty; // Customs broker or representative handling the transit
  consignor?: TADParty;

  // --- Guarantee & Financials ---
  typeOfTransitGuarantee?: string; // e.g., "Comprehensive guarantee", "Cash deposit"
  monetaryAmount?: number; // Guarantee amount
  monetaryAmountCurrency?: string;
  customsValue?: number; // Value of goods for customs purposes
  customsValueCurrency?: string;

  // --- Weights & Measures ---
  netWeight?: number;
  netWeightUnit?: string; // e.g., "KGM"
  quantity?: number;

  // --- Goods Details ---
  /** List of goods covered under this transit document */
  goods?: TADGoodsItem[]; // Mapped from @set container

  // --- Transport Details ---
  conveyanceReferenceNumber?: string; // e.g., Voyage, Flight, or Trip Number
  modeOfTransport?: string; // e.g., "Sea", "Road", "Rail"
  sealIdentifier?: string; // Critical for transit: Customs security seal number
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Transit Accompanying Document.
 * Shared across Consignee, Agent, and Consignor.
 */
export interface TADParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents an individual goods line item moving under transit.
 */
export interface TADGoodsItem {
  description?: string;
  numberOfPackages?: number;
  hsCode?: string; // Harmonized System Code
}

export type TransitAccompanyingDocumentW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & TransitAccompanyingDocument;
};

export type TransitAccompanyingDocumentSchema = TransitAccompanyingDocumentW3C;