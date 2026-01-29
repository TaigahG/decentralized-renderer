import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Letter of Credit (L/C) or Documentary Credit.
 * Based on SWIFT MT700 series standards and UCP 600 guidelines.
 */
export interface LetterOfCredit {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Header & General Info ---
  lcNumber?: string; // e.g., "LC12345678"
  lcType?: string; // e.g., "Irrevocable", "Revocable", "Transferable"
  formOfDocumentaryCredit?: string; // e.g., "Irrevocable"

  /** Date format: YYYY-MM-DD */
  dateOfIssue?: string;
  /** Date format: YYYY-MM-DD */
  dateOfExpiry?: string;
  placeOfExpiry?: string; // Country or City

  applicableRules?: string; // e.g., "UCP 600", "ISP98"

  // --- Banks ---
  issuingBank?: ILCBank;
  advisingBank?: ALCBank;
  confirmingBank?: ConfirmingBank;
  nominatedBank?: NominatedBank;
  reimbursementBank?: ReimbursementBank;

  // --- Commercial Parties ---
  applicant?: LCParty; // The Buyer / Importer
  beneficiary?: LCParty; // The Seller / Exporter

  // --- Financials ---
  creditAmount?: LCCreditAmount;
  
  availableWith?: string; // e.g., "Advising Bank", "Any Bank"
  availableBy?: string; // e.g., "Negotiation", "Payment", "Acceptance"
  
  deferredPaymentDetails?: DeferredPaymentDetails;
  draftsAt?: string; // e.g., "Sight", "90 Days from B/L Date"
  drawee?: string; // Bank on which drafts are drawn

  // --- Shipping & Goods ---
  partialShipments?: string; // "Allowed" or "Not Allowed"
  transshipment?: string; // "Allowed" or "Not Allowed"
  shipmentDetails?: LCShipmentDetails;
  
  goodsDescription?: LCGoodsDescription;

  // --- Documentation & Conditions ---
  /** List of documents required for presentation */
  documentsRequired?: LCDocumentRequirement[]; // Mapped from @set container
  
  /** List of additional conditions (47A in SWIFT) */
  additionalConditions?: string[]; // Mapped from @set container
  
  chargesInstructions?: ChargesInstructions;
  periodForPresentation?: PeriodForPresentation; // e.g., "21 days after shipment"

  // --- Operational Flags ---
  transferable?: boolean; // Inferred boolean from context usage (or string if "Transferable")
  standbyIndicator?: boolean; // True if Standby LC
  senderToReceiverInformation?: string;

  // --- Lifecycle ---
  /** History of amendments to the LC */
  amendments?: LCAmendment[]; // Mapped from @set container
  
  /** History of drawings/utilization */
  utilizationHistory?: LCUtilization[]; // Mapped from @set container
  
  availableBalance?: MonetaryAmount;
  status?: string; // e.g., "Issued", "Expired", "Fully Utilized"

  // --- Metadata ---
  remarks?: string;
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface ILCBank {
  bankName?: string;
  swiftBic?: string; // or swiftCode
  branchName?: string;
  address?: LCAddress;
  contactPerson?: ContactPerson;
}

export interface ALCBank {
  bankName?: string;
  swiftCode?: string; // or swiftCode
  branchName?: string;
  address?: string;
  contactPerson?: ContactPerson;
}

export interface ConfirmingBank extends ALCBank {
  confirmationInstructions?: string; // e.g., "Confirm", "May Confirm"
}

export interface NominatedBank {
  bankName?: string;
  swiftCode?: string;
  nominationType?: string;
}

export interface ReimbursementBank {
  bankName?: string;
  swiftCode?: string;
  reimbursementInstructions?: string;
}

export interface LCParty {
  name?: string;
  accountNumber?: string;
  registrationNumber?: string;
  leiCode?: string; // Legal Entity Identifier
  address?: LCAddress;
  contactPerson?: ContactPerson;
}

export interface LCAddress {
  streetAddress?: string;
  city?: string;
  stateProvince?: string;
  postalCode?: string;
  countryCode?: string;
}

export interface ContactPerson {
  name?: string;
  phone?: string;
  email?: string;
}

export interface LCCreditAmount {
  currencyCode?: string;
  amountValue?: number;
  amountInWords?: string;
  tolerance?: LCTolerance;
}

export interface LCTolerance {
  positivePercentage?: number;
  negativePercentage?: number;
}

export interface MonetaryAmount {
  currencyCode?: string;
  amountValue?: number;
}

export interface DeferredPaymentDetails {
  deferredPaymentTerms?: string;
  daysAfterSight?: number;
  daysAfterBillOfLadingDate?: number;
}

export interface LCShipmentDetails {
  placeOfTakingInCharge?: string;
  portOfLoading?: string;
  portOfDischarge?: string;
  placeOfFinalDestination?: string;
  /** Date format: YYYY-MM-DD */
  latestDateOfShipment?: string;
  shipmentPeriod?: string; // Text description e.g., "During March 2024"
  incotermCode?: string; // e.g., "CIF", "FOB"
  incotermLocation?: string;
}

export interface LCGoodsDescription {
  descriptionOfGoods?: string;
  hsCode?: string;
  quantity?: string; // Can be text or number depending on context flexibility
  unitPrice?: MonetaryAmount;
  countryOfOrigin?: string;
}

export interface LCDocumentRequirement {
  documentType?: string; // e.g., "Commercial Invoice"
  documentDescription?: string;
  numberOfOriginals?: number;
  numberOfCopies?: number;
  specificRequirements?: string;
}

export interface ChargesInstructions {
  chargesOutsideIssuingBank?: string; // e.g., "Beneficiary"
  chargesOfIssuingBank?: string; // e.g., "Applicant"
  confirmationCharges?: string;
}

export interface PeriodForPresentation {
  days?: number;
  afterEvent?: string; // e.g., "Date of Shipment"
}

export interface LCAmendment {
  amendmentNumber?: string;
  /** Date format: YYYY-MM-DD */
  amendmentDate?: string;
  amendmentDetails?: string;
  /** Date format: YYYY-MM-DD */
  newExpiryDate?: string;
  newAmount?: MonetaryAmount;
  beneficiaryAcceptance?: string; // Status or Date
}

export interface LCUtilization {
  drawingNumber?: string;
  /** Date format: YYYY-MM-DD */
  drawingDate?: string;
  amountDrawn?: MonetaryAmount;
  documentsPresented?: string[]; // Mapped from @set container
  discrepanciesNoted?: string[]; // Mapped from @set container
  paymentStatus?: string; // e.g., "Paid", "Pending"
}

export type LetterOfCreditW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & LetterOfCredit;
};

export type LetterOfCreditSchema = LetterOfCreditW3C;