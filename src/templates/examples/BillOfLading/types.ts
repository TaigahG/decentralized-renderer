import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Bill of Lading document structure matching your VC's flat structure
 */
export interface BillOfLadingDocument {
  // Document Identifiers
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

  // Buyer (flat structure)
  buyerName?: string;
  buyerAddress?: string;

  // Consignor (flat structure)
  consignorName?: string;
  consignorAddress?: string;

  // Consignee (flat structure)
  consigneeName?: string;
  consigneeAddress?: string;

  // Carrier (flat structure)
  carrierName?: string;
  carrierLicenseNumber?: string;

  // Notify Party (flat structure)
  notifyPartyName?: string;
  notifyPartyContact?: string;

  // Locations (flat structure)
  despatchAddress?: string;
  despatchCountryCode?: string;
  deliveryAddress?: string;
  deliveryCountryCode?: string;
  unloadingPortCode?: string;
  unloadingCountry?: string;
  exportationCountry?: string;
  originCountry?: string;

  // Goods Details
  goodsDescription?: string;
  packagingType?: string;
  shippingMarks?: string;
  netWeight?: string | number;

  // Transport Details
  journeyIdentifier?: string;
  transportMeansId?: string;
  vehicleRegistration?: string;
  containerSizeType?: string;
  containerStatus?: string;
  equipmentIdentifier?: string;
  sealIdentifier?: string;

  // Trade Terms
  tradeTermsCode?: string;
  tradeTermsDescription?: string;

  // Financial
  freightCharges?: string | number;
  collectCharges?: number;
  prepaidAmount?: string | number;
}

/**
 * W3C Verifiable Credential format for Bill of Lading
 */
export type BillOfLadingW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & BillOfLadingDocument;
};

/**
 * Main schema type - supports W3C VC format
 */
export type BillOfLadingSchema = BillOfLadingW3C;