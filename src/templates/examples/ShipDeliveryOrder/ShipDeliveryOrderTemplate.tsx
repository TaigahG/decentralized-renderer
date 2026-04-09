import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { ShipDeliveryOrder, ShipDeliveryOrderSchema } from "./types";

export const ShipDeliveryOrderTemplate: FunctionComponent<
  TemplateProps<ShipDeliveryOrderSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as ShipDeliveryOrder;

  const {
    billOfLadingNumber,

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

    // --- Location & Routing ---
    placeOfTheDeliveryByCarrier: {
      name: deliveryLocationName,
      addressLine: deliveryLocationAddress,
    } = {},
    originalLoadingLocation,
    baseportUnloadingLocation,

    // --- Goods Details ---
    grossWeight,
    shippingMarks,

    // --- Transport & Equipment ---
    conveyanceReferenceNumber,
    transportMeansIdentifier,
    transportEquipmentIdentifier,
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
        <div className="flex justify-between items-start border-b-4 border-black p-3 mb-0">
          <div className="flex-1">
            <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">
              Delivery Order
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
              Authorization for Cargo Release
            </p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-bold uppercase tracking-widest mb-1">Master B/L Reference</p>
            <p className="text-2xl font-mono font-black tracking-widest bg-black text-white px-3 py-1">
              {billOfLadingNumber || "PENDING"}
            </p>
          </div>
        </div>

        {/* --- Parties Section --- */}
        <div className="grid grid-cols-2 border-b-2 border-black">
          {/* Carrier / Issuer */}
          <div className="border-r border-black p-4">
             <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-black"></div>
                <h3 className="text-xs font-black uppercase tracking-widest">Carrier / Issuing Agent</h3>
             </div>
             <div className="text-sm font-bold uppercase mb-1">{carrierName}</div>
             <div className="text-xs mb-2 leading-relaxed">
               {carrierAddress}<br/>
               {carrierCity}, {carrierCountry}
             </div>
             {carrierEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {carrierEmail}</div>}
          </div>

          {/* Consignee / Deliver To */}
          <div className="p-4 bg-gray-50">
             <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 border-2 border-black"></div>
                <h3 className="text-xs font-black uppercase tracking-widest">Deliver To (Consignee / Broker)</h3>
             </div>
             <div className="text-sm font-bold uppercase mb-1">{consigneeName}</div>
             <div className="text-xs mb-2 leading-relaxed">
               {consigneeAddress}<br/>
               {consigneeCity}, {consigneeCountry}
             </div>
             {consigneeEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {consigneeEmail}</div>}
          </div>
        </div>

        {/* --- Delivery Location (CRITICAL FOR SDO) --- */}
        <div className="border-b-2 border-black bg-black text-white p-5">
           <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-[0.2em]">
             Place of Delivery (Terminal / CFS)
           </label>
           <div className="text-2xl font-black uppercase tracking-widest mb-1">
              {deliveryLocationName || "PORT TERMINAL"}
           </div>
           <div className="text-sm font-mono text-gray-300">
              {deliveryLocationAddress}
           </div>
        </div>

        {/* --- Transport & Routing --- */}
        <div className="grid grid-cols-4 border-b-2 border-black">
           <DataBox label="Vessel / Means of Transport" value={transportMeansIdentifier} className="col-span-2" />
           <DataBox label="Voyage Number" value={conveyanceReferenceNumber} fontMono className="col-span-2 border-r-0" />
        </div>
        <div className="grid grid-cols-2 border-b-2 border-black">
           <DataBox label="Original Port of Loading" value={originalLoadingLocation} />
           <DataBox label="Port of Discharge" value={baseportUnloadingLocation} className="border-r-0" />
        </div>

        {/* --- Equipment / Cargo Identification --- */}
        <div className="grid grid-cols-3 border-b-2 border-black">
           <DataBox label="Container Number" value={transportEquipmentIdentifier} fontMono />
           <DataBox label="Seal Number" value={sealIdentifier} fontMono />
           <DataBox label="Gross Weight" value={grossWeight ? `${grossWeight} KGM` : "N/A"} fontMono className="border-r-0" />
        </div>

        {/* --- Shipping Marks & Description --- */}
        <div className="border-b-2 border-black min-h-[180px] flex flex-col p-4 bg-gray-50">
           <label className="block text-[9px] uppercase font-bold mb-3 tracking-widest text-gray-600 border-b border-black w-fit pb-1">
             Shipping Marks & Cargo Description
           </label>
           <div className="text-sm font-mono whitespace-pre-wrap leading-relaxed">
              {shippingMarks || "AS PER ORIGINAL BILL OF LADING."}
           </div>
        </div>

        {/* --- Legal Declaration & Instructions --- */}
        <div className="p-4 border-b border-black text-[10px] text-justify font-serif leading-relaxed">
           <span className="font-bold uppercase font-sans mr-2">Release Authorization:</span>
           To the Terminal Operator, Stevedore, or Warehouse Keeper: You are hereby authorized to deliver the above-mentioned goods to the Consignee or their authorized agent, subject to the payment of any outstanding terminal handling charges, demurrage, or storage fees. All original Bills of Lading have been surrendered, electronically voided, or otherwise satisfied. This document conveys no title to the goods but serves strictly as a logistical release instruction.
        </div>
      </div>
    </Wrapper>
  );
};