import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface SeaWaybill {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  waybillNumber?: string;
  bookingReference?: string;
  shipperReference?: string;
  
  exportReferences?: ExportReferences;
  shipper?: ShipperOrConsignee;
  consignee?: ShipperOrConsignee;
  notifyParty?: NotifyParty;
  
  transportDetails?: TransportDetails;
  
  /** List of goods and container details */
  goodsDetails?: GoodsDetail[]; // Mapped from @set container
  
  chargesAndLiability?: ChargesAndLiability;
  carrierInformation?: CarrierInformation;
  
  nonNegotiableStatement?: string;
  
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface ExportReferences {
  taxId?: string;
  freightForwarderId?: string;
  customsReferenceNumber?: string;
}

/** * Shared structure for Shipper and Consignee as defined in the context.
 */
export interface ShipperOrConsignee {
  name?: string;
  address?: string;
  countryCode?: string;
  contactPerson?: ContactPerson;
}

export interface ContactPerson {
  name?: string;
  phone?: string;
  email?: string;
}

export interface NotifyParty {
  name?: string;
  address?: string;
  email?: string;
  phone?: string;
}

export interface TransportDetails {
  vesselName?: string;
  voyageNumber?: string;
  imoNumber?: string;
  placeOfReceipt?: string;
  portOfLoading?: string;
  portOfDischarge?: string;
  placeOfDelivery?: string;
  movementScope?: string;
  
  /** Date format: YYYY-MM-DD */
  dateOfReceipt?: string;
  /** Date format: YYYY-MM-DD */
  shippedOnBoardDate?: string;
}

export interface GoodsDetail {
  containerNumber?: string;
  sealNumber?: string;
  containerType?: string;
  marksAndNumbers?: string;
  numberOfPackages?: number;
  kindOfPackages?: string;
  goodsDescription?: string;
  hsCode?: string;
  grossWeight?: Measurement;
  measurement?: Measurement; // For volume/CBM usually
}

export interface Measurement {
  value?: number;
  unit?: string;
}

export interface ChargesAndLiability {
  freightPayableAt?: string;
  freightTerm?: string;
  declaredValue?: DeclaredValue;
  
  /** Terms and conditions texts */
  carrierClauses?: string[]; 
  
  shipmentStatus?: string;
  /** Date format: YYYY-MM-DD */
  shipmentStatusDate?: string;
}

export interface DeclaredValue {
  currencyCode?: string;
  amount?: number;
}

export interface CarrierInformation {
  carrierName?: string;
  scac?: string;
  carrierAddress?: string;
  signatureLocation?: string;
  /** Date format: YYYY-MM-DD */
  signatureDate?: string;
}

export type SeaWaybillW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & SeaWaybill;
}

export type SeaWaybillSchema = SeaWaybillW3C;