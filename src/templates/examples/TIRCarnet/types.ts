import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a TIR Carnet.
 * An international customs transit document that permits the seamless transport of goods 
 * across international borders under the seal of customs, heavily utilized in road freight.
 */
export interface TIRCarnet {
  // --- Document & Shipment Identifiers ---
  documentIdentifier?: string; // The TIR Carnet number
  bookingReferenceNumber?: string;
  customsDeclarationDocument?: string;
  goodsDeclarationNumber?: string;
  freightForwarderReferenceNumber?: string;
  goodsItemSequenceIdentifier?: string;
  approvalNumber?: string;
  permitNumber?: string;

  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issueDate?: string;
  /** Date format: YYYY-MM-DD */
  despatchDate?: string;
  /** Date format: YYYY-MM-DD */
  permitExpiryDate?: string;

  // --- Parties ---
  carrier?: TIRParty;
  consignee?: TIRParty;
  insuredParty?: TIRParty;
  freightForwarder?: TIRParty;
  consignor?: TIRParty;
  managementAuthority?: TIRParty; // The guaranteeing association

  // --- Other Named Entities ---
  transportEquipmentOperatorName?: string;
  permitIssuerName?: string;

  // --- Locations & Routing ---
  consignmentRoute?: string;
  customsOfficeOfDestinationName?: string;
  customsOfficeOfEntryName?: string;
  consignmentExitCustomsOfficeName?: string;
  destinationCountry?: string;
  originalLoadingLocation?: string;
  consignmentDestinationCountry?: string;
  exportationCountry?: string;
  arrivalLocation?: string;
  baseportUnloadingLocation?: string;
  placeOfIssue?: string;

  // --- Financials & Weights ---
  customsValue?: number;
  customsValueCurrency?: string;
  
  goodsGrossWeight?: number;
  goodsGrossWeightUnit?: string;
  
  quantityOrdered?: number;
  
  transportMeansGrossWeight?: number;
  transportMeansGrossWeightUnit?: string;

  // --- Goods Details ---
  /** List of goods covered under this TIR Carnet */
  goods?: TIRGoodsItem[]; // Mapped from @set container

  // --- Transport & Equipment ---
  conveyanceReferenceNumber?: string;
  modeOfTransport?: string;
  containerSize?: string;
  containerType?: string;
  transportMeansTypeCode?: string;
  transportMeansIdentifier?: string;
  vehicleRegistrationNumber?: string;
  transportEquipmentIdentifier?: string;
  sealIdentifier?: string; // Customs seal
  
  // --- Additional Text ---
  certificationText?: string;
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the TIR Carnet.
 * Shared across Carrier, Consignee, Insured Party, Freight Forwarder, Consignor, and Authority.
 */
export interface TIRParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents an individual goods line item under customs transit.
 */
export interface TIRGoodsItem {
  description?: string;
  consignmentSummaryDescription?: string;
  numberOfPackages?: number;
  shippingMarks?: string;
  productIdentifier?: string;
  hsCode?: string; // Harmonized System Code
  specimenDescription?: string;
}

export type TIRCarnetW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & TIRCarnet;
}

export type TIRCarnetSchema = TIRCarnetW3C;