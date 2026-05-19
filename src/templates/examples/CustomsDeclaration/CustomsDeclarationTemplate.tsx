import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { CustomsDeclaration, CustomsDeclarationSchema } from "./types";

export const CustomsDeclarationTemplate: FunctionComponent<
  TemplateProps<CustomsDeclarationSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as CustomsDeclaration;

  const {
    // --- Document & Shipment Identifiers ---
    transportContractDocument: transportRef,
    invoiceNumber,

    // --- Parties ---
    importer: {
      name: importerName,
      addressLine: importerAddress,
      city: importerCity,
      country: importerCountry,
      email: importerEmail,
    } = {},
    consignee: {
      name: receiverName,
      addressLine: receiverAddress,
      city: receiverCity,
      country: receiverCountry,
      email: receiverEmail,
    } = {},
    exporter: {
      name: exporterName,
      addressLine: exporterAddress,
      city: exporterCity,
      country: exporterCountry,
      email: exporterEmail,
    } = {},

    // --- Financials ---
    totalInvoiceAmount: declaredValue,
    taxAmount: calculatedDuty,
    totalInvoiceAmountCurrency: currency,

    // --- Weights & Measures ---
    grossWeight,
    grossWeightUnit,

    // --- Goods Details ---
    goods = [],

    // --- Routing & Security ---
    customsOfficeOfEntry: {
      name: officeName,
      address: officeAddress,
    } = {},
    sealIdentifier,
  } = data;

  // Helper for rendering Party details cleanly within a table cell
  const PartyCellContent = ({
    title,
    name,
    address,
    city,
    country,
    email,
  }: {
    title: string;
    name?: string;
    address?: string;
    city?: string;
    country?: string;
    email?: string;
  }) => (
    <div className="flex flex-col h-full bg-transparent">
      <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
        {title}
      </div>
      <div className="text-sm font-bold uppercase mb-1">{name || "-"}</div>
      <div className="text-xs leading-relaxed text-black">
        {address && <>{address}<br /></>}
        {[city, country].filter(Boolean).join(", ")}
      </div>
      {email && <div className="text-[10px] font-mono mt-2">Email: {email}</div>}
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto my-10 font-sans text-black bg-transparent">
        
        {/* Bulletproof HTML Table for strict border enforcement */}
        <table className="w-full border-collapse border-2 border-black table-fixed bg-transparent">
          <tbody>
            
            {/* --- Header Row --- */}
            <tr>
              <td colSpan={2} className="border border-black p-6 align-top w-2/3">
                <h1 className="text-3xl font-black uppercase tracking-widest leading-none mb-2">
                  Customs Declaration
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
                  Single Administrative Document
                </p>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                    Transport Contract (B/L or Waybill)
                  </div>
                  <div className="text-sm font-mono font-bold tracking-widest">
                    {transportRef || "DRAFT"}
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                    Commercial Invoice No.
                  </div>
                  <div className="text-sm font-mono font-bold tracking-widest">
                    {invoiceNumber || "-"}
                  </div>
                </div>
              </td>
            </tr>

            {/* --- Exporter & Customs Office Row --- */}
            <tr>
              <td colSpan={2} className="border border-black p-4 align-top w-2/3">
                <PartyCellContent 
                  title="1. Exporter / Consignor"
                  name={exporterName}
                  address={exporterAddress}
                  city={exporterCity}
                  country={exporterCountry}
                  email={exporterEmail}
                />
              </td>
              <td className="border border-black p-4 align-top w-1/3">
                <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                  2. Customs Office of Entry
                </div>
                <div className="text-sm font-bold uppercase mb-1">{officeName || "-"}</div>
                <div className="text-xs leading-relaxed text-black whitespace-pre-wrap">
                  {officeAddress || ""}
                </div>
              </td>
            </tr>

            {/* --- Consignee & Importer Row --- */}
            <tr>
              <td colSpan={1} className="border border-black p-4 align-top w-1/2">
                <PartyCellContent 
                  title="3. Consignee"
                  name={receiverName}
                  address={receiverAddress}
                  city={receiverCity}
                  country={receiverCountry}
                  email={receiverEmail}
                />
              </td>
              <td colSpan={2} className="border border-black p-4 align-top w-1/2">
                <PartyCellContent 
                  title="4. Importer / Declarant"
                  name={importerName}
                  address={importerAddress}
                  city={importerCity}
                  country={importerCountry}
                  email={importerEmail}
                />
              </td>
            </tr>

            {/* --- Financials, Weights & Security Row --- */}
            <tr>
              <td colSpan={2} className="border border-black p-0 align-top w-2/3">
                 <div className="flex h-full">
                   <div className="p-4 border-r border-black w-1/2">
                     <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                       5. Total Declared Value
                     </div>
                     <div className="text-lg font-mono font-black border border-black px-3 py-1 inline-block">
                       {currency || ""} {declaredValue !== undefined ? declaredValue : "-"}
                     </div>
                   </div>
                   <div className="p-4 w-1/2">
                     <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                       6. Calculated Tax / Duty
                     </div>
                     <div className="text-lg font-mono font-black border border-black px-3 py-1 inline-block">
                       {currency || ""} {calculatedDuty !== undefined ? calculatedDuty : "-"}
                     </div>
                   </div>
                 </div>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                 <div className="p-3 border-b border-black">
                   <div className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                     7. Gross Weight
                   </div>
                   <div className="text-sm font-mono font-bold">
                     {grossWeight !== undefined ? `${grossWeight} ${grossWeightUnit || ""}` : "-"}
                   </div>
                 </div>
                 <div className="p-3">
                   <div className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                     8. Security Seal Identifier
                   </div>
                   <div className="text-sm font-mono font-bold">
                     {sealIdentifier || "NONE DECLARED"}
                   </div>
                 </div>
              </td>
            </tr>

            {/* --- Goods Table Row --- */}
            <tr>
              <td colSpan={3} className="border border-black p-0">
                <table className="w-full border-collapse table-fixed bg-transparent">
                  <thead>
                    <tr>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-1/12">
                        Item
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-left w-6/12">
                        9. Description of Goods
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-3/12">
                        10. HS Code
                      </th>
                      <th className="border-b border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-2/12">
                        11. Packages
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {goods.length > 0 ? (
                      goods.map((item, i) => (
                        <tr key={i}>
                          <td className="border-b border-r border-black p-4 text-xs font-mono font-bold text-center align-top">
                            {i + 1}
                          </td>
                          <td className="border-b border-r border-black p-4 text-xs font-bold uppercase leading-relaxed whitespace-pre-wrap align-top">
                            {item.description || "-"}
                          </td>
                          <td className="border-b border-r border-black p-4 text-center text-xs font-mono font-bold align-top">
                            {item.hsCode || "-"}
                          </td>
                          <td className="border-b border-black p-4 text-center text-xs font-mono font-bold align-top">
                            {item.numberOfPackages !== undefined ? item.numberOfPackages : "-"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="border-b border-black p-8 text-center text-xs italic uppercase">
                          No Goods Items Declared
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};