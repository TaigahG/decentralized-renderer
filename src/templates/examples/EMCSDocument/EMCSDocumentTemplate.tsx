import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { EMCSDocument, EMCSDocumentSchema } from "./types";

export const EMCSDocumentTemplate: FunctionComponent<
  TemplateProps<EMCSDocumentSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as EMCSDocument;

  const {
    // --- Header Information ---
    documentType,
    arc,
    sequenceNumber,
    status: movementStatus,
    dateOfCreation,
    dateOfDispatch,
    timeOfDispatch,
    movementType,
    destinationType,
    journeyTime: {
      days: journeyDays,
      hours: journeyHours,
    } = {},

    // --- Parties ---
    consignor: {
      traderName: consignorName,
      traderExciseNumber: consignorSeed,
      streetName: consignorStreet,
      city: consignorCity,
      memberStateCode: consignorCountry,
    } = {},
    consignee: {
      traderName: consigneeName,
      traderExciseNumber: consigneeSeed,
      consigneeIdentification,
      streetName: consigneeStreet,
      city: consigneeCity,
      memberStateCode: consigneeCountry,
    } = {},

    // --- Locations ---
    placeOfDispatch: {
      warehouseExciseNumber: dispatchWarehouseId,
      warehouseName: dispatchWarehouseName,
      city: dispatchCity,
    } = {},
    placeOfDelivery: {
      warehouseExciseNumber: deliveryWarehouseId,
      warehouseName: deliveryWarehouseName,
      city: deliveryCity,
    } = {},

    // --- Transport ---
    transport: {
      transportArrangerCode,
      transportDetails = [],
    } = {},

    // --- Goods ---
    eadBody = [],

    // --- Workflow / Lifecycle Events ---
    reportOfReceipt: {
      dateOfArrival,
      globalConclusionOfReceipt,
      complementaryInformation: receiptNotes,
      bodyReportOfReceipt = [],
    } = {},
    changeOfDestination: {
      newDestinationTypeCode,
      newConsignee: { traderName: newConsigneeName } = {},
    } = {},
    cancellation: {
      cancellationReasonCode,
      cancellationDate,
    } = {},
    alertOrRejection: {
      alertOrRejectionReasonCode = [],
      dateOfAlertOrRejection,
    } = {},

    // --- Customs References ---
    importDeclaration: { mrn: importMrn } = {},
    exportDeclaration: { mrn: exportMrn, localReferenceNumber: exportLrn } = {},
  } = data;

  // Professional box helper
  const InfoBox = ({ label, value, className = "", highlight = false }: { label: string; value?: string | React.ReactNode; className?: string; highlight?: boolean }) => (
    <div className={`border border-gray-300 p-3 min-h-[85px] ${highlight ? "bg-gray-50" : ""} ${className}`}>
      <label className="block text-[9px] uppercase font-black text-gray-400 mb-2 tracking-widest leading-none">{label}</label>
      <div className="text-sm font-bold uppercase text-gray-800 leading-tight whitespace-pre-line">{value || "-"}</div>
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-gray-900 border border-gray-200 shadow-2xl my-10 relative">
        
        {/* --- Header & ARC --- */}
        <div className="flex justify-between items-start border-b-4 border-black pb-6 mb-0">
          <div className="flex-1">
            <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-1 text-black">
              e-AD / EMCS
            </h1>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">
              Electronic Administrative Document for Excise Goods
            </p>
            <div className="flex gap-2">
              <div className="bg-gray-500 text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                Seq: {sequenceNumber || "1"}
              </div>
              <div className="border border-gray-500 text-gray-500 px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                Type: {movementType || "Standard"}
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] uppercase text-gray-400 font-bold mb-1 tracking-widest">Administrative Reference Code (ARC)</p>
            <p className="text-xl font-mono font-black text-gray-900 tracking-widest">{arc || "PENDING ISSUANCE"}</p>
            <div className={`mt-2 text-[10px] font-black uppercase px-2 py-1 inline-block border ${movementStatus === 'Accepted' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>
               Status: {movementStatus || "Draft"}
            </div>
          </div>
        </div>

        {/* --- Dispatch & Journey --- */}
        <div className="bg-gray-50 border-x border-gray-300 p-4 border-b flex justify-between">
           <div>
              <label className="block text-[9px] uppercase font-black text-gray-400 mb-1 tracking-widest">Dispatch Date & Time</label>
              <div className="text-sm font-bold text-gray-900">
                 {dateOfDispatch} <span className="text-gray-500 text-xs ml-1">{timeOfDispatch}</span>
              </div>
           </div>
           <div>
              <label className="block text-[9px] uppercase font-black text-gray-400 mb-1 tracking-widest">Journey Time</label>
              <div className="text-sm font-bold text-gray-900">
                 {journeyDays ? `${journeyDays} Days` : ""} {journeyHours ? `${journeyHours} Hours` : ""}
              </div>
           </div>
           <div>
              <label className="block text-[9px] uppercase font-black text-gray-400 mb-1 tracking-widest">Destination Type</label>
              <div className="text-sm font-bold text-gray-900">{destinationType}</div>
           </div>
        </div>

        {/* --- Parties Grid --- */}
        <div className="grid grid-cols-2">
          {/* Consignor */}
          <div className="p-4 border border-gray-300 border-t-0 border-r-0">
             <label className="block text-[9px] uppercase font-black text-gray-400 mb-2 tracking-widest">Consignor</label>
             <div className="mb-2">
                <div className="font-bold text-sm uppercase">{consignorName}</div>
                <div className="text-[10px] text-gray-500 leading-tight mt-1">
                  {consignorStreet}, {consignorCity}, {consignorCountry}
                </div>
             </div>
             <div className="bg-blue-50 p-2 border border-blue-100 rounded-sm">
                <label className="block text-[8px] uppercase font-black text-blue-400 mb-1">SEED / Excise ID</label>
                <div className="font-mono font-bold text-blue-900 text-xs">{consignorSeed}</div>
             </div>
             <div className="mt-4 pt-2 border-t border-gray-100">
                <label className="block text-[8px] uppercase font-black text-gray-400 mb-1">Place of Dispatch</label>
                <div className="text-[10px] font-bold">{dispatchWarehouseName}</div>
                <div className="font-mono text-[9px] text-gray-500">{dispatchWarehouseId}</div>
             </div>
          </div>

          {/* Consignee */}
          <div className="p-4 border border-gray-300 border-t-0 border-l-0">
             <label className="block text-[9px] uppercase font-black text-gray-400 mb-2 tracking-widest">Consignee</label>
             <div className="mb-2">
                <div className="font-bold text-sm uppercase">{consigneeName}</div>
                <div className="text-[10px] text-gray-500 leading-tight mt-1">
                  {consigneeStreet}, {consigneeCity}, {consigneeCountry}
                </div>
             </div>
             <div className="bg-blue-50 p-2 border border-blue-100 rounded-sm">
                <label className="block text-[8px] uppercase font-black text-blue-400 mb-1">SEED / Excise ID</label>
                <div className="font-mono font-bold text-blue-900 text-xs">{consigneeSeed || consigneeIdentification || "Temporary Auth"}</div>
             </div>
             <div className="mt-4 pt-2 border-t border-gray-100">
                <label className="block text-[8px] uppercase font-black text-gray-400 mb-1">Place of Delivery</label>
                <div className="text-[10px] font-bold">{deliveryWarehouseName || "Direct Delivery"}</div>
                <div className="font-mono text-[9px] text-gray-500">{deliveryWarehouseId}</div>
             </div>
          </div>
        </div>

        {/* --- Transport Details --- */}
        <div className="grid grid-cols-1 border-x border-b border-gray-300 p-4">
           <label className="block text-[9px] uppercase font-black text-gray-400 mb-2 tracking-widest">Transport Details</label>
           <div className="flex flex-wrap gap-4">
             {transportDetails.length > 0 ? transportDetails.map((td, i) => (
               <div key={i} className="border border-gray-200 bg-gray-50 px-3 py-2 rounded-sm flex items-center space-x-3">
                  <div className="text-xs font-bold uppercase text-gray-800">{td.identityOfTransportUnits}</div>
                  <div className="h-4 w-px bg-gray-300"></div>
                  <div className="text-[10px] font-mono text-gray-500">Seal: {td.commercialSealIdentification || "None"}</div>
               </div>
             )) : <span className="text-xs italic text-gray-400">No transport units specified</span>}
           </div>
        </div>

        {/* --- Excise Goods Table --- */}
        <div className="border-x border-b border-gray-300 mt-0">
          <div className="bg-blue-900 text-white p-2 text-[10px] font-black uppercase tracking-widest border-b border-blue-800">
            Details of Excise Goods
          </div>
          <table className="w-full text-left table-fixed border-collapse">
            <thead className="bg-gray-100 text-[9px] font-black uppercase tracking-widest text-gray-500 border-b border-gray-300">
              <tr>
                <th className="p-3 w-16 text-center border-r border-gray-300">Item</th>
                <th className="p-3 w-1/4 border-r border-gray-300">Excise Code / CN Code</th>
                <th className="p-3 w-1/3 border-r border-gray-300">Description / Brand</th>
                <th className="p-3 w-1/6 text-center border-r border-gray-300">Strength / Density</th>
                <th className="p-3 w-1/6 text-right">Quantity</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {eadBody.length > 0 ? eadBody.map((item, i) => (
                <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-blue-50 transition-colors">
                  <td className="p-3 text-center font-mono font-bold text-gray-400 border-r border-gray-200">{item.bodyRecordUniqueReference || i + 1}</td>
                  <td className="p-3 border-r border-gray-200">
                    <div className="font-black text-blue-900">{item.exciseProductCode}</div>
                    <div className="font-mono text-[10px] text-gray-500 mt-1">CN: {item.cnCode}</div>
                  </td>
                  <td className="p-3 border-r border-gray-200">
                     <div className="font-bold uppercase text-gray-800">{item.commercialDescription}</div>
                     {item.brandNameOfProducts && <div className="text-[10px] italic text-gray-500">{item.brandNameOfProducts}</div>}
                     {item.designationOfOrigin && (
                        <span className="inline-block mt-1 px-1.5 py-0.5 bg-yellow-100 text-yellow-800 text-[8px] font-black uppercase rounded-sm border border-yellow-200">
                           {item.designationOfOrigin}
                        </span>
                     )}
                  </td>
                  <td className="p-3 text-center border-r border-gray-200">
                     {item.alcoholicStrength ? (
                        <div className="font-bold">{item.alcoholicStrength}% vol</div>
                     ) : item.density ? (
                        <div className="font-bold">{item.density} kg/m³</div>
                     ) : item.degreePlato ? (
                        <div className="font-bold">{item.degreePlato}° P</div>
                     ) : "-"}
                  </td>
                  <td className="p-3 text-right font-black">
                     {item.quantity}
                  </td>
                </tr>
              )) : (
                <tr><td colSpan={5} className="p-8 text-center text-gray-300 italic uppercase">No excise goods listed</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* --- Lifecycle Events (Conditional) --- */}
        {(dateOfArrival || cancellationDate || newDestinationTypeCode) && (
           <div className="mt-8">
              <h2 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-4">Movement Lifecycle Updates</h2>
              
              {/* Receipt Report */}
              {dateOfArrival && (
                 <div className="border border-green-200 bg-green-50 p-4 mb-2">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-xs font-black uppercase text-green-800">Report of Receipt</span>
                       <span className="text-[10px] font-mono text-green-700">{dateOfArrival}</span>
                    </div>
                    <div className="text-sm font-bold text-gray-800">
                       Conclusion: {globalConclusionOfReceipt === '1' ? "Accepted Successfully" : globalConclusionOfReceipt === '2' ? "Accepted with Shortages" : "Refused"}
                    </div>
                    {receiptNotes && <div className="text-xs italic text-gray-600 mt-1">{receiptNotes}</div>}
                 </div>
              )}

              {/* Cancellation */}
              {cancellationDate && (
                 <div className="border border-red-200 bg-red-50 p-4 mb-2">
                    <div className="flex justify-between items-center">
                       <span className="text-xs font-black uppercase text-red-800">Movement Cancelled</span>
                       <span className="text-[10px] font-mono text-red-700">{cancellationDate}</span>
                    </div>
                    <div className="text-[10px] mt-1 text-red-600">Reason Code: {cancellationReasonCode}</div>
                 </div>
              )}
           </div>
        )}

        {/* --- Customs References --- */}
        <div className="grid grid-cols-2 border border-gray-300 mt-6 bg-gray-50">
           <div className="p-3 border-r border-gray-300">
              <label className="block text-[8px] uppercase font-black text-gray-400 mb-1">Import Reference (MRN)</label>
              <div className="font-mono font-bold text-xs">{importMrn || "N/A"}</div>
           </div>
           <div className="p-3">
              <label className="block text-[8px] uppercase font-black text-gray-400 mb-1">Export Reference (MRN)</label>
              <div className="font-mono font-bold text-xs">{exportMrn || "N/A"}</div>
           </div>
        </div>

        {/* --- Footer & Verification --- */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-[9px] font-bold text-gray-400 uppercase tracking-widest">
          <div>EU EMCS / EC 684/2009 Standard</div>
          <div className="flex items-center space-x-4">
             <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-blue-900 font-bold">Valid e-AD Credential</span>
             </div>
             <div className="flex items-center space-x-2">
               <span>Powered by</span>
               <span className="text-[11px] font-black text-blue-900 tracking-tighter uppercase">Chaindox</span>
             </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}