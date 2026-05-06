import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { AirWaybill, AirWaybillSchema } from "./types";

export const AirWaybillTemplate: FunctionComponent<
   TemplateProps<AirWaybillSchema>
> = ({ document }) => {
   const data = getDocumentData(document) as AirWaybill;

   const {
      houseWaybillDocumentIdentifier: hawbNumber,
      billOfLadingNumber: mawbNumber,

      // --- Parties ---
      carrier: {
         name: carrierName,
         addressLine: carrierAddress,
         city: carrierCity,
         country: carrierCountry,
         email: carrierEmail,
      } = {},
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
      transportEquipmentOperator: {
         name: operatorName,
         addressLine: operatorAddress,
         city: operatorCity,
         country: operatorCountry,
         email: operatorEmail,
      } = {},
      consignor: { // The Shipper
         name: consignorName,
         addressLine: consignorAddress,
         city: consignorCity,
         country: consignorCountry,
         email: consignorEmail,
      } = {},

      // --- Locations & Routing ---
      originalLoadingLocation,
      placeOrDeparture,
      arrivalLocation,

      // --- Contract Details ---
      transportContractDocumentConditions,

      // --- Weights & Measures ---
      grossWeight,
      grossWeightUnit,
      volume,
      volumeUnit,

      // --- Goods Details ---
      goods = [],

      // --- Transport Details ---
      conveyanceReferenceNumber: flightNumber,
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
                     Air Waybill
                  </h1>
                  <div className="inline-block bg-black text-white px-3 py-1">
                     <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                        Not Negotiable
                     </span>
                  </div>
               </div>
               <div className="text-right">
                  {mawbNumber && (
                     <div className="mb-2">
                        <p className="text-[9px] font-bold uppercase tracking-widest mb-1 text-gray-500">Master Air Waybill (MAWB)</p>
                        <p className="text-2xl font-mono font-black tracking-widest border-2 border-black px-3 py-1">
                           {mawbNumber}
                        </p>
                     </div>
                  )}
                  {hawbNumber && (
                     <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest mb-1 text-gray-500">House Air Waybill (HAWB)</p>
                        <p className="text-lg font-mono font-bold tracking-widest border border-black bg-gray-100 px-2 py-1">
                           {hawbNumber}
                        </p>
                     </div>
                  )}
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
                        <h3 className="text-xs font-black uppercase tracking-widest">Shipper / Consignor</h3>
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
                        <h3 className="text-xs font-black uppercase tracking-widest">Consignee</h3>
                     </div>
                     <div className="text-sm font-bold uppercase mb-1">{consigneeName}</div>
                     <div className="text-xs mb-2 leading-relaxed">
                        {consigneeAddress}<br/>
                        {consigneeCity}, {consigneeCountry}
                     </div>
                     {consigneeEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {consigneeEmail}</div>}
                  </div>
               </div>

               {/* Right Column: Carrier & Forwarder */}
               <div className="flex flex-col">
                  {/* Carrier */}
                  <div className="p-4 border-b border-black bg-black text-white flex-1">
                     <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-white"></div>
                        <h3 className="text-xs font-black uppercase tracking-widest text-gray-300">Issuing Carrier</h3>
                     </div>
                     <div className="text-lg font-black uppercase mb-1 tracking-wider">{carrierName}</div>
                     <div className="text-xs mb-2 leading-relaxed text-gray-300">
                        {carrierAddress}<br/>
                        {carrierCity}, {carrierCountry}
                     </div>
                     {carrierEmail && <div className="text-[10px] font-mono text-gray-400 mt-2">Email: {carrierEmail}</div>}
                  </div>

                  {/* Freight Forwarder / Agent */}
                  <div className="p-4 border-b border-black bg-gray-50 flex-1">
                     <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 border border-black rounded-full bg-gray-300"></div>
                        <h3 className="text-xs font-black uppercase tracking-widest">Issuing Carrier's Agent (Forwarder)</h3>
                     </div>
                     <div className="text-sm font-bold uppercase mb-1">{forwarderName || "N/A"}</div>
                     {forwarderAddress && (
                        <div className="text-xs mb-2 leading-relaxed">
                           {forwarderAddress}<br/>
                           {forwarderCity}, {forwarderCountry}
                        </div>
                     )}
                     {forwarderEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {forwarderEmail}</div>}
                  </div>

                  {/* Transport Equipment Operator */}
                  <div className="p-4">
                     <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-black transform rotate-45"></div>
                        <h3 className="text-xs font-black uppercase tracking-widest">Transport Equipment Operator</h3>
                     </div>
                     <div className="text-sm font-bold uppercase mb-1">{operatorName || "N/A"}</div>
                     {operatorAddress && (
                        <div className="text-xs mb-2 leading-relaxed">
                           {operatorAddress}<br/>
                           {operatorCity}, {operatorCountry}
                        </div>
                     )}
                     {operatorEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {operatorEmail}</div>}
                  </div>
               </div>
            </div>

            {/* --- Routing & Flight Details --- */}
            <div className="grid grid-cols-3 border-b-2 border-black bg-gray-100">
               <DataBox label="Airport of Departure" value={placeOrDeparture || originalLoadingLocation} />
               <DataBox label="Flight Number" value={flightNumber} fontMono />
               <DataBox label="Airport of Destination" value={arrivalLocation} className="border-r-0" />
            </div>

            {/* --- Summary Weights & Dimensions --- */}
            <div className="grid grid-cols-3 border-b-2 border-black">
               <DataBox 
                 label="Total Pieces" 
                 value={goods.reduce((acc, curr) => acc + (curr.numberOfPackages || 0), 0).toString()} 
                 fontMono 
               />
               <DataBox 
                 label="Gross Weight" 
                 value={grossWeight != null ? `${grossWeight} ${grossWeightUnit}` : "N/A"} 
                 fontMono 
               />
               <DataBox 
                 label="Volume" 
                 value={volume != null ? `${volume} ${volumeUnit}` : "N/A"} 
                 fontMono 
                 className="border-r-0" 
               />
            </div>

            {/* --- Goods Details Table --- */}
            <div className="border-b-2 border-black min-h-[250px] flex flex-col relative">
               {/* Background Watermark */}
               <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
                  <span className="text-[10rem] font-black uppercase text-center leading-none transform -rotate-12 whitespace-nowrap">
                     AIR FREIGHT
                  </span>
               </div>

               <div className="bg-black text-white p-2 text-[9px] font-black uppercase tracking-widest border-b border-black z-10">
                  Nature and Quantity of Goods (incl. Dimensions or Volume)
               </div>
               <table className="w-full text-left table-fixed flex-1 z-10 relative">
                  <thead className="bg-white text-[9px] font-bold uppercase tracking-widest text-gray-600 border-b border-black">
                     <tr>
                        <th className="p-3 w-2/12 text-center border-r border-black">No. of Pieces</th>
                        <th className="p-3 w-8/12 border-r border-black">Description of Goods / Consolidation Summary</th>
                        <th className="p-3 w-2/12 text-center">HS Code</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm font-mono">
                     {goods.length > 0 ? goods.map((item, i) => (
                        <tr key={i} className="border-b border-gray-200 last:border-0 align-top">
                           <td className="p-3 text-center border-r border-black font-black text-base">
                              {item.numberOfPackages}
                           </td>
                           <td className="p-3 border-r border-black whitespace-pre-wrap leading-relaxed uppercase font-sans font-bold text-xs">
                              {item.description}
                              {item.consignmentSummaryDescription && (
                                 <div className="text-[10px] text-gray-500 italic mt-1 font-mono">
                                    {item.consignmentSummaryDescription}
                                 </div>
                              )}
                           </td>
                           <td className="p-3 text-center text-[10px] uppercase font-sans font-bold text-gray-600">
                              {item.hsCode || "-"}
                           </td>
                        </tr>
                     )) : (
                        <tr>
                           <td colSpan={3} className="p-8 text-center text-gray-400 italic uppercase font-sans text-xs">No goods particulars declared</td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>

            {/* --- Legal Declaration (IATA Standard) --- */}
            <div className="p-5 border-b border-black bg-gray-50 text-[10px] text-justify font-serif leading-relaxed">
               <span className="font-bold uppercase font-sans mr-2">Notice concerning carrier's limitation of liability:</span>
               If the carriage involves an ultimate destination or stop in a country other than the country of departure, the Warsaw Convention or the Montreal Convention may be applicable and the Convention governs and in most cases limits the liability of carriers in respect of loss of, damage or delay to cargo.
               <div className="mt-2 font-mono text-[9px] uppercase text-gray-600">
                  Contract Conditions: {transportContractDocumentConditions}
               </div>
            </div>
         </div>
      </Wrapper>
   );
};