import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface CustomsDeclaration {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Header Information ---
  declarationType?: string; // e.g., "IM" (Import), "EX" (Export)
  procedureCode?: string; // e.g., "4000" (Release for free circulation)
  authorizationNumber?: string; // For simplified procedures

  // --- Parties ---
  consignorExporter?: CustomsParty;
  consigneeImporter?: CustomsParty;
  declarantRepresentative?: DeclarantRepresentative;

  // --- Financial & Delivery ---
  deliveryTerms?: string; // Incoterms (e.g., "CIF LONDON")
  invoiceCurrency?: string; // ISO Currency Code (e.g., "USD")
  invoiceTotalAmount?: number; // Total amount as decimal
  
  statisticalValue?: MonetaryAmount; // Value for trade statistics (often CIF at border)

  // --- Transport ---
  identityOfTransport?: IdentityOfTransport;

  // --- Goods Details ---
  /** List of line items declared */
  goodsItems?: CustomsGoodsItem[]; // Mapped from @set container

  // --- Tax Summary (Global) ---
  /** Summary of taxes payable across all items */
  totalTaxSummary?: TaxSummaryLine[]; // Mapped from @set container

  // --- Execution ---
  placeOfDeclaration?: string;
  /** Date format: YYYY-MM-DD */
  dateOfDeclaration?: string;
  customsOfficeOfEntry?: string; // Code of the office
  customsOfficeOfExit?: string; // Code of the office

  // --- Metadata ---
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface CustomsParty {
  name?: string;
  address?: string;
  eoriNumber?: string; // Economic Operators Registration and Identification number
}

export interface DeclarantRepresentative extends CustomsParty {
  statusCode?: string; // e.g., "2" (Direct Representation), "3" (Indirect)
}

export interface IdentityOfTransport {
  modeOfTransport?: string; // e.g., "1" (Sea), "4" (Air)
  transportIdentifier?: string; // Vessel Name, Truck Plate, Flight No
  nationality?: string; // Country Code of the vehicle
}

export interface MonetaryAmount {
  currencyCode?: string;
  amount?: number;
}

export interface Measurement {
  value?: number;
  unit?: string; // e.g., "KGM"
}

// --- Line Item Details ---

export interface CustomsGoodsItem {
  itemNumber?: number;
  commodityCode?: string; // HS Code / CN Code / TARIC
  goodsDescription?: string;
  countryOfOriginCode?: string; // ISO Country Code
  
  grossMass?: Measurement;
  netMass?: Measurement;
  supplementaryUnits?: Measurement; // e.g., Number of pairs for shoes, Liters for alcohol
  
  itemPrice?: MonetaryAmount;
  statisticalValueItem?: MonetaryAmount;

  /** Tax calculations specific to this item */
  taxCalculation?: TaxCalculationDetail[]; // Mapped from @set container
  
  /** Supporting documents (Invoices, Certificates, Licenses) */
  documentReferences?: SupportingDocument[]; // Mapped from @set container
}

export interface TaxCalculationDetail {
  typeOfTax?: string; // e.g., "A00" (Customs Duty), "B00" (VAT)
  taxBase?: MonetaryAmount; // The amount on which tax is calculated
  rate?: number; // Percentage or specific rate
  taxAmount?: MonetaryAmount;
  methodOfPayment?: string; // e.g., "A" (Cash), "E" (Deferment Account)
}

export interface SupportingDocument {
  documentType?: string; // e.g., "N380" (Commercial Invoice)
  documentReference?: string; // The ID/Number of the doc
}

export interface TaxSummaryLine {
  typeOfTax?: string;
  totalTaxAmount?: MonetaryAmount;
}

export type CustomsDeclarationW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & CustomsDeclaration;
}

export type CustomsDeclarationSchema = CustomsDeclarationW3C;