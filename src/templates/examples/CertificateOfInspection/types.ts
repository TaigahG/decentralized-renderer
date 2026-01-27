import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface CertificateOfInspection {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Header Information ---
  certificateNumber?: string;
  countryOfOrigin?: string; // ISO Country Code or Name

  // --- Control Body ---
  issuingControlBody?: IssuingControlBody;

  // --- Parties ---
  exporter?: OrganicExporter;
  producer?: OrganicProducer;
  importer?: OrganicImporter;
  firstConsignee?: OrganicConsignee;

  // --- Goods Details ---
  /** List of organic line items */
  productDetails?: OrganicProductDetail[]; // Mapped from @set container

  // --- Transport ---
  transportInformation?: TransportInformation;

  // --- Certification ---
  declarationOfControlBody?: DeclarationOfControlBody;

  // --- Metadata ---
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface IssuingControlBody {
  name?: string;
  codeNumber?: string; // e.g., "FR-BIO-01"
  address?: string;
  contactDetails?: string; // Email or Phone
}

/** Base interface for parties in this document to reduce repetition */
export interface BaseOrganicParty {
  name?: string;
  address?: string;
  city?: string;
  stateProvince?: string;
  postalCode?: string;
  countryCode?: string;
}

export interface OrganicExporter extends BaseOrganicParty {
  contactPerson?: ContactPerson;
}

export interface OrganicProducer extends BaseOrganicParty {
  scopeCertificateReference?: string; // Ref to the main organic certificate of the producer
}

export interface OrganicImporter extends BaseOrganicParty {
  eoriNumber?: string; // Customs Registration Number
}

export interface OrganicConsignee extends BaseOrganicParty {
  // No specific additional fields in context, but distinct semantic role
}

export interface ContactPerson {
  name?: string;
  phone?: string;
  email?: string;
}

export interface OrganicProductDetail {
  tradeName?: string;
  cnCode?: string; // Combined Nomenclature (Customs) Code
  category?: string; // e.g., "Unprocessed Plant Products"
  lotNumber?: string;
  numberOfPackages?: number;
  netWeight?: Measurement;
}

export interface TransportInformation {
  modeOfTransport?: string; // e.g., "Sea", "Air"
  containerNumber?: string;
  sealNumber?: string;
  vesselName?: string;
  flightNumber?: string;
  /** Date format: YYYY-MM-DD */
  departureDate?: string;
}

export interface DeclarationOfControlBody {
  declarationText?: string;
  regulationReference?: string; // e.g., "Council Regulation (EC) No 834/2007"
  /** Date format: YYYY-MM-DD */
  dateOfIssue?: string;
  placeOfIssue?: string;
  certifierName?: string;
  certifierSignature?: string;
  officialStamp?: string; // URL or text description
}

export interface Measurement {
  value?: number;
  unit?: string; // e.g., "KGM"
}

export type CertificateOfInspectionw3c = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & CertificateOfInspection;
}

export type CertificateOfInspectionSchema = CertificateOfInspectionw3c;