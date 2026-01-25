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
  SHIP_DELIVERY_ORDER: ShipDeliveryOrderTemplates
};