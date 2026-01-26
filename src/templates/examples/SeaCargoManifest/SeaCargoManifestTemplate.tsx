import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { SeaCargoManifest, SeaCargoManifestSchema, Measurement } from "./types";

export const SeaCargoManifestTemplate: FunctionComponent<
  TemplateProps<SeaCargoManifestSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as SeaCargoManifest;

  const {
    nameOfShip,
    imoNumber,
    voyageNumber,
    flagState,
    callSign,
    portOfLoading,
    portOfDischarge,
    dateOfArrival,
    dateOfDeparture,
    manifestItems = [],
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
    m?.value ? `${m.value.toFixed(2)} ${m.unit || "kg"}` : "-";

  const Label = ({ children }: { children: React.ReactNode }) => (
    <div className="text-[9px] uppercase font-bold text-gray-500 mb-0.5 tracking-wider leading-none">
      {children}
    </div>
  );

  // Calculate Totals for Footer
  const totalPackages = manifestItems.reduce((acc, item) => acc + (item.numberOfPackages || 0), 0);
  const totalWeight = manifestItems.reduce((acc, item) => acc + (item.grossWeight?.value || 0), 0);

  return (
    <Wrapper data-testid="sea-cargo-manifest-template">
      <div className="max-w-[210mm] mx-auto bg-white text-black p-8 font-sans antialiased box-border">
        
        {/* Main Document Border */}
        <div className="border-2 border-black">
          
          {/* Header Section (IMO FAL Form 2 Style) */}
          <div className="flex border-b border-black">
             <div className="w-2/3 p-4">
                <h1 className="text-2xl font-bold uppercase tracking-tight mb-4">Cargo Manifest</h1>
                
                <div className="grid grid-cols-2 gap-4">
                   <div>
                      <Label>Name of Ship</Label>
                      <div className="font-bold text-sm uppercase">{display(nameOfShip)}</div>
                   </div>
                   <div>
                      <Label>Voyage Number</Label>
                      <div className="font-bold text-sm">{display(voyageNumber)}</div>
                   </div>
                   <div>
                      <Label>Flag State</Label>
                      <div className="text-xs">{display(flagState)}</div>
                   </div>
                   <div>
                      <Label>Call Sign / IMO No.</Label>
                      <div className="text-xs">{display(callSign)} / {display(imoNumber)}</div>
                   </div>
                </div>
             </div>

             <div className="w-1/3 border-l border-black p-4 bg-gray-50">
                <div className="mb-4">
                   <Label>Port of Loading</Label>
                   <div className="font-bold text-sm uppercase">{display(portOfLoading)}</div>
                   <div className="text-[10px] text-gray-500">Dep: {formatDate(dateOfDeparture)}</div>
                </div>
                <div>
                   <Label>Port of Discharge</Label>
                   <div className="font-bold text-sm uppercase">{display(portOfDischarge)}</div>
                   <div className="text-[10px] text-gray-500">Arr: {formatDate(dateOfArrival)}</div>
                </div>
             </div>
          </div>

          {/* Table Header */}
          <div className="flex bg-black text-white text-[10px] font-bold uppercase py-1 text-center">
             <div className="w-[15%] border-r border-white">B/L Number</div>
             <div className="w-[20%] border-r border-white">Marks & Nos</div>
             <div className="w-[10%] border-r border-white">Pkgs</div>
             <div className="w-[35%] border-r border-white">Description of Goods</div>
             <div className="w-[10%] border-r border-white">Gross Wt</div>
             <div className="w-[10%]">Meas. (CBM)</div>
          </div>

          {/* Table Body (The Manifest List) */}
          <div className="min-h-[500px]">
             {manifestItems.length > 0 ? (
                manifestItems.map((item, idx) => (
                   <div key={idx} className="flex text-xs border-b border-gray-200 last:border-black odd:bg-white even:bg-gray-50 items-stretch">
                      <div className="w-[15%] p-2 border-r border-gray-200 font-mono font-bold text-[10px]">
                         {display(item.blNumber)}
                      </div>
                      <div className="w-[20%] p-2 border-r border-gray-200 text-[10px] break-words font-mono text-gray-600">
                         {display(item.marksAndNumbers)}
                      </div>
                      <div className="w-[10%] p-2 border-r border-gray-200 text-center font-bold">
                         {display(item.numberOfPackages)} <span className="text-[9px] font-normal uppercase block">{display(item.kindOfPackages)}</span>
                      </div>
                      <div className="w-[35%] p-2 border-r border-gray-200 uppercase text-[10px] whitespace-pre-wrap">
                         {display(item.descriptionOfGoods)}
                      </div>
                      <div className="w-[10%] p-2 border-r border-gray-200 text-right font-mono">
                         {formatWeight(item.grossWeight)}
                      </div>
                      <div className="w-[10%] p-2 text-right font-mono">
                         {formatWeight(item.measurement)}
                      </div>
                   </div>
                ))
             ) : (
                <div className="p-10 text-center text-gray-400 italic">No cargo items listed</div>
             )}
          </div>

          {/* Totals Footer */}
          <div className="flex border-b border-black bg-gray-100 font-bold text-xs uppercase p-2">
             <div className="w-[35%] text-right pr-4">Total Cargo on Board:</div>
             <div className="w-[10%] text-center">{totalPackages} Pkgs</div>
             <div className="w-[35%]"></div>
             <div className="w-[10%] text-right font-mono">{totalWeight.toFixed(2)}</div>
             <div className="w-[10%]"></div>
          </div>

          {/* Master's Declaration */}
          <div className="p-6 flex justify-between items-end">
             <div className="w-2/3 text-[10px] text-justify pr-8 leading-tight text-gray-600">
                I declare that this declaration and the particulars listed in this Cargo Manifest 
                are, to the best of my knowledge and belief, true and complete. 
                This document serves as the General Declaration for Customs purposes.
             </div>
             
             <div className="w-1/3 text-center">
                <Label>Signature of Master / Authorized Agent</Label>
                <div className="h-16 border-b border-black mb-1"></div>
                <div className="text-[10px] italic">Date: {formatDate(new Date().toISOString())}</div>
             </div>
          </div>

        </div>
        
        {/* Page Footer */}
        <div className="mt-2 flex justify-between text-[8px] text-gray-400 font-bold uppercase">
           <div>IMO FAL Form 2 Compatible</div>
           <div>Page 1 of 1</div>
        </div>

      </div>
    </Wrapper>
  );
};