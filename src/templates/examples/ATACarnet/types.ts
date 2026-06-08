import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents an ATA Carnet.
 * An international customs document that permits the temporary, duty-free and tax-free 
 * export and import of goods (such as commercial samples, professional equipment, 
 * or exhibition goods) for up to one year.
 */
export interface ATACarnet {
  customsDeclarationDocumentReference?: string;
  goodsDeclarationNumber?: string;
  permitNumber?: string;

  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issueDate?: string;
  /** Date format: YYYY-MM-DD */
  actualArrivalDate?: string;
  /** Date format: YYYY-MM-DD */
  permitExpiryDate?: string;

  // --- Parties & Authorities ---
  importer?: ATAParty;
  exporter?: ATAParty;
  carrier?: ATAParty;
  freightForwarder?: ATAParty;
  permitIssuer?: ATAParty;       // Typically the Chamber of Commerce
  managementAuthority?: ATAParty; // The national customs administrative authority
  transportEquipmentOperatorName?: string;

  // --- Customs Offices ---
  customsOfficeOfDestination?: string;
  customsOfficeOfEntry?: string;
  customsOfficeOfTransit?: string;
  consignmentExitCustomsOffice?: string;

  // --- Geography & Routing ---
  destinationCountry?: string;
  consignmentDestinationCountry?: string;
  exportationCountry?: string;
  originCountry?: string;
  placeOfIssue?: string;

  // --- Terms & Declarations ---
  insuranceCondition?: string;
  certificationText?: string;
  natureOfTransaction?: string;
  typeOfTransitGuarantee?: string;

  // --- Financial Values & Currencies ---
  monetaryAmount?: number;
  monetaryAmountCurrency?: string;
  
  insuredValueAmount?: number;
  insuredValueAmountCurrency?: string;
  
  customsValue?: number;
  customsValueCurrency?: string;
  
  unitPrice?: number;
  unitPriceCurrency?: string;
  
  goodsValue?: number;
  goodsValueCurrency?: string;
  
  statisticalValue?: number;

  // --- Weights & Dimensions ---
  grossWeight?: number;
  grossWeightUnit?: string;
  
  netWeight?: number;
  netWeightUnit?: string;
  
  quantityOrdered?: number;
  quantity?: number;
  
  packageLength?: number;
  packageLengthUnit?: string;
  
  packageWidth?: number;
  packageWidthUnit?: string;

  // --- Goods Details ---
  /** Detailed inventory list of items temporarily moving under this carnet */
  goods?: ATAGoodsItem[]; // Mapped from @set container

  // --- Transport & Equipment ---
  conveyanceReferenceNumber?: string;
  modeOfTransport?: string;
  transportMeansIdentifier?: string;
  vehicleRegistrationNumber?: string;
  transportEquipmentIdentifier?: string;
  transportMeansAtBorderCrossing?: string;
}

// --- Sub-Interfaces ---

/**
 * Base representation of an entity, agency, or authority involved in the ATA Carnet.
 * Shared across Importer, Exporter, Carrier, Forwarder, Issuer, and Management Authority.
 */
export interface ATAParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents an individual item within the ATA Carnet general list of goods.
 */
export interface ATAGoodsItem {
  description?: string;
  consignmentSummaryDescription?: string;
  numberOfPackages?: number;
  shippingMarks?: string;
}

export type ATACarnetW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & ATACarnet;
};

export type ATACarnetSchema = ATACarnetW3C;