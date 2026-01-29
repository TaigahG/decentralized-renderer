import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { Measurement, PackingList, PackingListSchema } from "./types";

export const PackingListTemplate: FunctionComponent<
  TemplateProps<PackingListSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as PackingList;

  const {
    packingListNumber,
    invoiceReferenceNumber,
    dateOfIssue,
    buyerOrderNumber,
    poNumber,
    seller: {
      name: sellerName,
      address: sellerAddress,
      contactPerson: sellerContact,
    } = {},
    buyer: {
      name: buyerName,
      billToAddress,
      shipToAddress,
      contactPerson: buyerContact,
    } = {},
    transportDetails: {
      modeOfTransport,
      billOfLadingNumber,
      vesselFlightName,
      portOfLoading,
      portOfDischarge,
    } = {},
    containers = [],
    totals: {
      totalNetWeight,
      totalGrossWeight,
      totalVolume,
      totalPackages,
      totalQuantity,
    } = {},
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

  const formatWeight = (m?: Measurement) => 
    m?.value ? `${m.value} ${m.unit || "kg"}` : "-";

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
    <Wrapper data-testid="packing-list-template">
      <div className="max-w-[210mm] mx-auto bg-white text-black p-8 font-sans antialiased box-border">
        
        {/* Main Document Border */}
        <div className="border-2 border-black">
          
          {/* Header */}
          <div className="flex border-b border-black">
             <div className="w-1/2 p-4 border-r border-black">
                <Label>Seller / Exporter</Label>
                <div className="text-sm font-bold mt-1">{display(sellerName)}</div>
                <div className="text-xs mt-1 whitespace-pre-wrap">{display(sellerAddress)}</div>
                {sellerContact && (
                   <div className="text-[10px] mt-2 text-gray-500">
                      Attn: {sellerContact.name} {sellerContact.phone && `(${sellerContact.phone})`}
                   </div>
                )}
             </div>
             <div className="w-1/2 p-4 bg-gray-50 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <div>
                      <h1 className="text-3xl font-bold uppercase tracking-tight">Packing List</h1>
                   </div>
                   <div className="text-right">
                      <Label>Packing List No.</Label>
                      <div className="text-lg font-mono font-bold">{display(packingListNumber)}</div>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                   <Field label="Date" value={formatDate(dateOfIssue)} />
                   <Field label="Invoice Ref" value={invoiceReferenceNumber} />
                   <Field label="Buyer Order No" value={buyerOrderNumber} />
                   <Field label="PO Number" value={poNumber} />
                </div>
             </div>
          </div>

          {/* Buyer Details */}
          <div className="flex border-b border-black">
             <div className="w-1/2 p-4 border-r border-black">
                <Label>Bill To (Buyer)</Label>
                <div className="text-sm font-bold mt-1">{display(buyerName)}</div>
                <div className="text-xs mt-1 whitespace-pre-wrap">{display(billToAddress)}</div>
             </div>
             <div className="w-1/2 p-4">
                <Label>Ship To (Delivery Address)</Label>
                {/* Often same as Bill To, but specific field provided */}
                <div className="text-xs mt-1 whitespace-pre-wrap">{display(shipToAddress || billToAddress)}</div>
                {buyerContact && (
                   <div className="text-[10px] mt-2 text-gray-500">
                      Contact: {buyerContact.name} / {buyerContact.phone}
                   </div>
                )}
             </div>
          </div>

          {/* Transport Details */}
          <div className="flex border-b border-black divide-x divide-black bg-gray-100">
             <div className="w-1/4 p-2"><Field label="Mode" value={modeOfTransport} /></div>
             <div className="w-1/4 p-2"><Field label="Vessel / Flight" value={vesselFlightName} /></div>
             <div className="w-1/4 p-2"><Field label="Port of Loading" value={portOfLoading} /></div>
             <div className="w-1/4 p-2"><Field label="Final Destination" value={portOfDischarge} /></div>
          </div>
          {billOfLadingNumber && (
             <div className="border-b border-black p-2 bg-gray-100">
                <Field label="Bill of Lading / Waybill Number" value={billOfLadingNumber} />
             </div>
          )}

          {/* Table Headers */}
          <div className="flex border-b border-black bg-gray-200 text-xs">
             <div className="w-1/5 p-2 border-r border-black font-bold uppercase text-[10px]">Marks & Numbers</div>
             <div className="w-1/6 p-2 border-r border-black font-bold uppercase text-[10px]">Qty & Packages</div>
             <div className="w-5/12 p-2 border-r border-black font-bold uppercase text-[10px]">Description of Goods</div>
             <div className="w-1/12 p-2 border-r border-black font-bold uppercase text-[10px] text-right">Net Wt</div>
             <div className="w-1/12 p-2 text-right font-bold uppercase text-[10px]">Gr Wt</div>
          </div>

          {/* The Content: Nested Mapping (Container -> Package -> Goods) */}
          <div className="min-h-[400px]">
             {containers.length > 0 ? (
                containers.map((container, cIdx) => (
                   <div key={cIdx} className="border-b border-black last:border-0">
                      
                      {/* Container Header Bar */}
                      {container.containerNumber && (
                         <div className="bg-gray-50 p-1 px-2 border-b border-gray-300 flex gap-4 text-[10px] font-mono font-bold text-gray-700">
                            <span>CNTR: {container.containerNumber}</span>
                            <span>SEAL: {container.sealNumber || "-"}</span>
                            <span>TYPE: {container.containerType || "-"}</span>
                         </div>
                      )}

                      {/* Packages Loop */}
                      {container.packages && container.packages.map((pkg, pIdx) => (
                         <div key={pIdx} className="flex text-xs border-b border-gray-100 last:border-0 hover:bg-gray-50">
                            {/* Marks */}
                            <div className="w-1/5 p-2 border-r border-black break-words font-mono text-[10px]">
                               {display(pkg.marksAndNumbers)}
                            </div>

                            {/* Qty & Pkg Type */}
                            <div className="w-1/6 p-2 border-r border-black">
                               <div className="font-bold">{pkg.numberOfPackages}</div>
                               <div className="uppercase text-[10px]">{pkg.packageType}</div>
                               {pkg.dimensions && (
                                  <div className="mt-2 text-[9px] text-gray-500">
                                     {pkg.dimensions.length}x{pkg.dimensions.width}x{pkg.dimensions.height} {pkg.dimensions.unit}
                                  </div>
                               )}
                            </div>

                            {/* Goods Loop (Inside Description Column) */}
                            <div className="w-5/12 border-r border-black">
                               {pkg.goods && pkg.goods.map((item, gIdx) => (
                                  <div key={gIdx} className="p-2 border-b border-gray-100 last:border-0">
                                     <div className="font-bold uppercase text-sm">{display(item.productDescription)}</div>
                                     <div className="flex gap-4 mt-1 text-[10px] text-gray-600">
                                        {item.sku && <span>SKU: {item.sku}</span>}
                                        {item.partNumber && <span>PN: {item.partNumber}</span>}
                                     </div>
                                     <div className="mt-1 font-mono text-xs">
                                        Qty: {item.quantityInPackage} {item.unitOfMeasure}
                                     </div>
                                  </div>
                               ))}
                            </div>

                            {/* Weights */}
                            <div className="w-1/12 p-2 border-r border-black text-right font-mono">
                               {formatWeight(pkg.packageNetWeight)}
                            </div>
                            <div className="w-1/12 p-2 text-right font-mono">
                               {formatWeight(pkg.packageGrossWeight)}
                            </div>
                         </div>
                      ))}
                   </div>
                ))
             ) : (
                <div className="p-8 text-center text-gray-400 italic">No packing details available</div>
             )}
          </div>

          {/* Totals Footer */}
          <div className="border-t-2 border-black flex justify-end bg-gray-50 p-4">
             <div className="w-1/2 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                
                <div className="text-right text-gray-600">Total Packages:</div>
                <div className="text-right font-bold">{display(totalPackages)}</div>

                <div className="text-right text-gray-600">Total Quantity:</div>
                <div className="text-right font-bold">{display(totalQuantity)}</div>

                <div className="col-span-2 border-t border-gray-300 my-1"></div>

                <div className="text-right text-gray-600">Total Net Weight:</div>
                <div className="text-right font-bold font-mono">{formatWeight(totalNetWeight)}</div>

                <div className="text-right text-gray-600">Total Gross Weight:</div>
                <div className="text-right font-bold font-mono text-base">{formatWeight(totalGrossWeight)}</div>

                <div className="text-right text-gray-600">Total Volume:</div>
                <div className="text-right font-bold font-mono">
                   {totalVolume?.value ? `${totalVolume.value} ${totalVolume.unit}` : "-"}
                </div>
             </div>
          </div>
          
          {/* Signatures */}
          <div className="flex border-t border-black p-6 mt-0">
             <div className="w-1/2">
                 <Label>Remarks</Label>
                 <p className="text-[10px] text-gray-500 italic max-w-xs mt-1">
                    All goods listed herein are packed in good order and condition. 
                    Please verify contents immediately upon receipt.
                 </p>
             </div>
             <div className="w-1/2 text-right">
                 <Label>Authorized Signature</Label>
                 <div className="h-16 border-b border-black mb-2"></div>
                 <div className="text-xs font-bold uppercase">{display(sellerName)}</div>
             </div>
          </div>

        </div>
      </div>
    </Wrapper>
  );
};