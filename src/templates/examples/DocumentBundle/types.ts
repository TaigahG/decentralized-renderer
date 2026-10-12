import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents a single attachment inside a Document Bundle.
 * Only the three fields declared by the attachments context are supported.
 */
export interface BundleAttachment {
  filename?: string;
  mimeType?: string;
  data?: string;
}

/**
 * Represents a Document Bundle: a list of attached files.
 */
export interface BundleDocument {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  attachments?: BundleAttachment[];
}

/**
 * W3C Verifiable Credential format for a Document Bundle.
 */
export type BundleW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & BundleDocument;
};

/**
 * Main schema type - supports W3C VC format
 */
export type BundleSchema = BundleW3C;
