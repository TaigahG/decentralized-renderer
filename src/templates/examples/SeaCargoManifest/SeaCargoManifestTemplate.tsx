import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { SeaCargoManifest, SeaCargoManifestSchema } from "./types";

// Inline helpers to replace missing imports
const Wrapper: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => <div className="w-full">{children}</div>;
const getDocumentData = (document: any) => document?.credentialSubject || document;

export const SeaCargoManifestTemplate: FunctionComponent<
   TemplateProps<SeaCargoManifestSchema>
> = ({ document }) => {
   const data = getDocumentData(document) as SeaCargoManifest;

   const {
      billOfLadingNumber, // Often references the Master B/L

      // --- Parties ---
      consignee: {
         name: consigneeName,
         addressLine: consigneeAddress,
         city: consigneeCity,
         country: consigneeCountry,
         email: consigneeEmail,
      } = {},
      notifyParty: {
         name: notifyPartyName,
         addressLine: notifyPartyAddress,
         city: notifyPartyCity,
         country: notifyPartyCountry,
         email: notifyPartyEmail,
      } = {},
      consignor: { // Usually the Shipper or NVOCC
         name: consignorName,
         addressLine: consignorAddress,
         city: consignorCity,
         country: consignorCountry,
         email: consignorEmail,
      } = {},

      // --- Locations ---
      placeOfTheDeliveryOfTheGoods: deliveryLocation, // Aliased for cleaner JSX
      originalLoadingLocation,
      baseportUnloadingLocation,

      // --- Weights & Measures ---
      grossWeight,
      grossWeightUnit, // e.g., "KGM"
      transportMeansGrossWeight, // The weight of the container + the goods
      transportMeansGrossWeightUnit,

      // --- Goods Details ---
      goods = [],

      // --- Transport & Equipment ---
      conveyanceReferenceNumber: voyageNumber, // Aliased for context
      transportMeansIdentifier: vesselIdentifier, // Often the IMO Number
      transportEquipmentIdentifier: containerNumber,
      sealIdentifier,
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
                     Cargo Manifest
                  </h1>
                  <div className="inline-block bg-black text-white px-3 py-1">
                     <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                        Customs & Port Declaration
                     </span>
                  </div>
               </div>
               <div className="text-right">
                  <p className="text-[9px] font-bold uppercase tracking-widest mb-1 text-gray-500">Master B/L Reference</p>
                  <p className="text-2xl font-mono font-black tracking-widest border-2 border-black px-3 py-1">
                     {billOfLadingNumber || "DRAFT"}
                  </p>
               </div>
            </div>

            {/* --- Vessel & Voyage Routing --- */}
            <div className="grid grid-cols-4 border-b-2 border-black bg-gray-100">
               <DataBox label="Vessel / IMO Number" value={vesselIdentifier} className="col-span-2" />
               <DataBox label="Voyage Number" value={voyageNumber} fontMono className="col-span-2 border-r-0" />
            </div>
            <div className="grid grid-cols-3 border-b-2 border-black">
               <DataBox label="Port of Loading" value={originalLoadingLocation} />
               <DataBox label="Port of Discharge" value={baseportUnloadingLocation} />
               <DataBox label="Place of Delivery" value={deliveryLocation} className="border-r-0" />
            </div>

            {/* --- Parties Grid --- */}
            <div className="grid grid-cols-3 border-b-2 border-black">
               
               {/* Shipper */}
               <div className="p-4 border-r border-black flex flex-col bg-white">
                  <div className="flex items-center space-x-2 mb-3">
                     <div className="w-3 h-3 bg-black"></div>
                     <h3 className="text-[10px] font-black uppercase tracking-widest">Shipper / Consignor</h3>
                  </div>
                  <div className="text-sm font-bold uppercase mb-1">{consignorName}</div>
                  <div className="text-xs mb-2 leading-relaxed">
                     {consignorAddress}<br/>
                     {consignorCity}, {consignorCountry}
                  </div>
                  {consignorEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {consignorEmail}</div>}
               </div>
               
               {/* Consignee */}
               <div className="p-4 border-r border-black flex flex-col bg-gray-50">
                  <div className="flex items-center space-x-2 mb-3">
                     <div className="w-3 h-3 border-2 border-black"></div>
                     <h3 className="text-[10px] font-black uppercase tracking-widest">Consignee</h3>
                  </div>
                  <div className="text-sm font-bold uppercase mb-1">{consigneeName}</div>
                  <div className="text-xs mb-2 leading-relaxed">
                     {consigneeAddress}<br/>
                     {consigneeCity}, {consigneeCountry}
                  </div>
                  {consigneeEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {consigneeEmail}</div>}
               </div>

               {/* Notify Party */}
               <div className="p-4 flex flex-col bg-white">
                  <div className="flex items-center space-x-2 mb-3">
                     <div className="w-3 h-3 border-2 border-black rounded-full"></div>
                     <h3 className="text-[10px] font-black uppercase tracking-widest">Notify Party</h3>
                  </div>
                  <div className="text-sm font-bold uppercase mb-1">{notifyPartyName || "SAME AS CONSIGNEE"}</div>
                  {notifyPartyAddress && (
                     <div className="text-xs mb-2 leading-relaxed">
                        {notifyPartyAddress}<br/>
                        {notifyPartyCity}, {notifyPartyCountry}
                     </div>
                  )}
                  {notifyPartyEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {notifyPartyEmail}</div>}
               </div>
            </div>

            {/* --- Equipment / Container Info --- */}
            <div className="grid grid-cols-4 border-b-2 border-black bg-black text-white">
               <DataBox label="Container Number" value={containerNumber} fontMono inverted className="col-span-2" />
               <DataBox label="Seal Number" value={sealIdentifier} fontMono inverted className="col-span-2 border-r-0" />
            </div>

            {/* --- Goods Details Table --- */}
            <div className="border-b-2 border-black min-h-[250px] flex flex-col relative">
               {/* Background Watermark */}
               <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
                  <span className="text-[8rem] font-black uppercase text-center leading-none transform -rotate-12 whitespace-nowrap">
                     MANIFEST
                  </span>
               </div>

               <div className="bg-white text-black p-2 text-[9px] font-black uppercase tracking-widest border-b border-black z-10 flex items-center">
                  <span className="bg-black text-white px-2 py-0.5 mr-2">Cargo Summary</span>
                  As declared by Shipper
               </div>
               <table className="w-full text-left table-fixed flex-1 z-10 relative">
                  <thead className="bg-gray-100 text-[9px] font-bold uppercase tracking-widest text-gray-600 border-b border-black">
                     <tr>
                        <th className="p-3 w-1/12 text-center border-r border-black">Item</th>
                        <th className="p-3 w-4/12 border-r border-black">Shipping Marks</th>
                        <th className="p-3 w-7/12">Consignment Summary Description</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm font-mono">
                     {goods.length > 0 ? goods.map((item, i) => (
                        <tr key={i} className="border-b border-gray-200 last:border-0 align-top">
                           <td className="p-3 text-center border-r border-black font-bold text-gray-400">{i + 1}</td>
                           <td className="p-3 border-r border-black whitespace-pre-wrap leading-relaxed font-sans font-bold text-xs">
                              {item.shippingMarks || "NO MARKS"}
                           </td>
                           <td className="p-3 whitespace-pre-wrap leading-relaxed uppercase font-sans font-bold text-xs">
                              {item.consignmentSummaryDescription}
                           </td>
                        </tr>
                     )) : (
                        <tr>
                           <td colSpan={3} className="p-8 text-center text-gray-400 italic uppercase font-sans text-xs">No cargo summaries declared</td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>

            {/* --- Summary Weights --- */}
            <div className="grid grid-cols-2 border-b-2 border-black">
               <DataBox 
                 label="Cargo Gross Weight" 
                 value={grossWeight != null ? `${grossWeight} ${grossWeightUnit}` : "N/A"} 
                 fontMono 
               />
               <DataBox 
                 label="Transport Means (Container + Cargo) Gross Weight" 
                 value={transportMeansGrossWeight != null ? `${transportMeansGrossWeight} ${transportMeansGrossWeightUnit}` : "N/A"} 
                 fontMono 
                 className="border-r-0" 
               />
            </div>
         </div>
      </Wrapper>
   );
};