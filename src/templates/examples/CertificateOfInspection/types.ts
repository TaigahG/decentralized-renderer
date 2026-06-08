import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Certificate of Inspection for Organic Products (COI).
 * An official regulatory document verifying that a shipment of goods complies 
 * with organic production and labeling rules in the destination country.
 */
export interface CertificateOfInspection {
  houseWaybillDocumentIdentifier?: string; // HAWB number reference
  invoiceNumber?: string;                  // Commercial invoice link
  permitNumber?: string;                   // COI control or certificate number

  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issueDate?: string;

  // --- Parties & Authorities ---
  importer?: COIParty;
  exporter?: COIParty;
  permitIssuer?: COIParty;       // The inspection body or control authority in origin
  managementAuthority?: COIParty; // The issuing or endorsing governing authority

  // --- Routing & Countries ---
  destinationCountry?: string;
  consignmentDestinationCountry?: string;
  exportationCountry?: string;
  originCountry?: string;

  // --- Weights & Measures ---
  netWeight?: number;
  netWeightUnit?: string; // e.g., "KGM"

  // --- Goods Details ---
  /** List of organic goods covered under this inspection certificate */
  goods?: COIGoodsItem[]; // Mapped from @set container

  // --- Transport Details ---
  vehicleRegistrationNumber?: string;    // Truck license plate or vessel name
  transportEquipmentIdentifier?: string; // Container number
}

// --- Sub-Interfaces ---

/**
 * Base representation of an entity, agency, or authority involved in the COI.
 * Shared across Importer, Exporter, Permit Issuer, and Management Authority.
 */
export interface COIParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents an individual certified organic goods line item.
 */
export interface COIGoodsItem {
  description?: string;
  productIdentifier?: string; // Batch/lot code or organic certification identifier
  hsCode?: string;            // Harmonized System Code
}

export type CertificateOfInspectionw3c = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & CertificateOfInspection;
}

export type CertificateOfInspectionSchema = CertificateOfInspectionw3c;