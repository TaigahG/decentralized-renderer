import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents an International Veterinary Certificate.
 * An official document issued by a veterinary authority certifying the health status 
 * of animals or animal products to prevent the spread of diseases across borders.
 */
export interface InterVeterinaryCertificate {
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
  consignee?: VetParty;
  consignorName?: string; // Simple string as per context
  manufacturer?: VetParty;
  permitIssuer?: VetParty;

  // --- Locations & Routing ---
  destinationCountry?: string;
  originCountry?: string;
  regionOfOrigin?: string; // e.g., Specific farm, district, or quarantine zone
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
  transportTemperatureUnit?: string; // e.g., "CEL"
  
  quantity?: number;

  // --- Goods Details ---
  /** List of animals or animal products covered by this certificate */
  goods?: VetGoodsItem[]; // Mapped from @set container

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
 * Base representation of a party or authority in the Veterinary Certificate.
 * Shared across Consignee, Manufacturer, and Permit Issuer.
 */
export interface VetParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents an individual animal or animal product line item.
 */
export interface VetGoodsItem {
  description?: string;
  numberOfPackages?: number;
  typeOfPackaging?: string;
  shippingMarks?: string;
  productIdentifier?: string;
  hsCode?: string;
  nameOfAnimal?: string; // Specific common or scientific name
  specimenDescription?: string; // Detailed description for biological samples
}

export type InterVeterinaryCertificateW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & InterVeterinaryCertificate;
}

export type InterVeterinaryCertificateSchema = InterVeterinaryCertificateW3C;