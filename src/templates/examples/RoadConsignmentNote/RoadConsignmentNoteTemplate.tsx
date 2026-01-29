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
    // --- Parties ---
    sender: {
      name: senderName,
      address: senderAddress,
      countryCode: senderCountry,
    } = {},
    consignee: {
      name: consigneeName,
      address: consigneeAddress,
      countryCode: consigneeCountry,
    } = {},
    carrier: {
      name: carrierName,
      address: carrierAddress,
    } = {},

    // --- Transport Details ---
    placeOfTakingOver,
    dateOfTakingOver,
    placeOfDelivery,

    // --- Goods Description ---
    marksAndNumbers,
    numberOfPackages,
    methodOfPacking,
    natureOfGoods,
    grossWeight: {
      value: weightValue,
      unit: weightUnit,
    } = {},
    volume: {
      value: volumeValue,
      unit: volumeUnit,
    } = {},

    // --- Dangerous Goods ---
    dangerousGoods: {
      isDangerous,
      adrClass,
      unNumber,
    } = {},

    // --- Reservations & Instructions ---
    carrierReservations: {
      reservationText,
    } = {},
    senderInstructions,
    specialAgreements,

    // --- Execution & Signatures ---
    establishedAt,
    establishedOn,
    signatures: {
      senderSignature: senderSig = {},
      carrierSignature: carrierSig = {},
      consigneeSignature: consigneeSig = {},
    } = {},
  } = data;

  // Professional box helper with no numbers as requested
  const InfoBox = ({ 
    label, 
    value, 
    className = "", 
    isHighlighted = false 
  }: { 
    label: string; 
    value?: string | React.ReactNode; 
    className?: string; 
    isHighlighted?: boolean;
  }) => (
    <div className={`border border-gray-300 p-3 min-h-[90px] ${isHighlighted ? "bg-gray-50" : ""} ${className}`}>
      <label className="block text-[9px] uppercase font-bold text-gray-500 mb-2 tracking-widest leading-none">
        {label}
      </label>
      <div className="text-sm font-semibold uppercase text-gray-800 whitespace-pre-line leading-snug">
        {value || <span className="text-gray-300 font-normal italic lowercase">not specified</span>}
      </div>
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-gray-900 border border-gray-200 shadow-xl my-10">
        
        {/* Header Section */}
        <div className="flex justify-between items-end border-b-4 border-gray-900 pb-6 mb-0">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-1">
              International Consignment Note
            </h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold text-blue-600 tracking-widest uppercase">CMR</span>
              <span className="text-[10px] text-gray-400 font-medium">Road Transport Convention</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase text-gray-400 font-bold mb-1">Document Hash</div>
            <div className="text-xs font-mono font-bold bg-gray-100 px-2 py-1 border border-gray-200 text-gray-600">
              {data.documentHash ? data.documentHash.substring(0, 16).toUpperCase() : "VERIFICATION PENDING"}
            </div>
          </div>
        </div>

        {/* Contractual Clause */}
        <div className="bg-gray-50 border-x border-gray-300 p-3 text-[9px] text-gray-500 italic uppercase leading-tight border-b ">
          This carriage is subject, notwithstanding any clause to the contrary, to the Convention on the Contract for the International Carriage of Goods by Road (CMR).
        </div>

        {/* Parties Grid */}
        <div className="grid grid-cols-2">
          <InfoBox 
            label="Sender" 
            value={`${senderName}\n${senderAddress}\n${senderCountry}`} 
            className="border-t-0 border-l-0"
          />
          <InfoBox 
            label="Carrier" 
            value={`${carrierName}\n${carrierAddress}`} 
            className="border-t-0 border-r-0 border-l-0"
          />
          <InfoBox 
            label="Consignee" 
            value={`${consigneeName}\n${consigneeAddress}\n${consigneeCountry}`} 
            className="border-l-0 border-b-0"
          />
          <div className="grid grid-cols-1">
            <InfoBox label="Successive Carriers" value="No successive carriers specified" className="border-r-0 border-l-0 border-b-0 italic text-gray-400" />
          </div>
        </div>

        {/* Transport Logistics */}
        <div className="grid grid-cols-2 border-t border-gray-300">
          <InfoBox label="Place of Delivery" value={placeOfDelivery} className="border-l-0" />
          <InfoBox 
            label="Place and Date of Pickup" 
            value={`${placeOfTakingOver || ""}\n${dateOfTakingOver ? new Date(dateOfTakingOver).toLocaleDateString() : ""}`} 
            className="border-r-0 border-l-0" 
          />
        </div>

        {/* Goods Description - Table Layout */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white text-[9px] font-bold uppercase tracking-widest">
              <th className="p-2 text-left border-r border-gray-700 w-[50%]">9. Nature of Goods / Marks</th>
              <th className="p-2 text-center border-r border-gray-700 w-[12%]">Qty / Pkgs</th>
              <th className="p-2 text-center border-r border-gray-700 w-[19%]">Gross Weight</th>
              <th className="p-2 text-center w-[19%]">Volume</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="p-4 border-r border-gray-300 align-top min-h-[140px]">
                <div className="font-bold text-base mb-1">{natureOfGoods}</div>
                <div className="text-xs text-gray-500 font-mono">{marksAndNumbers}</div>
                <div className="mt-2 text-[10px] text-gray-400 uppercase font-bold">Method: {methodOfPacking || "Bulk"}</div>
              </td>
              <td className="p-4 border-r border-gray-300 text-center align-middle">
                <div className="text-2xl font-black text-gray-700">{numberOfPackages}</div>
              </td>
              <td className="p-4 border-r border-gray-300 text-center align-middle">
                <div className="text-xl font-bold text-gray-700">{weightValue}</div>
                <div className="text-[10px] uppercase text-gray-400 font-bold mt-1">{weightUnit}</div>
              </td>
              <td className="p-4 text-center align-middle">
                <div className="text-xl font-bold text-gray-700">{volumeValue}</div>
                <div className="text-[10px] uppercase text-gray-400 font-bold mt-1">{volumeUnit}</div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* ADR / Dangerous Goods */}
        {isDangerous && (
          <div className="bg-orange-50 border-x border-b border-orange-200 p-4 flex items-center justify-between">
             <div className="flex items-center space-x-3">
               <div className="bg-orange-600 text-white font-black px-3 py-1 text-xs rounded uppercase tracking-tighter shadow-sm">ADR Hazard</div>
               <div>
                 <p className="text-[10px] font-bold text-orange-800 uppercase leading-none mb-1 tracking-widest">Dangerous Goods Details</p>
                 <p className="text-sm font-bold text-orange-950 uppercase">Class {adrClass} | UN No. {unNumber}</p>
               </div>
             </div>
             <div className="text-[8px] text-orange-400 font-bold italic uppercase max-w-[150px] text-right">
               Declaration required under Chapter 5.4 ADR
             </div>
          </div>
        )}

        {/* Instructions & Observations */}
        <div className="grid grid-cols-2">
          <InfoBox label="Sender's Instructions" value={senderInstructions} className="border-l-0 border-t-0" />
          <InfoBox label="Carrier's Reservations" value={reservationText} className="border-r-0 border-l-0 border-t-0" />
        </div>

        {/* Special Agreements */}
        <InfoBox 
          label="Special Agreements" 
          value={specialAgreements} 
          className="border-l-0 border-r-0 border-t-0 min-h-[60px]" 
        />

        {/* Signatures Section */}
        <div className="grid grid-cols-3 bg-gray-50 border-t border-gray-300">
          <div className="border-r border-gray-300 p-5 min-h-[180px] flex flex-col justify-between">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Sender Signature</label>
            <div className="text-center">
              <div className="text-[10px] font-bold text-blue-500 uppercase mb-2">Authenticated</div>
              <div className="border-t border-gray-200 pt-3 text-xs font-bold text-gray-700 uppercase">
                {senderSig.signature || "Authorized Representative"}
              </div>
            </div>
          </div>
          <div className="border-r border-gray-300 p-5 min-h-[180px] flex flex-col justify-between">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Carrier Signature</label>
            <div className="text-center">
              <div className="w-12 h-12 border border-gray-200 rounded-full mx-auto flex items-center justify-center mb-3">
                 <div className="w-8 h-8 border-2 border-dashed border-gray-100 rounded-full animate-pulse"></div>
              </div>
              <div className="border-t border-gray-200 pt-3 text-xs font-bold text-gray-700 uppercase">
                {carrierSig.signature || "Vehicle Driver/Agent"}
              </div>
            </div>
          </div>
          <div className="p-5 min-h-[180px] flex flex-col justify-between bg-white">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Consignee Receipt</label>
            <div className="text-center p-4 border border-dashed border-gray-200 rounded-lg">
               <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Pending Delivery</span>
            </div>
            <div className="border-t border-gray-200 pt-3 text-xs font-bold text-gray-300 uppercase italic">
              Recipient Signature
            </div>
          </div>
        </div>

        {/* Execution Details & Chaindox Branding */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center">
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            Established at <span className="text-gray-600">{establishedAt || "N/A"}</span> on <span className="text-gray-600">{establishedOn ? new Date(establishedOn).toLocaleDateString() : "N/A"}</span>
          </div>
          <div className="flex items-center space-x-3">
             <div className="h-4 w-[1px] bg-gray-200"></div>
             <div className="flex items-center space-x-1">
                <span className="text-[9px] font-bold text-gray-300 uppercase">Powered by</span>
                <span className="text-[10px] font-black text-blue-900 tracking-tighter uppercase">Chaindox</span>
             </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}