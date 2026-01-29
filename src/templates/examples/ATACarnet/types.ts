import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface ATACarnet {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Header Information ---
  carnetNumber?: string; // Format often corresponds to CountryCode-Year-Number (e.g., US-2023-12345)
  /** Date format: YYYY-MM-DD */
  issueDate?: string;
  /** Date format: YYYY-MM-DD */
  validUntil?: string; // Strictly 1 year from issue date usually
  
  intendedUse?: string; // e.g., "Professional Equipment", "Exhibitions/Fairs", "Commercial Samples"

  // --- Parties ---
  issuingAssociation?: IssuingAssociation; // The Chamber of Commerce
  holder?: CarnetHolder; // The owner of the goods
  
  /** * List of persons authorized to use the Carnet (Power of Attorney holders).
   * Often referred to as "Box B" on the Green Cover.
   */
  representedBy?: CarnetRepresentative[]; // Mapped from @set container

  // --- The Inventory (General List) ---
  /** * The master list of all items covered by this Carnet.
   * Printed on the back of the Green Cover and all vouchers.
   */
  generalList?: GeneralListItem[]; // Mapped from @set container

  // --- Transaction History ---
  /** * Digital representation of the counterfoils/vouchers used at borders.
   */
  voucherRecords?: VoucherRecord[]; // Mapped from @set container

  // --- Metadata ---
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface IssuingAssociation {
  name?: string; // e.g., "United States Council for International Business"
  associationCode?: string;
  address?: string;
  city?: string;
  countryCode?: string;
  contactPerson?: ContactPerson;
}

export interface CarnetHolder {
  name?: string;
  address?: string;
  city?: string;
  stateProvince?: string;
  postalCode?: string;
  countryCode?: string;
  taxId?: string;
  contactPerson?: ContactPerson;
}

export interface ContactPerson {
  name?: string;
  phone?: string;
  email?: string;
}

export interface CarnetRepresentative {
  name?: string;
  passportNumber?: string;
  nationalIdNumber?: string;
  driversLicenseNumber?: string;
  address?: string;
  powerOfAttorneyReference?: string; // Reference to external POA document if applicable
}

export interface GeneralListItem {
  itemNumber?: number; // 1, 2, 3...
  tradeDescription?: string; // e.g., "Camera Lens 50mm"
  
  /** Distinctive marks, serial numbers, etc. */
  identificationMarks?: string[]; // Mapped from @set container
  serialNumber?: string;
  chassisNumber?: string; // For vehicles
  photoReference?: string; // URL to photo of the item
  
  numberOfPieces?: number;
  weight?: Measurement;
  volume?: Measurement;
  value?: MonetaryAmount; // Commercial value (not sale price)
  
  countryOfOrigin?: string; // ISO Code
}

export interface VoucherRecord {
  voucherNumber?: string;
  voucherType?: string; // "Exportation", "Importation", "Re-exportation", "Re-importation", "Transit"
  voucherColor?: string; // "Yellow" (Home), "White" (Foreign), "Blue" (Transit)
  operationType?: string;
  
  state?: string; // "Open", "Closed", "Discharged"
  
  customsOffice?: string;
  countryCode?: string;
  /** Date format: YYYY-MM-DD */
  dateOfOperation?: string;
  
  customsStamp?: string; // Digital representation of the stamp
  customsOfficerSignature?: string;
}

// --- Reusable Types ---

export interface Measurement {
  value?: number;
  unit?: string; // e.g., "KGM"
}

export interface MonetaryAmount {
  currencyCode?: string;
  amount?: number;
}

export type ATACarnetW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & ATACarnet;
};

export type ATACarnetSchema = ATACarnetW3C;