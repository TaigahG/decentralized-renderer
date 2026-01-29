import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface CITESPermit {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Header Information ---
  permitCertificateNumber?: string;
  documentType?: string; // e.g., "Export Permit", "Import Permit", "Re-export Certificate"
  
  /** Date format: YYYY-MM-DD */
  validUntil?: string;
  /** Date format: YYYY-MM-DD */
  dateOfIssue?: string;

  // --- Authorities & Parties ---
  managementAuthority?: ManagementAuthority;
  importer?: CitesParty;
  exporter?: CitesParty;
  
  /** Required if live animals are being transported/housed */
  locationOfLiveAnimals?: LocationOfLiveAnimals;

  // --- Species / Specimen Details ---
  /** List of species included in this permit */
  speciesInformation?: SpeciesInfo[]; // Mapped from @set container

  // --- Customs Endorsement (Box 14 on standard form) ---
  endorsement?: CitesEndorsement;

  // --- Metadata ---
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface ManagementAuthority {
  authorityName?: string;
  authorityCode?: string;
  address?: string;
  country?: string;
}

export interface CitesParty {
  name?: string;
  address?: string;
  country?: string;
}

export interface LocationOfLiveAnimals {
  facilityName?: string;
  address?: string;
}

export interface SpeciesInfo {
  scientificName?: string; // e.g., "Loxodonta africana"
  commonName?: string; // e.g., "African Elephant"
  appendix?: string; // "I", "II", or "III"
  descriptionOfSpecimens?: string; // e.g., "Live animals", "Tusks"
  
  /** List of identification marks (tags, rings, etc.) */
  marks?: string[]; // Mapped from @set container
  
  sourceCode?: string; // e.g., "W" (Wild), "C" (Bred in captivity)
  purposeCode?: string; // e.g., "T" (Commercial), "Z" (Zoo)
  
  quantity?: Measurement;
  
  countryOfOrigin?: string; // ISO Country Code
  permitNumberOfOrigin?: string; // If re-exporting, the original permit number
}

export interface CitesEndorsement {
  quantityActuallyExported?: Measurement; // Filled by Customs at time of export
  portOfExport?: string;
  customsSignature?: string;
  customsStamp?: string; // Text representation or link to stamp image
}

export interface Measurement {
  value?: number;
  unit?: string; // e.g., "KGM" (Kilograms), "NAR" (Number of animals)
}

export type CITESPermitW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & CITESPermit;
}

export type CITESPermitSchema = CITESPermitW3C;