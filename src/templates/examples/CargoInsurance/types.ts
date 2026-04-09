import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Cargo Insurance Certificate.
 * A document issued to protect the buyer or seller against financial loss 
 * if the cargo is damaged, lost, or stolen during transit.
 */
export interface CargoInsurance {
  // --- Document & Shipment Identifiers ---
  documentId?: string;
  shipmentId?: string;
  invoiceNumber?: string;
  insurancePolicyNumber?: string;

  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issuedDate?: string;
  /** Date format: YYYY-MM-DD */
  estimatedTimeOfDeparture?: string;

  // --- Parties ---
  insuredParty?: CargoInsuranceParty;
  insuranceCompany?: CargoInsuranceParty;
  insuranceClaimAdjuster?: ClaimAdjuster;

  // --- Locations & Routing ---
  originalLoadingLocation?: string;
  placeOrDeparture?: string;
  baseportUnloadingLocation?: string;
  placeOfTheDeliveryByCarrier?: CargoDeliveryPlace;
  documentPlaceOfIssue?: string;

  // --- Insurance Details ---
  insuranceCondition?: string; // e.g., "Institute Cargo Clauses (A)"
  insuredValueAmount?: number;

  // --- Goods Details ---
  /** List of goods covered by this insurance policy */
  goods?: CargoGoodsItem[]; // Mapped from @set container
}

// --- Sub-Interfaces ---

/**
 * Base representation of a standard party in the Cargo Insurance document.
 * Shared across Insured Party and Insurance Company.
 */
export interface CargoInsuranceParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents the claim adjuster. 
 * Note: Uses a simpler address structure compared to standard parties.
 */
export interface ClaimAdjuster {
  name?: string;
  address?: string; // Uses 'address' instead of 'addressLine'
  email?: string;
}

/**
 * Represents the specific location where the carrier delivers the goods.
 */
export interface CargoDeliveryPlace {
  name?: string;
  addressLine?: string;
}

/**
 * Represents an individual goods line item covered by the insurance.
 */
export interface CargoGoodsItem {
  description?: string;
  numberOfPackages?: number;
  hsCode?: string; // Harmonized System Code
}

export interface Deductible {
  currencyCode?: string;
  amount?: number;
}

export type CargoInsuranceW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & CargoInsurance;
}

export type CargoInsuranceSchema = CargoInsuranceW3C;