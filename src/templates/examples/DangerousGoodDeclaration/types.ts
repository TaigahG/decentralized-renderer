import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface DangerousGoodsDeclaration {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Header & Parties ---
  transportDocumentNumber?: string;
  shipper?: DGDParty;
  consignee?: DGDParty;

  // --- Emergency Response ---
  emergencyContact24h?: EmergencyContact;

  // --- Transport Details ---
  vesselFlightNumber?: string;
  portOfLoading?: string;
  portOfDischarge?: string;

  // --- General Hazard Info ---
  marinePollutant?: boolean;
  flashpoint?: Flashpoint;

  // --- Goods Details ---
  /** List of dangerous goods line items */
  dangerousGoods?: DangerousGoodsItem[]; // Mapped from @set container

  // --- Certification ---
  containerPackingCertificate?: ContainerPackingCertificate;

  // --- Metadata ---
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface DGDParty {
  name?: string;
  address?: string;
  countryCode?: string;
}

export interface EmergencyContact {
  phoneNumber?: string;
  contactName?: string;
  organization?: string; // e.g., "Chemtrec"
}

export interface Flashpoint {
  temperature?: number;
  unit?: string; // e.g., "CEL" (Celsius) or "FAH" (Fahrenheit)
  testMethod?: string; // e.g., "CC" (Closed Cup)
}

export interface DangerousGoodsItem {
  unNumber?: string; // e.g., "UN 1203"
  properShippingName?: string; // e.g., "GASOLINE"
  classDivision?: string; // e.g., "3"
  packingGroup?: string; // e.g., "II"
  subsidiaryRisk?: string; // e.g., "6.1"
  
  numberOfPackages?: number;
  kindOfPackages?: string; // e.g., "Steel Drums"
  outerPackagingType?: string; // e.g., "Fiberboard Box"
  
  netQuantity?: Measurement;
  grossMass?: Measurement;
}

export interface Measurement {
  value?: number;
  unit?: string; // e.g., "KGM", "L"
}

/**
 * Required statement certifying that the container/vehicle was packed in accordance with regulations (e.g., IMDG Code).
 */
export interface ContainerPackingCertificate {
  declarationStatement?: string;
  
  // Packing compliance checkboxes
  containerClean?: boolean;
  containerDry?: boolean;
  packagesNotDamaged?: boolean;
  noIncompatibleSubstances?: boolean;
  
  // Signatory details
  nameOfCompany?: string;
  declarantName?: string;
  declarantStatus?: string; // e.g., "Packer", "Driver"
  signature?: string;
  /** Date format: YYYY-MM-DD */
  date?: string;
  placeOfPacking?: string;
}

export type DangerousGoodsDeclarationW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & DangerousGoodsDeclaration;
}

export type DangerousGoodsDeclarationSchema = DangerousGoodsDeclarationW3C;