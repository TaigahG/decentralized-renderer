import { InvoiceW3C } from "./types";

export const InvoiceSampleW3C: InvoiceW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/invoice.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "Invoice",
    documentId: "DOC-INV-2024-002",
    shipmentId: "SHP-SG-ID-998878",
    invoiceNumber: "INV-2024-883921",
    issueDate: "2024-10-24",
    invoiceDate: "2024-10-24",
    paymentDueDate: "2024-11-24",
    billFrom: {
      name: "Apex Tech Manufacturing Ltd.",
      addressline: "88 Ayer Rajah Crescent, #05-10 LaunchPad",
      city: "Singapore",
      country: "Singapore",
      email: "finance@apextech.com.sg"
    },
    billTo: {
      name: "PT Global Solusi Digital",
      addressline: "Gedung Cyber 2, Lantai 18, Jl. H.R. Rasuna Said",
      city: "Jakarta Selatan",
      country: "Indonesia",
      email: "payable@globalsolusi.id",
      bankName: "DBS Bank Singapore",
      accountName: "Apex Tech Manufacturing Ltd",
      accountNumber: "003-987654-1"
    },
    billableItem: [
      {
        description: "Electronic Components - Integrated Circuits",
        quantity: 50,
        amount: 25000
      },
      {
        description: "Lithium-ion Battery Packs",
        quantity: 10,
        amount: 5000
      }
    ],
    tax: 2100,
    totalAmount: 32100
  },
  validUntil: "2026-05-27T06:40:36.169Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "INVOICE"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#5",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 5,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-02-27T06:40:36.750Z",
  id: "urn:uuid:019c9dd3-e990-711d-b535-d86f0cc991e6",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-02-27T06:40:36Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: ""
  }
};