import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

/**
 * Represents the EMCS Administrative Document (e-AD).
 * Used for intra-EU movement of excise goods under duty suspension.
 */
export interface EMCSDocument {
  "@context"?: string | object;
  "@id"?: string;
  "@type"?: string;

  // --- Header Information ---
  documentType?: string;
  arc?: string; // Administrative Reference Code (21 chars)
  sequenceNumber?: number; // Version of the document (1, 2, 3...)
  
  /** Date format: ISO 8601 DateTime */
  dateOfCreation?: string;
  /** Date format: YYYY-MM-DD */
  dateOfDispatch?: string;
  /** Time format: HH:mm:ss */
  timeOfDispatch?: string;
  
  movementType?: string; // e.g., "UK-EU", "Domestic"
  destinationType?: string; // e.g., "Tax Warehouse", "Export"
  journeyTime?: JourneyTime;
  
  status?: string; // e.g., "Accepted", "Cancelled", "Delivered"

  // --- Parties ---
  consignor?: EMCSTrader;
  consignee?: EMCSTrader;
  placeOfDispatch?: EMCSLocation;
  placeOfDelivery?: EMCSLocation;

  // --- Competent Authorities ---
  competentAuthorityDispatch?: CompetentAuthority;
  competentAuthorityDestination?: CompetentAuthority;

  // --- Transport ---
  transport?: EMCSTransport;

  // --- Goods (Body) ---
  /** List of excise line items */
  eadBody?: EADBodyItem[]; // Mapped from @set container

  // --- Workflow / Lifecycle Events ---
  // These sections represent updates or reports attached to the lifecycle of the movement
  
  /** Report sent by consignee upon arrival */
  reportOfReceipt?: ReportOfReceipt;
  
  /** Request to change destination during movement */
  changeOfDestination?: ChangeOfDestination;
  
  /** Cancellation of the movement before dispatch */
  cancellation?: Cancellation;
  
  /** Alerts or rejections from authorities */
  alertOrRejection?: AlertOrRejection;
  
  /** Explanations for discrepancies */
  explanation?: Explanation;

  // --- Customs References ---
  importDeclaration?: { mrn?: string };
  exportDeclaration?: { localReferenceNumber?: string; customsOfficeExport?: string; mrn?: string };

  // --- Metadata ---
  remarks?: string;
  documentHash?: string;
  links?: string | string[];
}

// --- Sub-Interfaces ---

export interface JourneyTime {
  days?: number;
  hours?: number;
}

/** Represents a Trader (Consignor/Consignee/Transporter) */
export interface EMCSTrader {
  traderExciseNumber?: string; // SEED Number
  traderName?: string;
  vatNumber?: string;
  eoriNumber?: string;
  consigneeIdentification?: string; // Specific to Consignee
  
  // Address fields are flat in this context
  streetName?: string;
  streetNumber?: string;
  postcode?: string;
  city?: string;
  memberStateCode?: string;
}

/** Represents a Warehouse or Location */
export interface EMCSLocation {
  warehouseExciseNumber?: string; // SEED Number
  warehouseName?: string;
  streetName?: string;
  streetNumber?: string;
  postcode?: string;
  city?: string;
  memberStateCode?: string;
}

export interface CompetentAuthority {
  memberStateCode?: string;
  referenceNumber?: string;
}

export interface EMCSTransport {
  transportArrangerCode?: string; // e.g., "1" (Consignor), "2" (Consignee)
  transportArranger?: EMCSTrader;
  firstTransporter?: EMCSTrader;
  
  /** List of transport units (Trucks, Containers) */
  transportDetails?: TransportDetail[]; // Mapped from @set container
}

export interface TransportDetail {
  transportUnitCode?: string; // e.g., "1" (Container), "2" (Vehicle)
  identityOfTransportUnits?: string; // Plate Number / Container ID
  commercialSealIdentification?: string;
  sealInformation?: string;
  complementaryInformation?: string;
}

// --- Goods Line Item ---

export interface EADBodyItem {
  bodyRecordUniqueReference?: number; // Line item number
  exciseProductCode?: string; // e.g., "W200" (Still Wine)
  cnCode?: string; // Combined Nomenclature (8 digits)
  
  quantity?: number;
  grossMass?: number;
  netMass?: number;
  
  // Specific to Alcohol/Energy
  alcoholicStrength?: number; // % vol
  degreePlato?: number; // Beer
  density?: number; // Energy products
  
  fiscalMark?: string; // Tax stamps
  fiscalMarkUsedFlag?: string; // "0" or "1"
  designationOfOrigin?: string; // PDO/PGI
  sizeOfProducer?: string; // Small producer status
  commercialDescription?: string;
  brandNameOfProducts?: string;
  maturationPeriodOrAgeOfProducts?: string; // Spirits
  
  /** List of packages for this line item */
  package?: EMCSPackage[]; // Mapped from @set container
  
  wineProduct?: WineProductDetails;
}

export interface EMCSPackage {
  kindOfPackages?: string; // e.g., "BH" (Bunch), "CS" (Case)
  numberOfPackages?: number;
  shippingMarks?: string;
  sealInformation?: string;
}

export interface WineProductDetails {
  wineProductCategory?: string; // e.g., "1" (Wine with PDO)
  wineGrowingZoneCode?: string;
  thirdCountryOfOrigin?: string;
  otherInformation?: string;
  /** List of oenological operations codes */
  wineOperations?: string[]; // Mapped from @set container
}

// --- Lifecycle Report Interfaces ---

export interface ReportOfReceipt {
  /** Date format: YYYY-MM-DD */
  dateOfArrival?: string;
  globalConclusionOfReceipt?: string; // e.g., "1" (Accepted), "2" (Accepted with shortages)
  complementaryInformation?: string;
  
  /** Results per line item */
  bodyReportOfReceipt?: BodyReportOfReceipt[]; // Mapped from @set container
}

export interface BodyReportOfReceipt {
  bodyRecordUniqueReference?: number;
  indicatorOfShortageOrExcess?: string; // "S" (Shortage), "E" (Excess)
  observedShortageOrExcess?: number;
  exciseProductCode?: string;
  refusedQuantity?: number;
  
  unsatisfactoryReason?: UnsatisfactoryReason[];
}

export interface UnsatisfactoryReason {
  unsatisfactoryReasonCode?: string; // e.g., "1" (Damaged), "2" (Lost)
  complementaryInformation?: string;
}

export interface ChangeOfDestination {
  newDestinationTypeCode?: string;
  newConsignee?: EMCSTrader; // Reusing basic trader structure (partial)
  newPlaceOfDelivery?: EMCSLocation; // Reusing basic location structure
  newTransportArranger?: EMCSTrader;
}

export interface Cancellation {
  cancellationReasonCode?: string;
  complementaryInformation?: string;
  /** Date format: YYYY-MM-DD */
  cancellationDate?: string;
}

export interface AlertOrRejection {
  /** Date format: YYYY-MM-DD */
  dateOfAlertOrRejection?: string;
  alertOrRejectionReasonCode?: string[]; // Mapped from @set container
}

export interface Explanation {
  /** Date format: YYYY-MM-DD */
  dateOfExplanation?: string;
  explanationCode?: string;
  complementaryInformation?: string;
}

export type EMCSDocumentW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & EMCSDocument;
}

export type EMCSDocumentSchema = EMCSDocumentW3C;