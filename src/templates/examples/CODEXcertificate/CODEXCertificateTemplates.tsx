import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { CODEXCertificate, CODEXCertificateSchema } from "./types";

export const CODEXCertificateTemplate: FunctionComponent<
  TemplateProps<CODEXCertificateSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as CODEXCertificate;

  const {
    // --- Header Information ---
    certificateNumber,

    // --- Authorities & Officials ---
    competentAuthority: {
      authorityName,
      authorityCode,
      country: authorityCountry,
    } = {},
    certifyingBody: {
      bodyName,
      bodyId,
    } = {},
    officialInspector: {
      name: inspectorName,
      title: inspectorTitle,
      dateOfSigning: signingDate,
    } = {},

    // --- Parties ---
    consignor: {
      name: consignorName,
      address: consignorAddress,
    } = {},
    consignee: {
      name: consigneeName,
      address: consigneeAddress,
    } = {},

    // --- Trade Route ---
    countryOfOrigin,
    countryOfDestination,

    // --- Goods Details ---
    productIdentification: {
      descriptionOfProduct,
      hsCode,
      natureOfFood,
      numberOfPackages,
      netWeight: { value: weightValue = undefined, unit: weightUnit = undefined } = {},
      identificationMarks,
    } = {},

    // --- Traceability Data ---
    traceabilityData: {
      lotBatchNumber,
      dateOfProduction,
      dateOfExpiry,
      bestBeforeDate,
    } = {},

    // --- Health & Compliance ---
    attestations: {
      publicHealthAttestation = [],
      fairTradeAttestation = [],
      temperatureDeclaration: {
        requiredTemperature: { value: tempVal = undefined, unit: tempUnit = undefined } = {},
        storageConditions = undefined,
      } = {},
    } = {},
  } = data;

  // Professional data box helper
  const DataBox = ({ label, value, className = "", isCenter = false }: { label: string; value?: string | React.ReactNode; className?: string; isCenter?: boolean }) => (
    <div className={`border border-gray-300 p-3 min-h-[85px] ${className} ${isCenter ? "text-center" : ""}`}>
      <label className="block text-[9px] uppercase font-black text-gray-400 mb-2 tracking-widest leading-none">
        {label}
      </label>
      <div className="text-sm font-bold uppercase text-gray-800 leading-tight whitespace-pre-line">
        {value || <span className="text-gray-200 italic font-normal lowercase">not declared</span>}
      </div>
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-gray-900 border border-gray-200 shadow-2xl my-10 relative">
        
        {/* --- Official Header --- */}
        <div className="flex justify-between items-start border-b-4 border-gray-900 pb-6 mb-0">
          <div className="flex-1">
            <h1 className="text-2xl font-black uppercase tracking-tighter leading-none mb-2">
              Official Certificate
            </h1>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">
              Generic Model for Food Inspection & Certification
            </p>
            <div className="inline-block bg-gray-100 px-3 py-1 border border-gray-200">
               <span className="text-[9px] font-black uppercase text-gray-500 mr-2">Authority:</span>
               <span className="text-[10px] font-black uppercase text-blue-900">{authorityName}</span>
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="bg-blue-900 text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-3">
              Codex Alimentarius Standard
            </div>
            <p className="text-[10px] uppercase text-gray-400 font-bold mb-1 tracking-widest">Certificate No.</p>
            <p className="text-xl font-mono font-bold text-gray-900">{certificateNumber || "PENDING"}</p>
          </div>
        </div>

        {/* --- Top Grid: Authorities & Route --- */}
        <div className="grid grid-cols-2">
          <DataBox 
            label="Consignor (Exporter)" 
            value={`${consignorName}\n${consignorAddress}`} 
            className="border-t-0 border-l-0"
          />
          <DataBox 
            label="Consignee (Importer)" 
            value={`${consigneeName}\n${consigneeAddress}`} 
            className="border-t-0 border-r-0 border-l-0"
          />
          <div className="grid grid-cols-2 border-l-0">
             <DataBox label="Country of Origin" value={countryOfOrigin} className="border-t-0 border-l-0" />
             <DataBox label="Country of Destination" value={countryOfDestination} className="border-t-0 border-r-0 border-l-0" />
          </div>
          <DataBox 
            label="Certifying Body" 
            value={
              <div className="flex flex-col">
                <span>{bodyName}</span>
                <span className="text-[10px] text-gray-400 font-mono mt-1">ID: {bodyId}</span>
              </div>
            } 
            className="border-t-0 border-r-0 border-l-0" 
          />
        </div>

        {/* --- Product Identification --- */}
        <div className="bg-gray-50 border-x border-gray-300 p-4 border-b">
          <h2 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3">Product Identification</h2>
          <div className="grid grid-cols-12 gap-4">
             <div className="col-span-6">
                <label className="text-[8px] font-bold text-gray-400 uppercase">Description</label>
                <div className="text-sm font-black uppercase text-gray-900">{descriptionOfProduct}</div>
             </div>
             <div className="col-span-3">
                <label className="text-[8px] font-bold text-gray-400 uppercase">HS Code</label>
                <div className="text-sm font-mono font-bold text-blue-700">{hsCode}</div>
             </div>
             <div className="col-span-3">
                <label className="text-[8px] font-bold text-gray-400 uppercase">Nature of Food</label>
                <div className="text-sm font-bold">{natureOfFood}</div>
             </div>
          </div>
        </div>

        {/* --- Weights & Packaging --- */}
        <div className="grid grid-cols-3 border-x border-b border-gray-300">
           <DataBox label="Total Packages" value={numberOfPackages} className="border-l-0 border-t-0 border-b-0" isCenter />
           <DataBox label="Net Weight" value={`${weightValue} ${weightUnit}`} className="border-l-0 border-t-0 border-b-0" isCenter />
           <DataBox label="Shipping Marks / ID" value={identificationMarks} className="border-r-0 border-l-0 border-t-0 border-b-0 font-mono text-[11px]" />
        </div>

        {/* --- Traceability Data --- */}
        <div className="grid grid-cols-4 border-x border-b border-gray-300">
           <DataBox label="Lot / Batch No." value={lotBatchNumber} className="border-l-0 border-t-0 border-b-0 bg-yellow-50/30" />
           <DataBox label="Production Date" value={dateOfProduction} className="border-l-0 border-t-0 border-b-0" />
           <DataBox label="Expiry Date" value={dateOfExpiry} className="border-l-0 border-t-0 border-b-0" />
           <DataBox label="Best Before" value={bestBeforeDate} className="border-r-0 border-l-0 border-t-0 border-b-0" />
        </div>

        {/* --- Storage Conditions --- */}
        <div className="p-4 bg-gray-900 text-white flex justify-between items-center">
           <div>
              <label className="block text-[8px] font-black uppercase text-gray-500 mb-1">Temperature / Storage Requirements</label>
              <div className="text-xs font-bold uppercase tracking-widest">
                {storageConditions || "Standard Storage"}
              </div>
           </div>
           {tempVal && (
             <div className="text-right">
                <div className="text-2xl font-black">{tempVal}°<span className="text-sm text-gray-400">{tempUnit}</span></div>
             </div>
           )}
        </div>

        {/* --- Official Attestations (The Core Section) --- */}
        <div className="border border-t-0 border-gray-300 p-8">
           <h2 className="text-[11px] font-black uppercase text-gray-400 tracking-[0.2em] mb-6 text-center underline decoration-blue-200 underline-offset-8">Official Health Attestations</h2>
           
           <div className="space-y-6">
              {/* Public Health Section */}
              <div className="space-y-4">
                 {publicHealthAttestation.map((att, i) => (
                   <div key={i} className="flex items-start space-x-4">
                      <div className={`mt-1 w-5 h-5 border-2 rounded-sm flex items-center justify-center flex-shrink-0 ${att.isAttested ? "bg-green-600 border-green-600 text-white" : "border-gray-200 bg-white"}`}>
                        {att.isAttested && <span className="text-xs">✓</span>}
                      </div>
                      <div className="text-xs font-medium text-gray-700 leading-relaxed text-justify">
                         {att.attestationStatement}
                      </div>
                   </div>
                 ))}
              </div>

              {/* Fair Trade / Quality Section */}
              {fairTradeAttestation.length > 0 && (
                <div className="pt-6 border-t border-gray-100">
                   <label className="block text-[9px] font-black text-blue-400 uppercase tracking-widest mb-3">Quality & Fair Trade Certifications</label>
                   <div className="grid grid-cols-2 gap-4">
                      {fairTradeAttestation.map((att, i) => (
                        <div key={i} className="flex items-center space-x-3 p-2 bg-gray-50 rounded border border-gray-100">
                           <div className={`w-3 h-3 rounded-full ${att.isAttested ? "bg-blue-500" : "bg-gray-200"}`}></div>
                           <span className="text-[10px] font-bold text-gray-600 uppercase tracking-tight">{att.attestationStatement}</span>
                        </div>
                      ))}
                   </div>
                </div>
              )}
           </div>
        </div>

        {/* --- Inspector Certification --- */}
        <div className="grid grid-cols-2 mt-0">
          <div className="p-6 border-r border-gray-300 border-l border-b min-h-[160px] flex flex-col justify-between">
             <div>
                <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Official Inspector</label>
                <div className="text-sm font-black uppercase text-gray-900">{inspectorName}</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase">{inspectorTitle}</div>
             </div>
             <div className="border-t border-gray-100 pt-3 flex justify-between items-end">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Signed at {authorityCountry}</div>
                <div className="text-[10px] font-mono font-bold text-gray-500">{signingDate}</div>
             </div>
          </div>
          <div className="p-6 border-r border-b border-gray-300 min-h-[160px] flex flex-col justify-between bg-gray-50 relative overflow-hidden">
             {/* Security Background */}
             <div className="absolute top-0 right-0 p-2 opacity-5">
                <div className="text-6xl font-black select-none">OFFICIAL</div>
             </div>

             <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Electronic Validation</label>
             <div className="space-y-1">
                <div className="text-[10px] font-mono text-gray-400 break-all leading-tight">HASH: {data.documentHash?.substring(0, 32)}...</div>
                <div className="flex items-center space-x-2 mt-2">
                   <div className="px-2 py-0.5 bg-green-100 text-green-700 border border-green-200 rounded-sm text-[8px] font-black uppercase tracking-widest">
                     Credential Validated
                   </div>
                </div>
             </div>
             <div className="text-[9px] font-bold text-gray-300 uppercase tracking-widest border-t border-gray-200 pt-3">
               Verified via Chaindox Traceability
             </div>
          </div>
        </div>

        {/* --- Footer --- */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-[9px] font-bold text-gray-400 uppercase tracking-widest">
          <div className="flex items-center space-x-2">
            <span className="text-gray-300 italic">This certificate complies with the Codex Guidelines (CAC/GL 38-2001)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Powered by</span>
            <span className="text-[11px] font-black text-blue-900 tracking-tighter uppercase">Chaindox</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}