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
    // --- Header Information ---
    declarationType,
    procedureCode,
    authorizationNumber,

    // --- Parties ---
    consignorExporter: {
      name: exporterName,
      address: exporterAddress,
      eoriNumber: exporterEori,
    } = {},
    consigneeImporter: {
      name: importerName,
      address: importerAddress,
      eoriNumber: importerEori,
    } = {},
    declarantRepresentative: {
      name: agentName,
      eoriNumber: agentEori,
      statusCode: representationType,
    } = {},

    // --- Financial & Delivery ---
    deliveryTerms,
    invoiceCurrency,
    invoiceTotalAmount,
    statisticalValue: {
      amount: totalStatValue,
      currencyCode: statCurrency,
    } = {},

    // --- Transport ---
    identityOfTransport: {
      modeOfTransport,
      transportIdentifier,
      nationality: transportCountry,
    } = {},

    // --- Goods & Taxes ---
    goodsItems = [],
    totalTaxSummary = [],

    // --- Execution ---
    placeOfDeclaration,
    dateOfDeclaration,
    customsOfficeOfEntry,
    customsOfficeOfExit,
  } = data;

  // Professional helper for data boxes
  const InfoBox = ({ label, value, className = "", highlight = false }: { label: string; value?: string | React.ReactNode; className?: string; highlight?: boolean }) => (
    <div className={`border border-gray-300 p-3 min-h-[85px] ${highlight ? "bg-gray-50" : ""} ${className}`}>
      <label className="block text-[9px] uppercase font-black text-gray-400 mb-2 tracking-widest leading-none">{label}</label>
      <div className="text-sm font-bold uppercase text-gray-800 leading-tight whitespace-pre-line">{value || "-"}</div>
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-gray-900 border border-gray-200 shadow-2xl my-10 relative">
        
        {/* --- Header Section --- */}
        <div className="flex justify-between items-end border-b-4 border-gray-900 pb-6 mb-0">
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tighter leading-none mb-1">
              Customs Declaration
            </h1>
            <div className="flex items-center space-x-3 mt-2">
              <span className="bg-gray-900 text-white text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-widest">
                {declarationType || "UN"} Status
              </span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Proc: {procedureCode || "Standard"}
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] uppercase text-gray-400 font-bold mb-1 tracking-widest">Auth / Simplified Procedure No.</p>
            <p className="text-lg font-mono font-bold text-blue-900">{authorizationNumber || "NONE"}</p>
          </div>
        </div>

        {/* --- Parties Grid --- */}
        <div className="grid grid-cols-2">
          <InfoBox 
            label="Exporter / Consignor" 
            value={
              <div>
                <div className="mb-1">{exporterName}</div>
                <div className="text-[10px] font-normal normal-case text-gray-500 mb-2">{exporterAddress}</div>
                <div className="text-[10px] font-mono font-bold text-blue-600 tracking-tight">EORI: {exporterEori}</div>
              </div>
            }
            className="border-t-0 border-l-0"
          />
          <InfoBox 
            label="Importer / Consignee" 
            value={
              <div>
                <div className="mb-1">{importerName}</div>
                <div className="text-[10px] font-normal normal-case text-gray-500 mb-2">{importerAddress}</div>
                <div className="text-[10px] font-mono font-bold text-blue-600 tracking-tight">EORI: {importerEori}</div>
              </div>
            }
            className="border-t-0 border-r-0 border-l-0"
          />
        </div>

        {/* --- Representative & Transport Summary --- */}
        <div className="grid grid-cols-3 border-y border-gray-300 bg-gray-50">
          <InfoBox 
            label="Declarant / Representative" 
            value={
              <div>
                <div>{agentName || "Self-Declared"}</div>
                <div className="text-[10px] text-gray-400 mt-1 uppercase font-bold">Type: {representationType} | {agentEori}</div>
              </div>
            }
            className="border-l-0 border-t-0 border-b-0 col-span-2"
          />
          <InfoBox 
            label="Mode of Transport" 
            value={
              <div className="flex items-center justify-between">
                <span>{transportIdentifier}</span>
                <span className="bg-white border border-gray-200 px-2 py-0.5 text-[10px] rounded font-black">{modeOfTransport}</span>
              </div>
            }
            className="border-r-0 border-l-0 border-t-0 border-b-0"
          />
        </div>

        {/* --- Financial Bar --- */}
        <div className="grid grid-cols-4 border-b border-gray-300">
           <InfoBox label="Delivery Terms" value={deliveryTerms} className="border-l-0 border-t-0" />
           <InfoBox label="Currency" value={invoiceCurrency} className="border-l-0 border-t-0" />
           <InfoBox label="Invoice Total" value={invoiceTotalAmount?.toLocaleString()} className="border-l-0 border-t-0" />
           <InfoBox label="Statistical Value" value={`${totalStatValue?.toLocaleString()} ${statCurrency}`} className="border-r-0 border-l-0 border-t-0" highlight />
        </div>

        {/* --- Goods Items Table --- */}
        <div className="border-x border-b border-gray-300">
          <table className="w-full text-left table-fixed border-collapse">
            <thead className="bg-gray-800 text-white text-[9px] font-black uppercase tracking-widest">
              <tr>
                <th className="p-3 w-12 text-center border-r border-gray-700">No.</th>
                <th className="p-3 w-1/2 border-r border-gray-700">Description / Commodity Code</th>
                <th className="p-3 text-center border-r border-gray-700">Mass (Net)</th>
                <th className="p-3 text-right">Item Price</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {goodsItems.length > 0 ? goodsItems.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="p-3 text-center font-mono font-bold text-gray-400 border-r border-gray-200">
                    {item.itemNumber || idx + 1}
                  </td>
                  <td className="p-3 border-r border-gray-200">
                    <div className="font-bold text-gray-900 uppercase truncate">{item.goodsDescription}</div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-[10px] font-mono font-bold text-blue-700 tracking-wider">HS: {item.commodityCode}</span>
                      <span className="text-[9px] bg-gray-100 px-1 border border-gray-200 text-gray-500 font-bold uppercase">Origin: {item.countryOfOriginCode}</span>
                    </div>
                  </td>
                  <td className="p-3 text-center border-r border-gray-200">
                    <div className="font-bold">{item.netMass?.value}</div>
                    <div className="text-[9px] font-bold text-gray-400 uppercase">{item.netMass?.unit}</div>
                  </td>
                  <td className="p-3 text-right font-black text-gray-900">
                    {item.itemPrice?.amount?.toLocaleString()} <span className="text-[10px] text-gray-400">{item.itemPrice?.currencyCode}</span>
                  </td>
                </tr>
              )) : (
                <tr><td colSpan={4} className="p-10 text-center text-gray-300 italic uppercase text-[10px] tracking-widest">No goods items declared</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* --- Global Tax Summary Section --- */}
        <div className="grid grid-cols-12 border-b border-gray-300">
          <div className="col-span-8 p-6 bg-white">
             <h2 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-4">Office Information</h2>
             <div className="grid grid-cols-2 gap-8">
                <div>
                   <label className="block text-[8px] uppercase font-black text-gray-400 mb-1">Office of Entry</label>
                   <div className="text-sm font-bold text-gray-700 uppercase tracking-tight">{customsOfficeOfEntry || "Domestic"}</div>
                </div>
                <div>
                   <label className="block text-[8px] uppercase font-black text-gray-400 mb-1">Office of Exit</label>
                   <div className="text-sm font-bold text-gray-700 uppercase tracking-tight">{customsOfficeOfExit || "N/A"}</div>
                </div>
             </div>
          </div>
          <div className="col-span-4 bg-gray-900 text-white p-6">
             <h2 className="text-[10px] font-bold uppercase text-gray-500 tracking-widest mb-4 border-b border-gray-800 pb-2">Global Tax Summary</h2>
             <div className="space-y-3">
                {totalTaxSummary.map((tax, i) => (
                  <div key={i} className="flex justify-between items-end">
                    <span className="text-[10px] font-bold uppercase text-gray-400">{tax.typeOfTax}</span>
                    <span className="text-sm font-black tracking-tight">
                      {tax.totalTaxAmount?.currencyCode} {tax.totalTaxAmount?.amount?.toLocaleString()}
                    </span>
                  </div>
                ))}
                {totalTaxSummary.length === 0 && <div className="text-[10px] italic text-gray-600">No duty applicable</div>}
             </div>
          </div>
        </div>

        {/* --- Signature & Execution --- */}
        <div className="grid grid-cols-2">
          <div className="p-6 border-r border-gray-300 min-h-[160px] flex flex-col justify-between">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Declarant Location & Date</label>
            <div>
              <div className="text-sm font-bold uppercase text-gray-900">{placeOfDeclaration}</div>
              <div className="text-xs font-mono font-bold text-gray-500 mt-1">{dateOfDeclaration}</div>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-[9px] font-black uppercase tracking-widest text-green-700">Electronically Submitted</span>
            </div>
          </div>
          <div className="p-6 min-h-[160px] flex flex-col justify-between bg-gray-50 relative overflow-hidden">
             {/* Subtle Decorative Stamp */}
             <div className="absolute top-4 right-4 border-2 border-blue-100 text-blue-100 rounded-full w-20 h-20 flex items-center justify-center rotate-12 border-dashed pointer-events-none">
                <span className="text-[8px] font-black uppercase text-center">Customs<br/>Verified</span>
             </div>

             <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Blockchain Signature</label>
             <div className="space-y-1">
                <div className="text-[10px] font-mono text-gray-400 break-all leading-tight">HASH: {data.documentHash?.substring(0, 32)}...</div>
                <div className="text-[10px] font-black uppercase text-blue-900 italic tracking-tighter">Verified Identity: {exporterEori || agentEori}</div>
             </div>
             <div className="text-[9px] font-bold text-gray-300 uppercase tracking-widest border-t border-gray-200 pt-3">
               Authenticated via Chaindox
             </div>
          </div>
        </div>

        {/* --- Footer --- */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-[9px] font-bold text-gray-400 uppercase tracking-widest">
          <div>UN/SAD International Standard Layout</div>
          <div className="flex items-center space-x-2">
            <span>Powered by</span>
            <span className="text-[11px] font-black text-blue-900 tracking-tighter uppercase">Chaindox</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}