import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents an International Veterinary Certificate.
 * Used for the international movement of live animals, hatching eggs, and animal products.
 * Follows OIE (World Organisation for Animal Health) guidelines.
 */
export interface InterVeterinaryCertificate {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Header Information ---
  certificateReferenceNumber?: string;
  
  // --- Authorities & Officials ---
  competentAuthority?: CompetentAuthority;
  issuingAuthority?: IssuingAuthority;
  officialVeterinarian?: OfficialVeterinarian;

  // --- Parties ---
  consignor?: VetParty;
  consignee?: VetParty;

  // --- Origin & Destination ---
  countryOfOrigin?: CountryOfOriginDetails;
  countryOfDestination?: string; // ISO Country Code

  // --- Identification ---
  commodityIdentification?: CommodityIdentification;
  
  /** List of individual animals identified in this shipment */
  individualIdentification?: AnimalIdentification[]; // Mapped from @set container
  
  originEstablishment?: OriginEstablishment;

  // --- Health Information ---
  sanitaryInformation?: SanitaryInformation;
  
  // --- Transport ---
  transportDetails?: TransportDetails;

  // --- Execution ---
  placeOfIssue?: string;
  /** Date format: YYYY-MM-DD */
  dateOfIssue?: string;

  // --- Metadata ---
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface CompetentAuthority {
  authorityName?: string;
  authorityCode?: string;
  address?: string;
  country?: string;
}

export interface IssuingAuthority {
  officeName?: string;
  address?: string;
}

export interface OfficialVeterinarian {
  name?: string;
  qualification?: string; // e.g., "DVM", "Official Veterinarian"
  licenseNumber?: string;
  signature?: string;
  /** Date format: YYYY-MM-DD */
  dateOfSigning?: string;
}

export interface VetParty {
  name?: string;
  address?: string;
}

export interface CountryOfOriginDetails {
  country?: string;
  region?: string;
  province?: string;
  zoneCompartment?: string; // e.g., "Zone Free of FMD"
  diseaseStatus?: string; // e.g., "Free", "Vaccinated"
}

export interface CommodityIdentification {
  descriptionOfCommodity?: string;
  hsCode?: string;
  speciesScientificName?: string; // e.g., "Bos taurus"
  natureOfPackaging?: string;
  numberOfPackagesAnimals?: number; // Count of packages OR animals
  netWeight?: Measurement;
}

export interface AnimalIdentification {
  identificationSystem?: string; // e.g., "Ear Tag", "Microchip"
  identificationNumber?: string;
  /** Date format: YYYY-MM-DD */
  dateOfBirth?: string;
  age?: AgeMeasurement;
  sex?: string; // e.g., "M", "F", "Castrated"
  breed?: string;
}

export interface OriginEstablishment {
  establishmentName?: string;
  establishmentAddress?: string;
  approvalNumber?: string;
  establishmentType?: string; // e.g., "Farm", "Quarantine Station"
}

export interface SanitaryInformation {
  /** Health attestations (e.g., "Animals show no clinical signs of disease") */
  animalHealthAttestation?: Attestation[]; // Mapped from @set container
  
  vaccinationRecord?: VaccinationRecord[]; // Mapped from @set container
  testingRecord?: TestingRecord[]; // Mapped from @set container
}

export interface Attestation {
  attestationStatement?: string;
  isAttested?: boolean;
}

export interface VaccinationRecord {
  vaccineName?: string;
  batchNumber?: string;
  /** Date format: YYYY-MM-DD */
  dateOfVaccination?: string;
  /** Date format: YYYY-MM-DD */
  validityDate?: string;
}

export interface TestingRecord {
  testName?: string; // e.g., "Tuberculin Test"
  testResult?: string; // e.g., "Negative"
  /** Date format: YYYY-MM-DD */
  dateOfTest?: string;
  laboratoryName?: string;
}

export interface TransportDetails {
  meansOfTransport?: string; // e.g., "Railway Wagon", "Truck"
  transportIdentifier?: string; // e.g., License Plate
  disinfectionRecord?: DisinfectionRecord;
}

export interface DisinfectionRecord {
  disinfected?: boolean;
  disinfectant?: string; // Chemical name
  /** Date format: YYYY-MM-DD */
  dateOfDisinfection?: string;
}

// --- Reusable Types ---

export interface Measurement {
  value?: number;
  unit?: string;
}

export interface AgeMeasurement {
  value?: number;
  unit?: string; // e.g., "Months", "Years"
}

export type InterVeterinaryCertificateW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & InterVeterinaryCertificate;
}

export type InterVeterinaryCertificateSchema = InterVeterinaryCertificateW3C;