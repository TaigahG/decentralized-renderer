import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface EILIcenseAgricultural {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- License Header ---
  licenseNumber?: string;
  licenseTypeCode?: string; // e.g., "EXPORT", "IMPORT"
  status?: string; // e.g., "ACTIVE", "EXPIRED", "REVOKED"

  /** Date format: YYYY-MM-DD */
  dateOfIssue?: string;
  /** Date format: YYYY-MM-DD */
  expiryDate?: string;

  // --- Parties ---
  issuingAuthority?: IssuingAuthority;
  licenseHolder?: LicenseHolder;
  supplierBuyer?: SupplierBuyer;

  // --- Trade Route ---
  countryOfOrigin?: string;
  countryOfDestination?: string;

  // --- Product Details ---
  goodsDetails?: GoodsDetails;

  // --- Quotas & Financials ---
  quotaAndBalances?: QuotaAndBalances;
  financialsAndConditions?: FinancialsAndConditions;

  /** History of shipments against this license */
  utilizationHistory?: UtilizationRecord[]; // Mapped from @set container

  // --- Metadata ---
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface IssuingAuthority {
  authorityName?: string;
  authorityCode?: string;
  country?: string;
}

export interface LicenseHolder {
  name?: string;
  businessRegistrationNumber?: string;
  taxId?: string;
  address?: string;
  countryCode?: string;
}

export interface SupplierBuyer {
  name?: string;
  address?: string;
  countryCode?: string;
  isOpenLicense?: boolean; // True if license applies to any supplier/buyer
}

export interface GoodsDetails {
  hsCode?: string;
  productDescription?: string;
  cropYear?: string; // e.g., "2023/2024"
  usageIntention?: string; // e.g., "Human Consumption", "Animal Feed"
}

export interface QuotaAndBalances {
  authorizedQuantityTotal?: Measurement;
  authorizedValueTotal?: MonetaryAmount;
  
  utilizedQuantity?: Measurement;
  utilizedValue?: MonetaryAmount;
  
  remainingQuantity?: Measurement;
  remainingValue?: MonetaryAmount;
  
  tolerancePercentage?: number; // +/- tolerance allowed on quantity/value
}

export interface FinancialsAndConditions {
  incoterms?: string;
  currency?: string;
  paymentMethod?: string;
  specialConditions?: string[]; // Mapped from @set container
}

export interface UtilizationRecord {
  shipmentReference?: string; // e.g., Invoice No or BL No
  /** Date format: YYYY-MM-DD */
  utilizationDate?: string;
  quantityUtilized?: Measurement;
  valueUtilized?: MonetaryAmount;
  customsDeclarationNumber?: string;
}

// --- Reusable Types ---

export interface Measurement {
  value?: number;
  unit?: string; // e.g., "MT" (Metric Tons)
}

export interface MonetaryAmount {
  currencyCode?: string;
  amount?: number;
}

export type EILIcenseAgriculturalW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & EILIcenseAgricultural;
}

export type EILIcenseAgriculturalSchema = EILIcenseAgriculturalW3C;