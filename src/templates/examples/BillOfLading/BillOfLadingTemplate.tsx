import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { BillOfLadingDocument, BillOfLadingSchema } from "./types";

export const BillOfLadingTemplate: FunctionComponent<
  TemplateProps<BillOfLadingSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as BillOfLadingDocument;

  const {
    // --- Document Identifiers ---
    contractNumber,

    // --- Dates ---
    issueDate,
    consignmentLoadingDate,

    // --- Parties ---
    carrier: {
      name: carrierName,
      addressline: carrierAddress,
      city: carrierCity,
      country: carrierCountry,
      email: carrierEmail,
    } = {},
    consignor: {
      name: consignorName,
      addressline: consignorAddress,
      city: consignorCity,
      country: consignorCountry,
      email: consignorEmail,
    } = {},
    freightPayer: {
      name: payerName,
      addressline: payerAddress,
      city: payerCity,
      country: payerCountry,
      email: payerEmail,
    } = {},

    // --- Routing & Contract Details ---
    baseportUnloadingLocation,
    transportContractDocumentConditions,

    // --- Weights & Measures ---
    grossWeight,
    volume,

    // --- Goods Details ---
    goods = [],

    // --- Equipment & Transport Details ---
    container: {
      size: containerSize,
      type: containerType,
    } = {},
    fullOrEmpty,
    transportMeansIdentifier, // Often the Vessel/Voyage
    vehicleRegistrationNumber,
    sealIdentifier,
  } = data;

  // Strict B&W Box Helper
  const DataBox = ({ label, value, className = "", inverted = false, fontMono = false }: { label: string; value?: string | React.ReactNode; className?: string; inverted?: boolean; fontMono?: boolean }) => (
    <div className={`p-3 border-r border-b border-black last:border-r-0 ${inverted ? "bg-black text-white" : "bg-white text-black"} ${className}`}>
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
            <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">
              Bill of Lading
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
              Negotiable Transport Document
            </p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-bold uppercase tracking-widest mb-1">B/L Number</p>
            <p className="text-2xl font-mono font-black tracking-widest border border-black text-black px-3 py-1">
              {contractNumber || "DRAFT"}
            </p>
          </div>
        </div>

        {/* --- Parties Grid (Consignor & Carrier) --- */}
        <div className="grid grid-cols-3 border-b-2 border-black">
          {/* Consignor (Shipper) */}
          <div className="border-r border-black p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-black"></div>
              <h3 className="text-xs font-black uppercase tracking-widest">Shipper / Consignor</h3>
            </div>
            <div className="text-sm font-bold uppercase mb-1">{consignorName}</div>
            <div className="text-xs mb-2 leading-relaxed">
              {consignorAddress}<br />
              {consignorCity}, {consignorCountry}
            </div>
            {consignorEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {consignorEmail}</div>}
          </div>

          {/* Carrier */}
          <div className="p-4 border-r border-black">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 border-2 border-black"></div>
              <h3 className="text-xs font-black uppercase tracking-widest">Carrier</h3>
            </div>
            <div className="text-sm font-bold uppercase mb-1">{carrierName}</div>
            <div className="text-xs mb-2 leading-relaxed">
              {carrierAddress}<br />
              {carrierCity}, {carrierCountry}
            </div>
            {carrierEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {carrierEmail}</div>}
          </div>

          {/* Freight Payer */}
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 border-2 border-black border-dashed"></div>
              <h3 className="text-xs font-black uppercase tracking-widest">Freight Payer</h3>
            </div>
            <div className="text-sm font-bold uppercase mb-1">{payerName || "-"}</div>
            <div className="text-xs mb-2 leading-relaxed">
              {payerAddress && <>{payerAddress}<br /></>}
              {(payerCity || payerCountry) && <>{[payerCity, payerCountry].filter(Boolean).join(", ")}</>}
            </div>
            {payerEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {payerEmail}</div>}
          </div>
        </div>

        {/* --- Routing & Transport Details --- */}
        <div className="grid grid-cols-4 border-b-2 border-black bg-gray-100">
          <DataBox label="Vessel / Voyage (Means)" value={transportMeansIdentifier} className="col-span-2 bg-transparent" />
          <DataBox label="Port of Discharge" value={baseportUnloadingLocation} className="col-span-2 border-r-0 bg-transparent" />
        </div>
        <div className="grid grid-cols-4 border-b-2 border-black">
          <DataBox label="Loading Date" value={consignmentLoadingDate} fontMono />
          <DataBox label="Issue Date" value={issueDate} fontMono />
          <DataBox label="Vehicle Reg No." value={vehicleRegistrationNumber} fontMono />
        </div>

        {/* --- Equipment / Container Info --- */}
        <div className="grid grid-cols-4 border-b-2 border-white bg-black text-white">
           <DataBox label="Container Type" value={`${containerSize || ""} ${containerType || ""}`.trim()} inverted />
           <div className="p-3 border-r border-white">
             <label className="block text-[9px] uppercase font-bold mb-1 tracking-widest text-gray-400">Load Status</label>
             <div className="text-sm font-bold uppercase tracking-widest border border-white px-2 py-0.5 inline-block">
               {fullOrEmpty || "FCL"}
             </div>
           </div>
           <DataBox label="Seal Number" value={sealIdentifier} fontMono inverted className="col-span-2 border-r-0" />
        </div>

        {/* --- Goods / Cargo Table --- */}
        <div className="border-b-2 border-black min-h-[250px] flex flex-col">
          <div className="bg-gray-100 p-2 text-[9px] font-black uppercase tracking-widest border-b border-black">
            Particulars Furnished by Shipper
          </div>
          <table className="w-full text-left table-fixed flex-1">
            <thead className="bg-white text-[9px] font-bold uppercase tracking-widest text-gray-600 border-b border-black">
              <tr>
                <th className="p-3 w-16 text-center border-r border-black">Item</th>
                <th className="p-3 w-7/12 border-r border-black">Description of Goods</th>
                <th className="p-3 w-2/12 text-center border-r border-black">HS Code</th>
                <th className="p-3 w-2/12 text-center">Pkgs</th>
              </tr>
            </thead>
            <tbody className="text-sm font-mono">
              {goods.length > 0 ? goods.map((item, i) => (
                <tr key={i} className="border-b border-gray-200 last:border-0 align-top">
                  <td className="p-4 text-center border-r border-black font-bold text-gray-400">{i + 1}</td>
                  <td className="p-4 border-r border-black whitespace-pre-wrap leading-relaxed uppercase font-sans font-bold text-xs">
                    {item.description}
                  </td>
                  <td className="p-4 text-center border-r border-black text-[10px]">
                    {item.hsCode || "-"}
                  </td>
                  <td className="p-4 text-center font-black text-lg">
                    {item.numberOfPackages}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-400 italic uppercase font-sans text-xs">No goods items declared</td>
                </tr>
              )}
            </tbody>
            {/* Totals Footer */}
            {goods.length > 0 && (
              <tfoot className="bg-gray-100 border-t border-black font-bold">
                <tr>
                  <td colSpan={3} className="p-3 text-right text-[10px] uppercase tracking-widest border-r border-black">Total Packages</td>
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
          <DataBox label="Total Gross Weight" value={grossWeight ? `${grossWeight}` : "N/A"} fontMono />
          <DataBox label="Total Volume" value={volume ? `${volume}` : "N/A"} fontMono className="border-r-0" />
        </div>

        {/* --- Legal Declaration & Conditions --- */}
        <div className="p-4 border-b border-black bg-gray-50 text-[10px] text-justify font-serif leading-relaxed">
          <span className="font-bold uppercase font-sans mr-2">Received:</span>
          by the Carrier from the Shipper in apparent good order and condition (unless otherwise noted herein) the total number or quantity of Containers or other packages or units indicated above. Subject to all the terms and conditions hereof (INCLUDING THE TERMS AND CONDITIONS ON THE REVERSE HEREOF AND THE TERMS AND CONDITIONS OF THE CARRIER'S APPLICABLE TARIFF).
          <div className="mt-2 font-mono text-[9px] uppercase">
            Contract Conditions: {transportContractDocumentConditions || "AS PER CARRIER STANDARD TARIFF"}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};