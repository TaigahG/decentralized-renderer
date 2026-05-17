import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Phytosanitary Certificate.
 * An official document issued by the plant protection organization of the exporting country 
 * certifying that the plants or plant products have been inspected and are considered free 
 * from quarantine pests, conforming to the importing country's phytosanitary regulations.
 */
export interface PhytosanitaryCertificate {
  // --- Document & Shipment Identifiers ---
  documentIdentifier?: string; // The certificate reference number
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
  consignee?: PhytoParty;
  consignor?: PhytoParty;
  
  // --- Issuance ---
  permitIssuerName?: string; // e.g., National Plant Protection Organization (NPPO)
  placeOfIssue?: string;

  // --- Locations & Routing ---
  destinationCountry?: string;
  originCountry?: string;
  regionOfOrigin?: string; // Crucial for agricultural goods (e.g., specific farm or state)
  originalLoadingLocation?: string;
  arrivalLocation?: string;
  baseportUnloadingLocation?: string;
  transitLocation?: string;

  // --- Weights, Quantities & Conditions ---
  grossWeight?: number;
  grossWeightUnit?: string; // e.g., "KGM"
  
  netWeight?: number;
  netWeightUnit?: string;
  
  quantity?: number;
  
  transportTemperature?: number;
  transportTemperatureUnit?: string; // e.g., "CEL" for Celsius

  // --- Goods Details ---
  /** List of plants or plant products covered by this certificate */
  goods?: PhytoGoodsItem[]; // Mapped from @set container

  // --- Transport Details ---
  conveyanceReferenceNumber?: string;
  modeOfTransport?: string;
  transportMeansIdentifier?: string;
  vehicleRegistrationNumber?: string;
  transportEquipmentIdentifier?: string;
  sealIdentifier?: string;

  // --- Declarations ---
  certificationText?: string; // The official standard declaration text
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Phytosanitary Certificate.
 * Shared across Consignee and Consignor.
 */
export interface PhytoParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents an individual plant, agricultural product, or goods line item.
 */
export interface PhytoGoodsItem {
  description?: string;
  numberOfPackages?: number;
  typeOfPackaging?: string;
  shippingMarks?: string;
  productIdentifier?: string;
  hsCode?: string; // Harmonized System Code
  animalOrPlantScientificName?: string; // e.g., "Mangifera indica" (Mango)
}

export type PhytosanitaryCertificateW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & PhytosanitaryCertificate;
}

export type PhytosanitaryCertificateSchema = PhytosanitaryCertificateW3C;