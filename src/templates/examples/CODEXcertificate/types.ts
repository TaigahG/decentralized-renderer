import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface CODEXCertificate {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Header Information ---
  certificateNumber?: string;
  
  // --- Authorities & Officials ---
  competentAuthority?: CompetentAuthority;
  certifyingBody?: CertifyingBody;
  officialInspector?: OfficialInspector;

  // --- Parties ---
  consignor?: CodexParty;
  consignee?: CodexParty;

  // --- Trade Route ---
  countryOfOrigin?: string; // ISO Country Code
  countryOfDestination?: string; // ISO Country Code

  // --- Goods Details ---
  productIdentification?: ProductIdentification;
  traceabilityData?: TraceabilityData;

  // --- Health & Compliance ---
  attestations?: CodexAttestations;

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

export interface CertifyingBody {
  bodyName?: string;
  bodyId?: string;
  address?: string;
}

export interface OfficialInspector {
  name?: string;
  title?: string; // e.g., "Official Veterinarian"
  signature?: string;
  /** Date format: YYYY-MM-DD */
  dateOfSigning?: string;
}

export interface CodexParty {
  name?: string;
  address?: string;
}

export interface ProductIdentification {
  descriptionOfProduct?: string;
  hsCode?: string; // Harmonized System Code
  natureOfFood?: string; // e.g., "Raw", "Processed"
  typeOfPackaging?: string;
  numberOfPackages?: number;
  netWeight?: Measurement;
  identificationMarks?: string; // e.g., Seal numbers, Container numbers
}

export interface TraceabilityData {
  lotBatchNumber?: string;
  /** Date format: YYYY-MM-DD */
  dateOfProduction?: string;
  /** Date format: YYYY-MM-DD */
  dateOfExpiry?: string;
  /** Date format: YYYY-MM-DD */
  bestBeforeDate?: string;
}

export interface CodexAttestations {
  /** List of public health attestations (e.g., "Free from disease X") */
  publicHealthAttestation?: AttestationDetail[]; // Mapped from @set container
  
  /** List of fair trade or quality attestations */
  fairTradeAttestation?: AttestationDetail[]; // Mapped from @set container
  
  temperatureDeclaration?: TemperatureDeclaration;
}

export interface AttestationDetail {
  attestationStatement?: string;
  isAttested?: boolean;
}

export interface TemperatureDeclaration {
  requiredTemperature?: Measurement;
  storageConditions?: string; // e.g., "Keep Frozen", "Ambient"
}

export interface Measurement {
  value?: number;
  unit?: string; // e.g., "KGM", "CEL"
}

export type CODEXCertificateW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & CODEXCertificate;
}

export type CODEXCertificateSchema = CODEXCertificateW3C;