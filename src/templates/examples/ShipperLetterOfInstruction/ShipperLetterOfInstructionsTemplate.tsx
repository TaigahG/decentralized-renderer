import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { ShipperLetterOfInstructions, ShipperLetterOfInstructionsSchema } from "./types";

export const ShipperLetterOfInstructionsTemplate: FunctionComponent<
  TemplateProps<ShipperLetterOfInstructionsSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as ShipperLetterOfInstructions;

  const {
    // --- Dates ---
    issueDate,
    despatchDate,

    // --- Parties ---
    consignee: {
      name: consigneeName,
      addressLine: consigneeAddress,
      city: consigneeCity,
      country: consigneeCountry,
      email: consigneeEmail,
    } = {},
    freightForwarder: {
      name: forwarderName,
      addressLine: forwarderAddress,
      city: forwarderCity,
      country: forwarderCountry,
      email: forwarderEmail,
    } = {},
    consignor: { // Usually the Shipper
      name: consignorName,
      addressLine: consignorAddress,
      city: consignorCity,
      country: consignorCountry,
      email: consignorEmail,
    } = {},

    // --- Location & Trade Terms ---
    despatchLocationName,
    originCountry,
    placeOfIssue,
    tradeTermsConditionsDescription, // e.g., "FOB Shanghai"

    // --- Weights ---
    grossWeight,
    netWeight,

    // --- Goods Details ---
    goods = [],
  } = data;

  // Strict B&W Box Helper
  const DataBox = ({ label, value, className = "", inverted = false, fontMono = false }: { label: string; value?: string | React.ReactNode; className?: string; inverted?: boolean; fontMono?: boolean }) => (
    <div className={`p-3 border-r border-b border-black last:border-r-0 flex flex-col justify-start ${inverted ? "bg-black text-white" : "bg-white text-black"} ${className}`}>
      <label className={`block text-[9px] uppercase font-bold mb-1 tracking-widest leading-none ${inverted ? "text-gray-400" : "text-gray-600"}`}>
        {label}
      </label>
      <div className={`text-sm font-bold uppercase leading-tight whitespace-pre-wrap break-words ${fontMono ? "font-mono" : ""}`}>
        {value || "-"}
      </div>
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto bg-white font-sans text-black border-2 border-black my-10 relative overflow-hidden">
        
        {/* --- Header Section --- */}
        <div className="flex justify-between items-start border-b-4 border-black p-6 mb-0">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-2">
              Shipper's Letter of Instructions
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
              Export Forwarding & Customs Authorization
            </p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-bold uppercase tracking-widest mb-1">Issue Date</p>
            <p className="text-xl font-mono font-black tracking-widest bg-black text-white px-3 py-1">
              {issueDate || "DRAFT"}
            </p>
          </div>
        </div>

        {/* --- Parties Grid --- */}
        <div className="grid grid-cols-2 border-b-2 border-black">
          
          {/* Left Column: Shipper & Consignee */}
          <div className="border-r border-black flex flex-col">
             {/* Shipper */}
             <div className="p-4 border-b border-black flex-1">
                <div className="flex items-center space-x-2 mb-3">
                   <div className="w-3 h-3 bg-black"></div>
                   <h3 className="text-xs font-black uppercase tracking-widest">Shipper / Exporter</h3>
                </div>
                <div className="text-sm font-bold uppercase mb-1">{consignorName}</div>
                <div className="text-xs mb-2 leading-relaxed">
                  {consignorAddress}<br/>
                  {consignorCity}, {consignorCountry}
                </div>
                {consignorEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {consignorEmail}</div>}
             </div>
             
             {/* Consignee */}
             <div className="p-4 flex-1">
                <div className="flex items-center space-x-2 mb-3">
                   <div className="w-3 h-3 border-2 border-black"></div>
                   <h3 className="text-xs font-black uppercase tracking-widest">Consignee / Ultimate Destination</h3>
                </div>
                <div className="text-sm font-bold uppercase mb-1">{consigneeName}</div>
                <div className="text-xs mb-2 leading-relaxed">
                  {consigneeAddress}<br/>
                  {consigneeCity}, {consigneeCountry}
                </div>
                {consigneeEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {consigneeEmail}</div>}
             </div>
          </div>

          {/* Right Column: Forwarder & Shipment Info */}
          <div className="flex flex-col">
             {/* Freight Forwarder */}
             <div className="p-4 border-b border-black bg-gray-50 flex-1">
                <div className="flex items-center space-x-2 mb-3">
                   <div className="w-3 h-3 bg-gray-400"></div>
                   <h3 className="text-xs font-black uppercase tracking-widest">Forwarding Agent</h3>
                </div>
                <div className="text-sm font-bold uppercase mb-1">{forwarderName}</div>
                <div className="text-xs mb-2 leading-relaxed">
                  {forwarderAddress}<br/>
                  {forwarderCity}, {forwarderCountry}
                </div>
                {forwarderEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {forwarderEmail}</div>}
             </div>

             {/* Shipment Routing */}
             <div className="grid grid-cols-2 flex-1">
                <DataBox label="Despatch Date" value={despatchDate} fontMono />
                <DataBox label="Origin Country" value={originCountry} className="border-r-0" />
                <DataBox label="Despatch Location" value={despatchLocationName} className="border-b-0" />
                <DataBox label="Place of Issue" value={placeOfIssue} className="border-r-0 border-b-0" />
             </div>
          </div>
        </div>

        {/* --- Trade Terms (Incoterms) --- */}
        <div className="border-b-2 border-black bg-black text-white p-4">
           <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-[0.2em]">
             Trade Terms / Conditions of Delivery
           </label>
           <div className="text-xl font-black uppercase tracking-widest">
              {tradeTermsConditionsDescription || "NOT SPECIFIED"}
           </div>
        </div>

        {/* --- Goods Details Table --- */}
        <div className="border-b-2 border-black min-h-[250px] flex flex-col">
          <div className="bg-gray-100 p-2 text-[9px] font-black uppercase tracking-widest border-b border-black">
            Particulars of Goods to be Forwarded
          </div>
          <table className="w-full text-left table-fixed flex-1">
            <thead className="bg-white text-[9px] font-bold uppercase tracking-widest text-gray-600 border-b border-black">
              <tr>
                <th className="p-3 w-16 text-center border-r border-black">Item</th>
                <th className="p-3 w-1/2 border-r border-black">Description of Goods</th>
                <th className="p-3 w-1/6 text-center border-r border-black">HS Code</th>
                <th className="p-3 w-1/6 text-center border-r border-black">Packaging</th>
                <th className="p-3 w-1/6 text-center">Qty</th>
              </tr>
            </thead>
            <tbody className="text-sm font-mono">
              {goods.length > 0 ? goods.map((item, i) => (
                <tr key={i} className="border-b border-gray-200 last:border-0 align-top">
                  <td className="p-3 text-center border-r border-black font-bold text-gray-400">{i + 1}</td>
                  <td className="p-3 border-r border-black whitespace-pre-wrap leading-relaxed uppercase font-sans font-bold text-xs">
                    {item.description}
                  </td>
                  <td className="p-3 text-center border-r border-black text-[10px]">
                    {item.hsCode || "-"}
                  </td>
                  <td className="p-3 text-center border-r border-black text-[10px] uppercase font-sans font-bold text-gray-600">
                    {item.typeOfPackaging || "PKG"}
                  </td>
                  <td className="p-3 text-center font-black text-base">
                    {item.numberOfPackages}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-400 italic uppercase font-sans text-xs">No goods items declared</td>
                </tr>
              )}
            </tbody>
            {/* Totals Footer */}
            {goods.length > 0 && (
              <tfoot className="bg-gray-100 border-t border-black font-bold">
                <tr>
                  <td colSpan={4} className="p-3 text-right text-[10px] uppercase tracking-widest border-r border-black">Total Packages</td>
                  <td className="p-3 text-center text-lg font-black">
                    {goods.reduce((acc, curr) => acc + (curr.numberOfPackages || 0), 0)}
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>

        {/* --- Summary Weights --- */}
        <div className="grid grid-cols-2 border-b-2 border-black">
           <DataBox label="Gross Weight" value={grossWeight != null ? `${grossWeight}` : "N/A"} fontMono />
           <DataBox label="Net Weight" value={netWeight != null ? `${netWeight}` : "N/A"} fontMono className="border-r-0" />
        </div>
      </div>
    </Wrapper>
  );
};