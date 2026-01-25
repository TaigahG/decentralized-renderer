import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface CargoInsurance {
  documentTypeCode?: string;
  certificateIdentifier?: string;
  openPolicyReference?: string;
  
  /** Date format: YYYY-MM-DD */
  issueDate?: string;
  placeOfIssue?: string;

  insuredParty?: InsuredParty;
  insuranceProvider?: InsuranceProvider;
  claimsPayableTo?: ClaimsPayableTo;
  claimsSettlingAgent?: ClaimsSettlingAgent;
  transportInformation?: TransportInformation;
  
  /** Details regarding the specific goods being insured */
  goodsDetails?: GoodsDetail[]; // Mapped from @set container
  
  valuation?: Valuation;
  coverage?: Coverage;

  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface InsuredParty {
  name?: string;
  address?: string;
  countryCode?: string;
  unId?: string;
}

export interface InsuranceProvider {
  name?: string;
  address?: string;
  countryCode?: string;
}

export interface ClaimsPayableTo {
  name?: string;
  address?: string;
}

export interface ClaimsSettlingAgent {
  name?: string;
  address?: string;
  contactDetails?: string;
}

export interface TransportInformation {
  modeOfTransport?: string;
  meansOfTransportName?: string;
  transportServiceIdentifier?: string;
  carrierName?: string;
  loadingLocation?: string;
  dischargeLocation?: string;
  placeOfDelivery?: string;
  
  /** Date format: YYYY-MM-DD */
  departureDate?: string;
  
  containerNumber?: string;
  blReference?: string;
}

export interface GoodsDetail {
  shippingMarks?: string;
  packageType?: string;
  packageQuantity?: number;
  goodsDescription?: string;
  grossWeight?: Measurement;
  volume?: Measurement;
}

export interface Measurement {
  value?: number;
  unit?: string;
}

export interface Valuation {
  invoiceReference?: string;
  /** Date format: YYYY-MM-DD */
  invoiceDate?: string;
  incoterms?: string;
  insuredValue?: InsuredValue;
  basisOfValuation?: string;
}

export interface InsuredValue {
  currencyCode?: string;
  amount?: number;
  percentage?: number;
}

export interface Coverage {
  coverageConditionCode?: string;
  warClauseIncluded?: boolean;
  strikesClauseIncluded?: boolean;
  deductible?: Deductible;
  surveyClause?: string;
  /** Date format: YYYY-MM-DD */
  coverageExpiry?: string;
}

export interface Deductible {
  currencyCode?: string;
  amount?: number;
}

export type CargoInsuranceW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & CargoInsurance;
}

export type CargoInsuranceSchema = CargoInsuranceW3C;