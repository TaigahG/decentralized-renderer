import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a Promissory Note.
 * A financial instrument that contains a written promise by one party (the drawer/maker) 
 * to pay another party (the payee) a definite sum of money, either on demand or at a specified future date.
 */
export interface ElectronicPromissoryNote {
    // --- Document Identifiers ---
    documentId?: string;
    shipmentId?: string;

    // --- Dates ---
    /** Date format: YYYY-MM-DD */
    issueDate?: string;
    /** Date format: YYYY-MM-DD */
    paymentDueDate?: string;

    // --- Parties ---
    payee?: PromissoryNoteParty;
    drawer?: PromissoryNoteParty; // Also known as the maker or issuer

    // --- Issuance & Terms ---
    placeOfIssue?: string;
    issuerStamp?: string; // Could be a text description or a URL to a digital stamp/seal
    paymentTerm?: string; // e.g., "Net 30", "On Demand", "60 Days after sight"

    // --- Financials ---
    monetaryAmount?: number;
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Promissory Note.
 * Shared across Payee and Drawer.
 */
export interface PromissoryNoteParty {
    name?: string;
    addressline?: string;
    city?: string;
    country?: string;
    email?: string;
}

export type PromissoryNoteW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & ElectronicPromissoryNote;
}

export type PromissoryNoteSchema = PromissoryNoteW3C;