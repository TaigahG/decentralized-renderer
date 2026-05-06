import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { RailConsignmentNote, RailConsignmentNoteSchema } from "./types";

export const RailConsignmentNoteTemplate: FunctionComponent<
   TemplateProps<RailConsignmentNoteSchema>
> = ({ document }) => {
   const data = getDocumentData(document) as RailConsignmentNote;

   const {
      // --- Parties ---
      consignee: {
         name: consigneeName,
         addressLine: consigneeAddress,
         city: consigneeCity,
         country: consigneeCountry,
         email: consigneeEmail,
      } = {},
      consignor: {
         name: consignorName,
         addressLine: consignorAddress,
         city: consignorCity,
         country: consignorCountry,
         email: consignorEmail,
      } = {},

      // --- Routing ---
      nameOfTheDestinationStation: destinationStation, // Aliased for cleaner JSX

      // --- Goods Details ---
      goods = [],
      dangerousGoods = [],

      // --- Transport & Equipment ---
      transportMeansIdentifier: trainNumber,           // e.g., The locomotive/route ID
      vehicleRegistrationNumber: wagonNumber,          // e.g., The specific railcar/wagon
      transportEquipmentIdentifier: containerNumber,   // e.g., The shipping container on the wagon
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
                  <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">
                     Rail Consignment Note
                  </h1>
                  <div className="inline-block bg-black text-white px-3 py-1">
                     <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                        Non-transferable document
                     </span>
                  </div>
               </div>
            </div>

            {/* --- Parties Grid --- */}
            <div className="grid grid-cols-2 border-b-2 border-black">
               
               {/* Consignor (Sender) */}
               <div className="p-4 border-r border-black flex flex-col bg-white">
                  <div className="flex items-center space-x-2 mb-3">
                     <div className="w-3 h-3 bg-black"></div>
                     <h3 className="text-[10px] font-black uppercase tracking-widest">Consignor / Sender</h3>
                  </div>
                  <div className="text-lg font-black uppercase mb-1 tracking-wider">{consignorName}</div>
                  <div className="text-xs mb-2 leading-relaxed">
                     {consignorAddress}<br/>
                     {consignorCity}, {consignorCountry}
                  </div>
                  {consignorEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {consignorEmail}</div>}
               </div>
               
               {/* Consignee (Receiver) */}
               <div className="p-4 flex flex-col bg-gray-50">
                  <div className="flex items-center space-x-2 mb-3">
                     <div className="w-3 h-3 border-2 border-black"></div>
                     <h3 className="text-[10px] font-black uppercase tracking-widest">Consignee</h3>
                  </div>
                  <div className="text-lg font-black uppercase mb-1 tracking-wider">{consigneeName}</div>
                  <div className="text-xs mb-2 leading-relaxed">
                     {consigneeAddress}<br/>
                     {consigneeCity}, {consigneeCountry}
                  </div>
                  {consigneeEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {consigneeEmail}</div>}
               </div>
            </div>

            {/* --- Routing & Train Information --- */}
            <div className="grid grid-cols-4 border-b-2 border-black bg-gray-100">
               <DataBox label="Destination Station (10)" value={destinationStation} className="col-span-2" />
               <DataBox label="Train Number" value={trainNumber} fontMono className="col-span-2 border-r-0" />
            </div>

            {/* --- Equipment --- */}
            <div className="grid grid-cols-2 border-b-2 border-black bg-black text-white">
               <DataBox label="Wagon Number (18)" value={wagonNumber} fontMono inverted />
               <DataBox label="Container Number / UTI" value={containerNumber} fontMono inverted className="border-r-0" />
            </div>

            {/* --- Goods Details Table --- */}
            <div className="border-b-2 border-black min-h-[250px] flex flex-col relative">
               {/* Background Watermark */}
               <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
                  <span className="text-[10rem] font-black uppercase text-center leading-none transform -rotate-12 whitespace-nowrap">
                     RAIL FREIGHT
                  </span>
               </div>

               <table className="w-full text-left table-fixed flex-1 z-10 relative">
                  <thead className="bg-gray-100 text-[9px] font-bold uppercase tracking-widest text-gray-600 border-b border-black">
                     <tr>
                        <th className="p-3 w-1/12 text-center border-r border-black">Item</th>
                        <th className="p-3 w-8/12 border-r border-black">Description of Goods</th>
                        <th className="p-3 w-3/12 text-center">Number of Packages</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm font-mono">
                     {goods.length > 0 ? goods.map((item, i) => (
                        <tr key={i} className="border-b border-gray-200 last:border-0 align-top">
                           <td className="p-3 text-center border-r border-black font-bold text-gray-400">{i + 1}</td>
                           <td className="p-3 border-r border-black whitespace-pre-wrap leading-relaxed uppercase font-sans font-bold text-xs">
                              {item.description || "CONSOLIDATED CARGO"}
                           </td>
                           <td className="p-3 text-center font-black text-base">
                              {item.numberOfPackages}
                           </td>
                        </tr>
                     )) : (
                        <tr>
                           <td colSpan={3} className="p-8 text-center text-gray-400 italic uppercase font-sans text-xs">No standard goods declared</td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>

            {/* --- Dangerous Goods Section (RID) --- */}
            {dangerousGoods.length > 0 && (
               <div className="border-b-2 border-black flex flex-col relative bg-gray-50">
                  <div className="bg-black text-white p-2 text-[9px] font-black uppercase tracking-widest border-b border-black z-10 flex items-center">
                     <span className="bg-white text-black px-2 py-0.5 mr-2">RID / HAZMAT</span>
                     Dangerous Goods Declaration
                  </div>
                  <table className="w-full text-left table-fixed z-10 relative">
                     <thead className="bg-white text-[9px] font-bold uppercase tracking-widest text-gray-600 border-b border-black">
                        <tr>
                           <th className="p-3 w-1/12 text-center border-r border-black">Item</th>
                           <th className="p-3 w-6/12 border-r border-black">Hazard Description</th>
                           <th className="p-3 w-2/12 text-center border-r border-black">Class (RID)</th>
                           <th className="p-3 w-3/12 text-center">Packages</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm font-mono">
                        {dangerousGoods.map((item, i) => (
                           <tr key={`dg-${i}`} className="border-b border-gray-200 last:border-0 align-top">
                              <td className="p-3 text-center border-r border-black font-bold text-gray-400">{i + 1}</td>
                              <td className="p-3 border-r border-black whitespace-pre-wrap leading-relaxed uppercase font-sans font-black text-xs">
                                 {item.description}
                              </td>
                              <td className="p-3 border-r border-black text-center font-black text-sm">
                                 <span className="border border-black px-2 py-0.5 inline-block">{item.classNumber || "-"}</span>
                              </td>
                              <td className="p-3 text-center font-black text-base">
                                 {item.numberOfPackages}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      </Wrapper>
   );
};