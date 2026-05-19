import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Consignment Security Declaration (CSD).
 * A document providing security-related information about a consignment 
 * to ensure compliance with aviation, maritime, or border security regulations, 
 * verifying how the cargo was secured and screened.
 */
export interface ConsignmentSecurityDeclaration {
  // --- Dates ---
  /** Date format: YYYY-MM-DD */
  issueDate?: string;

  // --- Routing & Locations ---
  consignmentRouteDescription?: string;
  arrivalLocation?: SecurityArrivalLocation;

  // --- Security Details ---
  securityInformation?: string; // e.g., screening methods applied, security status

  // --- Goods Details ---
  /** List of goods covered under this security declaration */
  goods?: SecurityGoodsItem[]; // Mapped from @set container
}

// --- Sub-Interfaces ---

/**
 * Represents the arrival location for the security declaration.
 */
export interface SecurityArrivalLocation {
  name?: string;
  address?: string; // Note: Uses 'address' instead of 'addressLine'
}

/**
 * Represents an individual goods line item with specific security risk attributes.
 */
export interface SecurityGoodsItem {
  description?: string;
  consignmentSummaryDescription?: string;
  riskObjectText?: string; // Details regarding specific security risks associated with the item
}

export type ConsignmentSecurityDeclarationW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & ConsignmentSecurityDeclaration;
}

export type ConsignmentSecurityDeclarationSchema = ConsignmentSecurityDeclarationW3C;