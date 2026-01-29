import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface AirCargoManifest {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Flight Information ---
  airlinePrefix?: string;
  flightNumber?: string;
  /** Date format: YYYY-MM-DD */
  dateOfFlight?: string;
  aircraftRegistration?: string;
  ownerOperator?: string; // Airline or Operator Name

  // --- Route Information ---
  pointOfLoading?: string;   // IATA Airport Code (e.g., "JFK")
  pointOfUnloading?: string; // IATA Airport Code (e.g., "LHR")

  // --- Cargo Details ---
  /** List of Air Waybills (AWBs) included in this manifest */
  awbList?: ManifestAWBItem[]; // Mapped from @set container

  // --- Metadata ---
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface ManifestAWBItem {
  mawbNumber?: string; // Master Air Waybill Number
  numberOfPieces?: number;
  
  weight?: Measurement;
  volumeDensity?: Measurement; // Often used for volumetric weight calculation
  
  natureOfGoods?: string;
  
  /** List of IATA special handling codes (e.g., "PER", "AVI", "DGR") */
  specialHandlingCodes?: string[]; // Mapped from @set container
  
  uldNumber?: string; // Unit Load Device ID (e.g., "AKE12345AA")
}

export interface Measurement {
  value?: number;
  unit?: string;
}

export type AirCargoManifestW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & AirCargoManifest;
};

export type AirCargoManifestSchema = AirCargoManifestW3C;