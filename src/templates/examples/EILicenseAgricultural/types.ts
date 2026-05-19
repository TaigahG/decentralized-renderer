import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a License for Agricultural Products.
 * An official permit required for the import or export of specific agricultural goods, 
 * ensuring compliance with national and international trade quotas and regulations.
 */
export interface EILIcenseAgricultural {
  // --- Document Identifiers ---
  documentIdentifier?: string; // The license reference number
  permitNumber?: string;

  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issueDate?: string;
  /** Date format: YYYY-MM-DD */
  permitExpiryDate?: string;

  // --- Parties & Authorities ---
  permitIssuer?: AgriLicenseParty; // The agency issuing the license
  managementAuthority?: AgriLicenseParty; // The governing body managing the quotas/regulations

  // --- Routing / Locations ---
  destinationCountry?: string;
  exportationCountry?: string;
  originCountry?: string;

  // --- Quantities ---
  quantity?: number; // Total approved quantity under this license

  // --- Goods Details ---
  /** List of agricultural goods authorized by this license */
  goods?: AgriLicenseGoodsItem[]; // Mapped from @set container
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party or authority in the Agricultural License.
 * Shared across Permit Issuer and Management Authority.
 */
export interface AgriLicenseParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents an individual agricultural goods line item approved under the license.
 */
export interface AgriLicenseGoodsItem {
  description?: string;
  productIdentifier?: string; // Specific product code
  hsCode?: string; // Harmonized System Code
}

export type EILIcenseAgriculturalW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & EILIcenseAgricultural;
}

export type EILIcenseAgriculturalSchema = EILIcenseAgriculturalW3C;