import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { CargoInsurance, CargoInsuranceSchema } from "./types";

export const CargoInsuranceTemplate: FunctionComponent<
   TemplateProps<CargoInsuranceSchema>
> = ({ document }) => {
   const data = getDocumentData(document) as CargoInsurance;

   const {
      // --- Document & Shipment Identifiers ---
      invoiceNumber,
      insurancePolicyNumber,

      // --- Dates ---
      issuedDate,
      estimatedTimeOfDeparture,

      // --- Parties ---
      insuredParty: {
         name: insuredName,
         addressLine: insuredAddress,
         city: insuredCity,
         country: insuredCountry,
         email: insuredEmail,
      } = {},
      insuranceCompany: {
         name: insurerName,
         addressLine: insurerAddress,
         city: insurerCity,
         country: insurerCountry,
         email: insurerEmail,
      } = {},
      insuranceClaimAdjuster: {
         name: adjusterName,
         address: adjusterAddress, // Note: Maps from 'address'
         email: adjusterEmail,
      } = {},

      // --- Locations & Routing ---
      originalLoadingLocation,
      placeOrDeparture,
      baseportUnloadingLocation,
      placeOfTheDeliveryByCarrier: {
         name: deliveryLocationName,
         addressLine: deliveryLocationAddress,
      } = {},
      documentPlaceOfIssue,

      // --- Insurance Details ---
      insuranceCondition,
      insuredValueAmount,

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
                  <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">
                     Certificate of Insurance
                  </h1>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
                     Marine & Transit Cargo Policy
                  </p>
               </div>
               <div className="text-right">
                  <p className="text-[9px] font-bold uppercase tracking-widest mb-1">Policy / Certificate No.</p>
                  <p className="text-2xl font-mono font-black tracking-widest bg-black text-white px-3 py-1">
                     {insurancePolicyNumber || "DRAFT"}
                  </p>
               </div>
            </div>

            {/* --- Key Identifiers --- */}
            <div className="grid grid-cols-4 border-b-2 border-black bg-gray-50">
               <DataBox label="Date of Issue" value={issuedDate} fontMono className="bg-transparent" />
               <DataBox label="Place of Issue" value={documentPlaceOfIssue} fontMono className="bg-transparent" />
               <DataBox label="Commercial Invoice Ref" value={invoiceNumber} fontMono className="bg-transparent" />
               <DataBox label="Est. Time of Departure (ETD)" value={estimatedTimeOfDeparture} fontMono className="bg-transparent border-r-0" />
            </div>

            {/* --- Parties Section --- */}
            <div className="grid grid-cols-2 border-b-2 border-black">
               {/* Assured Party */}
               <div className="border-r border-black p-4">
                  <div className="flex items-center space-x-2 mb-3">
                     <div className="w-3 h-3 bg-black"></div>
                     <h3 className="text-xs font-black uppercase tracking-widest">Insured Party (Assured)</h3>
                  </div>
                  <div className="text-sm font-bold uppercase mb-1">{insuredName}</div>
                  <div className="text-xs mb-2 leading-relaxed">
                     {insuredAddress}<br/>
                     {insuredCity}, {insuredCountry}
                  </div>
                  {insuredEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {insuredEmail}</div>}
               </div>

               {/* Insurance Company */}
               <div className="p-4 bg-gray-50">
                  <div className="flex items-center space-x-2 mb-3">
                     <div className="w-3 h-3 border-2 border-black"></div>
                     <h3 className="text-xs font-black uppercase tracking-widest">Insurance Company</h3>
                  </div>
                  <div className="text-sm font-bold uppercase mb-1">{insurerName}</div>
                  <div className="text-xs mb-2 leading-relaxed">
                     {insurerAddress}<br/>
                     {insurerCity}, {insurerCountry}
                  </div>
                  {insurerEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {insurerEmail}</div>}
               </div>
            </div>

            {/* --- Financials (Inverted Block for High Visibility) --- */}
            <div className="bg-black text-white p-6 border-b-2 border-black flex justify-between items-center">
               <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-[0.2em]">Total Insured Value</label>
                  <div className="text-4xl font-black font-mono tracking-tighter">
                     {insuredValueAmount != null ? Number(insuredValueAmount).toLocaleString(undefined, { minimumFractionDigits: 2 }) : "NOT DECLARED"}
                  </div>
               </div>
               <div className="text-right">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Coverage Scope</div>
                  <div className="text-sm font-bold uppercase tracking-widest border border-white px-2 py-1 inline-block">
                     110% of CIF Value
                  </div>
               </div>
            </div>

            {/* --- Voyage / Routing --- */}
            <div className="grid grid-cols-4 border-b-2 border-black">
               <DataBox label="Place of Receipt" value={placeOrDeparture} />
               <DataBox label="Port of Loading" value={originalLoadingLocation} />
               <DataBox label="Port of Discharge" value={baseportUnloadingLocation} />
               <DataBox label="Place of Delivery" value={deliveryLocationName || deliveryLocationAddress} className="border-r-0" />
            </div>

            {/* --- Cargo Description Table --- */}
            <div className="border-b-2 border-black min-h-[200px] flex flex-col">
               <div className="bg-gray-100 p-2 text-[9px] font-black uppercase tracking-widest border-b border-black">
                  Subject Matter Insured
               </div>
               <table className="w-full text-left table-fixed flex-1">
                  <thead className="bg-white text-[9px] font-bold uppercase tracking-widest text-gray-600 border-b border-black">
                     <tr>
                        <th className="p-3 w-16 text-center border-r border-black">Item</th>
                        <th className="p-3 w-7/12 border-r border-black">Description of Goods</th>
                        <th className="p-3 w-2/12 text-center border-r border-black">HS Code</th>
                        <th className="p-3 w-2/12 text-center">Packages</th>
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
                           <td className="p-3 text-center font-black text-base">
                              {item.numberOfPackages}
                           </td>
                        </tr>
                     )) : (
                        <tr>
                           <td colSpan={4} className="p-8 text-center text-gray-400 italic uppercase font-sans text-xs">No goods items declared</td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>

            {/* --- Conditions & Claims (Critical Legal Info) --- */}
            <div className="grid grid-cols-2 border-b-2 border-black">
               <div className="p-4 border-r border-black flex flex-col">
                  <label className="block text-[9px] uppercase font-bold mb-2 tracking-widest text-gray-600 border-b border-black pb-1">
                     Conditions of Insurance
                  </label>
                  <div className="text-sm font-bold uppercase leading-relaxed text-justify mt-2">
                     {insuranceCondition || "SUBJECT TO INSTITUTE CARGO CLAUSES (A), INSTITUTE WAR CLAUSES (CARGO), AND INSTITUTE STRIKES CLAUSES (CARGO)."}
                  </div>
               </div>
               
               <div className="p-4 bg-gray-50 flex flex-col">
                  <label className="block text-[9px] uppercase font-bold mb-2 tracking-widest text-gray-600 border-b border-black pb-1">
                     In the event of claim apply to
                  </label>
                  <div className="text-sm font-bold uppercase mt-2">{adjusterName || insurerName}</div>
                  <div className="text-xs mt-1 leading-relaxed text-gray-700">
                     {adjusterAddress || insurerAddress}
                  </div>
                  {(adjusterEmail || insurerEmail) && (
                     <div className="text-[10px] font-mono text-gray-700 mt-2 pt-2 border-t border-gray-300">
                        Claims Email: {adjusterEmail || insurerEmail}
                     </div>
                  )}
               </div>
            </div>

         </div>
      </Wrapper>
   );
};