import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { ATACarnet, ATACarnetSchema } from "./types";

export const ATACarnetTemplate: FunctionComponent<
  TemplateProps<ATACarnetSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as ATACarnet;

  const {
    // --- Header Information ---
    carnetNumber,
    issueDate,
    validUntil,
    intendedUse,

    // --- Parties ---
    issuingAssociation: {
      name: associationName,
      associationCode,
      address: associationAddress,
      countryCode: associationCountry,
    } = {},
    holder: {
      name: holderName,
      address: holderAddress,
      city: holderCity,
      countryCode: holderCountry,
    } = {},

    // --- Authorized Representatives (Box B) ---
    representedBy = [],

    // --- The Inventory (General List) ---
    generalList = [],

    // --- Transaction History (Vouchers) ---
    voucherRecords = [],
  } = data;

  // Professional box helper
  const InfoBox = ({ label, value, className = "", highlight = false }: { label: string; value?: string | React.ReactNode; className?: string; highlight?: boolean }) => (
    <div className={`border border-gray-300 p-3 min-h-[85px] ${highlight ? "bg-gray-50" : ""} ${className}`}>
      <label className="block text-[9px] uppercase font-black text-gray-400 mb-2 tracking-widest leading-none">{label}</label>
      <div className="text-sm font-bold uppercase text-gray-800 leading-tight whitespace-pre-line">{value || "-"}</div>
    </div>
  );

  // Helper for Voucher Colors
  const getVoucherColor = (color?: string) => {
    switch(color?.toLowerCase()) {
      case 'yellow': return 'bg-yellow-50 border-yellow-200 text-yellow-900';
      case 'white': return 'bg-gray-50 border-gray-200 text-gray-900';
      case 'blue': return 'bg-blue-50 border-blue-200 text-blue-900';
      default: return 'bg-gray-50 border-gray-200 text-gray-900';
    }
  };

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-gray-900 border border-gray-200 shadow-2xl my-10 relative">
        
        {/* --- Header Section (Green for ATA Carnet) --- */}
        <div className="flex justify-between items-start border-b-4 border-green-800 pb-6 mb-0">
          <div className="flex-1">
            <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-1 text-green-900">
              ATA Carnet
            </h1>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">
              Admission Temporaire / Temporary Admission
            </p>
            <div className="inline-block bg-green-800 text-white px-3 py-1">
               <span className="text-[10px] font-black uppercase tracking-widest">International Guarantee Chain</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] uppercase text-gray-400 font-bold mb-1 tracking-widest">Carnet Number</p>
            <p className="text-2xl font-mono font-black text-gray-900">{carnetNumber || "PENDING"}</p>
            <div className="mt-2 flex gap-2 justify-end">
               <div className="text-[10px] font-bold uppercase text-gray-500 border border-gray-200 px-2 py-1">
                  Issued: {issueDate}
               </div>
               <div className="text-[10px] font-black uppercase text-red-600 border border-red-200 bg-red-50 px-2 py-1">
                  Valid Until: {validUntil}
               </div>
            </div>
          </div>
        </div>

        {/* --- Parties Grid --- */}
        <div className="grid grid-cols-2">
          <InfoBox 
            label="Certificate Holder" 
            value={`${holderName}\n${holderAddress}\n${holderCity}, ${holderCountry}`} 
            className="border-t-0 border-l-0"
          />
          <InfoBox 
            label="Issuing Association" 
            value={
              <div>
                <div>{associationName}</div>
                <div className="text-[10px] text-gray-500 font-medium">{associationAddress}, {associationCountry}</div>
                <div className="mt-1 text-[10px] font-mono font-bold text-green-700">Code: {associationCode}</div>
              </div>
            }
            className="border-t-0 border-r-0 border-l-0"
          />
        </div>

        {/* --- Intended Use & Representatives (Box B) --- */}
        <div className="grid grid-cols-3 border-y border-gray-300">
           <InfoBox 
             label="Intended Use of Goods" 
             value={intendedUse} 
             className="border-t-0 border-b-0 border-l-0 bg-gray-50" 
           />
           <InfoBox 
             label="Authorized Representatives (Box B)" 
             value={
               representedBy.length > 0 ? (
                 <ul className="list-disc list-inside">
                   {representedBy.map((rep, i) => (
                     <li key={i} className="text-xs truncate">{rep.name}</li>
                   ))}
                 </ul>
               ) : "Any authorized representative"
             }
             className="border-t-0 border-b-0 border-r-0 border-l-0 col-span-2" 
           />
        </div>

        {/* --- General List (The Inventory) --- */}
        <div className="border-x border-b border-gray-300 mt-0">
          <div className="bg-green-900 text-white p-2 text-[10px] font-black uppercase tracking-widest border-b border-green-800">
            General List of Goods
          </div>
          <table className="w-full text-left table-fixed border-collapse">
            <thead className="bg-gray-100 text-[9px] font-black uppercase tracking-widest text-gray-500 border-b border-gray-300">
              <tr>
                <th className="p-3 w-12 text-center border-r border-gray-300">Item</th>
                <th className="p-3 w-5/12 border-r border-gray-300">Description / Marks / Serial No.</th>
                <th className="p-3 w-1/12 text-center border-r border-gray-300">Qty</th>
                <th className="p-3 w-2/12 text-center border-r border-gray-300">Weight</th>
                <th className="p-3 w-2/12 text-right border-r border-gray-300">Value</th>
                <th className="p-3 w-1/12 text-center">Origin</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {generalList.length > 0 ? generalList.map((item, i) => (
                <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-green-50 transition-colors">
                  <td className="p-3 text-center font-mono font-bold text-gray-400 border-r border-gray-200">{item.itemNumber}</td>
                  <td className="p-3 border-r border-gray-200">
                    <div className="font-bold text-gray-900">{item.tradeDescription}</div>
                    {item.serialNumber && (
                      <div className="text-[10px] font-mono text-gray-500 mt-1">S/N: {item.serialNumber}</div>
                    )}
                    {item.identificationMarks && item.identificationMarks.length > 0 && (
                      <div className="text-[9px] text-gray-400 italic mt-0.5">Marks: {item.identificationMarks.join(", ")}</div>
                    )}
                  </td>
                  <td className="p-3 text-center border-r border-gray-200 font-bold">{item.numberOfPieces}</td>
                  <td className="p-3 text-center border-r border-gray-200">
                     {item.weight?.value} <span className="text-[9px] text-gray-400">{item.weight?.unit}</span>
                  </td>
                  <td className="p-3 text-right border-r border-gray-200 font-mono">
                     {item.value?.amount?.toLocaleString()} <span className="text-[9px] text-gray-400">{item.value?.currencyCode}</span>
                  </td>
                  <td className="p-3 text-center font-bold text-gray-600">{item.countryOfOrigin}</td>
                </tr>
              )) : (
                <tr><td colSpan={6} className="p-8 text-center text-gray-300 italic uppercase">No items declared</td></tr>
              )}
            </tbody>
            {generalList.length > 0 && (
              <tfoot className="bg-gray-50 text-[10px] font-bold uppercase border-t border-gray-300">
                <tr>
                   <td colSpan={2} className="p-3 text-right">Total</td>
                   <td className="p-3 text-center border-l border-gray-200">{generalList.reduce((acc, curr) => acc + (curr.numberOfPieces || 0), 0)}</td>
                   <td className="p-3 border-l border-gray-200"></td>
                   <td className="p-3 text-right border-l border-gray-200">
                      {generalList[0]?.value?.currencyCode} {generalList.reduce((acc, curr) => acc + (curr.value?.amount || 0), 0).toLocaleString()}
                   </td>
                   <td></td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>

        {/* --- Transaction History (Digital Counterfoils) --- */}
        <div className="mt-8">
           <h2 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-4 flex items-center">
             <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
             Transaction History (Digital Counterfoils)
           </h2>
           <div className="space-y-3">
             {voucherRecords.length > 0 ? voucherRecords.map((voucher, i) => (
               <div key={i} className={`p-4 border rounded-sm flex justify-between items-center ${getVoucherColor(voucher.voucherColor)}`}>
                  <div>
                     <div className="flex items-center space-x-2">
                        <span className="font-black uppercase tracking-wider">{voucher.operationType}</span>
                        <span className="text-[9px] bg-white bg-opacity-50 px-2 py-0.5 rounded border border-black border-opacity-10 font-bold">
                           {voucher.voucherType}
                        </span>
                     </div>
                     <div className="text-[10px] mt-1 opacity-80 font-mono">
                        Voucher No: {voucher.voucherNumber} | State: {voucher.state}
                     </div>
                  </div>
                  <div className="text-right">
                     <div className="text-xs font-bold uppercase">{voucher.customsOffice}, {voucher.countryCode}</div>
                     <div className="text-[10px] font-mono mt-1">{voucher.dateOfOperation}</div>
                     {voucher.customsOfficerSignature && (
                       <div className="text-[9px] italic opacity-60 mt-1">Signed: {voucher.customsOfficerSignature}</div>
                     )}
                  </div>
               </div>
             )) : (
               <div className="p-6 border border-dashed border-gray-300 text-center text-[10px] text-gray-400 uppercase italic">
                 No border crossings recorded yet
               </div>
             )}
           </div>
        </div>

        {/* --- Footer & Verification --- */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-[9px] font-bold text-gray-400 uppercase tracking-widest">
          <div>WCO / ICC ATA Carnet Standard</div>
          <div className="flex items-center space-x-4">
             <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600">Active Credential</span>
             </div>
             <div className="flex items-center space-x-2">
               <span>Powered by</span>
               <span className="text-[11px] font-black text-blue-900 tracking-tighter uppercase">Chaindox</span>
             </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}