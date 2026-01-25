import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface ShipDeliveryOrder {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  deliveryOrderNumber?: string;
  billOfLadingNumber?: string;
  
  /** Date format: YYYY-MM-DD */
  issueDate?: string;
  /** Date format: YYYY-MM-DD */
  validityDate?: string;
  /** Date format: YYYY-MM-DD */
  expiryDate?: string;
  
  voyageNumber?: string;
  callSign?: string;
  vesselName?: string;
  
  portOfDischarge?: string;
  /** Date format: YYYY-MM-DD */
  arrivalDate?: string;

  issuedBy?: IssuedBy;
  issuedTo?: IssuedTo;
  consignee?: Consignee;
  haulageCompany?: HaulageCompany;
  
  /** List of containers included in this delivery order */
  containerDetails?: ContainerDetail[]; // Mapped from @set container
  
  returnInstructions?: ReturnInstructions;
  financialStatus?: FinancialStatus;
  
  /** List of textual conditions for release */
  releaseConditions?: string[]; // Mapped from @set container
  
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface IssuedBy {
  shippingLineName?: string;
  localAgentName?: string;
  address?: string;
  scac?: string;
  contactPerson?: ContactPerson;
}

export interface IssuedTo {
  terminalOperatorName?: string;
  terminalName?: string;
  terminalCode?: string;
  address?: string;
  portLocation?: string;
}

export interface Consignee {
  name?: string;
  address?: string;
  taxId?: string;
  contactPerson?: ContactPerson;
}

export interface ContactPerson {
  name?: string;
  phone?: string;
  email?: string;
}

export interface HaulageCompany {
  companyName?: string;
  address?: string;
  licenseNumber?: string;
  driverName?: string;
  driverLicenseNumber?: string;
  truckLicensePlate?: string;
  contactPhone?: string;
}

export interface ContainerDetail {
  containerNumber?: string;
  sealNumber?: string;
  containerType?: string;
  containerSize?: string;
  numberOfPackages?: number;
  packageType?: string;
  grossWeight?: Measurement;
  marksAndNumbers?: string;
  goodsDescription?: string;
}

export interface Measurement {
  value?: number;
  unit?: string;
}

export interface ReturnInstructions {
  emptyReturnDepot?: EmptyReturnDepot;
  /** Date format: YYYY-MM-DD */
  returnValidityDate?: string;
  freeTimeAllowed?: FreeTimeAllowed;
  specialInstructions?: string;
}

export interface EmptyReturnDepot {
  depotName?: string;
  depotCode?: string;
  address?: string;
  operatingHours?: string;
  contactPhone?: string;
}

export interface FreeTimeAllowed {
  days?: number;
  /** Date format: YYYY-MM-DD */
  startDate?: string;
  /** Date format: YYYY-MM-DD */
  endDate?: string;
}

export interface FinancialStatus {
  freightStatus?: string; // e.g., "Prepaid", "Collect"
  freightPaymentReference?: string;
  detentionTerms?: DemurrageDetentionTerms;
  demurrageTerms?: DemurrageDetentionTerms;
  outstandingCharges?: OutstandingCharge;
}

export interface DemurrageDetentionTerms {
  freeDays?: number;
  dailyRate?: MonetaryAmount;
  terms?: string;
}

export interface MonetaryAmount {
  currencyCode?: string;
  amount?: number;
}

export interface OutstandingCharge {
  currencyCode?: string;
  amount?: number;
  description?: string;
}

export type ShipDeliveryOrderW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & ShipDeliveryOrder;
}

export type ShipDeliveryOrderSchema = ShipDeliveryOrderW3C;