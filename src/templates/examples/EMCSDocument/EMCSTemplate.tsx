import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { EMCS, EMCSSchema } from "./types";

export const EMCSTemplate: FunctionComponent<
  TemplateProps<EMCSSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as EMCS;

  const {
    // --- Header Information ---
    invoiceNumber,
    freightForwarderReferenceNumber,
    eoriNumber,

    // --- Dates ---
    issueDate,
    despatchDate,
    invoiceDate,

    // --- Parties ---
    importer: {
      name: importerName,
      addressLine: importerAddress,
      city: importerCity,
      country: importerCountry,
      email: importerEmail,
    } = {},
    exporter: {
      name: exporterName,
      addressLine: exporterAddress,
      city: exporterCity,
      country: exporterCountry,
      email: exporterEmail,
    } = {},
    guarantor: {
      name: guarantorName,
      addressLine: guarantorAddress,
      city: guarantorCity,
      country: guarantorCountry,
      email: guarantorEmail,
    } = {},

    // --- Locations ---
    destinationCountry,
    exportationCountry,

    // --- Financial & Tax Data ---
    exciseDutyAmount,
    exciseDutyAmountCurrency,

    // --- Weights & Measures ---
    grossWeight,
    grossWeightUnit,
    netWeight,
    netWeightUnit,
    quantity,

    // --- Goods Details ---
    goods = [],

    // --- Transport Details ---
    transportMeansTypeCode,
    transportMeansIdentifier,
  } = data;

  // Clean, white-background DataBox helper for UN standard layout
  const DataBox = ({ 
    label, 
    value, 
    className = "", 
    fontMono = false 
  }: { 
    label: string; 
    value?: string | React.ReactNode; 
    className?: string; 
    fontMono?: boolean 
  }) => (
    <div className={`p-3 border-r border-b border-black last:border-r-0 bg-white text-black ${className}`}>
      <label className="block text-[9px] uppercase font-bold mb-1 tracking-widest leading-none text-gray-500">
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
        <div className="flex justify-between items-start border-b-2 border-black p-6">
          <div className="flex-1">
            <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2">
              EMCS Document
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
              Excise Movement and Control System
            </p>
          </div>
          <div className="text-right flex flex-col gap-2">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-widest mb-1 text-gray-500">Invoice Number</p>
              <p className="text-xl font-mono font-black tracking-widest border border-black text-black px-3 py-1">
                {invoiceNumber || "DRAFT"}
              </p>
            </div>
            {(freightForwarderReferenceNumber || eoriNumber) && (
              <div className="text-xs font-mono text-right mt-1">
                {freightForwarderReferenceNumber && <div>FF Ref: {freightForwarderReferenceNumber}</div>}
                {eoriNumber && <div>EORI: {eoriNumber}</div>}
              </div>
            )}
          </div>
        </div>

        {/* --- Parties Grid --- */}
        <div className="grid grid-cols-3 border-b-2 border-black bg-white">
          {/* Exporter */}
          <div className="border-r border-black p-4">
            <div className="flex items-center space-x-2 mb-3">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500">1. Exporter / Consignor</h3>
            </div>
            <div className="text-sm font-bold uppercase mb-1">{exporterName || "-"}</div>
            <div className="text-xs mb-2 leading-relaxed">
              {exporterAddress}<br />
              {[exporterCity, exporterCountry].filter(Boolean).join(", ")}
            </div>
            {exporterEmail && <div className="text-[10px] font-mono text-gray-600 mt-2">Email: {exporterEmail}</div>}
          </div>

          {/* Importer */}
          <div className="p-4 border-r border-black">
            <div className="flex items-center space-x-2 mb-3">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500">2. Importer / Consignee</h3>
            </div>
            <div className="text-sm font-bold uppercase mb-1">{importerName || "-"}</div>
            <div className="text-xs mb-2 leading-relaxed">
              {importerAddress}<br />
              {[importerCity, importerCountry].filter(Boolean).join(", ")}
            </div>
            {importerEmail && <div className="text-[10px] font-mono text-gray-600 mt-2">Email: {importerEmail}</div>}
          </div>

          {/* Guarantor */}
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-3">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500">3. Guarantor</h3>
            </div>
            <div className="text-sm font-bold uppercase mb-1">{guarantorName || "-"}</div>
            <div className="text-xs mb-2 leading-relaxed">
              {guarantorAddress && <>{guarantorAddress}<br /></>}
              {[guarantorCity, guarantorCountry].filter(Boolean).join(", ")}
            </div>
            {guarantorEmail && <div className="text-[10px] font-mono text-gray-600 mt-2">Email: {guarantorEmail}</div>}
          </div>
        </div>

        {/* --- Dates & Locations --- */}
        <div className="grid grid-cols-5 border-b-2 border-black">
          <DataBox label="Issue Date" value={issueDate} fontMono />
          <DataBox label="Despatch Date" value={despatchDate} fontMono />
          <DataBox label="Invoice Date" value={invoiceDate} fontMono />
          <DataBox label="Exportation Country" value={exportationCountry} />
          <DataBox label="Destination Country" value={destinationCountry} className="border-r-0" />
        </div>

        {/* --- Transport --- */}
        <div className="grid grid-cols-2 border-b-2 border-black">
          <DataBox label="Transport Means Identifier" value={transportMeansIdentifier} className="col-span-1" />
          <DataBox label="Transport Means Type Code" value={transportMeansTypeCode} fontMono className="border-r-0 col-span-1" />
        </div>

        {/* --- Goods / Cargo Table --- */}
        <div className="border-b-2 border-black min-h-[200px] flex flex-col">
          <table className="w-full text-left table-fixed flex-1 border-collapse">
            <thead className="bg-white text-[9px] font-bold uppercase tracking-widest text-gray-500 border-b-2 border-black">
              <tr>
                <th className="p-3 w-12 text-center border-r border-black">No.</th>
                <th className="p-3 w-5/12 border-r border-black">Description of Goods</th>
                <th className="p-3 w-2/12 border-r border-black">Shipping Marks</th>
                <th className="p-3 w-2/12 text-center border-r border-black">EPC / HS Code</th>
                <th className="p-3 w-2/12 text-center">Packages</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {goods.length > 0 ? goods.map((item, i) => (
                <tr key={i} className="border-b border-gray-300 last:border-0 align-top">
                  <td className="p-3 text-center border-r border-black font-mono text-xs">{i + 1}</td>
                  <td className="p-3 border-r border-black whitespace-pre-wrap leading-relaxed font-bold uppercase text-xs">
                    {item.description || "-"}
                  </td>
                  <td className="p-3 border-r border-black text-xs font-mono whitespace-pre-wrap break-words">
                    {item.shippingMarks || "-"}
                  </td>
                  <td className="p-3 text-center border-r border-black text-[10px] font-mono">
                    {item.productIdentifier && <div className="mb-1">EPC: {item.productIdentifier}</div>}
                    {item.hsCode && <div>HS: {item.hsCode}</div>}
                    {(!item.productIdentifier && !item.hsCode) && "-"}
                  </td>
                  <td className="p-3 text-center font-black text-md">
                    {item.numberOfPackages || "-"}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-400 italic uppercase font-sans text-xs">No excise goods items declared</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* --- Summary Weights & Financials --- */}
        <div className="grid grid-cols-4 bg-white">
          <DataBox 
            label="Total Quantity (Volume)" 
            value={quantity ? quantity.toString() : "N/A"} 
            fontMono 
          />
          <DataBox 
            label="Net Weight" 
            value={netWeight ? `${netWeight} ${netWeightUnit || ""}`.trim() : "N/A"} 
            fontMono 
          />
          <DataBox 
            label="Gross Weight" 
            value={grossWeight ? `${grossWeight} ${grossWeightUnit || ""}`.trim() : "N/A"} 
            fontMono 
          />
          <DataBox 
            label="Excise Duty Amount" 
            value={exciseDutyAmount ? `${exciseDutyAmount} ${exciseDutyAmountCurrency || ""}`.trim() : "N/A"} 
            fontMono 
            className="border-r-0"
          />
        </div>

      </div>
    </Wrapper>
  );
};