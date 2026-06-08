import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Customs Bond.
 * A contract used to guarantee that all duties, taxes, and fees owed to the federal 
 * government will be paid, and that all customs regulations will be followed by the importer.
 */
export interface CustomsBond {
  // --- Parties ---
  importer?: CustomsBondParty;       // The Principal bound by the bond
  insuranceCompany?: CustomsBondParty; // The Surety providing the financial guarantee

  // --- Locations & Routing ---
  placeOfTheDeliveryOfTheGoods?: string;
  despatch?: string; // Point of dispatch/origin
  exportationCountry?: string;

  // --- Valuation & Financials ---
  customsValue?: number; // Total value declared for duty calculations
  customsValueCurrency?: string; // e.g., "USD", "EUR"
  statisticalValue?: number; // Value compiled for trade statistics
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Customs Bond.
 * Shared across the Importer and the Insurance Company (Surety).
 */
export interface CustomsBondParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

export type CustomsBondW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & CustomsBond;
}

export type CustomsBondSchema = CustomsBondW3C;