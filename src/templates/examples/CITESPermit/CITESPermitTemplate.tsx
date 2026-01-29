import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { CITESPermit, CITESPermitSchema } from "./types";

export const CITESPermitTemplate: FunctionComponent<
  TemplateProps<CITESPermitSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as CITESPermit;

  const {
    // --- Header Information ---
    permitCertificateNumber,
    documentType,
    validUntil,
    dateOfIssue,

    // --- Authorities & Parties ---
    managementAuthority: {
      authorityName,
      authorityCode,
      country: authorityCountry,
    } = {},
    importer: {
      name: importerName,
      address: importerAddress,
      country: importerCountry,
    } = {},
    exporter: {
      name: exporterName,
      address: exporterAddress,
      country: exporterCountry,
    } = {},
    locationOfLiveAnimals: {
      facilityName,
      address: facilityAddress,
    } = {},

    // --- Species / Specimen Details ---
    speciesInformation = [],

    // --- Customs Endorsement ---
    endorsement: {
      quantityActuallyExported: {
        value: actualQty = undefined,
        unit: actualUnit = undefined
      } = {},
      portOfExport,
      customsSignature,
      customsStamp,
    } = {},
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
        
        {/* --- Header Section --- */}
        <div className="flex justify-between items-start border-b-4 border-gray-900 pb-6 mb-0">
          <div className="flex-1">
            <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-1 text-gray-900">
              CITES
            </h1>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">
              Convention on International Trade in Endangered Species of Wild Fauna and Flora
            </p>
            <div className="inline-block bg-gray-900 text-white px-3 py-1">
               <span className="text-[10px] font-black uppercase tracking-widest">{documentType || "EXPORT PERMIT"}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] uppercase text-gray-400 font-bold mb-1 tracking-widest">Permit No.</p>
            <p className="text-xl font-mono font-bold text-blue-900">{permitCertificateNumber || "PENDING"}</p>
            <div className="mt-2 text-[10px] font-bold uppercase text-red-600 border border-red-200 bg-red-50 px-2 py-1 inline-block">
               Valid Until: {validUntil || "N/A"}
            </div>
          </div>
        </div>

        {/* --- Parties Grid --- */}
        <div className="grid grid-cols-2">
          <InfoBox 
            label="Exporter / Consignor" 
            value={`${exporterName}\n${exporterAddress}\n${exporterCountry}`} 
            className="border-t-0 border-l-0"
          />
          <InfoBox 
            label="Importer / Consignee" 
            value={`${importerName}\n${importerAddress}\n${importerCountry}`} 
            className="border-t-0 border-r-0 border-l-0"
          />
          
          <InfoBox 
            label="Management Authority" 
            value={`${authorityName}\n${authorityCountry}\nCode: ${authorityCode}`} 
            className="border-t-0 border-l-0 border-b-0 col-span-2 bg-gray-50" 
          />
        </div>

        {/* --- Live Animals Location (Conditional) --- */}
        {(facilityName || facilityAddress) && (
          <div className="border border-gray-300 border-t-0 border-x-0 bg-yellow-50 p-3">
             <label className="block text-[9px] uppercase font-black text-yellow-700 mb-1 tracking-widest">Location of Live Animals</label>
             <div className="text-xs font-bold uppercase text-gray-800">{facilityName}, {facilityAddress}</div>
          </div>
        )}

        {/* --- Species Table (The Core CITES Data) --- */}
        <div className="border-x border-b border-gray-300 mt-0">
          <table className="w-full text-left table-fixed border-collapse">
            <thead className="bg-gray-800 text-white text-[9px] font-black uppercase tracking-widest">
              <tr>
                <th className="p-3 w-5/12 border-r border-gray-700">Scientific & Common Name</th>
                <th className="p-3 w-1/12 text-center border-r border-gray-700">Appx.</th>
                <th className="p-3 w-1/12 text-center border-r border-gray-700">Source</th>
                <th className="p-3 w-1/12 text-center border-r border-gray-700">Purpose</th>
                <th className="p-3 w-2/12 text-center border-r border-gray-700">Quantity</th>
                <th className="p-3 w-2/12 text-center">Origin</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {speciesInformation.length > 0 ? speciesInformation.map((spec, i) => (
                <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="p-3 border-r border-gray-200">
                    <div className="font-bold text-gray-900 italic serif text-sm">{spec.scientificName}</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase mt-1">{spec.commonName}</div>
                    <div className="text-[9px] text-gray-400 mt-1">{spec.descriptionOfSpecimens}</div>
                    {spec.marks && spec.marks.length > 0 && (
                      <div className="mt-1 text-[8px] font-mono text-gray-500 bg-gray-100 p-1 rounded inline-block">
                        ID: {spec.marks.join(", ")}
                      </div>
                    )}
                  </td>
                  <td className="p-3 text-center border-r border-gray-200 font-black text-lg text-gray-400">
                     {spec.appendix}
                  </td>
                  <td className="p-3 text-center border-r border-gray-200 font-bold">
                     <span className="border border-gray-300 px-1.5 py-0.5 rounded text-[10px]">{spec.sourceCode}</span>
                  </td>
                  <td className="p-3 text-center border-r border-gray-200 font-bold">
                     <span className="border border-gray-300 px-1.5 py-0.5 rounded text-[10px]">{spec.purposeCode}</span>
                  </td>
                  <td className="p-3 text-center border-r border-gray-200">
                    <div className="font-black">{spec.quantity?.value}</div>
                    <div className="text-[9px] uppercase text-gray-400 font-bold">{spec.quantity?.unit}</div>
                  </td>
                  <td className="p-3 text-center">
                    <div className="font-bold">{spec.countryOfOrigin}</div>
                    {spec.permitNumberOfOrigin && (
                      <div className="text-[8px] text-gray-400 mt-1 break-all">Ref: {spec.permitNumberOfOrigin}</div>
                    )}
                  </td>
                </tr>
              )) : (
                <tr><td colSpan={6} className="p-8 text-center text-gray-300 italic uppercase">No species listed</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* --- Customs Endorsement (Box 14) --- */}
        <div className="grid grid-cols-12 border-x border-b border-gray-300">
           <div className="col-span-8 p-6 bg-gray-50 border-r border-gray-300">
              <h2 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-4">Customs Endorsement / Export Validation</h2>
              <div className="grid grid-cols-2 gap-6">
                 <div>
                    <label className="block text-[8px] font-black text-gray-400 uppercase mb-1">Quantity Actually Exported</label>
                    <div className="text-xl font-black text-gray-900 border-b-2 border-gray-300 pb-1 inline-block min-w-[100px]">
                       {actualQty || "_______"} <span className="text-sm text-gray-500">{actualUnit}</span>
                    </div>
                 </div>
                 <div>
                    <label className="block text-[8px] font-black text-gray-400 uppercase mb-1">Port of Export</label>
                    <div className="text-sm font-bold uppercase">{portOfExport || "________________"}</div>
                 </div>
              </div>
           </div>
           <div className="col-span-4 p-6 flex flex-col justify-between items-center text-center bg-gray-100 relative overflow-hidden">
               {/* Digital Stamp Representation */}
               <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <div className="border-4 border-gray-400 rounded-full w-24 h-24"></div>
               </div>
               
               <div className="z-10 w-full">
                  <label className="block text-[8px] font-black text-gray-400 uppercase mb-2">Customs Official Signature</label>
                  <div className="font-script text-xl text-blue-900 mb-2">{customsSignature || "Signed Digitally"}</div>
                  <div className="h-px bg-gray-300 w-full"></div>
               </div>
               <div className="z-10">
                  <div className="text-[9px] font-bold text-gray-500 uppercase">{customsStamp || "Digital Endorsement"}</div>
               </div>
           </div>
        </div>

        {/* --- Execution & Verification --- */}
        <div className="grid grid-cols-2">
          <div className="p-6 border-r border-gray-300 border-l border-b min-h-[140px] flex flex-col justify-between">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Management Authority Signature</label>
            <div>
               <div className="text-sm font-black uppercase text-gray-900">{authorityName}</div>
               <div className="text-[10px] font-mono font-bold text-gray-500 mt-1">Date: {dateOfIssue}</div>
            </div>
            <div className="mt-2 flex items-center space-x-2">
               <div className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-sm text-[8px] font-black uppercase tracking-widest">
                 Authority Verified
               </div>
            </div>
          </div>
          <div className="p-6 border-r border-b border-gray-300 min-h-[140px] flex flex-col justify-between bg-white">
             <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Blockchain Verification</label>
             <div className="space-y-1">
                <div className="text-[10px] font-mono text-gray-400 break-all leading-tight">HASH: {data.documentHash?.substring(0, 32)}...</div>
             </div>
             <div className="text-[9px] font-bold text-gray-300 uppercase tracking-widest border-t border-gray-200 pt-3 flex items-center gap-2">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               Valid Chaindox Credential
             </div>
          </div>
        </div>

        {/* --- Footer --- */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-[9px] font-bold text-gray-400 uppercase tracking-widest">
          <div>UN / CITES Standard Layout</div>
          <div className="flex items-center space-x-2">
            <span>Powered by</span>
            <span className="text-[11px] font-black text-blue-900 tracking-tighter uppercase">Chaindox</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}