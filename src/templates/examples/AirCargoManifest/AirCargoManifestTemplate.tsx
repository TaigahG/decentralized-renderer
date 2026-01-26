import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { AirCargoManifest, AirCargoManifestSchema, Measurement, ManifestAWBItem } from "./types";

export const AirCargoManifestTemplate: FunctionComponent<
  TemplateProps<AirCargoManifestSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as AirCargoManifest;

  const {
    airlinePrefix,
    flightNumber,
    dateOfFlight,
    aircraftRegistration,
    ownerOperator,
    pointOfLoading,
    pointOfUnloading,
    awbList = [],
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
    m?.value ? `${m.value.toFixed(1)} ${m.unit || "kg"}` : "-";

  const Label = ({ children }: { children: React.ReactNode }) => (
    <div className="text-[9px] uppercase font-bold text-gray-500 mb-0.5 tracking-wider leading-none">
      {children}
    </div>
  );

  // Group items by ULD if ULD is present, otherwise put them in "Bulk"
  const uldGroups: Record<string, ManifestAWBItem[]> = {};
  const bulkItems: ManifestAWBItem[] = [];

  awbList.forEach(item => {
    if (item.uldNumber) {
      if (!uldGroups[item.uldNumber]) uldGroups[item.uldNumber] = [];
      uldGroups[item.uldNumber].push(item);
    } else {
      bulkItems.push(item);
    }
  });

  // Calculate Totals
  const totalPieces = awbList.reduce((acc, item) => acc + (item.numberOfPieces || 0), 0);
  const totalWeight = awbList.reduce((acc, item) => acc + (item.weight?.value || 0), 0);

  return (
    <Wrapper data-testid="air-cargo-manifest-template">
      <div className="max-w-[210mm] mx-auto bg-white text-black p-8 font-sans antialiased box-border">
        
        {/* Main Document Border */}
        <div className="border-2 border-black">
          
          {/* Header Section */}
          <div className="flex border-b border-black">
             <div className="w-2/3 p-4">
                <h1 className="text-2xl font-bold uppercase tracking-tight mb-2">Air Cargo Manifest</h1>
                <div className="text-xs font-bold uppercase text-gray-600">{display(ownerOperator)}</div>
             </div>
             <div className="w-1/3 p-4 border-l border-black bg-gray-50 text-right">
                <Label>Manifest Reference</Label>
                <div className="text-xl font-mono font-bold">
                   {display(airlinePrefix)}{display(flightNumber)} / {formatDate(dateOfFlight).replace(/-/g, '')}
                </div>
             </div>
          </div>

          {/* Flight Details Grid */}
          <div className="grid grid-cols-4 gap-4 p-4 border-b border-black text-xs">
             <div>
                <Label>Flight No.</Label>
                <div className="font-bold text-sm">{display(airlinePrefix)} {display(flightNumber)}</div>
             </div>
             <div>
                <Label>Date</Label>
                <div className="font-bold text-sm">{formatDate(dateOfFlight)}</div>
             </div>
             <div>
                <Label>Registration</Label>
                <div className="font-bold">{display(aircraftRegistration)}</div>
             </div>
             <div>
                <Label>Operator</Label>
                <div className="font-bold">{display(ownerOperator)}</div>
             </div>
          </div>

          {/* Routing Strip */}
          <div className="flex border-b border-black divide-x divide-black bg-black text-white">
             <div className="w-1/2 p-2 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase opacity-70">Point of Loading</span>
                <span className="text-lg font-bold font-mono">{display(pointOfLoading)}</span>
             </div>
             <div className="w-1/2 p-2 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase opacity-70">Point of Unloading</span>
                <span className="text-lg font-bold font-mono">{display(pointOfUnloading)}</span>
             </div>
          </div>

          {/* Cargo Table */}
          <table className="w-full border-collapse text-[10px]">
             <thead>
                <tr className="bg-gray-100 text-[9px] font-bold uppercase text-center border-b border-black">
                   <th className="py-2 px-2 w-[18%] text-left">AWB Number</th>
                   <th className="py-2 px-2 w-[8%]">Pieces</th>
                   <th className="py-2 px-2 w-[12%]">Weight</th>
                   <th className="py-2 px-2 w-[27%] text-left">Nature of Goods</th>
                   <th className="py-2 px-2 w-[18%]">Handling Codes</th>
                   <th className="py-2 px-2 w-[17%]">ULD / Bulk</th>
                </tr>
             </thead>
             <tbody>
                {/* ULD Cargo Sections */}
                {Object.keys(uldGroups).map((uld) => (
                   <React.Fragment key={uld}>
                      {uldGroups[uld].map((item, idx) => (
                         <tr key={idx} className="border-b border-gray-200">
                            <td className="py-2 px-2 font-mono">{display(item.mawbNumber)}</td>
                            <td className="py-2 px-2 text-center">{display(item.numberOfPieces)}</td>
                            <td className="py-2 px-2 text-center font-mono">{formatWeight(item.weight)}</td>
                            <td className="py-2 px-2 uppercase">{display(item.natureOfGoods)}</td>
                            <td className="py-2 px-2 text-center font-bold">
                               {item.specialHandlingCodes?.join(", ")}
                            </td>
                            <td className="py-2 px-2 text-center font-mono">{uld}</td>
                         </tr>
                      ))}
                   </React.Fragment>
                ))}

                {/* Bulk Cargo Section */}
                {bulkItems.length > 0 && (
                   <React.Fragment>
                      {bulkItems.map((item, idx) => (
                         <tr key={idx} className="border-b border-gray-200">
                            <td className="py-2 px-2 font-mono">{display(item.mawbNumber)}</td>
                            <td className="py-2 px-2 text-center">{display(item.numberOfPieces)}</td>
                            <td className="py-2 px-2 text-center font-mono">{formatWeight(item.weight)}</td>
                            <td className="py-2 px-2 uppercase">{display(item.natureOfGoods)}</td>
                            <td className="py-2 px-2 text-center font-bold">
                               {item.specialHandlingCodes?.join(", ")}
                            </td>
                            <td className="py-2 px-2 text-center">BULK</td>
                         </tr>
                      ))}
                   </React.Fragment>
                )}

                {/* Empty state */}
                {awbList.length === 0 && (
                   <tr>
                      <td colSpan={6} className="p-12 text-center text-gray-400 italic">
                         No cargo manifest details available
                      </td>
                   </tr>
                )}

                {/* Spacer row for minimum height */}
                {awbList.length > 0 && awbList.length < 8 && (
                   <tr>
                      <td colSpan={6} className="h-[200px]"></td>
                   </tr>
                )}
             </tbody>
             <tfoot>
                <tr className="bg-black text-white text-xs font-bold uppercase">
                   <td className="py-2 px-2 text-right">Total:</td>
                   <td className="py-2 px-2 text-center">{totalPieces} PCS</td>
                   <td className="py-2 px-2 text-center">{totalWeight.toFixed(1)} KG</td>
                   <td colSpan={3}></td>
                </tr>
             </tfoot>
          </table>

          {/* Captain's Declaration */}
          <div className="p-6 pt-8 pb-8">
             <div className="flex gap-12 items-start">
                {/* Declaration Text */}
                <div className="flex-1 text-[10px] leading-relaxed text-gray-600">
                   <p className="mb-3">
                      <span className="text-red-600 font-bold">DECLARATION:</span> I hereby certify that the information contained in this manifest regarding the above flight is true and correct to the best of my knowledge.
                   </p>
                   <p>
                      All Dangerous Goods and Special Cargo have been inspected and loaded in accordance with IATA Regulations.
                   </p>
                </div>

                {/* Signature Area */}
                <div className="w-[280px] flex-shrink-0 text-right">
                   <Label>Signature of Pilot in Command / Station Manager</Label>
                   <div className="h-16 border-b border-black mt-2 mb-2"></div>
                   <div className="text-[10px] italic text-gray-500">
                      Executed at {display(pointOfLoading)}, {formatDate(dateOfFlight)}
                   </div>
                </div>
             </div>
          </div>

        </div>
        
        {/* Document Footer */}
        <div className="mt-2 flex justify-between text-[8px] text-gray-400 font-bold uppercase">
           <div>IATA Standard Cargo Manifest</div>
           <div>Page 1 of 1</div>
        </div>

      </div>
    </Wrapper>
  );
};