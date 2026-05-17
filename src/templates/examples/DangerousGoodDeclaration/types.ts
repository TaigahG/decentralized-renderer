import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Dangerous Goods Declaration (DGD).
 * A critical safety and regulatory document prepared by the consignor or shipper to certify 
 * that the dangerous goods being transported have been packaged, labeled, and declared 
 * according to standard international transport regulations.
 */
export interface DangerousGoodsDeclaration {
  dangerousGoodsDeclarationIdentifier?: string; // DGD reference number

  // --- Parties ---
  consignee?: DGDParty;
  consignor?: DGDParty;

  // --- Emergency Info ---
  emergencyContact?: EmergencyContact;

  // --- Goods Details ---
  /** List of dangerous goods covered by this declaration */
  dangerousGoods?: DangerousGoodsItem[]; // Mapped from @set container
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Dangerous Goods Declaration.
 * Shared across Consignee and Consignor.
 */
export interface DGDParty {
  name?: string;
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
}

/**
 * Represents the dedicated emergency contact for the hazardous materials.
 * Noticeably omits physical address fields in favor of direct communication lines.
 */
export interface EmergencyContact {
  name?: string;
  email?: string;
  phoneNumber?: string;
}

/**
 * Represents an individual dangerous goods line item with mandatory safety classifications.
 */
export interface DangerousGoodsItem {
  undgNumber?: string; // UN Dangerous Goods Number (e.g., "UN 1203")
  goodsTechnicalName?: string; // Specific chemical or technical name
  goodsClassNumber?: string; // Hazard class (e.g., "3" for Flammable Liquid)
  packagingDangerLevelCode?: string; // Packing Group (e.g., "I", "II", or "III")
}

export type DangerousGoodsDeclarationW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & DangerousGoodsDeclaration;
}

export type DangerousGoodsDeclarationSchema = DangerousGoodsDeclarationW3C;