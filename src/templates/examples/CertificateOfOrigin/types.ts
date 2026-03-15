import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface CertificateOfOrigin {
    "@context"?: string | object;
    "@id"?: string;
    "@type"?: string;

    // --- Document Identifiers ---
    documentId?: string;
    shipmentId?: string;
    certificateOfOriginNumber?: string;

    // --- Parties & Authorities ---
    exporter?: COOParty;
    certificateIssuer?: COOAuthority;
    managementAuthority?: COOAuthority;

    // --- Shipment Details ---
    countryOrigin?: string;
    grossWeight?: string;

    // --- Goods Details ---
    /** List of goods included in this certificate */
    goods?: COOGoodsItem[]; // Mapped from @set container
}

// --- Sub-Interfaces ---

export interface COOParty {
    name?: string;
    addressLine?: string;
    city?: string;
    country?: string;
    email?: string;
}

export interface COOAuthority extends COOParty {
    seal?: string; // String representation or URL reference to the official seal/stamp
}

export interface COOGoodsItem {
    description?: string;
    numberOfPackages?: number; // Mapped from XMLSchema#integer
}

export type CertificateOfOriginW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & CertificateOfOrigin;
}

export type CertificateOfOriginSchema = CertificateOfOriginW3C;