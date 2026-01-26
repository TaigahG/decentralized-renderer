import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface AirWaybill {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Header Information ---
  mawbNumber?: string;
  airlinePrefix?: string;
  serialNumber?: string;
  checkDigit?: string;
  hawbNumber?: string;
  
  /** Date format: YYYY-MM-DD */
  issueDate?: string;

  // --- Parties ---
  shipper?: AirWaybillParty;
  consignee?: AirWaybillParty;
  issuingCarrierAgent?: IssuingCarrierAgent;
  
  agentIataCode?: string;
  accountNumber?: string; // Carrier Agent Account Number

  // --- Transport Details ---
  routing?: Routing;
  accounting?: Accounting;

  // --- Goods & Handling ---
  /** List of goods line items */
  goodsDetails?: AWBGoodsDetail[]; // Mapped from @set container
  handlingInformation?: HandlingInformation;

  // --- Financials & Execution ---
  chargesSummary?: ChargesSummary;
  executionDetails?: ExecutionDetails;

  // --- Metadata ---
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface AirWaybillParty {
  name?: string;
  address?: string;
  city?: string;
  stateProvince?: string;
  postalCode?: string;
  countryCode?: string;
  contactPerson?: ContactPerson;
  accountNumber?: string;
}

export interface ContactPerson {
  name?: string;
  phone?: string;
  email?: string;
}

export interface IssuingCarrierAgent {
  name?: string;
  iataCode?: string;
  address?: string;
  city?: string;
  accountNumber?: string;
}

export interface Routing {
  airportOfDeparture?: string;
  airportOfDestination?: string;
  requestedFlight?: string;
  /** Date format: YYYY-MM-DD */
  requestedDate?: string;
  /** List of transit points/carriers */
  routingDestination?: RoutingDestination[]; // Mapped from @set container
}

export interface RoutingDestination {
  carrier?: string;
  flightNumber?: string;
  airportCode?: string;
}

export interface Accounting {
  currency?: string;
  chargeCode?: string; // e.g., "PP" (Prepaid), "CC" (Collect)
  weightValuationChargeCode?: string;
  otherChargeCode?: string;
  
  valueForCarriage?: ValueForCarriage;
  valueForCustoms?: MonetaryAmount;
  insuranceAmount?: MonetaryAmount;
}

export interface ValueForCarriage {
  declaredValue?: string; // e.g., "NVD" or numeric string
  currencyCode?: string;
  amount?: number;
}

export interface MonetaryAmount {
  currencyCode?: string;
  amount?: number;
}

export interface AWBGoodsDetail {
  numberOfPieces?: number;
  grossWeight?: Measurement;
  chargeableWeight?: Measurement;
  volumetricWeight?: VolumetricWeight;
  
  rateClass?: string;
  commodityItemNumber?: string;
  chargePerUnit?: number;
  totalCharge?: number;
  natureAndQuantityOfGoods?: string;
  
  /** Dimensions details for this goods line */
  dimensions?: Dimensions[]; // Mapped from @set container
}

export interface Measurement {
  value?: number;
  unit?: string;
}

export interface VolumetricWeight extends Measurement {
  calculationFactor?: number;
}

export interface Dimensions {
  length?: number;
  width?: number;
  height?: number;
  unit?: string;
  pieces?: number;
}

export interface HandlingInformation {
  specialServiceRequest?: SpecialServiceRequest[]; // Mapped from @set container
  otherServiceInformation?: string[]; // Mapped from @set container (assuming text strings)
  handlingInformationText?: string;
}

export interface SpecialServiceRequest {
  code?: string; // e.g., "PER" (Perishable)
  description?: string;
}

export interface ChargesSummary {
  weightCharge?: number;
  valuationCharge?: number;
  taxCharges?: number;
  totalOtherChargesDueAgent?: number;
  totalOtherChargesDueCarrier?: number;
  totalPrepaid?: number;
  totalCollect?: number;
  currencyConversionRate?: number;
  ccChargesInDestCurrency?: number;
}

export interface ExecutionDetails {
  placeOfExecution?: string;
  /** Date format: YYYY-MM-DD */
  dateOfExecution?: string;
  signatureOfShipper?: string;
  signatureOfIssuingCarrier?: string;
}

export type AirWaybillW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & AirWaybill;
};

export type AirWaybillSchema = AirWaybillW3C;