import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { DangerousGoodsDeclaration, DangerousGoodsDeclarationSchema } from "./types";

export const DangerousGoodsDeclarationTemplate: FunctionComponent<
  TemplateProps<DangerousGoodsDeclarationSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as DangerousGoodsDeclaration;

  const {
    transportDocumentNumber,
    shipper: {
      name: shipperName,
      address: shipperAddress,
      countryCode: shipperCountry,
    } = {},
    consignee: {
      name: consigneeName,
      address: consigneeAddress,
      countryCode: consigneeCountry,
    } = {},
    emergencyContact24h: {
      phoneNumber: emergencyPhone,
      contactName: emergencyContactName,
      organization: emergencyOrg,
    } = {},
    vesselFlightNumber,
    portOfLoading,
    portOfDischarge,
    marinePollutant,
    flashpoint: {
      temperature: flashpointTemp,
      unit: flashpointUnit,
      testMethod: flashpointMethod,
    } = {},
    dangerousGoods = [],
    containerPackingCertificate: {
      declarationStatement,
      containerClean,
      containerDry,
      packagesNotDamaged,
      noIncompatibleSubstances,
      nameOfCompany: packingCompany,
      declarantName,
      signature: packingSignature,
      date: packingDate,
      placeOfPacking,
    } = {},
  } = data;

  // Professional data field component
  const DataField = ({ label, value, className = "", isAlert = false }: { label: string; value?: string | React.ReactNode; className?: string; isAlert?: boolean }) => (
    <div className={`border border-gray-300 p-3 min-h-[85px] ${isAlert ? "bg-red-50 border-red-200" : ""} ${className}`}>
      <label className={`block text-[9px] uppercase font-black mb-2 tracking-widest ${isAlert ? "text-red-600" : "text-gray-400"}`}>
        {label}
      </label>
      <div className={`text-sm font-bold uppercase leading-tight ${isAlert ? "text-red-900" : "text-gray-800"}`}>
        {value || <span className="text-gray-200 font-normal italic lowercase">Not Provided</span>}
      </div>
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-gray-900 border border-gray-200 shadow-2xl my-10">
        
        {/* Header Section */}
        <div className="flex justify-between items-start border-b-4 border-gray-900 pb-6 mb-0">
          <div className="flex-1">
            <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2">
              Dangerous Goods Declaration
            </h1>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
              Multimodal Dangerous Goods Form
            </p>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="bg-gray-900 text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-2">
              Official Document
            </div>
            <p className="text-[10px] uppercase text-gray-400 font-bold mb-1 tracking-widest">Document No.</p>
            <p className="text-lg font-mono font-bold text-blue-900">{transportDocumentNumber || "UNSPECIFIED"}</p>
          </div>
        </div>

        {/* Top Grid: Parties & Emergency */}
        <div className="grid grid-cols-2">
          <DataField 
            label="Shipper" 
            value={`${shipperName}\n${shipperAddress}\n${shipperCountry}`} 
            className="whitespace-pre-line border-t-0 border-l-0"
          />
          <DataField 
            label="24hr Emergency Contact" 
            isAlert={!!emergencyPhone}
            value={
              <div className="space-y-1">
                <div className="text-lg text-red-700">{emergencyPhone}</div>
                <div className="text-[10px] text-red-600 font-bold">{emergencyOrg} / {emergencyContactName}</div>
              </div>
            }
            className="border-t-0 border-r-0 border-l-0"
          />
          <DataField 
            label="Consignee" 
            value={`${consigneeName}\n${consigneeAddress}\n${consigneeCountry}`} 
            className="whitespace-pre-line border-l-0"
          />
          <div className="grid grid-cols-1">
            <div className="border border-gray-300 border-r-0 border-l-0 p-3 h-full bg-gray-50">
               <label className="block text-[9px] uppercase font-black text-gray-400 mb-2 tracking-widest">Transport Requirements</label>
               <div className="flex gap-4">
                  <div className={`px-2 py-1 border text-[10px] font-bold uppercase rounded-sm ${marinePollutant ? "bg-blue-600 text-grey-400 border-blue-700" : "bg-white text-gray-400 border-gray-200"}`}>
                    Marine Pollutant: {marinePollutant ? "Yes" : "No"}
                  </div>
                  {flashpointTemp && (
                    <div className="px-2 py-1 border border-gray-300 bg-white text-[10px] font-bold uppercase rounded-sm">
                      Flashpoint: {flashpointTemp}°{flashpointUnit} ({flashpointMethod})
                    </div>
                  )}
               </div>
            </div>
          </div>
        </div>

        {/* Transport Details */}
        <div className="grid grid-cols-3 border-t border-gray-300">
          <DataField label="Vessel / Flight No." value={vesselFlightNumber} className="border-l-0" />
          <DataField label="Port of Loading" value={portOfLoading} className="border-l-0" />
          <DataField label="Port of Discharge" value={portOfDischarge} className="border-r-0 border-l-0" />
        </div>

        {/* Dangerous Goods Table */}
        <div className="border border-gray-300 border-x-0 mt-0 overflow-hidden">
          <table className="w-full text-left table-fixed">
            <thead className="bg-gray-100 text-[9px] font-black uppercase tracking-widest text-gray-600 border-b border-gray-300">
              <tr>
                <th className="p-3 w-1/12 border-r border-gray-200">UN No.</th>
                <th className="p-3 w-5/12 border-r border-gray-200">Proper Shipping Name / Hazard Description</th>
                <th className="p-3 w-1/12 border-r border-gray-200 text-center">Class</th>
                <th className="p-3 w-1/12 border-r border-gray-200 text-center">PG</th>
                <th className="p-3 w-2/12 border-r border-gray-200 text-center">Qty / Pkgs</th>
                <th className="p-3 w-2/12 text-center">Mass (Gross)</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {dangerousGoods.length > 0 ? dangerousGoods.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-200 last:border-0 hover:bg-yellow-50/30 transition-colors">
                  <td className="p-3 border-r border-gray-200 font-mono font-bold text-blue-700">{item.unNumber}</td>
                  <td className="p-3 border-r border-gray-200">
                    <div className="font-black text-gray-900 uppercase">{item.properShippingName}</div>
                    {item.subsidiaryRisk && <div className="text-[9px] font-bold text-red-500 mt-1">SUBSIDIARY RISK: {item.subsidiaryRisk}</div>}
                    <div className="text-[9px] text-gray-400 mt-1 uppercase italic">{item.numberOfPackages} x {item.kindOfPackages}</div>
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center font-bold">{item.classDivision}</td>
                  <td className="p-3 border-r border-gray-200 text-center font-bold italic">{item.packingGroup}</td>
                  <td className="p-3 border-r border-gray-200 text-center">
                    <div className="font-bold">{item.netQuantity?.value}</div>
                    <div className="text-[9px] font-bold text-gray-400 uppercase">{item.netQuantity?.unit}</div>
                  </td>
                  <td className="p-3 text-center">
                    <div className="font-bold">{item.grossMass?.value}</div>
                    <div className="text-[9px] font-bold text-gray-400 uppercase">{item.grossMass?.unit}</div>
                  </td>
                </tr>
              )) : (
                <tr><td colSpan={6} className="p-8 text-center text-gray-300 italic uppercase tracking-widest text-[10px]">No Dangerous Goods Declared</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Certification Section */}
        <div className="border-t border-gray-300">
           <div className="p-6 bg-gray-50 border-b border-gray-200">
              <h2 className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] mb-4">Container Packing Certificate / Shipper's Declaration</h2>
              
              <div className="text-xs text-gray-700 leading-relaxed mb-6 font-medium text-justify italic">
                {declarationStatement || "I hereby declare that the contents of this consignment are fully and accurately described above by the proper shipping name, and are classified, packaged, marked and labelled/placarded, and are in all respects in proper condition for transport according to the applicable international and national governmental regulations."}
              </div>

              <div className="grid grid-cols-2 gap-y-3">
                 {[
                   { label: "Container Clean", checked: containerClean },
                   { label: "Container Dry", checked: containerDry },
                   { label: "Packages Not Damaged", checked: packagesNotDamaged },
                   { label: "No Incompatible Substances", checked: noIncompatibleSubstances },
                 ].map((check, i) => (
                   <div key={i} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 border-2 flex items-center justify-center rounded-sm ${check.checked ? "bg-green-600 border-green-600 text-white" : "border-gray-300 bg-white"}`}>
                        {check.checked && <span className="text-[10px]">✓</span>}
                      </div>
                      <span className="text-[10px] font-bold text-gray-600 uppercase tracking-tight">{check.label}</span>
                   </div>
                 ))}
              </div>
           </div>

           {/* Signatures */}
           <div className="grid grid-cols-2">
              <div className="p-6 border-r border-gray-300 min-h-[160px] flex flex-col justify-between">
                 <div>
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Packing Company / Place</label>
                    <div className="text-sm font-bold uppercase">{packingCompany || "-"}</div>
                    <div className="text-[10px] text-gray-500 uppercase">{placeOfPacking}</div>
                 </div>
                 <div className="border-t border-gray-100 pt-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                   Place and Date
                 </div>
              </div>
              <div className="p-6 min-h-[160px] flex flex-col justify-between bg-white relative">
                 <div>
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Declarant Signature</label>
                    <div className="text-sm font-black uppercase text-blue-900">{declarantName || "Electronic Identity Verified"}</div>
                    <div className="text-[9px] text-gray-500 font-bold italic mt-1">{packingDate}</div>
                 </div>
                 <div className="mt-4 flex items-center space-x-2">
                    <div className="px-2 py-1 bg-green-50 text-green-700 border border-green-100 rounded text-[8px] font-black uppercase tracking-tighter">
                      Verified by Chaindox
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-[9px] font-bold text-gray-400 uppercase tracking-widest">
          <div>UN Standard Layout Key Compatible</div>
          <div className="flex items-center space-x-2">
            <span>Powered by</span>
            <span className="text-[11px] font-black text-blue-900 tracking-tighter uppercase">Chaindox</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}