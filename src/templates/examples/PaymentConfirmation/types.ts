import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface PaymentConfirmation {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Header Information ---
  confirmationNumber?: string;
  confirmationType?: string; // e.g., "Credit Advice", "Debit Advice", "Payment Proof"
  /** Date format: ISO 8601 DateTime */
  confirmationDateTime?: string;
  /** Date format: YYYY-MM-DD */
  valueDate?: string; // The date funds became available
  
  paymentMethod?: string; // e.g., "Wire Transfer", "ACH", "SEPA"
  paymentChannel?: string; // e.g., "SWIFT", "Fedwire"

  // --- Parties ---
  payer?: PaymentParty; // The Originator
  payee?: PaymentParty; // The Beneficiary
  intermediaryBank?: IntermediaryBank;

  // --- Financials ---
  paymentAmount?: PaymentAmountDetails;
  
  exchangeRate?: ExchangeRateDetails;
  
  /** List of deductions applied (fees, tax withholdings) */
  deductions?: PaymentDeduction[]; // Mapped from @set container
  
  charges?: PaymentCharges; // Details on who bears charges (OUR/SHA/BEN)
  
  netAmountReceived?: MonetaryAmount;

  // --- References ---
  transactionReference?: TransactionReferences;
  
  /** Invoices, contracts, or orders related to this payment */
  relatedDocuments?: RelatedPaymentDocument[]; // Mapped from @set container

  // --- Purpose & Remittance ---
  paymentPurpose?: PaymentPurpose;

  // --- Status & Reporting ---
  paymentStatus?: PaymentStatusDetails;
  regulatoryReporting?: RegulatoryReporting;

  // --- Authentication ---
  issuingBankConfirmation?: BankConfirmation;

  // --- Metadata ---
  remarks?: string;
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface PaymentParty {
  name?: string;
  accountNumber?: string;
  accountName?: string;
  bankName?: string;
  swiftBic?: string;
  leiCode?: string; // Legal Entity Identifier
  iban?: string;
  address?: PaymentAddress;
}

export interface PaymentAddress {
  streetAddress?: string;
  city?: string;
  postalCode?: string;
  countryCode?: string;
}

export interface IntermediaryBank {
  bankName?: string;
  swiftCode?: string;
  accountNumber?: string;
}

export interface PaymentAmountDetails {
  currencyCode?: string;
  amountValue?: number;
  amountInWords?: string;
}

export interface ExchangeRateDetails {
  sourceCurrency?: string;
  targetCurrency?: string;
  rate?: number;
  /** Date format: YYYY-MM-DD */
  rateDate?: string;
}

export interface PaymentDeduction {
  deductionType?: string; // e.g., "Bank Fee", "Tax"
  description?: string;
  currencyCode?: string;
  amount?: number;
}

export interface PaymentCharges {
  chargeBearer?: string; // "OUR" (Sender pays), "BEN" (Receiver pays), "SHA" (Shared)
  
  bankChargesCurrency?: string;
  bankChargesAmount?: number;
  
  correspondentChargesCurrency?: string;
  correspondentChargesAmount?: number;
}

export interface MonetaryAmount {
  currencyCode?: string;
  amountValue?: number;
}

export interface TransactionReferences {
  senderReference?: string; // Field 20 in MT103
  relatedReference?: string;
  bankReference?: string;
  endToEndReference?: string; // Critical for ISO 20022 tracking
  uetr?: string; // Unique End-to-End Transaction Reference (SWIFT GPI)
}

export interface RelatedPaymentDocument {
  documentType?: string; // e.g., "Invoice", "Purchase Order"
  documentNumber?: string;
  /** Date format: YYYY-MM-DD */
  documentDate?: string;
  description?: string;
}

export interface PaymentPurpose {
  purposeCode?: string; // e.g., ISO Purpose Codes "SALA" (Salary), "SUPP" (Supplier)
  description?: string;
  remittanceInformation?: string; // Field 70 in MT103 (Unstructured text)
}

export interface PaymentStatusDetails {
  status?: string; // e.g., "Completed", "Pending", "Rejected"
  statusCode?: string; // e.g., "ACSC" (Accepted Settlement Completed)
  /** Date format: ISO 8601 DateTime */
  statusDateTime?: string;
  reason?: string;
}

export interface RegulatoryReporting {
  reportingCode?: string; // Central Bank Reporting Code
  reportingCountry?: string;
  reportingDetails?: string;
}

export interface BankConfirmation {
  bankName?: string;
  swiftCode?: string;
  confirmationReference?: string;
  authorizedSignatory?: string;
  digitalSignature?: string;
}

export type PaymentConfirmationW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & PaymentConfirmation;
}

export type PaymentConfirmationSchema = PaymentConfirmationW3C;