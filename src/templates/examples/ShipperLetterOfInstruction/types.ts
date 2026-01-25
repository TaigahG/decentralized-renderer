import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface ShipperLetterOfInstructions {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  shipperReferenceNumber?: string;
  forwarderReferenceNumber?: string;
  
  /** Date format: YYYY-MM-DD */
  dateOfInstruction?: string;
  
  /** List of related document identifiers */
  relatedDocumentIds?: RelatedDocumentId[]; // Mapped from @set container

  principalShipper?: PrincipalShipper;
  consignee?: Consignee;
  intermediateConsignee?: IntermediateConsignee;
  forwardingAgent?: ForwardingAgent;
  
  transportInstructions?: TransportInstructions;
  
  /** List of goods items */
  goodsDetails?: GoodsDetail[]; // Mapped from @set container
  
  valueAndInsurance?: ValueAndInsurance;
  documentDistribution?: DocumentDistribution;
  
  additionalInstructions?: string;

  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface RelatedDocumentId {
  documentType?: string;
  documentNumber?: string;
}

export interface PrincipalShipper {
  name?: string;
  address?: string;
  countryCode?: string;
  taxId?: string;
  eoriNumber?: string;
  contactPerson?: ContactPerson;
}

export interface Consignee {
  name?: string;
  address?: string;
  countryCode?: string;
  contactPerson?: ContactPerson;
}

export interface IntermediateConsignee {
  name?: string;
  address?: string;
  purpose?: string;
}

export interface ForwardingAgent {
  name?: string;
  address?: string;
  contactPerson?: ContactPerson;
}

export interface ContactPerson {
  name?: string;
  phone?: string;
  email?: string;
}

export interface TransportInstructions {
  modeOfTransport?: string;
  incoterms?: string;
  portOfExport?: string;
  portOfDischarge?: string;
  finalDestination?: string;
  freightPaymentTerms?: string; // e.g., "Prepaid", "Collect"
  freightPaymentDetails?: FreightPaymentDetails;
}

export interface FreightPaymentDetails {
  paymentBy?: string;
  thirdPartyName?: string;
  thirdPartyAddress?: string;
}

export interface GoodsDetail {
  shippingMarks?: string;
  packageType?: string;
  packageQuantity?: number;
  goodsDescription?: string;
  hsCode?: string;
  grossWeight?: Measurement;
  netWeight?: Measurement;
  volume?: Measurement;
  countryOfOrigin?: string;
}

export interface Measurement {
  value?: number;
  unit?: string;
}

export interface ValueAndInsurance {
  valueForCustoms?: MonetaryAmount;
  valueForCarriage?: MonetaryAmount;
  insuranceInstructions?: InsuranceInstructions;
}

export interface InsuranceInstructions {
  insureGoods?: boolean;
  insuredValue?: MonetaryAmount;
  notes?: string;
}

export interface MonetaryAmount {
  currencyCode?: string;
  amount?: number;
}

export interface DocumentDistribution {
  documentationInstructions?: string;
  billOfLadingInstructions?: BillOfLadingInstructions;
  exportControl?: ExportControl;
}

export interface BillOfLadingInstructions {
  numberOfOriginals?: number;
  sendTo?: string;
  releaseType?: string; // e.g., "Express", "Original"
}

export interface ExportControl {
  licenseRequired?: boolean;
  licenseNumber?: string;
  eccn?: string;
  notes?: string;
}

export type ShipperLetterOfInstructionsW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & ShipperLetterOfInstructions;
}

export type ShipperLetterOfInstructionsSchema = ShipperLetterOfInstructionsW3C;