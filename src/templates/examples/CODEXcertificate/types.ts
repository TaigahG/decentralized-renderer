import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a CODEX Document.
 * Typically used for food safety, quality certification, or compliance 
 * with international food standards.
 */
export interface CODEXCertificate {
  // --- Document & Shipment Identifiers ---
  approvalNumber?: string;
  permitNumber?: string;

  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issueDate?: string;
  /** Date format: YYYY-MM-DD */
  actualDepartureDate?: string;
  /** Date format: YYYY-MM-DD */
  permitExpiryDate?: string;

  // --- Parties ---
  consignee?: CodexParty;
  consignorName?: string; // Note: In this context, consignor is a simple string
  manufacturer?: CodexParty;
  permitIssuer?: CodexParty;

  // --- Locations & Routing ---
  destinationCountry?: string;
  originCountry?: string;
  regionOfOrigin?: string;
  originalLoadingLocation?: string;
  arrivalLocation?: string;
  baseportUnloadingLocation?: string;
  placeOfIssue?: string;
  transitLocation?: string;

  // --- Weights, Quantities & Environment ---
  grossWeight?: number;
  grossWeightUnit?: string;
  
  netWeight?: number;
  netWeightUnit?: string;
  
  transportTemperature?: number;
  transportTemperatureUnit?: string; // e.g., "CEL" (Celsius) or "FAH" (Fahrenheit)
  
  quantity?: number;

  // --- Goods Details ---
  /** List of goods items compliant with Codex standards */
  goods?: CodexGoodsItem[]; // Mapped from @set container

  // --- Transport & Equipment ---
  conveyanceReferenceNumber?: string;
  modeOfTransport?: string;
  transportMeansIdentifier?: string;
  vehicleRegistrationNumber?: string;
  transportEquipmentIdentifier?: string;
  sealIdentifier?: string;
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party or authority in the CODEX document.
 * Shared across Consignee, Manufacturer, and Permit Issuer.
 */
export interface CodexParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents an individual goods line item, including biological identification.
 */
export interface CodexGoodsItem {
  description?: string;
  numberOfPackages?: number;
  typeOfPackaging?: string;
  shippingMarks?: string;
  productIdentifier?: string;
  hsCode?: string;
  nameOfAnimalOrPlant?: string; // Specific biological naming
  specimenDescription?: string; // Detail for biological/food samples
}

export type CODEXCertificateW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & CODEXCertificate;
}

export type CODEXCertificateSchema = CODEXCertificateW3C;