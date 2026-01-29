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
    waybillNumber,
    bookingReference,
    shipperReference,
    exportReferences: {
      taxId,
      freightForwarderId,
      customsReferenceNumber
    } = {},
    shipper: {
      name: shipperName,
      address: shipperAddress,
    } = {},
    consignee: {
      name: consigneeName,
      address: consigneeAddress,
      contactPerson: consigneeContact,
    } = {},
    notifyParty: {
      name: notifyPartyName,
      address: notifyPartyAddress,
    } = {},
    transportDetails: {
      vesselName,
      voyageNumber,
      placeOfReceipt,
      portOfLoading,
      portOfDischarge,
      placeOfDelivery,
      shippedOnBoardDate,
    } = {},
    goodsDetails = [],
    chargesAndLiability: {
      freightPayableAt,
      freightTerm,
      declaredValue,
    } = {},
    carrierInformation: {
      carrierName,
      carrierAddress,
      signatureLocation,
      signatureDate,
    } = {},
    nonNegotiableStatement,
  } = data;

  // --- Helpers ---
  const display = (value: any) => (value ? String(value) : "");
  
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    try {
      return new Date(dateStr).toISOString().split("T")[0];
    } catch (e) {
      return dateStr;
    }
  };

  const formatMoney = (val?: number | string, curr?: string) => {
    if (val === undefined || val === null) return "";
    const num = Number(val);
    const c = curr || "";
    return isNaN(num) ? String(val) : `${c} ${num.toFixed(2)}`;
  };

  const Label = ({ children }: { children: React.ReactNode }) => (
    <div className="text-[9px] uppercase font-bold text-gray-500 mb-0.5 tracking-wider leading-none">
      {children}
    </div>
  );

  const Field = ({ label, value, className = "" }: any) => (
    <div className={`mb-2 ${className}`}>
      <Label>{label}</Label>
      <div className="text-xs font-medium text-black min-h-[1rem] break-words">
        {display(value)}
      </div>
    </div>
  );

  return (
    <Wrapper data-testid="sea-waybill-template">
      <div className="max-w-[210mm] mx-auto bg-white text-black p-8 font-sans antialiased box-border">
        
        {/* Main Document Border */}
        <div className="border-2 border-black">
          
          {/* Header Row: Shipper & References */}
          <div className="flex border-b border-black">
             {/* Left Column: Parties */}
             <div className="w-1/2 border-r border-black">
                <div className="p-2 border-b border-black h-32 overflow-hidden">
                   <Label>Shipper</Label>
                   <div className="text-sm font-bold mt-1">{display(shipperName)}</div>
                   <div className="text-xs mt-1 whitespace-pre-wrap">{display(shipperAddress)}</div>
                </div>

                <div className="p-2 border-b border-black h-32 overflow-hidden bg-gray-50">
                   <Label>Consignee (Not to Order)</Label>
                   <div className="text-sm font-bold mt-1">{display(consigneeName)}</div>
                   <div className="text-xs mt-1 whitespace-pre-wrap">{display(consigneeAddress)}</div>
                   {consigneeContact?.name && (
                      <div className="text-[10px] mt-1 text-gray-600">Attn: {consigneeContact.name}</div>
                   )}
                </div>

                <div className="p-2 h-32 overflow-hidden">
                   <Label>Notify Party</Label>
                   <div className="text-sm font-bold mt-1">{display(notifyPartyName)}</div>
                   <div className="text-xs mt-1 whitespace-pre-wrap">{display(notifyPartyAddress)}</div>
                </div>
             </div>

             {/* Right Column: Waybill Details */}
             <div className="w-1/2 flex flex-col">
                <div className="p-4 border-b-2 border-black flex justify-between items-center bg-gray-100">
                   <div>
                      <h1 className="text-2xl font-bold tracking-tight uppercase">Sea Waybill</h1>
                      <span className="text-[10px] font-bold text-red-600 uppercase border border-red-600 px-1 inline-block mt-1">
                         Non-Negotiable
                      </span>
                   </div>
                   <div className="text-right">
                      <Label>Waybill Number</Label>
                      <div className="text-lg font-mono font-bold">{display(waybillNumber)}</div>
                   </div>
                </div>

                <div className="flex-1 p-2">
                   <div className="grid grid-cols-2 gap-4">
                      <Field label="Booking Ref" value={bookingReference} />
                      <Field label="Shipper Ref" value={shipperReference} />
                      <Field label="Forwarder Ref" value={freightForwarderId} />
                      <Field label="Tax/Export ID" value={taxId} />
                   </div>
                   {customsReferenceNumber && (
                      <div className="mt-2">
                         <Field label="Customs Ref" value={customsReferenceNumber} />
                      </div>
                   )}

                   <div className="mt-6 pt-4 border-t border-gray-300">
                      <Label>Carrier</Label>
                      <div className="text-sm font-bold uppercase mt-1">{display(carrierName)}</div>
                      <div className="text-xs text-gray-500 whitespace-pre-wrap">{display(carrierAddress)}</div>
                   </div>
                </div>
             </div>
          </div>

          {/* Logistics Row */}
          <div className="flex border-b border-black divide-x divide-black">
             <div className="w-1/4 p-2"><Field label="Place of Receipt" value={placeOfReceipt} /></div>
             <div className="w-1/4 p-2"><Field label="Vessel / Voyage" value={`${display(vesselName)} ${display(voyageNumber)}`} /></div>
             <div className="w-1/4 p-2"><Field label="Port of Loading" value={portOfLoading} /></div>
             <div className="w-1/4 p-2"><Field label="Port of Discharge" value={portOfDischarge} /></div>
          </div>
          <div className="border-b border-black p-2">
             <Field label="Place of Delivery" value={placeOfDelivery} />
          </div>

          {/* Goods Grid Header */}
          <div className="flex border-b border-black bg-gray-100 text-xs">
             <div className="w-1/4 p-2 border-r border-black font-bold uppercase text-[10px]">Container & Seals</div>
             <div className="w-1/6 p-2 border-r border-black font-bold uppercase text-[10px]">Qty & Pkgs</div>
             <div className="w-5/12 p-2 border-r border-black font-bold uppercase text-[10px]">Description of Goods</div>
             <div className="w-1/6 p-2 text-right font-bold uppercase text-[10px]">Gross Weight</div>
          </div>

          {/* Goods Grid Body */}
          <div className="border-b border-black min-h-[300px]">
             {goodsDetails.length > 0 ? (
                goodsDetails.map((item, index) => (
                   <div key={index} className="flex items-start text-xs border-b border-gray-100 last:border-0">
                      {/* Container Info */}
                      <div className="w-1/4 p-2 border-r border-black min-h-[4rem] font-mono">
                         <div className="font-bold">{display(item.containerNumber)}</div>
                         {item.sealNumber && <div className="text-gray-500 mt-1">Seal: {item.sealNumber}</div>}
                         <div className="mt-2 text-[10px] text-gray-400 break-words">{display(item.marksAndNumbers)}</div>
                      </div>
                      
                      {/* Packages */}
                      <div className="w-1/6 p-2 border-r border-black min-h-[4rem]">
                         {display(item.numberOfPackages)} {display(item.kindOfPackages)}
                      </div>
                      
                      {/* Description */}
                      <div className="w-5/12 p-2 border-r border-black min-h-[4rem] whitespace-pre-wrap uppercase">
                         {display(item.goodsDescription)}
                         {item.hsCode && <div className="mt-1 text-gray-500 text-[10px]">HS: {item.hsCode}</div>}
                      </div>
                      
                      {/* Weight/Measurement */}
                      <div className="w-1/6 p-2 text-right min-h-[4rem]">
                         <div>{item.grossWeight?.value} {item.grossWeight?.unit}</div>
                         {item.measurement?.value && (
                           <div className="text-gray-500 text-[10px] mt-1">{item.measurement.value} {item.measurement.unit}</div>
                         )}
                      </div>
                   </div>
                ))
             ) : (
                <div className="p-8 text-center text-gray-400 italic">No goods details provided</div>
             )}
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row border-b border-black">
             {/* Charges & Legal */}
             <div className="w-full md:w-1/2 border-r border-black p-3">
                <Label>Freight & Charges</Label>
                <div className="mt-2 text-xs">
                   <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Payable At:</span>
                      <span className="font-bold uppercase">{display(freightPayableAt)}</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-gray-600">Term:</span>
                      <span className="font-bold uppercase">{display(freightTerm)}</span>
                   </div>
                </div>
                
                {declaredValue?.amount && (
                    <div className="mt-4 p-2 border border-gray-300">
                        <Label>Declared Value</Label>
                        <div className="font-mono">{formatMoney(declaredValue.amount, declaredValue.currencyCode)}</div>
                    </div>
                )}
                
                {/* Non-Negotiable Statement */}
                <div className="mt-6 p-2 bg-gray-50 border border-gray-200 text-[9px] text-justify leading-tight">
                   <strong>LEGAL NOTE:</strong> {nonNegotiableStatement || "Unless otherwise stated herein, this Waybill is non-negotiable. The goods are to be delivered to the Consignee named herein, on production of identity. No Bill of Lading has been issued."}
                </div>
             </div>

             {/* Signatures */}
             <div className="w-full md:w-1/2 p-3 flex flex-col justify-between">
                <div>
                   <Label>Shipped On Board Date</Label>
                   <div className="text-sm font-bold">{formatDate(shippedOnBoardDate)}</div>
                </div>
                
                <div className="mt-8">
                   <Label>Place and Date of Issue</Label>
                   <div className="text-xs mb-4">{display(signatureLocation)}, {formatDate(signatureDate)}</div>
                   
                   <Label>Signed for the Carrier</Label>
                   <div className="h-12 border-b border-black mb-1"></div>
                   <div className="text-[10px] text-center italic">As Agent / Master</div>
                </div>
             </div>
          </div>
          
          {/* Footer Clause */}
          <div className="p-2 text-[8px] text-gray-400 text-justify leading-tight">
             RECEIVED by the Carrier the Goods as specified above in apparent good order and condition unless otherwise stated. 
             The goods are to be delivered at the named Place of Delivery, subject to the terms and conditions on the reverse hereof. 
             This Waybill is deemed to be a contract of carriage as defined in Article 1(b) of the Hague-Visby Rules.
          </div>

        </div>
      </div>
    </Wrapper>
  );
};