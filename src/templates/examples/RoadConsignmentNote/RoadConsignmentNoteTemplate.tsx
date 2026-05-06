import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { RoadConsignmentNote, RoadConsignmentNoteSchema } from "./types";

export const RoadConsignmentNoteTemplate: FunctionComponent<
  TemplateProps<RoadConsignmentNoteSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as RoadConsignmentNote;

  const {
    // --- Document Identifiers ---
    documentIdentifier: cmrNumber,

    // --- Dates ---
    issueDate,
    deliveryDate,
    consignmentLoadingDate,

    // --- Parties ---
    buyer: {
      name: buyerName,
      addressLine: buyerAddress,
      city: buyerCity,
      country: buyerCountry,
      email: buyerEmail,
    } = {},
    carrierTransportServicesProvider: {
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
    consignor: {
      name: consignorName,
      addressLine: consignorAddress,
      city: consignorCity,
      country: consignorCountry,
      email: consignorEmail,
    } = {},
    issuer: {
      name: issuerName,
    } = {},

    // --- Locations & Routing ---
    placeOfTheDeliveryOfTheGoods: deliveryLocation,
    destinationCountry,
    baseportUnloadingLocation,
    placeOfIssue,

    // --- Weights & Measures ---
    grossWeight,
    grossWeightUnit,
    volume,
    volumeUnit,

    // --- Goods Details ---
    goods = [],

    // --- Transport & Equipment ---
    transportMeansIdentifier: truckFleetId,
    vehicleRegistrationNumber: truckLicensePlate,
    transportEquipmentIdentifier: trailerNumber,
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
              Road Consignment Note
            </h1>
            <div className="flex gap-2">
               <div className="inline-block border border-black px-3 py-1">
                  <span className="text-[10px] font-bold uppercase">International Road Transport</span>
               </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-bold uppercase tracking-widest mb-1 text-gray-500">Document Identifier</p>
            <p className="text-2xl font-mono font-black tracking-widest border-2 border-black px-3 py-1">
              {cmrNumber || "DRAFT"}
            </p>
          </div>
        </div>

        {/* --- Parties Grid --- */}
        <div className="grid grid-cols-2 border-b-2 border-black">
          
          {/* Column 1: Consignor & Consignee */}
          <div className="border-r border-black flex flex-col">
             {/* Consignor (Sender) */}
             <div className="p-4 border-b border-black flex-1">
                <div className="flex items-center space-x-2 mb-3">
                   <div className="w-3 h-3 bg-black"></div>
                   <h3 className="text-xs font-black uppercase tracking-widest">1. Consignor / Sender</h3>
                </div>
                <div className="text-sm font-bold uppercase mb-1">{consignorName}</div>
                <div className="text-xs mb-2 leading-relaxed">
                  {consignorAddress}<br/>
                  {consignorCity}, {consignorCountry}
                </div>
                {consignorEmail && <div className="text-[10px] font-mono text-gray-700">Email: {consignorEmail}</div>}
             </div>
             
             {/* Consignee (Receiver) */}
             <div className="p-4 flex-1">
                <div className="flex items-center space-x-2 mb-3">
                   <div className="w-3 h-3 border-2 border-black"></div>
                   <h3 className="text-xs font-black uppercase tracking-widest">2. Consignee / Receiver</h3>
                </div>
                <div className="text-sm font-bold uppercase mb-1">{consigneeName}</div>
                <div className="text-xs mb-2 leading-relaxed">
                  {consigneeAddress}<br/>
                  {consigneeCity}, {consigneeCountry}
                </div>
                {consigneeEmail && <div className="text-[10px] font-mono text-gray-700">Email: {consigneeEmail}</div>}
             </div>
          </div>

          {/* Column 2: Carrier & Transport Info */}
          <div className="flex flex-col">
             {/* Carrier */}
             <div className="p-4 border-b border-black bg-gray-50 flex-1">
                <div className="flex items-center space-x-2 mb-3">
                   <div className="w-3 h-3 bg-gray-400"></div>
                   <h3 className="text-xs font-black uppercase tracking-widest">3. Carrier / Provider</h3>
                </div>
                <div className="text-sm font-bold uppercase mb-1">{carrierName}</div>
                <div className="text-xs mb-2 leading-relaxed">
                  {carrierAddress}<br/>
                  {carrierCity}, {carrierCountry}
                </div>
                {carrierEmail && <div className="text-[10px] font-mono text-gray-700">Email: {carrierEmail}</div>}
             </div>

             {/* Routing Details */}
             <div className="grid grid-cols-2 flex-1">
                <DataBox label="Loading Date" value={consignmentLoadingDate} fontMono />
                <DataBox label="Delivery Date" value={deliveryDate} fontMono className="border-r-0" />
                <DataBox label="Place of Delivery" value={deliveryLocation} className="border-b-0" />
                <DataBox label="Destination" value={destinationCountry} className="border-r-0 border-b-0 bg-gray-50" />
             </div>
          </div>

          {/* Buyer & Baseport Unloading */}
          <div className="col-span-2 border-t border-black flex">
             {/* Buyer */}
             <div className="p-4 flex-1 border-r border-black">
                <div className="flex items-center space-x-2 mb-3">
                   <div className="w-3 h-3 border-2 border-black transform rotate-45"></div>
                   <h3 className="text-xs font-black uppercase tracking-widest">4. Buyer</h3>
                </div>
                <div className="text-sm font-bold uppercase mb-1">{buyerName || "N/A"}</div>
                {buyerAddress && (
                   <div className="text-xs mb-2 leading-relaxed">
                      {buyerAddress}<br/>
                      {buyerCity}, {buyerCountry}
                   </div>
                )}
                {buyerEmail && <div className="text-[10px] font-mono text-gray-700">Email: {buyerEmail}</div>}
             </div>
             {/* Baseport Unloading Location */}
             <div className="p-4 flex-1 bg-gray-50">
                <p className="text-[9px] uppercase font-bold tracking-widest text-gray-600 mb-2">Baseport Unloading Location</p>
                <p className="text-sm font-bold uppercase">{baseportUnloadingLocation || "—"}</p>
             </div>
          </div>
        </div>

        {/* --- Equipment & Vehicle Info --- */}
        <div className="grid grid-cols-4 border-b-2 border-black bg-black text-white">
           <DataBox label="Tractor / Cab Plate" value={truckLicensePlate} fontMono inverted />
           <DataBox label="Trailer / Wagon No." value={trailerNumber} fontMono inverted />
           <DataBox label="Fleet / Unit ID" value={truckFleetId} fontMono inverted className="col-span-2 border-r-0" />
        </div>

        {/* --- Goods List Table --- */}
        <div className="border-b-2 border-black min-h-[250px] flex flex-col relative">
           {/* Background Watermark */}
           <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
              <span className="text-[8rem] font-black uppercase text-center leading-none transform -rotate-12 whitespace-nowrap">
                 ROAD CARGO
              </span>
           </div>

           <div className="bg-gray-100 p-2 text-[9px] font-black uppercase tracking-widest border-b border-black z-10">
              Particulars of Goods
           </div>
           <table className="w-full text-left table-fixed flex-1 z-10 relative">
              <thead className="bg-white text-[9px] font-bold uppercase tracking-widest text-gray-600 border-b border-black">
                 <tr>
                    <th className="p-3 w-16 text-center border-r border-black">Item</th>
                    <th className="p-3 w-7/12 border-r border-black">Description of Goods</th>
                    <th className="p-3 w-2/12 text-center border-r border-black">HS Code</th>
                    <th className="p-3 w-2/12 text-center">Qty / Pkgs</th>
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

        {/* --- Summary Weights --- */}
        <div className="grid grid-cols-2 border-b-2 border-black">
           <DataBox label="Gross Weight" value={grossWeight != null ? `${grossWeight} ${grossWeightUnit || 'KGM'}` : "N/A"} fontMono />
           <DataBox label="Volume" value={volume != null ? `${volume} ${volumeUnit || 'MTQ'}` : "N/A"} fontMono className="border-r-0" />
        </div>

        {/* --- Legal Declaration (CMR) --- */}
        <div className="p-5 border-b border-black bg-white text-[10px] text-justify font-serif leading-relaxed">
           <span className="font-bold uppercase font-sans mr-2">Carriage Clause:</span>
           This carriage is subject, notwithstanding any clause to the contrary, to the Convention on the Contract for the International Carriage of Goods by Road (CMR).
           <br/><br/>
           The consignor shall be liable for all expenses, loss and damage sustained by the carrier by reason of the inaccuracy or inadequacy of the particulars provided. This document was issued by <span className="font-bold">{issuerName || carrierName}</span>.
        </div>
      </div>
    </Wrapper>
  );
};