import { CertificateOfOriginW3C } from "./types";

export const CertificateOfOriginSampleW3C: CertificateOfOriginW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/coo-context.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    cooId: "SG-ID-2024-883921",
    issueDateTime: "2024-10-24T09:30:00Z",
    firstSignatoryAuthentication: "Auth-Officer-001",
    signature: "Signed by Chamber of Commerce Singapore",
    exportCountryCode: "SG",
    exporterId: "UEN-201829910W",
    exporterName: "Apex Tech Manufacturing Ltd.",
    exporterLine1: "88 Ayer Rajah Crescent",
    exporterLine2: "#05-10 LaunchPad @ One-North",
    exporterCityName: "Singapore",
    exporterPostcode: "139968",
    exporterCountrySubDivisionName: "South West",
    exporterCountryCode: "SG",
    importCountryCode: "ID",
    importerId: "NIB-9120338192",
    importerName: "PT Global Solusi Digital",
    importerLine1: "Gedung Cyber 2, Lantai 18",
    importerLine2: "Jl. H.R. Rasuna Said Blok X-5",
    importerCityName: "Jakarta Selatan",
    importerPostcode: "12950",
    importerCountrySubDivisionName: "DKI Jakarta",
    importerCountryCode: "ID",
    supplyChainConsignmentId: "CNS-SG-ID-99281",
    supplyChainConsignmentInformation: "Electronic Components - HS Code 854231",
    loadingBaseportLocationId: "SGSIN",
    loadingBaseportLocationName: "Port of Singapore",
    unloadingBaseportLocationId: "IDJKT",
    unloadingBaseportLocationName: "Tanjung Priok Port",
    mainCarriageTransportMovementId: "MOV-8821",
    mainCarriageTransportMovementInformation: "Sea Freight",
    usedTransportMeansName: "WAN HAI 305",
    usedTransportMeansId: "IMO 9238129",
    departureDateTime: "2024-10-25T14:00:00Z"
  },
  validUntil: "2026-04-08T09:51:30.616Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app/",
      type: "EMBEDDED_RENDERER",
      templateName: "CERTIFICATE_OF_ORIGIN"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "a6465c3c699c8fefe5503aa0c3cf5e106049eb58cfb5bac45b3c56b44c88362d"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-08T09:51:31.716Z",
  id: "urn:uuid:019b9d04-bb87-722b-8b86-7550f275a093",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-08T09:51:31Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: ""
  }
};