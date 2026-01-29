import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents an Excise Guarantee.
 * A financial security covering movement and holding of excise goods (Alcohol, Tobacco, Energy)
 * under duty suspension arrangements.
 */
export interface ExciseGuarantee {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Header Information ---
  guaranteeNumber?: string; // GRN (Guarantee Reference Number)
  guaranteeType?: string; // e.g., "Individual", "Comprehensive", "Waiver"
  guaranteeStatus?: string; // e.g., "Active", "Released", "Revoked"
  
  /** Date format: YYYY-MM-DD */
  issueDate?: string;
  /** Date format: YYYY-MM-DD */
  effectiveDate?: string;
  /** Date format: YYYY-MM-DD */
  expiryDate?: string;

  // --- Parties ---
  principal?: GuaranteePrincipal;
  guarantor?: GuaranteeGuarantor;
  beneficiary?: GuaranteeBeneficiary;

  // --- Financials ---
  guaranteeAmount?: GuaranteeAmountDetails;
  guaranteeUtilization?: GuaranteeUtilization;

  // --- Scope ---
  /** List of tax warehouses or authorized activities covered */
  coveredActivities?: CoveredActivity[]; // Mapped from @set container
  
  /** List of product categories covered */
  exciseProducts?: ExciseProduct[]; // Mapped from @set container
  
  validityTerritory?: ValidityTerritory;

  // --- Legal & Administrative ---
  guaranteeConditions?: GuaranteeConditions;
  referenceToAuthorization?: ReferenceToAuthorization;

  // --- Execution & Approval ---
  guarantorDeclaration?: GuarantorDeclaration;
  acceptanceByAuthority?: AcceptanceByAuthority;

  // --- History ---
  amendmentHistory?: AmendmentRecord[]; // Mapped from @set container

  // --- Metadata ---
  remarks?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface GuaranteePrincipal {
  name?: string;
  tradingName?: string;
  registrationNumber?: string;
  exciseNumber?: string; // SEED Number
  economicOperatorId?: string;
  taxIdentificationNumber?: string;
  address?: GuaranteeAddress;
  contactPerson?: ContactPerson;
}

export interface GuaranteeGuarantor {
  name?: string;
  institutionType?: string; // e.g., "Bank", "Insurance Company"
  registrationNumber?: string;
  bankIdentifierCode?: string; // BIC/SWIFT
  leiCode?: string; // Legal Entity Identifier
  licenseNumber?: string;
  address?: GuaranteeAddress;
  contactPerson?: ContactPerson;
}

export interface GuaranteeBeneficiary {
  authorityName?: string;
  authorityCode?: string;
  countryCode?: string;
  department?: string;
  address?: string; // Flat address string in this sub-context
}

export interface GuaranteeAddress {
  streetAddress?: string;
  city?: string;
  stateProvince?: string;
  postalCode?: string;
  countryCode?: string;
}

export interface ContactPerson {
  name?: string;
  phone?: string;
  email?: string;
}

export interface GuaranteeAmountDetails {
  currencyCode?: string;
  amountValue?: number;
  amountInWords?: string;
}

export interface GuaranteeUtilization {
  utilizationMethod?: string; // e.g., "Revolving", "Fixed"
  utilizationLimit?: MonetaryAmount;
  currentUtilization?: MonetaryAmount;
  availableBalance?: MonetaryAmount;
}

export interface MonetaryAmount {
  currencyCode?: string;
  amountValue?: number;
}

export interface CoveredActivity {
  activityType?: string; // e.g., "Tax Warehouse Keeper", "Registered Consignor"
  activityCode?: string;
  description?: string;
  warehouseNumber?: string;
  warehouseAddress?: string;
}

export interface ExciseProduct {
  productCategory?: string; // e.g., "Alcohol", "Tobacco"
  exciseProductCode?: string; // e.g., "W200"
  hsCode?: string;
  description?: string;
  measurementUnit?: string;
  estimatedQuantity?: number;
  exciseRate?: ExciseRate;
}

export interface ExciseRate {
  rateType?: string; // e.g., "Standard", "Reduced"
  rateValue?: number;
  currencyCode?: string;
}

export interface ValidityTerritory {
  territoryScope?: string; // e.g., "EU-Wide", "National"
  memberStates?: string[]; // Mapped from @set container
  customsOffices?: string[]; // Mapped from @set container
}

export interface GuaranteeConditions {
  termsAndConditions?: string;
  claimProcedure?: string;
  noticePeriod?: NoticePeriod;
  renewalTerms?: string;
  cancellationTerms?: string;
}

export interface NoticePeriod {
  days?: number;
  description?: string;
}

export interface ReferenceToAuthorization {
  authorizationType?: string;
  authorizationNumber?: string;
  /** Date format: YYYY-MM-DD */
  authorizationDate?: string;
  issuingAuthority?: string;
}

export interface GuarantorDeclaration {
  declarationText?: string;
  signatoryName?: string;
  signatoryPosition?: string;
  /** Date format: YYYY-MM-DD */
  signatureDate?: string;
  digitalSignature?: string;
}

export interface AcceptanceByAuthority {
  acceptanceStatus?: string; // e.g., "Accepted", "Pending"
  /** Date format: YYYY-MM-DD */
  acceptanceDate?: string;
  acceptanceReference?: string;
  officerName?: string;
  officerPosition?: string;
  conditions?: string[]; // Mapped from @set container
}

export interface AmendmentRecord {
  amendmentNumber?: string;
  /** Date format: YYYY-MM-DD */
  amendmentDate?: string;
  amendmentType?: string; // e.g., "Increase Amount", "Extend Validity"
  description?: string;
  previousAmount?: number;
  newAmount?: number;
}

export type ExciseGuaranteeW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & ExciseGuarantee;
}

export type ExciseGuaranteeSchema = ExciseGuaranteeW3C;