import { SignedVerifiableCredential, v2, v3 } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * TradeTrust Bill of Lading Carrier document structure
 * This matches the official TradeTrust BILL_OF_LADING_CARRIER template format
 */
export interface BillOfLadingCarrierDocument {
  // Basic Information
  blNumber?: string;
  scac?: string;  // Standard Carrier Alpha Code

  // Shipper (Consignor) Information
  shipper?: {
    name?: string;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      country?: string;
      postalCode?: string;
    };
  };

  // Consignee Information
  consignee?: {
    name?: string;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      country?: string;
      postalCode?: string;
    };
    toOrder?: boolean;
  };

  // Notify Party
  notifyParty?: {
    name?: string;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      country?: string;
      postalCode?: string;
    };
  };

  // Vessel/Voyage Information
  vessel?: string;
  voyageNo?: string;

  // Ports Information
  portOfLoading?: string;
  portOfDischarge?: string;
  placeOfReceipt?: string;
  placeOfDelivery?: string;

  // Cargo Details
  packages?: Array<{
    description?: string;
    weight?: string;
    measurement?: string;
  }>;
  
  // Or single cargo description (for simpler documents)
  descriptionOfGoods?: string;
  grossWeight?: string;
  measurement?: string;
  numberOfPackages?: string;

  // Container Information
  containerNo?: string;
  sealNo?: string;

  // Dates
  dateOfIssue?: string;
  onBoardDate?: string;
  shippedOnBoardDate?: string;

  // Freight & Payment
  freightPayableAt?: string;
  freightPayment?: string;
  payableAt?: string;

  // Additional Fields
  carrierName?: string;
  carrierSignature?: string;
  placeOfIssue?: string;
  numberOfOriginals?: string;

  // Links for QR Code
  links?: {
    self?: {
      href?: string;
    };
  };
}

/**
 * ChainDox Bill of Lading document structure
 * Extended format with more detailed fields
 */
export interface ChainDoxBillOfLading {
  // Basic Details
  bolId?: string;
  documentIdentifier?: string;
  bookingReference?: string;
  houseWaybillId?: string;
  transportContractNumber?: string;
  contractNumber?: string;
  freightForwarderReference?: string;

  // Dates
  issueDate?: string;
  actualArrivalDate?: string;
  estimatedDeparture?: string;
  actualDepartureDate?: string;
  loadingDate?: string;
  estimatedArrival?: string;

  // Parties (flat structure from form)
  buyerName?: string;
  buyerAddress?: string;

  consignorName?: string;
  consignorAddress?: string;

  consigneeName?: string;
  consigneeAddress?: string;

  carrierName?: string;
  carrierLicenseNumber?: string;

  notifyPartyName?: string;
  notifyPartyContact?: string;

  freightForwarderName?: string;
  freightForwarderLicense?: string;

  // Nested party structures (alternative format)
  buyer?: {
    buyerName?: string;
    buyerAddress?: string;
  };

  importer?: {
    importerName?: string;
    importerAddress?: string;
    importerTaxId?: string;
  };

  exporter?: {
    exporterName?: string;
    exporterAddress?: string;
    exporterTaxId?: string;
  };

  carrier?: {
    carrierName?: string;
    carrierLicenseNumber?: string;
  };

  consignee?: {
    consigneeName?: string;
    consigneeAddress?: string;
  };

  consignor?: {
    consignorName?: string;
    consignorAddress?: string;
  };

  notifyParty?: {
    notifyPartyName?: string;
    notifyPartyContact?: string;
  };

  freightForwarder?: {
    freightForwarderName?: string;
    freightForwarderLicense?: string;
  };

  // Location Details
  deliveryLocation?: {
    deliveryAddress?: string;
    deliveryCountryCode?: string;
  };

  despatchLocation?: {
    despatchAddress?: string;
    despatchCountryCode?: string;
  };

  unloadingLocation?: {
    unloadingPortCode?: string;
    unloadingCountry?: string;
  };

  paymentLocation?: string;
  exportationCountry?: string;
  originCountry?: string;

  // Cargo Details
  goodsDescription?: string;
  numberOfPackages?: number;
  packagingType?: string;
  shippingMarks?: string;

  grossWeight?: number;
  netWeight?: number;
  volume?: number;

  // Transport Details
  journeyIdentifier?: string;
  containerSizeType?: string;
  containerStatus?: string;
  transportMeansId?: string;
  vehicleRegistration?: string;
  equipmentIdentifier?: string;
  sealIdentifier?: string;

  // Trade Terms
  transportConditions?: string;
  tradeTermsDescription?: string;
  tradeTermsCode?: string;

  // Charges
  freightCharges?: number;
  prepaidAmount?: number;
  collectCharges?: number;
}

/**
 * Combined document type that supports both formats
 */
export type BillOfLadingData = BillOfLadingCarrierDocument & ChainDoxBillOfLading;

/**
 * OpenAttestation v2 Bill of Lading
 */
export type BillOfLadingV2 = v2.OpenAttestationDocument & BillOfLadingData;

/**
 * OpenAttestation v3 Bill of Lading
 */
export type BillOfLadingV3 = v3.OpenAttestationDocument & {
  credentialSubject: BillOfLadingData;
};

/**
 * W3C Verifiable Credential Bill of Lading
 */
export type BillOfLadingW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & BillOfLadingData;
};

/**
 * Union type for all supported Bill of Lading formats
 */
export type BillOfLadingCarrierSchema = BillOfLadingV2 | BillOfLadingV3 | BillOfLadingW3C;