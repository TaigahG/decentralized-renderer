import { BillOfLadingW3C } from "./types";

/**
 * Sample W3C Verifiable Credential Bill of Lading
 * For use with ChainDox's W3C VC format
 */
export const BillOfLadingCarrierSampleW3C: BillOfLadingW3C = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/security/bbs/v1",
    "https://trustvc.io/context/render-method-context.json",
    "https://trustvc.io/context/transferable-records-context.json"
  ],
  type: ["VerifiableCredential"],
  renderMethod: [
    {
      id: "http://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "BILL_OF_LADING_CARRIER"
    }
  ],
  credentialSubject: {
    type: ["BillOfLading"],
    
    // Basic Info
    bolId: "BOL-W3C-2024-001",
    blNumber: "CHAINDOX-BL-W3C-001",
    scac: "CDOX",
    
    // Shipper
    shipper: {
      name: "W3C Trading Corporation",
      address: {
        street: "100 Blockchain Avenue",
        city: "Singapore",
        country: "Singapore",
        postalCode: "018956"
      }
    },
    
    // Consignee
    consignee: {
      name: "Digital Imports Ltd",
      address: {
        street: "200 Smart Contract Road",
        city: "Hong Kong",
        country: "Hong Kong",
        postalCode: "999077"
      }
    },
    
    // Notify Party
    notifyParty: {
      name: "Blockchain Notify Co",
      address: {
        street: "300 DLT Street",
        city: "Hong Kong",
        country: "Hong Kong"
      }
    },
    
    // Voyage Details
    vessel: "CRYPTO VOYAGER",
    voyageNo: "CV-2024-W3C",
    
    // Ports
    portOfLoading: "SINGAPORE",
    portOfDischarge: "HONG KONG",
    placeOfReceipt: "SINGAPORE PSA",
    placeOfDelivery: "HONG KONG TERMINAL",
    
    // Cargo
    descriptionOfGoods: "BLOCKCHAIN HARDWARE EQUIPMENT\n500 UNITS\nHS CODE: 8471.50",
    grossWeight: "10,000 KGS",
    measurement: "30 CBM",
    numberOfPackages: "500",
    
    // Container
    containerNo: "CDXU7654321",
    sealNo: "W3C-SEAL-001",
    
    // Dates
    dateOfIssue: "2024-12-20",
    shippedOnBoardDate: "2024-12-19",
    
    // Freight
    freightPayableAt: "HONG KONG",
    freightPayment: "COLLECT",
    
    // Carrier
    carrierName: "ChainDox Shipping Lines",
    placeOfIssue: "SINGAPORE",
    numberOfOriginals: "3"
  },
  issuer: "did:web:chaindox.com",
  issuanceDate: "2024-12-20T10:00:00Z",
  id: "urn:uuid:bill-of-lading-w3c-sample"
};