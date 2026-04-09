import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { SeaWaybill, SeaWaybillSchema } from "./types";

export const SeaWaybillTemplate: FunctionComponent<
   TemplateProps<SeaWaybillSchema>
> = ({ document }) => {
   const data = getDocumentData(document) as SeaWaybill;

   const {
      // --- Document Identifiers ---
      billOfLadingNumber,
      freightForwarderReferenceNumber,

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
      notifyParty: {
         name: notifyPartyName,
         addressLine: notifyPartyAddress,
         city: notifyPartyCity,
         country: notifyPartyCountry,
         email: notifyPartyEmail,
      } = {},
      consignor: { // The Shipper
         name: consignorName,
         addressLine: consignorAddress,
         city: consignorCity,
         country: consignorCountry,
         email: consignorEmail,
      } = {},

      // --- Routing & Locations ---
      placeOfTheDeliveryByCarrier: {
         name: deliveryLocationName,
         address: deliveryLocationAddress, 
      } = {},
      originalLoadingLocation,
      paymentLocation,
      baseportUnloadingLocation,

      // --- Weights & Measures ---
      grossWeight,
      volume,

      // --- Goods Details ---
      goods = [],

      // --- Transport & Equipment ---
      modeOfTransport,
      containerSizeAndTypeCode, 
      fullOrEmptyContainer,
      transportMeansIdentifier,
      transportEquipmentIdentifier,
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
         <div className="max-w-4xl mx-auto bg-white font-sans text-black border-2 border-black my-10  relative overflow-hidden">
            
            {/* --- Header Section --- */}
            <div className="flex justify-between items-start border-b-4 border-black p-6 mb-0">
               <div className="flex-1">
                  <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">
                     Sea Waybill
                  </h1>
                  <div className="inline-block bg-black text-white px-3 py-1">
                     <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                        Non-Negotiable Transport Document
                     </span>
                  </div>
               </div>
               <div className="text-right">
                  <p className="text-[9px] font-bold uppercase tracking-widest mb-1">Bill Of Lading Number</p>
                  <p className="text-2xl font-mono font-black tracking-widest border-2 border-black px-3 py-1">
                     {billOfLadingNumber || "DRAFT"}
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
                  <div className="p-4 border-b border-black flex-1">
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

                  {/* Notify Party */}
                  <div className="p-4 flex-1 bg-gray-50">
                     <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 border-2 border-black rounded-full"></div>
                        <h3 className="text-xs font-black uppercase tracking-widest">Notify Party</h3>
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

               {/* Right Column: Carrier & Routing */}
               <div className="flex flex-col">
                  {/* Carrier */}
                  <div className="p-4 border-b border-black flex-1">
                     <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 border-black border-2 border-separate"></div>
                        <h3 className="text-xs font-black uppercase tracking-widest">Carrier</h3>
                     </div>
                     <div className="text-lg font-black uppercase mb-1 tracking-wider">{carrierName}</div>
                     <div className="text-xs mb-2 leading-relaxed">
                        {carrierAddress}<br/>
                        {carrierCity}, {carrierCountry}
                     </div>
                     {carrierEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {carrierEmail}</div>}
                  </div>

                  {/* References */}
                  <div className="grid grid-cols-2 border-b border-black">
                     <DataBox label="Fwd Ref. Number" value={freightForwarderReferenceNumber} fontMono />
                     <DataBox label="Payment Location" value={paymentLocation} className="border-r-0" />
                  </div>

                  {/* Routing */}
                  <div className="grid grid-cols-2 flex-1">
                     <DataBox label="Vessel / Means" value={transportMeansIdentifier} />
                     <DataBox label="Port of Loading" value={originalLoadingLocation} className="border-r-0" />
                     <DataBox label="Port of Discharge" value={baseportUnloadingLocation} className="border-b-0" />
                     <DataBox label="Place of Delivery" value={deliveryLocationName || deliveryLocationAddress} className="border-b-0 border-r-0" />
                  </div>
               </div>
            </div>

            {/* --- Equipment / Container Info --- */}
            <div className="grid grid-cols-4 border-b-2 border-black bg-gray-100">
               <DataBox label="Container Number" value={transportEquipmentIdentifier} fontMono />
               <DataBox label="Size & Type" value={containerSizeAndTypeCode} fontMono />
               <DataBox label="Status" value={fullOrEmptyContainer || "FCL"} />
               <DataBox label="Mode of Transport" value={modeOfTransport || "Maritime"} className="border-r-0" />
            </div>

            {/* --- Goods Details Table --- */}
            <div className="border-b-2 border-black min-h-[250px] flex flex-col relative">

               <div className="bg-black text-white p-2 text-[9px] font-black uppercase tracking-widest border-b border-black z-10">
                  Particulars Furnished by Shipper
               </div>
               <table className="w-full text-left table-fixed flex-1 z-10 relative">
                  <thead className="bg-white text-[9px] font-bold uppercase tracking-widest text-gray-600 border-b border-black">
                     <tr>
                        <th className="p-3 w-16 text-center border-r border-black">Item</th>
                        <th className="p-3 w-7/12 border-r border-black">Description of Goods</th>
                        <th className="p-3 w-2/12 text-center border-r border-black">Packaging</th>
                        <th className="p-3 w-2/12 text-center">Quantity</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm font-mono">
                     {goods.length > 0 ? goods.map((item, i) => (
                        <tr key={i} className="border-b border-gray-200 last:border-0 align-top">
                           <td className="p-3 text-center border-r border-black font-bold text-gray-400">{i + 1}</td>
                           <td className="p-3 border-r border-black whitespace-pre-wrap leading-relaxed uppercase font-sans font-bold text-xs">
                              {item.description}
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
                           <td colSpan={4} className="p-8 text-center text-gray-400 italic uppercase font-sans text-xs">No goods particulars declared</td>
                        </tr>
                     )}
                  </tbody>
                  {/* Totals Footer */}
                  {goods.length > 0 && (
                     <tfoot className="bg-gray-50 border-t border-black font-bold">
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

            {/* --- Summary Weights & Dimensions --- */}
            <div className="grid grid-cols-2 border-b-2 border-black">
               <DataBox label="Total Gross Weight" value={grossWeight != null ? `${grossWeight}` : "N/A"} fontMono />
               <DataBox label="Total Volume" value={volume != null ? `${volume}` : "N/A"} fontMono className="border-r-0" />
            </div>
         </div>
      </Wrapper>
   );
};