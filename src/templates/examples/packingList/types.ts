import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface PackingList {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  packingListNumber?: string;
  invoiceReferenceNumber?: string;
  
  /** Date format: YYYY-MM-DD */
  dateOfIssue?: string;
  
  buyerOrderNumber?: string;
  poNumber?: string;

  seller?: Seller;
  buyer?: Buyer;
  transportDetails?: TransportDetails;

  /** List of containers or handling units */
  containers?: Container[]; // Mapped from @set container

  totals?: PackingListTotals;

  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface Seller {
  name?: string;
  address?: string;
  countryCode?: string;
  contactPerson?: ContactPerson;
}

export interface Buyer {
  name?: string;
  billToAddress?: string;
  shipToAddress?: string;
  countryCode?: string;
  contactPerson?: ContactPerson;
}

export interface ContactPerson {
  name?: string;
  phone?: string;
  email?: string;
}

export interface TransportDetails {
  modeOfTransport?: string;
  bookingReference?: string;
  billOfLadingNumber?: string;
  vesselFlightName?: string;
  portOfLoading?: string;
  portOfDischarge?: string;
}

export interface Container {
  containerNumber?: string;
  sealNumber?: string;
  containerType?: string;
  /** List of packages within this container */
  packages?: PackingListPackage[]; // Mapped from @set container
}

export interface PackingListPackage {
  marksAndNumbers?: string;
  packageType?: string;
  numberOfPackages?: number;
  dimensions?: Dimensions;
  
  /** List of goods items inside this package */
  goods?: GoodsItem[]; // Mapped from @set container
  
  packageNetWeight?: Measurement;
  packageGrossWeight?: Measurement;
}

export interface GoodsItem {
  productDescription?: string;
  sku?: string;
  partNumber?: string;
  quantityInPackage?: number;
  unitOfMeasure?: string;
  netWeight?: Measurement;
  grossWeight?: Measurement;
}

export interface Dimensions {
  length?: number;
  width?: number;
  height?: number;
  unit?: string;
}

export interface Measurement {
  value?: number;
  unit?: string;
}

export interface PackingListTotals {
  totalNetWeight?: Measurement;
  totalGrossWeight?: Measurement;
  totalVolume?: Measurement;
  totalPackages?: number;
  totalQuantity?: number;
}

export type PackingListW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & PackingList;
}

export type PackingListSchema = PackingListW3C;