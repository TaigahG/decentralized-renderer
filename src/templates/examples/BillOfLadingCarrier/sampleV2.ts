import { v2 } from "@trustvc/trustvc";
import { BillOfLadingV2 } from "./types";

/**
 * Sample TradeTrust Bill of Lading (OpenAttestation v2 format)
 * This matches the official TradeTrust BILL_OF_LADING_CARRIER document structure
 */
export const BillOfLadingCarrierSampleV2: BillOfLadingV2 = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "BILL_OF_LADING_CARRIER",
    url: "http://decentralizedrenderer.netlify.app",
  },
  issuers: [
    {
      name: "DEMO CARRIER",
      tokenRegistry: "0x31376b6FB90c6C16320eE8A782E4bbbCC1a96B11",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "tradetrust.io",
      },
    },
  ],
  blNumber: "CHAINDOX-BL-2024-001",
  scac: "MAEU",

  shipper: {
    name: "ABC Trading Co., Ltd.",
    address: {
      street: "123 Export Street",
      city: "Shanghai",
      state: "Shanghai",
      country: "China",
      postalCode: "200000",
    },
  },

  consignee: {
    name: "XYZ Imports Pte Ltd",
    address: {
      street: "456 Import Road",
      city: "Singapore",
      country: "Singapore",
      postalCode: "018956",
    },
  },

  notifyParty: {
    name: "Global Notify Services",
    address: {
      street: "789 Notification Ave",
      city: "Singapore",
      country: "Singapore",
      postalCode: "018957",
    },
  },

  vessel: "EVER GOLDEN",
  voyageNo: "EG-2024-0123",

  portOfLoading: "SHANGHAI, CHINA",
  portOfDischarge: "SINGAPORE",
  placeOfReceipt: "SHANGHAI WAREHOUSE",
  placeOfDelivery: "SINGAPORE PORT",

  descriptionOfGoods: "1000 CARTONS OF ELECTRONIC COMPONENTS\nHS CODE: 8542.31\nSAID TO CONTAIN",
  grossWeight: "15,000 KGS",
  measurement: "45 CBM",
  numberOfPackages: "1000",

  containerNo: "MSKU1234567",
  sealNo: "SEAL-789012",

  dateOfIssue: "2024-12-15",
  shippedOnBoardDate: "2024-12-14",

  freightPayableAt: "SINGAPORE",
  freightPayment: "PREPAID",

  carrierName: "Maersk Line",
  placeOfIssue: "SHANGHAI, CHINA",
  numberOfOriginals: "3",

  links: {
    self: {
      href: "https://action.openattestation.com/?q=%7B%22type%22:%22DOCUMENT%22%7D",
    },
  },
};

/**
 * Sample ChainDox Bill of Lading with flat field structure
 */
export const BillOfLadingChainDoxSampleV2: BillOfLadingV2 = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "BILL_OF_LADING_CARRIER",
    url: "http://decentralizedrenderer.netlify.app",
  },
  issuers: [
    {
      name: "ChainDox Issuer",
      tokenRegistry: "0x2E045A7aB513d1129636d9894fFB386f6e0A46b8",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "chaindox.openattestation.com",
      },
    },
  ],

  // ChainDox flat structure
  bolId: "BOL-2024-CHAINDOX-001",
  documentIdentifier: "DOC-12345",
  bookingReference: "BK-2024-001",

  issueDate: "2024-12-15",
  loadingDate: "2024-12-14",
  estimatedArrival: "2024-12-20",

  consignorName: "ABC Trading Co., Ltd.",
  consignorAddress: "123 Export Street, Shanghai, China 200000",

  consigneeName: "XYZ Imports Pte Ltd",
  consigneeAddress: "456 Import Road, Singapore 018956",

  carrierName: "ChainDox Shipping",
  carrierLicenseNumber: "CSL-2024-001",

  notifyPartyName: "Global Notify Services",
  notifyPartyContact: "+65 6789 0123",

  goodsDescription: "Electronic Components - 1000 Cartons",
  numberOfPackages: 1000,
  packagingType: "Cartons",
  shippingMarks: "XYZ/SG/2024",

  grossWeight: 15000,
  netWeight: 14500,
  volume: 45,

  containerSizeType: "40ft HC",
  sealIdentifier: "SEAL-789012",
  vehicleRegistration: "MSKU1234567",

  freightCharges: 5000,
  prepaidAmount: 5000,

  transportConditions: "CIF Singapore",
  tradeTermsCode: "CIF",
};