import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { AirCargoManifest, AirCargoManifestSchema } from "./types";

export const AirCargoManifestTemplate: FunctionComponent<
   TemplateProps<AirCargoManifestSchema>
> = ({ document }) => {
   const data = getDocumentData(document) as AirCargoManifest;

   const {
      // --- Parties ---
      carrier: {
         name: carrierName,
         addressLine: carrierAddress,
         city: carrierCity,
         country: carrierCountry,
         email: carrierEmail,
      } = {},
      transportEquipmentOperator: {
         name: operatorName,
         addressLine: operatorAddress,
         city: operatorCity,
         country: operatorCountry,
         email: operatorEmail,
      } = {},

      // --- Locations & Routing ---
      originalLoadingLocation,
      placeOrDeparture,
      arrivalLocation, // e.g., Destination Airport (JFK, LHR)

      // --- Goods Details ---
      goods = [],

      // --- Transport Details ---
      conveyanceReferenceNumber: flightNumber, // Aliased for standard air freight context
      vehicleRegistrationNumber: tailNumber,   // Aliased to the aircraft's registration
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
                     Air Cargo Manifest
                  </h1>
                  <div className="inline-block bg-black text-white px-3 py-1">
                     <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                        Flight & Customs Declaration
                     </span>
                  </div>
               </div>
               <div className="text-right">
                  <p className="text-[9px] font-bold uppercase tracking-widest mb-1 text-gray-500">Flight Number</p>
                  <p className="text-2xl font-mono font-black tracking-widest border-2 border-black px-3 py-1">
                     {flightNumber || "PENDING"}
                  </p>
               </div>
            </div>

            {/* --- Flight & Aircraft Routing --- */}
            <div className="grid grid-cols-4 border-b-2 border-black bg-gray-100">
               <DataBox label="Flight / Voyage Number" value={flightNumber} fontMono className="col-span-2" />
               <DataBox label="Aircraft Registration (Tail No.)" value={tailNumber} fontMono className="col-span-2 border-r-0" />
            </div>
            <div className="grid grid-cols-3 border-b-2 border-black">
               <DataBox label="Original Loading Location" value={originalLoadingLocation} />
               <DataBox label="Airport of Departure" value={placeOrDeparture} />
               <DataBox label="Airport of Destination" value={arrivalLocation} className="border-r-0" />
            </div>

            {/* --- Parties Grid --- */}
            <div className="grid grid-cols-2 border-b-2 border-black">
               
               {/* Carrier (Airline) */}
               <div className="p-4 border-r border-black flex flex-col bg-white">
                  <div className="flex items-center space-x-2 mb-3">
                     <div className="w-3 h-3 bg-black"></div>
                     <h3 className="text-[10px] font-black uppercase tracking-widest">Operating Carrier (Airline)</h3>
                  </div>
                  <div className="text-lg font-black uppercase mb-1 tracking-wider">{carrierName}</div>
                  <div className="text-xs mb-2 leading-relaxed">
                     {carrierAddress}<br/>
                     {carrierCity}, {carrierCountry}
                  </div>
                  {carrierEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {carrierEmail}</div>}
               </div>
               
               {/* Transport Equipment Operator (Ground Handler) */}
               <div className="p-4 flex flex-col bg-gray-50">
                  <div className="flex items-center space-x-2 mb-3">
                     <div className="w-3 h-3 border-2 border-black"></div>
                     <h3 className="text-[10px] font-black uppercase tracking-widest">Transport Equipment Operator / Handling Agent</h3>
                  </div>
                  <div className="text-sm font-bold uppercase mb-1">{operatorName || "SAME AS CARRIER"}</div>
                  {operatorAddress && (
                     <div className="text-xs mb-2 leading-relaxed">
                        {operatorAddress}<br/>
                        {operatorCity}, {operatorCountry}
                     </div>
                  )}
                  {operatorEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {operatorEmail}</div>}
               </div>
            </div>

            {/* --- Goods Details Table --- */}
            <div className="border-b-2 border-black min-h-[300px] flex flex-col relative">
               {/* Background Watermark */}
               <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
                  <span className="text-[8rem] font-black uppercase text-center leading-none transform -rotate-12 whitespace-nowrap">
                     MANIFEST
                  </span>
               </div>

               <div className="bg-white text-black p-2 text-[9px] font-black uppercase tracking-widest border-b border-black z-10 flex items-center">
                  <span className="bg-black text-white px-2 py-0.5 mr-2">Flight Cargo Summary</span>
                  As declared for Customs and Security
               </div>
               <table className="w-full text-left table-fixed flex-1 z-10 relative">
                  <thead className="bg-gray-100 text-[9px] font-bold uppercase tracking-widest text-gray-600 border-b border-black">
                     <tr>
                        <th className="p-3 w-1/12 text-center border-r border-black">Item</th>
                        <th className="p-3 w-4/12 border-r border-black">Description of Goods</th>
                        <th className="p-3 w-7/12">Consignment Summary</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm font-mono">
                     {goods.length > 0 ? goods.map((item, i) => (
                        <tr key={i} className="border-b border-gray-200 last:border-0 align-top">
                           <td className="p-3 text-center border-r border-black font-bold text-gray-400">{i + 1}</td>
                           <td className="p-3 border-r border-black whitespace-pre-wrap leading-relaxed font-sans font-bold text-xs uppercase">
                              {item.description || "CONSOLIDATED CARGO"}
                           </td>
                           <td className="p-3 whitespace-pre-wrap leading-relaxed uppercase font-sans font-bold text-xs">
                              {item.consignmentSummaryDescription || "-"}
                           </td>
                        </tr>
                     )) : (
                        <tr>
                           <td colSpan={3} className="p-8 text-center text-gray-400 italic uppercase font-sans text-xs">No cargo summaries declared on this flight</td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>
         </div>
      </Wrapper>
   );
};