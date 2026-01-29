import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface ConsignmentSecurityDeclaration {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Header Information ---
  csdReferenceNumber?: string;
  
  // --- Issuer Information ---
  issuerName?: string;
  issuerIdApprovalNumber?: string; // e.g., Regulated Agent ID
  statusOfIssuer?: string; // e.g., "RA" (Regulated Agent), "KC" (Known Consignor)

  // --- Consignment Linkage ---
  mawb?: string; // Master Air Waybill Number
  hawb?: string; // House Air Waybill Number
  
  // --- Route ---
  origin?: string; // Airport Code (e.g., "LHR")
  destination?: string; // Airport Code (e.g., "JFK")

  // --- Cargo Details ---
  consignmentContent?: string;
  grossWeight?: Measurement;
  numberOfPieces?: number;

  // --- Security Status ---
  securityStatusCode?: string; // e.g., "SPX" (Secure for Passenger), "SCO" (Secure for Cargo Only)
  
  screeningMethod?: ScreeningMethod;
  
  // --- Chain of Custody ---
  chainOfCustody?: ChainOfCustody;

  // --- Metadata ---
  digitalSignature?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface Measurement {
  value?: number;
  unit?: string; // e.g., "KGM"
}

export interface ScreeningMethod {
  screeningMethodCode?: string; // e.g., "XRY" (X-Ray), "PHS" (Physical Search)
  /** Date format: ISO 8601 DateTime (YYYY-MM-DDThh:mm:ss) */
  dateTimeOfScreening?: string;
  screeningAuthorityId?: string;
  screeningAuthorityName?: string;
}

export interface ChainOfCustody {
  certificationStatement?: string; // "I certify that..."
  /** Date format: ISO 8601 DateTime */
  issuedDateTime?: string;
  
  issuedBy?: SecurityIssuer;
  receivedBy?: SecurityReceiver;
}

export interface SecurityIssuer {
  name?: string;
  signature?: string;
  position?: string;
}

export interface SecurityReceiver {
  name?: string;
  signature?: string;
  organization?: string;
  /** Date format: ISO 8601 DateTime */
  dateTime?: string;
}

export type ConsignmentSecurityDeclarationW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & ConsignmentSecurityDeclaration;
}

export type ConsignmentSecurityDeclarationSchema = ConsignmentSecurityDeclarationW3C;