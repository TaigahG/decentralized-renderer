import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface BillOfExchange {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Header Information ---
  billNumber?: string;
  billType?: string; // e.g., "Sight Draft", "Time Draft", "Usance Bill"
  
  /** Date format: YYYY-MM-DD */
  dateOfIssue?: string;
  placeOfIssue?: string; // City and Country
  
  // --- Maturity / Tenor ---
  /** Date format: YYYY-MM-DD */
  maturityDate?: string;
  maturityType?: string; // e.g., "At Sight", "At [X] Days Sight", "Fixed Date"
  tenorDays?: number; // Used if maturity is calculated (e.g., 90 days)
  tenorDescription?: string; // e.g., "90 Days after Bill of Lading date"

  // --- Parties ---
  drawer?: BillParty; // The Maker/Exporter who issues the bill
  drawee?: BillParty; // The Payer/Importer/Bank who must pay
  payee?: BillParty; // The Beneficiary to whom payment is directed

  // --- Financials ---
  amount?: BillAmount;
  interestClause?: InterestClause;

  // --- Payment Instructions ---
  placeOfPayment?: string; // City/Country or specific Bank counter
  paymentInstructions?: string; // e.g., "Payable at..."

  // --- Acceptance (for Time Drafts) ---
  acceptance?: BillAcceptance;

  // --- Chains of Transfer ---
  /** List of endorsements transferring the bill */
  endorsements?: EndorsementRecord[]; // Mapped from @set container
  
  // --- Guarantee ---
  aval?: AvalGuarantee; // "Pour Aval" - Third party guarantee

  // --- Legal / Protest ---
  protest?: ProtestRecord; // Formal statement if bill is dishonored

  // --- Banking Chain ---
  collectingBank?: BillBank;
  presentingBank?: BillBank;

  // --- History & References ---
  /** List of invoices or L/Cs related to this bill */
  relatedDocuments?: RelatedBillDocument[]; // Mapped from @set container
  
  /** Record of partial or full payments made */
  paymentHistory?: BillPaymentRecord[]; // Mapped from @set container

  // --- Status & Governance ---
  status?: string; // e.g., "Draft", "Accepted", "Endorsed", "Paid", "Dishonored"
  governingLaw?: string; // e.g., "English Law", "Geneva Convention"
  jurisdiction?: string;
  
  // --- Metadata ---
  remarks?: string;
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface BillParty {
  name?: string;
  payeeType?: string; // Specific to Payee (e.g., "Bearer", "Order")
  registrationNumber?: string;
  taxIdentificationNumber?: string;
  leiCode?: string; // Legal Entity Identifier
  address?: BillAddress;
  contactPerson?: ContactPerson;
  bankDetails?: BankAccountDetails;
  signature?: string; // Digital signature string or reference
}

export interface BillAddress {
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

export interface BankAccountDetails {
  bankName?: string;
  swiftCode?: string;
  accountNumber?: string;
  iban?: string;
}

export interface BillAmount {
  currencyCode?: string;
  amountValue?: number;
  amountInWords?: string;
}

export interface InterestClause {
  interestApplicable?: string; // Inferred from context usage
  interestRate?: number; // Percentage
  /** Date format: YYYY-MM-DD */
  interestFromDate?: string;
  interestCalculation?: string; // e.g., "360/365 days"
}

export interface BillAcceptance {
  acceptanceStatus?: string; // "Accepted", "Refused"
  /** Date format: YYYY-MM-DD */
  acceptanceDate?: string;
  acceptorName?: string;
  acceptorSignature?: string;
  acceptanceText?: string; // e.g., "Accepted Payable at..."
}

export interface EndorsementRecord {
  endorsementNumber?: number; // Sequence 1, 2, 3...
  endorsementType?: string; // e.g., "Blank", "Special", "Restrictive"
  
  endorserName?: string;
  endorserSignature?: string;
  endorseeName?: string; // Empty if Blank endorsement
  
  /** Date format: YYYY-MM-DD */
  endorsementDate?: string;
  endorsementPlace?: string;
  
  restrictiveConditions?: string; // e.g., "Pay to X only"
  withoutRecourse?: boolean; // "Sans Recours" - endorser limits liability
}

export interface AvalGuarantee {
  avalGiven?: String;
  avalistName?: string; // The guarantor
  avalistAddress?: string;
  avalForWhom?: string; // Party being guaranteed (Drawer or Drawee)
  /** Date format: YYYY-MM-DD */
  avalDate?: string;
  avalistSignature?: string;
}

export interface ProtestRecord {
  protestRequired?: string;
  protestWaived?: string; // "Sans Frais" / "No Protest"
  protestType?: string; // "Non-Acceptance", "Non-Payment"
  /** Date format: YYYY-MM-DD */
  protestDate?: string;
  protestPlace?: string;
  notaryName?: string;
  protestReason?: string;
}

export interface BillBank {
  bankName?: string;
  swiftCode?: string;
  collectionReference?: string; // For Collecting Bank
  collectionInstructions?: string;
  presentationReference?: string; // For Presenting Bank
}

export interface RelatedBillDocument {
  documentType?: string; // e.g., "Commercial Invoice", "Letter of Credit"
  documentNumber?: string;
  /** Date format: YYYY-MM-DD */
  documentDate?: string;
  description?: string;
}

export interface BillPaymentRecord {
  /** Date format: YYYY-MM-DD */
  paymentDate?: string;
  paymentType?: string; // "Partial", "Full"
  currencyCode?: string;
  amountPaid?: number;
  paymentReference?: string;
}

export type BillOfExchangeW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & BillOfExchange;
};

export type BillOfEcxhangeSchema = BillOfExchangeW3C;