import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { BillOfLadingDocument, BillOfLadingSchema } from "./types";

/**
 * Professional Monochrome Bill of Lading Template
 * Designed for printability and industry standards (UN Layout Key style)
 */
export const BillOfLadingTemplate: FunctionComponent<
  TemplateProps<BillOfLadingSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as BillOfLadingDocument;

  const {
    bolId,
    documentIdentifier,
    bookingReference,
    houseWaybillId,
    transportContractNumber,
    contractNumber,
    freightForwarderReference,
    issueDate,
    loadingDate,
    estimatedDeparture,
    actualDepartureDate,
    estimatedArrival,
    actualArrivalDate,
    buyerName,
    buyerAddress,
    consignorName,
    consignorAddress,
    consigneeName,
    consigneeAddress,
    carrierName,
    carrierLicenseNumber,
    notifyPartyName,
    notifyPartyContact,
    despatchAddress,
    despatchCountryCode,
    deliveryAddress,
    deliveryCountryCode,
    unloadingPortCode,
    unloadingCountry,
    exportationCountry,
    originCountry,
    goodsDescription,
    packagingType,
    shippingMarks,
    netWeight,
    journeyIdentifier,
    transportMeansId,
    vehicleRegistration,
    containerSizeType,
    containerStatus,
    equipmentIdentifier,
    sealIdentifier,
    tradeTermsCode,
    tradeTermsDescription,
    freightCharges,
    collectCharges,
    prepaidAmount,
  } = data;

  // --- Helpers ---
  const display = (value: any) => (value ? String(value) : "");
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    return new Date(dateStr).toISOString().split("T")[0];
  };
  const formatMoney = (val?: string | number) => {
    if (val === undefined || val === null) return "";
    return `$${Number(val).toFixed(2)}`;
  };

  // Reusable Label Component for consistency
  const Label = ({ children }: { children: React.ReactNode }) => (
    <div className="text-[10px] uppercase font-bold text-gray-500 mb-0.5 tracking-wider">
      {children}
    </div>
  );

  // Reusable Field Component
  const Field = ({ label, value, className = "" }: any) => (
    <div className={`mb-2 ${className}`}>
      <Label>{label}</Label>
      <div className="text-xs font-medium text-black min-h-[1rem] break-words">
        {display(value)}
      </div>
    </div>
  );

  return (
    <Wrapper data-testid="bill-of-lading-template">
      <div className="max-w-[210mm] mx-auto bg-white text-black p-8 font-sans antialiased">
        {/* Main Document Border */}
        <div className="border-2 border-black">
          
          {/* Header Row: Shipper (Left) & Reference (Right) */}
          <div className="flex border-b border-black">
            {/* Left Column: Parties */}
            <div className="w-1/2 border-r border-black">
              <div className="p-2 border-b border-black h-32">
                <Label>Shipper / Exporter</Label>
                <div className="text-sm font-bold">{display(consignorName)}</div>
                <div className="text-xs whitespace-pre-wrap">{display(consignorAddress)}</div>
              </div>
              
              <div className="p-2 border-b border-black h-32">
                <Label>Consignee</Label>
                <div className="text-sm font-bold">{display(consigneeName)}</div>
                <div className="text-xs whitespace-pre-wrap">{display(consigneeAddress)}</div>
              </div>

              <div className="p-2 h-32">
                <Label>Notify Party</Label>
                <div className="text-sm font-bold">{display(notifyPartyName)}</div>
                <div className="text-xs whitespace-pre-wrap">{display(notifyPartyContact)}</div>
              </div>
            </div>

            {/* Right Column: References & Header Info */}
            <div className="w-1/2 flex flex-col">
              <div className="p-4 border-b-2 border-black flex justify-between items-center bg-gray-50">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">BILL OF LADING</h1>
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Original</span>
                </div>
                <div className="text-right">
                  <Label>Bill of Lading No.</Label>
                  <div className="text-lg font-mono font-bold">{display(bolId)}</div>
                </div>
              </div>

              <div className="flex-1 p-2">
                <div className="grid grid-cols-2 gap-4">
                   <Field label="Booking Reference" value={bookingReference} />
                   <Field label="Document ID" value={documentIdentifier} />
                   <Field label="Export References" value={transportContractNumber} />
                   <Field label="Contract Number" value={contractNumber} />
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <Label>Carrier</Label>
                  <div className="text-sm font-bold uppercase">{display(carrierName)}</div>
                  {carrierLicenseNumber && (
                    <div className="text-xs text-gray-600">License: {carrierLicenseNumber}</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Logistics Row: Vessel & Ports */}
          <div className="flex border-b border-black divide-x divide-black">
            <div className="w-1/4 p-2">
              <Field label="Pre-Carriage By" value={transportMeansId} />
            </div>
            <div className="w-1/4 p-2">
              <Field label="Place of Receipt" value={despatchAddress} />
            </div>
            <div className="w-1/4 p-2">
              <Field label="Vessel / Voyage No." value={`${display(journeyIdentifier)}`} />
            </div>
            <div className="w-1/4 p-2">
              <Field label="Port of Loading" value={loadingDate ? `${formatDate(loadingDate)}` : "See Below"} />
            </div>
          </div>

          <div className="flex border-b border-black divide-x divide-black">
             <div className="w-1/2 p-2">
                <Field label="Port of Discharge" value={unloadingPortCode} />
             </div>
             <div className="w-1/2 p-2">
                <Field label="Place of Delivery" value={deliveryAddress} />
             </div>
          </div>

          {/* Main Cargo Table Area */}
          <div className="border-b border-black min-h-[300px]">
             {/* Table Headers */}
             <div className="flex border-b border-black bg-gray-100">
                <div className="w-1/4 p-2 border-r border-black"><Label>Marks & Nos / Container No.</Label></div>
                <div className="w-1/4 p-2 border-r border-black"><Label>No. & Kind of Packages</Label></div>
                <div className="w-1/3 p-2 border-r border-black"><Label>Description of Goods</Label></div>
                <div className="w-1/6 p-2 text-right"><Label>Gross Weight (KG)</Label></div>
             </div>

             {/* Table Row (Single row due to flat data structure) */}
             <div className="flex items-start">
                {/* Marks & Container Info */}
                <div className="w-1/4 p-2 text-xs border-r border-black min-h-[250px] space-y-4">
                   <div>
                     <span className="font-bold block mb-1">Marks:</span>
                     {display(shippingMarks) || "N/M"}
                   </div>
                   <div className="pt-4 border-t border-dashed border-gray-300">
                      <span className="font-bold block mb-1">Container:</span>
                      {display(equipmentIdentifier)} <br/>
                      {containerSizeType && <span className="text-gray-500">{containerSizeType}</span>}
                   </div>
                   <div>
                      <span className="font-bold block mb-1">Seal:</span>
                      {display(sealIdentifier)}
                   </div>
                </div>

                {/* Packages */}
                <div className="w-1/4 p-2 text-xs border-r border-black min-h-[250px]">
                   <div className="font-bold text-sm">1</div> {/* Assumed 1 shipment lot */}
                   <div>{display(packagingType)}</div>
                </div>

                {/* Description */}
                <div className="w-1/3 p-2 text-xs border-r border-black min-h-[250px]">
                   <p className="uppercase font-medium">{display(goodsDescription)}</p>
                   {tradeTermsCode && (
                     <div className="mt-4 text-[10px] text-gray-500">
                       Incoterms: {tradeTermsCode} - {tradeTermsDescription}
                     </div>
                   )}
                </div>

                {/* Weight */}
                <div className="w-1/6 p-2 text-xs text-right font-mono">
                   {display(netWeight)}
                </div>
             </div>
          </div>

          {/* Bottom Section: Charges & Dates */}
          <div className="flex border-b border-black">
             {/* Left: Freight Charges */}
             <div className="w-1/2 border-r border-black p-2">
                <Label>Freight & Charges</Label>
                <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                   <div className="text-gray-600">Freight:</div>
                   <div className="text-right font-mono">{formatMoney(freightCharges)}</div>
                   
                   <div className="text-gray-600">Prepaid:</div>
                   <div className="text-right font-mono">{formatMoney(prepaidAmount)}</div>
                   
                   <div className="text-gray-600 font-bold">Collect:</div>
                   <div className="text-right font-mono font-bold">{formatMoney(collectCharges)}</div>
                </div>
             </div>

             {/* Right: Dates & Signature Placeholder */}
             <div className="w-1/2 p-2 relative">
                <div className="mb-4">
                  <Label>Place and Date of Issue</Label>
                  <div className="text-sm">
                    {originCountry || "Unknown"}, {formatDate(issueDate)}
                  </div>
                </div>
                {/*
                <div className="mt-8 border-t border-black pt-2">
                   <Label>Signed for the Carrier</Label>
                   <div className="h-12"></div> // this is for the signed
                   <div className="text-[10px] text-center italic">As Agent / Master</div>
                </div>
                */}
             </div>
          </div>
        </div>

        {/* Footer / Disclaimer */}
        <div className="mt-4 text-[10px] text-justify text-gray-500 leading-tight">
           RECEIVED by the Carrier the Goods as specified above in apparent good order and condition unless otherwise stated, to be transported to such place as agreed, authorized or permitted herein and subject to all the terms and conditions appearing on the front and reverse of this Bill of Lading to which the Merchant agrees by accepting this Bill of Lading, any local privileges and customs notwithstanding.
        </div>
      </div>
    </Wrapper>
  );
};