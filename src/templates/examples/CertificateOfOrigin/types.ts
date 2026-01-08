import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface CertificateOfOrigin {
    cooId?: string;
    issueDateTime?: string;
    firstSignatoryAuthentication?: string;
    signature?: string;

    // Supply Chain Consignment
    supplyChainConsignment?: string;
    supplyChainConsignmentId?: string;
    supplyChainConsignmentInformation?: string;

    // Export Country
    exportCountry?: string;
    exportCountryCode?: string;

    // Exporter Information (flattened)
    exporter?: string;
    exporterId?: string;
    exporterName?: string;
    exporterLine1?: string;
    exporterLine2?: string;
    exporterCityName?: string;
    exporterPostcode?: string;
    exporterCountrySubDivisionName?: string;
    exporterCountryCode?: string;

    // Import Country
    importCountry?: string;
    importCountryCode?: string;

    // Importer Information (flattened)
    importer?: string;
    importerId?: string;
    importerName?: string;
    importerLine1?: string;
    importerLine2?: string;
    importerCityName?: string;
    importerPostcode?: string;
    importerCountrySubDivisionName?: string;
    importerCountryCode?: string;

    // Consignment Items
    includedConsignmentItems?: string;

    // Loading Location
    loadingBaseportLocation?: string;
    loadingBaseportLocationId?: string;
    loadingBaseportLocationName?: string;

    // Transport Movement
    mainCarriageTransportMovement?: string;
    mainCarriageTransportMovementId?: string;
    mainCarriageTransportMovementInformation?: string;
    usedTransportMeansName?: string;
    usedTransportMeansId?: string;
    departureDateTime?: string;

    // Unloading Location
    unloadingBaseportLocation?: string;
    unloadingBaseportLocationId?: string;
    unloadingBaseportLocationName?: string;
}

export type CertificateOfOriginW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & CertificateOfOrigin;
}

export type CertificateOfOriginSchema = CertificateOfOriginW3C;