import { TemplateRegistry } from "@tradetrust-tt/decentralized-renderer-react-components";
import { TemplateATemplates } from "./examples/TemplateA";
import { TemplateBTemplates } from "./examples/TemplateB";
import { InvoiceTemplates } from "./examples/Invoice";
import { BillOfLadingCarrierTemplates } from "./examples/BillOfLadingCarrier";

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
  BILL_OF_LADING: BillOfLadingCarrierTemplates,
};