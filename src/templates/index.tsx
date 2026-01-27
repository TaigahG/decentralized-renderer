import { TemplateRegistry } from "@tradetrust-tt/decentralized-renderer-react-components";
import { TemplateATemplates } from "./examples/TemplateA";
import { TemplateBTemplates } from "./examples/TemplateB";
import { InvoiceTemplates } from "./examples/Invoice";
import { BillOfLadingTemplates } from "./examples/BillOfLading";
import { WarehouseReceiptTemplates } from "./examples/WarehouseReceipt";
import { PromissoryNoteTemplates } from "./examples/PromissoryNote";
import { CertificateOfOriginTemplates } from "./examples/CertificateOfOrigin";
import { CargoInsuranceTemplates } from "./examples/CargoInsurance";
import { SeaWaybillTemplates } from "./examples/SeaWaybill";
import { PackingListTemplates } from "./examples/packingList";
import { ShipperLetterOfInstructionsTemplates } from "./examples/ShipperLetterOfInstruction";
import { ShipDeliveryOrderTemplates } from "./examples/ShipDeliveryOrder";
import { AirWaybillTemplates } from "./examples/AirWaybill";
import { SeaCargoManifestTemplates } from "./examples/SeaCargoManifest";
import { AirCargoManifestTemplates } from "./examples/AirCargoManifest";
import { RoadConsignmentNoteTemplates } from "./examples/RoadConsignmentNote";
import { RailConsignmentNoteTemplates } from "./examples/RailConsignmentNote";
import { DangerousGoodsDeclarationTemplates } from "./examples/DangerousGoodDeclaration";
import { ConsignmentSecurityDeclarationTemplates } from "./examples/ConsignmentSecurityDeclaration";
import { EILIcenseAgriculturalTemplates } from "./examples/EILicenseAgricultural";
import { CustomsDeclarationTemplates } from "./examples/CustomsDeclaration";
import { CODEXCertificateTemplates } from "./examples/CODEXcertificate";
import { InterVeterinaryCertificateTemplates } from "./examples/InterVeterinaryCertificate";
import { CITESPermitTemplates } from "./examples/CITESPermit";
import { CertificateOfInspectionTemplates } from "./examples/CertificateOfInspection";
import { CustomsBondTemplates } from "./examples/CustomsBond";
import { ATACarnetTemplates } from "./examples/ATACarnet";
// import { BillOfLadingCarrierTemplates } from "./examples/BillOfLadingCarrier";

/**
 * Template Registry
 * 
 * Maps template names to their corresponding React components.
 * The template name in the document's $template.name (for OA v2/v3) or
 * renderMethod.templateName (for W3C VC) must match a key in this registry.
 * 
 * Available Templates:
 * - TEMPLATE_A: Sample template with QR code, watermark examples
 * - TEMPLATE_B: Invoice with selective redaction
 * - INVOICE: Modern minimal invoice template
 * - BILL_OF_LADING_CARRIER: TradeTrust & ChainDox compatible Bill of Lading
 */
export const registry: TemplateRegistry<any> = {
  TEMPLATE_A: TemplateATemplates,
  TEMPLATE_B: TemplateBTemplates,
  INVOICE: InvoiceTemplates,
  BILL_OF_LADING: BillOfLadingTemplates,
  WAREHOUSE_RECEIPT: WarehouseReceiptTemplates,
  ELECTRONIC_PROMISSORY_NOTE: PromissoryNoteTemplates,
  CERTIFICATE_OF_ORIGIN: CertificateOfOriginTemplates,
  CARGO_INSURANCE: CargoInsuranceTemplates,
  SEA_WAYBILL: SeaWaybillTemplates,
  PACKING_LIST: PackingListTemplates,
  SHIPPER_LETTER_OF_INSTRUCTIONS: ShipperLetterOfInstructionsTemplates,
  SHIP_DELIVERY_ORDER: ShipDeliveryOrderTemplates,
  AIR_WAYBILL: AirWaybillTemplates,
  SEA_CARGO_MANIFEST: SeaCargoManifestTemplates,
  AIR_CARGO_MANIFEST: AirCargoManifestTemplates,
  RAIL_CONSIGNMENT_NOTE: RailConsignmentNoteTemplates,
  ROAD_CONSIGNMENT_NOTE: RoadConsignmentNoteTemplates,
  DANGEROUS_GOODS_DECLARATION: DangerousGoodsDeclarationTemplates,
  CONSIGNMENT_SECURITY_DECLARATION: ConsignmentSecurityDeclarationTemplates,
  LICENSE_FOR_AGRICULTURAL_PRODUCTS: EILIcenseAgriculturalTemplates,
  CUSTOMS_DECLARATION: CustomsDeclarationTemplates,
  CODEX: CODEXCertificateTemplates,
  INTERNATIONAL_VETERINARY_CERTIFICATE: InterVeterinaryCertificateTemplates,
  CITES_PERMIT_CERTIFICATE: CITESPermitTemplates,
  CERTIFICATE_OF_INSPECTION_FOR_ORGANIC_PRODUCT: CertificateOfInspectionTemplates,
  CUSTOMS_BOND: CustomsBondTemplates,
  ATA_CARNET: ATACarnetTemplates
};