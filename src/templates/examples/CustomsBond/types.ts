import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface CustomsBond {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Header Information ---
  bondNumber?: string;
  bondType?: string; // e.g., "Continuous", "Single Transaction"
  activityCode?: string; // e.g., "1" (Importer/Broker), "2" (Custodian of bonded merchandise)
  
  /** Date format: YYYY-MM-DD */
  effectiveDate?: string;
  /** Date format: YYYY-MM-DD */
  expirationDate?: string; // Often empty for continuous bonds until terminated

  // --- Parties ---
  principal?: BondPrincipal;
  surety?: BondSurety;
  obligee?: BondObligee;

  // --- Financials ---
  financials?: BondFinancials;

  // --- Scope ---
  scopeAndLocation?: ScopeAndLocation;

  // --- Execution & Signatures ---
  execution?: BondExecution;

  // --- Metadata ---
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface BondPrincipal {
  name?: string;
  address?: string;
  city?: string;
  stateProvince?: string;
  postalCode?: string;
  countryCode?: string;
  taxId?: string; // Generic Tax ID
  ein?: string; // Employer Identification Number (US specific)
  eoriNumber?: string; // EORI (EU specific)
  contactPerson?: ContactPerson;
}

export interface BondSurety {
  name?: string;
  suretyCode?: string; // e.g., US Treasury Surety Code
  address?: string;
  city?: string;
  stateProvince?: string;
  postalCode?: string;
  countryCode?: string;
  licenseNumber?: string;
  contactPerson?: ContactPerson;
}

export interface BondObligee {
  name?: string; // e.g., "United States of America"
  customsAuthority?: string; // e.g., "U.S. Customs and Border Protection"
  countryCode?: string;
  authorizedAddress?: string;
}

export interface ContactPerson {
  name?: string;
  phone?: string;
  email?: string;
}

export interface BondFinancials {
  totalLiability?: MonetaryAmount;
  limitOfLiability?: MonetaryAmount;
  premiumAmount?: MonetaryAmount;
  referenceAmount?: MonetaryAmount; // Used for calculation bases
}

export interface MonetaryAmount {
  currencyCode?: string;
  amount?: number;
}

export interface ScopeAndLocation {
  portOfExecution?: string; // Port Code e.g., "2704" (LA/Long Beach)
  coverageScope?: string; // e.g., "National", "Port Specific"
  coveredPorts?: string[]; // Mapped from @set container
}

export interface BondExecution {
  /** Date format: YYYY-MM-DD */
  dateOfExecution?: string;
  placeOfExecution?: string;
  
  signatureOfPrincipal?: string;
  signatureOfSurety?: string;
  
  officialSeal?: string; // URL to image or Base64
  digitalCertificate?: string; // X.509 or similar reference
  
  witness?: BondWitness;
}

export interface BondWitness {
  name?: string;
  signature?: string;
  /** Date format: YYYY-MM-DD */
  dateOfWitnessing?: string;
}

export type CustomsBondW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & CustomsBond;
}

export type CustomsBondSchema = CustomsBondW3C;