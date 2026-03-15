import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { WarehouseReceipt, WarehouseReceiptSchema } from "./types";

export const WarehouseReceiptTemplate: FunctionComponent<
  TemplateProps<WarehouseReceiptSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as WarehouseReceipt;

  const {
    // --- Document Identifiers ---
    issueDate,

    // --- Parties ---
    warehouseDepositor: {
      name: depositorName,
      addressline: depositorAddress,
      city: depositorCity,
      country: depositorCountry,
      email: depositorEmail,
    } = {},
    warehouseKeeper: {
      name: keeperName,
      addressline: keeperAddress,
      city: keeperCity,
      country: keeperCountry,
      email: keeperEmail,
    } = {},

    // --- Location & Weights ---
    warehouseAddress,
    grossWeight,
    transportMeanGrossWeight,

    // --- Goods Details ---
    goods = [],
  } = data;

  // Strict B&W Box Helper
  const DataBox = ({ label, value, className = "", inverted = false, fontMono = false }: { label: string; value?: string | React.ReactNode; className?: string; inverted?: boolean; fontMono?: boolean }) => (
    <div className={`p-4 border-r border-b border-black last:border-r-0 ${inverted ? "bg-black text-white" : "bg-white text-black"} ${className}`}>
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
              Warehouse Receipt
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
              Blockchain-Verified Trade Document
            </p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-bold uppercase tracking-widest mb-1">Date of Issue</p>
            <p className="text-2xl font-mono font-black tracking-widest bg-black text-white px-3 py-1">
              {issueDate}
            </p>
          </div>
        </div>


        {/* --- Parties Section --- */}
        <div className="grid grid-cols-2 border-b-2 border-black">
          {/* Depositor */}
          <div className="border-r border-black p-4">
             <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-black"></div>
                <h3 className="text-xs font-black uppercase tracking-widest">Depositor (Owner of Goods)</h3>
             </div>
             <div className="text-lg font-bold uppercase mb-1">{depositorName}</div>
             <div className="text-sm mb-2 leading-relaxed">
               {depositorAddress}<br/>
               {depositorCity}, {depositorCountry}
             </div>
             {depositorEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {depositorEmail}</div>}
          </div>

          {/* Warehouse Keeper */}
          <div className="p-4 bg-gray-50">
             <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 border-2 border-black"></div>
                <h3 className="text-xs font-black uppercase tracking-widest">Warehouse Keeper (Facility Operator)</h3>
             </div>
             <div className="text-lg font-bold uppercase mb-1">{keeperName}</div>
             <div className="text-sm mb-2 leading-relaxed">
               {keeperAddress}<br/>
               {keeperCity}, {keeperCountry}
             </div>
             {keeperEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {keeperEmail}</div>}
          </div>
        </div>

        {/* --- Location & Specs --- */}
        <div className="grid grid-cols-4 border-b-2 border-black">
           <DataBox 
             label="Storage Location (Warehouse Address)" 
             value={warehouseAddress || `${keeperAddress}, ${keeperCity}, ${keeperCountry}`} 
             className="col-span-2" 
           />
           <DataBox 
             label="Gross Weight" 
             value={grossWeight ? `${grossWeight} KGM` : "N/A"} 
             fontMono 
           />
           <DataBox 
             label="Transport Mean Gross Weight" 
             value={transportMeanGrossWeight ? `${transportMeanGrossWeight} KGM` : "N/A"} 
             fontMono 
             className="border-r-0" 
           />
        </div>

        {/* --- Goods Table --- */}
        <div className="border-b-2 border-black min-h-[300px] flex flex-col">
          <div className="bg-black text-white p-2 text-[9px] font-black uppercase tracking-widest">
            Inventory / Particulars of Goods
          </div>
          <table className="w-full text-left table-fixed flex-1">
            <thead className="bg-white text-[9px] font-bold uppercase tracking-widest text-gray-600 border-b border-black">
              <tr>
                <th className="p-3 w-16 text-center border-r border-black">Item</th>
                <th className="p-3 w-3/4 border-r border-black">Description of Goods</th>
                <th className="p-3 w-1/4 text-center">Number of Packages</th>
              </tr>
            </thead>
            <tbody className="text-sm font-mono">
              {goods.length > 0 ? goods.map((item, i) => (
                <tr key={i} className="border-b border-gray-200 last:border-0 align-top">
                  <td className="p-4 text-center border-r border-black font-bold text-gray-400">{i + 1}</td>
                  <td className="p-4 border-r border-black whitespace-pre-wrap leading-relaxed uppercase font-sans font-bold text-xs">
                    {item.description}
                  </td>
                  <td className="p-4 text-center font-black text-lg">
                    {item.numberOfPackages}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={3} className="p-8 text-center text-gray-400 italic uppercase font-sans text-xs">No goods items declared</td>
                </tr>
              )}
            </tbody>
            {/* Totals Footer */}
            {goods.length > 0 && (
              <tfoot className="bg-gray-100 border-t border-black font-bold">
                <tr>
                  <td colSpan={2} className="p-3 text-right text-[10px] uppercase tracking-widest border-r border-black">Total Packages Deposited</td>
                  <td className="p-3 text-center text-lg font-black">
                    {goods.reduce((acc, curr) => acc + (curr.numberOfPackages || 0), 0)}
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>

        {/* --- Legal Declaration --- */}
        <div className="p-4 border-b border-black bg-gray-50 text-[10px] text-justify font-serif leading-relaxed">
           <span className="font-bold uppercase font-sans mr-2">Declaration:</span>
           Received in apparent good order and condition, except as noted herein, the goods or packages described above to be stored subject to all the terms and conditions contained herein and on the reverse hereof, such property to be delivered to the Depositor upon the payment of all storage, handling and other charges.
        </div>
      </div>
    </Wrapper>
  );
};