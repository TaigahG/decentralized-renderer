import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Customs Declaration.
 * An official document that lists and provides details of goods that are being imported or exported.
 * It is used by customs authorities to control the flow of goods, ensure compliance, and collect appropriate taxes and duties.
 */
export interface CustomsDeclaration {
  // --- Document & Shipment Identifiers ---
  transportContractDocument?: string; // Link to the underlying transport contract (e.g., B/L or Waybill)
  invoiceNumber?: string; // Link to the commercial invoice

  // --- Parties ---
  importer?: CustomsParty;
  consignee?: CustomsParty;
  exporter?: CustomsParty;

  // --- Financials ---
  totalInvoiceAmount?: number;
  taxAmount?: number;
  totalInvoiceAmountCurrency?: string; // e.g., "USD", "EUR"

  // --- Weights & Measures ---
  grossWeight?: number;
  grossWeightUnit?: string; // e.g., "KGM"

  // --- Goods Details ---
  /** List of goods covered under this customs declaration */
  goods?: CustomsGoodsItem[]; // Mapped from @set container

  // --- Routing & Security ---
  customsOfficeOfEntry?: CustomsOfficeLocation;
  sealIdentifier?: string; // Security seal number for the container/transport
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Customs Declaration.
 * Shared across Importer, Consignee, and Exporter.
 */
export interface CustomsParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents the specific customs office handling the entry.
 * Note: Uses a simpler address structure compared to standard parties.
 */
export interface CustomsOfficeLocation {
  name?: string;
  address?: string; // Uses 'address' instead of 'addressLine'
}

/**
 * Represents an individual goods line item being declared to customs.
 */
export interface CustomsGoodsItem {
  description?: string;
  numberOfPackages?: number;
  hsCode?: string; // Harmonized System Code for accurate tariff classification
}

export type CustomsDeclarationW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & CustomsDeclaration;
}

export type CustomsDeclarationSchema = CustomsDeclarationW3C;