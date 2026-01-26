import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface SeaCargoManifest {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Vessel & Voyage Information ---
  nameOfShip?: string;
  imoNumber?: string;
  voyageNumber?: string;
  flagState?: string;
  callSign?: string;

  // --- Port & Schedule ---
  portOfLoading?: string;
  portOfDischarge?: string;
  
  /** Date format: YYYY-MM-DD */
  dateOfArrival?: string;
  /** Date format: YYYY-MM-DD */
  dateOfDeparture?: string;

  // --- Cargo Details ---
  /** List of individual Bill of Lading items on the manifest */
  manifestItems?: ManifestItem[]; // Mapped from @set container

  // --- Metadata ---
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface ManifestItem {
  blNumber?: string;
  marksAndNumbers?: string;
  numberOfPackages?: number;
  kindOfPackages?: string;
  descriptionOfGoods?: string;
  
  grossWeight?: Measurement;
  measurement?: Measurement; // Typically Volume/CBM
}

export interface Measurement {
  value?: number;
  unit?: string;
}

export type SeaCargoManifestW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & SeaCargoManifest;
};

export type SeaCargoManifestSchema = SeaCargoManifestW3C;